import type { Dictionary } from "@/lib/i18n";

/**
 * Dictionnaire français. Même structure que content/en.ts (le type l'impose).
 * Ton : factuel, vouvoiement, pas de superlatif invérifiable.
 * Les espaces insécables avant ? ! : ; sont ajoutées automatiquement (lib/i18n.ts).
 */
const fr: Dictionary = {
  nav: {
    experts: "Expertises",
    apply: "Candidater",
    talents: "Pour les experts",
    insights: "Ressources",
    contact: "Parlons de votre projet",
    contactShort: "Contact",
    about: "À propos",
    cockpit: "Le Cockpit",
    cockpitHref: "https://56north.io",
    howItWorks: "Comment ça marche",
    openMenu: "Ouvrir le menu",
    skip: "Aller au contenu",
    switchLabel: "English",
    switchShort: "EN",
  },
  meta: {
    siteTitle: "Experts IA seniors pour les plateformes d'entreprise",
    homeTitle: "56North Experts · Experts IA seniors Microsoft, Salesforce, Google Cloud, SAP et ServiceNow",
    description:
      "Délégation d'experts IA seniors en régie sur Microsoft, Salesforce, Google Cloud, SAP, ServiceNow et Workday. Consultants issus des communautés de praticiens, évalués par des pairs, déployés en Europe, au Moyen-Orient et en Afrique.",
    ogTitle: "Experts IA seniors. Évalués par leurs pairs.",
    ogLocale: "fr_FR",
  },
  hero: {
    eyebrow: "Le réseau d'experts de 56North",
    title: "Experts IA seniors.\nÉvalués par leurs pairs.",
    subtitle:
      "Pour les modules IA de Microsoft, Salesforce, Google Cloud, SAP, ServiceNow et Workday. Trouvés dans les communautés où travaillent les meilleurs spécialistes.",
    primaryCta: "Parlons de votre projet",
    secondaryCta: "Comment ça marche",
    reassurance: "Brief gratuit. Aucun engagement avant d'avoir choisi un profil.",
    alert: { label: "Alerte actu", all: "Voir tous les articles" },
    shortlist: {
      label: "Exemple de sélection",
      brief: "Architecte Agentforce · Paris · 6 mois",
      status: "Évalués par des pairs",
      profiles: [
        { initials: "AM", title: "Architecte technique Salesforce", years: 14, match: "Agentforce, Data 360" },
        { initials: "LK", title: "Consultante principale Agentforce", years: 11, match: "Service Cloud, Prompt Builder" },
        { initials: "SB", title: "Développeur IA Salesforce", years: 10, match: "Apex, MuleSoft, Einstein" },
      ],
      footnote: "Exemple fictif. Les profils restent anonymes jusqu'à votre demande d'entretien.",
      yearsUnit: "ans",
    },
  },
  vendorBar: {
    title: "Des expertises dédiées pour",
  },
  ecosystems: {
    eyebrow: "Expertises",
    title: "Six plateformes.\nUne seule exigence.",
    subtitle: "Ceux qui évaluent un profil ont eux-mêmes livré les mêmes modules.",
    cta: "En savoir plus",
    specialist: "Spécialité",
    other: "Oracle, Databricks, Snowflake ou une autre plateforme ? Nous cherchons sur demande, dans les mêmes communautés.",
    otherCta: "Décrivez-nous le besoin",
  },
  serviceLevels: {
    eyebrow: "Nos standards",
    title: "Des engagements, pas des promesses.",
    items: [
      { value: "Communautés", label: "Profils trouvés dans les communautés de praticiens, pas sur les job boards" },
      { value: "6", label: "Écosystèmes IA d'entreprise couverts par une expertise dédiée" },
      { value: "3 étapes", label: "Évaluation : entretien technique par un pair, certifications vérifiées, références" },
      { value: "10 ans +", label: "D'expérience minimum en grands comptes pour un profil senior" },
    ],
  },
  models: {
    eyebrow: "Modes d'intervention",
    title: "Un expert.\nOu toute une équipe.",
    subtitle: "Un contrat-cadre. Une facture par mois. Où que soit basé l'expert.",
    items: [
      {
        name: "Régie",
        tag: "Le plus demandé",
        body: "Un expert senior rejoint votre équipe, sous votre direction, au taux journalier.",
        points: ["Temps passé", "À partir de 3 mois", "Sur site, hybride ou à distance"],
      },
      {
        name: "Équipe dédiée",
        tag: null,
        body: "Un architecte et deux à cinq ingénieurs pour un résultat défini.",
        points: ["Livrables cadrés", "Responsable d'équipe inclus", "Comité de pilotage hebdomadaire"],
      },
      {
        name: "Architecte à temps partagé",
        tag: null,
        body: "Un architecte principal, deux à huit jours par mois, garant des choix d'architecture.",
        points: ["Forfait mensuel", "Autorité d'architecture", "Indépendant des éditeurs"],
      },
    ],
  },
  process: {
    eyebrow: "Comment ça marche",
    title: "Brief. Rencontre. Démarrage.",
    steps: [
      { name: "Brief", time: "30 minutes", body: "Un appel avec un responsable d'expertise. Modules, séniorité, lieu, date de démarrage, budget." },
      { name: "Rencontre", time: "Profils issus des communautés", body: "Deux ou trois profils évalués par des pairs, chacun avec une évaluation écrite. Vous recevez en entretien ceux que vous choisissez." },
      { name: "Démarrage", time: "Point mensuel", body: "Nous gérons le contrat. Puis un point mensuel avec vous et l'expert. Le profil ne convient pas dans les 30 premiers jours ? Nous le remplaçons, sans frais de recherche." },
    ],
  },
  trust: {
    eyebrow: "Pourquoi ça marche",
    title: "Pensé pour les achats.\nEt pour les projets.",
    items: [
      { name: "Là où sont les experts.", body: "Les meilleurs spécialistes sont rarement sur les job boards. Nous les trouvons dans les groupes d'utilisateurs, les forums communautaires, les meetups et les conférences.", href: "/talents#community", linkLabel: "Comment entrer dans le réseau" },
      { name: "Évaluation par les pairs", body: "Un praticien senior de la même plateforme reçoit chaque candidat en entretien. Certifications vérifiées. Deux références en grand compte." },
      { name: "Prêt à contractualiser", body: "Contrat-cadre, accord de confidentialité, cession de propriété intellectuelle et clauses RGPD, prêts à signer." },
      { name: "Au fait de l'AI Act", body: "Experts informés des obligations qui s'appliquent à leur périmètre : risques, journalisation, supervision humaine." },
      { name: "International", body: "Europe, Moyen-Orient et Afrique. Contrat local si nécessaire. Une seule facture." },
      { name: "Règle d'indépendance", body: "56North n'audite jamais un système construit par un expert qu'il a placé chez le même client au cours des 24 derniers mois. Construire et contrôler restent séparés." },
    ],
  },
  community: {
    eyebrow: "Notre conviction",
    title: "La communauté d'abord.\nL'expertise suit.",
    intro:
      "Pour nous, la communauté est essentielle. Les meilleurs spécialistes d'une plateforme ne répondent pas aux annonces : ils répondent aux questions des autres, présentent leurs retours en conférence, publient leur code et obtiennent la reconnaissance de leurs pairs. Nos experts en proviennent. C'est là que nous les cherchons, et c'est ce que nous valorisons avant le CV.",
    groupsTitle: "Nous valorisons les experts issus des communautés suivantes",
    groups: [
      { vendor: "Salesforce", items: "Trailblazer Community, programme Salesforce MVP, Dreamforce et groupes d'utilisateurs locaux" },
      { vendor: "Microsoft", items: "Microsoft Tech Community, programme Microsoft MVP, Microsoft Ignite" },
      { vendor: "Google Cloud", items: "Google Developer Experts, Google Cloud Community, Google Cloud Next" },
      { vendor: "SAP", items: "SAP Community, programme SAP Champions, SAP TechEd" },
      { vendor: "ServiceNow", items: "ServiceNow Community, programme ServiceNow Community MVP, Knowledge" },
      { vendor: "Workday", items: "Workday Community, Workday Rising" },
    ],
    closing:
      "Un expert reconnu par ses pairs a déjà passé le test le plus dur : celui de ceux qui font le même métier. Nous y ajoutons le nôtre, un entretien technique mené par un pair senior, les certifications vérifiées et deux références en grand compte.",
    note: "Ces communautés et programmes appartiennent à leurs éditeurs respectifs. Nous les citons pour dire où nous cherchons : 56North Experts n'est affilié à aucun d'eux.",
    cta: "Rejoindre le réseau",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Les questions des acheteurs.",
    items: [
      {
        q: "Qu'est-ce que la délégation d'experts IA en régie ?",
        a: "La régie consiste à intégrer des spécialistes seniors externes à votre équipe pour une durée définie, afin de mener des projets d'IA sur vos plateformes existantes. Les experts travaillent sous votre direction ; le partenaire se charge de la recherche, de l'évaluation, des contrats et du suivi.",
      },
      {
        q: "Quelle différence avec un intégrateur ?",
        a: "Un intégrateur vend un projet avec sa propre équipe et sa méthode. La régie vous donne des experts seniors nommés au sein de votre équipe : vous gardez la maîtrise des choix et des connaissances, généralement pour un coût total inférieur à séniorité égale.",
      },
      {
        q: "56North peut-il auditer un système IA construit par un expert que vous avez placé ?",
        a: "Non. 56North n'audite ni n'évalue jamais un système construit ou maintenu par un expert qu'il a placé chez le même client au cours des 24 mois précédents. Placement et contrôle restent séparés, pour que nos avis d'audit restent indépendants.",
      },
      // TODO: à ajuster en cas de statut de partenaire éditeur
      {
        q: "Êtes-vous partenaire ou revendeur de ces éditeurs ?",
        a: "Non. Nous sommes un cabinet indépendant. Nous ne revendons aucune licence : nos experts recommandent ce qui convient à votre contexte, pas ce qu'un éditeur pousse ce trimestre.",
      },
    ],
  },
  founder: {
    eyebrow: "Qui est derrière",
    title: "Fondé par un dirigeant qui a fait grandir une équipe de 1 100 consultants.",
    body: "56North Experts est dirigé par Pascal Mennesson, cofondateur de Maltem Consulting Group, qu'il a développé à partir de 2001 jusqu'à plus de 1 100 consultants dans 12 pays avant sa cession. Il sait ce qu'il faut pour placer la bonne personne senior sur un programme d'entreprise, et ce que coûte une erreur de casting.",
    link: "À propos",
  },
  practice: {
    painsTitle: "Ça vous parle ?",
    pains: [
      "Vous avez une feuille de route IA sur {vendor}, et votre équipe est occupée à faire tourner la plateforme.",
      "Votre intégrateur propose des profils juniors au tarif de seniors.",
      "Votre équipe sécurité demande qui contrôlera l'IA une fois en production.",
    ],
    afterTitle: "Ce qui change quand le bon expert arrive",
    after: [
      "Un spécialiste {vendor} senior dans votre équipe, sous votre direction.",
      "Un premier cas d'usage IA cadré, construit et mesuré, pas seulement une slide.",
      "Une gouvernance lisible par vos auditeurs et votre équipe sécurité.",
    ],
    midCta: "Décrivez-nous votre besoin {vendor}",
    related: "Autres expertises",
    guidesTitle: "Guides pour les équipes {vendor}",
    breadcrumb: "Expertises",
    home: "Accueil",
    request: "Parlons de votre projet",
    requestVendor: "Parlons de votre projet {vendor}",
    modulesLink: "Modules couverts",
    answerSuffix:
      "En régie, en équipe dédiée ou en architecture à temps partagé, avec des profils issus des communautés de praticiens {vendor} et évalués par un pair senior.",
    modulesEyebrow: "Modules",
    modulesTitle: "Ce que livrent nos experts {vendor}.",
    rolesTitle: "Les rôles que nous couvrons",
    credentialsTitle: "Les certifications que nous vérifions",
    credentialsNote: "Contrôlées auprès du registre public de l'éditeur quand il existe.",
    faqTitle: "Experts IA {vendor} : vos questions.",
    linkLabel: "Experts IA {vendor}",
    metaTitle: "Experts et consultants IA {vendor} en régie",
    metaDescription:
      "Experts seniors {modules} en régie. Issus des communautés de spécialistes, évalués par des pairs, déployés en Europe, au Moyen-Orient et en Afrique.",
  },
  about: {
    metaTitle: "À propos de 56North Experts",
    metaDescription:
      "Qui dirige 56North Experts, comment nous trouvons et évaluons les spécialistes IA seniors, et la règle d'indépendance qui sépare placement et audit. Fondé par Pascal Mennesson, cofondateur de Maltem Consulting Group.",
    eyebrow: "À propos",
    title: "Des seniors.\nChoisis par leurs pairs.",
    intro:
      "56North Experts est le réseau d'experts de 56North. Nous réunissons des spécialistes seniors des modules IA des plateformes que les entreprises utilisent déjà, et nous les engageons sur leurs projets en Europe, au Moyen-Orient et en Afrique.",
    principlesEyebrow: "Notre méthode",
    principlesTitle: "Trois principes.",
    principles: [
      {
        name: "Trouvés dans les communautés",
        body: "Les meilleurs spécialistes d'une plateforme répondent rarement aux job boards. Nous les trouvons là où ils contribuent : groupes d'utilisateurs, forums, meetups et conférences.",
      },
      {
        name: "Évalués par leurs pairs",
        body: "Chaque candidat passe un entretien avec un praticien senior de la même plateforme, sur une grille d'évaluation commune. Nous couvrons aujourd'hui {count} plateformes d'entreprise.",
      },
      {
        name: "Indépendants par principe",
        body: "56North n'audite ni n'évalue jamais un système IA construit ou maintenu par un expert qu'il a placé chez le même client au cours des 24 mois précédents.",
      },
    ],
    operator: "56North Experts est exploité par {company} (BRN {brn}), immatriculée à Port-Louis, île Maurice.",
    legalLink: "Mentions légales",
  },
  contactPage: {
    metaTitle: "Experts IA seniors : parlons de votre projet",
    metaDescription:
      "Envoyez votre besoin d'experts IA Microsoft, Salesforce, Google Cloud, SAP ou ServiceNow. Un responsable d'expertise vous répond sous un jour ouvré et cherche dans les communautés de spécialistes.",
    eyebrow: "Votre projet",
    title: "Parlons de votre projet.",
    intro:
      "Deux minutes. Un responsable d'expertise vous rappelle sous un jour ouvré, puis vous présente deux ou trois profils évalués par des pairs, avec un délai réaliste annoncé dès le départ.",
    nextTitle: "La suite",
    next: [
      "Appel de cadrage avec un responsable d'expertise",
      "Sélection avec évaluation écrite par un pair",
      "Entretiens à vos dates, nous coordonnons",
      "Contrat et date de démarrage",
    ],
    preferEmail: "Vous préférez l'e-mail ? Écrivez à",
  },
  insights: {
    mainSite: {
      title: "À lire sur 56north.io",
      intro: "Incidents, AI Act et gouvernance des IA d'entreprise : les articles de 56north.io, notre plateforme de pilotage des IA.",
      all: "Tous les articles de 56north.io",
    },
    metaTitle: "Guides pour intégrer, exploiter et encadrer l'IA d'entreprise",
    metaDescription:
      "Des guides pratiques sur l'IA de Microsoft, Salesforce, SAP, ServiceNow, Google Cloud et Workday : intégration, usage, maintenance, AI Act et risques.",
    eyebrow: "Ressources",
    title: "Intégrer, exploiter et encadrer l'IA d'entreprise.",
    intro:
      "Des guides pratiques sur les modules IA des plateformes que vous utilisez déjà : les mettre en production, les garder fiables, et respecter la réglementation sans ralentir.",
    planned: [
      { type: "Guide", title: "Régie ou intégrateur pour un projet IA ?" },
      { type: "Étude", title: "Taux journaliers des experts IA seniors par plateforme et par pays" },
      { type: "Livre blanc", title: "Préparer ses déploiements IA à l'AI Act européen" },
    ],
    soon: "Bientôt disponible",
    by: "Par",
    role: "Fondateur, 56North",
    minutes: "min de lecture",
    updated: "Mis à jour le",
    takeaways: "L'essentiel",
    draft: "Brouillon à relire. Cette page n'est ni listée ni indexée par les moteurs de recherche.",
    practicesTitle: "Les experts sur ce sujet",
    moreTitle: "À lire aussi",
    back: "Toutes les ressources",
    faqTitle: "Questions et réponses",
    sourcesTitle: "Sources",
    ctaTitle: "Besoin de cette expertise sur votre projet ?",
    ctaBody: "Brief gratuit. Un responsable d'expertise vous répond sous un jour ouvré.",
  },
  notFound: {
    title: "Cette page n'existe pas.",
    body: "L'expert que vous cherchez n'est peut-être qu'à un brief de distance.",
    home: "Accueil",
    cta: "Parlons de votre projet",
  },
  legal: {
    updatedLabel: "Dernière mise à jour :",
    updated: "30 septembre 2026",
    privacyTitle: "Politique de confidentialité",
    privacyDescription: "Comment Swell Invest Ltd collecte et traite les données personnelles sur 56North Experts.",
    noticeTitle: "Mentions légales",
    noticeDescription: "Informations légales sur 56North Experts, exploité par Swell Invest Ltd.",
  },
  steps: {
    back: "Retour",
    next: "Continuer",
    skip: "Passer ou continuer",
    sending: "Envoi…",
    required: "Champ obligatoire",
    invalidEmail: "Saisissez un e-mail valide",
    thanks: "Merci.",
    otherPlatform: "Une autre plateforme",
  },
  contactForm: {
    platform: "Quelle plateforme ?",
    role: "De quel profil avez-vous besoin ?",
    roleHint: "Les modules comptent plus que l'intitulé du poste.",
    rolePlaceholder: "ex. Architecte Agentforce avec Data 360",
    model: "Comment souhaitez-vous travailler ?",
    models: [
      { value: "staff-augmentation", label: "Un expert dans mon équipe", detail: "Régie, au taux journalier" },
      { value: "squad", label: "Une équipe dédiée", detail: "Architecte et ingénieurs, résultat cadré" },
      { value: "fractional", label: "Un architecte à temps partagé", detail: "Deux à huit jours par mois" },
      { value: "unsure", label: "Je ne sais pas encore", detail: "Nous vous conseillerons lors de l'appel" },
    ],
    when: "Quand et où ?",
    start: "Démarrage souhaité",
    location: "Lieu et mode de travail",
    locationPlaceholder: "Paris, hybride",
    context: "Quelque chose à savoir ?",
    contextHint: "Avancement du projet, équipe, contraintes.",
    you: "Qui devons-nous appeler ?",
    name: "Nom complet",
    email: "E-mail professionnel",
    company: "Entreprise",
    submit: "Envoyer le brief",
    footnote: "Votre brief est confidentiel et sert uniquement à répondre à votre demande.",
    privacy: "Politique de confidentialité",
    invalidWorkEmail: "Saisissez un e-mail professionnel valide",
    useWorkEmail: "Merci d'utiliser votre e-mail professionnel",
    checkFields: "Merci de vérifier les champs signalés.",
    error: "Un problème est survenu de notre côté. Écrivez-nous à {email}, nous vous répondrons directement.",
    success: "Brief reçu. Un responsable d'expertise vous répond sous un jour ouvré.",
  },
  applicationForm: {
    platform: "Quelle est votre plateforme principale ?",
    years: "Depuis combien de temps intervenez-vous pour de grandes organisations ?",
    yearsOptions: ["5 à 9 ans", "10 à 14 ans", "15 ans et plus"],
    modules: "Quels modules IA avez-vous livrés ?",
    modulesHint: "En production, en précisant le secteur. Exemple : agent de service Agentforce pour un assureur européen.",
    certifications: "Vos certifications.",
    certificationsHint: "Ajoutez les identifiants si vous les avez. Nous vérifions.",
    community: "Où contribuez-vous ?",
    communityHint: "Groupes d'utilisateurs, conférences, réponses sur les forums, open source. Cela compte autant que votre CV.",
    terms: "Vos conditions.",
    rate: "Taux journalier souhaité",
    ratePlaceholder: "900 à 1 100 EUR",
    availability: "Disponible à partir de",
    location: "Lieu de résidence et mobilité",
    locationPlaceholder: "Dubaï, mobile à Paris deux semaines par mois",
    referral: "Qui recommanderiez-vous ?",
    referralHint: "Un spécialiste en qui vous avez confiance. Les recommandations qui aboutissent à une mission sont rémunérées.",
    referralPlaceholder: "Nom et URL LinkedIn",
    you: "Enfin, vous.",
    name: "Nom complet",
    email: "E-mail",
    linkedin: "Profil LinkedIn",
    consentBefore:
      "J'accepte que mes données soient traitées pour évaluer ma candidature et me proposer des missions. Je peux demander leur suppression à tout moment. Voir notre",
    consentLink: "politique de confidentialité",
    submit: "Envoyer ma candidature",
    footnote: "Un praticien de votre plateforme lit chaque candidature.",
    invalidEmail: "Saisissez un e-mail valide",
    invalidLinkedin: "Collez l'URL complète de votre profil LinkedIn",
    consentRequired: "Nécessaire pour traiter votre candidature",
    checkFields: "Merci de vérifier les champs signalés.",
    error: "Un problème est survenu de notre côté. Écrivez-nous à {email}, nous vous répondrons directement.",
  },
  cta: {
    title: "Vous avez un projet ? Parlons-en.",
    body: "Brief gratuit. Un responsable d'expertise vous répond sous un jour ouvré.",
    primary: "Décrire votre projet",
    secondary: "Rejoindre le réseau",
  },
  talents: {
    metaTitle: "Rejoindre le réseau d'experts IA seniors, sur admission",
    metaDescription:
      "Réseau sur admission d'experts IA seniors Microsoft, Salesforce, Google Cloud, SAP, ServiceNow et Workday : évaluation par un pair, candidature ouverte à tous.",
    hero: {
      eyebrow: "Pour les experts · Réseau sur admission",
      title: "Un cercle de praticiens.\nPas une base de CV.",
      intro:
        "56North Experts réunit des spécialistes seniors des modules IA de Microsoft, Salesforce, Google Cloud, SAP, ServiceNow et Workday. On y entre sur l'avis d'un pair, jamais sur un mot-clé. Et la porte reste ouverte : chacun peut candidater, chaque candidature est lue par un praticien de sa plateforme.",
      cta: "Candidater",
      secondary: "Comment on entre",
      facts: [
        { value: "Sur admission", label: "Un échange technique avec un pair senior de votre plateforme" },
        { value: "2 semaines", label: "Pour vous répondre, qu'une mission soit ouverte ou non" },
        { value: "Votre accord", label: "Rien n'est envoyé à un client sans lui" },
      ],
    },
    doors: {
      eyebrow: "Trois portes d'entrée",
      title: "Exclusif ne veut pas dire fermé.",
      subtitle:
        "Le réseau est sélectif sur le niveau, pas sur l'origine. Votre employeur, votre pays ou votre parcours importent peu : ce qui compte, c'est ce que vous avez livré.",
      items: [
        {
          tag: "Invitation",
          name: "Nous venons à vous",
          body: "Nous repérons les praticiens là où ils travaillent : conférences, groupes d'utilisateurs, forums, dépôts publics. Si vous recevez notre message, c'est qu'un de vos travaux publics a retenu notre attention.",
        },
        {
          tag: "Recommandation",
          name: "Un membre vous propose",
          body: "Un expert du réseau peut recommander un pair en qui il a confiance. Sa recommandation est lue en priorité. Elle ne dispense pas de l'échange avec un pair.",
        },
        {
          tag: "Candidature",
          name: "Vous frappez à la porte",
          body: "Aucune invitation nécessaire. Cinq minutes de formulaire, et un praticien de votre plateforme vous répond sous deux semaines.",
        },
      ],
      partnersTitle: "Communautés où nous sommes actifs",
    },
    admission: {
      eyebrow: "L'admission",
      title: "Trois étapes.\nToutes menées par des pairs.",
      subtitle: "Les mêmes pour tout le monde, invité ou non.",
      steps: [
        { name: "Lecture", body: "Un praticien senior de votre plateforme lit votre candidature : modules livrés, contributions, certifications." },
        { name: "Échange entre pairs", body: "Une conversation technique avec un expert qui a livré les mêmes modules : vos projets, vos choix, ce qui a mal tourné et ce que vous avez changé. Pas de questionnaire à choix multiples." },
        { name: "Admission", body: "Certifications vérifiées, deux références en grand compte, puis l'entrée dans le réseau. Vous n'êtes proposé que sur les modules que vous maîtrisez." },
      ],
    },
    standard: {
      eyebrow: "Ce que le réseau attend",
      title: "Un niveau, pas un profil type.",
      items: [
        { name: "Des IA en production", body: "Des modules IA de votre plateforme mis en service chez de vrais utilisateurs, pas seulement des démonstrations." },
        { name: "Des décisions assumées", body: "En général dix ans ou plus auprès de grandes organisations, avec des choix d'architecture dont vous avez répondu." },
        { name: "Une contribution reconnue", body: "Conférences, réponses sur les forums, code ouvert, distinctions d'éditeur : elles comptent autant que le CV." },
        { name: "Savoir dire non", body: "Face à un client pressé, proposer une alternative plutôt qu'un oui de confort. C'est ce qu'on attend d'un expert qu'on présente à un DSI." },
      ],
      openNote:
        "Pas encore tout à fait là ? Candidatez quand même. Si le moment n'est pas venu, nous vous disons pourquoi, et nous gardons le contact pour la suite.",
    },
    promises: {
      eyebrow: "Ce que vous y gagnez",
      title: "Ce que le réseau vous apporte.",
      items: [
        { name: "Des missions à votre mesure", body: "Nous ne vous proposons que des missions sur les modules que vous avez livrés. Pas de sollicitations envoyées par mots-clés." },
        { name: "Un jury de pairs", body: "Vous êtes évalué entre praticiens. Une fois membre, vous pouvez rejoindre le jury de votre plateforme : chaque entretien y est rémunéré." },
        { name: "Des conditions transparentes", body: "Taux journalier, durée et contexte client partagés avant toute présentation. Rien n'est envoyé sans votre accord." },
        { name: "Votre indépendance protégée", body: "56North n'audite jamais un système construit par un expert du réseau chez le même client. Vous n'êtes jamais juge et partie." },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les questions des experts.",
      items: [
        {
          q: "Faut-il être indépendant ?",
          a: "Non. Les indépendants et les sociétés personnelles sont les cas les plus courants. Si vous êtes salarié, dites-le dans votre candidature : nous en parlons ouvertement.",
        },
        {
          q: "Qui décide de mon taux journalier ?",
          a: "Vous indiquez le vôtre dans votre candidature. Pour chaque mission, le taux, la durée et le contexte client vous sont présentés avant toute proposition, et rien n'est envoyé sans votre accord.",
        },
        {
          q: "Et si je ne suis pas admis ?",
          a: "Nous vous disons pourquoi. Vous pouvez candidater de nouveau quand votre expérience a évolué, par exemple après un nouveau projet en production.",
        },
        {
          q: "Être membre m'engage-t-il ?",
          a: "Non. Vous n'êtes tenu d'accepter aucune mission, et vous pouvez quitter le réseau et demander la suppression de vos données à tout moment.",
        },
        {
          q: "Les clients voient-ils mon profil ?",
          a: "Les profils restent anonymes. Votre nom n'est communiqué à un client que pour une mission précise, et seulement avec votre accord.",
        },
      ],
    },
    apply: {
      eyebrow: "Candidature",
      title: "Frappez à la porte.",
      subtitle:
        "Aucune invitation nécessaire. Cinq minutes. Un praticien de votre plateforme lit chaque candidature et vous répond sous deux semaines, qu'une mission soit ouverte ou non.",
      success: "Candidature reçue. Un praticien de votre plateforme vous répond sous deux semaines.",
    },
  },
  cockpit: {
    eyebrow: "La plateforme 56North",
    title: "Mesurez les IA que vous exploitez. Prouvez que vous les contrôlez.",
    body: "Le Cockpit 56North recense les IA en service dans votre entreprise, les suit sur cinq cadrans (fiabilité, coûts, preuves AI Act, utilisation, référentiels) et rassemble les preuves datées qu'exige la réglementation.",
    link: "Découvrir le Cockpit 56North",
    href: "https://56north.io",
  },
  footer: {
    practices: "Expertises",
    clients: "Clients",
    experts: "Experts",
    company: "Société",
    join: "Rejoindre le réseau",
    community: "Comment entrer dans le réseau",
    platform: "Le Cockpit 56North (gouvernance IA)",
    contact: "Contact",
    rights: "Tous droits réservés. Membre de",
    tagline: "gouvernance de l'IA d'entreprise",
    privacy: "Confidentialité",
    legal: "Mentions légales",
    disclaimer:
      "Microsoft, Salesforce, Agentforce, Google Cloud, SAP, ServiceNow, Workday, Sana et tous les noms et logos de produits associés sont des marques de leurs propriétaires respectifs. Ils sont cités uniquement pour identifier les plateformes sur lesquelles interviennent nos experts. Nous sommes un cabinet indépendant, ni affilié à ces sociétés, ni soutenu par elles.",
    independence:
      "Règle d'indépendance : 56North n'audite ni n'évalue un système IA construit ou maintenu par un expert qu'il a placé chez le même client au cours des 24 mois précédents.",
  },
};

export default fr;
