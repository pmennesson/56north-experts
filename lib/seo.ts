import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { Ecosystem } from "@/lib/ecosystems";
import { localePath, locales, type Locale } from "@/lib/locale";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

/** hreflang map for a path: { en: "/x", fr: "/fr/x", "x-default": "/x" }. */
export const languageAlternates = (path: string) => ({
  ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
  "x-default": path,
});

/** One call per page: title, description, canonical, OpenGraph, Twitter. */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
  absoluteTitle = false,
  locale = "en",
}: {
  title: string;
  description: string;
  path?: string;
  /** Omit to use the generated app/opengraph-image. */
  ogImage?: string;
  noIndex?: boolean;
  /** Skip the "%s · Brand" template (home page). */
  absoluteTitle?: boolean;
  /** Path is given unprefixed; the locale prefix is added here. */
  locale?: Locale;
}): Metadata {
  const url = localePath(locale, path);
  const images = ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      ...(images && { images }),
    },
    twitter: { card: "summary_large_image", title, description, ...(images && { images }) },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

/* ---------------------------- JSON-LD ---------------------------- */

const orgId = `${siteConfig.url}/#organization`;
const founderId = `${siteConfig.url}/about#founder`;

/** The founder as a Person entity: authority signal for search engines and AI assistants. */
export const founderLd = (locale: Locale = "en") => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": founderId,
  name: siteConfig.founder.name,
  jobTitle: locale === "fr" ? "Fondateur" : "Founder",
  worksFor: { "@id": orgId },
  description:
    locale === "fr"
      ? "Cofondateur de Maltem Consulting Group, développé à partir de 2001 jusqu'à plus de 1 100 consultants dans 12 pays avant sa cession. Fondateur de 56North."
      : "Co-founder of Maltem Consulting Group, grown from 2001 to more than 1,100 consultants in 12 countries before its exit. Founder of 56North.",
  knowsAbout: ["IT staffing", "Consulting", "Enterprise AI governance"],
  sameAs: [siteConfig.founder.linkedin],
  url: absoluteUrl(localePath(locale, "/about")),
  image: absoluteUrl("/founder.jpg"),
});

export const organizationLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": orgId,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  description,
  areaServed: siteConfig.areaServed,
  ...(siteConfig.linkedinCompany ? { sameAs: [siteConfig.linkedinCompany] } : {}),
  parentOrganization: { "@type": "Organization", name: siteConfig.parent.name, url: siteConfig.parent.url },
  founder: { "@id": founderId, "@type": "Person", name: siteConfig.founder.name },
  knowsAbout: [
    "Staff augmentation",
    "IT staffing",
    "Enterprise AI",
    "Microsoft Copilot",
    "Salesforce Agentforce",
    "Google Cloud Vertex AI",
    "SAP Business AI",
    "ServiceNow Now Assist",
  ],
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": orgId },
  inLanguage: ["en", "fr"],
});

/** Services catalogue for the home page (one Offer per ecosystem). */
export const serviceCatalogLd = (items: Ecosystem[], locale: Locale = "en") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT staff augmentation",
  provider: { "@id": orgId },
  areaServed: siteConfig.areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Enterprise AI expert staffing",
    itemListElement: items.map((e) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: e.name,
        description: e.summary,
        url: absoluteUrl(localePath(locale, `/experts/${e.slug}`)),
      },
    })),
  },
});

export const ecosystemServiceLd = (e: Ecosystem, locale: Locale = "en") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${e.name} expert staffing`,
  serviceType: "IT staff augmentation",
  description: e.summary,
  provider: { "@id": orgId },
  areaServed: siteConfig.areaServed,
  url: absoluteUrl(localePath(locale, `/experts/${e.slug}`)),
  inLanguage: locale,
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});
