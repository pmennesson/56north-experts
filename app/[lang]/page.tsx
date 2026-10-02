import type { Metadata } from "next";
import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { getEcosystems } from "@/lib/ecosystems";
import { buildMetadata, faqLd, serviceCatalogLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { EcosystemGrid, VendorBar } from "@/components/home/Ecosystems";
import { Community, CtaBand, EngagementModels, Faq, Process, ServiceLevels, Trust } from "@/components/home/Sections";
import { Founder, StickyCta } from "@/components/home/Founder";
import { CockpitLink } from "@/components/CockpitLink";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = await getDictionary(locale);
  return buildMetadata({ title: meta.homeTitle, description: meta.description, path: "/", absoluteTitle: true, locale });
}

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return (
    <>
      <JsonLd data={[serviceCatalogLd(getEcosystems(locale), locale), faqLd(t.faq.items)]} />
      <Hero t={t.hero} />
      <VendorBar t={t.vendorBar} linkLabel={t.practice.linkLabel} />
      <EcosystemGrid t={t.ecosystems} />
      <ServiceLevels t={t.serviceLevels} />
      <EngagementModels t={t.models} />
      <Process t={t.process} />
      <Trust t={t.trust} />
      <Community t={t.community} />
      <Founder t={t.founder} />
      <CockpitLink t={t.cockpit} tone="white" />
      <Faq t={t.faq} />
      <CtaBand t={t.cta} />
      <StickyCta href={localePath(locale, "/contact")} label={t.hero.primaryCta} />
    </>
  );
}
