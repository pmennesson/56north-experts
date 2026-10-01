import type en from "@/content/en";
import { frenchTypo, type Locale } from "@/lib/locale";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/content/en").then((m) => m.default),
  fr: () => import("@/content/fr").then((m) => frenchTypo(m.default)),
};

/** Load a dictionary by explicit locale (safe in Server Actions and route handlers). */
export const loadDictionary = (locale: Locale) => dictionaries[locale]();
