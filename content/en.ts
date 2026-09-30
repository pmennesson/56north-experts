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
  },
  hero: {
    eyebrow: "The expert network of 56North",
    title: "Senior AI experts.\nVetted by peers.",
    subtitle:
      "For the AI modules of Microsoft, Salesforce, Google Cloud, SAP, ServiceNow and Workday. Found in the communities where the best specialists actually work.",
    primaryCta: "Request experts",
    secondaryCta: "How it works",
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
      { name: "Start", time: "Monthly review", body: "We handle the contract. Then a monthly check-in with you and the expert. Wrong fit in the first 30 days? We replace, at no sourcing cost." }, // TODO: confirm commercial terms
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
  cta: {
    title: "Tell us the role.",
    body: "A practice lead replies within one business day.",
    primary: "Request experts",
    secondary: "Join the network",
  },
  talents: {
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
  footer: {
    disclaimer:
      "Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana and all related product names and logos are trademarks of their respective owners. They are used here only to identify the platforms our experts work on. We are an independent firm, not affiliated with or endorsed by these companies.",
    independence:
      "Independence rule: 56North does not audit or rate an AI system built or maintained by an expert it placed with the same client in the previous 24 months.",
  },
};

export default en;
