import type en from "@/content/en";

/**
 * i18n scaffold. English is the default and is served without prefix.
 * To add French: create content/fr.ts with the same shape (typed as
 * Dictionary), add "fr" below, then move routes under app/[lang]/ and
 * add a proxy.ts for language detection + hreflang alternates.
 */
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/content/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale = defaultLocale): Promise<Dictionary> {
  return dictionaries[locale]();
}
