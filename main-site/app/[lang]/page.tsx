import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n";
import { buildMetadata, faqLd, founderLd, pagePaths, serviceLd } from "@/lib/seo";
import { site } from "@/lib/site";
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
  Offer,
  OfferDetail,
  Problem,
  Sovereignty,
  StickyCta,
} from "@/components/Home";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import { Container, Section, SectionHeader } from "@/components/ui/primitives";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = await getDictionary(locale);
  return buildMetadata({ page: "home", locale, title: meta.title, description: meta.description, absoluteTitle: true });
}

export default async function Home() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return (
    <>
      <JsonLd
        data={[
          serviceLd(locale, t.offer.title, t.offer.intro, t.offer.plans),
          faqLd(t.faq.items),
          founderLd(t.founder.body),
        ]}
      />
      <Hero t={t.hero} />
      <Definition t={t.definition} />
      <Mirror t={t.mirror} />
      <Clock t={t.clock} />
      <Problem t={t.problem} />
      <Offer t={t.offer} />
      <MidCta label={t.hero.primary} reassurance={t.hero.reassurance} tone="pearl" />
      <Cockpit t={t.cockpit} />
      <OfferDetail t={t.hitl} id="human-in-the-loop" tone="pearl" />
      <OfferDetail t={t.factoryOffer} id="factory" />
      <Sovereignty t={t.sovereignty} />
      <Factory t={t.factory} />
      <Commitments t={t.commitments} />
      <Founder t={t.founder} linkedin={site.founder.linkedin} name={site.founder.name} />
      <Faq t={t.faq} />
      <Guides t={t.guides} />
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
