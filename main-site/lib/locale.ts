/**
 * Pure locale helpers (no server-only imports): usable from data files,
 * route handlers, Server Actions and Client Components.
 * French is the default and is served without prefix; English lives under /en.
 */
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** Legal pages keep the URLs of the previous site in each language. */
export const legalSlugs = {
  notice: { fr: "/mentions-legales", en: "/legal-notice" },
  privacy: { fr: "/confidentialite", en: "/privacy" },
} as const;

export const hasLocale = (l: unknown): l is Locale => typeof l === "string" && (locales as readonly string[]).includes(l);

/** Public path for a locale: "/contact" → "/fr/contact", "/#how" → "/fr#how". */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** French typography: non-breaking space before ? ! : ; and inside « ». */
export function frenchTypo<T>(value: T): T {
  if (typeof value === "string")
    return value.replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ") as T;
  if (Array.isArray(value)) return value.map(frenchTypo) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, frenchTypo(v)])) as T;
  return value;
}

/** Replace {key} placeholders. */
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
