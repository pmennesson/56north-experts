import type { Article } from "./types";

/*
 * Sources checked on 1 October 2026:
 * - Regulation (EU) 2024/1689 (AI Act): Art. 3, 5, 26, 27, 50, 99.
 * - Regulation (EU) 2026/1744 (Digital Omnibus on AI), in force 27 July 2026:
 *   Annex III high-risk obligations moved to 2 December 2027, Annex I to 2 August 2028;
 *   Article 50 unchanged (50(2) marking grace period to 2 December 2026 for systems already on the market).
 */
const article: Article = {
  id: "ai-act-deployers-copilot-agentforce",
  status: "draft",
  published: "2026-10-01",
  updated: "2026-10-01",
  pillar: "regulate",
  category: { en: "EU AI Act", fr: "AI Act" },
  practices: ["microsoft", "salesforce", "sap", "servicenow", "workday"],
  sources: [
    { title: "Regulation (EU) 2024/1689 (AI Act), consolidated text", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { title: "European Commission: AI Act overview and timeline", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    { title: "Jones Walker: the high-risk delay and what still applies from 2 August 2026", url: "https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html?id=102nbon" },
  ],
  versions: {
    en: {
      slug: "eu-ai-act-deployer-obligations-copilot-agentforce",
      title: "EU AI Act: what companies using Copilot, Agentforce or Joule must do now",
      description:
        "Using Copilot, Agentforce, Joule or Now Assist makes you a deployer under the EU AI Act. What applies since August 2026, what moves to December 2027, and where to start.",
      keyword: "EU AI Act deployer obligations",
      niche: ["AI Act Copilot obligations", "AI Act Agentforce compliance", "AI Act chatbot disclosure requirement", "AI Act December 2027 high-risk deadline", "is my company a deployer under the AI Act"],
      takeaways: [
        "A company that uses an AI system under its own authority is a deployer under the AI Act, even if Microsoft, Salesforce or SAP built the model.",
        "Since 2 August 2026, transparency rules apply: people must know when they deal with an AI, and deepfakes must be disclosed. Prohibited practices have applied since February 2025.",
        "Obligations for high-risk uses such as recruitment or credit scoring were postponed to 2 December 2027 by Regulation (EU) 2026/1744. That is the time left to build the evidence, not to start thinking about it.",
      ],
      faq: [
        {
          q: "Is a company that uses Microsoft Copilot subject to the AI Act?",
          a: "Yes, as a deployer. Microsoft is the provider of Copilot; the company that uses it under its own authority has its own obligations, which depend on how it uses the tool.",
        },
        {
          q: "When do high-risk AI obligations apply to deployers?",
          a: "On 2 December 2027 for the uses listed in Annex III, such as recruitment and credit scoring, following Regulation (EU) 2026/1744. AI embedded in products regulated under Annex I follows on 2 August 2028.",
        },
        {
          q: "Must a customer chatbot say it is an AI?",
          a: "Yes. Since 2 August 2026, Article 50 requires that people are informed when they interact with an AI system, unless it is obvious from the context.",
        },
      ],
      body: `
Most large companies did not build their own AI models. They switched on Microsoft 365 Copilot, built agents in Agentforce, enabled Joule in SAP or Now Assist in ServiceNow. Under the EU AI Act, that does not make them bystanders: a company that uses an AI system under its own authority is a **deployer**, with obligations of its own. This article sums up what applies today, what was postponed, and where to start. It is general information, not legal advice.

## Provider or deployer: which one are you?

The **provider** develops an AI system and places it on the market or puts it into service under its own name. The **deployer** uses it in its business. When you use Copilot as delivered, Microsoft is the provider and you are the deployer. The line moves when you build your own agent on a platform and put it into service under your name, for example a customer-facing assistant on your website: for that system, you may be considered the provider. That matters for the transparency rules below.

## What already applies

- **Prohibited practices (since 2 February 2025).** Some uses are banned outright, whatever the tool. For companies, the most relevant is emotion recognition in the workplace and in education, except for medical or safety reasons. Check that no HR or employee-monitoring feature does this.
- **Transparency (since 2 August 2026).** Article 50 requires that people are informed when they interact with an AI system, unless it is obvious. Deployers must also disclose deepfakes, inform people exposed to emotion recognition or biometric categorisation, and disclose AI-generated text published to inform the public on matters of public interest, unless it has been reviewed by a person who takes editorial responsibility. In practice: a clear notice on every customer-facing chatbot or agent, and a rule for AI-generated images, video and audio.

## What was postponed, and to when

The Digital Omnibus on AI, Regulation (EU) 2026/1744, entered into force on 27 July 2026. It moved the obligations for **high-risk** systems listed in Annex III to **2 December 2027**, and for AI embedded in products already regulated under Annex I to **2 August 2028**. It did not change the transparency rules.

Annex III covers uses that enterprise platforms make easy: screening job applications or evaluating employees (Workday, SAP SuccessFactors, Microsoft tools), credit scoring, access to education, some uses of biometrics. The same tool can be high-risk in one use and not in another: summarising a meeting is not screening candidates.

## What a deployer of a high-risk system will have to do

From December 2027, Article 26 requires deployers of high-risk systems to:

- use the system according to the provider's instructions;
- assign human oversight to people who have the competence, training and authority to exercise it;
- make sure the input data under their control is relevant and representative for the purpose;
- monitor the system and report serious incidents;
- keep the logs generated by the system for at least six months, where those logs are under their control;
- inform workers' representatives and affected workers before using such a system at work;
- inform people when a high-risk system is used to make, or help make, decisions about them.

Public bodies, and companies that score credit or price life and health insurance, must also carry out a fundamental rights impact assessment (Article 27).

## Penalties

- **Prohibited practices:** up to €35 million or 7% of worldwide annual turnover.
- **Most other obligations, including transparency:** up to €15 million or 3%.

## Where to start

1. **Make the inventory.** List every AI system in use, including the AI features switched on in your existing software and the tools employees use with their own accounts.
2. **Classify each use, not each tool.** Note who uses it, for what decision, and on whom.
3. **Name an owner** for each system: a person, not a department.
4. **Close the transparency gaps now.** That is the obligation in force today.
5. **Start the evidence file** for any use that could be high-risk: design decisions, tests, oversight, incidents. Evidence produced after the fact convinces nobody.

This work needs people who know both the platform and the regulation. Our experts on [Microsoft](/experts/microsoft), [Salesforce](/experts/salesforce), [SAP](/experts/sap), [ServiceNow](/experts/servicenow) and [Workday](/experts/workday) are briefed on the obligations that apply to their scope. For the governance itself (inventory, classification, evidence), see [56North](https://56north.io).
`,
    },
    fr: {
      slug: "ai-act-obligations-deployeurs-copilot-agentforce",
      title: "AI Act : ce que doivent faire les entreprises qui utilisent Copilot, Agentforce ou Joule",
      description:
        "Utiliser Copilot, Agentforce, Joule ou Now Assist fait de vous un déployeur au sens de l'AI Act. Ce qui s'applique depuis août 2026, ce qui est reporté à décembre 2027, et par où commencer.",
      keyword: "AI Act obligations déployeur",
      niche: ["AI Act Copilot obligations entreprise", "AI Act Agentforce conformité", "AI Act chatbot mention obligatoire", "AI Act haut risque décembre 2027", "suis-je déployeur AI Act"],
      takeaways: [
        "Une entreprise qui utilise un système d'IA sous sa propre autorité est un déployeur au sens de l'AI Act, même si c'est Microsoft, Salesforce ou SAP qui a construit le modèle.",
        "Depuis le 2 août 2026, les règles de transparence s'appliquent : les personnes doivent savoir qu'elles ont affaire à une IA, et les hypertrucages doivent être signalés. Les pratiques interdites le sont depuis février 2025.",
        "Les obligations liées aux usages à haut risque, comme le recrutement ou l'octroi de crédit, ont été reportées au 2 décembre 2027 par le règlement (UE) 2026/1744. C'est le temps qu'il reste pour constituer les preuves, pas pour commencer à y réfléchir.",
      ],
      faq: [
        {
          q: "Une entreprise qui utilise Microsoft Copilot est-elle concernée par l'AI Act ?",
          a: "Oui, en tant que déployeur. Microsoft est le fournisseur de Copilot ; l'entreprise qui l'utilise sous sa propre autorité a ses propres obligations, qui dépendent de l'usage qu'elle en fait.",
        },
        {
          q: "Quand les obligations « haut risque » s'appliquent-elles aux déployeurs ?",
          a: "Le 2 décembre 2027 pour les usages listés à l'annexe III, comme le recrutement ou l'octroi de crédit, en application du règlement (UE) 2026/1744. L'IA intégrée aux produits réglementés de l'annexe I suit le 2 août 2028.",
        },
        {
          q: "Un chatbot client doit-il dire qu'il est une IA ?",
          a: "Oui. Depuis le 2 août 2026, l'article 50 impose d'informer les personnes qu'elles interagissent avec un système d'IA, sauf si c'est évident vu le contexte.",
        },
      ],
      body: `
La plupart des grandes entreprises n'ont pas construit leurs propres modèles d'IA. Elles ont activé Microsoft 365 Copilot, construit des agents dans Agentforce, activé Joule dans SAP ou Now Assist dans ServiceNow. Pour l'AI Act, cela n'en fait pas des spectatrices : une entreprise qui utilise un système d'IA sous sa propre autorité est un **déployeur**, avec ses propres obligations. Cet article résume ce qui s'applique aujourd'hui, ce qui a été reporté et par où commencer. Il s'agit d'une information générale, pas d'un conseil juridique.

## Fournisseur ou déployeur : qui êtes-vous ?

Le **fournisseur** développe un système d'IA et le met sur le marché ou en service sous son propre nom. Le **déployeur** l'utilise dans son activité. Quand vous utilisez Copilot tel que livré, Microsoft est le fournisseur et vous êtes le déployeur. La frontière bouge quand vous construisez votre propre agent sur une plateforme et le mettez en service sous votre nom, par exemple un assistant pour vos clients sur votre site : pour ce système, vous pouvez être considéré comme le fournisseur. Cela compte pour les règles de transparence ci-dessous.

## Ce qui s'applique déjà

- **Les pratiques interdites (depuis le 2 février 2025).** Certains usages sont purement interdits, quel que soit l'outil. Pour une entreprise, le plus pertinent est la reconnaissance des émotions sur le lieu de travail et dans l'enseignement, sauf pour des raisons médicales ou de sécurité. Vérifiez qu'aucune fonction RH ou de suivi des salariés ne le fait.
- **La transparence (depuis le 2 août 2026).** L'article 50 impose que les personnes soient informées lorsqu'elles interagissent avec un système d'IA, sauf si c'est évident. Les déployeurs doivent aussi signaler les hypertrucages, informer les personnes exposées à la reconnaissance des émotions ou à la catégorisation biométrique, et signaler les textes générés par IA publiés pour informer le public sur des sujets d'intérêt public, sauf relecture par une personne qui en assume la responsabilité éditoriale. Concrètement : une mention claire sur chaque assistant ou agent face aux clients, et une règle pour les images, vidéos et sons générés par IA.

## Ce qui a été reporté, et à quand

Le règlement omnibus numérique sur l'IA, règlement (UE) 2026/1744, est entré en vigueur le 27 juillet 2026. Il reporte au **2 décembre 2027** les obligations des systèmes **à haut risque** listés à l'annexe III, et au **2 août 2028** celles de l'IA intégrée aux produits déjà réglementés de l'annexe I. Il ne change pas les règles de transparence.

L'annexe III couvre des usages que les plateformes d'entreprise rendent faciles : tri de candidatures ou évaluation des salariés (Workday, SAP SuccessFactors, outils Microsoft), octroi de crédit, accès à l'éducation, certains usages de la biométrie. Le même outil peut être à haut risque dans un usage et pas dans un autre : résumer une réunion n'est pas trier des candidats.

## Ce que devra faire le déployeur d'un système à haut risque

À partir de décembre 2027, l'article 26 impose aux déployeurs de systèmes à haut risque de :

- utiliser le système conformément à la notice du fournisseur ;
- confier le contrôle humain à des personnes qui ont la compétence, la formation et l'autorité pour l'exercer ;
- veiller à ce que les données d'entrée qu'ils maîtrisent soient pertinentes et représentatives ;
- surveiller le fonctionnement du système et signaler les incidents graves ;
- conserver au moins six mois les journaux générés par le système, lorsqu'ils les maîtrisent ;
- informer les représentants du personnel et les salariés concernés avant d'utiliser un tel système au travail ;
- informer les personnes lorsqu'un système à haut risque sert à prendre, ou à aider à prendre, une décision les concernant.

Les organismes publics, et les entreprises qui évaluent la solvabilité ou tarifent l'assurance vie et santé, doivent en plus mener une analyse d'impact sur les droits fondamentaux (article 27).

## Les sanctions

- **Pratiques interdites :** jusqu'à 35 millions d'euros ou 7 % du chiffre d'affaires mondial annuel.
- **La plupart des autres manquements, dont la transparence :** jusqu'à 15 millions d'euros ou 3 %.

## Par où commencer

1. **Faites l'inventaire.** Listez tous les systèmes d'IA en service, y compris les fonctions IA activées dans vos logiciels existants et les outils que les salariés utilisent avec leurs comptes personnels.
2. **Classez chaque usage, pas chaque outil.** Notez qui l'utilise, pour quelle décision, et sur qui.
3. **Nommez un responsable** par système : une personne, pas un service.
4. **Comblez dès maintenant les écarts de transparence.** C'est l'obligation en vigueur aujourd'hui.
5. **Ouvrez le dossier de preuves** de tout usage qui pourrait être à haut risque : décisions de conception, tests, contrôle humain, incidents. Une preuve produite après coup ne convainc personne.

Ce travail demande des personnes qui connaissent à la fois la plateforme et la réglementation. Nos experts [Microsoft](/fr/experts/microsoft), [Salesforce](/fr/experts/salesforce), [SAP](/fr/experts/sap), [ServiceNow](/fr/experts/servicenow) et [Workday](/fr/experts/workday) sont informés des obligations qui s'appliquent à leur périmètre. Pour la gouvernance elle-même (inventaire, classification, preuves), voir [56North](https://56north.io).
`,
    },
  },
};

export default article;
