import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow home page, API routes, and static files
  const allowedPaths = [
    "/", // Home page
    "/api", // API routes
    "/_next", // Next.js internal routes
    "/favicon.ico", // Favicon
    "/robots.txt", // Robots.txt
    "/sitemap.xml", // Sitemap
    "/icons", // Icons directory
    "/images", // Images directory
    // Allow all static files from public directory
    "/andre.webp",
    "/andre.jpg", 
    "/placeholder-logo.png",
    "/placeholder-logo.svg",
    "/placeholder-user.jpg",
    "/placeholder.jpg",
    "/placeholder.svg",
    "/atmojo.webp",
    "/ahmed.webp",
    "/duc.webp",
    "/yun.webp"
  ]

  // Check if the current path is allowed
  const isAllowed = allowedPaths.some(path => 
    pathname === path || pathname.startsWith(path + "/")
  )

  // If not allowed, redirect to home page
  if (!isAllowed) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Keep existing admin authentication logic
  if (
    pathname === "/admin" ||
    (pathname.startsWith("/admin/") && !pathname.startsWith("/admin/login"))
  ) {
    // Check for admin session cookie
    const adminSession = request.cookies.get("admin-session")

    if (!adminSession || adminSession.value !== "authenticated") {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
