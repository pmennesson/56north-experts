import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { localePath, type Locale } from "@/lib/locale";
import { breadcrumbLd, buildMetadata, faqLd, founderLd, offerServiceLd, pagePaths, webPageLd } from "@/lib/seo";
import { getPillar, PILLARS_UPDATED } from "@/lib/pillars";
import type { PillarKey } from "@/content/pillars/types";
import { JsonLd } from "@/components/JsonLd";
import { EvidenceMap } from "@/components/EvidenceMap";

/** Token in a pillar body, alone in its paragraph, replaced by the evidence-file map (compliance page). */
const EVIDENCE_TOKEN = "<p>[[dossier-de-preuves]]</p>";
import { Button, Chevron, Container, Eyebrow, Section } from "@/components/ui/primitives";

/** Metadata of a pillar page: canonical, hreflang (fr, en, x-default) and social card, as on every page. */
export async function pillarMetadata(locale: Locale, key: PillarKey): Promise<Metadata> {
  const { page } = await getPillar(locale, key);
  return buildMetadata({
    page: key,
    locale,
    title: page.title,
    socialTitle: page.h1,
    description: page.description,
    keywords: page.keywords,
  });
}

/**
 * One pillar page: answer first, Markdown sections, FAQ, sources, related pages, call to action.
 * Same measure and type scale as the articles (prose-article), so the site reads as one.
 */
export async function PillarPage({ locale, pageKey }: { locale: Locale; pageKey: PillarKey }) {
  const { page, dict } = await getPillar(locale, pageKey);
  const { ui } = dict;
  const home = localePath(locale, "/");
  const diagnostic = `${home === "/" ? "/" : home}#diagnostic`;
  const isAbout = pageKey === "about";

  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: page.path, name: page.h1, description: page.description, locale, updated: PILLARS_UPDATED, about: isAbout }),
          ...(page.service ? [offerServiceLd({ ...page.service, path: page.path, locale })] : []),
          ...(isAbout ? [founderLd(page.answer, locale)] : []),
          faqLd(page.faq),
          breadcrumbLd([
            { name: ui.home, path: home },
            { name: page.name, path: page.path },
          ]),
        ]}
      />

      <article>
        <header className="bg-canvas">
          <Container className="!max-w-[760px] pb-10 pt-12 sm:pt-20">
            <nav aria-label="Breadcrumb" className="text-[13px] text-fg-subtle">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href={home} className="hover:text-fg hover:underline">
                    {ui.home}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page">{page.name}</li>
              </ol>
            </nav>
            <Eyebrow className="mt-8 !text-[15px]">{page.eyebrow}</Eyebrow>
            <h1 className="mt-3 text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance">{page.h1}</h1>
            {page.status && (
              <p className="mt-6">
                <span className="inline-flex rounded-full bg-fg/[0.06] px-3 py-1 text-[13px] font-medium text-fg-muted">{page.status}</span>
              </p>
            )}
            {isAbout && (
              <div className="mt-8 flex items-center gap-4">
                <Image src="/founder.jpg" alt={site.founder.name} width={88} height={88} className="h-22 w-22 rounded-full object-cover" priority />
                <div className="flex flex-col gap-1 text-[15px]">
                  <a href={site.founder.linkedin} rel="me noopener" target="_blank" className="text-link hover:underline">
                    LinkedIn ↗
                  </a>
                  <a href={`${site.experts}/about`} rel="noopener" className="text-link hover:underline">
                    56North Experts ↗
                  </a>
                </div>
              </div>
            )}
          </Container>
        </header>

        <Container className="!max-w-[760px] pb-16">
          {/* Answer first: what readers skim and what assistants quote. */}
          <p className="rounded-3xl bg-canvas-alt p-7 text-[19px] font-medium leading-relaxed tracking-[-0.01em] sm:p-8" data-speakable>
            {page.answer}
          </p>

          {page.html.split(EVIDENCE_TOKEN).map((part, i, parts) => (
            <div key={i}>
              <div className="prose-article mt-4" dangerouslySetInnerHTML={{ __html: part }} />
              {i < parts.length - 1 && <EvidenceMap locale={locale} />}
            </div>
          ))}

          <div className="mt-12 flex flex-col items-start gap-3 rounded-3xl border border-line p-7 sm:p-8">
            <p className="text-[19px] font-semibold tracking-[-0.01em]">{ui.ctaTitle}</p>
            <Button href={diagnostic}>{ui.cta}</Button>
            <p className="text-[15px] text-fg-subtle">{ui.ctaBody}</p>
          </div>

          <section className="mt-16">
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em]">{ui.faqTitle}</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {page.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-semibold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fg/5 text-fg-muted transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {page.sources && page.sources.length > 0 && (
            <section className="mt-12">
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-fg-subtle">{ui.sourcesTitle}</h2>
              <p className="mt-2 text-[13px] text-fg-subtle">{ui.sourcesNote}</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px]">
                {page.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener" target="_blank" className="break-words text-link hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <p className="mt-12 text-[13px] text-fg-subtle">{ui.updated}</p>
        </Container>
      </article>

      <Section tone="pearl" className="!py-16">
        <Container className="!max-w-[760px]">
          <p className="text-[15px] font-semibold text-fg-muted">{ui.relatedTitle}</p>
          <ul className="mt-4 space-y-3">
            {page.related.map((k) => (
              <li key={k}>
                <Link href={pagePaths[k][locale]} className="inline-flex items-center gap-1 text-[17px] leading-snug text-link hover:underline">
                  {dict.pages[k].h1} <Chevron />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
