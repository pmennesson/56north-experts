import type { Article } from "./types";

/*
 * Sources opened on 12 October 2026:
 * - blog.google, "Gemini at Work" (8 October 2026, primary): announcement of the Gemini agent, "built-in cost
 *   controls". This short page says nothing about coworker agents, accounts, audit trail, price or dates.
 * - Google Cloud press release "Welcome to Gemini at Work 2026: Introducing the Gemini agent", as distributed
 *   unedited by Zawya (9 October 2026, Dubai dateline, Thomas Kurian): coworker agents, own Workspace account
 *   (email, calendar, Drive, directory), @agents.company.com addresses, own identity "cryptographically attested",
 *   audit trail attributed to the agent, "sees only what you share with it", permissions approved by security
 *   admins, Gemini and Claude models. No price, no date, no spend cap in this text.
 * - NOT opened: the full post on cloud.google.com (welcome-to-gemini-at-work-2026), refused by the fetch tool.
 *   We rely on the Zawya copy of the same release.
 * - Decrypt (8 October 2026), Reworked (9 October 2026), Implicator (9 October 2026): spend caps that pause the
 *   agent, price ("no additional charge" where Gemini Enterprise is available, Google spokesperson to VentureBeat,
 *   as reported by Reworked and Implicator), private preview and GA "around the end of October or early November"
 *   (executives to analysts, Implicator only). All attributed to these outlets, not to Google.
 * - SailPoint "Horizons of Identity Security" 2026-27, read through iTWire (9 October 2026, vendor text) and
 *   Channel Insider (7 October 2026): 340 leaders, 79 %, 2 %, 57 %, 43 %. Not opened: SailPoint's own release.
 * - European Commission, FAQ on Article 50 transparency obligations (applies from 2 August 2026, AI agents cited
 *   as an example) and AI Act Service Desk, text of Article 50 (para. 1, 5).
 * Not opened: Futurum Group analysis listed in the watch note.
 */
