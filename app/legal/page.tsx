import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Legal notice",
  description: `Legal information about ${siteConfig.name}, operated by ${siteConfig.company.name}.`,
  path: "/legal",
});

export default function LegalNoticePage() {
  const c = siteConfig.company;
  return (
    <LegalPage title="Legal notice" updated={siteConfig.legalUpdated}>
      <h2>Publisher</h2>
      <p>
        <strong>{c.name}</strong>, {c.form}.
        <br />
        Business Registration Number (BRN): {c.brn}
        <br />
        Registered office: {c.address.join(", ")}
        <br />
        Contact: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
      <p>
        {siteConfig.name} is the expert network of {siteConfig.parent.name} (
        <a href={siteConfig.parent.url}>{siteConfig.parent.url.replace("https://", "")}</a>).
      </p>

      <h2>Hosting</h2>
      <p>
        Website: OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Server located in the European Union.
        <br />
        Database: Supabase Inc., European region (Paris, France).
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content of this website (texts, layout, graphics) belongs to {c.name} unless stated otherwise. Any
        reproduction without prior written permission is prohibited.
      </p>
      <p>
        Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana and all related product names
        and logos are trademarks of their respective owners. They are used only to identify the platforms our experts
        work on. {c.name} is independent and is not affiliated with, sponsored or endorsed by these companies.
      </p>

      <h2>Independence rule</h2>
      <p>
        {siteConfig.parent.name} does not audit or rate an AI system built or maintained by an expert it placed with
        the same client in the previous 24 months.
      </p>

      <h2>Personal data</h2>
      <p>
        How we process personal data submitted through this website is described in our{" "}
        <a href="/privacy">privacy policy</a>.
      </p>
    </LegalPage>
  );
}
