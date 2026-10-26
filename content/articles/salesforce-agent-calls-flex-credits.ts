import type { Article } from "./types";

/*
 * Article de réaction (veille du 26 octobre 2026). Faits Salesforce : article d'aide 005360285 du 17/09/2026, connu par deux résumés concordants (Vantage Point, veille) ;
 * discussions avec les partenaires : Salesforce Ben du 21/10 (pas de déclaration officielle de Salesforce).
 */
const article: Article = {
  id: "salesforce-agent-calls-flex-credits",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  pillar: "maintain",
  category: { en: "Run & maintain", fr: "Exploiter et maintenir" },
  practices: ["salesforce"],
  sources: [
    { title: "Salesforce Help, Knowledge Article 005360285, « Understand AIforce Impact » (17 septembre 2026)", url: "https://help.salesforce.com/s/articleView?id=005360285&type=1" },
    { title: "Salesforce, Flex Credits Rate Card (31 août 2026)", url: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/agentforce/Flex-Credits-Rate-Card-08.31.2026.pdf" },
    { title: "Salesforce Ben, « Salesforce Opens Talks With Partners Over AI Agent Billing Concerns » (21 octobre 2026)", url: "https://www.salesforceben.com/salesforce-opens-talks-with-partners-over-ai-agent-billing-concerns/" },
    { title: "Vantage Point, « Salesforce Will Meter Agentic MCP and API Calls: What to Do Now » (octobre 2026)", url: "https://vantagepoint.io/blog/sf/salesforce-flex-credits-agentic-api-calls" },
  ],
  versions: {
    fr: {
      slug: "salesforce-appels-agents-flex-credits-hpi",
      title: "Salesforce va facturer chaque appel d'agent en Flex Credits : ce qu'il faut mesurer avant la première facture",
      seoTitle: "Salesforce HPI : les appels d'agents facturés en Flex Credits",
      description:
        "Salesforce va compter chaque appel MCP ou API réussi d'un agent IA enregistré en Flex Credits. Prix pas encore publié. Ce qu'il faut mesurer dès maintenant.",
      keyword: "Salesforce Headless Platform Interaction Flex Credits",
      niche: [
        "tarification MCP Salesforce",
        "facturation des agents Salesforce",
        "multiplicateur Flex Credits HPI",
        "enregistrement des agents Salesforce",
        "Digital Wallet consommation agents",
      ],
      takeaways: [
        "Dans un article d'aide daté du 17 septembre 2026, Salesforce annonce que chaque appel MCP ou API réussi d'un agent IA enregistré comptera comme une Headless Platform Interaction (HPI) et consommera des Flex Credits, suivis dans le Digital Wallet.",
        "Le multiplicateur reste « à annoncer » : le comptage ne démarrera qu'après sa publication, avec 30 jours de préavis. Les sandboxes et organisations de développement sont exclues, et les intégrations classiques, non agentiques, gardent leur tarification.",
        "Des partenaires s'inquiètent de la prévisibilité des coûts et Salesforce a ouvert des discussions avec eux. Les entreprises qui comptent dès maintenant les appels de leurs agents négocieront à partir de leurs chiffres, pas de la facture.",
      ],
      body: `
## Ce que Salesforce a annoncé

Dans un article d'aide publié le 17 septembre 2026 (« Understand AIforce Impact »), Salesforce introduit un nouveau type de consommation : la **Headless Platform Interaction**, ou HPI. Chaque appel réussi d'un agent IA enregistré vers Salesforce, par un serveur MCP ou directement par l'API, comptera comme une HPI et consommera des Flex Credits, la monnaie de consommation de Salesforce. L'usage sera suivi dans le Digital Wallet.

Ce que l'on sait à ce stade, d'après les éléments publiés par Salesforce :

- **Qui est compté.** Les agents externes, Claude, Copilot, outils maison ou autres, dès qu'ils sont enregistrés sur la plateforme avec leur propre identité. L'enregistrement est l'étape qui donne à un agent ses identifiants et ses permissions.
- **Le prix.** Le multiplicateur figure comme « TBA » (à annoncer) sur la grille des Flex Credits. Aucun coût par appel ne peut encore être calculé.
- **Quand.** Le comptage ne démarrera qu'après la publication du multiplicateur, avec 30 jours de préavis. Salesforce vise novembre pour l'enregistrement des agents, les contrôles de sécurité associés et le nouveau modèle de facturation.
- **Les délais d'enregistrement.** Les clients qui utilisent un serveur MCP Salesforce auront trois mois pour enregistrer leurs agents après l'annonce de la disponibilité d'Agentic Identity. Les clients existants dont les agents passent par l'API les enregistrent au renouvellement.
- **Ce qui est exclu.** Les sandboxes, les scratch orgs et les organisations Developer Edition ne sont pas comptées. Les intégrations classiques, non agentiques, gardent leur tarification actuelle.

## Pourquoi c'est important

Pour un client Salesforce, une nouvelle ligne arrive sur la facture, à un prix unitaire que personne ne connaît encore, et elle s'applique à tout agent qui parle à Salesforce, pas seulement à Agentforce. Des partenaires s'en inquiètent : le 21 octobre, Salesforce Ben rapportait que Salesforce avait ouvert des discussions avec plusieurs d'entre eux, menés par l'architecte et fondateur d'éditeur Amnon Kruvi, sur le coût et la prévisibilité. Aucune déclaration officielle de Salesforce sur d'éventuels changements n'a été publiée.

La zone grise est la classification elle-même. Salesforce distingue le trafic « agentique » des intégrations classiques, mais les éléments publiés ne tranchent pas tous les cas, par exemple un flux d'intégration déclenché par un agent. Ces cas méritent d'être clarifiés avec votre interlocuteur commercial, par écrit, avant le début du comptage.

## Ce qu'il faut faire ce mois-ci

1. **Recensez tous les agents et intégrations** qui appellent Salesforce par MCP ou par l'API, et repérez ceux qui risquent d'être classés comme agentiques.
2. **Mesurez dès maintenant leur volume quotidien d'appels réussis,** agent par agent. Sans cette référence, la première facture sera une surprise.
3. **Cherchez les boucles et les relances.** Un agent qui répète ses appels après une erreur ne coûte rien aujourd'hui. Une fois les appels facturés, il peut multiplier la note.
4. **Vérifiez le Digital Wallet** et qui, chez vous, recevra le préavis de 30 jours de Salesforce.
5. **Fixez un plafond et une alerte par agent,** comme pour une consommation cloud.

C'est un travail typique d'architecte Salesforce senior : cartographier le trafic des agents, supprimer les appels inutiles, et revoir les intégrations pour qu'elles restent hors du compteur quand elles n'ont pas à y être. Le nombre d'appels devient aussi un indicateur à suivre dans le temps, à côté des coûts et de la fiabilité.

[[danger-conseil]]
`,
      dangers: [
        { danger: "Vous découvrirez le volume d'appels de vos agents sur la première facture.", advice: "Comptez dès maintenant les appels MCP et API réussis, agent par agent, avant le début du comptage." },
        { danger: "Un agent qui relance en boucle ne coûte rien aujourd'hui et pourrait multiplier la facture demain.", advice: "Suivez les erreurs et relances de chaque agent, et fixez un plafond avec une alerte." },
        { danger: "Personne ne sait quelles intégrations Salesforce classera comme agentiques.", advice: "Listez les cas limites et obtenez la réponse de Salesforce par écrit avant le préavis de 30 jours." },
      ],
      faq: [
        { q: "Qu'est-ce qu'une Headless Platform Interaction chez Salesforce ?", a: "Un type de consommation de Flex Credits annoncé le 17 septembre 2026 : chaque appel MCP ou API réussi d'un agent IA enregistré vers Salesforce compte comme une interaction et consomme des Flex Credits, suivis dans le Digital Wallet." },
        { q: "Combien coûtera un appel d'agent ?", a: "On ne le sait pas encore. Le multiplicateur est indiqué « à annoncer », et le comptage ne démarrera qu'après sa publication, avec 30 jours de préavis." },
        { q: "Les intégrations classiques sont-elles concernées ?", a: "Selon Salesforce, les intégrations classiques non agentiques gardent leur tarification, et les sandboxes, scratch orgs et organisations Developer Edition ne sont pas comptées. Les cas limites, comme un flux déclenché par un agent, sont à confirmer avec Salesforce." },
      ],
    },
    en: {
      slug: "salesforce-agent-api-calls-flex-credits-hpi",
      title: "Salesforce will bill every agent call in Flex Credits: what to measure before the first invoice",
      seoTitle: "Salesforce HPI: agent API calls billed in Flex Credits",
      description:
        "Salesforce will meter each successful MCP or API call by a registered AI agent in Flex Credits. Price not yet published. What to count and check now.",
      keyword: "Salesforce Headless Platform Interaction Flex Credits",
      niche: [
        "Salesforce MCP pricing",
        "Salesforce agent API billing",
        "Flex Credits multiplier HPI",
        "Salesforce agent registration Agentic Identity",
        "Digital Wallet agent usage",
      ],
      takeaways: [
        "In a help article dated 17 September 2026, Salesforce announced that every successful MCP or direct API call made by a registered AI agent will count as a Headless Platform Interaction (HPI) and consume Flex Credits, tracked in the Digital Wallet.",
        "The multiplier is still marked TBA: metering starts only once it is published, with 30 days' notice. Sandboxes and developer orgs are excluded, and traditional non-agentic integrations keep their current pricing.",
        "Partners have raised concerns about cost predictability, and Salesforce has opened talks with them. Companies that count their own agent calls now will negotiate from their figures, not from the invoice.",
      ],
      body: `
## What Salesforce announced

In a help article published on 17 September 2026 ("Understand AIforce Impact"), Salesforce introduced a new usage type: the **Headless Platform Interaction**, or HPI. Every successful call made by a registered AI agent to Salesforce, whether through an MCP server or directly through the API, will count as one HPI and consume Flex Credits, Salesforce's consumption currency. Usage will be tracked in the Digital Wallet.

What is known so far, according to Salesforce's published material:

- **Who is counted.** External agents, Claude, Copilot, in-house tools or others, once they are registered on the platform with their own identity. Registration is the same step that gives an agent its own credentials and permissions.
- **The price.** The multiplier is listed as TBA on the Flex Credits rate card. No cost per call can be calculated yet.
- **When.** Metering starts only after the multiplier is published, with 30 days' notice. Salesforce is targeting November for agent registration, the related security controls and the new billing model.
- **Registration deadlines.** Customers using a Salesforce MCP server will have three months to register their agents after Salesforce announces that Agentic Identity is available. Existing customers with API-based agents register at renewal.
- **What is excluded.** Sandboxes, scratch orgs and Developer Edition orgs are not metered. Traditional, non-agentic integrations keep their current pricing.

## Why it matters

For a Salesforce customer, a new line is coming to the bill, with a unit price nobody knows yet, and it applies to any agent that talks to Salesforce, not only to Agentforce. Partners have voiced concerns: on 21 October, Salesforce Ben reported that Salesforce had opened discussions with several of them, led by architect and ISV founder Amnon Kruvi, about cost and predictability. No official Salesforce statement on changes has been published.

The grey zone is the classification itself. Salesforce distinguishes "agentic" traffic from traditional integrations, but published material does not settle every case, for example a middleware flow triggered by an agent. Those cases are worth clarifying with your account executive, in writing, before the count starts.

## What to do this month

1. **Inventory every agent and integration** that calls Salesforce through MCP or the API, and flag the ones likely to be classified as agentic.
2. **Measure their daily volume of successful calls** now, per agent. Without this baseline, the first invoice will be a surprise.
3. **Look for loops and retries.** An agent that repeats calls after an error costs nothing today. Once calls are metered, it can multiply the bill.
4. **Check the Digital Wallet** and who in your company receives Salesforce's 30-day notice.
5. **Set a ceiling and an alert per agent,** as you would for cloud consumption.

This is typical work for a senior Salesforce architect: mapping agent traffic, reducing unnecessary calls, and redesigning integrations so they stay out of the meter when they do not need to be in it. The number of calls also becomes an indicator to follow over time, alongside costs and reliability.

[[danger-conseil]]
`,
      dangers: [
        { danger: "You will discover the volume of your agents' calls on the first invoice.", advice: "Count successful MCP and API calls per agent from now on, before metering starts." },
        { danger: "An agent that retries in a loop costs nothing today and could multiply the bill tomorrow.", advice: "Track errors and retries per agent, and set a ceiling with an alert." },
        { danger: "Nobody knows which integrations Salesforce will classify as agentic.", advice: "List borderline cases and get Salesforce's answer in writing before the 30-day notice." },
      ],
      faq: [
        { q: "What is a Headless Platform Interaction in Salesforce?", a: "A Flex Credits usage type announced on 17 September 2026: every successful MCP or direct API call made by a registered AI agent to Salesforce counts as one interaction and consumes Flex Credits, tracked in the Digital Wallet." },
        { q: "How much will an agent call cost?", a: "Not known yet. The multiplier is listed as TBA, and metering starts only after it is published, with 30 days' notice." },
        { q: "Are traditional integrations affected?", a: "According to Salesforce, traditional non-agentic integrations keep their current pricing, and sandboxes, scratch orgs and Developer Edition orgs are not metered. Borderline cases, such as middleware triggered by an agent, should be confirmed with Salesforce." },
      ],
    },
  },
};

export default article;
