/**
 * Next.js Edge Middleware
 *
 * Runs before every request to handle:
 * 1. Route protection (admin/profile pages require authentication)
 * 2. Role-based access control (admin pages require ADMIN or EDITOR role)
 *
 * Uses NextAuth v5's auth() helper which works at the Edge.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Routes that require any authenticated user */
const AUTH_ROUTES = ["/profile"];

/** Routes that require ADMIN or EDITOR role */
const ADMIN_ROUTES = ["/dashboard", "/posts/new", "/posts/edit", "/categories", "/users", "/comments", "/files", "/analytics", "/settings"];

/** Routes that redirect authenticated users away (login, register) */
const PUBLIC_AUTH_ROUTES = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Placeholder: full auth check implemented in Step 3 ---
  // In Step 3, this will be replaced with NextAuth v5's auth() integration
  // which reads the JWT session from the cookie and checks roles.

  // For now, just pass all requests through
  return NextResponse.next();
}

export const config = {
  // Match all routes except static files, _next internals, and favicon
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)).*)",
  ],
};
