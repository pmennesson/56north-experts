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
  tagline: "Senior AI experts for the enterprise platforms you already run.",
  description:
    "Staff augmentation and expert delegation for AI modules on Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday. Senior consultants sourced through specialist practitioner communities, vetted by peers, deployed across Europe, the Middle East and Africa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://experts.56north.io",
  email: "experts@56north.io",
  linkedin: "https://www.linkedin.com/company/example", // TODO
  locale: "en",
  /** Where you actually operate. Used in JSON-LD areaServed. */
  areaServed: ["Europe", "United Kingdom", "Middle East", "Africa"],
  /**
   * Service commitments you control (not vanity results).
   * Keep them true: they are contractual in the buyer's eyes.
   */
  serviceLevels: [
    { value: "Community", label: "Profiles sourced through specialist practitioner communities, not job boards" },
    { value: "6", label: "Enterprise AI ecosystems covered by dedicated practices" },
    { value: "3-step", label: "Vetting: peer technical interview, credential check, references" },
    { value: "10+ yrs", label: "Minimum enterprise delivery experience for senior profiles" },
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
