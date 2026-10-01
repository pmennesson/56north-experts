/**
 * Ecosystem practices. Feeds: home grid, /experts/[ecosysteme] pages,
 * sitemap, llms.txt and JSON-LD. Add an entry here = a new SEO pillar page.
 *
 * Product names reflect vendor naming as of mid-2026. Vendors rename AI
 * products often: review this file each quarter.
 */
export type Ecosystem = {
  slug: string;
  /** core = main grid; specialist = niche practice, flagged as such */
  tier: "core" | "specialist";
  vendor: string;
  name: string;
  headline: string;
  summary: string;
  modules: { name: string; detail: string }[];
  roles: string[];
  credentials: string[];
  faq: { q: string; a: string }[];
};

import { frenchTypo, type Locale } from "@/lib/locale";

type Base = Omit<Ecosystem, "faq"> & { specificFaq: { q: string; a: string } };

const sharedFaqEn = (e: Base) => [
  {
    q: `Where do you find senior ${e.vendor} AI experts?`,
    a: `Mostly outside job boards. We source through the ${e.vendor} practitioner communities: user groups, community forums, meetups and conference speakers, with priority to recognised community contributors. Lead time depends on how scarce the profile is; we give you a realistic estimate when we qualify the brief.`,
  },
  {
    q: `How do you vet ${e.vendor} AI consultants?`,
    a: `Every profile passes three checks: a technical interview led by a senior peer on the same ${e.vendor} stack, verification of vendor credentials against the official registry where one exists, and reference calls on past enterprise deliveries. Profiles that fail any step are not presented.`,
  },
  {
    q: "What engagement models do you offer?",
    a: "Three models: staff augmentation (an expert embedded in your team, billed on a daily rate), a dedicated squad (architect plus engineers delivering an agreed scope), and a fractional AI architect (two to eight days a month for design authority and governance).",
  },
  e.specificFaq,
];

const sharedFaqFr = (e: Base) => [
  {
    q: `Où trouvez-vous des experts IA ${e.vendor} seniors ?`,
    a: `Surtout en dehors des job boards. Nous cherchons dans les communautés de praticiens ${e.vendor} : groupes d'utilisateurs, forums, meetups et intervenants de conférences, en priorité parmi les contributeurs reconnus. Le délai dépend de la rareté du profil ; nous vous donnons une estimation réaliste dès le cadrage du besoin.`,
  },
  {
    q: `Comment évaluez-vous les consultants IA ${e.vendor} ?`,
    a: `Chaque profil passe trois contrôles : un entretien technique mené par un pair senior sur la même pile ${e.vendor}, la vérification des certifications auprès du registre officiel quand il existe, et des appels de référence sur des projets menés en grand compte. Un profil qui échoue à une étape n'est pas présenté.`,
  },
  {
    q: "Quels modes d'intervention proposez-vous ?",
    a: "Trois modes : la régie (un expert intégré à votre équipe, au taux journalier), l'équipe dédiée (un architecte et des ingénieurs qui livrent un périmètre convenu) et l'architecte IA à temps partagé (deux à huit jours par mois pour l'architecture et la gouvernance).",
  },
  e.specificFaq,
];

