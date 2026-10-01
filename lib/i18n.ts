import { lang } from "next/root-params";
import { defaultLocale, hasLocale, localePath, type Locale } from "@/lib/locale";
import { loadDictionary, type Dictionary } from "@/lib/dictionaries";

export * from "@/lib/locale";
export type { Dictionary };

/** Current locale from the [lang] root segment (Server Components only). */
export async function getLocale(): Promise<Locale> {
  const l = await lang();
  return hasLocale(l) ? l : defaultLocale;
}

/** Link builder bound to the current locale. */
export async function getLinker() {
  const l = await getLocale();
  return (path: string) => localePath(l, path);
}

/** Dictionary for the current locale (Server Components), or an explicit one. */
export async function getDictionary(locale?: Locale): Promise<Dictionary> {
  return loadDictionary(locale ?? (await getLocale()));
}
