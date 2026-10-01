"use client";

import Link from "next/link";
import { useRef } from "react";

/**
 * Mobile menu on a native <details> (works before JS loads).
 * Once hydrated, picking a link closes it: the layout persists across
 * navigations, so without this the panel would stay open on the new page.
 */
export function MobileMenu({ links, label }: { links: { href: string; label: string }[]; label: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");
  return (
    <details ref={ref} className="group relative">
      <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
        <span className="sr-only">{label}</span>
        <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
          <path d="M2 5.5h12M2 10.5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="fixed inset-x-0 top-12 border-b border-line bg-canvas/95 px-6 pb-8 pt-4 backdrop-blur-xl">
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={close} className="block py-3 text-2xl font-semibold tracking-[-0.02em]">
            {l.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
