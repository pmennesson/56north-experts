import { NextResponse, type NextRequest } from "next/server";

/**
 * Locale routing for 56north.io.
 * - /en and /en/*  → served as is (English).
 * - /fr and /fr/*  → permanent redirect to the unprefixed URL (one URL per page).
 * - anything else → rewritten internally to /fr/* (French, no prefix in the address bar).
 * Old .html URLs are redirected in next.config.ts.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/fr${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/|.*\\.).*)"],
};
