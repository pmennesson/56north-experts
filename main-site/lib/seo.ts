import type { Metadata } from "next";
import { site } from "@/lib/site";
import { localePath, type Locale } from "@/lib/locale";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/** Public path of a page per locale. Keys: "home" | "notice" | "privacy". */
export const pagePaths = {
  home: { fr: "/", en: "/en" },
  notice: { fr: "/mentions-legales", en: "/en/legal-notice" },
  privacy: { fr: "/confidentialite", en: "/en/privacy" },
} as const;
export type PageKey = keyof typeof pagePaths;

export function buildMetadata({
  page,
  locale,
  title,
  description,
  absoluteTitle = false,
}: {
  page: PageKey;
  locale: Locale;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const paths = pagePaths[page];
  const url = paths[locale];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: { fr: paths.fr, en: paths.en, "x-default": paths.fr } },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_FR"],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

const orgId = `${site.url}/#organization`;
const founderId = `${site.url}/#founder`;

export const organizationLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: site.name,
  legalName: site.company.name,
  url: site.url,
  email: site.email,
  description,
  founder: { "@id": founderId, "@type": "Person", name: site.founder.name, sameAs: [site.founder.linkedin] },
  subOrganization: { "@type": "ProfessionalService", name: "56North Experts", url: site.experts },
  knowsAbout: ["AI governance", "EU AI Act", "AI risk management", "AI compliance evidence"],
});

export const founderLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": founderId,
  name: site.founder.name,
  jobTitle: "Founder",
  description,
  worksFor: { "@id": orgId },
  sameAs: [site.founder.linkedin],
  image: absoluteUrl("/founder.jpg"),
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": orgId },
  inLanguage: ["fr", "en"],
});

export const serviceLd = (locale: Locale, name: string, description: string, offers: { name: string; body: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: "AI governance",
  provider: { "@id": orgId },
  areaServed: "Europe",
  url: absoluteUrl(localePath(locale, "/")),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name,
    itemListElement: offers.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o.name, description: o.body } })),
  },
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});
