"use client";

import { useEffect } from "react";

/**
 * On reload, browsers restore the previous scroll position, so a visitor who
 * refreshes lands mid-page. We ask for a fresh start instead.
 *
 * Safari on iOS restores the position late (after hydration, and again on
 * `pageshow` when the page comes back from the back-forward cache), so a single
 * scrollTo in an effect is not enough. Three layers:
 *  1. an inline script, run before paint, that switches restoration to manual;
 *  2. a `pageshow` listener that scrolls to the top when the page is shown;
 *  3. the effect below, as a last resort once React is up.
 * Anchor links (#section) keep working: with a hash in the address, the
 * browser's own scrolling is left alone.
 */
const INLINE = `
try{history.scrollRestoration="manual"}catch(e){}
addEventListener("pageshow",function(){if(!location.hash){scrollTo(0,0);setTimeout(function(){scrollTo(0,0)},0)}});
`;

export function ScrollToTop() {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);
  return <script dangerouslySetInnerHTML={{ __html: INLINE }} />;
}
