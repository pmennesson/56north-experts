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

type Base = Omit<Ecosystem, "faq"> & { specificFaq: { q: string; a: string } };

const sharedFaq = (e: Base) => [
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

export const ecosystems: Ecosystem[] = base.map(({ specificFaq, ...e }) => ({
  ...e,
  faq: sharedFaq({ ...e, specificFaq }),
}));

export const coreEcosystems = ecosystems.filter((e) => e.tier === "core");

export function getEcosystem(slug: string) {
  return ecosystems.find((e) => e.slug === slug);
}
