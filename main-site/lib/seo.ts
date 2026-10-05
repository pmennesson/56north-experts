import type { Metadata } from "next";
import { site } from "@/lib/site";
import { localePath, type Locale } from "@/lib/locale";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/** Public path of a page per locale. Keys: "home" | "notice" | "privacy". */
export const pagePaths = {
  home: { fr: "/", en: "/en" },
  articles: { fr: "/articles", en: "/en/articles" },
  notice: { fr: "/mentions-legales", en: "/en/legal-notice" },
  privacy: { fr: "/confidentialite", en: "/en/privacy" },
} as const;
export type PageKey = keyof typeof pagePaths;

/** RSS feed of the articles: French at /feed.xml, English at /en/feed.xml. */
export const feedPath = (locale: Locale) => localePath(locale, "/feed.xml");

export function buildMetadata({
  page,
  paths: customPaths,
  locale,
  title,
  socialTitle,
  description,
  absoluteTitle = false,
  noIndex = false,
  keywords,
  article,
}: {
  /** A fixed page of the site… */
  page?: PageKey;
  /** …or explicit public paths per language (articles: the slug differs per language). */
  paths?: Record<Locale, string>;
  locale: Locale;
  title: string;
  /** Full headline for social cards when the tab title is a shortened one. */
  socialTitle?: string;
  description: string;
  absoluteTitle?: boolean;
  /** Drafts: reachable by URL, kept out of search engines. */
  noIndex?: boolean;
  keywords?: string[];
  /** Article metadata (OpenGraph type "article"). */
  article?: { publishedTime: string; modifiedTime?: string; authors: string[]; section?: string; tags?: string[] };
}): Metadata {
  const paths = customPaths ?? pagePaths[page ?? "home"];
  const url = paths[locale];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    ...(article ? { authors: article.authors.map((name) => ({ name, url: site.founder.linkedin })) } : {}),
    alternates: {
      canonical: url,
      languages: { fr: paths.fr, en: paths.en, "x-default": paths.fr },
      // Feed autodiscovery: readers and crawlers find the articles from any page.
      types: { "application/rss+xml": [{ url: absoluteUrl(feedPath(locale)), title: `${site.name} · Articles` }] },
    },
    openGraph: {
      ...(article ? { type: "article" as const, ...article } : { type: "website" as const }),
      url,
      siteName: site.name,
      title: socialTitle ?? title,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_FR"],
    },
    twitter: { card: "summary_large_image", title: socialTitle ?? title, description },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
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

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
});

const blogId = (locale: Locale) => `${absoluteUrl(pagePaths.articles[locale])}#blog`;
const authorLd = { "@id": founderId, "@type": "Person", name: site.founder.name, url: site.founder.linkedin, sameAs: [site.founder.linkedin] };

/** The articles section as a Blog entity, with its posts: one object search engines and assistants can walk. */
export const blogLd = (
  locale: Locale,
  name: string,
  description: string,
  posts: { title: string; path: string; description: string; published: string; updated: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": blogId(locale),
  url: absoluteUrl(pagePaths.articles[locale]),
  name,
  description,
  inLanguage: locale,
  publisher: { "@id": orgId },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    url: absoluteUrl(p.path),
    datePublished: p.published,
    dateModified: p.updated,
    author: authorLd,
  })),
});

/**
 * One article. Beyond the basics: the sources as citations, the summary marked as speakable,
 * word count and reading time. These are the signals AI assistants weigh before quoting a page.
 */
export const articleLd = (a: {
  path: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  locale: Locale;
  section: string;
  keywords: string[];
  words: number;
  minutes: number;
  sources: { title: string; url: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${absoluteUrl(a.path)}#article`,
  headline: a.title,
  description: a.description,
  datePublished: `${a.published}T08:00:00+02:00`,
  dateModified: `${a.updated}T08:00:00+02:00`,
  inLanguage: a.locale,
  articleSection: a.section,
  keywords: a.keywords.join(", "),
  wordCount: a.words,
  timeRequired: `PT${a.minutes}M`,
  url: absoluteUrl(a.path),
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(a.path) },
  image: absoluteUrl(`${a.path}/opengraph-image`),
  isPartOf: { "@id": blogId(a.locale) },
  author: authorLd,
  publisher: { "@id": orgId },
  citation: a.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url })),
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
});
