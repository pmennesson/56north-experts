import Link from "next/link";
import { Chevron } from "@/components/ui/primitives";

/**
 * "News alert" pill at the top of the home page: the latest published article,
 * linking to the list of articles. Rendered only when at least one article is published.
 */
export function NewsAlert({ label, title, href, all }: { label: string; title: string; href: string; all: string }) {
  return (
    <Link
      href={href}
      aria-label={`${label}. ${title}. ${all}`}
      className="group mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full bg-canvas-alt py-1.5 pl-1.5 pr-3.5 text-left text-[13px] ring-1 ring-line transition-shadow duration-300 hover:ring-line-strong sm:mb-9"
    >
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-alert px-2.5 py-1 text-[12px] font-semibold text-white">
        <span className="relative flex h-3.5 w-3.5 items-center justify-center" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
          <svg viewBox="0 0 16 16" fill="none" className="relative h-3.5 w-3.5">
            <path
              d="M8 1.75a4 4 0 0 0-4 4v2.1c0 .5-.17.98-.48 1.37l-.9 1.13a.75.75 0 0 0 .58 1.22h9.6a.75.75 0 0 0 .58-1.22l-.9-1.13A2.2 2.2 0 0 1 12 7.85v-2.1a4 4 0 0 0-4-4Z"
              fill="currentColor"
            />
            <path d="M6.4 13.1a1.7 1.7 0 0 0 3.2 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </span>
        {label}
      </span>
      <span className="truncate text-fg/85 transition-colors group-hover:text-fg">{title}</span>
      <Chevron className="h-3 w-3 shrink-0 text-fg-subtle transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
