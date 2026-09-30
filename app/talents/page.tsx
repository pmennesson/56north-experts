import type { Metadata } from "next";
import { ecosystems } from "@/lib/ecosystems";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Button, Container, Section, SectionHeader } from "@/components/ui/primitives";
import { ApplicationForm } from "./ApplicationForm";

export const metadata: Metadata = buildMetadata({
  title: "Join our network of senior enterprise AI experts",
  description:
    "Senior specialists on Microsoft, Salesforce, Google Cloud, SAP, ServiceNow or Workday AI: join a community-led network for enterprise missions. Referral fees, paid vetting panel, practitioner meetups.",
  path: "/talents",
});

/*
 * Schema note: JobPosting JSON-LD belongs on individual mission pages
 * (/missions/[id]) with a real title, date, location and rate. Google
 * penalises JobPosting markup on generic recruitment pages like this one.
 */
export default async function TalentsPage() {
  const { talents: t } = await getDictionary();
  const communities = siteConfig.communities;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro}>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href="#apply" size="lg">
            {t.hero.cta}
          </Button>
          <Button href="#community" variant="link">
            {t.hero.secondary}
          </Button>
        </div>
      </PageHero>

      <Section tone="pearl" id="community" className="scroll-mt-12">
        <Container>
          <SectionHeader eyebrow={t.community.eyebrow} title={t.community.title} subtitle={t.community.subtitle} />
          <ol className="mt-16 grid gap-5 md:grid-cols-2">
            {t.community.items.map((it, i) => (
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
              <p className="mb-4 text-center text-[15px] font-medium">{t.community.partnersTitle}</p>
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

      <Section tone="pearl" id="apply" className="scroll-mt-12">
        <Container className="max-w-[760px]">
          <SectionHeader eyebrow={t.apply.eyebrow} title={t.apply.title} subtitle={t.apply.subtitle} />
          <div className="mt-14" />
          <ApplicationForm ecosystems={ecosystems.map((e) => ({ value: e.slug, label: e.name }))} />
        </Container>
      </Section>
    </>
  );
}
