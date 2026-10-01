import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale, localePath } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { legal } = await getDictionary(locale);
  return buildMetadata({ title: legal.noticeTitle, description: legal.noticeDescription, path: "/legal", locale });
}

export default async function LegalNoticePage() {
  const locale = await getLocale();
  const { legal } = await getDictionary(locale);
  const c = siteConfig.company;
  const privacy = localePath(locale, "/privacy");
  const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;
  const parent = <a href={siteConfig.parent.url}>{siteConfig.parent.url.replace("https://", "")}</a>;

  return (
    <LegalPage title={legal.noticeTitle} updated={legal.updated} updatedLabel={legal.updatedLabel}>
      {locale === "fr" ? (
        <>
          <h2>Éditeur</h2>
          <p>
            <strong>{c.name}</strong>, société à responsabilité limitée par actions (private company limited by shares)
            immatriculée en République de Maurice.
            <br />
            Numéro d&apos;immatriculation (BRN) : {c.brn}
            <br />
            Siège social : {c.address.join(", ")}
            <br />
            Contact : {mail}
          </p>
          <p>
            {siteConfig.name} est le réseau d&apos;experts de {siteConfig.parent.name} ({parent}).
          </p>

          <h2>Hébergement</h2>
          <p>
            Site : OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Serveur situé dans l&apos;Union européenne.
            <br />
            Base de données : Supabase Inc., région européenne (Paris, France).
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Le contenu de ce site (textes, mise en page, graphismes) appartient à {c.name}, sauf mention contraire. Toute
            reproduction sans autorisation écrite préalable est interdite.
          </p>
          <p>
            Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana et tous les noms et logos de
            produits associés sont des marques de leurs propriétaires respectifs. Ils sont cités uniquement pour
            identifier les plateformes sur lesquelles interviennent nos experts. {c.name} est indépendante et n&apos;est
            ni affiliée à ces sociétés, ni parrainée ou soutenue par elles.
          </p>

          <h2>Règle d&apos;indépendance</h2>
          <p>
            {siteConfig.parent.name} n&apos;audite ni n&apos;évalue un système IA construit ou maintenu par un expert
            qu&apos;il a placé chez le même client au cours des 24 mois précédents.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données personnelles transmises via ce site est décrit dans notre{" "}
            <Link href={privacy}>politique de confidentialité</Link>.
          </p>
        </>
      ) : (
        <>
          <h2>Publisher</h2>
          <p>
            <strong>{c.name}</strong>, {c.form}.
            <br />
            Business Registration Number (BRN): {c.brn}
            <br />
            Registered office: {c.address.join(", ")}
            <br />
            Contact: {mail}
          </p>
          <p>
            {siteConfig.name} is the expert network of {siteConfig.parent.name} ({parent}).
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
            Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana and all related product
            names and logos are trademarks of their respective owners. They are used only to identify the platforms our
            experts work on. {c.name} is independent and is not affiliated with, sponsored or endorsed by these
            companies.
          </p>

          <h2>Independence rule</h2>
          <p>
            {siteConfig.parent.name} does not audit or rate an AI system built or maintained by an expert it placed
            with the same client in the previous 24 months.
          </p>

          <h2>Personal data</h2>
          <p>
            How we process personal data submitted through this website is described in our{" "}
            <Link href={privacy}>privacy policy</Link>.
          </p>
        </>
      )}
    </LegalPage>
  );
}
