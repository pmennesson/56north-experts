/** Facts about 56north.io. Legal facts mirror the previous site's legal notice (23 September 2026). */
export const site = {
  name: "56North",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://56north.io",
  email: "contact@56north.io",
  experts: "https://experts.56north.io",
  /** Operating company (same as experts.56north.io). */
  company: {
    name: "Swell Invest Ltd",
    formFr: "société à responsabilité limitée par actions (private company limited by shares) immatriculée en République de Maurice",
    formEn: "private company limited by shares, incorporated in the Republic of Mauritius",
    brn: "C22187700",
    address: "c/o Legis Corporate Secretarial Services Ltd, 6 Edith Cavell Street, Port Louis, Mauritius",
  },
  founder: { name: "Pascal Mennesson", linkedin: "https://www.linkedin.com/in/pascal-mennesson" },
  legalUpdated: { fr: "1er octobre 2026", en: "1 October 2026" },
} as const;
