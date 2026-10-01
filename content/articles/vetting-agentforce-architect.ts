import type { Article } from "./types";

const article: Article = {
  id: "vetting-agentforce-architect",
  status: "draft",
  published: "2026-10-01",
  updated: "2026-10-01",
  category: { en: "Hiring guide", fr: "Guide de recrutement" },
  practices: ["salesforce"],
  versions: {
    en: {
      slug: "how-to-vet-senior-agentforce-architect-interview-questions",
      title: "How to vet a senior Agentforce architect: 10 interview questions",
      description:
        "Ten interview questions to tell a senior Agentforce architect from someone who has only done the trail: grounding, guardrails, testing, costs and governance.",
      keyword: "Agentforce architect interview questions",
      takeaways: [
        "Certifications prove that someone studied Agentforce. Only questions about agents they have put into production show whether they can deliver one.",
        "Good answers name a real use case, the data behind it, what went wrong and how it was measured. Weak answers stay on features.",
        "Ask at least one question on testing, one on data and one on governance: these are the three areas where projects fail after the demo.",
      ],
      body: `
Agentforce profiles are scarce, and many CVs now carry the word. Certifications such as Agentforce Specialist show that a consultant has studied the platform. They do not show that the person has taken an agent from demo to production in a real Salesforce org, with real data and real users. These ten questions are the ones our peer interviewers use to make that difference visible. Each comes with what a strong answer sounds like.

## Experience in production

**1. "Tell me about the last agent you put into production. What did it do, for whom, and how many conversations does it handle?"**
A strong answer names a use case, a user population and an order of magnitude. Be wary of answers that describe a proof of concept or a sandbox.

**2. "What did you change in the first month after go-live, and why?"**
Every agent needs adjustment once real users arrive: topics that overlap, actions triggered at the wrong moment, answers that are too long. Someone who has run one in production has a concrete list.

## Data and grounding

**3. "Where did the agent's knowledge come from, and how did you keep it current?"**
Look for a clear view of the data sources (knowledge articles, Data 360, external systems), who owns them, and how stale content is detected. An agent is only as good as the data it is grounded on.

**4. "How did you decide what the agent was allowed to read and to do?"**
A senior architect talks about the agent's permissions, least-privilege access, and the difference between reading data and running actions that change records.

## Design

**5. "How do you split an agent into topics and actions, and when do you create a second agent instead?"**
You want trade-offs, not a definition: clarity of instructions, overlap between topics, maintainability, and when a deterministic flow is better than a reasoning step.

**6. "When should the agent hand over to a human, and how is the context passed on?"**
Escalation design separates production experience from demos: thresholds, sensitive topics, and handover to service agents with the conversation history.

## Testing and trust

**7. "How did you test the agent before go-live, and how do you test it after each change?"**
Expect test scenarios written in advance, regression tests after each change, and a way to review real conversations. "We tested it manually" is not enough at enterprise scale.

**8. "What protections did you rely on for sensitive data and harmful outputs?"**
A strong answer explains what the Einstein Trust Layer covers (such as masking and toxicity detection) and, just as important, what it does not cover and had to be handled in design.

## Costs and governance

**9. "How did you estimate and monitor the running cost of the agent?"**
Agent usage is billed. A senior profile has an opinion on what drives consumption and how to track cost per conversation or per case.

**10. "If an auditor asked tomorrow how this agent is controlled, what would you show them?"**
Since the EU AI Act, the company that deploys an agent must be able to show who is accountable, what the agent does and that people know they are talking to an AI. Good architects build that evidence as they go: documented design decisions, test results, change history.

## How to use these questions

Pick five or six, depending on the role. Let the candidate talk for several minutes on each, and ask "how did you know?" whenever a result is mentioned. Then check one or two claims with a reference from the project. At 56North Experts, a senior practitioner of the same platform runs this interview, and the client receives the written assessment with the shortlist.
`,
    },
    fr: {
      slug: "recruter-architecte-agentforce-senior-questions-entretien",
      title: "Recruter un architecte Agentforce senior : 10 questions d'entretien",
      description:
        "Dix questions d'entretien pour distinguer un architecte Agentforce senior d'un profil qui n'a fait que se former : données, garde-fous, tests, coûts et gouvernance.",
      keyword: "architecte Agentforce questions entretien",
      takeaways: [
        "Les certifications prouvent qu'une personne a étudié Agentforce. Seules les questions sur des agents qu'elle a mis en production montrent si elle sait en livrer un.",
        "Une bonne réponse cite un cas réel, les données utilisées, ce qui s'est mal passé et la façon dont le résultat a été mesuré. Une réponse faible reste sur les fonctionnalités.",
        "Posez au moins une question sur les tests, une sur les données et une sur la gouvernance : c'est là que les projets échouent après la démonstration.",
      ],
      body: `
Les profils Agentforce sont rares, et le mot figure désormais sur beaucoup de CV. Une certification comme Agentforce Specialist montre qu'un consultant a étudié la plateforme. Elle ne montre pas qu'il a fait passer un agent de la démonstration à la production, dans une vraie org Salesforce, avec de vraies données et de vrais utilisateurs. Voici les dix questions que nos évaluateurs pairs utilisent pour rendre cette différence visible, chacune avec ce qu'une bonne réponse contient.

## L'expérience en production

**1. « Parlez-moi du dernier agent que vous avez mis en production. Que faisait-il, pour qui, et combien de conversations traite-t-il ? »**
Une bonne réponse cite un cas d'usage, une population d'utilisateurs et un ordre de grandeur. Méfiez-vous des réponses qui décrivent une preuve de concept ou un bac à sable.

**2. « Qu'avez-vous modifié le premier mois après la mise en service, et pourquoi ? »**
Tout agent se règle une fois les vrais utilisateurs arrivés : des topics qui se chevauchent, des actions déclenchées au mauvais moment, des réponses trop longues. Quelqu'un qui en a exploité un en production a une liste concrète.

## Les données et l'ancrage

**3. « D'où venaient les connaissances de l'agent, et comment les teniez-vous à jour ? »**
Cherchez une vision claire des sources (articles de connaissance, Data 360, systèmes externes), de leurs responsables, et de la façon de repérer un contenu périmé. Un agent ne vaut que ce que valent les données sur lesquelles il s'appuie.

**4. « Comment avez-vous décidé de ce que l'agent avait le droit de lire et de faire ? »**
Un architecte senior parle des permissions de l'agent, du moindre privilège, et de la différence entre lire des données et lancer des actions qui modifient des enregistrements.

## La conception

**5. « Comment découpez-vous un agent en topics et en actions, et quand créez-vous plutôt un second agent ? »**
Vous attendez des arbitrages, pas une définition : clarté des instructions, chevauchement des topics, maintenabilité, et les cas où un flux déterministe vaut mieux qu'une étape de raisonnement.

**6. « Quand l'agent doit-il passer la main à un humain, et comment le contexte est-il transmis ? »**
La conception de l'escalade distingue l'expérience de production des démonstrations : seuils, sujets sensibles, transfert vers un conseiller avec l'historique de la conversation.

## Les tests et la confiance

**7. « Comment avez-vous testé l'agent avant la mise en service, et comment le testez-vous après chaque modification ? »**
Attendez-vous à des scénarios de test écrits à l'avance, des tests de non-régression après chaque changement et une façon de relire les vraies conversations. « Nous l'avons testé à la main » ne suffit pas à l'échelle d'une grande entreprise.

**8. « Sur quelles protections vous êtes-vous appuyé pour les données sensibles et les réponses inappropriées ? »**
Une bonne réponse explique ce que couvre l'Einstein Trust Layer (par exemple le masquage et la détection de toxicité) et, tout aussi important, ce qu'il ne couvre pas et qu'il a fallu traiter dans la conception.

## Les coûts et la gouvernance

**9. « Comment avez-vous estimé puis suivi le coût de fonctionnement de l'agent ? »**
L'usage des agents est facturé. Un profil senior sait ce qui fait monter la consommation et comment suivre un coût par conversation ou par dossier.

**10. « Si un contrôleur demandait demain comment cet agent est maîtrisé, que lui montreriez-vous ? »**
Depuis l'AI Act, l'entreprise qui déploie un agent doit pouvoir montrer qui en répond, ce que fait l'agent et que les personnes savent qu'elles s'adressent à une IA. Un bon architecte construit ces preuves au fil du projet : décisions de conception documentées, résultats de tests, historique des modifications.

## Comment utiliser ces questions

Choisissez-en cinq ou six selon le poste. Laissez le candidat parler plusieurs minutes sur chacune, et demandez « comment le saviez-vous ? » dès qu'un résultat est cité. Vérifiez ensuite une ou deux affirmations auprès d'une référence du projet. Chez 56North Experts, cet entretien est mené par un praticien senior de la même plateforme, et le client reçoit l'évaluation écrite avec la sélection de profils.
`,
    },
  },
};

export default article;
