import { NextResponse, type NextRequest } from "next/server";

/**
 * Locale routing.
 * - /fr and /fr/*  → served as is (French).
 * - /en and /en/*  → permanent redirect to the unprefixed URL (one URL per page).
 * - anything else → rewritten internally to /en/* (English, no prefix in the address bar).
 * No automatic redirect on browser language: crawlers and shared links must
 * always land on the page they asked for. Visitors switch with the EN/FR link.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/fr" || pathname.startsWith("/fr/")) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, and any path with a file extension (sitemap.xml, robots.txt, llms.txt, images).
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
