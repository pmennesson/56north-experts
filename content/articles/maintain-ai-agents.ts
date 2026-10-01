import type { Article } from "./types";

const article: Article = {
  id: "maintain-ai-agents-production",
  status: "draft",
  published: "2026-10-01",
  updated: "2026-10-01",
  pillar: "maintain",
  category: { en: "Run & maintain", fr: "Exploiter et maintenir" },
  practices: ["salesforce", "microsoft", "servicenow", "sap"],
  sources: [
    { title: "OWASP Top 10 for Large Language Model Applications", url: "https://genai.owasp.org/llm-top-10/" },
    { title: "NIST AI Risk Management Framework (AI RMF 1.0)", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { title: "Regulation (EU) 2024/1689 (AI Act), Articles 26 and 73", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
  versions: {
    en: {
      slug: "maintain-ai-agents-in-production",
      title: "Maintaining AI agents in production: what degrades, and how to keep control",
      description:
        "An AI agent on Agentforce, Copilot Studio or Now Assist degrades after go-live. Six things that drift, a monthly routine to catch them, and the risks to watch.",
      keyword: "maintain AI agent in production",
      niche: ["AI agent drift monitoring", "Copilot Studio agent maintenance", "Agentforce agent regression testing", "AI agent cost per conversation", "prompt injection enterprise AI agent"],
      takeaways: [
        "An AI agent is not finished at go-live. Its knowledge ages, the vendor updates the platform, users find new uses and costs drift.",
        "The fix is a routine, not a project: a set of test conversations replayed after every change, a weekly review of real conversations, and four indicators tracked monthly.",
        "Every agent needs a named owner. Without one, nobody notices drift until a customer, an employee or an auditor does.",
      ],
      body: `
Most AI projects on enterprise platforms are judged on the go-live date. Then the team moves on to the next use case, and the first agent is left to run. Within a few months, answers get worse, costs go up and nobody can say exactly why. An agent built on Agentforce, Copilot Studio, Joule or Now Assist needs maintenance like any production system, with a few failure modes of its own.

## What degrades after go-live

- **Knowledge goes stale.** The agent answers from the content it is grounded on: knowledge articles, product data, policies. When a price, a procedure or an offer changes and the source is not updated, the agent keeps giving the old answer, confidently.
- **The platform changes under you.** Vendors update their AI features frequently, sometimes including the underlying model or the way the agent plans its steps. Salesforce, for example, ships three major releases a year. A change you did not make can alter how your agent behaves.
- **Users find new uses.** People ask the agent things it was not designed for. Some of those questions fall outside its instructions, and that is where answers become improvised, or wrong.
- **Permissions drift.** New data sources are connected, new actions are added, access rights are widened "temporarily". Each change widens what the agent can read or do.
- **Costs drift.** Longer conversations, more actions per request and more users all raise consumption. Without a cost per conversation tracked monthly, the bill becomes the first alert.
- **Integrations break.** An API changes, a field is renamed, a system is migrated. The agent may not fail visibly: it may simply stop using the data and answer without it.

## The risks that come with drift

Two risks deserve special attention because they grow over time:

- **Data exposure.** An assistant that searches company content shows users everything they are technically allowed to see. If permissions on shared drives or sites are too broad, the assistant makes that oversharing visible in seconds.
- **Prompt injection.** Text hidden in a document, an email or a web page can carry instructions that the agent follows. OWASP ranks it as the first risk for applications built on language models. The more data sources and actions an agent has, the larger the exposure.

## A monthly routine that keeps control

| Frequency | What to do | Who |
|---|---|---|
| After every change, including vendor releases | Replay a fixed set of test conversations and compare the answers | Platform team |
| Weekly | Read a sample of real conversations, especially escalations and negative feedback | Agent owner |
| Monthly | Review four indicators: resolution or deflection rate, escalation rate, user feedback, cost per conversation | Agent owner and business sponsor |
| Quarterly | Review permissions, data sources and actions; remove what is no longer needed | Platform team and security |

Keep a change log for every agent: what changed, when, why, and who approved it. It is the first document an auditor will ask for, and the fastest way to understand a sudden change in behaviour.

## Who owns the agent

Give each agent a named owner, a person rather than a team, who answers three questions at any time: what does the agent do, how well is it doing it, and what changed last. For agents used in sensitive processes, the EU AI Act makes this monitoring an obligation: deployers of high-risk systems must monitor their operation and report serious incidents.

`,
      faq: [
        {
          q: "How often should an AI agent be tested after go-live?",
          a: "After every change, including vendor releases, replay a fixed set of test conversations. Add a weekly review of a sample of real conversations and a monthly review of resolution, escalation, feedback and cost indicators.",
        },
        {
          q: "Why does an AI agent get worse over time?",
          a: "Its knowledge sources age, the vendor updates the platform and sometimes the model, users bring new kinds of questions, and integrations change. None of these shows up as an error message.",
        },
        {
          q: "Who should own an AI agent in production?",
          a: "A named person who can say at any time what the agent does, how well it performs and what changed last. A team is not an owner.",
        },
      ],
    },
    fr: {
      slug: "maintenir-agent-ia-en-production",
      title: "Maintenir un agent IA en production : ce qui se dégrade, et comment garder le contrôle",
      description:
        "Un agent IA sur Agentforce, Copilot Studio ou Now Assist se dégrade après la mise en service. Six dérives, une routine mensuelle pour les repérer, et les risques à surveiller.",
      keyword: "maintenir agent IA en production",
      niche: ["dérive agent IA en production", "maintenance agent Copilot Studio", "tests de non-régression agent Agentforce", "coût par conversation agent IA", "injection de prompt agent IA entreprise"],
      takeaways: [
        "Un agent IA n'est pas terminé à sa mise en service. Ses connaissances vieillissent, l'éditeur fait évoluer la plateforme, les utilisateurs inventent de nouveaux usages et les coûts dérivent.",
        "La solution est une routine, pas un projet : un jeu de conversations de test rejoué après chaque changement, une relecture hebdomadaire de vraies conversations, et quatre indicateurs suivis chaque mois.",
        "Chaque agent doit avoir un responsable nommé. Sans lui, personne ne voit la dérive avant un client, un salarié ou un contrôleur.",
      ],
      body: `
La plupart des projets IA sur les plateformes d'entreprise sont jugés sur leur date de mise en service. Puis l'équipe passe au cas d'usage suivant, et le premier agent tourne seul. En quelques mois, les réponses se dégradent, les coûts montent et personne ne sait dire pourquoi. Un agent construit sur Agentforce, Copilot Studio, Joule ou Now Assist demande une maintenance comme tout système en production, avec quelques pannes qui lui sont propres.

## Ce qui se dégrade après la mise en service

- **Les connaissances vieillissent.** L'agent répond à partir des contenus sur lesquels il s'appuie : articles de connaissance, données produits, procédures. Quand un prix, une procédure ou une offre change sans que la source soit mise à jour, l'agent continue de donner l'ancienne réponse, avec aplomb.
- **La plateforme change sous vos pieds.** Les éditeurs font évoluer leurs fonctions IA souvent, parfois jusqu'au modèle sous-jacent ou à la façon dont l'agent planifie ses étapes. Salesforce, par exemple, publie trois versions majeures par an. Un changement que vous n'avez pas fait peut modifier le comportement de votre agent.
- **Les utilisateurs inventent de nouveaux usages.** Ils posent à l'agent des questions pour lesquelles il n'a pas été conçu. Une partie sort de ses instructions, et c'est là que les réponses deviennent improvisées, ou fausses.
- **Les droits d'accès dérivent.** De nouvelles sources de données sont branchées, de nouvelles actions ajoutées, des droits élargis « provisoirement ». Chaque changement étend ce que l'agent peut lire ou faire.
- **Les coûts dérivent.** Des conversations plus longues, plus d'actions par demande et plus d'utilisateurs font monter la consommation. Sans un coût par conversation suivi chaque mois, c'est la facture qui donne l'alerte.
- **Les intégrations cassent.** Une API change, un champ est renommé, un système migre. L'agent ne tombe pas forcément en panne visible : il peut simplement cesser d'utiliser la donnée et répondre sans elle.

## Les risques qui accompagnent la dérive

Deux risques méritent une attention particulière, parce qu'ils grandissent avec le temps :

- **L'exposition des données.** Un assistant qui fouille les contenus de l'entreprise montre à chaque utilisateur tout ce qu'il a techniquement le droit de voir. Si les droits sur les dossiers et les sites partagés sont trop larges, l'assistant rend ce surpartage visible en quelques secondes.
- **L'injection de prompt.** Un texte caché dans un document, un e-mail ou une page web peut contenir des instructions que l'agent exécute. L'OWASP la classe en tête des risques des applications fondées sur des modèles de langage. Plus un agent a de sources de données et d'actions, plus l'exposition est grande.

## Une routine mensuelle pour garder le contrôle

| Fréquence | Que faire | Qui |
|---|---|---|
| Après chaque changement, y compris les versions de l'éditeur | Rejouer un jeu fixe de conversations de test et comparer les réponses | Équipe plateforme |
| Chaque semaine | Lire un échantillon de vraies conversations, surtout les escalades et les avis négatifs | Responsable de l'agent |
| Chaque mois | Revoir quatre indicateurs : taux de résolution, taux d'escalade, avis des utilisateurs, coût par conversation | Responsable de l'agent et sponsor métier |
| Chaque trimestre | Revoir les droits, les sources de données et les actions ; retirer ce qui ne sert plus | Équipe plateforme et sécurité |

Tenez un journal des modifications pour chaque agent : ce qui a changé, quand, pourquoi, et qui l'a validé. C'est le premier document qu'un contrôleur demandera, et le moyen le plus rapide de comprendre un changement de comportement soudain.

## Qui est responsable de l'agent

Donnez à chaque agent un responsable nommé, une personne et non une équipe, capable de répondre à tout moment à trois questions : que fait l'agent, le fait-il bien, et qu'est-ce qui a changé en dernier ? Pour les agents utilisés dans des processus sensibles, l'AI Act en fait une obligation : les déployeurs de systèmes à haut risque doivent en surveiller le fonctionnement et signaler les incidents graves.

`,
      faq: [
        {
          q: "À quelle fréquence tester un agent IA après sa mise en service ?",
          a: "Après chaque changement, y compris les versions de l'éditeur, rejouez un jeu fixe de conversations de test. Ajoutez une relecture hebdomadaire d'un échantillon de vraies conversations et une revue mensuelle des indicateurs de résolution, d'escalade, d'avis et de coût.",
        },
        {
          q: "Pourquoi un agent IA se dégrade-t-il avec le temps ?",
          a: "Ses sources de connaissance vieillissent, l'éditeur fait évoluer la plateforme et parfois le modèle, les utilisateurs posent de nouveaux types de questions et les intégrations changent. Rien de tout cela n'apparaît comme un message d'erreur.",
        },
        {
          q: "Qui doit être responsable d'un agent IA en production ?",
          a: "Une personne nommée, capable de dire à tout moment ce que fait l'agent, s'il le fait bien et ce qui a changé en dernier. Une équipe n'est pas un responsable.",
        },
      ],
    },
  },
};

export default article;
