import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ecosystems, getEcosystem, getEcosystems } from "@/lib/ecosystems";
import { breadcrumbLd, buildMetadata, ecosystemServiceLd, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { VendorMark } from "@/components/VendorMark";
import { Faq, CtaBand } from "@/components/home/Sections";
import { StickyCta } from "@/components/home/Founder";
import { fill, getDictionary, getLocale, localePath } from "@/lib/i18n";
import { getPublishedArticles } from "@/lib/articles";
import { Button, Check, Chevron, Container, Section, SectionHeader } from "@/components/ui/primitives";

type Props = PageProps<"/[lang]/experts/[ecosysteme]">;

/** Pre-render one static page per practice; unknown slugs return 404. */
export const dynamicParams = false;
export function generateStaticParams() {
  return ecosystems.map((e) => ({ ecosysteme: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const e = getEcosystem((await params).ecosysteme, locale);
  if (!e) return {};
  const { practice: p } = await getDictionary(locale);
  return buildMetadata({
    title: fill(p.metaTitle, { vendor: e.vendor }),
    description: fill(p.metaDescription, { modules: e.modules.map((m) => m.name).slice(0, 3).join(", ") }),
    path: `/experts/${e.slug}`,
    locale,
  });
}

export default async function EcosystemPage({ params }: Props) {
  const locale = await getLocale();
  const e = getEcosystem((await params).ecosysteme, locale);
  if (!e) notFound();
  const t = await getDictionary(locale);
  const p = t.practice;
  const v = (s: string) => fill(s, { vendor: e.vendor });
  const lp = (path: string) => localePath(locale, path);
  const contact = lp(`/contact?ecosystem=${e.slug}`);
  const others = getEcosystems(locale).filter((o) => o.slug !== e.slug);
  const guides = getPublishedArticles(locale).filter((a) => a.practices.includes(e.slug));

  return (
    <>
      <JsonLd
        data={[
          ecosystemServiceLd(e, locale),
          faqLd(e.faq),
          breadcrumbLd([
            { name: p.home, path: lp("/") },
            { name: p.breadcrumb, path: lp("/#ecosystems") },
            { name: e.name, path: lp(`/experts/${e.slug}`) },
          ]),
        ]}
      />

      {/* Local sub-nav, like a product page */}
      <div className="sticky top-12 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
        <Container className="flex h-12 items-center justify-between">
          <nav aria-label="Breadcrumb" className="text-[13px] text-fg-muted">
            <Link href={lp("/#ecosystems")} className="hover:text-fg">{p.breadcrumb}</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span className="font-semibold text-fg">{e.vendor}</span>
          </nav>
          <Button href={contact} className="!h-7 !px-3.5 !text-[12px]">
            {p.request}
          </Button>
        </Container>
      </div>

      <section className="bg-canvas">
        <Container className="flex flex-col items-center gap-6 pb-24 pt-20 text-center sm:pt-28">
          <VendorMark slug={e.slug} name={e.vendor} />
          <h1 className="headline-lg max-w-3xl text-balance">{e.headline}</h1>
          {/* Answer-first paragraph: the passage LLMs quote when asked "who staffs X experts?" */}
          <p className="max-w-2xl text-xl leading-relaxed text-fg-muted text-pretty">
            {e.summary} {v(p.answerSuffix)}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Button href={contact} size="lg">
              {v(p.requestVendor)}
            </Button>
            <Button href="#modules" variant="link">
              {p.modulesLink}
            </Button>
          </div>
        </Container>
      </section>

      {/* The reader's situation in their words, then the outcome (mirror, then future-pace) */}
      <Section tone="pearl">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">{p.painsTitle}</h2>
            <ul className="mt-6 space-y-4">
              {p.pains.map((x) => (
                <li key={x} className="text-[17px] leading-relaxed text-fg-muted">
                  {v(x)}
                </li>
              ))}
            </ul>
          </article>
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">{p.afterTitle}</h2>
            <ul className="mt-6 space-y-4">
              {p.after.map((x) => (
                <li key={x} className="flex gap-3 text-[17px] leading-relaxed">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal" /> {v(x)}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>

      <Section id="modules" className="scroll-mt-24">
        <Container>
          <SectionHeader eyebrow={p.modulesEyebrow} title={v(p.modulesTitle)} />
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {e.modules.map((m) => (
              <article key={m.name} className="tile reveal p-8">
                <h3 className="headline-md">{m.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{m.detail}</p>
              </article>
            ))}
          </div>
          <div className="reveal mt-12 flex flex-col items-center gap-3 text-center">
            <Button href={contact} size="lg">
              {v(p.midCta)}
            </Button>
            <p className="text-[15px] text-fg-subtle">{t.hero.reassurance}</p>
          </div>
        </Container>
      </Section>

      <Section tone="pearl">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">{p.rolesTitle}</h2>
            <ul className="mt-6 space-y-3">
              {e.roles.map((r) => (
                <li key={r} className="flex items-center gap-3 text-[17px]">
                  <Check className="h-4 w-4 text-signal" /> {r}
                </li>
              ))}
            </ul>
          </article>
          <article className="tile-white reveal p-10">
            <h2 className="headline-md">{p.credentialsTitle}</h2>
            <ul className="mt-6 space-y-3">
              {e.credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 text-[17px]">
                  <Check className="h-4 w-4 text-signal" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-fg-subtle">{p.credentialsNote}</p>
          </article>
        </Container>
      </Section>

      {guides.length > 0 && (
        <Section className="!pb-0">
          <Container>
            <h2 className="headline-md">{v(p.guidesTitle)}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {guides.map((g) => (
                <Link key={g.id} href={g.path} className="tile tile-lift reveal group flex flex-col gap-3 p-7">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{g.category}</span>
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.015em] text-balance">{g.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[15px] text-link group-hover:underline">
                    {t.ecosystems.cta} <Chevron />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
      <Faq t={{ eyebrow: t.faq.eyebrow, title: v(p.faqTitle), items: e.faq }} />
      <CtaBand t={t.cta} />

      {/* Internal links between pillar pages (SEO) */}
      <Section tone="pearl" className="!py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="text-[15px] font-semibold text-fg-muted">{p.related}</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={lp(`/experts/${o.slug}`)} className="inline-flex items-center gap-1 text-[17px] text-link hover:underline">
                  {fill(p.linkLabel, { vendor: o.vendor })} <Chevron />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <StickyCta href={contact} label={v(p.requestVendor)} />
    </>
  );
}
