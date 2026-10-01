import type { MainDictionary } from "@/content/fr";
import { frenchTypo, type Locale } from "@/lib/locale";

const dictionaries: Record<Locale, () => Promise<MainDictionary>> = {
  fr: () => import("@/content/fr").then((m) => frenchTypo(m.default)),
  en: () => import("@/content/en").then((m) => m.default),
};

/** Explicit locale: safe in Server Actions, route handlers and OG images. */
export const loadDictionary = (locale: Locale) => dictionaries[locale]();
