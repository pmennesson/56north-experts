"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Same page in the other language: /x (French) ↔ /en/x (English).
 * French pages are prerendered as /fr/x and served at /x (proxy rewrite), so
 * the server may see /fr/x while the browser sees /x: both normalise to /x.
 * Legal pages have different slugs per language.
 */
const pairs: [string, string][] = [
  ["/mentions-legales", "/legal-notice"],
  ["/confidentialite", "/privacy"],
];

export function LangSwitch({ label, short, className = "" }: { label: string; short: string; className?: string }) {
  const raw = usePathname() || "/";
  const path = raw === "/fr" ? "/" : raw.startsWith("/fr/") ? raw.slice(3) : raw;
  const isEn = path === "/en" || path.startsWith("/en/");
  let target: string;
  if (isEn) {
    const p = path.slice(3) || "/";
    target = pairs.find(([, e]) => e === p)?.[0] ?? p;
  } else {
    const p = pairs.find(([f]) => f === path)?.[1] ?? path;
    target = p === "/" ? "/en" : `/en${p}`;
  }
  return (
    <Link href={target} hrefLang={isEn ? "fr" : "en"} lang={isEn ? "fr" : "en"} aria-label={label} className={className}>
      {short}
    </Link>
  );
}
