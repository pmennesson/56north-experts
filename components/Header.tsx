import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getLinker, type Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/primitives";
import { LangSwitch } from "@/components/LangSwitch";
import { MobileMenu } from "@/components/MobileMenu";

export async function BrandMark() {
  const lp = await getLinker();
  return (
    <Link href={lp("/")} className="flex items-baseline gap-1.5" aria-label={`${siteConfig.name}`}>
      <span className="text-[15px] font-semibold tracking-[-0.01em]">{siteConfig.parent.name}</span>
      <span className="text-[15px] text-fg-muted">Experts</span>
    </Link>
  );
}

/** Thin translucent global nav, 48px, blur behind. */
export async function Header({ t }: { t: Dictionary["nav"] }) {
  const lp = await getLinker();
  const links = [
    { href: lp("/#ecosystems"), label: t.experts },
    { href: lp("/talents"), label: t.talents },
    { href: lp("/insights"), label: t.insights },
    { href: lp("/about"), label: t.about },
    { href: lp("/contact"), label: t.contactShort },
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
          <LangSwitch
            label={t.switchLabel}
            short={t.switchShort}
            className="rounded-full px-2 py-0.5 text-[12px] font-medium text-fg-muted ring-1 ring-line-strong transition-colors hover:text-fg"
          />
        </nav>
        <div className="flex items-center gap-1 md:hidden">
          <LangSwitch
            label={t.switchLabel}
            short={t.switchShort}
            className="flex h-9 items-center px-2 text-[13px] font-medium text-fg-muted"
          />
          <MobileMenu links={links} label={t.openMenu} />
        </div>
      </Container>
    </header>
  );
}
