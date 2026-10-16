"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Floating "Apply" pill, bottom left, on every page: experts can reach the
 * application form at any moment. On pages that carry the phone-only sticky
 * call-to-action bar, the pill sits just above that bar (same rule as BackToTop).
 */
const GAP = 16;

export function ApplyFab({ href, label }: { href: string; label: string }) {
  const [bottom, setBottom] = useState(GAP);

  useEffect(() => {
    const place = () => {
      const bar = document.querySelector<HTMLElement>("[data-sticky-cta]");
      const visible = bar && getComputedStyle(bar).display !== "none";
      setBottom(visible ? bar.offsetHeight + GAP : GAP);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  return (
    <Link
      href={href}
      style={{ bottom }}
      className="fixed left-4 z-40 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgb(0_0_0/0.45)] transition-transform duration-200 ease-out hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 md:left-8"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="8" r="4" />
        <path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        <path d="M19 8v6M16 11h6" />
      </svg>
      {label}
    </Link>
  );
}
