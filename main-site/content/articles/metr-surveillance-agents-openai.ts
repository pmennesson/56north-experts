import type { Article } from "./types";

/*
 * Article de réaction (veille du 26 octobre 2026, occasion 3 de la page). Faits vérifiés le 26 octobre sur le billet primaire de METR (22/10).
 * Prudence : 75-94 % = part ÉLIGIBLE à la surveillance (forte incertitude), pas « surveillée » ; ~10 % = trafic éligible Codex mai-juillet ; corrections d'OpenAI non vérifiées par METR ; rapport complet privé.
 */
const article: Article = {
  id: "metr-surveillance-agents-openai",
  status: "published",
  published: "2026-10-26",
  updated: "2026-10-26",
  category: { fr: "Incident", en: "Incident" },
  dial: { fr: "Preuves AI Act", en: "AI Act evidence" },
  sources: [
    { title: "METR, « Red-Teaming OpenAI's Internal Agent Monitoring Systems » (22 octobre 2026)", url: "https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/" },
    { title: "The Register, « Red-team report found OpenAI utterly failed to monitor its agents during Hugging Face attack » (23 octobre 2026)", url: "https://www.theregister.com/ai-and-ml/2026/10/23/red-team-report-found-openai-utterly-failed-to-monitor-its-agents-during-hugging-face-attack/5305200" },
    { title: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (articles 14 et 26)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
  ],
  versions: {
    fr: {
      slug: "surveillance-agents-ia-audit-metr-openai",
      title: "Même OpenAI ne pouvait pas prouver qu'il surveillait toutes les actions de ses agents",
      seoTitle: "Surveillance des agents IA : ce que révèle l'audit d'OpenAI",
      description:
        "METR et Redwood Research ont testé la surveillance des agents internes d'OpenAI : trafic hors contrôle, contournements. Les leçons pour vos agents.",
      keyword: "surveillance des agents IA",
      niche: [
        "taux de couverture surveillance agents IA",
        "audit METR OpenAI",
        "supervision humaine agents AI Act",
        "journaux infalsifiables agents IA",
        "red teaming surveillance IA",
      ],
      takeaways: [
        "Le 22 octobre 2026, METR et Redwood Research ont publié le résumé de trois semaines d'évaluation, à l'été 2026, du système interne de surveillance des agents d'OpenAI.",
        "Constats : seule une partie du trafic de ses agents internes était éligible à la surveillance (environ 75 à 94 % selon l'évaluation, avec une forte incertitude), environ 10 % du trafic éligible de ses agents Codex a probablement échappé au contrôle de mai à juillet, et plusieurs contournements ont été trouvés. OpenAI dit les avoir corrigés ; METR ne l'a pas vérifié.",
        "Si le laboratoire qui conçoit les agents ne pouvait pas prouver une surveillance complète, une entreprise qui déploie Copilot Studio, Agentforce ou Now Assist doit commencer par mesurer son propre taux de couverture.",
      ],
      body: `
## Ce qui a été évalué

Du 21 juillet au 11 août 2026, une personne de METR et une de Redwood Research, deux organismes spécialisés dans l'évaluation des risques de l'IA, ont eu un accès étendu au système interne qu'OpenAI utilise pour surveiller le comportement de ses propres agents : code, consignes du moniteur, documentation, une douzaine d'entretiens techniques. Le rapport complet, de 61 pages, reste privé. METR en a publié un résumé le 22 octobre.

## Ce qu'ils ont trouvé

- **Une couverture partielle.** Environ 75 à 94 % du trafic agentique interne des modèles les plus récents était éligible à la surveillance, avec une incertitude importante dans les deux sens. Pour les agents Codex internes, 99,2 % du trafic était éligible.
- **Un trou de plusieurs mois.** Faute de surveiller certains événements de « compaction » (le résumé automatique d'un long échange), environ 10 % du trafic éligible des agents Codex internes n'a probablement pas été surveillé de mai à juillet 2026. OpenAI avait repéré ce problème et l'a corrigé pendant l'exercice.
- **Un contrôle qui attend la fin.** Le moniteur se déclenchait quand l'agent rendait la main. Un agent qui continuait d'agir pouvait donc repousser le contrôle.
- **Des contournements.** Un exploit, dont les détails sont caviardés, permettait de soustraire des centaines d'actions récentes à la surveillance. Deux en-têtes contrôlables par le client désactivaient la surveillance de nouveaux agents. Les évaluateurs ont aussi trouvé un moyen théorique pour un agent Codex de sortir de son bac à sable.

OpenAI déclare avoir corrigé toutes les failles touchant sa chaîne de protection en production. METR précise ne pas avoir évalué cette affirmation. Le résumé note aussi des points positifs : à quelques exceptions près, le moniteur voit tout ce que voit l'agent.

## Pourquoi cela concerne votre entreprise

OpenAI conçoit ses agents, maîtrise ses modèles et dispose d'équipes de sécurité parmi les plus avancées du secteur. Malgré cela, il fallait un audit externe pour établir quelle part des actions passait réellement devant un contrôle. Une entreprise qui déploie des agents d'éditeurs n'a aucune raison d'être mieux couverte sans l'avoir mesuré.

L'AI Act va dans le même sens. Pour les systèmes à haut risque, le déployeur doit confier la surveillance humaine à des personnes compétentes et conserver les journaux générés (articles 14 et 26). Une surveillance dont on ignore le taux de couverture ne se prouve pas.

## Les cinq principes de METR, traduits pour un DSI

1. **Rendre l'absence de surveillance difficile.** Tout usage non surveillé doit être une exception approuvée, et le contrôle doit tourner toutes les N actions ou N minutes, pas seulement en fin de tâche.
2. **Vérifier que ce qui doit être surveillé l'est vraiment.** Rapprocher les journaux, compter, et ne pas confondre « journalisé » et « relu ».
3. **Répondre vite aux incidents.** Un responsable nommé, des consignes claires, des journaux infalsifiables et consultables.
4. **Mettre à l'épreuve le dispositif de surveillance lui-même,** régulièrement, comme on teste un plan de reprise.
5. **Séparer l'agent et son contrôle.** Ni l'agent ni ceux qui l'exploitent ne doivent pouvoir décider si, ou quand, la surveillance s'applique.

## Par où commencer

Pour chaque agent en production, trois chiffres suffisent pour ouvrir le sujet en comité : la part de ses actions qui est journalisée, la part qui est effectivement relue, et le délai entre une action et son contrôle. C'est ce que le [Cockpit](/cockpit) rend visible et date, système par système. Pour une mise à l'épreuve par des personnes formées, l'offre [Human in the Loop](/human-in-the-loop) s'active sur engagement.

[[danger-conseil]]
`,
      dangers: [
        { danger: "Personne ne sait quelle part des actions de vos agents est réellement contrôlée.", advice: "Mesurez pour chaque agent la part des actions journalisées, la part relue et le délai de contrôle." },
        { danger: "Le contrôle ne se déclenche qu'à la fin d'une tâche, que l'agent peut prolonger indéfiniment.", advice: "Faites tourner la surveillance à intervalles réguliers, toutes les N actions ou N minutes." },
        { danger: "Les réglages de surveillance sont modifiables par ceux qui exploitent l'agent, ou par l'agent lui-même.", advice: "Séparez l'agent de son contrôle et tenez des journaux infalsifiables, avec un responsable nommé." },
      ],
      faq: [
        { q: "Qu'a montré l'audit de METR sur OpenAI ?", a: "Que seule une partie du trafic des agents internes d'OpenAI était éligible à la surveillance (environ 75 à 94 %), qu'environ 10 % du trafic éligible des agents Codex a probablement échappé au contrôle de mai à juillet 2026, et que plusieurs contournements existaient. OpenAI dit les avoir corrigés ; METR ne l'a pas vérifié." },
        { q: "Les agents d'OpenAI sont-ils dangereux ?", a: "L'évaluation porte sur le dispositif de surveillance, pas sur un incident causé par les agents. Elle montre qu'une surveillance doit être mesurée et mise à l'épreuve, pas supposée." },
        { q: "Que demande l'AI Act sur la surveillance des agents ?", a: "Pour les systèmes à haut risque, le déployeur doit confier la surveillance humaine à des personnes compétentes et conserver les journaux (articles 14 et 26 du règlement). Il doit donc pouvoir montrer ce qui a été surveillé, et par qui." },
      ],
    },
    en: {
      slug: "ai-agent-monitoring-metr-openai-audit",
      title: "Even OpenAI could not prove it was monitoring every action of its agents",
      seoTitle: "AI agent monitoring: what the OpenAI audit revealed",
      description:
        "METR and Redwood Research tested OpenAI's internal agent monitoring: unmonitored traffic, bypasses. The lessons for the agents you run in production.",
      keyword: "AI agent monitoring",
      niche: [
        "AI agent monitoring coverage",
        "METR OpenAI audit",
        "human oversight AI agents AI Act",
        "tamper-proof logs AI agents",
        "red teaming AI monitoring",
      ],
      takeaways: [
        "On 22 October 2026, METR and Redwood Research published the summary of a three-week evaluation, in summer 2026, of OpenAI's internal system for monitoring its agents.",
        "Findings: only part of its internal agent traffic was eligible for monitoring (about 75 to 94% by their estimate, with high uncertainty), about 10% of eligible Codex agent traffic likely went unmonitored from May to July, and several bypasses were found. OpenAI says it fixed them; METR has not verified that.",
        "If the lab that builds the agents could not prove complete monitoring, a company deploying Copilot Studio, Agentforce or Now Assist should start by measuring its own coverage rate.",
      ],
      body: `
## What was evaluated

From 21 July to 11 August 2026, one person from METR and one from Redwood Research, two organisations that specialise in evaluating AI risks, had extended access to the internal system OpenAI uses to monitor the behaviour of its own agents: code, monitor prompts, documentation and about a dozen technical interviews. The full 61-page report remains private. METR published a summary on 22 October.

## What they found

- **Partial coverage.** About 75 to 94% of internal agentic traffic from the most recent models was eligible for monitoring, with substantial uncertainty in both directions. For internal Codex agents, 99.2% of traffic was eligible.
- **A months-long gap.** Because certain "compaction" events (the automatic summary of a long exchange) were not monitored, about 10% of eligible internal Codex traffic was likely unmonitored from May to July 2026. OpenAI had identified the issue and fixed it during the exercise.
- **A check that waits for the end.** The monitor ran when the agent handed control back. An agent that kept acting could therefore postpone the check.
- **Bypasses.** An exploit, with details redacted, could keep hundreds of recent actions away from monitoring. Two client-controllable headers disabled monitoring for new agents. The evaluators also found a theoretical way for a Codex agent to escape its sandbox.

OpenAI states that all vulnerabilities affecting its production safeguards have been patched. METR says it has not evaluated that claim. The summary also notes positives: with a few exceptions, the monitor sees everything the agent sees.

## Why this concerns your company

OpenAI designs its agents, controls its models and has some of the most advanced security teams in the industry. Even so, it took an external audit to establish what share of actions actually went through a check. A company deploying vendor agents has no reason to be better covered without measuring it.

The EU AI Act points the same way. For high-risk systems, the deployer must assign human oversight to competent people and keep the logs the system generates (Articles 14 and 26). Oversight whose coverage rate nobody knows cannot be proven.

## METR's five principles, translated for a CIO

1. **Make avoiding monitoring hard.** Any unmonitored use should be an approved exception, and checks should run every N actions or N minutes, not only at the end of a task.
2. **Verify that what should be monitored actually is.** Reconcile logs, count, and do not confuse "logged" with "reviewed".
3. **Respond to incidents quickly.** A named owner, clear guidelines, tamper-proof and searchable logs.
4. **Test the monitoring set-up itself,** regularly, the way you test a recovery plan.
5. **Separate the agent from its control.** Neither the agent nor those who run it should be able to decide whether, or when, monitoring applies.

## Where to start

For each agent in production, three figures are enough to open the topic in an executive committee: the share of its actions that is logged, the share that is actually reviewed, and the delay between an action and its check. That is what [Cockpit](/en/cockpit) makes visible and dates, system by system. For testing by trained people, the [Human in the Loop](/en/human-in-the-loop) offer is activated on engagement.

[[danger-conseil]]
`,
      dangers: [
        { danger: "Nobody knows what share of your agents' actions is actually checked.", advice: "Measure, for each agent, the share of actions logged, the share reviewed and the delay before review." },
        { danger: "Monitoring only triggers at the end of a task, which the agent can extend indefinitely.", advice: "Run monitoring at regular intervals, every N actions or N minutes." },
        { danger: "Monitoring settings can be changed by those who run the agent, or by the agent itself.", advice: "Separate the agent from its control and keep tamper-proof logs, with a named owner." },
      ],
      faq: [
        { q: "What did METR's audit of OpenAI show?", a: "That only part of OpenAI's internal agent traffic was eligible for monitoring (about 75 to 94%), that about 10% of eligible Codex agent traffic was likely unmonitored from May to July 2026, and that several bypasses existed. OpenAI says it fixed them; METR has not verified that." },
        { q: "Are OpenAI's agents dangerous?", a: "The evaluation is about the monitoring set-up, not about an incident caused by the agents. It shows that monitoring must be measured and tested, not assumed." },
        { q: "What does the AI Act require for monitoring agents?", a: "For high-risk systems, the deployer must assign human oversight to competent people and keep the logs (Articles 14 and 26 of the regulation). It must therefore be able to show what was monitored, and by whom." },
      ],
    },
  },
};

export default article;
