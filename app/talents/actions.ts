"use server";

import { getDictionary } from "@/lib/i18n";
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

  const errors: Record<string, string> = {};
  for (const f of required) if (!data[f]) errors[f] = "Required";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (data.linkedin && !/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\//i.test(data.linkedin))
    errors.linkedin = "Paste your full LinkedIn profile URL";
  if (!data.consent) errors.consent = "Required to process your application";

  if (Object.keys(errors).length) return { ok: false, message: "Please check the highlighted fields.", errors };

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
  });
  if (!saved)
    return { ok: false, message: `Something went wrong on our side. Please email ${siteConfig.email} and we will answer directly.` };

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
    },
    data.email,
  );

  const t = await getDictionary();
  return { ok: true, message: t.talents.apply.success };
}
