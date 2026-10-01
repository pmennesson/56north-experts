import { lang } from "next/root-params";
import type { MainDictionary } from "@/content/fr";
import { loadDictionary } from "@/lib/dictionaries";
import { defaultLocale, hasLocale, type Locale } from "@/lib/locale";

export * from "@/lib/locale";
export type Dictionary = MainDictionary;

/** Current locale from the [lang] root segment (Server Components only). */
export async function getLocale(): Promise<Locale> {
  const l = await lang();
  return hasLocale(l) ? l : defaultLocale;
}

export async function getDictionary(locale?: Locale): Promise<Dictionary> {
  return loadDictionary(locale ?? (await getLocale()));
}
