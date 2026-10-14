import type { Metadata } from "next";
import { getEcosystems } from "@/lib/ecosystems";
import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { buildMetadata, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Button, Check, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ApplicationForm } from "./ApplicationForm";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { talents } = await getDictionary(locale);
  return buildMetadata({ title: talents.metaTitle, description: talents.metaDescription, path: "/talents", locale });
}

/*
 * Schema note: JobPosting JSON-LD belongs on individual mission pages
 * (/missions/[id]) with a real title, date, location and rate. Google
 * penalises JobPosting markup on generic recruitment pages like this one.
 */
export default async function TalentsPage() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const t = dict.talents;
  const communities = siteConfig.communities;

  return (
    <>
      <JsonLd data={faqLd(t.faq.items)} />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro}>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href="#apply" size="lg">
            {t.hero.cta}
          </Button>
          <Button href="#community" variant="link">
            {t.hero.secondary}
          </Button>
        </div>
        <dl className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {t.hero.facts.map((f) => (
            <div key={f.value} className="flex flex-col-reverse items-center gap-2 text-center">
              <dt className="max-w-[220px] text-[15px] leading-snug text-fg-muted">{f.label}</dt>
              <dd className="text-2xl font-semibold tracking-[-0.02em]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* The three ways in: exclusive on level, open on origin */}
      <Section tone="pearl" id="community" className="scroll-mt-12">
        <Container>
          <SectionHeader eyebrow={t.doors.eyebrow} title={t.doors.title} subtitle={t.doors.subtitle} />
          <ol className="mt-16 grid gap-5 lg:grid-cols-3">
            {t.doors.items.map((it, i) => (
              <li key={it.name} className="tile-white reveal flex flex-col gap-3 p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-5xl font-semibold tracking-[-0.04em] text-fg-subtle/40">{i + 1}</span>
                  <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{it.tag}</span>
                </div>
                <h3 className="headline-md mt-2">{it.name}</h3>
                <p className="text-[17px] leading-relaxed text-fg-muted">{it.body}</p>
              </li>
            ))}
          </ol>

          {/* Proof block: renders only once real communities are listed in lib/site.ts */}
          {communities.length > 0 && (
            <div className="mt-10">
              <p className="mb-4 text-center text-[15px] font-medium">{t.doors.partnersTitle}</p>
              <ul className="flex flex-wrap justify-center gap-2">
                {communities.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.url ?? "#"}
                      className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[15px] ring-1 ring-line hover:ring-line-strong"
                    >
                      {c.name}
                      <span className="text-xs text-fg-subtle">· {c.role}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="whitespace-pre-line">
            <SectionHeader eyebrow={t.admission.eyebrow} title={t.admission.title} subtitle={t.admission.subtitle} />
          </div>
          <ol className="mt-16 grid gap-5 lg:grid-cols-3">
            {t.admission.steps.map((st, i) => (
              <li key={st.name} className="tile reveal flex flex-col gap-3 p-8">
                <span className="text-[13px] font-medium uppercase tracking-wide text-signal">{`0${i + 1}`}</span>
                <h3 className="headline-md">{st.name}</h3>
                <p className="text-[17px] leading-relaxed text-fg-muted">{st.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="pearl">
        <Container>
          <SectionHeader eyebrow={t.standard.eyebrow} title={t.standard.title} />
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {t.standard.items.map((it) => (
              <article key={it.name} className="tile-white reveal flex gap-4 p-7">
                <Check className="mt-1 h-5 w-5 shrink-0 text-signal" />
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.015em]">{it.name}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-fg-muted">{it.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mx-auto mt-12 max-w-2xl text-center text-xl leading-relaxed text-fg">
            {t.standard.openNote}{" "}
            <a href="#apply" className="text-link hover:underline">
              {t.hero.cta}
            </a>
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow={t.promises.eyebrow} title={t.promises.title} />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.promises.items.map((p) => (
              <article key={p.name} className="tile reveal p-7">
                <h3 className="text-xl font-semibold tracking-[-0.015em]">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="pearl">
        <Container className="max-w-[760px]">
          <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <div className="mt-14 divide-y divide-line border-y border-line">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fg/5 text-fg-muted transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[17px] leading-relaxed text-fg-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="apply" className="scroll-mt-12">
        <Container className="max-w-[760px]">
          <SectionHeader eyebrow={t.apply.eyebrow} title={t.apply.title} subtitle={t.apply.subtitle} />
          <div className="mt-14" />
          <ApplicationForm
            lang={locale}
            t={dict.applicationForm}
            s={dict.steps}
            success={t.apply.success}
            privacyHref={localePath(locale, "/privacy")}
            ecosystems={getEcosystems(locale).map((e) => ({ value: e.slug, label: e.name }))}
          />
        </Container>
      </Section>
    </>
  );
}
