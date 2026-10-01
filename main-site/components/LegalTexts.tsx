import Link from "next/link";
import { site } from "@/lib/site";
import { pagePaths } from "@/lib/seo";

const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

/* --------------------------------------------------------- Legal notice */

export function NoticeFr() {
  return (
    <>
      <h2>Éditeur du site</h2>
      <p>
        Le site 56north.io est édité par <strong>{site.company.name}</strong>, {site.company.formFr}, qui exploite la
        marque 56North.
        <br />
        Numéro d&apos;immatriculation (BRN) : {site.company.brn}
        <br />
        Siège social : {site.company.address}
        <br />
        Contact : {mail}
      </p>
      <h2>Directeur de la publication</h2>
      <p>Pascal Mennesson.</p>
      <h2>Hébergement</h2>
      <p>
        Site : OVH SAS, 2 rue Kellermann, 59100 Roubaix, France, téléphone 1007. Serveur situé dans l&apos;Union
        européenne.
        <br />
        Base de données du formulaire de contact : Supabase Inc., région européenne (Paris, France).
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site appartient à {site.company.name}, sauf mention contraire. « 56North », « Cockpit », « Note de navigabilité » et
        « Rapport de vol » sont des signes distinctifs ; toute reproduction sans autorisation écrite préalable est
        interdite.
      </p>
      <h2>Nature des informations publiées</h2>
      <p>
        Les informations réglementaires de ce site sont données à titre d&apos;information générale et ne constituent
        pas un conseil juridique. Nos services produisent des dossiers de preuves, pas des certifications.
      </p>
      <h2>Responsabilité et liens</h2>
      <p>
        L&apos;éditeur ne garantit pas l&apos;exhaustivité des informations publiées. Les liens vers des sites tiers
        n&apos;engagent pas l&apos;éditeur, qui n&apos;en contrôle pas le contenu.
      </p>
      <h2>Données personnelles</h2>
      <p>
        Leur traitement est décrit dans notre <Link href={pagePaths.privacy.fr}>politique de confidentialité</Link>.
      </p>
      <h2>Signaler un contenu illicite</h2>
      <p>Écrivez à {mail}.</p>
    </>
  );
}

export function NoticeEn() {
  return (
    <>
      <h2>Publisher</h2>
      <p>
        56north.io is published by <strong>{site.company.name}</strong>, a {site.company.formEn}, which operates the
        56North brand.
        <br />
        Business Registration Number (BRN): {site.company.brn}
        <br />
        Registered office: {site.company.address}
        <br />
        Contact: {mail}
      </p>
      <h2>Publication director</h2>
      <p>Pascal Mennesson.</p>
      <h2>Hosting</h2>
      <p>
        Website: OVH SAS, 2 rue Kellermann, 59100 Roubaix, France, telephone 1007. Server located in the European
        Union.
        <br />
        Contact form database: Supabase Inc., European region (Paris, France).
      </p>
      <h2>Intellectual property</h2>
      <p>
        All content on this site belongs to {site.company.name} unless stated otherwise. “56North”, “Cockpit”, “Note de navigabilité” (airworthiness score) and
        “Rapport de vol” (flight report) are distinctive signs; any reproduction without prior written permission is
        prohibited.
      </p>
      <h2>Nature of the information published</h2>
      <p>
        Regulatory information on this site is provided for general information only and is not legal advice. Our
        services produce evidence files, not certifications.
      </p>
      <h2>Liability and links</h2>
      <p>
        The publisher does not guarantee that the information published is exhaustive. Links to third-party sites are
        not under the publisher&apos;s control.
      </p>
      <h2>Personal data</h2>
      <p>
        How it is processed is described in our <Link href={pagePaths.privacy.en}>privacy policy</Link>.
      </p>
      <h2>Reporting unlawful content</h2>
      <p>Write to {mail}.</p>
    </>
  );
}

/* --------------------------------------------------------------- Privacy */

