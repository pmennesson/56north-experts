"use client";

import { Button } from "@/components/ui/primitives";
import { useEffect, useState } from "react";

/**
 * Phone-only bottom bar keeping the primary action one tap away.
 * It stays hidden while the same action is already on screen (elements marked
 * data-primary-cta, e.g. the hero buttons, or the #diagnostic form), so the
 * visitor never sees the same button twice.
 */
export function StickyCtaBar({ href, label }: { href: string; label: string }) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-primary-cta], #diagnostic"));
    if (!targets.length) {
      setHidden(false);
      return;
    }
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
      setHidden(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  // BackToTop and ApplyFab place themselves above the bar: tell them it moved.
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [hidden]);

  return (
    <div
      data-sticky-cta
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/85 px-4 py-3 backdrop-blur-xl md:hidden ${hidden ? "!hidden" : ""}`}
    >
      <Button href={href} className="w-full">
        {label}
      </Button>
    </div>
  );
}
