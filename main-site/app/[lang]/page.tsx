import type { Metadata } from "next";
import { getDictionary, getLocale } from "@/lib/i18n";
import { buildMetadata, faqLd, pagePaths, serviceLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Clock, Cockpit, Commitments, Factory, Faq, Hero, Offer, Problem, Sovereignty, StickyCta } from "@/components/Home";
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
      <JsonLd data={[serviceLd(locale, t.offer.title, t.offer.intro, t.offer.plans), faqLd(t.faq.items)]} />
      <Hero t={t.hero} />
      <Clock t={t.clock} />
      <Problem t={t.problem} />
      <Offer t={t.offer} />
      <Cockpit t={t.cockpit} />
      <Sovereignty t={t.sovereignty} />
      <Factory t={t.factory} />
      <Commitments t={t.commitments} />
      <Faq t={t.faq} />
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
