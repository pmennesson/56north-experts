import Link from "next/link";
import { getEcosystems } from "@/lib/ecosystems";
import { fill, getLocale, localePath, type Dictionary } from "@/lib/i18n";
import { VendorMark } from "@/components/VendorMark";
import { Chevron, Container, Section, SectionHeader } from "@/components/ui/primitives";

export async function VendorBar({ t, linkLabel }: { t: Dictionary["vendorBar"]; linkLabel: string }) {
  const locale = await getLocale();
  const ecosystems = getEcosystems(locale);
  return (
    <div className="bg-canvas-alt">
      <Container className="flex flex-col items-center gap-6 pb-20">
        <p className="text-[15px] text-fg-subtle">{t.title}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {ecosystems.map((e) => (
            <li key={e.slug}>
              <Link href={localePath(locale, `/experts/${e.slug}`)} aria-label={fill(linkLabel, { vendor: e.vendor })}>
                <VendorMark slug={e.slug} name={e.vendor} />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export async function EcosystemGrid({ t }: { t: Dictionary["ecosystems"] }) {
  const locale = await getLocale();
  const ecosystems = getEcosystems(locale);
  return (
    <Section id="ecosystems" className="scroll-mt-12">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecosystems.map((e) => (
            <Link
              key={e.slug}
              href={localePath(locale, `/experts/${e.slug}`)}
              className="tile tile-lift reveal group flex flex-col gap-4 p-8"
            >
              <div className="flex items-center justify-between">
                <VendorMark slug={e.slug} name={e.vendor} size="sm" />
                {e.tier === "specialist" && (
                  <span className="text-[13px] font-medium text-signal">{t.specialist}</span>
                )}
              </div>
              <h3 className="headline-md mt-2">{e.name}</h3>
              <p className="text-[17px] leading-relaxed text-fg-muted">{e.summary}</p>
              <p className="text-[15px] text-fg-subtle">{e.modules.map((m) => m.name).join(" · ")}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[17px] text-link group-hover:underline">
                {t.cta} <Chevron />
              </span>
            </Link>
          ))}
        </div>
        <p className="reveal mx-auto mt-12 max-w-2xl text-center text-[17px] text-fg-muted">
          {t.other}{" "}
          <Link href={localePath(locale, "/contact")} className="inline-flex items-center gap-1 text-link hover:underline">
            {t.otherCta} <Chevron />
          </Link>
        </p>
      </Container>
    </Section>
  );
}
