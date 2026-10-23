"use server";

import { loadDictionary } from "@/lib/dictionaries";
import { fill, hasLocale } from "@/lib/locale";
import { insertRow } from "@/lib/supabase-server";
import { siteConfig } from "@/lib/site";
import { notify } from "@/lib/notify";
import { formatMissions, parseMissions } from "@/lib/missions";

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
  // Referral (optional): a name and a way to reach them, an e-mail or a LinkedIn profile.
  const refContact = data.referral_contact;
  if (refContact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(refContact) && !/^(https?:\/\/)?([a-z]{2,3}\.)?linkedin\.com\//i.test(refContact))
    errors.referral_contact = t.invalidReferralContact;
  if (refContact && !data.referral_name) errors.referral_name = dict.steps.required;

  if (Object.keys(errors).length) return { ok: false, message: t.checkFields, errors };

  const missions = parseMissions(data);

  const saved = await insertRow("talents", {
    name: data.name,
    email: data.email.toLowerCase(),
    linkedin_url: data.linkedin,
    ecosystem: data.ecosystem,
    years_band: data.years,
    modules: data.modules,
    missions: missions.length ? missions : null,
    certifications: data.certifications || null,
    community: data.community || null,
    day_rate: data.rate || null,
    availability: data.availability || null,
    location: data.location || null,
    referral: [data.referral_name, refContact].filter(Boolean).join(" · ") || null,
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
      "Last missions": formatMissions(missions),
      Certifications: data.certifications,
      Community: data.community,
      "Day rate": data.rate,
      Availability: data.availability,
      Location: data.location,
      Referral: [data.referral_name, refContact].filter(Boolean).join(" · "),
      Language: locale === "fr" ? "French (reply in French)" : "English",
    },
    data.email,
  );

  return { ok: true, message: dict.talents.apply.success };
}
