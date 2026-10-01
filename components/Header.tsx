import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/primitives";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-baseline gap-1.5" aria-label={`${siteConfig.name} home`}>
      <span className="text-[15px] font-semibold tracking-[-0.01em]">{siteConfig.parent.name}</span>
      <span className="text-[15px] text-fg-muted">Experts</span>
    </Link>
  );
}

/** Thin translucent global nav, 48px, blur behind. */
export function Header({ t }: { t: Dictionary["nav"] }) {
  const links = [
    { href: "/#ecosystems", label: t.experts },
    { href: "/talents", label: t.talents },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contactShort },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-12 items-center justify-between">
        <BrandMark />
        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-fg/80 transition-colors hover:text-fg">
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Zero-JS mobile menu */}
        <details className="group relative md:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
              <path d="M2 5.5h12M2 10.5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="fixed inset-x-0 top-12 border-b border-line bg-canvas/95 px-6 pb-8 pt-4 backdrop-blur-xl">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="block py-3 text-2xl font-semibold tracking-[-0.02em]">
                {l.label}
              </Link>
            ))}
          </div>
        </details>
      </Container>
    </header>
  );
}
