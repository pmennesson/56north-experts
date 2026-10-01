"use server";

import { insertRow } from "@/lib/supabase-server";
import { notify } from "@/lib/notify";
import { loadDictionary } from "@/lib/dictionaries";
import { fill, hasLocale } from "@/lib/locale";
import { site } from "@/lib/site";

export type DiagnosticState = { ok: boolean; message: string; errors?: Record<string, string> };

const required = ["name", "job", "company", "email", "count"] as const;

/** "Premier échange" handler: stores in Supabase `diagnostic_requests`, then emails an alert. */
export async function requestDiagnostic(_prev: DiagnosticState, form: FormData): Promise<DiagnosticState> {
  if (form.get("website")) return { ok: true, message: "" };

  const data = Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, typeof v === "string" ? v.trim().slice(0, 500) : ""]),
  );
  const locale = hasLocale(data.lang) ? data.lang : "fr";
  const { contact } = await loadDictionary(locale);

  const errors: Record<string, string> = {};
  for (const f of required) if (!data[f]) errors[f] = contact.ui.required;
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = contact.ui.invalidEmail;
  if (/@(gmail|yahoo|hotmail|outlook|live|icloud|orange|free|wanadoo)\./i.test(data.email ?? "")) errors.email = contact.server.useWorkEmail;
  if (Object.keys(errors).length) return { ok: false, message: contact.server.checkFields, errors };

  const saved = await insertRow("diagnostic_requests", {
    name: data.name,
    job_title: data.job,
    company: data.company,
    email: data.email.toLowerCase(),
    ai_count: data.count,
    locale,
  });
  if (!saved) return { ok: false, message: fill(contact.server.error, { email: site.email }) };

  await notify(
    `56north.io — demande de diagnostic : ${data.company}`,
    {
      Nom: data.name,
      Fonction: data.job,
      Entreprise: data.company,
      "E-mail": data.email,
      "Nombre d'IA": data.count,
      Langue: locale === "fr" ? "français" : "anglais (répondre en anglais)",
    },
    data.email,
  );

  return { ok: true, message: contact.server.success };
}
