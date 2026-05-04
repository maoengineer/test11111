/**
 * Rate Limiting Utility
 *
 * Uses Upstash Redis with a sliding window algorithm.
 * Falls back to a no-op in development if UPSTASH env vars are not set.
 */
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/** Lazily create Redis client — only when env vars are present */
function createRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

const redis = createRedis();

/**
 * Standard API rate limiter: 20 requests per 10 seconds per identifier.
 * Used on search, downloads, and general API endpoints.
 */
export const apiRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, "10 s"),
      analytics: true,
      prefix: "softdrop:api",
    })
  : null;

/**
 * Strict rate limiter for auth endpoints: 5 attempts per minute.
 * Prevents brute-force attacks on login/register.
 */
export const authRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      analytics: true,
      prefix: "softdrop:auth",
    })
  : null;

/**
 * Helper to check rate limit in API route handlers.
 * Returns { limited: true } if the limit is exceeded.
 *
 * Usage:
 *   const { limited, response } = await checkRateLimit(authRatelimit, ip);
 *   if (limited) return response;
 */
export async function checkRateLimit(
  limiter: typeof apiRatelimit,
  identifier: string
): Promise<{ limited: boolean; response?: Response }> {
  if (!limiter) {
    // Upstash not configured — skip rate limiting (dev mode)
    return { limited: false };
  }

  const { success, limit, remaining, reset } = await limiter.limit(identifier);

  if (!success) {
    return {
      limited: true,
      response: new Response(
        JSON.stringify({
          error: "Too many requests. Please slow down.",
          retryAfter: Math.ceil((reset - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
            "Retry-After": Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        }
      ),
    };
  }

  return { limited: false };
}
