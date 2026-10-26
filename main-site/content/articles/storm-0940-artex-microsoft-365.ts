import type { Article } from "./types";

/*
 * Article de réaction (veille du 26 octobre 2026, occasion 1). Faits vérifiés le 26 octobre sur le billet primaire de Microsoft Security (21/10, mis à jour le 23/10).
 * Prudence : attribution = évaluation de Microsoft ; exfiltration NON établie ; « majorité des tentatives échouées » ; systèmes Microsoft non compromis.
 */
const article: Article = {
  id: "storm-0940-artex-microsoft-365",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  category: { fr: "Incident", en: "Incident" },
  dial: { fr: "Utilisation", en: "Usage" },
  sources: [
    { title: "Microsoft Security, « AI-driven, large-scale nation-state campaign using ARTEX enables supply chain compromise » (21 octobre 2026, mis à jour le 23)", url: "https://www.microsoft.com/en-us/security/blog/2026/10/21/storm-0940-uses-artex-agentic-ai-connectwise-supply-chain-compromise/" },
    { title: "The Register, « Microsoft says ConnectWise breach let Chinese spies loose on 2,250 cloud tenants » (22 octobre 2026)", url: "https://www.theregister.com/security/2026/10/22/microsoft-says-connectwise-breach-let-chinese-spies-loose-on-2250-cloud-tenants/5304687" },
    { title: "SecurityWeek, « China APT Uses AI Pentest Tool Artex in ConnectWise Attacks » (octobre 2026)", url: "https://www.securityweek.com/china-apt-uses-ai-pentest-tool-artex-in-connectwise-attacks/" },
  ],
  versions: {
    fr: {
      slug: "storm-0940-artex-agents-ia-microsoft-365",
      title: "Des agents IA offensifs ont visé plus de 2 250 clients Microsoft 365 : ce qu'un DSI doit vérifier",
      seoTitle: "Storm-0940 et ARTEX : des agents IA contre Microsoft 365",
      description:
        "Le 21 octobre, Microsoft a décrit une campagne menée avec ARTEX, un outil d'agents IA, contre plus de 2 250 clients Microsoft 365. Les vérifications à faire.",
      keyword: "Storm-0940 ARTEX Microsoft 365",
      niche: [
        "attaque agents IA Microsoft 365",
        "compromission ConnectWise Entra",
        "audit applications multi-tenant Entra",
        "journaux de connexion des principaux de service",
        "agents IA offensifs en entreprise",
      ],
      takeaways: [
        "Le 21 octobre 2026, Microsoft a attribué à l'acteur Storm-0940 une campagne menée avec ARTEX, un outil open source d'agents IA, qui a tenté de se connecter à plus de 2 250 clients Microsoft 365 avec des applications ConnectWise compromises.",
        "La majorité des tentatives a échoué et Microsoft précise qu'une connexion réussie ne prouve pas un accès aux données. Mais dans plusieurs environnements, l'attaquant a obtenu des privilèges élevés, parfois moins de trois heures après le premier ciblage.",
        "La porte d'entrée n'était pas une faille : c'était une confiance déjà accordée à une application tierce. Savoir quelles applications et quels agents agissent dans votre environnement, et pouvoir le prouver, devient une question de direction.",
      ],
      body: `
## Ce qui s'est passé

Le 15 octobre 2026, des informations publiques signalent un incident chez ConnectWise, éditeur de logiciels de gestion informatique très utilisés par les prestataires de services. Le 16, ConnectWise publie un premier avis. Le 21, Microsoft publie son analyse : l'acteur qu'il nomme Storm-0940, qu'il décrit comme aligné sur l'État chinois, a utilisé un accès non autorisé au service ConnectWise Cloud Backup pour tenter de se connecter à plus de 2 250 locataires Microsoft 365, avec les identités d'applications ConnectWise que ces clients avaient autorisées. L'attribution est une évaluation de Microsoft.

L'outil employé s'appelle ARTEX : un cadre de test d'intrusion open source, multi-agents, capable de s'appuyer sur n'importe quel modèle d'IA pour automatiser la reconnaissance, les attaques par mots de passe et l'abus d'applications. Selon Microsoft, plusieurs attaques ont abouti à des accès privilégiés au cloud, dans certains cas moins de trois heures après le premier ciblage.

## Ce qui est établi, et ce qui ne l'est pas

**Établi par Microsoft.** Dans plusieurs environnements, l'attaquant a mené une reconnaissance par Microsoft Graph, ajouté des identifiants à des applications pour conserver un accès, et tenté de modifier des identités, des groupes et des rôles privilégiés. Une application ConnectWise s'est attribuée le rôle d'administrateur global. Des lectures massives de secrets dans plusieurs coffres Key Vault ont été observées.

**Pas établi.** Une fuite de données. Microsoft écrit que la présence d'une application concernée ou une connexion réussie « n'indique pas nécessairement » un accès aux données ou leur exfiltration, et que la majorité des tentatives a échoué. Les systèmes de Microsoft eux-mêmes n'ont pas été compromis.

## Pourquoi c'est un sujet de direction

Deux choses changent. La vitesse d'abord : quand des agents enchaînent reconnaissance et escalade de privilèges en quelques heures, une revue mensuelle des accès arrive après la bataille. La porte ensuite : aucune faille de Microsoft n'a été exploitée. L'attaquant est entré par une confiance déjà accordée, une application tierce autorisée dans l'annuaire avec des permissions larges, qui agit sans connexion humaine, donc sans double authentification.

La plupart des entreprises savent combien elles ont de salariés. Peu savent combien d'applications et d'agents ont le droit d'agir dans leur environnement, avec quelles permissions, et qui les a autorisés.

## Ce que Microsoft demande de vérifier

- Rechercher les applications concernées par leur identifiant d'application, et non par leur nom affiché, dans chaque locataire où elles sont ou ont été autorisées.
- Conserver les journaux de connexion et d'audit Entra, les enregistrements Purview et les données du SIEM avant toute modification.
- Relire les connexions des principaux de service au moins depuis le 15 octobre 2026, et depuis le 1er octobre si les journaux existent, sans se limiter aux adresses IP publiées.
- Auditer les ajouts d'identifiants, les nouvelles applications ou nouveaux propriétaires, les consentements, les attributions de rôles privilégiés et les changements d'accès conditionnel.
- Ne pas supprimer l'application d'entreprise en premier réflexe : Microsoft demande de préserver la configuration et les preuves avant tout changement irréversible.

## Ce qu'une équipe bien outillée fait différemment

Elle tient un registre vivant des applications et des agents qui agissent dans son environnement, avec leurs permissions et un responsable nommé. Elle surveille en continu les authentifications d'applications à privilèges élevés et les ajouts d'identifiants. Et elle sait prouver après coup ce qui a été vu, quand et par qui, parce que ses journaux ont été conservés et datés avant l'incident, pas reconstitués après.

C'est la logique du [Cockpit](/cockpit) : le [registre des IA](/registre-des-ia), avec la classe de risque de chaque système et l'historique de ses changements, et des preuves datées qu'un contrôleur ou un assureur peut vérifier.

[[danger-conseil]]
`,
      dangers: [
        { danger: "Les applications tierces autorisées dans votre annuaire ne sont inventoriées nulle part, ou seulement par leur nom.", advice: "Tenez un registre des applications et des agents autorisés, par identifiant d'application, avec leurs permissions et un responsable nommé." },
        { danger: "Les connexions des applications, sans utilisateur et sans double authentification, ne sont relues qu'après un incident.", advice: "Surveillez en continu les authentifications d'applications à privilèges élevés et les ajouts d'identifiants, avec une alerte." },
        { danger: "Le premier réflexe en cas d'alerte est de supprimer l'application suspecte.", advice: "Préservez d'abord la configuration et les journaux : sans eux, vous ne pourrez prouver ni l'étendue ni l'absence d'impact." },
      ],
      faq: [
        { q: "Qu'est-ce qu'ARTEX ?", a: "Un cadre de test d'intrusion open source et multi-agents, qui peut utiliser n'importe quel modèle d'IA pour automatiser des tâches offensives, de la reconnaissance à l'exfiltration. Microsoft indique que Storm-0940 l'a utilisé dans cette campagne." },
        { q: "Des données ont-elles été volées ?", a: "Ce n'est pas établi. Microsoft précise qu'une connexion réussie ou la présence d'une application concernée n'indique pas nécessairement un accès aux données, et que la majorité des tentatives a échoué." },
        { q: "Mon entreprise est-elle concernée ?", a: "Si des applications ConnectWise sont ou ont été autorisées dans votre locataire Microsoft 365, appliquez les vérifications publiées par Microsoft le 21 octobre 2026. Sinon, la leçon reste valable : inventoriez les applications tierces qui agissent chez vous avec des permissions élevées." },
      ],
    },
    en: {
      slug: "storm-0940-artex-ai-agents-microsoft-365",
      title: "Offensive AI agents targeted more than 2,250 Microsoft 365 customers: what a CIO should check",
      seoTitle: "Storm-0940 and ARTEX: AI agents against Microsoft 365",
      description:
        "On 21 October, Microsoft described a campaign run with ARTEX, an AI agent tool, against more than 2,250 Microsoft 365 customers. The checks to run now.",
      keyword: "Storm-0940 ARTEX Microsoft 365",
      niche: [
        "AI agent attack Microsoft 365",
        "ConnectWise compromise Entra",
        "multi-tenant app audit Entra",
        "service principal sign-in logs",
        "offensive AI agents enterprise",
      ],
      takeaways: [
        "On 21 October 2026, Microsoft attributed to the actor Storm-0940 a campaign run with ARTEX, an open-source AI agent framework, which attempted to sign in to more than 2,250 Microsoft 365 customers using compromised ConnectWise applications.",
        "Most attempts failed, and Microsoft notes that a successful sign-in does not prove data access. But in several environments the attacker gained elevated privileges, sometimes less than three hours after first targeting.",
        "The way in was not a vulnerability: it was trust already granted to a third-party application. Knowing which applications and agents act in your environment, and being able to prove it, is becoming a board-level question.",
      ],
      body: `
## What happened

On 15 October 2026, public reports flagged an incident at ConnectWise, an IT management software vendor widely used by service providers. On the 16th, ConnectWise published a first advisory. On the 21st, Microsoft published its analysis: the actor it calls Storm-0940, which it describes as China-state aligned, used unauthorised access to the ConnectWise Cloud Backup service to attempt sign-ins to more than 2,250 Microsoft 365 tenants, using the identities of ConnectWise applications those customers had authorised. The attribution is Microsoft's assessment.

The tool used is called ARTEX: an open-source, multi-agent penetration testing framework that can run on any AI model to automate reconnaissance, password attacks and application abuse. According to Microsoft, several attacks led to privileged cloud access, in some cases less than three hours after first targeting.

## What is established, and what is not

**Established by Microsoft.** In several environments, the attacker ran reconnaissance through Microsoft Graph, added credentials to applications to keep access, and attempted to change identities, groups and privileged roles. One ConnectWise application assigned itself the Global Administrator role. Bulk secret reads across several Key Vaults were observed.

**Not established.** A data breach. Microsoft writes that the presence of an affected application or a successful sign-in "does not necessarily indicate" that data was accessed or exfiltrated, and that most of the targeting failed. Microsoft's own systems were not compromised.

## Why this is a leadership issue

Two things change. Speed, first: when agents chain reconnaissance and privilege escalation within hours, a monthly access review arrives after the battle. The door, second: no Microsoft vulnerability was exploited. The attacker came in through trust already granted, a third-party application authorised in the directory with broad permissions, acting without any human sign-in and therefore without multi-factor authentication.

Most companies know how many employees they have. Few know how many applications and agents are allowed to act in their environment, with which permissions, and who authorised them.

## What Microsoft asks customers to check

- Search for the affected applications by application ID, not by display name, in every tenant where they are or were authorised.
- Preserve Entra sign-in and audit logs, Purview records and SIEM data before making changes.
- Review service principal sign-ins from at least 15 October 2026, and from 1 October where logs exist, without limiting the review to the published IP addresses.
- Audit credential additions, new applications or owners, consent grants, privileged role assignments and Conditional Access changes.
- Do not delete the enterprise application as a first response: Microsoft asks customers to preserve configuration and evidence before any irreversible change.

## What a well-equipped team does differently

It keeps a living register of the applications and agents that act in its environment, with their permissions and a named owner. It continuously monitors high-privilege application sign-ins and credential additions. And it can prove after the fact what was seen, when and by whom, because its logs were kept and dated before the incident, not rebuilt afterwards.

That is the logic of [Cockpit](/en/cockpit): the [AI register](/en/ai-register), with the risk class of each system and the history of its changes, and dated evidence that an auditor or an insurer can verify.

[[danger-conseil]]
`,
      dangers: [
        { danger: "Third-party applications authorised in your directory are inventoried nowhere, or only by name.", advice: "Keep a register of authorised applications and agents, by application ID, with their permissions and a named owner." },
        { danger: "Application sign-ins, with no user and no multi-factor authentication, are only reviewed after an incident.", advice: "Continuously monitor high-privilege application sign-ins and credential additions, with an alert." },
        { danger: "The first reflex on an alert is to delete the suspicious application.", advice: "Preserve configuration and logs first: without them, you can prove neither the extent nor the absence of impact." },
      ],
      faq: [
        { q: "What is ARTEX?", a: "An open-source, multi-agent penetration testing framework that can use any AI model to automate offensive tasks, from reconnaissance to exfiltration. Microsoft states that Storm-0940 used it in this campaign." },
        { q: "Was data stolen?", a: "That is not established. Microsoft notes that a successful sign-in or the presence of an affected application does not necessarily indicate data access, and that most of the targeting failed." },
        { q: "Is my company affected?", a: "If ConnectWise applications are or were authorised in your Microsoft 365 tenant, apply the checks Microsoft published on 21 October 2026. If not, the lesson still holds: inventory the third-party applications that act in your environment with elevated permissions." },
      ],
    },
  },
};

export default article;
