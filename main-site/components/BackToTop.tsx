"use client";

import { useEffect, useState } from "react";

/**
 * A round arrow, bottom right, that appears once the visitor has scrolled past
 * the first screen and brings them back to the top in one tap.
 * On pages that carry the sticky call-to-action bar (phones only), the arrow
 * sits just above that bar; elsewhere it hugs the corner.
 */
const LABEL: Record<string, string> = { fr: "Revenir en haut de la page", en: "Back to top" };
const GAP = 16;

export function BackToTop() {
  const [shown, setShown] = useState(false);
  const [label, setLabel] = useState(LABEL.fr);
  const [bottom, setBottom] = useState(GAP);

  useEffect(() => {
    setLabel(LABEL[document.documentElement.lang] ?? LABEL.fr);
    const place = () => {
      const bar = document.querySelector<HTMLElement>("[data-sticky-cta]");
      const visible = bar && getComputedStyle(bar).display !== "none";
      setBottom(visible ? bar.offsetHeight + GAP : GAP);
    };
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.8);
    place();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", place);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={label}
      title={label}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      style={{ bottom }}
      className={`fixed right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-fg text-canvas shadow-[0_10px_30px_-10px_rgb(0_0_0/0.4)] transition-all duration-300 ease-out hover:bg-accent md:right-8 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
