import type { Article } from "./types";

const article: Article = {
  id: "staff-augmentation-vs-integrator",
  status: "draft",
  published: "2026-10-01",
  updated: "2026-10-01",
  category: { en: "Buying guide", fr: "Guide d'achat" },
  practices: ["salesforce", "microsoft", "servicenow"],
  versions: {
    en: {
      slug: "staff-augmentation-vs-systems-integrator-ai-project",
      title: "Staff augmentation or systems integrator for an AI project: how to choose",
      description:
        "Staff augmentation or a systems integrator for your AI project on Salesforce, Microsoft or SAP? Five questions to decide, and the hybrid model most enterprises end up with.",
      keyword: "staff augmentation vs systems integrator AI",
      takeaways: [
        "Choose a systems integrator when the scope is fixed, the outcome can be contracted, and you accept that the know-how leaves with the vendor.",
        "Choose staff augmentation when the scope will move, your team must own the result, and you need one or two rare senior profiles rather than a whole project team.",
        "Most enterprise AI programmes end up hybrid: an integrator for the platform build, a few senior experts embedded in the client team to own design decisions and governance.",
      ],
      body: `
An AI project on an enterprise platform (Agentforce on Salesforce, Copilot Studio on Microsoft, Joule on SAP, Now Assist on ServiceNow) can be delivered in two ways. You can buy a **project** from a systems integrator, or you can add **people** to your own team through staff augmentation. Both work. They fail for different reasons, so the choice depends less on price than on what you want to own at the end.

## What each model actually buys

| | Systems integrator | Staff augmentation |
|---|---|---|
| What you buy | An outcome, delivered by the integrator's team and method | Named experts who work inside your team, under your lead |
| Who decides | The integrator, within the contract | You |
| Pricing | Fixed price or capped budget, plus change requests | Daily rate, month by month |
| Knowledge at the end | Mostly with the integrator, plus documentation | With your team |
| Typical failure | Scope changes turn into change requests; juniors on site, seniors in the sales pitch | You lack someone to steer; experts wait for decisions |

## Five questions to decide

**1. Is the scope stable?** First AI use cases rarely are. You will learn from the first agent in production what the second should do. A fixed-price contract turns every learning into a change request. If you cannot write the acceptance criteria today, staff augmentation is usually safer.

**2. Who must own the result?** An AI agent is not delivered once: prompts, grounding data, guardrails and costs need tuning every month. If your team will run it, your team must understand why it was built that way. Embedded experts transfer that understanding by working alongside your people.

**3. Do you need a team or a profile?** Many AI projects are blocked by one missing skill, such as an architect who has already shipped an agent in a regulated company, rather than by a lack of hands. Buying a whole project to get one person is expensive.

**4. Can you steer?** Staff augmentation assumes someone on your side sets priorities and takes decisions. Without a product owner or a delivery lead, experts lose time. In that case an integrator, who brings its own management, is the better option.

**5. Who will be accountable to an auditor?** Under the EU AI Act, the company that deploys an AI system carries its own obligations, whoever built it. Keeping design decisions and evidence inside your team makes that accountability easier to demonstrate.

## The hybrid model most enterprises end up with

In practice, large programmes combine both. The integrator runs the platform build and the volume work. Two or three senior experts, embedded in the client team, own the architecture, review what the integrator delivers and keep governance in-house. This gives you the integrator's capacity without handing it your design authority.

## Questions to ask before you sign either contract

- Who exactly will work on the project, and can we interview them?
- How many AI use cases on this platform has each person put into production, and where?
- What happens if a person is not the right fit after two weeks?
- How will knowledge be transferred to our team, and how will we check it?
- Who documents the risk classification and the evidence the AI Act requires?

If the answers are vague, the risk is the same whichever model you choose.
`,
    },
    fr: {
      slug: "regie-ou-integrateur-projet-ia",
      title: "Régie ou intégrateur pour un projet IA : comment choisir",
      description:
        "Régie ou intégrateur pour votre projet IA sur Salesforce, Microsoft ou SAP ? Cinq questions pour trancher, et le modèle hybride vers lequel convergent les grandes entreprises.",
      keyword: "régie ou intégrateur projet IA",
      takeaways: [
        "Choisissez un intégrateur quand le périmètre est figé, que le résultat peut se contractualiser et que vous acceptez que le savoir-faire reparte avec lui.",
        "Choisissez la régie quand le périmètre va bouger, que votre équipe doit maîtriser le résultat et qu'il vous manque un ou deux profils seniors rares plutôt qu'une équipe projet entière.",
        "La plupart des programmes IA finissent hybrides : un intégrateur pour la construction, quelques experts seniors intégrés à l'équipe client pour garder la main sur l'architecture et la gouvernance.",
      ],
      body: `
Un projet IA sur une plateforme d'entreprise (Agentforce sur Salesforce, Copilot Studio chez Microsoft, Joule chez SAP, Now Assist chez ServiceNow) peut se mener de deux façons. Vous pouvez acheter un **projet** à un intégrateur, ou renforcer votre propre équipe avec des **personnes** en régie. Les deux fonctionnent. Ils échouent pour des raisons différentes : le choix dépend moins du prix que de ce que vous voulez maîtriser à la fin.

## Ce que chaque modèle achète vraiment

| | Intégrateur | Régie |
|---|---|---|
| Ce que vous achetez | Un résultat, livré par l'équipe et la méthode de l'intégrateur | Des experts nommés, qui travaillent dans votre équipe, sous votre direction |
| Qui décide | L'intégrateur, dans le cadre du contrat | Vous |
| Prix | Forfait ou budget plafonné, plus les avenants | Taux journalier, mois par mois |
| Le savoir à la fin | Surtout chez l'intégrateur, plus la documentation | Dans votre équipe |
| Échec typique | Chaque changement devient un avenant ; des juniors sur le terrain, des seniors dans la proposition commerciale | Personne pour piloter ; les experts attendent des décisions |

## Cinq questions pour trancher

**1. Le périmètre est-il stable ?** Les premiers cas d'usage IA le sont rarement. C'est le premier agent en production qui vous apprend ce que doit faire le second. Un forfait transforme chaque apprentissage en avenant. Si vous ne savez pas écrire les critères de recette aujourd'hui, la régie est en général plus sûre.

**2. Qui doit maîtriser le résultat ?** Un agent IA ne se livre pas une fois pour toutes : instructions, données d'ancrage, garde-fous et coûts se règlent chaque mois. Si votre équipe doit l'exploiter, elle doit comprendre pourquoi il a été construit ainsi. Des experts intégrés transmettent cette compréhension en travaillant aux côtés de vos équipes.

**3. Vous manque-t-il une équipe ou un profil ?** Beaucoup de projets IA sont bloqués par une compétence absente, par exemple un architecte qui a déjà mis un agent en production dans une entreprise régulée, plutôt que par un manque de bras. Acheter un projet entier pour obtenir une personne coûte cher.

**4. Pouvez-vous piloter ?** La régie suppose qu'une personne, chez vous, fixe les priorités et tranche. Sans responsable produit ni chef de projet, les experts perdent du temps. Dans ce cas, un intégrateur, qui apporte son propre pilotage, est le meilleur choix.

**5. Qui répondra devant un contrôleur ?** Avec l'AI Act, l'entreprise qui déploie un système d'IA porte ses propres obligations, quel que soit celui qui l'a construit. Garder les décisions de conception et les preuves dans votre équipe rend cette responsabilité plus facile à démontrer.

## Le modèle hybride vers lequel convergent les grandes entreprises

En pratique, les grands programmes combinent les deux. L'intégrateur conduit la construction et absorbe le volume. Deux ou trois experts seniors, intégrés à l'équipe client, portent l'architecture, relisent ce que livre l'intégrateur et gardent la gouvernance en interne. Vous profitez ainsi de la capacité de l'intégrateur sans lui confier l'autorité sur la conception.

## Les questions à poser avant de signer, dans les deux cas

- Qui, exactement, travaillera sur le projet, et pouvons-nous les recevoir en entretien ?
- Combien de cas d'usage IA chacun a-t-il mis en production sur cette plateforme, et où ?
- Que se passe-t-il si une personne ne convient pas au bout de deux semaines ?
- Comment le savoir sera-t-il transmis à notre équipe, et comment le vérifierons-nous ?
- Qui documente la classification des risques et les preuves qu'exige l'AI Act ?

Si les réponses restent floues, le risque est le même, quel que soit le modèle choisi.
`,
    },
  },
};

export default article;
