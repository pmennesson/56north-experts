import type { Article } from "./types";

const article: Article = {
  id: "agentforce-go-live-checklist",
  status: "draft",
  published: "2026-10-01",
  updated: "2026-10-01",
  pillar: "integrate",
  category: { en: "Integrate", fr: "Intégrer" },
  practices: ["salesforce"],
  sources: [
    { title: "Salesforce: Agentforce", url: "https://www.salesforce.com/agentforce/" },
    { title: "OWASP Top 10 for Large Language Model Applications", url: "https://genai.owasp.org/llm-top-10/" },
    { title: "Regulation (EU) 2024/1689 (AI Act), Article 50", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
  versions: {
    en: {
      slug: "agentforce-agent-go-live-checklist",
      title: "Putting an Agentforce agent into production: a 12-point checklist",
      description:
        "Before an Agentforce agent goes live: scope, data, permissions, testing, escalation, costs and AI Act transparency. A 12-point checklist for Salesforce teams.",
      keyword: "Agentforce go-live checklist",
      niche: ["Agentforce testing before go-live", "Agentforce agent permissions least privilege", "Agentforce human handoff", "Einstein Trust Layer limits", "Agentforce AI disclosure EU"],
      takeaways: [
        "Most Agentforce agents fail after the demo for the same reasons: grounding data nobody owns, permissions that are too wide, no test set, no clear handover to a human.",
        "Check scope, data, permissions and tests before go-live; escalation, costs and transparency on the day; ownership and monitoring the week after.",
        "A customer-facing agent must tell people they are talking to an AI: that has been a legal requirement in the EU since 2 August 2026.",
      ],
      body: `
An Agentforce demo takes a few days. An agent that holds up in front of real customers or employees takes more discipline. This checklist gathers the points that most often separate the two. Use it as a go/no-go review with your platform team, your business owner and your security team.

## Before go-live: scope and data

- **One job, written down.** Describe in two sentences what the agent does, for whom, and what it must never do. Every topic and action should trace back to this.
- **Topics that do not overlap.** If two topics could answer the same request, the agent will hesitate between them. Merge or sharpen the instructions.
- **Grounding data with an owner.** List every source the agent answers from: knowledge articles, Data 360 objects, external systems. Give each one an owner and an update rule.
- **No sensitive data it does not need.** Remove fields and objects the agent has no reason to read. What it cannot read, it cannot leak.

## Before go-live: permissions and tests

- **Least privilege for the agent user.** Check what the agent can read and, above all, what records its actions can create or change. Separate read-only actions from actions that write.
- **A written test set.** At least a few dozen realistic requests, including off-topic ones, ambiguous ones and attempts to make the agent ignore its instructions. Record the expected behaviour for each.
- **Results kept as evidence.** Save the test results with the date and the version tested. You will replay them after every change.

## On go-live day

- **A clear handover to a human.** Define when the agent hands over (sensitive topics, low confidence, explicit request) and check that the service agent receives the conversation history.
- **Transparency notice.** Tell users they are talking to an AI, in the conversation itself. In the EU this is required by Article 50 of the AI Act since 2 August 2026.
- **A cost baseline.** Note the expected volume and estimate the consumption per conversation, so that the first invoice is not the first measurement.

## In the first weeks

- **A named owner.** One person who reads conversation samples every week, follows the indicators and approves changes.
- **A change log.** Every change to instructions, topics, actions or data sources, with the date, the reason and who approved it.

## Common mistakes

- Launching to all users at once instead of a pilot group.
- Treating the Einstein Trust Layer as the whole security design: it protects the exchange with the model, not the permissions you give the agent.
- Measuring success by the number of conversations instead of the share of requests actually resolved.
- Forgetting the agent after go-live: knowledge ages, and each Salesforce release can change behaviour.
`,
      faq: [
        {
          q: "How many test cases does an Agentforce agent need before go-live?",
          a: "Enough to cover each topic and action, plus off-topic, ambiguous and manipulation attempts. For a focused agent, a few dozen written cases with expected behaviour is a sensible starting point; replay them after every change.",
        },
        {
          q: "Does a Salesforce agent have to say it is an AI?",
          a: "In the EU, yes. Since 2 August 2026, Article 50 of the AI Act requires that people are informed when they interact with an AI system, unless it is obvious from the context.",
        },
        {
          q: "Is the Einstein Trust Layer enough to secure an agent?",
          a: "No. It protects the exchange with the model, for example through data masking and toxicity detection. What the agent is allowed to read and change still depends on the permissions and actions you design.",
        },
      ],
    },
    fr: {
      slug: "mise-en-production-agent-agentforce-checklist",
      title: "Mettre un agent Agentforce en production : la check-list en 12 points",
      description:
        "Avant la mise en service d'un agent Agentforce : périmètre, données, droits, tests, escalade, coûts et transparence AI Act. Une check-list en 12 points pour les équipes Salesforce.",
      keyword: "mise en production agent Agentforce",
      niche: ["tester un agent Agentforce avant mise en production", "droits agent Agentforce moindre privilège", "escalade agent Agentforce vers conseiller", "limites Einstein Trust Layer", "agent Agentforce mention IA obligatoire"],
      takeaways: [
        "La plupart des agents Agentforce échouent après la démonstration pour les mêmes raisons : des données d'ancrage sans responsable, des droits trop larges, aucun jeu de tests, pas de passage clair vers un humain.",
        "Vérifiez le périmètre, les données, les droits et les tests avant la mise en service ; l'escalade, les coûts et la transparence le jour J ; le responsable et le suivi la semaine suivante.",
        "Un agent face aux clients doit dire qu'il est une IA : c'est une obligation légale dans l'Union européenne depuis le 2 août 2026.",
      ],
      body: `
Une démonstration Agentforce se monte en quelques jours. Un agent qui tient face à de vrais clients ou de vrais salariés demande plus de rigueur. Cette check-list réunit les points qui séparent le plus souvent les deux. Utilisez-la comme revue « go / no go » avec votre équipe plateforme, votre responsable métier et votre équipe sécurité.

## Avant la mise en service : périmètre et données

- **Une mission, écrite.** Décrivez en deux phrases ce que fait l'agent, pour qui, et ce qu'il ne doit jamais faire. Chaque topic et chaque action doit s'y rattacher.
- **Des topics qui ne se chevauchent pas.** Si deux topics peuvent répondre à la même demande, l'agent hésitera entre les deux. Fusionnez-les ou précisez les instructions.
- **Des données d'ancrage avec un responsable.** Listez toutes les sources sur lesquelles l'agent s'appuie : articles de connaissance, objets Data 360, systèmes externes. Donnez à chacune un responsable et une règle de mise à jour.
- **Aucune donnée sensible inutile.** Retirez les champs et les objets que l'agent n'a aucune raison de lire. Ce qu'il ne peut pas lire, il ne peut pas le divulguer.

## Avant la mise en service : droits et tests

- **Le moindre privilège pour l'utilisateur de l'agent.** Vérifiez ce que l'agent peut lire et, surtout, quels enregistrements ses actions peuvent créer ou modifier. Séparez les actions en lecture seule des actions qui écrivent.
- **Un jeu de tests écrit.** Au moins quelques dizaines de demandes réalistes, dont des demandes hors sujet, ambiguës et des tentatives pour faire ignorer ses instructions à l'agent. Notez le comportement attendu pour chacune.
- **Des résultats conservés comme preuves.** Enregistrez les résultats avec la date et la version testée. Vous les rejouerez après chaque modification.

## Le jour de la mise en service

- **Un passage clair vers un humain.** Définissez quand l'agent passe la main (sujets sensibles, faible confiance, demande explicite) et vérifiez que le conseiller reçoit l'historique de la conversation.
- **La mention de transparence.** Dites aux utilisateurs qu'ils s'adressent à une IA, dans la conversation elle-même. Dans l'Union européenne, l'article 50 de l'AI Act l'impose depuis le 2 août 2026.
- **Une base de coût.** Notez le volume attendu et estimez la consommation par conversation, pour que la première facture ne soit pas la première mesure.

## Les premières semaines

- **Un responsable nommé.** Une personne qui lit chaque semaine un échantillon de conversations, suit les indicateurs et valide les modifications.
- **Un journal des modifications.** Chaque changement d'instructions, de topics, d'actions ou de sources de données, avec la date, la raison et la personne qui l'a validé.

## Les erreurs fréquentes

- Ouvrir l'agent à tous les utilisateurs d'un coup au lieu d'un groupe pilote.
- Considérer l'Einstein Trust Layer comme toute la sécurité : il protège l'échange avec le modèle, pas les droits que vous donnez à l'agent.
- Mesurer le succès au nombre de conversations plutôt qu'à la part des demandes réellement résolues.
- Oublier l'agent après la mise en service : les connaissances vieillissent, et chaque version de Salesforce peut changer son comportement.
`,
      faq: [
        {
          q: "Combien de cas de test faut-il pour un agent Agentforce avant sa mise en service ?",
          a: "De quoi couvrir chaque topic et chaque action, plus des demandes hors sujet, ambiguës et des tentatives de manipulation. Pour un agent ciblé, quelques dizaines de cas écrits avec le comportement attendu sont un bon point de départ ; rejouez-les après chaque modification.",
        },
        {
          q: "Un agent Salesforce doit-il dire qu'il est une IA ?",
          a: "Dans l'Union européenne, oui. Depuis le 2 août 2026, l'article 50 de l'AI Act impose d'informer les personnes qu'elles interagissent avec un système d'IA, sauf si c'est évident vu le contexte.",
        },
        {
          q: "L'Einstein Trust Layer suffit-il à sécuriser un agent ?",
          a: "Non. Il protège l'échange avec le modèle, par exemple grâce au masquage des données et à la détection de toxicité. Ce que l'agent a le droit de lire et de modifier dépend toujours des droits et des actions que vous concevez.",
        },
      ],
    },
  },
};

export default article;
