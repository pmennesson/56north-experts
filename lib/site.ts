/**
 * Single source of truth for brand and business facts.
 * Every value marked TODO must be replaced with a real, verifiable fact
 * before going live: credibility in B2B staffing is lost on the first
 * number a buyer cannot check.
 */
export const siteConfig = {
  name: "56North Experts",
  /** Parent brand: the AI governance platform this network belongs to. */
  parent: { name: "56North", url: "https://56north.io", tagline: "Enterprise AI governance" },
  legalName: "Swell Invest Ltd",
  /** Operating company — shown on /legal and /privacy. */
  company: {
    name: "Swell Invest Ltd",
    form: "private company limited by shares, incorporated in the Republic of Mauritius",
    brn: "C22187700",
    address: ["c/o Legis Corporate Secretarial Services Ltd", "6 Edith Cavell Street", "Port Louis", "Mauritius"],
  },
  legalUpdated: "30 September 2026",
  /** Same date, ISO: lastModified of the legal pages in the sitemap. Keep both in step. */
  legalUpdatedIso: "2026-09-30",
  tagline: "An admission-based network of senior AI experts for the enterprise platforms you already run.",
  description:
    "An admission-based network of senior Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday AI experts, drawn from practitioner communities and vetted by peers. AI only, no classic integration: agile, outcome-driven engagements with a senior expert in your squad, a dedicated AI squad or a fractional AI architect, across Europe, the Middle East and Africa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://experts.56north.io",
  email: "experts@56north.io",
  /** Founder: shown on /about, linked from the footer, Person JSON-LD. */
  founder: { name: "Pascal Mennesson", linkedin: "https://www.linkedin.com/in/pascal-mennesson" },
  /** Company page: leave empty until the 56North LinkedIn page exists; the footer then links to the founder. */
  linkedinCompany: "" as string,
  /** Where you actually operate. Used in JSON-LD areaServed. */
  areaServed: ["Europe", "United Kingdom", "Middle East", "Africa"],
  /**
   * Service commitments you control (not vanity results).
   * Keep them true: they are contractual in the buyer's eyes.
   */
  serviceLevels: [
    { value: "Community", label: "Members identified in specialist practitioner communities, not on job boards" },
    { value: "6", label: "Enterprise platforms, each with a dedicated practice" },
    { value: "3-step", label: "Admission: peer technical interview, credential check, references" },
    { value: "10+ yrs", label: "Minimum enterprise delivery experience for a senior member" },
  ],
  /**
   * Communities you are genuinely active in. Shown on /talents only when
   * non-empty. List only real, verifiable involvement: a buyer or an expert
   * can check it in two clicks.
   * Example: { name: "Paris Salesforce User Group", ecosystem: "salesforce", role: "Sponsor", url: "https://..." }
   */
  communities: [] as { name: string; ecosystem: string; role: "Host" | "Sponsor" | "Speaker" | "Member"; url?: string }[],
} as const;

export type SiteConfig = typeof siteConfig;