const base: Base[] = [
  {
    slug: "microsoft",
    tier: "core",
    vendor: "Microsoft",
    name: "Microsoft AI & Copilot",
    headline: "Senior experts for Copilot, Microsoft Foundry and Azure OpenAI.",
    summary:
      "Architects and engineers who have shipped Copilot extensions, custom agents and Azure-hosted generative AI inside regulated enterprises.",
    modules: [
      { name: "Microsoft 365 Copilot", detail: "Rollout, extensibility, Graph connectors, adoption and data governance." },
      { name: "Copilot Studio", detail: "Custom agents, topics, actions, Power Platform integration, ALM." },
      { name: "Microsoft Foundry", detail: "Model catalog, agent service, evaluation, prompt flow, responsible AI tooling." },
      { name: "Azure OpenAI", detail: "RAG architectures, private networking, content filtering, cost control." },
    ],
    roles: ["Azure AI Architect", "Copilot Studio Developer", "M365 Copilot Adoption Lead", "MLOps Engineer"],
    credentials: ["Azure AI Engineer Associate", "Azure Solutions Architect Expert", "Power Platform Developer Associate"],
    specificFaq: {
      q: "Can your experts work within our Microsoft tenant security model?",
      a: "Yes. Our Microsoft profiles are used to Entra ID conditional access, Purview sensitivity labels and private endpoints, and work under your tenant policies with named accounts and least-privilege access.",
    },
  },
  {
    slug: "salesforce",
    tier: "core",
    vendor: "Salesforce",
    name: "Salesforce Agentforce & Data 360",
    headline: "Senior experts for Agentforce, Data 360 and the Einstein Trust Layer.",
    summary:
      "Consultants who design autonomous agents on top of clean CRM data, with guardrails your compliance team can sign off.",
    modules: [
      { name: "Agentforce", detail: "Agent design, topics and actions, Prompt Builder, testing center, go-live." },
      { name: "Data 360", detail: "Data model, identity resolution, zero-copy integrations, activation." },
      { name: "Einstein Trust Layer", detail: "Grounding, masking, audit trail, toxicity controls." },
      { name: "MuleSoft & Integration", detail: "Agent actions over APIs, event-driven integration with ERP and legacy." },
    ],
    roles: ["Agentforce Architect", "Data 360 Consultant", "Salesforce AI Developer", "Technical Architect"],
    credentials: ["Agentforce Specialist", "Data Cloud Consultant", "Application / System Architect"],
    specificFaq: {
      q: "Do you provide Agentforce experts for an existing Salesforce org?",
      a: "Yes. Most engagements start on an existing org: we assess data readiness in Data 360, define the first agent use cases, then build and test them with your admins and your system integrator if you have one.",
    },
  },
  {
    slug: "google-cloud",
    tier: "core",
    vendor: "Google Cloud",
    name: "Google Cloud Vertex AI & Gemini",
    headline: "Senior experts for Vertex AI, Gemini Enterprise and BigQuery.",
    summary:
      "ML engineers and architects who take Gemini-based use cases from notebook to governed production on Google Cloud.",
    modules: [
      { name: "Vertex AI", detail: "Model Garden, tuning, evaluation, pipelines, feature store, endpoints." },
      { name: "Gemini Enterprise", detail: "Enterprise search and agents over Workspace and third-party sources." },
      { name: "Agent Development Kit", detail: "Multi-agent systems, tool use, deployment on Agent Engine." },
      { name: "BigQuery & data foundation", detail: "BigQuery ML, vector search, data governance with Dataplex." },
    ],
    roles: ["Vertex AI Architect", "ML Engineer", "Data & AI Platform Engineer", "GenAI Solution Architect"],
    credentials: ["Professional Machine Learning Engineer", "Professional Cloud Architect", "Professional Data Engineer"],
    specificFaq: {
      q: "Can you staff Google Cloud AI experts for data residency constraints in Europe?",
      a: "Yes. Our Google Cloud profiles design for EU regions, VPC Service Controls, CMEK and Assured Workloads where required, and document residency choices for your DPO.",
    },
  },
  {
    slug: "sap",
    tier: "core",
    vendor: "SAP",
    name: "SAP Business AI & Joule",
    headline: "Senior experts for Joule, SAP Business AI and BTP AI services.",
    summary:
      "SAP-native consultants who embed AI into finance, supply chain and HR processes without breaking the clean core.",
    modules: [
      { name: "Joule", detail: "Copilot scenarios, custom skills and agents in Joule Studio, S/4HANA integration." },
      { name: "SAP Business AI", detail: "Embedded AI scenarios across S/4HANA, SuccessFactors, Ariba, Concur." },
      { name: "BTP AI Core & Generative AI Hub", detail: "Model access, orchestration, grounding, prompt management." },
      { name: "SAP Business Data Cloud", detail: "Data products, Datasphere, Databricks integration for AI use cases." },
    ],
    roles: ["SAP AI Architect", "BTP Developer", "Joule Consultant", "S/4HANA Solution Architect"],
    credentials: ["SAP Certified Associate (BTP / AI)", "SAP Certified Application Associate", "SAP Enterprise Architect"],
    specificFaq: {
      q: "Do your SAP AI experts follow clean-core principles?",
      a: "Yes. Extensions are built side-by-side on BTP with released APIs, so AI scenarios do not add custom code to your S/4HANA core and remain upgrade-safe.",
    },
  },
  {
    slug: "servicenow",
    tier: "core",
    vendor: "ServiceNow",
    name: "ServiceNow Now Assist & AI Agents",
    headline: "Senior experts for Now Assist, AI Agents and Workflow Data Fabric.",
    summary:
      "Platform architects who turn IT, HR and customer workflows into agentic workflows with measurable deflection and resolution gains.",
    modules: [
      { name: "Now Assist", detail: "Generative AI for ITSM, CSM, HRSD: summarisation, resolution, search." },
      { name: "AI Agents & Orchestrator", detail: "Agent design, AI Agent Studio, orchestration across workflows." },
      { name: "Workflow Data Fabric", detail: "Zero-copy connectors, integration hub, knowledge graph." },
      { name: "AI Control Tower", detail: "Inventory, governance and value tracking of AI across the enterprise." },
    ],
    roles: ["ServiceNow AI Architect", "Now Assist Consultant", "Platform Developer", "Technical Architect"],
    credentials: ["Certified Implementation Specialist", "Certified Application Developer", "Certified Technical Architect"],
    specificFaq: {
      q: "Can you reinforce our ServiceNow team for a Now Assist rollout?",
      a: "Yes. We typically add a Now Assist architect and one or two platform developers to your existing team for the rollout phase, with knowledge transfer built into the engagement.",
    },
  },
  {
    slug: "workday",
    tier: "specialist",
    vendor: "Workday",
    name: "Workday AI & Sana",
    headline: "Senior experts for Sana, Workday agents and Workday Build.",
    summary:
      "HCM and Financials specialists who bring Workday's AI agents into HR and finance operations, with the governance your auditors expect.",
    modules: [
      { name: "Sana from Workday", detail: "Conversational AI layer across HR and finance, rolled out on your Workday tenant." },
      { name: "HR & finance agents", detail: "HR service, talent acquisition, payroll, accounting, procurement and expense agents." },
      { name: "Agent System of Record", detail: "Governance, audit trail and identity for Workday and third-party agents." },
      { name: "Workday Build & Data Cloud", detail: "Low-code agent building, extensions, zero-copy data sharing with your data platform." },
    ],
    roles: ["Workday AI Solution Architect", "Workday HCM Consultant", "Workday Financials Consultant", "Workday Extend & Integration Developer"],
    credentials: ["Workday Pro / partner certifications (HCM, Financials)", "Workday Extend", "Workday Integrations"],
    specificFaq: {
      q: "Can your Workday experts work alongside our implementation partner?",
      a: "Yes. Most Workday clients already have an implementation partner. Our experts reinforce your team or the partner's on AI scope (agent design, governance, data) without taking over the programme.",
    },
  },
];

