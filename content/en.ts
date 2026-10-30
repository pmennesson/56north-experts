/**
 * English dictionary. Components read copy from here, never hard-code it.
 * Tone: factual, specific, no superlatives a buyer cannot verify.
 */
const en = {
  nav: {
    experts: "Practices",
    apply: "Apply",
    talents: "For experts",
    insights: "Insights",
    contact: "Let's talk about your project",
    contactShort: "Contact",
    about: "About",
    cockpit: "Cockpit",
    cockpitHref: "https://56north.io/en",
    howItWorks: "Our approach",
    openMenu: "Open menu",
    skip: "Skip to content",
    switchLabel: "Français",
    switchShort: "FR",
  },
  meta: {
    siteTitle: "Senior AI experts for enterprise platforms",
    homeTitle: "56North Experts · Senior AI experts for Microsoft, Salesforce, Google Cloud, SAP & ServiceNow",
    description:
      "An admission-based network of senior Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday AI experts, drawn from practitioner communities and vetted by peers. AI only, no classic integration: agile, outcome-driven engagements with a senior expert in your squad, a dedicated AI squad or a fractional AI architect, across Europe, the Middle East and Africa.",
    ogTitle: "Senior AI experts. Vetted by peers.",
    ogLocale: "en_US",
  },
  hero: {
    eyebrow: "Senior AI expert network · By admission",
    title: "Enterprise AI practitioners.\nAdmitted by their peers.",
    subtitle:
      "Microsoft, Salesforce, Google Cloud, SAP, ServiceNow, Workday: the network only admits practitioners who have taken these platforms' AI modules into production. You describe your project, we introduce two or three members assessed by a peer, and the one you choose joins your team.",
    primaryCta: "Let's talk about your project",
    secondaryCta: "Our approach",
    reassurance: "The first conversation is free. No commitment until you choose the member who will join you.",
    /** "News alert" pill above the title: the latest published article, linking to the list. */
    alert: { label: "News alert", all: "See all articles" },
    shortlist: {
      label: "Example shortlist",
      brief: "Agentforce Architect · Paris · 6 months",
      status: "Peer-vetted",
      profiles: [
        { initials: "AM", title: "Salesforce Technical Architect", years: 14, match: "Agentforce, Data 360" },
        { initials: "LK", title: "Agentforce Lead Consultant", years: 11, match: "Service Cloud, Prompt Builder" },
        { initials: "SB", title: "Salesforce AI Developer", years: 10, match: "Apex, MuleSoft, Einstein" },
      ],
      footnote: "Illustrative example. Members stay anonymous until you request an interview.",
      yearsUnit: "yrs",
    },
  },
  vendorBar: {
    title: "Dedicated practices for",
  },
  ecosystems: {
    eyebrow: "Practices",
    title: "Six platforms.\nOne standard.",
    subtitle: "Every member is admitted by a practitioner who has delivered the same modules.",
    cta: "Learn more",
    specialist: "Specialist",
    other: "Oracle, Databricks, Snowflake or another platform? We search on request, in the same communities and to the same admission standard.",
    otherCta: "Tell us about it",
  },
  serviceLevels: {
    eyebrow: "Standards",
    title: "What we do not compromise on.",
    items: [
      { value: "Community", label: "Members identified in specialist practitioner communities, not on job boards" },
      { value: "6", label: "Enterprise platforms, each with a dedicated practice" },
      { value: "3-step", label: "Admission: peer technical interview, credential check, references" },
      { value: "10+ yrs", label: "Minimum enterprise delivery experience for a senior member" },
    ],
  },
  models: {
    eyebrow: "Engagement",
    title: "The format follows the problem.\nNot the other way round.",
    subtitle: "One framework agreement. One invoice a month. Wherever the member is based.",
    items: [
      {
        name: "Senior expert in your squad",
        tag: null,
        body: "A senior AI expert joins your product team and drives one AI use case sprint by sprint, from scoping to production.",
        points: ["Agile sprints", "From 3 months", "Onsite, hybrid or remote"],
      },
      {
        name: "Dedicated AI squad",
        tag: null,
        body: "An architect and two to five engineers from the network, committed to one business outcome and delivering in short iterations.",
        points: ["Outcome agreed upfront", "Squad lead included", "Demo every sprint"],
      },
      {
        name: "Fractional architect",
        tag: null,
        body: "A principal architect from the network, two to eight days a month, owning design authority.",
        points: ["Monthly retainer", "Design authority", "Vendor-neutral"],
      },
    ],
  },
  process: {
    eyebrow: "Our approach",
    title: "Scope. Select. Start.",
    steps: [
      { name: "Scope", time: "30 minutes", body: "A conversation with a practice lead to understand what is at stake: modules, seniority, location, start date, budget." },
      { name: "Select", time: "Admitted by peers", body: "Two or three members of the network, each with a written peer assessment. You meet the ones you shortlist." },
      { name: "Start", time: "Monthly review", body: "We handle the contract. A monthly review then brings you and the member together. If the fit is wrong in the first 30 days, another member takes over at no sourcing cost." },
    ],
  },
  trust: {
    eyebrow: "What sets us apart",
    title: "What procurement requires.\nWhat delivery needs.",
    items: [
      { name: "Found where experts work", body: "The best specialists are rarely on job boards. We find them in user groups, community forums, meetups and conference talks.", href: "/talents#community", linkLabel: "How to join the network" },
      { name: "Peer-led vetting", body: "A senior practitioner of the same platform interviews every candidate. Credentials verified. Two enterprise references." },
      { name: "Contract-ready", body: "Framework agreement, NDA, IP assignment and GDPR terms, ready to sign." },
      { name: "AI Act literate", body: "Members briefed on the obligations that apply to their scope: risk, logging, oversight." },
      { name: "Cross-border", body: "Europe, the Middle East and Africa. Contracted locally where needed. Invoiced once." },
      { name: "Vendor-neutral", body: "We resell no licences and depend on no vendor. What our teams deliver can be overseen in Cockpit, with evidence any third party can verify." },
    ],
  },
  community: {
    eyebrow: "What we believe",
    title: "Community first.\nExpertise follows.",
    intro:
      "The best specialists on a platform do not answer job ads. They answer other people's questions, share what they have learned at conferences, publish their code and earn the recognition of their peers. That is where we look for them, and what we weigh before titles and degrees.",
    groupsTitle: "We value experts who come from the following communities",
    groups: [
      { vendor: "Salesforce", items: "Trailblazer Community, the Salesforce MVP programme, Dreamforce and local user groups" },
      { vendor: "Microsoft", items: "Microsoft Tech Community, the Microsoft MVP programme, Microsoft Ignite" },
      { vendor: "Google Cloud", items: "Google Developer Experts, Google Cloud Community, Google Cloud Next" },
      { vendor: "SAP", items: "SAP Community, the SAP Champions programme, SAP TechEd" },
      { vendor: "ServiceNow", items: "ServiceNow Community, the ServiceNow Community MVP programme, Knowledge" },
      { vendor: "Workday", items: "Workday Community, Workday Rising" },
    ],
    closing:
      "An expert recognised by peers has already passed the hardest test: the one set by people who do the same job. We add our own: a technical interview led by a senior peer, verified certifications and two enterprise references.",
    note: "These communities and programmes belong to their respective vendors. We name them to say where we look: 56North Experts is not affiliated with any of them.",
    cta: "Join the network",
  },
  faq: {
    eyebrow: "FAQ",
    title: "What clients ask before they commit.",
    items: [
      {
        q: "Is this AI staff augmentation?",
        a: "Contractually, a senior expert works inside your team for a defined period. In practice, we run it as agile consulting: a clear business objective, short sprints, a demo at every iteration and a monthly review of the value delivered. The network handles selection, peer assessment, contracts and follow-up.",
      },
      {
        q: "How is this different from hiring a systems integrator?",
        a: "A systems integrator sells a fixed project with its own team and methodology. We do AI only, never classic integration: named senior experts work inside your team in short iterations, so you keep ownership of design decisions and knowledge.",
      },
      {
        q: "Can 56North oversee an AI system its own teams delivered?",
        a: "Yes. Cockpit oversees it like any other AI system, with sealed evidence that any third party can verify. One reserve: on a system our teams delivered, 56North does not issue an independent third-party opinion itself. If you need one, an external auditor can establish it from the Cockpit evidence.",
      },
      // TODO: adjust if you hold vendor partner status (it then becomes a strength to state)
      {
        q: "Are you a partner or reseller of these vendors?",
        a: "No. We are an independent network. We do not resell licences, which lets our members recommend what fits your context rather than what a vendor is pushing this quarter.",
      },
    ],
  },
  founder: {
    eyebrow: "Who is behind it",
    title: "Founded by an executive who grew a firm to more than 1,000 consultants.",
    body: "56North Experts is led by Pascal Mennesson, co-founder of Maltem Consulting Group, which he grew from 2001 to more than 1,000 consultants in 12 countries before its exit. He knows what the right senior expert is worth on an enterprise programme, and what the wrong one costs.",
    link: "About us",
  },
  /** Practice pages: the reader's situation in their own words, then what changes. */
  practice: {
    painsTitle: "The starting point",
    pains: [
      "The {vendor} AI roadmap is agreed. The team, meanwhile, is absorbed in running the platform.",
      "The consultants your integrator proposes are junior. Their rates are not.",
      "Security and compliance ask who will control the AI once it is live.",
    ],
    afterTitle: "What changes when a network member joins",
    after: [
      "A senior {vendor} AI expert in your team, driving the use case sprint by sprint.",
      "A first AI use case scoped, built and measured, beyond the slide deck.",
      "Governance your auditors and your security team can read.",
    ],
    midCta: "Tell us about your {vendor} project",
    related: "Other practices",
    guidesTitle: "Guides for {vendor} teams",
    breadcrumb: "Practices",
    home: "Home",
    request: "Let's talk about your project",
    requestVendor: "Let's talk about your {vendor} project",
    modulesLink: "Modules covered",
    answerSuffix:
      "They work as senior experts in your squad, dedicated AI squads or fractional AI architects; all come from the {vendor} practitioner communities and were admitted to the network by a senior peer.",
    modulesEyebrow: "Modules",
    modulesTitle: "What the network's {vendor} experts deliver.",
    rolesTitle: "Roles represented in the network",
    credentialsTitle: "Credentials we verify",
    credentialsNote: "Checked against the vendor's public credential registry where available.",
    faqTitle: "{vendor} AI expertise: your questions.",
    linkLabel: "{vendor} AI experts",
    metaTitle: "Senior {vendor} AI experts, vetted by peers",
    metaDescription:
      "Senior {modules} experts in agile engagements: an expert in your squad or a dedicated AI squad. Members of an admission-based network, vetted by peers, across Europe, the Middle East and Africa.",
  },
  about: {
    metaTitle: "About 56North Experts",
    metaDescription:
      "Who runs 56North Experts, how the network identifies and admits senior AI specialists, and how the network stays vendor-neutral. Founded by Pascal Mennesson, co-founder of Maltem Consulting Group.",
    eyebrow: "About",
    title: "Senior people.\nChosen by their peers.",
    intro:
      "56North Experts is the expert network of 56North: an admission-based circle of senior specialists in the AI modules of the enterprise platforms companies already run. Companies draw on it for their projects across Europe, the Middle East and Africa.",
    principlesEyebrow: "How we work",
    principlesTitle: "Three principles.",
    principles: [
      {
        name: "Sourced in communities",
        body: "The best platform specialists rarely answer job boards. We find them where they contribute: user groups, community forums, meetups and conference talks.",
      },
      {
        name: "Vetted by peers",
        body: "Every candidate is interviewed by a senior practitioner of the same platform, using a standard scorecard. We cover {count} enterprise platforms today.",
      },
      {
        name: "Vendor-neutral by design",
        body: "No licence resold, no vendor dependency. Every AI system our teams deliver can be overseen with evidence any third party can verify.",
      },
    ],
    operator: "56North Experts is operated by {company} (BRN {brn}), registered in Port Louis, Mauritius.",
    legalLink: "Legal notice",
  },
  contactPage: {
    metaTitle: "Senior AI experts: let's talk about your project",
    metaDescription:
      "Describe your AI project on Microsoft, Salesforce, Google Cloud, SAP, ServiceNow or Workday. A practice lead replies within one business day and introduces the members of the network who fit.",
    eyebrow: "Your project",
    title: "Let's talk about your project.",
    intro:
      "Two minutes. A practice lead calls you back within one business day, then introduces two or three peer-vetted members of the network, with a realistic lead time given upfront.",
    nextTitle: "What happens next",
    next: [
      "Qualification call with a practice lead",
      "Shortlist with written peer assessment",
      "Interviews you schedule, we coordinate",
      "Contract and start date",
    ],
    preferEmail: "Prefer email? Write to",
  },
  insights: {
    /** Block pointing to the governance / incident articles of 56north.io (linked, never duplicated). */
    mainSite: {
      title: "Read on 56north.io",
      intro: "Incidents, the EU AI Act and enterprise AI governance: the articles of 56north.io, our AI oversight platform.",
      all: "All 56north.io articles",
    },
    metaTitle: "Guides to integrate, run and govern enterprise AI",
    metaDescription:
      "Practical guides on the AI of Microsoft, Salesforce, SAP, ServiceNow, Google Cloud and Workday: integration, day-to-day use, maintenance, EU AI Act and risks.",
    eyebrow: "Insights",
    title: "Integrate, run and govern enterprise AI.",
    intro:
      "Practical guides on the AI modules of the platforms you already run: putting them into production, keeping them reliable, and meeting the regulation without slowing down.",
    planned: [
      { type: "Guide", title: "AI squad or systems integrator: choosing the model for an AI project" },
      { type: "Guide", title: "What it takes to put an AI agent into production, platform by platform" },
      { type: "White paper", title: "Preparing enterprise AI deployments for the EU AI Act" },
    ],
    soon: "Coming soon",
    by: "By",
    role: "Founder, 56North",
    minutes: "min read",
    updated: "Updated",
    takeaways: "In short",
    draft: "Draft for review. This page is not listed and not indexed by search engines.",
    practicesTitle: "Experts for this topic",
    moreTitle: "More insights",
    back: "All insights",
    faqTitle: "Questions and answers",
    sourcesTitle: "Sources",
    ctaTitle: "Need this expertise on your project?",
    ctaBody: "The first conversation is free. A practice lead replies within one business day.",
  },
  notFound: {
    title: "This page does not exist.",
    body: "Return to the home page, or tell us about your project directly.",
    home: "Home",
    cta: "Let's talk about your project",
  },
  legal: {
    updatedLabel: "Last updated:",
    updated: "23 October 2026",
    privacyTitle: "Privacy policy",
    privacyDescription: "How Swell Invest Ltd collects and processes personal data on 56North Experts.",
    noticeTitle: "Legal notice",
    noticeDescription: "Legal information about 56North Experts, operated by Swell Invest Ltd.",
  },
  steps: {
    back: "Back",
    next: "Continue",
    skip: "Skip or continue",
    sending: "Sending…",
    required: "Required",
    invalidEmail: "Enter a valid email",
    thanks: "Thank you.",
    otherPlatform: "Another platform",
  },
  contactForm: {
    platform: "Which platform?",
    role: "What expertise are you looking for?",
    roleHint: "The modules matter more than the job title.",
    rolePlaceholder: "e.g. Agentforce architect with Data 360",
    model: "How would you like to work?",
    models: [
      { value: "staff-augmentation", label: "A senior expert in my squad", detail: "Agile sprints, from 3 months" },
      { value: "squad", label: "A dedicated AI squad", detail: "Architect plus engineers, one business outcome" },
      { value: "fractional", label: "A fractional architect", detail: "Two to eight days a month" },
      { value: "unsure", label: "Not sure yet", detail: "We will advise on the call" },
    ],
    when: "When and where?",
    start: "Target start",
    location: "Location & work mode",
    locationPlaceholder: "Paris, hybrid",
    context: "Anything we should know?",
    contextHint: "Project stage, team, constraints.",
    you: "Who should we call?",
    name: "Full name",
    email: "Work email",
    company: "Company",
    submit: "Send brief",
    footnote: "Your brief is confidential and used only to answer your request.",
    privacy: "Privacy policy",
    // Server messages
    invalidWorkEmail: "Enter a valid work email",
    useWorkEmail: "Please use your work email",
    checkFields: "Please check the highlighted fields.",
    error: "Something went wrong on our side. Please email {email} and we will answer directly.",
    success: "Brief received. A practice lead will reply within one business day.",
  },
  applicationForm: {
    platform: "What is your main platform?",
    years: "How long have you delivered for large organisations?",
    yearsOptions: ["5–9 years", "10–14 years", "15+ years"],
    modules: "Which AI modules have you shipped?",
    modulesHint: "In production, for a named industry. Example: Agentforce service agent for a European insurer.",
    missions: "Your last three missions.",
    missionsHint: "A client name, or an industry if it's confidential.",
    missionClient: "Client",
    missionClientPlaceholder: "Engie, or “an insurer”",
    missionYear: "Year",
    missionStake: "Project goal",
    missionStakePlaceholder: "AI agent to ease the load on customer service",
    certifications: "Your certifications.",
    certificationsHint: "Add credential IDs if you have them. We verify.",
    community: "Where do you contribute?",
    communityHint: "User groups, talks, community answers, open source. This weighs as much as your CV.",
    terms: "Your terms.",
    rate: "Day rate expectation",
    ratePlaceholder: "900–1,100 EUR",
    availability: "Available from",
    location: "Base location & mobility",
    locationPlaceholder: "Dubai, open to Paris two weeks a month",
    referral: "Who would you vouch for?",
    referralHint: "A specialist you trust.",
    referralName: "First and last name",
    referralContact: "E-mail or LinkedIn profile",
    referralContactPlaceholder: "name@example.com or linkedin.com/in/…",
    invalidReferralContact: "Enter an e-mail or a LinkedIn profile URL.",
    you: "Finally, you.",
    name: "Full name",
    email: "Email",
    linkedin: "LinkedIn profile",
    consentBefore:
      "I agree that my data is processed to assess my application and match me with missions. The missions I list also help 56North understand the market, never quoting me. I can ask for it to be deleted at any time. See our",
    consentLink: "privacy policy",
    submit: "Send application",
    footnote: "A practitioner of your platform reads every application.",
    // Server messages
    invalidEmail: "Enter a valid email",
    invalidLinkedin: "Paste your full LinkedIn profile URL",
    consentRequired: "Required to process your application",
    checkFields: "Please check the highlighted fields.",
    error: "Something went wrong on our side. Please email {email} and we will answer directly.",
  },
  cta: {
    title: "Have a project? Let's talk.",
    body: "The first conversation is free. A practice lead replies within one business day.",
    primary: "Describe your project",
    secondary: "Join the network",
  },
  talents: {
    metaTitle: "Join our senior enterprise AI expert network",
    metaDescription:
      "An admission-based network of senior Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday AI experts: peer vetting, applications open to all.",
    hero: {
      eyebrow: "For experts · Admission-based network",
      title: "A circle of practitioners.\nNot a CV database.",
      intro:
        "56North Experts brings together senior specialists in the AI modules of Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday. You get in on a peer's judgement, never on a keyword. And the door stays open: anyone can apply, and every application is read by a practitioner of their platform.",
      cta: "Apply",
      secondary: "How to get in",
      facts: [
        { value: "Admission", label: "A technical conversation with a senior peer of your platform" },
        { value: "2 weeks", label: "To get back to you, whether or not a mission is open" },
        { value: "Your consent", label: "Nothing is sent to a client without it" },
      ],
    },
    doors: {
      eyebrow: "Three ways in",
      title: "Exclusive does not mean closed.",
      subtitle:
        "The network is selective on level, not on background. Your employer, your country or your path matter little: what counts is what you have delivered.",
      items: [
        {
          tag: "Invitation",
          name: "We come to you",
          body: "We spot practitioners where they work: conferences, user groups, forums, public repositories. If you get our message, one of your public contributions caught our attention.",
        },
        {
          tag: "Referral",
          name: "A member puts you forward",
          body: "A network expert can recommend a peer they trust. Their referral is read first. It does not replace the conversation with a peer.",
        },
        {
          tag: "Application",
          name: "You knock on the door",
          body: "No invitation needed. Five minutes of form, and a practitioner of your platform replies within two weeks.",
        },
      ],
      partnersTitle: "Communities we are active in",
    },
    admission: {
      eyebrow: "Admission",
      title: "Three steps.\nAll run by peers.",
      subtitle: "The same for everyone, invited or not.",
      steps: [
        { name: "Review", body: "A senior practitioner of your platform reads your application: modules delivered, contributions, certifications." },
        { name: "Peer conversation", body: "A technical conversation with an expert who has delivered the same modules: your projects, your choices, what went wrong and what you changed. No multiple-choice quiz." },
        { name: "Admission", body: "Certifications checked, two enterprise references, then you join the network. You are only put forward on the modules you master." },
      ],
    },
    standard: {
      eyebrow: "What the network expects",
      title: "A level, not a template.",
      items: [
        { name: "AI in production", body: "AI modules of your platform live with real users, not just demos." },
        { name: "Decisions you owned", body: "Usually ten years or more with large organisations, with architecture choices you answered for." },
        { name: "Recognised contribution", body: "Talks, forum answers, open-source code, vendor distinctions: they count as much as the CV." },
        { name: "Knowing when to say no", body: "Facing a client in a hurry, offering an alternative rather than a comfortable yes. That is what we expect of an expert we put in front of a CIO." },
      ],
      openNote:
        "Not quite there yet? Apply anyway. If the timing is not right, we will tell you why, and we will stay in touch.",
    },
    promises: {
      eyebrow: "What you get",
      title: "What the network gives you.",
      items: [
        { name: "Missions matched to your stack", body: "We only send missions on the modules you have shipped. No keyword-matched spam." },
        { name: "A panel of peers", body: "You are assessed by practitioners. Once a member, you can join your platform's panel: every interview there is paid." },
        { name: "Transparent terms", body: "Day rate, duration and client context shared before your profile is presented. Nothing is sent without your consent." },
        { name: "No conflict of interest", body: "You are never asked to vouch for your own work. Any independent opinion on a system you delivered is issued by an external auditor." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Questions experts ask.",
      items: [
        {
          q: "Do I need to be a freelancer?",
          a: "No. Freelancers and one-person companies are the most common cases. If you are employed, say so in your application: we discuss it openly.",
        },
        {
          q: "Who decides my day rate?",
          a: "You state yours in your application. For each mission, the rate, duration and client context are shown to you before any proposal, and nothing is sent without your consent.",
        },
        {
          q: "What if I am not admitted?",
          a: "We tell you why. You can apply again when your experience has moved on, for instance after a new project in production.",
        },
        {
          q: "Does membership commit me to anything?",
          a: "No. You never have to accept a mission, and you can leave the network and ask for your data to be deleted at any time.",
        },
        {
          q: "Do clients see my profile?",
          a: "Profiles stay anonymous. Your name is only shared with a client for a specific mission, and only with your consent.",
        },
      ],
    },
    apply: {
      eyebrow: "Apply",
      title: "Knock on the door.",
      subtitle:
        "No invitation needed. Five minutes. A practitioner of your platform reads every application and replies within two weeks, whether or not we have a mission open.",
      success: "Application received. A practitioner of your platform will get back to you within two weeks.",
    },
  },
  cockpit: {
    eyebrow: "The 56North platform",
    title: "Measure the AI you run. Prove you control it.",
    body: "The 56North Cockpit lists the AI systems in service across your company, scores them on five dials (reliability, costs, AI Act evidence, usage, reference data), spots when one of them changes, and gathers the dated, sealed evidence the regulation requires.",
    link: "Discover the 56North Cockpit",
    href: "https://56north.io/en",
  },
  footer: {
    practices: "Practices",
    clients: "Clients",
    experts: "Experts",
    company: "Company",
    join: "Join the network",
    community: "How to join the network",
    platform: "56North Cockpit (AI governance)",
    contact: "Contact",
    rights: "All rights reserved. Part of",
    tagline: "enterprise AI governance",
    privacy: "Privacy policy",
    legal: "Legal notice",
    disclaimer:
      "Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana and all related product names and logos are trademarks of their respective owners. They are used here only to identify the platforms members of the network work on. We are an independent network, not affiliated with or endorsed by these companies.",
    independence:
      "Vendor-neutral: 56North resells no licences and depends on no AI vendor.",
  },
};

export default en;