const article: Article = {
  id: "google-gemini-agents-collegues-workspace",
  status: "published",
  published: "2026-10-12",
  updated: "2026-10-12",
  pillar: "use",
  category: { en: "Use", fr: "Utiliser" },
  practices: ["google-cloud"],
  sources: [
    { title: "Google: Gemini at Work 2026, announcement of the Gemini agent (8 October 2026)", url: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/" },
    { title: "Google Cloud press release « Welcome to Gemini at Work 2026: Introducing the Gemini agent », distributed by Zawya (9 October 2026)", url: "https://www.zawya.com/en/press-release/companies-news/welcome-to-gemini-at-work-2026-introducing-the-gemini-agent-1586898" },
    { title: "Decrypt: Google Wants Gemini to Be Your Next Coworker, Complete With Its Own Email Address (8 October 2026)", url: "https://decrypt.co/380545/google-gemini-coworker-own-email-address" },
    { title: "Reworked: Google debuts its all-purpose Gemini agent for work (9 October 2026)", url: "https://www.reworked.co/collaboration-productivity/google-debuts-its-all-purpose-gemini-agent-for-work/" },
    { title: "Implicator: Google launches Gemini agent that gives AI coworkers their own Workspace email (9 October 2026)", url: "https://implicator.ai/google-launches-gemini-agent-that-gives-ai-coworkers-their-own-workspace-email/" },
    { title: "SailPoint, Horizons of Identity Security 2026-27, as published by iTWire (9 October 2026)", url: "https://itwire.com/guest-articles/guest-research/sailpoint-report-finds-79-of-enterprises-run-ai-agents-in-production-yet-only-2-have-deployed-purpose-built-security" },
    { title: "European Commission: Transparency obligations under Article 50 AI Act (FAQ)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
    { title: "AI Act Service Desk: Article 50, transparency obligations for providers and deployers of certain AI systems", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
  ],
  versions: {
    en: {
      slug: "google-gemini-coworker-agents-workspace-account",
      title: "Who manages an agent that has its own mailbox? Google gives Gemini coworker agents a Workspace account",
      seoTitle: "Gemini coworker agent Workspace account: who manages it?",
      description:
        "Google's Gemini coworker agents get their own Workspace account, email and directory entry. What it means for owners, Drive sharing, logs and the AI Act.",
      keyword: "Gemini coworker agent Workspace account",
      niche: [
        "Gemini agent own email address",
        "AI agent directory entry governance",
        "Gemini agent audit trail attributed to agent",
        "Gemini agent spend cap pause",
        "AI agent offboarding procedure",
      ],
      takeaways: [
        "On 8 October 2026, Google Cloud announced the Gemini agent. Its coworker agents get their own Workspace account: email address, calendar, Drive and an entry in the company directory. They act under their own identity, and every action is logged in the agent's name.",
        "Google has published neither a price nor a general availability date. Spend caps that pause the agent, a price included in Gemini Enterprise and a private preview are reported by the press, not stated in the Google text we read.",
        "An agent with a mailbox is an account like any other: it needs a named owner, a scope and a leaving procedure. A log in the agent's name says what it did, not which person answers for it.",
      ],
      body: `
On 8 October 2026, at Gemini at Work 2026, Google Cloud presented the Gemini agent, a single agent for work. One of its forms concerns IT directly: the coworker agent. It gets a Workspace account, an email address, a calendar, a Drive and a place in the company directory. For IT, this is no longer a tool. It is one more account to manage.

## What Google announced

These points come from Google Cloud's press release, which we read in the copy distributed by Zawya.

- **A role, not a task.** "You simply describe the role you need, and Gemini creates it." The coworker agent has a defined, persistent role, like a team member.
- **A Workspace account.** Email address (of the form @agents.company.com in Google's example), calendar, Drive and presence in the company directory.
- **Its own identity.** The agent acts under its own identity, not yours. Google writes that this identity is "cryptographically attested and governed like an employee".
- **A log in its name.** Every action is written to an audit trail and attributed to the agent, not to a person.
- **A sharing scope.** The agent "sees only what you share with it". Permissions are approved by the organisation's security administrators.
- **Several models.** The agent orchestrates Google's Gemini models and, already, Claude models.

## Established, reported, not published

| Point | Status | Where it comes from |
|---|---|---|
| Own account, email, calendar, Drive, directory entry | Established | Google Cloud press release |
| Actions logged in the agent's name | Established | Google Cloud press release |
| Spend cap per project that pauses the agent until someone resumes it | Reported | Decrypt, Reworked, Implicator. Google's text only mentions "built-in cost controls". |
| No extra charge where Gemini Enterprise is available | Reported | A Google spokesperson to VentureBeat, according to Reworked and Implicator |
| Private preview, general availability expected late October or early November | Reported | Implicator, citing executives speaking to analysts |
| Price and general availability date | Not published | Google has published neither |
| Whether every agent gets an account, or only coworker agents | Not established | Implicator notes that Google has not said |

## What it changes for you

An agent with a mailbox and a directory entry is an account in its own right. It needs what you require of any account: an owner, a scope and a leaving procedure. The log in the agent's name says what the agent did. It does not say which person answers for it. That answer is yours to write down.

The agent's real scope is the state of your sharing. If it "sees only what you share with it", any folder open to the whole company is readable by it. Existing oversharing on your Drive becomes its playing field.

An agent that writes to third parties from its own address raises the question of informing people. Article 50 of the AI Act has applied since 2 August 2026. It requires providers to design systems that interact directly with people so that those people know they are dealing with an AI, unless it is obvious. The European Commission cites AI agents among its examples. How this applies to an email sent by a coworker agent, and what falls to the company using it, is not settled here: check it with your legal team. Nothing stops you from saying it in the signature in the meantime.

The gap is not specific to Google. In a survey released in early October by SailPoint, a vendor of identity security tools, of 340 identity, IT, cybersecurity and risk leaders: 79% of organisations run AI agents in production, 2% use identity tools built to govern them. 57% say they are confident about meeting regulatory requirements, 43% say they are prepared to produce verifiable evidence in an AI-related audit. SailPoint sells these tools: read these figures as a vendor's.

## The danger, the advice

[[danger-conseil]]

## To decide before switching it on

1. **Who can create a coworker agent.** Restrict it to a group, not to every manager.
2. **Who owns each agent.** One named person per agent, recorded in your AI register on the day it is created.
3. **What it can see.** Review company-wide shares and public links before the first agent arrives.
4. **How to stop it.** A written procedure: suspend the account, hand over mailbox and files, revoke access. The same as for someone leaving.
5. **What it can spend.** A cap per project if your console offers it, otherwise a monthly review of consumption.

## What a solid team does differently

It ties each agent to a person, reads its action log at fixed intervals, and treats the creation of an agent like an arrival and its deletion like a departure. It applies the same grid to agents on other platforms: the vendor changes, the questions stay the same.

This set-up needs people who know Workspace and Google Cloud from the inside. Our [Google Cloud](/experts/google-cloud) experts can frame these choices with your teams. For the governance itself (register, owners, evidence), see [56North](https://56north.io/en).
`,
      dangers: [
        {
          danger: "A manager creates a coworker agent in a few minutes. Nobody in IT knows it exists, and nobody is named as its owner.",
          advice: "Decide before the first activation who can create an agent, and record each one in your AI register with a named owner on the day it is created.",
        },
        {
          danger: "The agent \"sees only what you share with it\", and your Drive already shares too much. Folders open to the whole company become its working material.",
          advice: "Review company-wide shares and public links before activation. The agent's scope is your sharing hygiene.",
        },
        {
          danger: "The log attributes every action to the agent. During an incident or an audit, nobody can say which person answers for it.",
          advice: "Keep, next to each agent, the name of its owner and the person who approved its permissions. Read its log at fixed intervals.",
        },
        {
          danger: "The agent writes to customers or suppliers from its own address, and they do not know they are dealing with an AI.",
          advice: "Say it in the signature, and have your legal team check what Article 50 of the AI Act requires in your case.",
        },
        {
          danger: "A project ends, the agent stays: active account, open mailbox, access still granted.",
          advice: "Write a leaving procedure for agents: suspension, handover of mailbox and files, revocation of access.",
        },
      ],
      faq: [
        {
          q: "What does a Gemini coworker agent get?",
          a: "According to Google Cloud's announcement of 8 October 2026: its own Workspace account, with an email address, a calendar, a Drive and an entry in the company directory. It acts under its own identity, and every action is logged in its name.",
        },
        {
          q: "How much does the Gemini agent cost, and when is it available?",
          a: "Google has published neither a price nor a general availability date. According to Reworked and Implicator, a Google spokesperson said it would come at no extra charge where Gemini Enterprise is available. Implicator reports a private preview and general availability expected around late October or early November.",
        },
        {
          q: "Does the AI Act require saying that an email was written by an agent?",
          a: "Article 50, which has applied since 2 August 2026, requires providers to design systems that interact directly with people so that they know they are dealing with an AI, unless it is obvious. The Commission cites AI agents among its examples. How it applies to an agent's emails, and what falls to the deploying company, is to be checked with your legal team.",
        },
      ],
    },
    fr: {
      slug: "google-gemini-agents-collegues-compte-workspace",
      title: "Qui est le manager d'un agent qui a sa propre boîte mail ? Google donne aux agents Gemini « collègues » un compte Workspace",
      seoTitle: "Agent Gemini « collègue », compte Workspace : quel manager ?",
      description:
        "Les agents Gemini « collègues » de Google ont leur compte Workspace, leur e-mail et leur place dans l'annuaire. Responsable, partages, AI Act : à trancher.",
      keyword: "agent Gemini collègue compte Workspace",
      niche: [
        "agent Gemini adresse e-mail propre",
        "agent IA annuaire entreprise gouvernance",
        "journal d'audit agent Gemini",
        "plafond de dépense agent Gemini pause",
        "procédure de départ agent IA",
      ],
      takeaways: [
        "Le 8 octobre 2026, Google Cloud a annoncé l'agent Gemini. Ses agents « collègues » reçoivent leur propre compte Workspace : adresse e-mail, agenda, Drive et entrée dans l'annuaire de l'entreprise. Ils agissent sous leur propre identité, et chaque action est journalisée au nom de l'agent.",
        "Google n'a publié ni prix ni date de disponibilité générale. Des plafonds de dépense qui mettent l'agent en pause, un prix inclus dans Gemini Enterprise et une préversion privée sont rapportés par la presse, pas écrits dans le texte de Google que nous avons lu.",
        "Un agent qui a une boîte mail est un compte comme un autre : il lui faut un responsable nommé, un périmètre et une procédure de départ. Un journal au nom de l'agent dit ce qu'il a fait, pas quel humain en répond.",
      ],
      body: `
Le 8 octobre 2026, lors de Gemini at Work 2026, Google Cloud a présenté l'agent Gemini, un agent unique pour le travail. Une de ses formes concerne directement la DSI : l'agent « collègue ». Il reçoit un compte Workspace, une adresse e-mail, un agenda, un Drive et une place dans l'annuaire de l'entreprise. Pour l'informatique, ce n'est plus un outil. C'est un compte de plus à gérer.

## Ce que Google a annoncé

Ces points viennent du communiqué de Google Cloud, que nous avons lu dans la version diffusée par Zawya.

- **Un rôle, pas une tâche.** « Vous décrivez simplement le rôle dont vous avez besoin, et Gemini le crée. » L'agent collègue a un rôle défini et durable, comme un membre de l'équipe.
- **Un compte Workspace.** Adresse e-mail (de la forme @agents.company.com dans l'exemple de Google), agenda, Drive et présence dans l'annuaire de l'entreprise.
- **Sa propre identité.** L'agent agit sous son identité, pas sous la vôtre. Google écrit que cette identité est « attestée cryptographiquement et gouvernée comme celle d'un employé ».
- **Un journal à son nom.** Chaque action est inscrite dans une piste d'audit et attribuée à l'agent, pas à une personne.
- **Un périmètre de partage.** L'agent « ne voit que ce que vous partagez avec lui ». Les autorisations sont approuvées par les administrateurs sécurité de l'organisation.
- **Plusieurs modèles.** L'agent orchestre les modèles Gemini de Google et, dès aujourd'hui, des modèles Claude.

## Établi, rapporté, non publié

| Point | Statut | D'où vient l'information |
|---|---|---|
| Compte propre, e-mail, agenda, Drive, entrée dans l'annuaire | Établi | Communiqué de Google Cloud |
| Actions journalisées au nom de l'agent | Établi | Communiqué de Google Cloud |
| Plafond de dépense par projet qui met l'agent en pause jusqu'à ce que quelqu'un le relance | Rapporté | Decrypt, Reworked, Implicator. Le texte de Google parle seulement de « contrôles de coûts intégrés ». |
| Sans surcoût là où Gemini Enterprise est disponible | Rapporté | Un porte-parole de Google à VentureBeat, selon Reworked et Implicator |
| Préversion privée, disponibilité générale attendue fin octobre ou début novembre | Rapporté | Implicator, d'après des dirigeants s'adressant à des analystes |
| Prix et date de disponibilité générale | Non publié | Google n'a publié ni l'un ni l'autre |
| Tous les agents reçoivent-ils un compte, ou seulement les agents collègues ? | Non établi | Implicator note que Google ne l'a pas dit |

## Ce que cela change pour vous

Un agent qui a une boîte mail et une entrée dans l'annuaire est un compte à part entière. Il lui faut ce que vous exigez de tout compte : un responsable, un périmètre et une procédure de départ. Le journal au nom de l'agent dit ce que l'agent a fait. Il ne dit pas quel humain en répond. Cette réponse, c'est à vous de l'écrire.

Le périmètre réel de l'agent, c'est l'état de vos partages. S'il « ne voit que ce que vous partagez avec lui », tout dossier ouvert à toute l'entreprise lui est lisible. Le surpartage déjà présent sur votre Drive devient son terrain.

Un agent qui écrit à des tiers depuis sa propre adresse pose la question de l'information des personnes. L'article 50 de l'AI Act s'applique depuis le 2 août 2026. Il demande aux fournisseurs de concevoir les systèmes qui interagissent directement avec des personnes de sorte qu'elles sachent qu'elles ont affaire à une IA, sauf si c'est évident. La Commission européenne cite les agents d'IA parmi ses exemples. La façon dont cela s'applique à un e-mail envoyé par un agent collègue, et ce qui revient à l'entreprise qui l'utilise, n'est pas tranchée ici : voyez-le avec votre juriste. Rien n'empêche, en attendant, de le dire dans la signature.

Le décalage n'est pas propre à Google. Dans une enquête publiée début octobre par SailPoint, éditeur d'outils de sécurité des identités, auprès de 340 responsables identité, informatique, cybersécurité et risques : 79 % des organisations font tourner des agents d'IA en production, 2 % utilisent des outils d'identité conçus pour les gouverner. 57 % se disent confiantes face aux exigences réglementaires, 43 % se disent prêtes à produire des preuves vérifiables lors d'un audit lié à l'IA. SailPoint vend ces outils : lisez ces chiffres comme ceux d'un éditeur.

## Le danger, le conseil

[[danger-conseil]]

## À trancher avant toute activation

1. **Qui peut créer un agent collègue.** Un groupe restreint, pas chaque manager.
2. **Qui est responsable de chaque agent.** Une personne nommée par agent, inscrite au registre des IA le jour de la création.
3. **Ce qu'il peut voir.** Revoir les partages ouverts à toute l'entreprise et les liens publics avant l'arrivée du premier agent.
4. **Comment on l'arrête.** Une procédure écrite : suspension du compte, transfert de la boîte et des fichiers, révocation des accès. La même que pour un départ.
5. **Ce qu'il peut dépenser.** Un plafond par projet si votre console le propose, sinon une revue mensuelle de la consommation.

## Ce qu'une équipe solide fait différemment

Elle rattache chaque agent à un humain, relit son journal d'actions à intervalle fixe, et traite la création d'un agent comme une arrivée et sa suppression comme un départ. Elle applique la même grille aux agents des autres plateformes : l'éditeur change, les questions restent.

Cette mise en place demande des personnes qui connaissent Workspace et Google Cloud de l'intérieur. Nos experts [Google Cloud](/fr/experts/google-cloud) peuvent cadrer ces choix avec vos équipes. Pour la gouvernance elle-même (registre, responsables, preuves), voir [56North](https://56north.io).
`,
      dangers: [
        {
          danger: "Un manager crée un agent collègue en quelques minutes. Personne à la DSI ne sait qu'il existe, et personne n'en est nommé responsable.",
          advice: "Décidez avant la première activation qui peut créer un agent, et inscrivez chacun au registre des IA avec un responsable nommé, le jour de sa création.",
        },
        {
          danger: "L'agent « ne voit que ce que vous partagez avec lui », et votre Drive partage déjà trop. Les dossiers ouverts à toute l'entreprise deviennent sa matière de travail.",
          advice: "Revoyez les partages ouverts à toute l'entreprise et les liens publics avant l'activation. Le périmètre de l'agent, c'est votre hygiène de partage.",
        },
        {
          danger: "Le journal attribue chaque action à l'agent. Lors d'un incident ou d'un audit, personne ne sait dire quel humain en répond.",
          advice: "Gardez, en face de chaque agent, le nom de son responsable et de la personne qui a approuvé ses autorisations. Relisez son journal à intervalle fixe.",
        },
        {
          danger: "L'agent écrit à des clients ou à des fournisseurs depuis sa propre adresse, sans qu'ils sachent qu'ils ont affaire à une IA.",
          advice: "Dites-le dans la signature, et faites vérifier par votre juriste ce que l'article 50 de l'AI Act exige dans votre cas.",
        },
        {
          danger: "Le projet se termine, l'agent reste : compte actif, boîte ouverte, accès toujours accordés.",
          advice: "Écrivez une procédure de départ pour les agents : suspension, transfert de la boîte et des fichiers, révocation des accès.",
        },
      ],
      faq: [
        {
          q: "Que reçoit un agent Gemini « collègue » ?",
          a: "Selon l'annonce de Google Cloud du 8 octobre 2026 : son propre compte Workspace, avec une adresse e-mail, un agenda, un Drive et une entrée dans l'annuaire de l'entreprise. Il agit sous sa propre identité, et chaque action est journalisée à son nom.",
        },
        {
          q: "Combien coûte l'agent Gemini, et quand sera-t-il disponible ?",
          a: "Google n'a publié ni prix ni date de disponibilité générale. Selon Reworked et Implicator, un porte-parole de Google a indiqué qu'il serait proposé sans surcoût là où Gemini Enterprise est disponible. Implicator rapporte une préversion privée et une disponibilité générale attendue vers fin octobre ou début novembre.",
        },
        {
          q: "L'AI Act oblige-t-il à dire qu'un e-mail a été écrit par un agent ?",
          a: "L'article 50, applicable depuis le 2 août 2026, demande aux fournisseurs de concevoir les systèmes qui interagissent directement avec des personnes de sorte qu'elles sachent qu'elles ont affaire à une IA, sauf si c'est évident. La Commission cite les agents d'IA parmi ses exemples. Son application aux e-mails d'un agent, et ce qui revient à l'entreprise qui l'utilise, est à vérifier avec votre juriste.",
        },
      ],
    },
  },
};

export default article;
