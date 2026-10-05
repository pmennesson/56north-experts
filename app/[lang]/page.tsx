import type { Metadata } from "next";
import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { getEcosystems } from "@/lib/ecosystems";
import { buildMetadata, faqLd, serviceCatalogLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { getPublishedArticles } from "@/lib/articles";
import { getMainSiteArticles } from "@/lib/main-site-feed";
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
  // "News alert": the newest article across both sites. A 56north.io article is linked, never copied.
  const own = getPublishedArticles(locale)[0];
  const [parent] = await getMainSiteArticles(locale, 1);
  const alert =
    parent && (!own || parent.published > own.published)
      ? { title: parent.title, href: parent.url }
      : own && { title: own.title, href: localePath(locale, "/insights") };
  return (
    <>
      <JsonLd data={[serviceCatalogLd(getEcosystems(locale), locale), faqLd(t.faq.items)]} />
      <Hero t={t.hero} alert={alert || undefined} />
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
