import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

/**
 * Middleware to protect dashboard routes.
 * Public routes: /, /explore, /api/auth/*
 * Protected routes: /chat, /learn, /playground, /api/* (except auth)
 */
export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Public routes — always accessible
  const publicPaths = ["/", "/explore", "/auth"];
  const isPublicPath = publicPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
  const isAuthApi = pathname.startsWith("/api/auth");
  const isPublicApi = pathname.startsWith("/api/architectures");

  if (isPublicPath || isAuthApi || isPublicApi) {
    return NextResponse.next();
  }

  // Protected routes — require authentication
  if (!req.auth) {
    const signInUrl = new URL("/api/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     * - public folder assets
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
