import Link from "next/link";
import { site } from "@/lib/site";
import { getLocale, localePath, type Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/primitives";
import { LangSwitch } from "@/components/LangSwitch";
import { MobileMenu } from "@/components/MobileMenu";

/** Thin translucent global nav, 48px, blur behind. Same system as experts.56north.io. */
export async function Header({ t }: { t: Dictionary["nav"] }) {
  const locale = await getLocale();
  const home = localePath(locale, "/");
  const anchor = (h: string) => `${home === "/" ? "/" : home}${h}`;
  const links = [...t.items.map((i) => ({ href: anchor(i.href), label: i.label })), { href: site.experts, label: t.experts }];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-12 items-center justify-between gap-6">
        <Link href={home} className="text-[15px] font-semibold tracking-[-0.01em]" aria-label={site.name}>
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 whitespace-nowrap lg:flex">
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
          <Link
            href={anchor("#diagnostic")}
            className="inline-flex h-7 shrink-0 items-center whitespace-nowrap rounded-full bg-accent px-3.5 text-[12px] text-white transition-colors hover:bg-accent-hover"
          >
            {t.cta}
          </Link>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <LangSwitch label={t.switchLabel} short={t.switchShort} className="flex h-9 items-center px-2 text-[13px] font-medium text-fg-muted" />
          <MobileMenu links={[...links, { href: anchor("#diagnostic"), label: t.cta }]} label={t.openMenu} />
        </div>
      </Container>
    </header>
  );
}
