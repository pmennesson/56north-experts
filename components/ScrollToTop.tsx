"use client";

import { useEffect } from "react";

/**
 * On reload, browsers (Safari above all) restore the previous scroll position,
 * so a visitor who refreshes lands mid-page. We ask for a fresh start instead.
 * Anchor links (#section) keep working: when the address carries a hash, the
 * browser's own scrolling is left alone.
 */
export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);
  return null;
}
