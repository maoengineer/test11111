/**
 * Next.js 16 Proxy (formerly "middleware")
 *
 * In Next.js 16, the `middleware.ts` file was renamed to `proxy.ts`
 * AND the exported function must be named `proxy` (not `middleware`).
 *
 * This file runs at the Edge before every matching request.
 *
 * Responsibilities:
 * 1. Route protection (admin/profile pages require authentication)
 * 2. Role-based access control (admin routes require ADMIN or EDITOR role)
 *
 * Full auth integration (NextAuth v5) is added in Step 3.
 * For now this passes all requests through so the build succeeds.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Routes that require any authenticated user */
const AUTH_ROUTES = ["/profile"];

/** Routes that require ADMIN or EDITOR role */
const ADMIN_ROUTES = [
  "/dashboard",
  "/posts/new",
  "/posts/edit",
  "/categories",
  "/users",
  "/comments",
  "/files",
  "/analytics",
  "/settings",
];

/** Routes that redirect already-authenticated users away */
const PUBLIC_AUTH_ROUTES = ["/login", "/register"];

// Suppress unused variable warnings — these will be used in Step 3
void AUTH_ROUTES;
void ADMIN_ROUTES;
void PUBLIC_AUTH_ROUTES;

/**
 * The proxy function — Next.js 16's replacement for `middleware`.
 * Must be named exactly "proxy" for Next.js to recognize it.
 */
export function proxy(request: NextRequest) {
  // Placeholder — full auth check implemented in Step 3
  // NextAuth v5's auth() reads the JWT session cookie and checks roles here
  void request;
  return NextResponse.next();
}

export const config = {
  // Match all routes except Next.js internals and static assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)).*)",
  ],
};
