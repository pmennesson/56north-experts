import type { Article } from "./types";

/*
 * Papier fondateur de 56North, signé Pascal Mennesson. Texte validé par Pascal (version du 18 octobre 2026),
 * repris ici avec trois corrections :
 * - Noms des cinq cadrans alignés sur lib/ui/libelles.ts (CADRANS) du dépôt cockpit-56north et sur
 *   docs/faits-publics.md : Fiabilité, Coûts, Preuves AI Act, Utilisation, Référentiels (EN : Reliability, Costs,
 *   AI Act evidence, Usage, Reference sources). Les anciens noms (Gouvernance, Adoption, Connaissance) sont retirés.
 * - Partenaires de mise à l'épreuve humaine et d'exploitation : en cours de constitution (couches 02/03 = offre,
 *   non encore opérée, faits-publics §3). Le texte ne dit plus que l'équipe est « déjà constituée ».
 * - Gartner, abandon de 30 % des projets d'IA générative : communiqué daté du 29 juillet 2024 (Sydney), et non du 30.
 *
 * Sources ouvertes le 18 octobre 2026 :
 * - TechCrunch, 29 avril 2025 : Satya Nadella, LlamaCon, « 20 % à 30 % » du code des dépôts Microsoft écrit par l'IA.
 * - McKinsey, « The state of AI in 2026: On the road to ROI » : enquête du 4 mai au 8 juin 2026, 1 719 répondants,
 *   97 pays ; « nearly nine in ten » utilisent l'IA dans au moins une fonction ; 37 % attribuent un effet sur l'EBIT.
 * - Gartner, 29 juillet 2024 et 25 juin 2025 (communiqués primaires).
 * - MIT NANDA, « The GenAI Divide: State of AI in Business 2025 » : plus de 300 initiatives analysées ; la formule
 *   « environ 5 % des pilotes génèrent une accélération rapide de valeur » est celle de Fortune (18 août 2025).
 *   Le rapport lui-même n'est pas publié sur un site du MIT : on cite Fortune, qui l'a révélé.
 * - Microsoft et LinkedIn, Work Trend Index 2024 (8 mai 2024) : 75 % des « knowledge workers », 78 % avec leurs outils.
 * - Règlement (UE) 2024/1689 : articles 14, 26 et 50.
 */
