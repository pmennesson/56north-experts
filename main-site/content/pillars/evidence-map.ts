import type { Locale } from "@/lib/locale";

/**
 * The evidence file, article by article: the data behind the visual on the AI Act compliance page.
 * Same facts as the table it replaces (articles, application dates, evidence to keep), sources listed
 * on the page (art. 4, 26, 27, 50, timeline, omnibus). Do not add an article without opening its text.
 */
export type EvidenceItem = { article: string; obligation: string; evidence: string };
export type EvidencePhase = { date: string; iso: string; scope: string; items: EvidenceItem[] };
export type EvidenceMap = {
  title: string;
  intro: string;
  inForce: string;
  upcoming: string;
  evidenceLabel: string;
  qualitiesTitle: string;
  qualities: string[];
  phases: EvidencePhase[];
};

const fr: EvidenceMap = {
  title: "Le dossier de preuves, article par article",
  intro: "Chaque obligation de l'entreprise qui déploie une IA appelle une pièce précise. Le dossier se constitue au fil de l'eau, dans l'ordre où les obligations s'appliquent.",
  inForce: "En vigueur",
  upcoming: "À venir",
  evidenceLabel: "Au dossier",
  qualitiesTitle: "Chaque pièce du dossier est",
  qualities: ["datée", "attribuée à son auteur", "intacte", "rattachée à un système et à un article", "bornée"],
  phases: [
    {
      date: "2 février 2025",
      iso: "2025-02-02",
      scope: "Toutes les entreprises qui utilisent l'IA",
      items: [{ article: "Art. 4", obligation: "Favoriser la maîtrise de l'IA du personnel", evidence: "Les mesures prises, qui en a bénéficié, à quelle date" }],
    },
    {
      date: "2 août 2026",
      iso: "2026-08-02",
      scope: "Transparence",
      items: [
        { article: "Art. 50(3)", obligation: "Informer les personnes exposées à la reconnaissance des émotions ou à la catégorisation biométrique", evidence: "Le texte d'information et sa date de mise en place" },
        { article: "Art. 50(4)", obligation: "Signaler les hypertrucages et les textes générés publiés pour informer le public", evidence: "Les mentions affichées, la règle de relecture humaine le cas échéant" },
      ],
    },
    {
      date: "2 décembre 2027",
      iso: "2027-12-02",
      scope: "Systèmes à haut risque (annexe III)",
      items: [
        { article: "Art. 26(1)", obligation: "Utiliser le système selon sa notice", evidence: "La notice reçue, les mesures prises pour la suivre" },
        { article: "Art. 26(2)", obligation: "Surveillance humaine par des personnes compétentes", evidence: "La désignation nominative, la formation suivie" },
        { article: "Art. 26(5)", obligation: "Surveiller, signaler les risques et incidents", evidence: "Les constats, les signalements, les suspensions" },
        { article: "Art. 26(6)", obligation: "Conserver les journaux", evidence: "Les journaux, au moins six mois" },
        { article: "Art. 26(7)", obligation: "Informer les salariés et leurs représentants", evidence: "L'information faite, avant la mise en service" },
        { article: "Art. 26(11)", obligation: "Informer les personnes concernées par une décision", evidence: "Le texte d'information et le parcours où il apparaît" },
      ],
    },
  ],
};

const en: EvidenceMap = {
  title: "The evidence file, article by article",
  intro: "Each obligation of a company that deploys AI calls for a specific piece of evidence. The file is built as you go, in the order the obligations apply.",
  inForce: "In force",
  upcoming: "Upcoming",
  evidenceLabel: "In the file",
  qualitiesTitle: "Every piece in the file is",
  qualities: ["dated", "attributed to its author", "intact", "tied to a system and an article", "scoped"],
  phases: [
    {
      date: "2 February 2025",
      iso: "2025-02-02",
      scope: "Every company that uses AI",
      items: [{ article: "Art. 4", obligation: "Support the AI literacy of staff", evidence: "The measures taken, who benefited, on what date" }],
    },
    {
      date: "2 August 2026",
      iso: "2026-08-02",
      scope: "Transparency",
      items: [
        { article: "Art. 50(3)", obligation: "Inform people exposed to emotion recognition or biometric categorisation", evidence: "The information text and the date it was put in place" },
        { article: "Art. 50(4)", obligation: "Disclose deepfakes and generated text published to inform the public", evidence: "The disclosures shown, and the human review rule where it applies" },
      ],
    },
    {
      date: "2 December 2027",
      iso: "2027-12-02",
      scope: "High-risk systems (Annex III)",
      items: [
        { article: "Art. 26(1)", obligation: "Use the system according to its instructions", evidence: "The instructions received, the measures taken to follow them" },
        { article: "Art. 26(2)", obligation: "Human oversight by competent people", evidence: "The named assignment, the training followed" },
        { article: "Art. 26(5)", obligation: "Monitor, report risks and incidents", evidence: "Findings, reports, suspensions" },
        { article: "Art. 26(6)", obligation: "Keep the logs", evidence: "The logs, for at least six months" },
        { article: "Art. 26(7)", obligation: "Inform workers and their representatives", evidence: "The information given, before putting into service" },
        { article: "Art. 26(11)", obligation: "Inform people subject to a decision", evidence: "The information text and where it appears" },
      ],
    },
  ],
};

export const evidenceMap: Record<Locale, EvidenceMap> = { fr, en };
