/**
 * 56north.io — contenu français (langue principale du site).
 *
 * RÈGLE : toute affirmation est conforme à docs/faits-publics.md du dépôt
 * cockpit-56north (« on ne promet pas ce qu'on ne montre pas »).
 * - Noms des cadrans : ceux de lib/ui/libelles.ts (CADRANS).
 * - Chiffres : les phrases certifiées par `pnpm faits`, jamais un nombre tapé à la main.
 * - Couches 02 et 03 : des OFFRES, pas encore opérées → jamais au présent comme un existant.
 * Les espaces insécables avant ? ! : ; sont ajoutées automatiquement.
 */
const fr = {
  meta: {
    title: "56North · Gouvernance des IA d'entreprise",
    description:
      "56North mesure les IA en service dans votre entreprise et rassemble les preuves datées qu'exige l'AI Act : registre, note sur cinq cadrans, rapport de vol mensuel. Tiers indépendant, outil souverain.",
    ogTitle: "Vous avez de l'IA partout. Pouvez-vous prouver que vous la contrôlez ?",
    ogLocale: "fr_FR",
  },
  nav: {
    items: [
      { href: "#horloge", label: "L'horloge" },
      { href: "#offre", label: "L'offre" },
      { href: "#cockpit", label: "Le Cockpit" },
      { href: "#souverainete", label: "Souveraineté" },
      { href: "#fabrique", label: "Notre fabrique" },
      { href: "#questions", label: "Questions" },
    ],
    experts: "Experts",
    cta: "Demander un diagnostic",
    openMenu: "Ouvrir le menu",
    skip: "Aller au contenu",
    switchLabel: "English",
    switchShort: "EN",
  },
  hero: {
    eyebrow: "Tiers indépendant · Gouvernance des IA d'entreprise",
    title: "Vous avez de l'IA partout.\nPouvez-vous prouver que vous la contrôlez ?",
    subtitle:
      "56North mesure les IA en service dans votre entreprise, organise leur mise à l'épreuve par des experts qualifiés et rassemble les preuves datées que la réglementation exige.",
    primary: "Demander un diagnostic",
    secondary: "Voir l'offre",
    board: {
      label: "Note de navigabilité",
      score: "66",
      outOf: "sur 100",
      letter: "C",
      letterLabel: "lettre",
      trend: "+ 4 points sur 30 jours",
      dials: [
        { name: "Fiabilité", value: 71 },
        { name: "Coûts", value: 58 },
        { name: "Preuves AI Act", value: 62 },
        { name: "Utilisation", value: 74 },
        { name: "Référentiels", value: 65 },
      ],
      caption: "Calculée sur 4 de vos 6 IA. Le périmètre accompagne toujours la note. Données de démonstration.",
    },
  },
  clock: {
    eyebrow: "L'horloge réglementaire",
    title: "Le calendrier ne se négocie pas.",
    intro:
      "Le règlement européen sur l'IA s'applique par paliers. Les échéances passées sont déjà exigibles ; celles à venir se préparent maintenant, car un contrôleur demandera des preuves datées.",
    statuses: { due: "Exigible", prepare: "À préparer maintenant", upcoming: "À venir" },
    milestones: [
      { date: "2 février 2025", label: "Pratiques interdites", status: "due" },
      { date: "2 août 2025", label: "Modèles d'IA à usage général", status: "due" },
      { date: "2 août 2026", label: "Transparence : dire aux personnes qu'elles s'adressent à une IA. Sanctions actives.", status: "due" },
      { date: "2 décembre 2027", label: "Haut risque : recrutement, crédit, éducation, biométrie", status: "prepare" },
      { date: "2 août 2028", label: "IA intégrée aux produits déjà réglementés", status: "upcoming" },
    ],
    sanctions: "Sanctions jusqu'à 35 M€ ou 7 % du chiffre d'affaires mondial.",
  },
  problem: {
    eyebrow: "Le problème",
    title: "Six questions, et personne pour y répondre.",
    intro: "Celles qu'une direction générale se pose dès que l'IA entre dans les opérations.",
    items: [
      { q: "Quelles IA avons-nous ?", a: "Y compris celles que personne n'a déclarées : comptes individuels, fonctions activées par une mise à jour de logiciel." },
      { q: "Qui en répond ?", a: "Une personne physique, nommée. C'est la première chose qu'un contrôleur demande, et rarement ce qu'il trouve." },
      { q: "Que font-elles ?", a: "Sur quels dossiers, à quel rythme, pour combien de personnes. Et qui s'en sert réellement." },
      { q: "Quel risque créent-elles ?", a: "La classe de risque dépend de l'usage : trier des candidatures ou résumer une réunion n'engage pas les mêmes obligations." },
      { q: "Se comportent-elles comme prévu ?", a: "Personne ne relit les réponses de l'IA. Les écarts se découvrent trop tard." },
      { q: "Pouvons-nous le prouver ?", a: "Au contrôle, l'intention ne suffit pas : il faut des preuves datées, avec le nom de leur auteur." },
    ],
  },
  offer: {
    eyebrow: "L'offre",
    title: "Contrôler, prouver, opérer.",
    intro:
      "Un logiciel seul ne prouve rien. Il faut aussi des humains qui testent, et une équipe qui tient la barre. Les trois composantes s'achètent séparément et fonctionnent ensemble.",
    layers: [
      {
        n: "01",
        kind: "Le logiciel",
        name: "Le Cockpit",
        status: "Disponible",
        body: "Le registre de vos IA, leur classe de risque historisée, l'échéancier réglementaire, la note sur cinq cadrans et le rapport de vol mensuel. Une seule plateforme, quels que soient vos éditeurs.",
      },
      {
        n: "02",
        kind: "Les humains",
        name: "L'assurance humaine",
        status: "Activée sur engagement",
        body: "Sur engagement, des auditrices formées testent vos IA en boîte noire : biais, hallucinations, fuites de données. Chaque cas est jugé par deux auditrices indépendantes, et leurs résultats entrent au Cockpit comme preuves datées, avec leur auteur.",
      },
      {
        n: "03",
        kind: "La veille continue",
        name: "Le centre de gouvernance",
        status: "Mis en place sur abonnement",
        body: "Avec l'abonnement, une équipe d'ingénierie IA et cybersécurité est mise en place pour raccorder vos IA, les surveiller, alerter et produire le rapport. L'équivalent d'un centre de surveillance cybersécurité, pour la gouvernance de l'IA.",
      },
    ],
    plansTitle: "Trois façons de commencer",
    plans: [
      { name: "Un diagnostic à prix fixe", tag: "Pour commencer", body: "La carte de vos IA, leur classement, et ce qui manquerait devant un contrôleur." },
      { name: "Des sprints par domaine", tag: "Un domaine à la fois", body: "Ressources humaines, relation client, finance : un domaine après l'autre. La note reste calculée par la machine, jamais promise." },
      { name: "Un abonnement de gouvernance", tag: "En continu", body: "Mesure continue, campagnes de tests, rapport de vol mensuel." },
    ],
  },
  cockpit: {
    eyebrow: "Le Cockpit",
    title: "Cinq cadrans, une lettre, un rapport de vol.",
    intro:
      "Une méthodologie publiée, versionnée, identique pour tous les clients. Chaque note porte la version de la méthode qui l'a produite et le périmètre qu'elle couvre.",
    dials: [
      { name: "Fiabilité", body: "La qualité des réponses, évaluée sur vos échanges réels." },
      { name: "Coûts", body: "Le coût par dossier traité, et sa tendance." },
      { name: "Preuves AI Act", body: "Le registre, les preuves, les échéances applicables." },
      { name: "Utilisation", body: "Qui utilise réellement chaque IA." },
      { name: "Référentiels", body: "La fraîcheur du savoir dont vos IA se nourrissent." },
    ],
    scale: "Une note de 0 à 100, une lettre de A à E, une tendance sur 30 jours.",
    stepsTitle: "En route en trois temps",
    steps: [
      { name: "Déclarer", body: "Quelques questions par IA, et le registre se remplit." },
      { name: "Brancher", body: "Une adresse et une clé à changer dans le logiciel." },
      { name: "Mesurer", body: "Les cadrans s'allument dès les premiers appels." },
    ],
    report:
      "Chaque mois, le rapport de vol est figé à sa publication et scellé par une empreinte qui garantit qu'il n'a pas été modifié depuis.",
  },
  sovereignty: {
    eyebrow: "Souveraineté",
    title: "Un outil souverain, pas seulement un hébergement souverain.",
    intro: "Confier la surveillance de vos IA à un outil qui dépend d'un géant étranger n'aurait aucun sens.",
    items: [
      { name: "Hébergement", body: "Chez Scaleway, opérateur français, en région UE." },
      { name: "Logiciel", body: "Bâti sur des briques open source auditables, sans dépendance propriétaire." },
      { name: "Modèle d'évaluation", body: "Mistral, modèle européen hébergé dans l'Union." },
      { name: "Données", body: "Une instance et une base par client, jamais mutualisées. Identités pseudonymisées dès l'arrivée, de façon irréversible." },
    ],
    modesTitle: "Deux modes de déploiement",
    modes: [
      { name: "SaaS", detail: "Hébergé par 56North", body: "Une instance dédiée. Mise en route rapide, mises à jour incluses." },
      { name: "On-premise", detail: "Installé chez vous", body: "Pour les secteurs régulés. Installation conduite par notre équipe." },
    ],
    same: "Même méthode de notation dans les deux cas.",
  },
  factory: {
    eyebrow: "Notre fabrique",
    title: "Nous nous appliquons ce que nous mesurons chez vous.",
    intro: "Un tiers de confiance se juge aussi à la façon dont il construit son propre outil.",
    figures: [
      { value: "55 000+", label: "lignes de code en service, hors tests" },
      { value: "2 500+", label: "tests automatisés au vert à chaque livraison" },
      { value: "240+", label: "décisions datées et motivées, jamais effacées" },
      { value: "4 sept. 2026", label: "audit technique en lecture seule" },
    ],
    principles: [
      { name: "La méthode d'abord", body: "Rédigée, publiée, puis gelée pendant les pilotes. Aucun barème n'est ajusté pour arranger un client." },
      { name: "Traçabilité", body: "Un registre numéroté : la date, la décision, la raison. Nous exigeons de nous ce que nous exigeons de vos IA." },
      { name: "Sécurité durable", body: "Chaque correctif s'accompagne d'un test de garde qui interdit sa réapparition." },
      { name: "Mesure transparente", body: "Ce qui peut être mesuré l'est automatiquement ; ce qui repose sur une déclaration est signalé comme tel." },
      { name: "Pas de promesse creuse", body: "Une fonctionnalité n'apparaît sur ce site qu'une fois livrée." },
      { name: "Données isolées", body: "Une instance par client, une sauvegarde quotidienne et une copie hebdomadaire." },
    ],
  },
  commitments: {
    eyebrow: "Ce qui nous engage",
    title: "Indépendant par principe.\nSouverain par construction.",
    items: [
      { name: "Celui qui mesure ne vend rien d'autre", body: "Ni modèles, ni intégration, ni cloud. Qui construit vos IA ne peut pas les noter." },
      { name: "Vos données restent chez un opérateur français", body: "Hébergement Scaleway, briques open source, modèle d'évaluation européen. Deux sous-traitants techniques, pas un de plus." },
      { name: "Une méthode publiée, jamais retouchée", body: "Écrite, versionnée, identique pour tous. Des partenaires peuvent la vendre ; le calcul, le scellement et les seuils restent chez nous." },
      { name: "Des preuves, jamais un certificat", body: "Nous préparons votre dossier pour qu'il soit prêt le jour où on vous le demandera. Nous ne l'appelons jamais certification." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Ce qu'on nous demande.",
    items: [
      {
        q: "Est-ce une certification AI Act ?",
        a: "Non. Nous préparons un dossier de preuves prêt pour un contrôle. Le périmètre couvre les obligations de l'entreprise qui déploie des IA, notamment les articles 26 et 50 du règlement européen.",
      },
      {
        q: "Peut-on n'acheter qu'une brique ?",
        a: "Oui : le Cockpit seul, des campagnes de tests seules, ou la supervision opérée. L'ensemble fonctionne mieux, mais rien n'oblige à tout prendre.",
      },
      {
        q: "Peut-on installer le Cockpit chez nous ?",
        a: "Oui. En mode SaaS, sur une instance dédiée, ou en on-premise, dans votre infrastructure. La méthode et la note sont strictement identiques.",
      },
      {
        q: "Et les IA incluses dans notre progiciel, qu'on ne peut pas brancher ?",
        a: "Elles entrent au registre, sont classées et reçoivent leurs preuves. Le règlement demande de les gouverner, pas forcément de les mesurer. La note indique toujours le périmètre qu'elle couvre.",
      },
      {
        q: "Qui voit nos données pendant les tests ?",
        a: "La détection de biais se fait sur des scénarios fabriqués, sans aucune de vos données. La relecture d'échanges réels est réservée à des auditrices résidant dans l'Union, et précisée au bon de commande.",
      },
      {
        q: "Nous ne sommes pas dans l'Union européenne. Sommes-nous concernés ?",
        a: "Probablement, si vous avez des filiales, des clients ou des candidats dans l'Union. Et au-delà du règlement, la question demeure : vos IA font-elles ce que vous croyez ?",
      },
    ],
  },
  contact: {
    eyebrow: "Premier échange",
    title: "Trente minutes suffisent pour savoir si c'est fait pour vous.",
    intro:
      "Nous passons en revue les IA que vous connaissez, repérons les angles morts et repartons avec une première carte : vos IA connues et les écarts probables. Si le moment n'est pas le bon, nous vous le dirons.",
    steps: {
      name: "Comment vous appelez-vous ?",
      job: "Quelle est votre fonction ?",
      company: "Dans quelle entreprise ?",
      email: "Votre e-mail professionnel ?",
      count: "Combien d'IA utilisez-vous, à peu près ?",
      countHint: "Une estimation suffit. Comptez aussi les fonctions IA de vos logiciels.",
    },
    counts: ["Moins de 5", "5 à 20", "20 à 50", "Plus de 50", "Je ne sais pas"],
    labels: { name: "Nom", job: "Fonction", company: "Entreprise", email: "E-mail professionnel" },
    submit: "Demander un diagnostic",
    reassurance: "Réponse sous deux jours ouvrés. Vos coordonnées servent à organiser cet échange, et à rien d'autre.",
    privacy: "Voir notre politique de confidentialité",
    ui: {
      back: "Retour",
      next: "Continuer",
      skip: "Passer ou continuer",
      sending: "Envoi…",
      required: "Champ obligatoire",
      invalidEmail: "Saisissez un e-mail valide",
      thanks: "Merci.",
    },
    server: {
      useWorkEmail: "Merci d'utiliser votre e-mail professionnel",
      checkFields: "Merci de vérifier les champs signalés.",
      error: "Un problème est survenu de notre côté. Écrivez-nous à {email}, nous vous répondrons directement.",
      success: "Demande reçue. Nous vous répondons sous deux jours ouvrés pour fixer l'échange.",
    },
  },
  footer: {
    tagline: "Gouvernance des IA d'entreprise · Hébergé chez un opérateur français · Méthodologie de notation versionnée",
    experts: "56North Experts, le réseau d'experts IA",
    notice: "Mentions légales",
    privacy: "Politique de confidentialité",
  },
  legal: {
    updatedLabel: "Dernière mise à jour :",
    noticeTitle: "Mentions légales",
    noticeDescription: "Éditeur, hébergeur et informations légales du site 56north.io.",
    privacyTitle: "Politique de confidentialité",
    privacyDescription: "Comment 56north.io collecte et traite vos données personnelles.",
  },
  notFound: { title: "Cette page n'existe pas.", home: "Retour à l'accueil" },
};

export default fr;
export type MainDictionary = typeof fr;