const rowsFr = [
  {
    name: "Formulaire « Premier échange »",
    data: "Nom, fonction, entreprise, e-mail professionnel, nombre approximatif d'IA utilisées, langue du formulaire.",
    purpose: "Répondre à votre demande et organiser l'échange.",
    basis: "Mesures précontractuelles prises à votre demande.",
    keep: "3 ans après le dernier contact, puis suppression.",
  },
  {
    name: "Lettre d'information mensuelle",
    data: "Nom, fonction, e-mail professionnel.",
    purpose: "Vous adresser la lettre, et rien d'autre.",
    basis: "Votre consentement, retirable à tout moment.",
    keep: "Jusqu'à votre désinscription.",
  },
  {
    name: "Échanges par e-mail",
    data: "Le contenu de nos échanges et vos coordonnées.",
    purpose: "Suivre la relation.",
    basis: "Intérêt légitime de l'éditeur.",
    keep: "3 ans après le dernier contact.",
  },
  {
    name: "Journaux techniques du serveur",
    data: "Adresse IP, date, page consultée.",
    purpose: "Assurer la sécurité et le bon fonctionnement du site.",
    basis: "Intérêt légitime de l'éditeur.",
    keep: "12 mois.",
  },
];

const rowsEn = [
  {
    name: "“First conversation” form",
    data: "Name, job title, company, work email, approximate number of AI systems used, language of the form.",
    purpose: "Answer your request and arrange the conversation.",
    basis: "Steps taken at your request before a contract.",
    keep: "3 years after the last contact, then deleted.",
  },
  {
    name: "Monthly newsletter",
    data: "Name, job title, work email.",
    purpose: "Send you the newsletter, and nothing else.",
    basis: "Your consent, which you can withdraw at any time.",
    keep: "Until you unsubscribe.",
  },
  {
    name: "Email exchanges",
    data: "The content of our exchanges and your contact details.",
    purpose: "Follow up the relationship.",
    basis: "The publisher's legitimate interest.",
    keep: "3 years after the last contact.",
  },
  {
    name: "Server technical logs",
    data: "IP address, date, page viewed.",
    purpose: "Keep the site secure and working.",
    basis: "The publisher's legitimate interest.",
    keep: "12 months.",
  },
];

function Rows({ rows, l }: { rows: typeof rowsFr; l: { data: string; purpose: string; basis: string; keep: string } }) {
  return (
    <>
      {rows.map((r) => (
        <div key={r.name} className="mt-6 rounded-2xl bg-canvas-alt p-6">
          <p className="!mt-0 font-semibold text-fg">{r.name}</p>
          <p>
            <strong>{l.data}</strong> {r.data}
          </p>
          <p>
            <strong>{l.purpose}</strong> {r.purpose}
          </p>
          <p>
            <strong>{l.basis}</strong> {r.basis}
          </p>
          <p>
            <strong>{l.keep}</strong> {r.keep}
          </p>
        </div>
      ))}
    </>
  );
}

