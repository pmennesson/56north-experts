import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { Ecosystem } from "@/lib/ecosystems";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

/** One call per page: title, description, canonical, OpenGraph, Twitter. */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  /** Omit to use the generated app/opengraph-image. */
  ogImage?: string;
  noIndex?: boolean;
  /** Skip the "%s · Brand" template (home page). */
  absoluteTitle?: boolean;
}): Metadata {
  const images = ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : undefined;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path, languages: { en: path, "x-default": path } },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_US",
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
export const founderLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": founderId,
  name: "Pascal Mennesson",
  jobTitle: "Founder",
  worksFor: { "@id": orgId },
  description:
    "Co-founder of Maltem Consulting Group, grown from 2001 to more than 1,100 consultants in 12 countries before its exit. Founder of 56North.",
  knowsAbout: ["IT staffing", "Consulting", "Enterprise AI governance"],
  url: absoluteUrl("/about"),
  image: absoluteUrl("/founder.jpg"),
});

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": orgId,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  areaServed: siteConfig.areaServed,
  sameAs: [siteConfig.linkedin],
  parentOrganization: { "@type": "Organization", name: siteConfig.parent.name, url: siteConfig.parent.url },
  founder: { "@id": founderId, "@type": "Person", name: "Pascal Mennesson" },
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
  inLanguage: "en",
});

/** Services catalogue for the home page (one Offer per ecosystem). */
export const serviceCatalogLd = (items: Ecosystem[]) => ({
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
        name: `${e.vendor} AI expert staffing`,
        description: e.summary,
        url: absoluteUrl(`/experts/${e.slug}`),
      },
    })),
  },
});

export const ecosystemServiceLd = (e: Ecosystem) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${e.name} expert staffing`,
  serviceType: "IT staff augmentation",
  description: e.summary,
  provider: { "@id": orgId },
  areaServed: siteConfig.areaServed,
  url: absoluteUrl(`/experts/${e.slug}`),
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