const article: Article = {
  id: "build-augmente-papier-fondateur",
  status: "published",
  published: "2026-10-22",
  updated: "2026-10-22",
  category: { fr: "Papier fondateur", en: "Founding paper" },
  dial: { fr: "Preuves AI Act", en: "AI Act evidence" },
  sources: [
    { title: "TechCrunch, « Microsoft CEO says up to 30% of the company's code was written by AI » (29 avril 2025)", url: "https://techcrunch.com/2025/04/29/microsoft-ceo-says-up-to-30-of-the-companys-code-was-written-by-ai/" },
    { title: "McKinsey, « The state of AI in 2026: On the road to ROI » (enquête du 4 mai au 8 juin 2026)", url: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/the-state-of-ai-in-2026-on-the-road-to-roi.pdf" },
    { title: "Gartner, « Gartner Predicts 30% of Generative AI Projects Will Be Abandoned After Proof of Concept By End of 2025 » (29 juillet 2024)", url: "https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025" },
    { title: "Gartner, « Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027 » (25 juin 2025)", url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
    { title: "Fortune, « MIT report: 95% of generative AI pilots at companies are failing » (18 août 2025), sur le rapport MIT NANDA « The GenAI Divide »", url: "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" },
    { title: "Microsoft et LinkedIn, « 2024 Work Trend Index » (8 mai 2024)", url: "https://blogs.microsoft.com/blog/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/" },
    { title: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (articles 14, 26 et 50)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
  versions: {
    fr: {
      slug: "build-augmente-papier-fondateur",
      title: "25 ans dans le build, un constat : la valeur passe de la construction au pilotage",
      seoTitle: "25 ans dans le build : la valeur passe au pilotage de l'IA",
      description:
        "L'IA va produire l'essentiel du logiciel des entreprises. Papier fondateur de 56North : pourquoi le DSI devient architecte et pilote, avec cinq cadrans.",
      keyword: "pilotage de l'IA en entreprise",
      niche: [
        "rôle du DSI face à l'IA",
        "fin du modèle ESN régie forfait IA",
        "supervision des agents IA en production",
        "tiers indépendant contrôle IA",
        "cockpit de pilotage IA",
      ],
      takeaways: [
        "L'IA est en train d'absorber la majorité des capacités de build des entreprises. La production de logiciel, qui a justifié quarante ans d'ESN, de forfaits et de régie, devient abondante, donc banale.",
        "Les entreprises n'ont jamais autant construit, et si peu de ces constructions produisent de la valeur : nous avons industrialisé la production, pas l'exploitation.",
        "Le DSI qui réussira la décennie sera l'architecte et le pilote d'un cockpit à cinq cadrans : fiabilité, coûts, preuves AI Act, utilisation, référentiels. Et construire et contrôler doivent rester deux métiers séparés.",
      ],
      body: `
**Votre IA est déployée. Qui la pilote ?**

J'ai passé vingt-cinq ans à vendre du build.

J'ai cofondé et développé un groupe de conseil et de services numériques : plus de 1 000 collaboratrices et collaborateurs, des plateformes livrées sur quatre continents, puis la cession à un groupe confrère. Le modèle qui a porté cette croissance tenait en une équation simple : les entreprises ont besoin de construire plus de logiciel qu'elles ne savent en produire, et cette rareté se facture à la journée.

Cette équation vient de se briser. Et je préfère l'écrire moi-même plutôt que de faire semblant de ne pas le voir : l'IA va absorber la majorité des capacités de build des entreprises. Pas une part marginale, pas les tâches ingrates : la majorité. Qu'on le veuille ou non.

## La bascule est déjà chiffrée

Ce n'est plus une prospective. Satya Nadella déclarait dès avril 2025 que 20 à 30 % du code présent dans les dépôts de Microsoft était désormais écrit par l'IA, et la courbe ne redescendra pas. Les agents de développement autonomes enchaînent aujourd'hui des tâches qui occupaient des équipes entières : spécification, génération, test, refactoring, documentation. Près de neuf organisations sur dix utilisent désormais l'IA dans au moins une fonction.

Chaque DSI le constate dans ses murs : un développeur augmenté produit ce que produisait une petite équipe. Un métier outillé assemble en quelques jours ce qui exigeait un projet. La production de logiciel, ce goulot d'étranglement qui a justifié quarante ans d'ESN, de forfaits et de régie, est en train de devenir abondante.

Or l'économie ne pardonne jamais à l'abondance : ce qui devient abondant cesse d'être cher, et cesse d'être stratégique. Le build suit le chemin du calcul et du stockage avant lui. Il ne disparaît pas. Il se banalise.

## Le paradoxe que personne n'assume

On pourrait croire que cette abondance produit mécaniquement de la valeur. Les chiffres disent l'inverse, avec une brutalité rare.

Gartner prévoyait qu'au moins 30 % des projets d'IA générative seraient abandonnés après le proof-of-concept d'ici fin 2025 ; le même cabinet anticipe l'annulation de plus de 40 % des projets d'IA agentique d'ici fin 2027. Le MIT, sur plus de 300 initiatives analysées, mesure qu'environ 5 % des pilotes seulement génèrent une accélération rapide de valeur. Et McKinsey résume l'ensemble d'une phrase : neuf organisations sur dix utilisent l'IA, 37 % en voient un impact sur leur résultat.

Jamais les entreprises n'ont autant construit. Jamais si peu de constructions n'ont produit de valeur.

Ce paradoxe a une explication que le marché regarde encore peu : nous avons industrialisé la production, pas l'exploitation. Tout, les budgets, les compétences, les partenaires, les indicateurs, reste organisé autour de l'acte de construire, au moment précis où construire cesse d'être le problème. Les plateformes sont là. Personne ne sait les faire voler.

## La ruée, puis le pilotage

Regardez ce qui s'est passé chez vous depuis trois ans. Une fonction d'IA s'est activée dans la suite bureautique à la faveur d'une mise à jour, sans que personne ne l'ait demandée. Un agent a été monté en trois jours par une direction métier. Un assistant s'est glissé dans le CRM, un autre dans l'outil de tickets, un troisième dans l'ERP. Dès 2024, trois cadres et employés de bureau sur quatre utilisaient l'IA au travail, et la plupart avec leurs propres outils. Chacun de ces outils fait quelque chose. Personne n'en répond.

Ce n'est pas une faute, c'est une ruée, et toutes les technologies qui ont compté ont connu la leur. Mais la ruée touche à sa fin, et ce qui vient ensuite est inévitable : des IA sous surveillance humaine, inventoriées, mesurées, dont quelqu'un répond. Ce n'est plus seulement ma conviction, c'est la loi : depuis le 2 août 2026, dire aux gens qu'ils s'adressent à une machine n'est plus une courtoisie, c'est une obligation (article 50 de l'AI Act), et la surveillance humaine des systèmes à risque incombe à l'entreprise qui les déploie, pas seulement à l'éditeur qui les vend (articles 14 et 26).

## Ce que l'aviation a compris avant nous

Quand l'automatisation est entrée dans les cockpits, certains ont prédit la fin des pilotes. Il s'est produit exactement l'inverse : le métier s'est déplacé. Le pilote moderne touche à peine le manche ; il architecture un plan de vol, surveille des instruments, gère des procédures, arbitre des exceptions. Et sa responsabilité n'a jamais été aussi grande, précisément parce que le système est devenu trop complexe pour être piloté « à la main ».

L'aviation a converti l'automatisation en sécurité parce qu'elle a inventé, en même temps que l'autopilote, la discipline de sa supervision : instruments normalisés, check-lists, seuils d'alerte, revue systématique des incidents, culture de la fiabilité mesurée.

C'est très exactement ce qui manque au système d'information augmenté. L'IA nous a donné l'autopilote du build. Personne n'a encore construit le cockpit.

## Le DSI, architecte et pilote

Voici donc ma conviction, celle que vingt-cinq ans du côté des constructeurs m'autorisent à formuler : le DSI qui réussira la décennie ne sera plus un maître d'ouvrage du build. Il sera l'architecte et le pilote d'un cockpit.

Architecte, d'abord : quand la production devient abondante, ce qui devient rare, c'est le dessin d'ensemble. Décider ce qui doit exister, ce qui doit s'interfacer, ce qui doit rester humain. L'architecture cesse d'être une phase de projet pour devenir la fonction permanente qui empêche l'abondance de produire du chaos, car un système où chacun peut construire est un système qui dérive par défaut.

Pilote, ensuite. Un cockpit digne de ce nom affiche en continu cinq cadrans, et je connais peu de comités de direction qui sachent les lire aujourd'hui :

1. **Fiabilité.** Quels pipelines, quels agents, quels rapports sont dignes de confiance, mesuré en continu, pas constaté après incident par les utilisateurs.
2. **Coûts.** La consommation réelle des capacités et des modèles, pilotée comme le carburant, pas découverte sur la facture.
3. **Preuves AI Act.** Le registre des systèmes, leur classe de risque, les obligations applicables, les responsables nommés et les preuves datées, documentés en marche, pas reconstitués sous la contrainte d'un contrôle.
4. **Utilisation.** L'usage réel de ce qui a été construit, par qui, et ce qu'il rapporte, car un actif non utilisé est une pure perte que l'abondance rend indolore, donc invisible.
5. **Référentiels.** Le savoir de l'entreprise qui alimente les systèmes, entretenu comme un actif, parce qu'un modèle nourri d'un savoir périmé produit des erreurs avec une assurance parfaite.

Et comme dans un cockpit, l'humain n'intervient plus partout : il intervient là où la confiance du système est insuffisante. C'est le renversement du modèle de servuction que j'ai pratiqué toute ma carrière : non plus des hommes assistés par des outils, mais des systèmes supervisés par des experts, déclenchés par des seuils. Des experts qui connaissent la plateforme de l'intérieur, et qui ne vous ont rien vendu d'autre.

## Ce que cela déplace, ce que cela crée

Soyons honnêtes sur les conséquences, y compris pour mon ancien métier.

Le modèle de l'intégrateur, vendre des jours-homme pour construire, ne survivra pas tel quel à l'abondance. Mais ce n'est pas le métier qui se banalise, c'est l'une de ses tâches. L'expertise, elle, devient plus rare et plus précieuse : quand n'importe qui peut faire produire un agent en trois jours, la valeur se déplace vers ceux qui savent dire s'il est digne de confiance, le mettre à l'épreuve, le tenir en production, et en répondre. Le consultant senior qui a livré dix ans de Salesforce, de SAP ou de Microsoft ne disparaît pas ; il change de siège, du chantier vers le cockpit, et sa valeur augmente, comme celle de tous les acteurs du domaine qui savent faire voler ce que d'autres ont construit. C'est autour de ces fonctions que nous construisons 56North : le cockpit lui-même, déjà livré ; des partenaires pour la mise à l'épreuve humaine et l'exploitation, en cours de constitution ; et un réseau d'experts seniors issus des communautés de praticiens de chaque plateforme. Ce sont eux qui piloteront.

Une seule condition, que l'aviation a posée avant nous : le constructeur ne certifie pas ses propres appareils. La reconversion de l'intégrateur vers « l'IA managed services » bute sur ce conflit : on ne peut pas être juge et partie, mesurer sereinement la fiabilité de ce qu'on a soi-même construit et facturé. Construire et contrôler doivent rester deux métiers séparés, même quand les mêmes experts savent faire les deux.

Trois fonctions vont donc concentrer la valeur : ceux qui dessinent (les architectes du système augmenté), ceux qui pilotent (les opérateurs du cockpit, avec leurs instruments et leurs seuils), et ceux qui mesurent (les tiers indépendants capables de dire, chiffres à l'appui, si une plateforme vole ou fait semblant). L'électricité a créé l'ingénierie électrique, le cloud a créé les Cloud Operations, la cybersécurité a créé le SOC. La discipline d'exploitation de l'intelligence n'a pas encore de nom établi. Elle aura ses référentiels, ses scores, ses centres d'exploitation, et ses pionniers.

## Le danger, le conseil

[[danger-conseil]]

## L'appel

Aux DSI qui me lisent, et aux dirigeants qui signeront un jour le registre de leurs IA, une seule question, celle que je poserais à mon propre comité de direction : votre IA est déployée. Qui l'opère ? Pas qui l'a construite. Qui la fait voler, avec quels instruments, quels seuils, et quelles preuves, datées, qu'un contrôleur acceptera. Si la réponse est un silence, ou « notre intégrateur, je suppose », vous connaissez maintenant votre chantier de la décennie.

Le build augmenté n'est pas une menace pour les DSI. C'est leur promotion, à condition d'accepter de changer de siège : quitter celui du donneur d'ordres qui achète de la construction, prendre celui du commandant de bord qui répond de la trajectoire.

J'ai passé vingt-cinq ans à vendre la construction. Je passerai les suivantes à construire le cockpit.

*Pascal Mennesson, cofondateur de Maltem Consulting Group, fondateur de 56North. Vous êtes dirigeant et vous souhaitez en parler : [demandez un premier échange](/#diagnostic).*
`,
      dangers: [
        {
          danger: "Des fonctions d'IA se sont activées dans vos outils à la faveur de mises à jour. Personne ne sait combien il y en a, ni qui en répond.",
          advice: "Dressez le registre de toutes vos IA en service, y compris celles livrées par vos éditeurs, avec pour chacune un responsable nommé.",
        },
        {
          danger: "La fiabilité d'un agent se découvre quand un utilisateur se plaint.",
          advice: "Mesurez la qualité des réponses en continu, sur les échanges réels, avec des seuils d'alerte écrits à l'avance.",
        },
        {
          danger: "Le coût des modèles se découvre sur la facture, en fin de mois.",
          advice: "Suivez la consommation par système et par usage, et fixez un budget par agent, comme on gère un carburant.",
        },
        {
          danger: "Les preuves exigées par l'AI Act seront reconstituées à la hâte le jour d'un contrôle.",
          advice: "Documentez en marche : classe de risque, obligations applicables, preuves datées, au fil de l'eau et non a posteriori.",
        },
        {
          danger: "Celui qui a construit vos IA est aussi celui qui vous dit qu'elles fonctionnent.",
          advice: "Séparez construire et contrôler : confiez la mesure à un tiers qui ne vous a rien vendu d'autre.",
        },
      ],
      faq: [
        {
          q: "Qu'est-ce que le build augmenté ?",
          a: "C'est la production de logiciel assistée, puis largement assurée, par l'IA : agents de développement, assistants de code, outils qui permettent aux métiers d'assembler eux-mêmes des applications. Satya Nadella indiquait dès avril 2025 que 20 à 30 % du code des dépôts de Microsoft était écrit par l'IA.",
        },
        {
          q: "Pourquoi tant de projets d'IA ne produisent-ils pas de valeur ?",
          a: "Parce que les entreprises ont industrialisé la production, pas l'exploitation. Gartner anticipe l'annulation de plus de 40 % des projets d'IA agentique d'ici fin 2027, et McKinsey constate que 37 % seulement des organisations attribuent un effet sur leur résultat à l'IA.",
        },
        {
          q: "Quels indicateurs un comité de direction doit-il suivre pour piloter ses IA ?",
          a: "Cinq cadrans : la fiabilité des réponses, les coûts réels, les preuves AI Act (registre, classe de risque, responsables, preuves datées), l'utilisation réelle et la fraîcheur des référentiels qui alimentent les systèmes.",
        },
      ],
    },
    en: {
      slug: "augmented-build-founding-paper",
      title: "25 years in build, one conclusion: value is moving from building to flying",
      seoTitle: "25 years in build: value is moving to flying AI",
      description:
        "AI is about to produce most of the software companies run on. 56North's founding paper: why the CIO becomes architect and pilot, with five dials.",
      keyword: "operating AI in the enterprise",
      niche: [
        "CIO role in the age of AI",
        "end of the time and materials IT services model",
        "supervising AI agents in production",
        "independent third party AI oversight",
        "AI governance cockpit",
      ],
      takeaways: [
        "AI is absorbing most of the build capacity of companies. Software production, which justified forty years of IT services firms, fixed-price projects and time-and-materials contracts, is becoming abundant, and therefore a commodity.",
        "Companies have never built so much, and so few of those builds produce value: we have industrialized production, not operation.",
        "The CIO who wins the decade will be the architect and pilot of a cockpit with five dials: reliability, costs, AI Act evidence, usage, reference sources. And building and controlling must remain two separate trades.",
      ],
      body: `
**Your AI is live. Who is flying it?**

I spent twenty-five years selling build.

I co-founded and grew a digital consulting and services group: more than 1,000 people, platforms delivered on four continents, then a sale to a peer group. The model behind that growth fit in one simple equation: companies need to build more software than they know how to produce, and that scarcity is billed by the day.

That equation has just broken. And I would rather write it myself than pretend not to see it: AI is going to absorb most of the build capacity of companies. Not a marginal share, not just the thankless tasks: most of it. Whether we like it or not.

## The shift is already measured

This is no longer a forecast. As early as April 2025, Satya Nadella said that 20 to 30% of the code in Microsoft's repositories was now written by AI, and the curve will not come back down. Autonomous development agents now chain together tasks that used to keep whole teams busy: specification, generation, testing, refactoring, documentation. Nearly nine organizations out of ten now use AI in at least one function.

Every CIO sees it inside their own walls: one augmented developer produces what a small team used to produce. A well-equipped business unit assembles in a few days what used to require a project. Software production, the bottleneck that justified forty years of IT services firms, fixed-price projects and time-and-materials contracts, is becoming abundant.

And economics never forgives abundance: what becomes abundant stops being expensive, and stops being strategic. Build is going the way compute and storage went before it. It does not disappear. It becomes a commodity.

## The paradox nobody owns

You might think this abundance mechanically produces value. The numbers say the opposite, with rare brutality.

Gartner predicted that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025; the same firm expects more than 40% of agentic AI projects to be cancelled by the end of 2027. MIT, across more than 300 initiatives analyzed, finds that only about 5% of pilots deliver rapid value acceleration. And McKinsey sums it up in one sentence: nine organizations out of ten use AI, 37% see an impact on their bottom line.

Companies have never built so much. Never have so few of those builds produced value.

This paradox has an explanation the market still looks at too little: we have industrialized production, not operation. Everything, budgets, skills, partners, metrics, is still organized around the act of building, at the precise moment when building stops being the problem. The platforms are there. Nobody knows how to fly them.

## The rush, then the piloting

Look at what has happened in your company over the past three years. An AI feature switched itself on in the office suite with an update, without anyone asking for it. An agent was put together in three days by a business unit. An assistant slipped into the CRM, another into the ticketing tool, a third into the ERP. As early as 2024, three knowledge workers out of four were using AI at work, most of them with their own tools. Each of these tools does something. Nobody answers for it.

This is not a fault, it is a rush, and every technology that mattered has had its own. But the rush is coming to an end, and what comes next is inevitable: AI under human oversight, inventoried, measured, with someone accountable for it. This is no longer just my conviction, it is the law: since 2 August 2026, telling people they are dealing with a machine is no longer a courtesy, it is an obligation (Article 50 of the AI Act), and human oversight of risky systems falls on the company that deploys them, not only on the vendor that sells them (Articles 14 and 26).

## What aviation understood before us

When automation entered cockpits, some predicted the end of pilots. Exactly the opposite happened: the job moved. The modern pilot barely touches the controls; they design a flight plan, monitor instruments, run procedures, arbitrate exceptions. And their responsibility has never been greater, precisely because the system has become too complex to be flown "by hand".

Aviation turned automation into safety because, alongside the autopilot, it invented the discipline of supervising it: standardized instruments, checklists, alert thresholds, systematic incident review, a culture of measured reliability.

That is exactly what the augmented information system is missing. AI has given us the autopilot of build. Nobody has built the cockpit yet.

## The CIO, architect and pilot

So here is my conviction, the one that twenty-five years on the builders' side allow me to state: the CIO who wins the decade will no longer be a commissioner of build. They will be the architect and the pilot of a cockpit.

Architect, first: when production becomes abundant, what becomes rare is the overall design. Deciding what should exist, what should connect, what should remain human. Architecture stops being a project phase and becomes the permanent function that keeps abundance from producing chaos, because a system where anyone can build is a system that drifts by default.

Pilot, second. A cockpit worthy of the name continuously displays five dials, and I know few executive committees that can read them today:

1. **Reliability.** Which pipelines, which agents, which reports can be trusted, measured continuously, not discovered after an incident by users.
2. **Costs.** The real consumption of capacity and models, managed like fuel, not discovered on the invoice.
3. **AI Act evidence.** The register of systems, their risk class, the applicable obligations, the named owners and the dated evidence, documented as you go, not reconstructed under the pressure of an inspection.
4. **Usage.** The real use of what has been built, by whom, and what it brings in, because an unused asset is a pure loss that abundance makes painless, and therefore invisible.
5. **Reference sources.** The company knowledge that feeds the systems, maintained as an asset, because a model fed with outdated knowledge produces errors with perfect confidence.

And as in a cockpit, the human no longer steps in everywhere: they step in where the system's confidence is insufficient. It is the reversal of the service delivery model I practiced my whole career: no longer people assisted by tools, but systems supervised by experts, triggered by thresholds. Experts who know the platform from the inside, and who have sold you nothing else.

## What this shifts, what this creates

Let's be honest about the consequences, including for my former trade.

The integrator model, selling person-days to build, will not survive abundance as it is. But it is not the trade that becomes a commodity, it is one of its tasks. Expertise, on the other hand, becomes rarer and more valuable: when anyone can have an agent produced in three days, value moves to those who can say whether it is trustworthy, put it to the test, keep it running in production, and answer for it. The senior consultant who has delivered ten years of Salesforce, SAP or Microsoft does not disappear; they change seats, from the construction site to the cockpit, and their value goes up, like that of everyone in the field who knows how to fly what others have built. That is what we are building 56North around: the cockpit itself, already delivered; partners for human testing and operations, being brought together; and a network of senior experts drawn from the practitioner communities of each platform. They are the ones who will fly.

One condition only, which aviation set before us: the manufacturer does not certify its own aircraft. The integrator's conversion to "AI managed services" runs into this conflict: you cannot be judge and party, calmly measuring the reliability of what you built and billed yourself. Building and controlling must remain two separate trades, even when the same experts know how to do both.

Three functions will therefore concentrate value: those who design (the architects of the augmented system), those who fly (the cockpit operators, with their instruments and thresholds), and those who measure (the independent third parties able to say, figures in hand, whether a platform flies or only pretends to). Electricity created electrical engineering, the cloud created cloud operations, cybersecurity created the SOC. The discipline of operating intelligence does not yet have an established name. It will have its standards, its scores, its operations centers, and its pioneers.

## The danger, the advice

[[danger-conseil]]

## The call

To the CIOs reading this, and to the executives who will one day sign the register of their AI systems, one question only, the one I would ask my own executive committee: your AI is deployed. Who operates it? Not who built it. Who flies it, with which instruments, which thresholds, and which dated evidence an auditor will accept. If the answer is silence, or "our integrator, I suppose", you now know your project for the decade.

The augmented build is not a threat to CIOs. It is their promotion, provided they agree to change seats: leaving that of the client who buys construction, taking that of the captain who answers for the trajectory.

I spent twenty-five years selling construction. I will spend the next ones building the cockpit.

*Pascal Mennesson, co-founder of Maltem Consulting Group, founder of 56North. If you are an executive and would like to discuss this, [request a first conversation](/en#diagnostic).*
`,
      dangers: [
        {
          danger: "AI features switched themselves on in your tools with updates. Nobody knows how many there are, or who answers for them.",
          advice: "Build the register of every AI system in service, including those shipped by your vendors, each with a named owner.",
        },
        {
          danger: "An agent's reliability is discovered when a user complains.",
          advice: "Measure answer quality continuously, on real conversations, with alert thresholds written down in advance.",
        },
        {
          danger: "Model costs are discovered on the invoice, at the end of the month.",
          advice: "Track consumption per system and per use, and set a budget per agent, the way you manage fuel.",
        },
        {
          danger: "The evidence the AI Act requires will be pieced together in a hurry on the day of an inspection.",
          advice: "Document as you go: risk class, applicable obligations, dated evidence, recorded along the way rather than after the fact.",
        },
        {
          danger: "Whoever built your AI systems is also the one telling you they work.",
          advice: "Keep building and controlling apart: hand the measurement to a third party that has sold you nothing else.",
        },
      ],
      faq: [
        {
          q: "What is the augmented build?",
          a: "Software production assisted, then largely carried out, by AI: development agents, coding assistants, tools that let business units assemble applications themselves. As early as April 2025, Satya Nadella said that 20 to 30% of the code in Microsoft's repositories was written by AI.",
        },
        {
          q: "Why do so many AI projects fail to produce value?",
          a: "Because companies have industrialized production, not operation. Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027, and McKinsey finds that only 37% of organizations attribute an impact on their bottom line to AI.",
        },
        {
          q: "Which indicators should an executive committee track to run its AI?",
          a: "Five dials: answer reliability, real costs, AI Act evidence (register, risk class, owners, dated evidence), real usage, and the freshness of the reference sources that feed the systems.",
        },
      ],
    },
  },
};

export default article;
