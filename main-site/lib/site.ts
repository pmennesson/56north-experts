/** Facts about 56north.io. Legal facts mirror the previous site's legal notice (23 September 2026). */
export const site = {
  name: "56North",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://56north.io",
  email: "contact@56north.io",
  experts: "https://experts.56north.io",
  /** LinkedIn company page « 56North.io ». */
  linkedin: "https://www.linkedin.com/company/56north-io/",
  /** Operating company (same as experts.56north.io). */
  company: {
    name: "Fifty Six North Ltd",
    formFr: "société à responsabilité limitée par actions (private company limited by shares) immatriculée en République de Maurice",
    formEn: "private company limited by shares, incorporated in the Republic of Mauritius",
    brn: "C26240839",
    address: "The Catalyst Building, 4th Floor, Silicon Avenue, Cybercity, Ebène, Mauritius",
  },
  founder: { name: "Pascal Mennesson", linkedin: "https://www.linkedin.com/in/pascal-mennesson" },
  legalUpdated: { fr: "30 octobre 2026", en: "30 October 2026" },
  /** Same date, ISO: lastModified of the legal pages in the sitemap. Keep both in step. */
  legalUpdatedIso: "2026-10-30",
} as const;
