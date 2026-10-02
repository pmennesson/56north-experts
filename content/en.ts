/**
 * English dictionary. Components read copy from here, never hard-code it.
 * Tone: factual, specific, no superlatives a buyer cannot verify.
 */
const en = {
  nav: {
    experts: "Practices",
    talents: "For experts",
    insights: "Insights",
    contact: "Request experts",
    contactShort: "Contact",
    about: "About",
    cockpit: "Cockpit",
    cockpitHref: "https://56north.io/en",
    howItWorks: "How it works",
    openMenu: "Open menu",
    skip: "Skip to content",
    switchLabel: "Français",
    switchShort: "FR",
  },
  meta: {
    siteTitle: "Senior AI experts for enterprise platforms",
    homeTitle: "56North Experts · Senior AI experts for Microsoft, Salesforce, Google Cloud, SAP & ServiceNow",
    description:
      "Staff augmentation and expert delegation for AI modules on Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday. Senior consultants sourced through specialist practitioner communities, vetted by peers, deployed across Europe, the Middle East and Africa.",
    ogTitle: "Senior AI experts. Vetted by peers.",
    ogLocale: "en_US",
  },
  hero: {
    eyebrow: "The expert network of 56North",
    title: "Senior AI experts.\nVetted by peers.",
    subtitle:
      "For the AI modules of Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday. Found in the communities where the best specialists actually work.",
    primaryCta: "Request experts",
    secondaryCta: "How it works",
    reassurance: "Free to brief. No commitment until you choose a profile.",
    shortlist: {
      label: "Example shortlist",
      brief: "Agentforce Architect · Paris · 6 months",
      status: "Peer-vetted",
      profiles: [
        { initials: "AM", title: "Salesforce Technical Architect", years: 14, match: "Agentforce, Data 360" },
        { initials: "LK", title: "Agentforce Lead Consultant", years: 11, match: "Service Cloud, Prompt Builder" },
        { initials: "SB", title: "Salesforce AI Developer", years: 10, match: "Apex, MuleSoft, Einstein" },
      ],
      footnote: "Illustrative example. Profiles stay anonymous until you request an interview.",
      yearsUnit: "yrs",
    },
  },
  vendorBar: {
    title: "Dedicated practices for",
  },
  ecosystems: {
    eyebrow: "Practices",
    title: "Six platforms.\nOne standard.",
    subtitle: "The people who vet a profile have shipped the same modules themselves.",
    cta: "Learn more",
    specialist: "Specialist",
    other: "Oracle, Databricks, Snowflake or another platform? We source on request, through the same communities.",
    otherCta: "Brief us",
  },
  serviceLevels: {
    eyebrow: "Standards",
    title: "Commitments, not claims.",
    items: [
      { value: "Community", label: "Profiles sourced through specialist practitioner communities, not job boards" },
      { value: "6", label: "Enterprise AI ecosystems covered by dedicated practices" },
      { value: "3-step", label: "Vetting: peer technical interview, credential check, references" },
      { value: "10+ yrs", label: "Minimum enterprise delivery experience for senior profiles" },
    ],
  },
  models: {
    eyebrow: "Engagement",
    title: "One expert.\nOr a whole squad.",
    subtitle: "One framework agreement. One invoice a month. Wherever the expert is based.",
    items: [
      {
        name: "Staff augmentation",
        tag: "Most requested",
        body: "A senior expert joins your team, under your lead, on a daily rate.",
        points: ["Time & materials", "From 3 months", "Onsite, hybrid or remote"],
      },
      {
        name: "Dedicated squad",
        tag: null,
        body: "An architect and two to five engineers for one defined outcome.",
        points: ["Scoped deliverables", "Squad lead included", "Weekly steering"],
      },
      {
        name: "Fractional architect",
        tag: null,
        body: "A principal architect, two to eight days a month, owning design authority.",
        points: ["Monthly retainer", "Design authority", "Vendor-neutral"],
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "Brief. Meet. Start.",
    steps: [
      { name: "Brief", time: "30 minutes", body: "One call with a practice lead. Modules, seniority, location, start date, rate." },
      { name: "Meet", time: "Community-sourced", body: "Two or three peer-vetted profiles, each with a written assessment. You interview the ones you choose." },
      { name: "Start", time: "Monthly review", body: "We handle the contract. Then a monthly check-in with you and the expert. Wrong fit in the first 30 days? We replace, at no sourcing cost." },
    ],
  },
  trust: {
    eyebrow: "Why it works",
    title: "Built for procurement.\nAnd for delivery.",
    items: [
      { name: "Found where experts are.", body: "The best specialists are rarely on job boards. We find them in user groups, community forums, meetups and conference talks.", href: "/talents#community", linkLabel: "Our community programme" },
      { name: "Peer-led vetting", body: "A senior practitioner of the same platform interviews every candidate. Credentials verified. Two enterprise references." },
      { name: "Contract-ready", body: "Framework agreement, NDA, IP assignment and GDPR terms, ready to sign." },
      { name: "AI Act literate", body: "Experts briefed on the obligations that apply to their scope: risk, logging, oversight." },
      { name: "Cross-border", body: "Europe, the Middle East and Africa. Contracted locally where needed. Invoiced once." },
      { name: "Independence rule", body: "56North never audits a system built by an expert it placed with the same client in the last 24 months. Building and assuring stay separate." },
    ],
  },
  community: {
    eyebrow: "What we believe",
    title: "Community first.\nExpertise follows.",
    intro:
      "For us, community is essential. The best specialists on a platform do not answer job ads: they answer other people's questions, present what they learned at conferences, publish their code and earn the recognition of their peers. Our experts come from there. That is where we look for them, and what we value before the CV.",
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
    title: "Questions buyers ask.",
    items: [
      {
        q: "What is AI staff augmentation?",
        a: "AI staff augmentation means adding external senior specialists to your internal team for a defined period to deliver AI projects on your existing platforms. The experts work under your direction; the staffing partner handles sourcing, vetting, contracts and follow-up.",
      },
      {
        q: "How is this different from hiring a systems integrator?",
        a: "A systems integrator sells a project with its own team and methodology. Staff augmentation gives you named senior experts inside your team, so you keep ownership of design decisions and knowledge, usually at a lower total cost for the same seniority.",
      },
      {
        q: "Can 56North audit an AI system built by an expert you placed?",
        a: "No. 56North never audits or rates a system that an expert it placed has built or maintained for the same client in the previous 24 months. Staffing and assurance stay separate, so our audit opinions remain independent.",
      },
      // TODO: adjust if you hold vendor partner status (it then becomes a strength to state)
      {
        q: "Are you a partner or reseller of these vendors?",
        a: "No. We are an independent staffing firm. We do not resell licences, which lets our experts recommend what fits your context rather than what a vendor is pushing this quarter.",
      },
    ],
  },
  founder: {
    eyebrow: "Who is behind it",
    title: "Built by someone who has staffed 1,100 consultants.",
    body: "56North Experts is led by Pascal Mennesson, co-founder of Maltem Consulting Group, which he grew from 2001 to more than 1,100 consultants in 12 countries before its exit. He knows what it takes to put the right senior person on an enterprise programme, and what it costs when the wrong one shows up.",
    link: "About us",
  },
  /** Practice pages: the reader's situation in their own words, then what changes. */
  practice: {
    painsTitle: "Sound familiar?",
    pains: [
      "You have a {vendor} AI roadmap, and your team is busy running the platform.",
      "Your integrator proposes junior profiles at senior rates.",
      "Your security team asks who will control the AI once it is live.",
    ],
    afterTitle: "What changes when the right expert joins",
    after: [
      "A senior {vendor} specialist in your team, under your lead.",
      "A first AI use case scoped, built and measured, not just a slide.",
      "Governance your auditors and your security team can read.",
    ],
    midCta: "Brief us on your {vendor} role",
    related: "Other practices",
    guidesTitle: "Guides for {vendor} teams",
    breadcrumb: "Practices",
    home: "Home",
    request: "Request experts",
    requestVendor: "Request {vendor} experts",
    modulesLink: "Modules covered",
    answerSuffix:
      "Delivered through staff augmentation, dedicated squads or fractional architecture, sourced through the {vendor} practitioner communities and vetted by a senior peer.",
    modulesEyebrow: "Modules",
    modulesTitle: "What our {vendor} experts deliver.",
    rolesTitle: "Roles we staff",
    credentialsTitle: "Credentials we verify",
    credentialsNote: "Checked against the vendor's public credential registry where available.",
    faqTitle: "{vendor} AI staffing, answered.",
    linkLabel: "{vendor} AI experts",
    metaTitle: "{vendor} AI experts & consultants for hire",
    metaDescription:
      "Senior {modules} experts on staff augmentation. Sourced in specialist communities, vetted by peers, deployed across Europe, the Middle East and Africa.",
  },
  about: {
    metaTitle: "About 56North Experts",
    metaDescription:
      "Who runs 56North Experts, how we source and vet senior AI specialists, and the independence rule that separates staffing from AI audits. Founded by Pascal Mennesson, co-founder of Maltem Consulting Group.",
    eyebrow: "About",
    title: "Senior people.\nPlaced with care.",
    intro:
      "56North Experts is the expert network of 56North. We place senior specialists on the AI modules of the enterprise platforms companies already run, across Europe, the Middle East and Africa.",
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
        name: "Independent by rule",
        body: "56North never audits or rates an AI system built or maintained by an expert it placed with the same client in the previous 24 months.",
      },
    ],
    operator: "56North Experts is operated by {company} (BRN {brn}), registered in Port Louis, Mauritius.",
    legalLink: "Legal notice",
  },
  contactPage: {
    metaTitle: "Request senior AI experts",
    metaDescription:
      "Send a staffing brief for Microsoft, Salesforce, Google Cloud, SAP or ServiceNow AI experts. A practice lead replies within one business day and sources through specialist practitioner communities.",
    eyebrow: "Staffing request",
    title: "Tell us the role.",
    intro:
      "Two minutes. A practice lead calls you back within one business day, then introduces two or three peer-vetted profiles, with a realistic lead time given upfront.",
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
    metaTitle: "Guides to integrate, run and govern enterprise AI",
    metaDescription:
      "Practical guides on the AI of Microsoft, Salesforce, SAP, ServiceNow, Google Cloud and Workday: integration, day-to-day use, maintenance, EU AI Act and risks.",
    eyebrow: "Insights",
    title: "Integrate, run and govern enterprise AI.",
    intro:
      "Practical guides on the AI modules of the platforms you already run: putting them into production, keeping them reliable, and meeting the regulation without slowing down.",
    planned: [
      { type: "Guide", title: "Staff augmentation vs systems integrator for AI projects" },
      { type: "Benchmark", title: "Day rates for senior AI experts by platform and country" },
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
    ctaBody: "Free to brief. A practice lead replies within one business day.",
  },
  notFound: {
    title: "This page does not exist.",
    body: "The expert you are looking for might still be one brief away.",
    home: "Home",
    cta: "Request experts",
  },
  legal: {
    updatedLabel: "Last updated:",
    updated: "30 September 2026",
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
    role: "What role do you need?",
    roleHint: "The modules matter more than the title.",
    rolePlaceholder: "e.g. Agentforce architect with Data 360",
    model: "How would you like to work?",
    models: [
      { value: "staff-augmentation", label: "One expert in my team", detail: "Staff augmentation, daily rate" },
      { value: "squad", label: "A dedicated squad", detail: "Architect plus engineers, scoped outcome" },
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
    referralHint: "A specialist you trust. Referrals that lead to a mission are rewarded.",
    referralPlaceholder: "Name and LinkedIn URL",
    you: "Finally, you.",
    name: "Full name",
    email: "Email",
    linkedin: "LinkedIn profile",
    consentBefore:
      "I agree that my data is processed to assess my application and match me with missions. I can ask for it to be deleted at any time. See our",
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
    title: "Tell us the role.",
    body: "Free to brief. A practice lead replies within one business day.",
    primary: "Request experts",
    secondary: "Join the network",
  },
  talents: {
    metaTitle: "Join our network of senior enterprise AI experts",
    metaDescription:
      "Senior specialists on Microsoft, Salesforce, Google Cloud, SAP, ServiceNow or Workday AI: join a community-led network for enterprise missions. Referral fees, paid vetting panel, practitioner meetups.",
    hero: {
      eyebrow: "For experts",
      title: "Your next mission.\nFound by your peers.",
      intro:
        "No job boards. Missions travel through the practitioner communities of each platform. If you build, speak or answer questions in yours, we want to meet you.",
      cta: "Apply to the network",
      secondary: "How the community works",
    },
    promises: {
      eyebrow: "What you get",
      title: "A network run by practitioners.",
      items: [
        { name: "Missions matched to your stack", body: "We only send missions on the modules you have shipped. No keyword-matched spam." },
        { name: "Peer-level conversation", body: "Your technical interview is with a senior practitioner of your platform, not a generalist recruiter." },
        { name: "Transparent terms", body: "Day rate, duration and client context shared before your profile is presented. Nothing is sent without your consent." },
        { name: "Paid on time", body: "Monthly invoicing with fixed payment terms, whatever the client's country." }, // TODO: confirm payment terms
      ],
    },
    community: {
      eyebrow: "Community programme",
      title: "We give back to the communities we source from.",
      subtitle: "Four ways. Each one is also how clients can check that our network is real.",
      // TODO: validate each mechanism and its terms before publishing
      items: [
        {
          name: "Peer referrals",
          body: "Recommend a specialist you trust. If they are placed on a mission, you receive a referral fee.",
          tag: "Referral fee",
        },
        {
          name: "Paid vetting panel",
          body: "Senior experts can join the panel that interviews candidates on their platform. Each technical interview is paid, and panel members see missions first.",
          tag: "Paid per interview",
        },
        {
          name: "Meetups and user groups",
          body: "We host and sponsor practitioner meetups on enterprise AI: real delivery stories, no sales pitches. Venue, food and speaker logistics on us.",
          tag: "Host & sponsor",
        },
        {
          name: "Contribution counts",
          body: "Talks, community answers, open-source work and recognised contributor status weigh in our vetting as much as a CV. We ask about them in every interview.",
          tag: "Recognition",
        },
      ],
      partnersTitle: "Communities we are active in",
    },
    apply: {
      eyebrow: "Apply",
      title: "Join the network.",
      subtitle:
        "Five minutes. A practitioner of your platform reviews every application personally and replies within two weeks, whether or not we have a mission open.",
      success: "Application received. A practitioner of your platform will get back to you within two weeks.",
    },
  },
  cockpit: {
    eyebrow: "The 56North platform",
    title: "Measure the AI you run. Prove you control it.",
    body: "The 56North Cockpit lists the AI systems in service across your company, tracks them on five dials (reliability, costs, AI Act evidence, usage, reference data) and gathers the dated evidence the regulation requires.",
    link: "Discover the 56North Cockpit",
    href: "https://56north.io/en",
  },
  footer: {
    practices: "Practices",
    clients: "Clients",
    experts: "Experts",
    company: "Company",
    join: "Join the network",
    community: "Community programme",
    platform: "56North Cockpit (AI governance)",
    contact: "Contact",
    rights: "All rights reserved. Part of",
    tagline: "enterprise AI governance",
    privacy: "Privacy policy",
    legal: "Legal notice",
    disclaimer:
      "Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana and all related product names and logos are trademarks of their respective owners. They are used here only to identify the platforms our experts work on. We are an independent firm, not affiliated with or endorsed by these companies.",
    independence:
      "Independence rule: 56North does not audit or rate an AI system built or maintained by an expert it placed with the same client in the previous 24 months.",
  },
};

export default en;
