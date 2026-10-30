import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n";
import { buildMetadata, faqLd, founderLd, pagePaths, serviceLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { articlesPath, getPublishedArticles } from "@/lib/articles";
import { JsonLd } from "@/components/JsonLd";
import {
  Clock,
  Cockpit,
  Commitments,
  Definition,
  Factory,
  Faq,
  Founder,
  Guides,
  Hero,
  MidCta,
  Mirror,
  WhyThirdParty,
  Offer,
  OfferDetail,
  Problem,
  Stakes,
  Sovereignty,
  StickyCta,
} from "@/components/Home";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import { loadPillars } from "@/lib/pillars";
import { Container, Section, SectionHeader } from "@/components/ui/primitives";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = await getDictionary(locale);
  return buildMetadata({ page: "home", locale, title: meta.title, description: meta.description, absoluteTitle: true });
}

export default async function Home() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const posts = getPublishedArticles(locale);
  // Each section links to its own page: descriptive anchors, the pages' main internal links.
  const { ui } = await loadPillars(locale);
  const more = (key: "cockpit" | "hitl" | "factory" | "governance" | "compliance", label: string) => ({ href: pagePaths[key][locale], label });
  return (
    <>
      <JsonLd
        data={[
          serviceLd(locale, t.offer.title, t.offer.intro, t.offer.plans),
          faqLd(t.faq.items),
          founderLd(t.founder.body, locale),
        ]}
      />
      <Hero t={t.hero} alert={posts[0] && { title: posts[0].seoTitle, href: articlesPath(locale) }} />
      <Definition t={t.definition} />
      <WhyThirdParty t={t.whyThirdParty} more={more("governance", ui.more.whyThirdParty)} evidenceHref={`${pagePaths.compliance[locale]}#dossier-de-preuves`} />
      <Mirror t={t.mirror} />
      <Clock t={t.clock} more={more("compliance", ui.more.clock)} />
      <Problem t={t.problem} />
      <Stakes t={t.stakes} />
      <Offer t={t.offer} />
      <MidCta label={t.hero.primary} reassurance={t.hero.reassurance} tone="pearl" />
      <Cockpit t={t.cockpit} more={more("cockpit", ui.more.cockpit)} />
      <OfferDetail t={t.hitl} id="human-in-the-loop" tone="pearl" more={more("hitl", ui.more.hitl)} />
      <OfferDetail t={t.factoryOffer} id="factory" more={more("factory", ui.more.factory)} />
      <Sovereignty t={t.sovereignty} />
      <Factory t={t.factory} />
      <Commitments t={t.commitments} />
      <Founder t={t.founder} linkedin={site.founder.linkedin} name={site.founder.name} />
      <Faq t={t.faq} />
      {/* Own articles first (internal links), then the platform guides hosted on the experts site. */}
      <Guides t={{ ...t.guides, items: [...posts.slice(0, 3).map((a) => ({ title: a.title, href: a.path })), ...t.guides.items] }} />
      <Section tone="pearl" id="diagnostic" className="scroll-mt-12">
        <Container className="max-w-[760px]">
          <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.intro} />
          <div className="mt-14">
            <DiagnosticForm lang={locale} t={t.contact} privacyHref={pagePaths.privacy[locale]} />
          </div>
        </Container>
      </Section>
      <StickyCta label={t.hero.primary} />
    </>
  );
}
