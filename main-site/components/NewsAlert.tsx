import Link from "next/link";

/**
 * "News alert" ticker at the top of the home page: the latest published articles
 * scroll in the pill like a news feed. The red label links to the list of articles;
 * each headline links to its article. Pauses on hover and keyboard focus; with
 * reduced motion, only the latest headline is shown, still.
 */
export type AlertItem = { title: string; href: string };

const Bell = () => (
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
);

function Track({ items, hidden }: { items: AlertItem[]; hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.href} className="flex shrink-0 items-center">
          <Link
            href={it.href}
            tabIndex={hidden ? -1 : undefined}
            className="whitespace-nowrap px-1 text-fg/85 transition-colors hover:text-fg hover:underline focus-visible:text-fg"
          >
            {it.title}
          </Link>
          <span className="px-3 text-fg-subtle" aria-hidden>
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

export function NewsAlert({ label, all, allHref, items }: { label: string; all: string; allHref: string; items: AlertItem[] }) {
  if (items.length === 0) return null;
  // ~7 s per headline keeps every title readable whatever the count.
  const duration = `${Math.max(20, items.length * 7)}s`;
  return (
    <div className="mb-7 flex w-full max-w-[680px] items-center gap-2.5 rounded-full bg-canvas-alt py-1.5 pl-1.5 pr-1.5 text-left text-[13px] ring-1 ring-line sm:mb-9">
      <Link
        href={allHref}
        aria-label={all}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-alert px-2.5 py-1 text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Bell />
        {label}
      </Link>
      <div
        className="news-ticker relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-24px),transparent)]"
        role="region"
        aria-label={label}
      >
        <div className="news-ticker-track flex w-max" style={{ animationDuration: duration }}>
          <Track items={items} />
          <Track items={items} hidden />
        </div>
      </div>
    </div>
  );
}
