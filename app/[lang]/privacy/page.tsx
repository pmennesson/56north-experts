import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { getDictionary, getLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { legal } = await getDictionary(locale);
  return buildMetadata({ title: legal.privacyTitle, description: legal.privacyDescription, path: "/privacy", locale });
}

/*
 * Keep this page true to the code. If a tool is added (analytics, CRM,
 * chat widget), list it under "Who receives your data" before deploying.
 */
export default async function PrivacyPage() {
  const locale = await getLocale();
  const { legal } = await getDictionary(locale);
  return (
    <LegalPage title={legal.privacyTitle} updated={legal.updated} updatedLabel={legal.updatedLabel}>
      {locale === "fr" ? <PrivacyFr /> : <PrivacyEn />}
    </LegalPage>
  );
}

const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

function PrivacyEn() {
  const c = siteConfig.company;
  return (
    <>
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
          data: "Name, work email, company, platform, role needed, engagement model, start date, location, free-text context, language of the form.",
          purpose: "Answer your request and propose suitable experts.",
          basis:
            "Steps taken at your request before a contract, and our legitimate interest in answering business enquiries.",
        },
        {
          form: "Expert application form",
          data: "Name, email, LinkedIn profile URL, platform, years of experience, modules delivered, certifications, community contributions, day rate expectation, availability, location, language of the form, and any referral you choose to give.",
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
    </>
  );
}

function PrivacyFr() {
  const c = siteConfig.company;
  return (
    <>
      <p>
        Cette politique explique quelles données personnelles {siteConfig.name} collecte, pourquoi, et quels sont vos
        droits. Elle s&apos;applique à ce site ({siteConfig.url.replace("https://", "")}) et à ses deux formulaires : la
        demande d&apos;experts et la candidature d&apos;expert.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>{c.name}</strong> (BRN {c.brn}), {c.address.join(", ")}. Pour toute
        question ou demande concernant vos données, écrivez à {mail}.
      </p>

      <h2>Données collectées et finalités</h2>
      {[
        {
          form: "Formulaire de demande d'experts",
          data: "Nom, e-mail professionnel, entreprise, plateforme, profil recherché, mode d'intervention, date de démarrage, lieu, contexte libre, langue du formulaire.",
          purpose: "Répondre à votre demande et vous proposer des experts adaptés.",
          basis:
            "Mesures précontractuelles prises à votre demande, et notre intérêt légitime à répondre aux demandes professionnelles.",
        },
        {
          form: "Formulaire de candidature d'expert",
          data: "Nom, e-mail, URL du profil LinkedIn, plateforme, années d'expérience, modules livrés, certifications, contributions communautaires, taux journalier souhaité, disponibilité, lieu, langue du formulaire, et toute recommandation que vous choisissez de faire.",
          purpose: "Évaluer votre candidature et vous proposer des missions.",
          basis: "Votre consentement, donné par la case à cocher du formulaire, et les mesures précontractuelles prises à votre demande.",
        },
      ].map((r) => (
        <div key={r.form} className="mt-6 rounded-2xl bg-canvas-alt p-6">
          <p className="!mt-0 font-semibold text-fg">{r.form}</p>
          <p>
            <strong>Données :</strong> {r.data}
          </p>
          <p>
            <strong>Finalité :</strong> {r.purpose}
          </p>
          <p>
            <strong>Base légale :</strong> {r.basis}
          </p>
        </div>
      ))}
      <p>
        Si vous recommandez un pair, seuls le nom et le lien de profil que vous indiquez sont enregistrés, uniquement
        pour le contacter au sujet du réseau. Cette personne peut en demander la suppression à tout moment.
      </p>
      <p>
        Ce site n&apos;utilise ni cookies, ni outil de mesure d&apos;audience, ni traceur publicitaire. Les polices sont
        servies depuis notre propre serveur.
      </p>

      <h2>Comment les décisions sont prises</h2>
      <p>
        Chaque candidature et chaque demande est lue par une personne. Aucune décision vous concernant n&apos;est prise
        sur le seul fondement d&apos;un traitement automatisé. Si nous adoptons des outils d&apos;aide à
        l&apos;évaluation, une personne prendra toujours la décision et cette politique sera mise à jour au préalable.
      </p>

      <h2>Destinataires des données</h2>
      <p>Nous ne vendons pas vos données. Elles ne sont partagées qu&apos;avec les prestataires qui font fonctionner ce site :</p>
      <ul>
        <li>
          <strong>OVH SAS</strong> (France) : hébergement du site, sur un serveur situé dans l&apos;Union européenne.
        </li>
        <li>
          <strong>Supabase Inc.</strong> : stockage des formulaires dans une base de données située à Paris, en France.
        </li>
        <li>
          <strong>Resend Inc.</strong> (États-Unis) : envoi à notre équipe d&apos;une alerte e-mail interne contenant
          votre formulaire.
        </li>
        <li>
          <strong>Google LLC</strong> (États-Unis) : messagerie de notre équipe, qui reçoit ces alertes.
        </li>
      </ul>
      <p>
        Lorsque des données sont transférées hors de l&apos;Espace économique européen ou de Maurice, le transfert
        s&apos;appuie sur les clauses contractuelles types de la Commission européenne ou sur une garantie équivalente
        offerte par le prestataire. Avec son accord, nous pouvons transmettre le profil d&apos;un expert à un client pour
        une mission précise ; nous ne le faisons jamais sans en informer l&apos;expert au préalable.
      </p>

      <h2>Durée de conservation</h2>
      <ul>
        <li>Demandes d&apos;experts : 3 ans après notre dernier échange avec vous.</li>
        <li>
          Candidatures d&apos;experts : 24 mois après votre dernière mise à jour, sauf si vous nous demandez de conserver
          votre profil plus longtemps.
        </li>
      </ul>
      <p>À l&apos;issue de ces durées, les données sont supprimées.</p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l&apos;accès à vos données, leur rectification ou leur effacement, la limitation de leur
        traitement ou vous y opposer, et les recevoir dans un format portable. Lorsque le traitement repose sur votre
        consentement, vous pouvez le retirer à tout moment, sans effet sur les traitements déjà effectués. Écrivez à{" "}
        {mail}. Nous répondons sous un mois.
      </p>
      <p>
        Vous pouvez aussi déposer une réclamation auprès du Data Protection Office de Maurice ou, si vous résidez dans
        l&apos;Union européenne, auprès de l&apos;autorité de protection des données de votre pays (la CNIL en France).
      </p>

      <h2>Sécurité</h2>
      <p>
        Les données sont chiffrées pendant leur transfert (HTTPS). La base de données n&apos;est pas lisible depuis le
        site public : seul notre serveur, muni d&apos;une clé secrète, peut y écrire, et l&apos;accès est réservé à
        notre équipe.
      </p>

      <h2>Modifications</h2>
      <p>Nous mettrons cette page à jour si nos pratiques évoluent. La date en haut de page indique la dernière version.</p>
    </>
  );
}
