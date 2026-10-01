"use server";

import { loadDictionary } from "@/lib/dictionaries";
import { fill, hasLocale } from "@/lib/locale";
import { insertRow } from "@/lib/supabase-server";
import { siteConfig } from "@/lib/site";
import { notify } from "@/lib/notify";

export type ApplicationState = { ok: boolean; message: string; errors?: Record<string, string> };

const required = ["name", "email", "linkedin", "ecosystem", "years", "modules"] as const;

/**
 * Expert application handler, stores in Supabase `talents`.
 * An email alert goes to NOTIFY_EMAIL (lib/notify.ts). TODO: rate limiting if spam appears.
 */
export async function submitApplication(_prev: ApplicationState, form: FormData): Promise<ApplicationState> {
  if (form.get("website")) return { ok: true, message: "Thank you." };

  const data = Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, typeof v === "string" ? v.trim().slice(0, 3000) : ""]),
  );

  const locale = hasLocale(data.lang) ? data.lang : "en";
  const dict = await loadDictionary(locale);
  const t = dict.applicationForm;

  const errors: Record<string, string> = {};
  for (const f of required) if (!data[f]) errors[f] = dict.steps.required;
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = t.invalidEmail;
  if (data.linkedin && !/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\//i.test(data.linkedin)) errors.linkedin = t.invalidLinkedin;
  if (!data.consent) errors.consent = t.consentRequired;

  if (Object.keys(errors).length) return { ok: false, message: t.checkFields, errors };

  const saved = await insertRow("talents", {
    name: data.name,
    email: data.email.toLowerCase(),
    linkedin_url: data.linkedin,
    ecosystem: data.ecosystem,
    years_band: data.years,
    modules: data.modules,
    certifications: data.certifications || null,
    community: data.community || null,
    day_rate: data.rate || null,
    availability: data.availability || null,
    location: data.location || null,
    referral: data.referral || null,
    consent_at: new Date().toISOString(),
    locale,
  });
  if (!saved)
    return { ok: false, message: fill(t.error, { email: siteConfig.email }) };

  await notify(
    `New expert application: ${data.name} (${data.ecosystem}, ${data.years} yrs)`,
    {
      Name: data.name,
      Email: data.email,
      LinkedIn: data.linkedin,
      Platform: data.ecosystem,
      Years: data.years,
      Modules: data.modules,
      Certifications: data.certifications,
      Community: data.community,
      "Day rate": data.rate,
      Availability: data.availability,
      Location: data.location,
      Referral: data.referral,
      Language: locale === "fr" ? "French (reply in French)" : "English",
    },
    data.email,
  );

  return { ok: true, message: dict.talents.apply.success };
}
