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
    title: "56North · Tiers indépendant de gouvernance IA et preuves AI Act",
    description:
      "56North est le tiers indépendant qui recense, mesure et prouve les IA d'une entreprise, tous éditeurs confondus : registre, note sur cinq cadrans, preuves datées et scellées pour les obligations de déployeur de l'AI Act. Outil souverain, hébergé en France.",
    ogTitle: "Vos éditeurs prouvent que leur IA est conforme. Qui prouve que la vôtre l'est ?",
    ogLocale: "fr_FR",
  },
  nav: {
    items: [
      { href: "#offre", label: "L'offre" },
      { href: "/gouvernance-ia", label: "Pourquoi un tiers" },
      { href: "/cockpit", label: "Le Cockpit" },
      { href: "/human-in-the-loop", label: "Human in the Loop" },
      { href: "#souverainete", label: "Souveraineté" },
    ],
    articles: "Articles",
    experts: "Experts",
    cta: "Demander un diagnostic",
    openMenu: "Ouvrir le menu",
    skip: "Aller au contenu",
    switchLabel: "English",
    switchShort: "EN",
  },
  hero: {
    /** Baseline de marque, retenue le 10/10/2026. */
    baseline: "Vos IA sous contrôle.",
    eyebrow: "Vos IA sous contrôle.",
    title: "Vos éditeurs prouvent que leur IA est conforme.\nQui prouve que la vôtre l'est ?",
    subtitle:
      "Le tiers indépendant qui recense toutes vos IA, mesure leur fiabilité, leurs coûts et leur usage, et rassemble les preuves AI Act, datées et scellées, qu'un contrôleur accepte.",
    primary: "Demander un diagnostic",
    secondary: "Pourquoi un tiers",
    reassurance: "Premier échange de 30 minutes offert, sans engagement.",
    /** Pastille « alerte actu » au-dessus du titre : le dernier article publié, lien vers la liste. */
    alert: { label: "Alerte actu", all: "Voir tous les articles" },
    board: {
      label: "Note de navigabilité",
      score: "66",
      outOf: "sur 100",
      trend: "+ 4 points sur 30 jours",
      dials: [
        { name: "Fiabilité", value: 71 },
        { name: "Coûts", value: 58 },
        { name: "Preuves AI Act", value: 62 },
        { name: "Utilisation", value: 74 },
        { name: "Référentiels", value: 65 },
      ],
      caption: "Calculée sur 4 de vos 6 IA, de trois éditeurs différents. Le périmètre accompagne toujours la note. Données de démonstration.",
    },
  },
  definition: {
    label: "En une phrase",
    text: "56North est le système de référence des IA d'une entreprise : un tiers qui recense, mesure et prouve le comportement de toutes ses intelligences artificielles, quels que soient leurs éditeurs, et qui ne vend ni modèle, ni intégration, ni cloud.",
  },
  whyThirdParty: {
    eyebrow: "Pourquoi un tiers",
    title: "Pourquoi les outils natifs ne suffisent pas.",
    intro:
      "Chaque grand éditeur livre désormais sa propre tour de contrôle : un écran qui liste ses agents, journalise leurs actions et affiche des indicateurs de conformité. Ces outils sont utiles. Ils ne répondent pas à la question qu'un contrôleur vous posera.",
    items: [
      {
        name: "La conformité de l'éditeur n'est pas la vôtre",
        body: "Le règlement européen distingue le fournisseur, qui conçoit l'IA, et le déployeur, qui l'utilise dans ses opérations. L'éditeur répond de son produit. Vous répondez de l'usage que vous en faites : la surveillance humaine, les données d'entrée, l'information des personnes concernées, la conservation des journaux (article 26), et, pour certains usages, l'information des personnes prévue à l'article 50 (reconnaissance des émotions, contenus générés ou manipulés). Aucun outil d'éditeur ne porte ces obligations à votre place.",
      },
      {
        name: "Chaque tour de contrôle ne voit que son écosystème",
        body: "Une entreprise de taille intermédiaire utilise aujourd'hui l'IA de son CRM, celle de sa suite bureautique, celle de son ERP et celle de son outil de tickets. Quatre éditeurs, quatre tours de contrôle, quatre définitions de la conformité. Aucune ne voit les trois autres. Le registre de vos IA doit être unique ; la note que lit votre comité d'audit aussi.",
      },
      {
        name: "Celui qui vend l'IA ne peut pas la noter",
        body: "Un éditeur qui évalue ses propres agents est juge et partie. Ce n'est pas une accusation, c'est une position : son outil de gouvernance existe pour vous rassurer sur son produit. Un contrôleur, un assureur ou un client grand compte demandera qui, en dehors de l'éditeur, a vérifié.",
      },
      {
        name: "Une preuve se juge à sa tenue dans le temps",
        body: "Un tableau de bord montre l'état d'aujourd'hui. Une preuve montre ce qui était vrai à une date donnée, qui l'a constaté, et garantit que personne ne l'a retouchée depuis. Les outils natifs sont faits pour le premier usage. 56North est construit pour le second.",
      },
    ],
    closing:
      "Les outils natifs restent nécessaires : ils gouvernent chaque IA de l'intérieur. 56North se place au-dessus, du côté de l'entreprise, et consolide ce qu'ils produisent en un seul registre, une seule note, un seul dossier de preuves.",
    link: "Voir ce que contient le dossier de preuves",
  },
  mirror: {
    painsTitle: "Ça vous parle ?",
    pains: [
      "De nouvelles IA apparaissent à chaque mise à jour de vos logiciels, sans que personne ne les ait déclarées.",
      "Chaque éditeur vous montre son propre tableau de bord ; aucun ne vous montre l'ensemble.",
      "Votre comité d'audit demande qui répond de l'IA, et personne ne lève la main.",
      "Les preuves existent peut-être, éparpillées dans des e-mails et des dossiers partagés.",
    ],
    afterTitle: "Ce qui change avec 56North",
    after: [
      "La liste complète de vos IA, chacune avec un responsable nommé.",
      "Une note par système et une note d'entreprise, lisibles en deux minutes par votre comité de direction.",
      "Un dossier de contrôle scellé, prêt le jour où un auditeur le demande.",
      "Le coût de vos IA, suivi mois après mois.",
      "Chaque changement de modèle repéré, daté et scellé.",
    ],
  },
  founder: {
    eyebrow: "Qui est derrière",
    title: "Fondé par un dirigeant qui a fait grandir une équipe de plus de 1\u00a0000 consultants.",
    body: "56North est fondé par Pascal Mennesson, fondateur de Maltem Consulting Group, développé à partir de 2001 jusqu'à plus de 1\u00a0000 consultants dans 12 pays avant sa cession. Il part d'un constat simple : les entreprises adoptent l'IA plus vite qu'elles ne savent la gouverner.",
  },
  guides: {
    title: "Pour aller plus loin",
    items: [
      { title: "AI Act : ce que doivent faire les entreprises qui utilisent Copilot, Agentforce ou Joule", href: "https://experts.56north.io/fr/insights/ai-act-obligations-deployeurs-copilot-agentforce" },
      { title: "Maintenir un agent IA en production : ce qui se dégrade, et comment garder le contrôle", href: "https://experts.56north.io/fr/insights/maintenir-agent-ia-en-production" },
      { title: "Mettre un agent Agentforce en production : la check-list en 12 points", href: "https://experts.56north.io/fr/insights/mise-en-production-agent-agentforce-checklist" },
    ],
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
    sanctions: "Sanctions jusqu'à 15 M€ ou 3 % du chiffre d'affaires mondial pour les obligations du déployeur, 35 M€ ou 7 % pour les pratiques interdites.",
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
      { q: "Respectent-elles vos règles, et la loi ?", a: "Deux écarts différents : l'IA qui fait ce que vous lui interdisez, et celle qui vous met hors la loi. Les deux se découvrent souvent trop tard." },
      { q: "Pouvons-nous le prouver ?", a: "Au contrôle, l'intention ne suffit pas : il faut des preuves datées, avec le nom de leur auteur." },
    ],
  },
  stakes: {
    eyebrow: "Ce qui est en jeu",
    title: "Un écart non prouvé est un passif caché.",
    intro: "Ce n'est pas qu'un sujet de conformité. C'est un sujet de conseil d'administration.",
    items: [
      { name: "Erreurs et litiges", body: "Deloitte a remboursé à l'État australien une partie du prix d'un rapport. Air Canada a été condamnée à indemniser un client trompé par son agent. Et un écart rendu public fait douter vos clients." },
      { name: "Dépenses qui dérivent", body: "Des abonnements et des appels d'IA que personne n'additionne : le coût réel apparaît à la clôture, trop tard pour arbitrer." },
      { name: "Valorisation", body: "À chaque levée ou cession, l'acheteur décote ce qu'il ne peut pas vérifier : prix revu, garantie de passif." },
      { name: "Amendes", body: "Jusqu'à 3 % du chiffre d'affaires mondial pour les obligations du déployeur (AI Act), 4 % (RGPD), 7 % pour une pratique interdite." },
    ],
    closing: "Prouver que vos IA sont sous contrôle, c'est protéger la valeur de l'entreprise.",
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
        body: "Le registre de vos IA, leur classe de risque historisée, l'échéancier réglementaire, le coffre à preuves, la note sur cinq cadrans, la détection des changements de modèle et le rapport de vol mensuel. Une seule plateforme, quels que soient vos éditeurs.",
      },
      {
        n: "02",
        kind: "Prouver, avec nos partenaires",
        name: "Human in the Loop",
        status: "Activée sur engagement",
        body: "Des humains formés mettent vos IA à l'épreuve et relisent leurs réponses : biais, hallucinations, fuites de données, procédures non respectées. Leurs résultats entrent au Cockpit comme preuves datées, avec leur auteur.",
      },
      {
        n: "03",
        kind: "Opérer, avec nos partenaires",
        name: "Factory",
        status: "Mise en place sur abonnement",
        body: "Une équipe d'ingénierie IA qui raccorde vos systèmes en place au Cockpit, les maintient en production, les surveille et produit le rapport. L'équivalent d'un centre de surveillance cybersécurité, pour la gouvernance de l'IA.",
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
    title: "Bien plus que la loi :\ncinq cadrans, cinq risques.",
    intro:
      "La conformité n'est qu'un cadran sur cinq. Les quatre autres disent si vos IA marchent, combien elles coûtent, si elles servent et sur quoi elles reposent. Une méthode publiée, identique pour tous les clients.",
    shot: {
      src: "/cockpit/pilotage-demo.webp",
      alt: "L'écran de pilotage du Cockpit : la note de navigabilité sur 100 et les cinq cadrans, sur le jeu de démonstration",
      caption: "Écran réel du Cockpit, sur son jeu de démonstration (données fabriquées).",
    },
    riskLabel: "Si personne ne regarde",
    dials: [
      { name: "Fiabilité", body: "La qualité des réponses, évaluée sur vos échanges réels.", risk: "Des réponses fausses données à vos clients ou à vos équipes, sans que personne ne le voie." },
      { name: "Coûts", body: "Le coût par dossier traité, et sa tendance.", risk: "Une facture qui dérive mois après mois, découverte à la clôture." },
      { name: "Utilisation", body: "Qui utilise réellement chaque IA.", risk: "Des licences payées pour rien, et des usages que personne n'a autorisés." },
      { name: "Référentiels", body: "La fraîcheur du savoir dont vos IA se nourrissent.", risk: "Une IA qui répond avec des tarifs, des procédures ou des règles périmés." },
      { name: "Preuves AI Act", body: "Le registre, les preuves, les échéances applicables.", risk: "Une amende, et une décision qu'on ne peut pas défendre." },
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
  hitl: {
    eyebrow: "Human in the Loop",
    title: "Des humains qui testent vos IA.\nPas l'éditeur qui les vend.",
    intro:
      "Un éditeur ne peut pas être juge et partie de ses propres biais. Avec notre partenaire Isahit, société française spécialisée dans l'annotation de données, des personnes formées mettent vos IA à l'épreuve et relisent leurs réponses, et chaque résultat devient une preuve datée dans le Cockpit.",
    status: "Activée sur engagement, avec notre partenaire Isahit",
    partner: {
      label: "Partenaire :",
      name: "Isahit",
      url: "https://www.isahit.com/",
      tagline: "Première entreprise européenne d'IA éthique certifiée B Corp : plus de 1 000 annotateurs, plus de 7 500 projets, des références comme Airbus, Orange et L'Oréal.",
    },
    itemsTitle: "Ce que l'offre couvre",
    items: [
      { name: "Campagnes de tests en boîte noire", body: "Biais, hallucinations, fuites de données, procédures non respectées : des scénarios écrits pour vos cas d'usage, joués sur vos IA telles qu'elles tournent." },
      { name: "Double regard, à l'aveugle", body: "Chaque cas est jugé par deux personnes indépendantes, sans voir d'abord la réponse de l'IA. En cas de désaccord, un troisième avis tranche." },
      { name: "Relecture de conversations réelles", body: "Des échantillons relus par des personnes résidant dans l'Union européenne, en équipes constituées pour chaque client selon nos exigences, dans le cadre précisé au bon de commande." },
      { name: "Jeux de tests pour vos agents", body: "Constitution et annotation des scénarios qui serviront ensuite à vos tests de non-régression." },
    ],
    proof: "Chaque résultat entre au Cockpit comme preuve datée, avec son auteur : c'est ce qu'un contrôleur accepte, et ce qu'aucun outil d'éditeur ne peut produire sur ses propres IA.",
    cta: "Parler d'une campagne de tests",
  },
  factoryOffer: {
    eyebrow: "Factory",
    title: "Connecter, maintenir, faire tourner\nles IA que vous avez déjà.",
    intro:
      "La plupart des IA d'une entreprise sont déjà en place, chez plusieurs éditeurs. Avec notre partenaire Wikolabs, la Factory les raccorde au Cockpit, les garde fiables en production et vous évite de monter une équipe dédiée.",
    status: "Mise en place sur abonnement, avec notre partenaire Wikolabs",
    partner: {
      label: "Partenaire :",
      name: "Wikolabs",
      tagline: "Des agents sur modèles ouverts, installés chez vous, raccordés à vos ERP, CRM et bases de données. Une méthode en six étapes, avec une démonstration à chaque sprint et votre validation à chaque livrable.",
    },
    itemsTitle: "Ce que la Factory prend en charge",
    items: [
      { name: "Raccorder", body: "Brancher vos IA au Cockpit : passerelle, journaux, puis connecteurs éditeurs à mesure qu'ils arrivent. Vous passez du niveau « déclaré » au niveau « connecté »." },
      { name: "Maintenir", body: "Tests rejoués après chaque version d'éditeur, sources de connaissance tenues à jour, droits d'accès revus, coûts suivis." },
      { name: "Surveiller et alerter", body: "Les dérives sont repérées et signalées avant qu'un client, un salarié ou un contrôleur ne les découvre." },
      { name: "Produire le rapport", body: "Le rapport de vol mensuel, préparé par la Factory et publié par un humain." },
    ],
    independence:
      "Neutralité : la Factory fait tourner des systèmes de tous les éditeurs, et tout ce qu'elle maintient est supervisé dans le Cockpit, avec des preuves scellées vérifiables par n'importe quel tiers.",
    cta: "Parler de vos systèmes en place",
  },
  sovereignty: {
    eyebrow: "Souveraineté et sécurité",
    title: "Souverain et sûr, par construction.",
    intro: "Vos IA produisent des journaux. Le Cockpit les lit dans votre instance dédiée et en tire des preuves scellées. Confier cette surveillance à un outil qui dépend d'un géant étranger n'aurait aucun sens.",
    items: [
      { name: "Hébergement", body: "Chez Scaleway, opérateur français, dans son centre de données de Paris." },
      { name: "Logiciel", body: "Bâti sur des briques open source auditables, sans dépendance propriétaire." },
      { name: "Modèle d'évaluation", body: "Mistral, modèle européen hébergé dans l'Union." },
      { name: "Données", body: "Une instance et une base par client, jamais mutualisées. Identités pseudonymisées dès l'arrivée, de façon irréversible." },
      { name: "Preuves", body: "Rapports et preuves scellés par empreinte : toute retouche se voit. Durées de conservation fixées, sauvegarde quotidienne." },
      { name: "Interrupteur", body: "Si vos appels passent par notre passerelle, sa clé maîtresse reste chez vous. 56North ne peut rien couper." },
    ],
    modesTitle: "Deux modes de déploiement",
    modes: [
      { name: "SaaS", detail: "Hébergé par 56North", body: "Une instance dédiée. Mise en route rapide, mises à jour incluses." },
      { name: "On-premise", detail: "Installé chez vous", body: "Pour les secteurs régulés. Installation conduite par notre équipe." },
    ],
    same: "Même méthode de notation dans les deux cas.",
  },
  factory: {
    eyebrow: "Comment nous construisons",
    title: "Nous nous appliquons ce que nous mesurons chez vous.",
    intro: "Un tiers de confiance se juge aussi à la façon dont il construit son propre outil.",
    figures: [
      { value: "75 000+", label: "lignes de code en service, hors tests" },
      { value: "3 500+", label: "tests automatisés au vert à chaque livraison" },
      { value: "420+", label: "décisions datées et motivées, jamais effacées" },
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
      { name: "Vos données restent chez un opérateur français", body: "Hébergement Scaleway à Paris, briques open source, modèle d'évaluation européen. Deux sous-traitants techniques, pas un de plus." },
      { name: "Une méthode publiée, jamais retouchée", body: "Écrite, versionnée, identique pour tous. Des partenaires peuvent la vendre ; le calcul, le scellement et les seuils restent chez nous." },
      { name: "Des preuves, jamais un certificat", body: "Nous préparons votre dossier pour qu'il soit prêt le jour où on vous le demandera. Nous ne l'appelons jamais certification." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Ce qu'on nous demande.",
    items: [
      {
        q: "Le premier échange est-il payant ?",
        a: "Non. Le premier échange de 30 minutes est offert et sans engagement. Vous repartez avec une première carte de vos IA connues et des écarts probables, et nous vous disons franchement si un accompagnement se justifie.",
      },
      {
        q: "Qu'est-ce qu'un registre des IA ?",
        a: "La liste de tous les systèmes d'IA qu'utilise une entreprise, avec pour chacun son usage, son responsable, sa classe de risque au sens de l'AI Act et les preuves associées. C'est le point de départ de toute gouvernance de l'IA.",
      },
      {
        q: "Quelle différence avec les outils de conformité des éditeurs ?",
        a: "Chaque éditeur prouve la conformité de son propre outil. 56North se place du côté de l'entreprise qui déploie les IA, et consolide l'ensemble de son parc, quel que soit le fournisseur.",
      },
      {
        q: "Est-ce une certification AI Act ?",
        a: "Non. Nous préparons un dossier de preuves prêt pour un contrôle. Le périmètre couvre les obligations de l'entreprise qui déploie des IA, notamment les articles 4, 26, 27 et 50 du règlement européen.",
      },
      {
        q: "Peut-on n'acheter qu'une brique ?",
        a: "Oui : le Cockpit seul, des campagnes Human in the Loop seules, ou la Factory pour faire tourner vos systèmes. L'ensemble fonctionne mieux, mais rien n'oblige à tout prendre.",
      },
      {
        q: "Le Cockpit peut-il couper nos services ?",
        a: "Non. Si vos appels passent par notre passerelle, sa clé maîtresse reste chez vous : vous seul gardez l'interrupteur.",
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
    eyebrow: "Premier échange offert",
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
    reassurance: "Premier échange de 30 minutes offert. Réponse sous deux jours ouvrés. Vos coordonnées servent à organiser cet échange, et à rien d'autre.",
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
  articles: {
    metaTitle: "Articles : incidents d'IA, AI Act et gouvernance, lus pour les DSI",
    metaDescription:
      "Les incidents d'IA et les décisions réglementaires qui comptent pour un DSI ou un responsable conformité : ce qui est établi, le danger, le conseil, ce qu'il faut vérifier.",
    eyebrow: "Articles",
    title: "L'actualité de l'IA d'entreprise,\nlue pour ceux qui en répondent.",
    intro:
      "Chaque incident public et chaque décision réglementaire, ramenés à trois questions : qu'est-ce qui est établi, où est le danger, que vérifier cette semaine ?",
    empty: "Les premiers articles arrivent.",
    home: "Accueil",
    read: "Lire l'article",
    dial: "Cadran",
    by: "Par",
    role: "Fondateur, 56North",
    minutes: "min de lecture",
    published: "Publié le",
    updated: "Mis à jour le",
    takeaways: "L'essentiel",
    toc: "Sommaire",
    draft: "Brouillon à relire. Cette page n'est ni listée ni indexée par les moteurs de recherche.",
    back: "Tous les articles",
    faqTitle: "Questions et réponses",
    sourcesTitle: "Sources",
    sourcesNote: "Chaque source a été ouverte et datée avant publication.",
    moreTitle: "À lire aussi",
    expertsTitle: "Guides pratiques par plateforme",
    expertsBody: "Copilot, Agentforce, Joule, Now Assist : les guides de mise en production et de maintenance sont sur 56North Experts.",
    expertsLink: "Voir les guides",
    expertsHref: "https://experts.56north.io/fr/insights",
    ctaTitle: "Savez-vous quelles IA tournent chez vous, et qui en répond ?",
    ctaBody: "Premier échange de 30 minutes offert, sans engagement.",
    rss: "Flux RSS",
  },
  footer: {
    articles: "Articles",
    tagline: "Vos IA sous contrôle · Gouvernance des IA d'entreprise · Hébergé chez un opérateur français · Méthodologie de notation versionnée",
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
