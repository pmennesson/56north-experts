"use server";

import { insertRow } from "@/lib/supabase-server";
import { siteConfig } from "@/lib/site";
import { notify } from "@/lib/notify";
import { loadDictionary } from "@/lib/dictionaries";
import { fill, hasLocale } from "@/lib/locale";

export type LeadState = { ok: boolean; message: string; errors?: Record<string, string> };

const required = ["name", "email", "company", "ecosystem", "role"] as const;

/**
 * Staffing request handler. Runs on the server only, stores in Supabase `leads`.
 * An email alert goes to NOTIFY_EMAIL (lib/notify.ts).
 * TODO: rate limiting if spam appears.
 */
export async function submitStaffingRequest(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Honeypot: bots fill every field, humans never see this one.
  if (form.get("website")) return { ok: true, message: "Thank you." };

  const data = Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, typeof v === "string" ? v.trim().slice(0, 2000) : ""]),
  );

  const locale = hasLocale(data.lang) ? data.lang : "en";
  const { contactForm: t, steps } = await loadDictionary(locale);

  const errors: Record<string, string> = {};
  for (const f of required) if (!data[f]) errors[f] = steps.required;
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = t.invalidWorkEmail;
  if (/@(gmail|yahoo|hotmail|outlook)\./i.test(data.email ?? "")) errors.email = t.useWorkEmail;

  if (Object.keys(errors).length) return { ok: false, message: t.checkFields, errors };

  const saved = await insertRow("leads", {
    name: data.name,
    email: data.email.toLowerCase(),
    company: data.company,
    ecosystem: data.ecosystem,
    role: data.role,
    engagement_model: data.model || null,
    target_start: data.start || null,
    location: data.location || null,
    message: data.message || null,
    locale,
  });
  if (!saved)
    return { ok: false, message: fill(t.error, { email: siteConfig.email }) };

  await notify(
    `New staffing request: ${data.company} (${data.ecosystem})`,
    {
      Name: data.name,
      Email: data.email,
      Company: data.company,
      Platform: data.ecosystem,
      Role: data.role,
      Model: data.model,
      Start: data.start,
      Location: data.location,
      Context: data.message,
      Language: locale === "fr" ? "French (reply in French)" : "English",
    },
    data.email,
  );

  return { ok: true, message: t.success };
}