export function PrivacyFr() {
  return (
    <>
      <h2>Responsable du traitement</h2>
      <p>
        {site.company.name} (BRN {site.company.brn}), {site.company.address}. Contact : {mail}.
      </p>
      <h2>Périmètre</h2>
      <p>
        Cette politique couvre le site 56north.io et les échanges qui en découlent. Le traitement des données au sein du
        Cockpit chez nos clients relève de leurs contrats.
      </p>
      <h2>Données collectées et finalités</h2>
      <Rows rows={rowsFr} l={{ data: "Données :", purpose: "Finalité :", basis: "Base légale :", keep: "Conservation :" }} />
      <h2>Qui y a accès</h2>
      <ul>
        <li>Les membres de l&apos;équipe 56North chargés de répondre aux demandes.</li>
        <li>
          <strong>OVH SAS</strong> (France) : hébergement du site, sur un serveur situé dans l&apos;Union européenne, et
          messagerie.
        </li>
        <li>
          <strong>Supabase Inc.</strong> : stockage des demandes du formulaire, dans une base de données située à Paris.
        </li>
        <li>
          <strong>Resend Inc.</strong> (États-Unis) : envoi à notre équipe d&apos;une alerte e-mail contenant votre
          demande.
        </li>
        <li>
          <strong>Google LLC</strong> (États-Unis) : messagerie qui reçoit ces alertes.
        </li>
      </ul>
      <p>
        Pour le Cockpit, nos sous-traitants techniques sont Scaleway (hébergement, France) et Mistral (modèle
        d&apos;évaluation, Union européenne).
      </p>
      <h2>Où sont les données</h2>
      <p>
        Les données du formulaire sont hébergées dans l&apos;Union européenne (base de données à Paris). Elles peuvent
        être consultées depuis Maurice, où l&apos;éditeur est établi. L&apos;alerte e-mail transite par des prestataires établis
        aux États-Unis ; ce transfert s&apos;appuie sur les clauses contractuelles types de la Commission européenne.
      </p>
      <h2>Cookies et traceurs</h2>
      <p>
        Ce site ne dépose aucun cookie publicitaire, aucun traceur de réseau social et n&apos;utilise aucun outil de
        mesure d&apos;audience. Les polices de caractères sont servies depuis notre propre serveur : aucune donnée
        n&apos;est transmise à Google Fonts.
      </p>
      <h2>Sécurité</h2>
      <p>
        Les échanges avec le site sont chiffrés (HTTPS). La base de données n&apos;est pas lisible depuis le site
        public : seul notre serveur, muni d&apos;une clé secrète, peut y écrire.
      </p>
      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
        d&apos;opposition et de portabilité, et pouvez retirer votre consentement à tout moment. Écrivez à {mail} ;
        nous répondons sous un mois. Vous pouvez aussi saisir le Data Protection Office de Maurice ou, si vous résidez
        dans l&apos;Union européenne, l&apos;autorité de votre pays (en France, la CNIL, 3 place de Fontenoy, 75007 Paris).
      </p>
      <h2>Évolution de cette politique</h2>
      <p>Toute modification est publiée sur cette page, avec sa date.</p>
    </>
  );
}

export function PrivacyEn() {
  return (
    <>
      <h2>Data controller</h2>
      <p>
        {site.company.name} (BRN {site.company.brn}), {site.company.address}. Contact: {mail}.
      </p>
      <h2>Scope</h2>
      <p>
        This policy covers 56north.io and the exchanges that follow from it. Data processed in the Cockpit for our
        clients is governed by their contracts.
      </p>
      <h2>Data collected and purposes</h2>
      <Rows rows={rowsEn} l={{ data: "Data:", purpose: "Purpose:", basis: "Legal basis:", keep: "Retention:" }} />
      <h2>Who has access</h2>
      <ul>
        <li>The members of the 56North team who handle requests.</li>
        <li>
          <strong>OVH SAS</strong> (France): website hosting, on a server located in the European Union, and email.
        </li>
        <li>
          <strong>Supabase Inc.</strong>: storage of form requests, in a database located in Paris.
        </li>
        <li>
          <strong>Resend Inc.</strong> (United States): delivery of an email alert containing your request to our team.
        </li>
        <li>
          <strong>Google LLC</strong> (United States): the mailbox that receives those alerts.
        </li>
      </ul>
      <p>For the Cockpit, our technical subcontractors are Scaleway (hosting, France) and Mistral (evaluation model, EU).</p>
      <h2>Where the data is</h2>
      <p>
        Form data is hosted in the European Union (database in Paris). It may be accessed from Mauritius, where the
        publisher is established. The email alert passes through providers based in the United States; this transfer relies on the
        European Commission&apos;s standard contractual clauses.
      </p>
      <h2>Cookies and trackers</h2>
      <p>
        This site sets no advertising cookies and no social media trackers, and uses no audience measurement tool.
        Fonts are served from our own server: no data is sent to Google Fonts.
      </p>
      <h2>Security</h2>
      <p>
        Exchanges with the site are encrypted (HTTPS). The database cannot be read from the public site: only our
        server, with a secret key, can write to it.
      </p>
      <h2>Your rights</h2>
      <p>
        You have the right to access, correct, erase, restrict, object and port your data, and can withdraw your
        consent at any time. Write to {mail}; we reply within one month. You can also contact the Data Protection Office
        of Mauritius or, if you live in the European Union, the authority of your country (in France, the CNIL, 3 place
        de Fontenoy, 75007 Paris).
      </p>
      <h2>Changes to this policy</h2>
      <p>Any change is published on this page, with its date.</p>
    </>
  );
}
