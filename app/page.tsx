import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { ecosystems } from "@/lib/ecosystems";
import { siteConfig } from "@/lib/site";
import { buildMetadata, faqLd, serviceCatalogLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { EcosystemGrid, VendorBar } from "@/components/home/Ecosystems";
import { CtaBand, EngagementModels, Faq, Process, ServiceLevels, Trust } from "@/components/home/Sections";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} · Senior AI experts for Microsoft, Salesforce, Google Cloud, SAP & ServiceNow`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default async function HomePage() {
  const t = await getDictionary();
  return (
    <>
      <JsonLd data={[serviceCatalogLd(ecosystems), faqLd(t.faq.items)]} />
      <Hero t={t.hero} />
      <VendorBar t={t.vendorBar} />
      <EcosystemGrid t={t.ecosystems} />
      <ServiceLevels t={t.serviceLevels} />
      <EngagementModels t={t.models} />
      <Process t={t.process} />
      <Trust t={t.trust} />
      <Faq t={t.faq} />
      <CtaBand t={t.cta} />
    </>
  );
}