/** French copy, merged over the English base by slug (technical fields stay shared). */
const frText: Record<string, Pick<Base, "name" | "headline" | "summary" | "modules" | "roles" | "specificFaq">> = {
  microsoft: {
    name: "Microsoft IA & Copilot",
    headline: "Des experts seniors Copilot, Microsoft Foundry et Azure OpenAI.",
    summary:
      "Des architectes et ingénieurs qui ont livré des extensions Copilot, des agents sur mesure et de l'IA générative hébergée sur Azure dans des entreprises réglementées.",
    modules: [
      { name: "Microsoft 365 Copilot", detail: "Déploiement, extensibilité, connecteurs Graph, adoption et gouvernance des données." },
      { name: "Copilot Studio", detail: "Agents sur mesure, topics, actions, intégration Power Platform, ALM." },
      { name: "Microsoft Foundry", detail: "Catalogue de modèles, service d'agents, évaluation, prompt flow, outils d'IA responsable." },
      { name: "Azure OpenAI", detail: "Architectures RAG, réseau privé, filtrage de contenu, maîtrise des coûts." },
    ],
    roles: ["Architecte Azure AI", "Développeur Copilot Studio", "Responsable adoption M365 Copilot", "Ingénieur MLOps"],
    specificFaq: {
      q: "Vos experts peuvent-ils travailler dans le modèle de sécurité de notre tenant Microsoft ?",
      a: "Oui. Nos profils Microsoft maîtrisent l'accès conditionnel Entra ID, les étiquettes de confidentialité Purview et les points de terminaison privés, et travaillent selon les règles de votre tenant, avec des comptes nominatifs et le moindre privilège.",
    },
  },
  salesforce: {
    name: "Salesforce Agentforce & Data 360",
    headline: "Des experts seniors Agentforce, Data 360 et Einstein Trust Layer.",
    summary:
      "Des consultants qui conçoivent des agents autonomes sur des données CRM propres, avec des garde-fous que votre conformité peut valider.",
    modules: [
      { name: "Agentforce", detail: "Conception d'agents, topics et actions, Prompt Builder, testing center, mise en production." },
      { name: "Data 360", detail: "Modèle de données, résolution d'identité, intégrations zero-copy, activation." },
      { name: "Einstein Trust Layer", detail: "Ancrage des réponses, masquage, piste d'audit, contrôle de toxicité." },
      { name: "MuleSoft & intégration", detail: "Actions d'agents via API, intégration événementielle avec l'ERP et l'existant." },
    ],
    roles: ["Architecte Agentforce", "Consultant Data 360", "Développeur IA Salesforce", "Architecte technique"],
    specificFaq: {
      q: "Fournissez-vous des experts Agentforce pour une org Salesforce existante ?",
      a: "Oui. La plupart des missions démarrent sur une org existante : nous évaluons la maturité des données dans Data 360, définissons les premiers cas d'usage d'agents, puis les construisons et les testons avec vos administrateurs et votre intégrateur si vous en avez un.",
    },
  },
  "google-cloud": {
    name: "Google Cloud Vertex AI & Gemini",
    headline: "Des experts seniors Vertex AI, Gemini Enterprise et BigQuery.",
    summary:
      "Des ingénieurs ML et des architectes qui font passer les cas d'usage Gemini du notebook à une production gouvernée sur Google Cloud.",
    modules: [
      { name: "Vertex AI", detail: "Model Garden, fine-tuning, évaluation, pipelines, feature store, endpoints." },
      { name: "Gemini Enterprise", detail: "Recherche et agents d'entreprise sur Workspace et des sources tierces." },
      { name: "Agent Development Kit", detail: "Systèmes multi-agents, usage d'outils, déploiement sur Agent Engine." },
      { name: "BigQuery & socle de données", detail: "BigQuery ML, recherche vectorielle, gouvernance des données avec Dataplex." },
    ],
    roles: ["Architecte Vertex AI", "Ingénieur ML", "Ingénieur plateforme Data & IA", "Architecte solutions IA générative"],
    specificFaq: {
      q: "Pouvez-vous fournir des experts IA Google Cloud avec des contraintes de résidence des données en Europe ?",
      a: "Oui. Nos profils Google Cloud conçoivent sur les régions européennes, avec VPC Service Controls, CMEK et Assured Workloads si nécessaire, et documentent les choix de résidence pour votre DPO.",
    },
  },
  sap: {
    name: "SAP Business AI & Joule",
    headline: "Des experts seniors Joule, SAP Business AI et services IA de BTP.",
    summary:
      "Des consultants SAP natifs qui intègrent l'IA aux processus finance, supply chain et RH sans casser le clean core.",
    modules: [
      { name: "Joule", detail: "Scénarios copilote, compétences et agents sur mesure dans Joule Studio, intégration S/4HANA." },
      { name: "SAP Business AI", detail: "Scénarios IA intégrés à S/4HANA, SuccessFactors, Ariba et Concur." },
      { name: "BTP AI Core & Generative AI Hub", detail: "Accès aux modèles, orchestration, ancrage, gestion des prompts." },
      { name: "SAP Business Data Cloud", detail: "Data products, Datasphere, intégration Databricks pour les cas d'usage IA." },
    ],
    roles: ["Architecte IA SAP", "Développeur BTP", "Consultant Joule", "Architecte solution S/4HANA"],
    specificFaq: {
      q: "Vos experts IA SAP respectent-ils les principes du clean core ?",
      a: "Oui. Les extensions sont construites à côté du cœur, sur BTP, avec des API publiées : les scénarios IA n'ajoutent pas de code spécifique à votre S/4HANA et restent compatibles avec les mises à jour.",
    },
  },
  servicenow: {
    name: "ServiceNow Now Assist & AI Agents",
    headline: "Des experts seniors Now Assist, AI Agents et Workflow Data Fabric.",
    summary:
      "Des architectes plateforme qui transforment les workflows IT, RH et service client en workflows agentiques, avec des gains mesurables de résolution.",
    modules: [
      { name: "Now Assist", detail: "IA générative pour ITSM, CSM et HRSD : synthèse, résolution, recherche." },
      { name: "AI Agents & Orchestrator", detail: "Conception d'agents, AI Agent Studio, orchestration entre workflows." },
      { name: "Workflow Data Fabric", detail: "Connecteurs zero-copy, integration hub, graphe de connaissances." },
      { name: "AI Control Tower", detail: "Inventaire, gouvernance et suivi de la valeur de l'IA dans toute l'entreprise." },
    ],
    roles: ["Architecte IA ServiceNow", "Consultant Now Assist", "Développeur plateforme", "Architecte technique"],
    specificFaq: {
      q: "Pouvez-vous renforcer notre équipe ServiceNow pour un déploiement de Now Assist ?",
      a: "Oui. Nous ajoutons en général un architecte Now Assist et un ou deux développeurs plateforme à votre équipe pendant le déploiement, avec un transfert de compétences prévu dans la mission.",
    },
  },
  workday: {
    name: "Workday IA & Sana",
    headline: "Des experts seniors Sana, agents Workday et Workday Build.",
    summary:
      "Des spécialistes HCM et Financials qui intègrent les agents IA de Workday aux opérations RH et finance, avec la gouvernance qu'attendent vos auditeurs.",
    modules: [
      { name: "Sana from Workday", detail: "Couche d'IA conversationnelle pour les RH et la finance, déployée sur votre tenant Workday." },
      { name: "Agents RH et finance", detail: "Agents pour le service RH, le recrutement, la paie, la comptabilité, les achats et les notes de frais." },
      { name: "Agent System of Record", detail: "Gouvernance, piste d'audit et identité des agents Workday et tiers." },
      { name: "Workday Build & Data Cloud", detail: "Création d'agents en low-code, extensions, partage de données zero-copy avec votre plateforme data." },
    ],
    roles: ["Architecte solution IA Workday", "Consultant Workday HCM", "Consultant Workday Financials", "Développeur Workday Extend et intégrations"],
    specificFaq: {
      q: "Vos experts Workday peuvent-ils travailler avec notre intégrateur ?",
      a: "Oui. La plupart des clients Workday ont déjà un intégrateur. Nos experts renforcent votre équipe ou celle de l'intégrateur sur le périmètre IA (conception d'agents, gouvernance, données) sans reprendre le programme.",
    },
  },
};

const build = (locale: Locale): Ecosystem[] =>
  base.map((b) => {
    const { specificFaq, ...e } = locale === "fr" ? frenchTypo({ ...b, ...frText[b.slug] }) : b;
    const faq = locale === "fr" ? frenchTypo(sharedFaqFr({ ...e, specificFaq })) : sharedFaqEn({ ...e, specificFaq });
    return { ...e, faq };
  });

const byLocale: Record<Locale, Ecosystem[]> = { en: build("en"), fr: build("fr") };

/** English list: slugs, sitemap, llms.txt. Use getEcosystems(locale) for displayed copy. */
export const ecosystems = byLocale.en;

export const getEcosystems = (locale: Locale) => byLocale[locale];

export function getEcosystem(slug: string, locale: Locale = "en") {
  return byLocale[locale].find((e) => e.slug === slug);
}
