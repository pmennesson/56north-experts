import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Privacy policy",
  description: `How ${siteConfig.company.name} collects and processes personal data on ${siteConfig.name}.`,
  path: "/privacy",
});

/*
 * Keep this page true to the code. If a tool is added (analytics, CRM,
 * chat widget), list it under "Who receives your data" before deploying.
 */
export default function PrivacyPage() {
  const c = siteConfig.company;
  const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;
  return (
    <LegalPage title="Privacy policy" updated={siteConfig.legalUpdated}>
      <p>
        This policy explains what personal data {siteConfig.name} collects, why, and what rights you have. It applies
        to this website ({siteConfig.url.replace("https://", "")}) and to the two forms on it: the staffing request
        form and the expert application form.
      </p>

      <h2>Who is responsible</h2>
      <p>
        The data controller is <strong>{c.name}</strong> (BRN {c.brn}), {c.address.join(", ")}. For any question or
        request about your data, write to {mail}.
      </p>

      <h2>What we collect and why</h2>
      {[
        {
          form: "Staffing request form",
          data: "Name, work email, company, platform, role needed, engagement model, start date, location, free-text context.",
          purpose: "Answer your request and propose suitable experts.",
          basis:
            "Steps taken at your request before a contract, and our legitimate interest in answering business enquiries.",
        },
        {
          form: "Expert application form",
          data: "Name, email, LinkedIn profile URL, platform, years of experience, modules delivered, certifications, community contributions, day rate expectation, availability, location, and any referral you choose to give.",
          purpose: "Assess your application and match you with missions.",
          basis: "Your consent, given with the checkbox on the form, and steps taken at your request before a contract.",
        },
      ].map((r) => (
        <div key={r.form} className="mt-6 rounded-2xl bg-canvas-alt p-6">
          <p className="!mt-0 font-semibold text-fg">{r.form}</p>
          <p>
            <strong>Data:</strong> {r.data}
          </p>
          <p>
            <strong>Purpose:</strong> {r.purpose}
          </p>
          <p>
            <strong>Legal basis:</strong> {r.basis}
          </p>
        </div>
      ))}
      <p>
        If you refer a peer, only the name and profile link you provide are recorded, solely to contact that person
        about the network. They can ask us to delete it at any time.
      </p>
      <p>
        We do not use cookies, analytics or advertising trackers on this website. Fonts are served from our own server.
      </p>

      <h2>How decisions are made</h2>
      <p>
        Every application and request is read by a person. We do not make decisions about you based solely on automated
        processing. If we introduce tools that help prepare assessments, a person will still take every decision and
        this policy will be updated first.
      </p>

      <h2>Who receives your data</h2>
      <p>We do not sell your data. It is shared only with the service providers that run this website:</p>
      <ul>
        <li>
          <strong>OVH SAS</strong> (France) — hosting of the website, on a server in the European Union.
        </li>
        <li>
          <strong>Supabase Inc.</strong> — storage of form submissions in a database located in Paris, France.
        </li>
        <li>
          <strong>Resend Inc.</strong> (United States) — delivery of an internal email alert containing your
          submission to our team.
        </li>
        <li>
          <strong>Google LLC</strong> (United States) — our team&apos;s mailbox, which receives those alerts.
        </li>
      </ul>
      <p>
        Where data is transferred outside the European Economic Area or Mauritius, the transfer relies on the European
        Commission&apos;s standard contractual clauses or an equivalent safeguard offered by the provider. With your
        agreement, we may share an expert&apos;s profile with a client for a specific mission; we never do so without
        telling the expert first.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>Staffing requests: 3 years after our last exchange with you.</li>
        <li>Expert applications: 24 months after your last update, unless you ask us to keep your profile longer.</li>
      </ul>
      <p>After these periods, the data is deleted.</p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your data, to restrict or object to its processing, and to receive it
        in a portable format. Where processing is based on consent, you can withdraw it at any time; this does not
        affect processing already carried out. Write to {mail}. We answer within one month.
      </p>
      <p>
        You can also lodge a complaint with the Data Protection Office of Mauritius or, if you live in the European
        Union, with the data protection authority of your country.
      </p>

      <h2>Security</h2>
      <p>
        Data is encrypted in transit (HTTPS). The database cannot be read from the public website: only our server,
        with a secret key, can write to it, and access is limited to our team.
      </p>

      <h2>Changes</h2>
      <p>We will update this page if our practices change. The date at the top shows the latest version.</p>
    </LegalPage>
  );
}
