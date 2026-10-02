import type { MainDictionary } from "@/content/fr";

/** 56north.io — English content. Same rules as fr.ts (docs/faits-publics.md). */
const en: MainDictionary = {
  meta: {
    title: "56North · Enterprise AI governance",
    description:
      "56North measures the AI systems running in your company and gathers the dated evidence the EU AI Act requires: registry, five-dial score, monthly flight report. Independent third party, sovereign tooling.",
    ogTitle: "You have AI everywhere. Can you prove you control it?",
    ogLocale: "en_GB",
  },
  nav: {
    items: [
      { href: "#offre", label: "What we do" },
      { href: "#cockpit", label: "The Cockpit" },
      { href: "#human-in-the-loop", label: "Human in the Loop" },
      { href: "#factory", label: "Factory" },
      { href: "#souverainete", label: "Sovereignty" },
    ],
    experts: "Experts",
    cta: "Request an assessment",
    openMenu: "Open menu",
    skip: "Skip to content",
    switchLabel: "Français",
    switchShort: "FR",
  },
  hero: {
    eyebrow: "Independent third party · Enterprise AI governance",
    title: "You have AI everywhere.\nCan you prove you control it?",
    subtitle:
      "56North measures the AI systems running in your company, arranges for qualified experts to put them to the test, and gathers the dated evidence regulation requires.",
    primary: "Request an assessment",
    secondary: "See what we do",
    reassurance: "A free 30-minute first conversation, no commitment. If the timing is not right, we will tell you.",
    board: {
      label: "Airworthiness score",
      score: "66",
      outOf: "out of 100",
      letter: "C",
      letterLabel: "grade",
      trend: "+4 points over 30 days",
      dials: [
        { name: "Reliability", value: 71 },
        { name: "Costs", value: 58 },
        { name: "AI Act evidence", value: 62 },
        { name: "Usage", value: 74 },
        { name: "Reference sources", value: 65 },
      ],
      caption: "Calculated on 4 of your 6 AI systems. The scope always comes with the score. Demonstration data.",
    },
  },
  definition: {
    label: "In one sentence",
    text: "56North is the control plane for enterprise AI: the system of record that inventories, measures and proves the behaviour of every AI system in an organisation, whatever the vendor.",
  },
  mirror: {
    painsTitle: "Sound familiar?",
    pains: [
      "New AI features appear with every software update, and nobody has declared them.",
      "Each vendor shows you its own dashboard; none shows you the whole picture.",
      "Your audit committee asks who is accountable for AI, and nobody raises a hand.",
      "The evidence may exist, scattered across emails and shared folders.",
    ],
    afterTitle: "What changes with 56North",
    after: [
      "A complete list of your AI systems, each with a named owner.",
      "A score per system and a company score your executive committee reads in two minutes.",
      "A sealed inspection file, ready the day an auditor asks for it.",
      "The cost of your AI, tracked month after month.",
    ],
  },
  founder: {
    eyebrow: "Who is behind it",
    title: "Founded by someone who grew a team of 1,100 consultants.",
    body: "56North was founded by Pascal Mennesson, co-founder of Maltem Consulting Group, which he grew from 2001 to more than 1,100 consultants in 12 countries before its exit. It starts from a simple observation: companies adopt AI faster than they learn to govern it.",
  },
  guides: {
    title: "Further reading",
    items: [
      { title: "EU AI Act: what companies using Copilot, Agentforce or Joule must do now", href: "https://experts.56north.io/insights/eu-ai-act-deployer-obligations-copilot-agentforce" },
      { title: "Maintaining AI agents in production: what degrades, and how to keep control", href: "https://experts.56north.io/insights/maintain-ai-agents-in-production" },
      { title: "Putting an Agentforce agent into production: a 12-point checklist", href: "https://experts.56north.io/insights/agentforce-agent-go-live-checklist" },
    ],
  },
  clock: {
    eyebrow: "The regulatory clock",
    title: "The calendar is not negotiable.",
    intro:
      "The EU AI Act applies in stages. Past deadlines are already enforceable; the next ones need preparing now, because an inspector will ask for dated evidence.",
    statuses: { due: "Enforceable", prepare: "Prepare now", upcoming: "Upcoming" },
    milestones: [
      { date: "2 February 2025", label: "Prohibited practices", status: "due" },
      { date: "2 August 2025", label: "General-purpose AI models", status: "due" },
      { date: "2 August 2026", label: "Transparency: telling people they are dealing with an AI. Penalties apply.", status: "due" },
      { date: "2 December 2027", label: "High risk: recruitment, credit, education, biometrics", status: "prepare" },
      { date: "2 August 2028", label: "AI built into products that are already regulated", status: "upcoming" },
    ],
    sanctions: "Penalties of up to €35M or 7% of worldwide turnover.",
  },
  problem: {
    eyebrow: "The problem",
    title: "Six questions, and nobody to answer them.",
    intro: "The ones an executive team asks as soon as AI enters day-to-day operations.",
    items: [
      { q: "Which AI systems do we have?", a: "Including the ones nobody declared: individual accounts, features switched on by a software update." },
      { q: "Who is accountable?", a: "A named person. It is the first thing an inspector asks for, and rarely what they find." },
      { q: "What do they do?", a: "On which cases, how often, for how many people. And who actually uses them." },
      { q: "What risk do they create?", a: "The risk class depends on the use: screening applications and summarising a meeting carry different obligations." },
      { q: "Do they behave as intended?", a: "Nobody reviews the AI's answers. Drift is found too late." },
      { q: "Can we prove it?", a: "At an inspection, good intentions are not enough: you need dated evidence, with the name of who produced it." },
    ],
  },
  offer: {
    eyebrow: "What we do",
    title: "Control, prove, operate.",
    intro:
      "Software alone proves nothing. You also need people who test, and a team at the helm. The three components can be bought separately and work together.",
    layers: [
      {
        n: "01",
        kind: "The software",
        name: "The Cockpit",
        status: "Available",
        body: "The registry of your AI systems, their risk class over time, the regulatory timeline, the five-dial score and the monthly flight report. One platform, whatever your vendors.",
      },
      {
        n: "02",
        kind: "Prove, with our partners",
        name: "Human in the Loop",
        status: "Activated on engagement",
        body: "Trained people put your AI systems to the test and review their answers: bias, hallucinations, data leaks, procedures not followed. Their findings enter the Cockpit as dated evidence, with their author.",
      },
      {
        n: "03",
        kind: "Operate, with our partners",
        name: "Factory",
        status: "Set up with a subscription",
        body: "An AI engineering team that connects your existing systems to the Cockpit, keeps them running in production, monitors them and produces the report. The equivalent of a security operations centre, for AI governance.",
      },
    ],
    plansTitle: "Three ways to start",
    plans: [
      { name: "A fixed-price assessment", tag: "To start", body: "A map of your AI systems, their classification, and what would be missing in front of an inspector." },
      { name: "Sprints by domain", tag: "One domain at a time", body: "Human resources, customer relations, finance: one domain after another. The score is always calculated by the machine, never promised." },
      { name: "A governance subscription", tag: "Ongoing", body: "Continuous measurement, testing campaigns, monthly flight report." },
    ],
  },
  cockpit: {
    eyebrow: "The Cockpit",
    title: "Five dials, one grade, one flight report.",
    intro:
      "A published, versioned methodology, identical for every client. Each score carries the version of the method that produced it and the scope it covers.",
    dials: [
      { name: "Reliability", body: "The quality of the answers, assessed on your real conversations." },
      { name: "Costs", body: "The cost per case handled, and its trend." },
      { name: "AI Act evidence", body: "The registry, the evidence, the deadlines that apply." },
      { name: "Usage", body: "Who actually uses each AI system." },
      { name: "Reference sources", body: "How fresh the knowledge your AI systems rely on is." },
    ],
    scale: "A score from 0 to 100, a grade from A to E, a 30-day trend.",
    stepsTitle: "Up and running in three steps",
    steps: [
      { name: "Declare", body: "A few questions per AI system, and the registry fills itself." },
      { name: "Connect", body: "One address and one key to change in the software." },
      { name: "Measure", body: "The dials light up with the first calls." },
    ],
    report:
      "Every month, the flight report is frozen when published and sealed with a fingerprint that shows it has not been altered since.",
  },
  hitl: {
    eyebrow: "Human in the Loop",
    title: "People who test your AI.\nNot the vendor who sells it.",
    intro:
      "A vendor cannot judge its own biases. With our partner Isahit, a French data-annotation company, trained people put your AI systems to the test and review their answers, and every finding becomes dated evidence in the Cockpit.",
    status: "Activated on engagement, with our partner Isahit",
    partner: {
      label: "Partner:",
      name: "Isahit",
      url: "https://www.isahit.com/",
      tagline: "The first European ethical-AI company certified B Corp: 1,000+ annotators, 7,500+ projects, references such as Airbus, Orange and L'Oréal.",
    },
    itemsTitle: "What the offer covers",
    items: [
      { name: "Black-box testing campaigns", body: "Bias, hallucinations, data leaks, procedures not followed: scenarios written for your use cases, run against your AI systems as they actually run." },
      { name: "Two independent reviewers", body: "Each case is judged by two independent people. When they disagree, a third opinion decides." },
      { name: "Review of real conversations", body: "Samples reviewed by people residing in the European Union, in teams formed for each client to our requirements, within the scope set in the purchase order." },
      { name: "Test sets for your agents", body: "Building and annotating the scenarios that then serve as your regression tests." },
    ],
    proof: "Every finding enters the Cockpit as dated evidence, with its author: what an inspector accepts, and what no vendor tool can produce about its own AI.",
    cta: "Discuss a testing campaign",
  },
  factoryOffer: {
    eyebrow: "Factory",
    title: "Connect, maintain and run\nthe AI you already have.",
    intro:
      "Most of a company's AI is already in place, across several vendors. With our partner Wikolabs, the Factory connects it to the Cockpit, keeps it reliable in production and spares you from building a dedicated team.",
    status: "Set up with a subscription, with our partner Wikolabs",
    partner: {
      label: "Partner:",
      name: "Wikolabs",
      tagline: "Agents on open-weight models, installed on your premises and connected to your ERP, CRM and databases. A six-step method, with a demo at every sprint and your sign-off on each deliverable.",
    },
    itemsTitle: "What the Factory takes on",
    items: [
      { name: "Connect", body: "Plugging your AI systems into the Cockpit: gateway, logs, then vendor connectors as they become available. You move from the “declared” to the “connected” level." },
      { name: "Maintain", body: "Tests replayed after every vendor release, knowledge sources kept up to date, access rights reviewed, costs tracked." },
      { name: "Monitor and alert", body: "Drift is detected and reported before a customer, an employee or an inspector finds it." },
      { name: "Produce the report", body: "The monthly flight report, prepared by the Factory and published by a person." },
    ],
    independence:
      "Independence rule: a Human in the Loop campaign never tests a system the Factory built or maintains for the same client. Building and controlling stay separate.",
    cta: "Discuss your existing systems",
  },
  sovereignty: {
    eyebrow: "Sovereignty",
    title: "Sovereign tooling, not just sovereign hosting.",
    intro: "Entrusting the oversight of your AI systems to a tool that depends on a foreign giant would make no sense.",
    items: [
      { name: "Hosting", body: "With Scaleway, a French provider, in its Paris data centre." },
      { name: "Software", body: "Built on auditable open-source components, with no proprietary lock-in." },
      { name: "Evaluation model", body: "Mistral, a European model hosted in the EU." },
      { name: "Data", body: "One instance and one database per client, never shared. User identities pseudonymised on arrival, irreversibly." },
    ],
    modesTitle: "Two deployment modes",
    modes: [
      { name: "SaaS", detail: "Hosted by 56North", body: "A dedicated instance. Quick start, updates included." },
      { name: "On-premise", detail: "Installed at your site", body: "For regulated sectors. Installation led by our team." },
    ],
    same: "The same scoring method in both cases.",
  },
  factory: {
    eyebrow: "How we build",
    title: "We hold ourselves to what we measure in your company.",
    intro: "A trusted third party is also judged by how it builds its own tool.",
    figures: [
      { value: "55,000+", label: "lines of code in service, excluding tests" },
      { value: "2,500+", label: "automated tests passing on every release" },
      { value: "240+", label: "dated, reasoned decisions, never erased" },
      { value: "4 Sept 2026", label: "read-only technical audit" },
    ],
    principles: [
      { name: "Method first", body: "Written, published, then frozen during pilots. No scale is ever adjusted to suit a client." },
      { name: "Traceability", body: "A numbered register: the date, the decision, the reason. We demand of ourselves what we demand of your AI systems." },
      { name: "Lasting security", body: "Every fix comes with a guard test that stops the problem from coming back." },
      { name: "Transparent measurement", body: "What can be measured is measured automatically; what rests on a declaration is flagged as such." },
      { name: "No empty promises", body: "A feature only appears on this site once it has shipped." },
      { name: "Isolated data", body: "One instance per client, a daily backup and a weekly copy." },
    ],
  },
  commitments: {
    eyebrow: "What binds us",
    title: "Independent by principle.\nSovereign by design.",
    items: [
      { name: "The one who measures sells nothing else", body: "No models, no integration, no cloud. Whoever builds your AI systems cannot grade them." },
      { name: "Your data stays with a French provider", body: "Scaleway hosting, open-source components, a European evaluation model. Two technical subcontractors, no more." },
      { name: "A published method, never tweaked", body: "Written, versioned, identical for all. Partners may sell it; the calculation, the sealing and the thresholds stay with us." },
      { name: "Evidence, never a certificate", body: "We prepare your file so it is ready the day someone asks for it. We never call it a certification." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "What people ask us.",
    items: [
      {
        q: "Is the first conversation free?",
        a: "Yes. The 30-minute first conversation is free and comes with no commitment. You leave with a first map of your known AI systems and likely gaps, and we tell you plainly whether further work is worth it.",
      },
      {
        q: "What is an AI registry?",
        a: "The list of every AI system a company uses, each with its purpose, its owner, its risk class under the EU AI Act and the related evidence. It is the starting point of any AI governance.",
      },
      {
        q: "How is this different from the vendors' compliance tools?",
        a: "Each vendor proves the compliance of its own tool. 56North sits on the side of the company that deploys AI, and consolidates its whole estate, whatever the supplier.",
      },
      {
        q: "Is this an AI Act certification?",
        a: "No. We prepare an evidence file ready for an inspection. The scope covers the obligations of a company that deploys AI systems, in particular articles 26 and 50 of the EU regulation.",
      },
      {
        q: "Can we buy just one component?",
        a: "Yes: the Cockpit alone, Human in the Loop campaigns alone, or the Factory to run your systems. They work best together, but nothing forces you to take everything.",
      },
      {
        q: "Can we install the Cockpit ourselves?",
        a: "Yes. As SaaS, on a dedicated instance, or on-premise, in your own infrastructure. The method and the score are strictly identical.",
      },
      {
        q: "What about the AI built into our software suite, which we cannot connect?",
        a: "It enters the registry, is classified and receives its evidence. The regulation asks you to govern it, not necessarily to measure it. The score always states the scope it covers.",
      },
      {
        q: "Who sees our data during testing?",
        a: "Bias detection runs on fabricated scenarios, with none of your data. Reviewing real conversations is reserved for auditors residing in the EU, and specified in the purchase order.",
      },
      {
        q: "We are not in the European Union. Does this apply to us?",
        a: "Probably, if you have subsidiaries, customers or job applicants in the EU. And beyond the regulation, the question remains: do your AI systems do what you think they do?",
      },
    ],
  },
  contact: {
    eyebrow: "Free first conversation",
    title: "Thirty minutes is enough to know whether this is for you.",
    intro:
      "We review the AI systems you know about, spot the blind spots and leave you with a first map: your known AI systems and the likely gaps. If the timing is not right, we will tell you.",
    steps: {
      name: "What is your name?",
      job: "What is your job title?",
      company: "Which company?",
      email: "Your work email?",
      count: "Roughly how many AI systems do you use?",
      countHint: "An estimate is enough. Include the AI features in your software.",
    },
    counts: ["Fewer than 5", "5 to 20", "20 to 50", "More than 50", "I don't know"],
    labels: { name: "Name", job: "Job title", company: "Company", email: "Work email" },
    submit: "Request an assessment",
    reassurance: "Free 30-minute first conversation. Reply within two working days. Your details are used to arrange this conversation and nothing else.",
    privacy: "See our privacy policy",
    ui: {
      back: "Back",
      next: "Continue",
      skip: "Skip or continue",
      sending: "Sending…",
      required: "Required",
      invalidEmail: "Enter a valid email",
      thanks: "Thank you.",
    },
    server: {
      useWorkEmail: "Please use your work email",
      checkFields: "Please check the highlighted fields.",
      error: "Something went wrong on our side. Please email {email} and we will answer directly.",
      success: "Request received. We will reply within two working days to set up the conversation.",
    },
  },
  footer: {
    tagline: "Enterprise AI governance · Hosted by a French provider · Versioned scoring methodology",
    experts: "56North Experts, the AI expert network",
    notice: "Legal notice",
    privacy: "Privacy policy",
  },
  legal: {
    updatedLabel: "Last updated:",
    noticeTitle: "Legal notice",
    noticeDescription: "Publisher, host and legal information for 56north.io.",
    privacyTitle: "Privacy policy",
    privacyDescription: "How 56north.io collects and processes your personal data.",
  },
  notFound: { title: "This page does not exist.", home: "Back to home" },
};

export default en;
