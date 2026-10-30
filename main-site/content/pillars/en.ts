import type { PillarDictionary } from "./types";
import { deployerGuide, sources } from "./sources";

/** Pillar pages, English version. Same rules as content/pillars/fr.ts. */
const en: PillarDictionary = {
  ui: {
    home: "Home",
    faqTitle: "Frequently asked questions",
    sourcesTitle: "Sources",
    sourcesNote: "Sources opened on 12 October 2026.",
    relatedTitle: "Further reading",
    ctaTitle: "Do you know which AI systems run in your company, and who answers for them?",
    ctaBody: "A free 30-minute first conversation, no commitment.",
    cta: "Request an assessment",
    updated: "Updated 12 October 2026",
    footerTitle: "AI governance",
    more: {
      cockpit: "Learn more about the Cockpit",
      hitl: "Learn more about Human in the Loop",
      factory: "Learn more about the Factory",
      whyThirdParty: "Learn more about third-party AI governance",
      clock: "Which evidence to prepare for AI Act compliance",
    },
  },
  pages: {
    /* ------------------------------------------------------------------ Cockpit */
    cockpit: {
      title: "Enterprise AI cockpit: run and prove your AI",
      description:
        "The 56North Cockpit governs every AI system in the company: a registry, a 0 to 100 score on five dials, a sealed monthly flight report, dated AI Act evidence.",
      name: "The Cockpit",
      eyebrow: "The Cockpit · The software",
      h1: "Enterprise AI cockpit: run and prove every AI system you use",
      answer:
        "The Cockpit is 56North's software: the registry of every AI system in the company, a score from 0 to 100 on five dials, a sealed monthly flight report and dated evidence, whatever the vendors.",
      status: "Available",
      service: {
        name: "56North Cockpit",
        serviceType: "AI oversight and governance platform",
        description:
          "Registry of the company's AI systems, risk classes kept over time, regulatory timeline, airworthiness score on five dials and sealed monthly flight report.",
      },
      keywords: ["enterprise AI cockpit", "AI oversight platform", "AI governance software", "AI score", "AI dashboard for executives"],
      related: ["governance", "register", "compliance", "hitl", "factory"],
      body: `
## What the Cockpit does

A company now runs the AI in its CRM, the one in its office suite, the one in its ERP and the one in its ticketing tool. Each vendor shows its own dashboard. None shows the whole picture.

The Cockpit sits above them, on the company's side. It brings together in one place:

- the [registry of your AI systems](/en/ai-register), each with its purpose and a named owner;
- their risk class under the EU AI Act, kept over time;
- the timeline of the regulation's stages that apply to you;
- evidence attached to the articles of the AI Act, with a log of who did what;
- the airworthiness score and the monthly flight report.

## Five dials, one score from 0 to 100

A published, versioned methodology, identical for every client. Each score carries the version of the method that produced it and the scope it covers.

| Dial | What it measures |
|---|---|
| Reliability | The quality of the answers, assessed on your real conversations. |
| Costs | The cost per case handled, and its trend. |
| AI Act evidence | The registry, the evidence, the deadlines that apply. |
| Usage | Who actually uses each AI system. |
| Reference sources | How fresh the knowledge your AI systems rely on is. |

A score from 0 to 100, a grade from A to E, a 30-day trend. What can be measured is measured automatically; what rests on a declaration is flagged as such. The scope always comes with the score: a score calculated on four AI systems out of six says so.

## The monthly flight report

Every month, the flight report is frozen when published and sealed with a fingerprint that shows it has not been altered since. A third party can check that fingerprint. It is a content fingerprint, not an electronic signature.

An executive committee reads the report in two minutes: the score, its trend, the gaps, the missing evidence.

## Dated evidence, with its author

A dashboard shows the state of today. Evidence shows what was true on a given date and who established it. In the Cockpit, every piece of evidence carries a recording date and its author, and is attached to the article of the regulation it documents. The [AI Act compliance](/en/ai-act-compliance) page sets out which evidence to build.

## An evidence vault, an audit file ready to go

The documents that prove your compliance go into a vault: every version is dated, checked and kept. An expired document is flagged, and its owner reminded. For each AI system, a sealed audit file can be downloaded at any time.

## When an AI changes, you know

A vendor updates its model, someone edits an agent's instructions: the AI approved in January is not quite the same in June. For AI systems routed through the Cockpit gateway, every model change is spotted, dated and recorded in a sealed log, then the same test questions are replayed to see whether behaviour has drifted. For vendor agents, this tracking will come through their connectors, as they become available.

## Up and running in three steps

1. **Declare.** A few questions per AI system, and the registry fills itself.
2. **Connect.** One address and one key to change in the software.
3. **Measure.** The dials light up with the first calls.

AI built into a software suite, which cannot be connected, still enters the registry: it is classified and receives its evidence.

## Two deployment modes

- **SaaS**, hosted by 56North: a dedicated instance, quick start, updates included.
- **On-premise**, installed at your site: for regulated sectors, installation led by our team.

The same scoring method in both cases. One instance and one database per client, never shared. User identities are pseudonymised on arrival, irreversibly.

## What the Cockpit does not do alone

Software alone proves nothing. Two offers complement it and can be bought separately: [Human in the Loop](/en/human-in-the-loop), to have your AI tested by people, and the [Factory](/en/factory), to connect and maintain the systems you already run.
`,
      faq: [
        {
          q: "Does the Cockpit replace the vendors' governance tools?",
          a: "No. Native tools remain necessary: they govern each AI from the inside. The Cockpit sits above them, on the company's side, and consolidates what they produce into one registry, one score, one evidence file.",
        },
        {
          q: "What about the AI built into our software suite, which we cannot connect?",
          a: "It enters the registry, is classified and receives its evidence. The regulation asks you to govern it, not necessarily to measure it. The score always states the scope it covers.",
        },
        {
          q: "Can we install the Cockpit ourselves?",
          a: "Yes. As SaaS, on a dedicated instance, or on-premise, in your own infrastructure. The method and the score are strictly identical.",
        },
      ],
    },

    /* -------------------------------------------------------- Human in the Loop */
    hitl: {
      title: "Human in the Loop: human testing of your AI",
      description:
        "Human in the Loop, activated on engagement with Isahit: testing and review of your AI systems by trained people, recorded in the Cockpit as dated evidence.",
      name: "Human in the Loop",
      eyebrow: "Human in the Loop · Prove, with our partners",
      h1: "Human in the Loop: independent human testing for your AI",
      answer:
        "Human in the Loop is 56North's offer, activated on engagement with our partner Isahit, which provides for trained people to put your AI systems to the test and review their answers; every finding enters the Cockpit as dated evidence, with its author.",
      status: "Activated on engagement, with our partner Isahit",
      service: {
        name: "Human in the Loop",
        serviceType: "Human testing and review of AI systems",
        description:
          "Offer activated on engagement, with partner Isahit: black-box testing campaigns, two independent reviewers, review of samples of real conversations and test sets, recorded in the Cockpit as dated evidence.",
      },
      keywords: ["human in the loop AI testing", "human review of AI", "AI bias audit", "AI red teaming for enterprises"],
      related: ["cockpit", "factory", "governance", "compliance"],
      body: `
## Why people, and not the vendor

A vendor cannot judge its own biases. Its governance tool exists to reassure you about its product. A regulator, an insurer or a large client will ask who, outside the vendor, has checked.

The [Cockpit](/en/cockpit)'s automatic measurements tell you what an AI system costs and who uses it. They do not tell you whether an answer is right, biased or dangerous. For that, you need people who read.

## What the offer covers

- **Black-box testing campaigns.** Bias, hallucinations, data leaks, procedures not followed: scenarios written for your use cases, run against your AI systems as they actually run.
- **Two independent reviewers.** Each case is judged by two independent people. When they disagree, a third opinion decides.
- **Review of real conversations.** Samples reviewed by people residing in the European Union, in teams formed for each client to our requirements, within the scope set in the purchase order.
- **Test sets for your agents.** Building and annotating the scenarios that then serve as your regression tests.

## How a finding becomes evidence

Every finding enters the Cockpit as dated evidence, with its author. That is what an inspector accepts, and what no vendor tool can produce about its own AI. The evidence is attached to the systems in the [AI register](/en/ai-register) and to the obligations it documents.

## Our partner: Isahit

[Isahit](https://www.isahit.com/) is a French data-annotation company. The first European ethical-AI company certified B Corp: 1,000+ annotators, 7,500+ projects, references such as Airbus, Orange and L'Oréal.

The offer is activated on engagement: each campaign is prepared for one client, on its use cases, within the scope set in the purchase order.

## Building and controlling stay separate

A Human in the Loop campaign never tests a system the [Factory](/en/factory) built or maintains for the same client. That is what makes the result count as an independent review.

To see where this offer fits, read [AI governance](/en/ai-governance).
`,
      faq: [
        {
          q: "Who sees our data during testing?",
          a: "Bias detection runs on fabricated scenarios, with none of your data. Reviewing real conversations is reserved for people residing in the EU, and specified in the purchase order.",
        },
        {
          q: "Can we order testing campaigns on their own?",
          a: "Yes: the Cockpit alone, Human in the Loop campaigns alone, or the Factory to run your systems. They work best together, but nothing forces you to take everything.",
        },
        {
          q: "Is a testing campaign a certification?",
          a: "No. We prepare an evidence file ready for an inspection. We never call it a certification.",
        },
      ],
    },

    /* ------------------------------------------------------------------ Factory */
    factory: {
      title: "Factory: connect and maintain the AI you run",
      description:
        "The Factory, set up with a subscription with Wikolabs, connects the AI systems you already run to the Cockpit, keeps them in production, prepares the report.",
      name: "Factory",
      eyebrow: "Factory · Operate, with our partners",
      h1: "Factory: connect, maintain and run the AI you already have",
      answer:
        "The Factory is 56North's offer, set up with a subscription with our partner Wikolabs, designed to connect the AI systems you already use to the Cockpit, keep them running in production and prepare the monthly flight report.",
      status: "Set up with a subscription, with our partner Wikolabs",
      service: {
        name: "Factory",
        serviceType: "Connection, maintenance and monitoring of AI systems",
        description:
          "Offer set up with a subscription, with partner Wikolabs: connecting existing AI systems to the Cockpit, maintenance in production, drift monitoring and preparation of the monthly flight report.",
      },
      keywords: ["AI maintenance in production", "AI operations for enterprises", "AI monitoring", "AI governance operations centre"],
      related: ["cockpit", "hitl", "governance", "register"],
      body: `
## The starting point

Most of a company's AI is already in place, across several vendors. It changes with every vendor release, its knowledge sources age, its costs drift without any error message. Keeping track of it takes a team few companies want to build.

With our partner Wikolabs, the Factory is designed to connect that AI to the [Cockpit](/en/cockpit), keep it reliable in production and spare you from building a dedicated team. The equivalent of a security operations centre, for AI governance.

## What the Factory takes on

- **Connect.** Plugging your AI systems into the Cockpit: gateway, logs, then vendor connectors as they become available. You move from the “declared” to the “connected” level.
- **Maintain.** Tests replayed after every vendor release, knowledge sources kept up to date, access rights reviewed, costs tracked.
- **Monitor and alert.** Drift is detected and reported before a customer, an employee or an inspector finds it.
- **Produce the report.** The monthly flight report, prepared by the Factory and published by a person.

## Declared, then connected

An AI system enters the [registry](/en/ai-register) through a declaration: its purpose, its owner, its risk class. It is then governed, but not measured. Once connected, its calls feed the Cockpit's dials. Moving from one to the other is the Factory's first job.

## Our partner: Wikolabs

Wikolabs installs agents on open-weight models at its clients' sites, connected to their ERP, CRM and databases. A six-step method, with a demo at every sprint and your sign-off on each deliverable.

The Factory is set up with a subscription: its scope is agreed with you, system by system.

## Evidence anyone can verify

Everything the Factory builds or maintains is overseen in the Cockpit like any other AI system, whatever its vendor. The flight report is sealed on publication, so a third party can verify it has not been altered. If you need an independent third-party opinion on a system the Factory built, an external auditor can establish it from that evidence.

To see where this offer fits, read [AI governance](/en/ai-governance).
`,
      faq: [
        {
          q: "Can we take the Factory on its own?",
          a: "Yes: the Cockpit alone, Human in the Loop campaigns alone, or the Factory to run your systems. They work best together, but nothing forces you to take everything.",
        },
        {
          q: "Who publishes the flight report?",
          a: "The monthly flight report is prepared by the Factory and published by a person. Once published, it is frozen and sealed with a fingerprint that shows it has not been altered since.",
        },
        {
          q: "Can the Factory test the systems it maintains?",
          a: "No. A Human in the Loop campaign never tests a system the Factory built or maintains for the same client. Building and controlling stay separate.",
        },
      ],
    },

    /* ----------------------------------------------------------- AI governance */
    governance: {
      title: "AI governance: why an independent third party",
      description:
        "Enterprise AI governance: the six questions to settle, why vendor tools are not enough, the EU AI Act timeline and where to start, from an independent party.",
      name: "AI governance",
      eyebrow: "AI governance",
      h1: "AI governance: why evidence belongs with an independent third party",
      answer:
        "Governing AI means knowing which AI systems the company uses, who answers for them, what they do, what risk they create, whether they behave as intended, and being able to prove it; 56North is the independent third party that keeps that file, across every vendor.",
      keywords: ["AI governance", "enterprise AI governance", "independent AI oversight", "AI Act deployer", "AI governance framework"],
      related: ["register", "compliance", "cockpit", "hitl", "factory"],
      body: `
## Six questions, and nobody to answer them

The ones an executive team asks as soon as AI enters day-to-day operations.

1. **Which AI systems do we have?** Including the ones nobody declared: individual accounts, features switched on by a software update.
2. **Who is accountable?** A named person. It is the first thing an inspector asks for, and rarely what they find.
3. **What do they do?** On which cases, how often, for how many people. And who actually uses them.
4. **What risk do they create?** The risk class depends on the use: screening applications and summarising a meeting carry different obligations.
5. **Do they behave as intended?** Nobody reviews the AI's answers. Drift is found too late.
6. **Can we prove it?** At an inspection, good intentions are not enough: you need dated evidence, with the name of who produced it.

The first two questions are settled with an [AI register](/en/ai-register). The last one, with a file of [AI Act compliance evidence](/en/ai-act-compliance).

## Provider and deployer: two separate responsibilities

The EU AI Act separates two roles. The **provider** develops an AI system and places it on the market under its own name. The **deployer** uses an AI system under its own authority, in a professional capacity (Article 3).

The vendor answers for its product. You answer for how you use it. For high-risk systems, Article 26 requires you in particular to assign human oversight to competent people, to monitor operation and to keep the logs for at least six months. Article 50 sets transparency obligations. No vendor tool carries these obligations on your behalf.

## Why native tools are not enough

Every major vendor now ships its own control tower. These tools are useful. They do not answer the question a regulator will ask you.

- **Each control tower sees only its own ecosystem.** Four vendors, four dashboards, four definitions of compliance. None sees the other three.
- **Whoever sells the AI cannot grade it.** A vendor that evaluates its own agents is judge and party. That is not an accusation, it is a position.
- **Evidence is judged by how it holds up over time.** A dashboard shows the state of today. Evidence shows what was true on a given date, who established it, and that it has not been altered since.

Native tools govern each AI from the inside. A third party sits above them, on the company's side, and consolidates what they produce into one registry, one score, one evidence file. 56North sells no model, no integration and no cloud.

## The regulatory clock

The AI Act applies in stages. Regulation (EU) 2026/1744, the Digital Omnibus on AI, postponed the rules for high-risk systems.

| Date | What applies |
|---|---|
| 2 February 2025 | Prohibited practices and AI literacy (Article 4) |
| 2 August 2025 | General-purpose AI models |
| 2 August 2026 | Transparency (Article 50) and start of enforcement |
| 2 December 2027 | High-risk systems listed in Annex III, including recruitment |
| 2 August 2028 | High risk: AI built into products regulated under Annex I |

Fines reach €35M or 7% of worldwide turnover for prohibited practices, and €15M or 3% for breaches of deployer obligations (Article 26) and transparency obligations (Article 50), whichever is higher; for SMEs, whichever is lower (Article 99).

## Control, prove, operate

Software alone proves nothing. You also need people who test, and a team at the helm. The three components can be bought separately.

- **[The Cockpit](/en/cockpit)**, the software, available: registry, five-dial score, monthly flight report.
- **[Human in the Loop](/en/human-in-the-loop)**, activated on engagement with Isahit: testing and review by trained people.
- **[The Factory](/en/factory)**, set up with a subscription with Wikolabs: connecting and maintaining the AI already in place.

## Where to start

With the map. A fixed-price assessment lists your AI systems, their classification, and what would be missing in front of an inspector. The 30-minute first conversation is free.
`,
      faq: [
        {
          q: "What is enterprise AI governance?",
          a: "The rules and evidence that let a company answer six questions: which AI systems it uses, who answers for them, what they do, what risk they create, whether they behave as intended, and how to prove it.",
        },
        {
          q: "How is this different from the vendors' compliance tools?",
          a: "Each vendor proves the compliance of its own tool. 56North sits on the side of the company that deploys AI, and consolidates its whole estate, whatever the supplier.",
        },
        {
          q: "We are not in the European Union. Does this apply to us?",
          a: "Probably, if you have subsidiaries, customers or job applicants in the EU. And beyond the regulation, the question remains: do your AI systems do what you think they do?",
        },
      ],
      sources: sources("en", ["timeline", "omnibus", "art3", "art4", "art26", "art50", "art99", "employment"]),
    },

    /* --------------------------------------------------------------- AI register */
    register: {
      title: "AI register for companies: contents and purpose",
      description:
        "An enterprise AI register: what it contains (purpose, owner, risk class, evidence), why it underpins EU AI Act compliance, and how to build one for all vendors.",
      name: "AI register",
      eyebrow: "AI register",
      h1: "Enterprise AI register: what it contains and what it is for",
      answer:
        "An AI register is the list of every AI system a company uses, each with its purpose, its owner, its risk class under the EU AI Act and the related evidence: it is the starting point of any AI governance.",
      keywords: ["AI register", "enterprise AI inventory", "AI system inventory", "AI Act register template", "named AI owner"],
      related: ["compliance", "governance", "cockpit", "factory"],
      body: `
## Why keep a register

The AI Act's obligations do not apply to "AI" in general. They depend on each system and on its use. An assistant that summarises meetings and a tool that screens job applications do not carry the same rules. The second falls in principle under high risk (Annex III, point 4); the first does not.

To know which rules apply, you first need to know which AI systems are running. That is the register's job. Without it, none of the other questions of [AI governance](/en/ai-governance) has an answer.

The regulation does not use the word "register" for an internal inventory, and does not prescribe one under that name for every company. But each of its obligations concerns a specific system: without an inventory, you cannot show you have examined them.

## Not to be confused with the EU database

The AI Act creates a European database. Providers register the high-risk systems listed in Annex III there. Public authorities that deploy them register their use (Article 49). A private company that deploys a system has no such registration duty, unless it acts on behalf of a public authority. Its internal register remains its own.

## What a register contains

| Field | Why |
|---|---|
| The system and its vendor | Knowing what you are talking about, including the AI features of a software suite. |
| The purpose | The risk class depends on the use, not on the technology. |
| The named owner | A person. It is the first thing an inspector asks for. |
| The company's role | Deployer, or provider if it puts the system into service under its own name (Article 3). |
| The risk class, dated | A classification changes when the use changes: the history must be kept. |
| Obligations and deadlines | Transparency since 2 August 2026, high risk from 2 December 2027. |
| Attached evidence | Each piece with its date and its author. |
| Level of oversight | Declared, or connected and measured. |

## The AI systems that get forgotten

A register is only worth something if it is complete. Three families often escape the inventory:

- **individual accounts**, opened by employees without going through IT;
- **features switched on by an update** to software already in place;
- **AI built into a software suite**, which cannot be connected. It still enters the register: the regulation asks you to govern it, not necessarily to measure it.

The AI literacy obligation (Article 4) concerns the staff who use AI systems. The register also says who uses them.

## From register to evidence

A register kept in a spreadsheet shows the state of the day. In front of an inspector, you need to show what was true on a past date: when a system was classified, by whom, on what basis. That is why the risk class must be kept over time and every piece of evidence dated. The [AI Act compliance](/en/ai-act-compliance) page sets out which evidence to attach to each obligation.

## How to build it

1. **Declare.** A few questions per AI system: purpose, owner, vendor. The register fills itself.
2. **Classify.** The risk class under the AI Act, and the obligations that follow.
3. **Connect what can be connected.** A connected AI system is measured, not just declared.

In the [Cockpit](/en/cockpit), the register, the risk classes kept over time and the dated evidence sit in one place, whatever the vendors. The [Factory](/en/factory) is the offer designed to connect the systems already in place.
`,
      faq: [
        {
          q: "Is an AI register mandatory?",
          a: "The AI Act does not prescribe an internal register under that name for every company. But each of its obligations concerns a specific system and use: without an inventory, a company cannot show it has examined them.",
        },
        {
          q: "Should Copilot, Agentforce or the AI built into our software be listed?",
          a: "Yes. A company that uses an AI system under its own authority, in a professional capacity, is its deployer within the meaning of Article 3, whatever the vendor.",
        },
        {
          q: "How does it differ from the EU database?",
          a: "The EU database receives the registration of Annex III high-risk systems by their providers, and of their use by public authorities (Article 49). An internal register covers every AI system in the company.",
        },
      ],
      sources: sources("en", ["art3", "art4", "art6", "art49", "art50", "employment", "timeline"]),
    },

    /* ----------------------------------------------------- AI Act compliance */
    compliance: {
      title: "AI Act compliance: the evidence to build",
      description:
        "EU AI Act compliance for companies: which evidence to build for each deployer obligation, what makes it hold up, who produces it and when it applies.",
      name: "AI Act compliance",
      eyebrow: "AI Act compliance",
      h1: "AI Act compliance: which evidence to build, and who produces it",
      answer:
        "Complying with the AI Act is not enough, you have to be able to show it: with evidence that is dated, attributed to its author and intact since it was recorded, covering your own uses rather than the vendor's product.",
      keywords: ["AI Act compliance evidence", "EU AI Act compliance for companies", "AI Act deployer evidence", "AI compliance file", "AI Act Article 26"],
      related: ["register", "governance", "cockpit", "hitl"],
      body: `
## Who is in scope?

The regulation does not sort companies by size or sector, but by use.

- **Every size.** There is no exemption for SMEs. They get lighter requirements, such as simplified documentation and lower fine ceilings, not a waiver.
- **Beyond the EU.** The regulation applies to deployers established in the Union, and to providers and deployers established elsewhere as soon as the output of the system is used in the Union (Article 2). A Swiss, Mauritian or US company that recruits, assesses or serves people in the Union is in scope.
- **Every sector.** High risk is defined by use (Annex III): biometrics, critical infrastructure, education, employment and worker management, access to essential services (credit, health and life insurance, public benefits), law enforcement, migration, justice. A hotel chain that screens applicants with AI is in scope just like a bank. On top of that comes AI built into products that are already regulated (Annex I), such as machinery or medical devices.
- **Out of scope.** Purely personal use, defence and national security, research carried out for its own sake.

## The vendor's compliance is not yours

The regulation separates the **provider**, who develops an AI system and places it on the market under its own name, from the **deployer**, who uses it under its own authority (Article 3). The vendor documents its product. You answer for how you use it. One party's evidence does not cover the other's obligations.

This page is about evidence. The obligations themselves, platform by platform, are covered in our guide [EU AI Act: what companies using Copilot, Agentforce or Joule must do now](${deployerGuide.en}).

[[dossier-de-preuves]]

The information required by Article 50 must be given at the latest at the first interaction or exposure. Bodies governed by public law, private entities providing public services and certain other deployers must also carry out a fundamental rights impact assessment before deploying a high-risk system (Article 27).

A company that puts an agent into service under its own name may also be a provider. It then answers for Article 50(1): people must know they are dealing with an AI.

## What makes evidence hold up

Evidence is judged by how it holds up over time. For an inspector to accept it, it must be:

- **dated**: what was true, and on what date;
- **attributed**: who established it, by name;
- **intact**: nothing can alter it without it showing;
- **attached**: to a system in the [AI register](/en/ai-register) and to the article it documents;
- **bounded**: its scope is stated, including what it does not cover.

Screenshots in a shared folder meet none of these conditions.

## Who produces which evidence

| Evidence | Who produces it |
|---|---|
| Instructions for use, system documentation | The provider, who hands them to the deployer |
| Register, risk class, named owner | The company, in the [Cockpit](/en/cockpit) |
| Cost and usage measurements | The Cockpit, from measured calls |
| Testing and review by people | [Human in the Loop](/en/human-in-the-loop), an offer activated on engagement |
| Monthly flight report, frozen and sealed | The Cockpit, published by a person |

In the Cockpit, every piece of evidence carries a recording date and its author. The monthly flight report is frozen when published and sealed with a fingerprint a third party can check.

## What 56North does not do

We do not issue certifications. We prepare an evidence file ready for an inspection, covering the obligations of a company that deploys AI systems, in particular Articles 4, 26, 27 and 50. We never call it a certification.

## What missing evidence costs

Breaches of deployer obligations (Article 26) and transparency obligations (Article 50) carry fines of up to €15M or 3% of worldwide annual turnover, whichever is higher, and whichever is lower for SMEs. For prohibited practices, the ceiling is €35M or 7% (Article 99). To see these deadlines in context, read [AI governance](/en/ai-governance).
`,
      faq: [
        {
          q: "Does the vendor's compliance evidence cover us?",
          a: "No. The vendor, a provider under the regulation, documents its product. The company that uses it is a deployer and answers for its use: human oversight, logs, informing people, transparency.",
        },
        {
          q: "How long must the logs of a high-risk AI system be kept?",
          a: "At least six months for the automatically generated logs under the deployer's control, or longer if the system's purpose requires it or another law provides for it (Article 26(6)). The obligation applies to Annex III systems from 2 December 2027.",
        },
        {
          q: "Is there an AI Act certification for a company that uses AI?",
          a: "56North does not issue certifications. We prepare an evidence file ready for an inspection, covering the deployer's obligations, in particular Articles 4, 26, 27 and 50.",
        },
      ],
      sources: sources("en", ["art3", "art4", "art26", "art27", "art50", "art99", "timeline", "omnibus"]),
    },

    /* ------------------------------------------------------------------- About */
    about: {
      title: "About 56North and its founder",
      description:
        "56North was founded by Pascal Mennesson, co-founder of Maltem Consulting Group, which he grew to more than 1,100 consultants in 12 countries before its exit.",
      name: "About",
      eyebrow: "Who is behind it",
      h1: "About 56North: the founder, Pascal Mennesson",
      answer:
        "56North was founded by Pascal Mennesson, co-founder of Maltem Consulting Group, which he grew from 2001 to more than 1,100 consultants in 12 countries before its exit.",
      keywords: ["56North", "Pascal Mennesson", "56North founder"],
      related: ["governance", "cockpit"],
      body: `
## Founded by someone who grew a team of 1,100 consultants.

It starts from a simple observation: companies adopt AI faster than they learn to govern it.
`,
      faq: [
        {
          q: "What is 56North?",
          a: "56North is the system of record for a company's AI: a third party that inventories, measures and proves the behaviour of every one of its AI systems, whatever the vendor, and that sells no model, no integration and no cloud.",
        },
        {
          q: "Who founded 56North?",
          a: "Pascal Mennesson, co-founder of Maltem Consulting Group, which he grew from 2001 to more than 1,100 consultants in 12 countries before its exit.",
        },
        {
          q: "Which company publishes 56North?",
          a: "Swell Invest Ltd, a company incorporated in the Republic of Mauritius, which also publishes 56North Experts, the AI expert network.",
        },
      ],
    },
  },
};

export default en;
