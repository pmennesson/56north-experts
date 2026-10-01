"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Same page in the other language: /x ↔ /fr/x.
 * English pages are prerendered as /en/x and served at /x (proxy rewrite), so
 * the server may see /en/x while the browser sees /x: both normalise to /x,
 * which keeps the link identical on both sides (no hydration mismatch).
 */
export function LangSwitch({ label, short, className = "" }: { label: string; short: string; className?: string }) {
  const raw = usePathname() || "/";
  const path = raw === "/en" ? "/" : raw.startsWith("/en/") ? raw.slice(3) : raw;
  const isFr = path === "/fr" || path.startsWith("/fr/");
  const target = isFr ? path.slice(3) || "/" : path === "/" ? "/fr" : `/fr${path}`;
  return (
    <Link href={target} hrefLang={isFr ? "en" : "fr"} lang={isFr ? "en" : "fr"} aria-label={label} className={className}>
      {short}
    </Link>
  );
}
