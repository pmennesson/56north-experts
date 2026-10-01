"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const fallback = isFr ? path.slice(3) || "/" : path === "/" ? "/fr" : `/fr${path}`;
  const other = isFr ? "en" : "fr";
  // Pages whose slug differs per language (articles) declare it in <link rel="alternate" hreflang>.
  const [target, setTarget] = useState(fallback);
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${other}"]`);
    setTarget(link ? new URL(link.href).pathname : fallback);
  }, [fallback, other]);
  return (
    <Link href={target} hrefLang={isFr ? "en" : "fr"} lang={isFr ? "en" : "fr"} aria-label={label} className={className}>
      {short}
    </Link>
  );
}
