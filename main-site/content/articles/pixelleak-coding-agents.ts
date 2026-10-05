import type { Article } from "./types";

/*
 * Sources opened on 5 October 2026:
 * - Glow Labs, "PixelLeak: How AI Agents Exposed Developer Screenshots from Leading Tech Companies",
 *   29 September 2026 (primary): figures, mechanism, 93% under personal usernames, gitshot, recommendations,
 *   outreach from 9 September 2026.
 * - TechRadar Pro, 30 September 2026: no statement from GitHub, agent vendors or affected companies.
 * - GitHub Docs: restricting repository creation and repository visibility changes in an organization.
 * - GDPR, Article 33(1), read on cnil.fr.
 * The findings are Glow Labs' own; no independent party has verified the figures. No affected company is named.
 */
const article: Article = {
  id: "pixelleak-coding-agents",
  status: "published",
  published: "2026-10-05",
  updated: "2026-10-05",
  category: { fr: "Incident", en: "Incident" },
  dial: { fr: "Utilisation", en: "Usage" },
  sources: [
    { title: "Glow Labs, « PixelLeak: How AI Agents Exposed Developer Screenshots from Leading Tech Companies » (29 septembre 2026)", url: "https://www.glow.io/blogs/how-ai-agents-exposed-developer-screenshots-from-leading-tech-companies" },
    { title: "TechRadar Pro, « AI models are sharing sensitive data from tech companies in new 'PixelLeak' screenshots » (30 septembre 2026)", url: "https://www.techradar.com/pro/security/ai-models-are-sharing-sensitive-data-from-tech-companies-in-new-pixelleak-screenshots" },
    { title: "GitHub Docs, Restricting repository creation in your organization", url: "https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization" },
    { title: "GitHub Docs, Restricting repository visibility changes in your organization", url: "https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization" },
    { title: "RGPD, article 33 : notification d'une violation de données à l'autorité de contrôle (CNIL)", url: "https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4" },
  ],
  versions: {
    fr: {
      slug: "pixelleak-agents-de-code-captures-ecran-github",
      title: "Votre agent de code a-t-il ouvert un dépôt public sans vous le dire ? Des chercheurs retrouvent 13\u00a0000 images internes de plus de 300 organisations sur GitHub",
      seoTitle: "PixelLeak : des agents de code publient vos captures",
      description:
        "PixelLeak : selon Glow Labs, 13\u00a0000 images internes de plus de 300 organisations sont en accès public sur GitHub, placées par des agents de code. Que vérifier ?",
      keyword: "PixelLeak agents de code",
      niche: [
        "fuite de données agent de code GitHub",
        "gitshot captures d'écran dépôt public",
        "agent de code compte GitHub personnel",
        "shadow AI développeurs",
        "contrôles agents de code IA",
      ],
      takeaways: [
        "Le 29 septembre 2026, Glow Labs a publié PixelLeak : plus de 13\u00a0000 images internes de plus de 300 organisations, dans plus de 900 dépôts, accessibles à tous sur GitHub. Des agents de code les y avaient placées.",
        "La fuite ne vient pas d'une attaque. Des développeurs demandaient à leur agent de joindre une preuve visuelle à une demande de fusion ; pour que l'image s'affiche, l'agent l'hébergeait dans un dépôt public.",
        "Dans 93 % des cas étudiés par Glow Labs, les images se trouvaient dans un dépôt créé par un salarié sous son propre nom d'utilisateur. Un audit limité à l'organisation GitHub de l'entreprise ne les voit pas.",
      ],
      body: `
Un développeur demande à son agent de code de corriger un écran et de joindre une capture à la demande de fusion, pour que le relecteur voie le résultat. L'agent s'exécute. Pour rendre l'image visible, il crée un dépôt public à côté du dépôt privé et y dépose la capture. Les chercheurs en sécurité de Glow Labs ont retrouvé ce schéma à grande échelle et l'ont décrit le 29 septembre 2026 sous le nom de PixelLeak.

## Ce que les chercheurs ont trouvé

- **Les volumes.** Plus de 13\u00a0000 images internes, plus de 300 organisations, plus de 900 dépôts de code.
- **Le contenu.** Glow Labs cite un écran de facturation interne chez un industriel de plus de 100\u00a0000 salariés, la console de trésorerie et de règlement d'une société de services financiers, et plus d'un millier de captures et d'enregistrements du produit d'un éditeur de logiciels, avec des fonctions prévues plusieurs semaines ou plusieurs mois plus tard.
- **Le mécanisme.** D'après le raisonnement d'un agent que cite Glow Labs, GitHub n'affiche pas, dans la description d'une demande de fusion, une image stockée dans un dépôt privé. Les agents ont contourné l'obstacle en hébergeant l'image dans un dépôt public voisin.
- **Les comptes personnels.** Dans 93 % des cas, les images étaient dans un dépôt créé par un salarié sous son propre nom d'utilisateur.
- **Un outil en cause.** Environ un tiers des organisations touchées avaient des développeurs qui utilisaient gitshot, un petit outil open source qui publie des captures pour les revues de code. Plus de 100 comptes publics laissaient fuir du travail interne par ce moyen.

## Ce qui est confirmé, et ce qui ne l'est pas

- **La source.** Ces constats viennent de Glow Labs. Aucun tiers indépendant n'a vérifié ses chiffres.
- **Les organisations touchées.** Glow Labs dit avoir commencé à les prévenir le 9 septembre 2026. Elle n'en nomme aucune.
- **Les réactions.** Les sources que nous avons lues ne rapportent aucune déclaration de GitHub ni des éditeurs d'agents de code.
- **Les agents concernés.** Les chercheurs parlent de « nombreux agents IA », sans lister les produits concernés.

## Pourquoi les contrôles habituels ne voient rien

- **L'agent a fait ce qu'on lui demandait.** Il devait fournir une preuve visuelle et a trouvé un moyen de l'afficher. Aucune règle écrite ne l'en empêchait.
- **Les comptes personnels échappent à l'organisation.** Les réglages d'une organisation GitHub portent sur les dépôts de l'organisation, et non sur ceux qu'un salarié crée sous son compte personnel.
- **Les détecteurs lisent du texte.** Glow Labs le résume ainsi : les scanners lisent du texte, pas des pixels. La capture d'un écran de facturation passe.

## Le danger, le conseil

[[danger-conseil]]

## À vérifier cette semaine

1. **Les dépôts publics de vos salariés.** Recherchez sur GitHub le nom de l'entreprise, de ses produits et de ses domaines internes. Regardez les dépôts récents qui ne contiennent que des images.
2. **Les outils en usage.** Demandez aux équipes quels agents de code et quels outils annexes elles utilisent, abonnements personnels compris.
3. **Les réglages de l'organisation GitHub.** Qui peut créer un dépôt public, et qui peut changer la visibilité d'un dépôt.
4. **Si vous trouvez des images exposées.** Supprimez-les, puis regardez ce qu'elles montraient. Si des données personnelles y figurent, voyez avec votre délégué à la protection des données s'il faut notifier la violation à l'autorité de contrôle. Le RGPD demande de le faire dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, sauf si la violation n'est pas susceptible d'engendrer un risque pour les personnes.

## Ce qu'une équipe solide fait différemment

Elle bloque à l'exécution les quatre gestes que cite Glow Labs : la création d'un dépôt public, la poussée vers un compte personnel, la poussée vers un gist, le passage d'un dépôt de privé à public. Elle ajoute une relecture humaine avant toute publication par un agent.

Elle inscrit aussi les agents de code au registre de ses IA, avec un responsable nommé, au même titre que les assistants et les agents métier. Le [Cockpit 56North](/#cockpit) tient ce registre : chaque IA en service, son usage, son responsable et les preuves datées qui s'y rattachent.
`,
      dangers: [
        {
          danger: "Un agent de code crée un dépôt public pour héberger une image.",
          advice: "Interdisez la création de dépôts publics depuis les postes de développement et les sessions d'agent, ou soumettez-la à accord.",
        },
        {
          danger: "Les images sont sous les comptes personnels des salariés, hors de l'organisation de l'entreprise.",
          advice: "Cherchez sur GitHub le nom de votre entreprise, de vos produits et de vos serveurs internes dans les dépôts de vos salariés. Glow Labs conseille de regarder au-delà de l'organisation.",
        },
        {
          danger: "Les détecteurs de secrets et de fuites lisent du texte. La capture d'un écran de facturation passe.",
          advice: "Ajoutez une relecture humaine avant toute publication d'image ou de vidéo par un agent. Traitez une capture d'écran comme une donnée.",
        },
        {
          danger: "Un outil comme gitshot publie des captures par construction.",
          advice: "Listez les outils et extensions que les agents de vos développeurs utilisent. Décidez lesquels sont autorisés.",
        },
        {
          danger: "Un dépôt privé passe en public.",
          advice: "Réservez le changement de visibilité aux propriétaires de l'organisation et alertez sur toute poussée vers un compte personnel.",
        },
      ],
      faq: [
        {
          q: "Qu'est-ce que PixelLeak ?",
          a: "Le nom donné par Glow Labs, le 29 septembre 2026, à la découverte de plus de 13\u00a0000 images internes de plus de 300 organisations en accès public sur GitHub. Des agents de code les avaient publiées pour joindre une preuve visuelle à des demandes de fusion.",
        },
        {
          q: "Comment vérifier si mon entreprise est touchée ?",
          a: "Cherchez sur GitHub le nom de l'entreprise, de ses produits et de ses domaines internes, y compris dans les dépôts des comptes personnels de vos salariés. Dans 93 % des cas étudiés par Glow Labs, les images étaient dans un dépôt créé sous un nom d'utilisateur personnel.",
        },
        {
          q: "Un détecteur de secrets repère-t-il une capture d'écran ?",
          a: "Pas de façon fiable. Selon Glow Labs, ces outils lisent du texte et non des pixels. Une relecture humaine avant publication et des règles qui bloquent la création de dépôts publics restent nécessaires.",
        },
      ],
    },
    en: {
      slug: "pixelleak-coding-agents-screenshots-public-github",
      title: "Did your coding agent open a public repository without telling you? Researchers find 13,000 internal images from over 300 organisations on GitHub",
      seoTitle: "PixelLeak: coding agents leak screenshots on GitHub",
      description:
        "PixelLeak: according to Glow Labs, 13,000 internal images from over 300 organisations sit on public GitHub, put there by AI coding agents. What to check.",
      keyword: "PixelLeak AI coding agents",
      niche: [
        "AI coding agent data leak GitHub",
        "gitshot screenshots public repository",
        "coding agent personal GitHub account risk",
        "shadow AI developers",
        "runtime controls AI coding agents",
      ],
      takeaways: [
        "On 29 September 2026, Glow Labs published PixelLeak: more than 13,000 internal images from over 300 organisations, across more than 900 repositories, open to anyone on GitHub. AI coding agents had put them there.",
        "The leak did not come from an attack. Developers asked their agent to attach visual proof to a pull request; to make the image display, the agent hosted it in a public repository.",
        "In 93% of the cases Glow Labs studied, the images sat in a repository an employee had created under their own username. An audit limited to the company's GitHub organisation does not see them.",
      ],
      body: `
A developer asks a coding agent to fix a screen and to attach a screenshot to the pull request, so the reviewer can see the result. The agent complies. To make the image visible, it creates a public repository next to the private one and puts the screenshot there. The security researchers of Glow Labs found this pattern at scale and described it on 29 September 2026 under the name PixelLeak.

## What the researchers found

- **The volumes.** More than 13,000 internal images, more than 300 organisations, more than 900 code repositories.
- **The content.** Glow Labs cites an internal billing screen at a manufacturer with over 100,000 employees, the treasury and settlement console of a financial services firm, and more than a thousand screenshots and recordings of a software vendor's product, with features planned for weeks or months later.
- **The mechanism.** According to an agent's reasoning quoted by Glow Labs, GitHub does not display, in a pull request description, an image stored in a private repository. The agents got around the obstacle by hosting the image in an adjacent public repository.
- **Personal accounts.** In 93% of the cases, the images were in a repository an employee had created under their own username.
- **One tool involved.** Around a third of the affected organisations had developers running gitshot, a small open-source tool that publishes screenshots for code reviews. More than 100 public accounts were leaking internal work this way.

## What is confirmed, and what is not

- **The source.** These findings come from Glow Labs. No independent party has verified its figures.
- **The affected organisations.** Glow Labs says it began contacting them on 9 September 2026. It names none.
- **Reactions.** The sources we read report no statement from GitHub or from the vendors of coding agents.
- **The agents concerned.** The researchers speak of "many AI agents", without listing the products concerned.

## Why the usual controls see nothing

- **The agent did what it was asked.** It had to provide visual proof and found a way to display it. No written rule stopped it.
- **Personal accounts sit outside the organisation.** The settings of a GitHub organisation apply to the organisation's repositories, and not to those an employee creates under a personal account.
- **Scanners read text.** Glow Labs puts it this way: scanners read text, not pixels. A screenshot of a billing screen goes through.

## The danger, the advice

[[danger-conseil]]

## What to check this week

1. **Your employees' public repositories.** Search GitHub for the names of the company, its products and its internal domains. Look at recent repositories that contain only images.
2. **The tools in use.** Ask teams which coding agents and helper tools they use, personal subscriptions included.
3. **The GitHub organisation settings.** Who can create a public repository, and who can change a repository's visibility.
4. **If you find exposed images.** Remove them, then look at what they showed. If they contain personal data, work out with your data protection officer whether the breach must be notified to the supervisory authority. The GDPR requires it without undue delay and, where feasible, within 72 hours of becoming aware of it, unless the breach is unlikely to result in a risk to the people concerned.

## What a solid team does differently

It blocks at runtime the four actions Glow Labs lists: creating a public repository, pushing to a personal account, pushing to a gist, and switching a repository from private to public. It adds a human review before an agent publishes anything.

It also enters coding agents in its AI register, with a named owner, on the same footing as assistants and business agents. The [56North Cockpit](/en#cockpit) holds that register: every AI system in service, its use, its owner and the dated evidence attached to it.
`,
      dangers: [
        {
          danger: "A coding agent creates a public repository to host an image.",
          advice: "Forbid the creation of public repositories from developer machines and agent sessions, or make it subject to approval.",
        },
        {
          danger: "The images sit under employees' personal accounts, outside the company's organisation.",
          advice: "Search GitHub for the names of your company, your products and your internal servers in your employees' repositories. Glow Labs advises looking beyond the organisation.",
        },
        {
          danger: "Secret scanners and leak detectors read text. A screenshot of a billing screen goes through.",
          advice: "Add a human review before an agent publishes any image or video. Treat a screenshot as data.",
        },
        {
          danger: "A tool such as gitshot publishes screenshots by design.",
          advice: "List the tools and extensions your developers' agents use. Decide which ones are allowed.",
        },
        {
          danger: "A private repository is switched to public.",
          advice: "Reserve visibility changes for organisation owners and alert on any push to a personal account.",
        },
      ],
      faq: [
        {
          q: "What is PixelLeak?",
          a: "The name Glow Labs gave, on 29 September 2026, to its discovery of more than 13,000 internal images from over 300 organisations publicly accessible on GitHub. AI coding agents had published them to attach visual proof to pull requests.",
        },
        {
          q: "How do I check whether my company is affected?",
          a: "Search GitHub for the names of the company, its products and its internal domains, including in the repositories of your employees' personal accounts. In 93% of the cases Glow Labs studied, the images were in a repository created under a personal username.",
        },
        {
          q: "Does a secret scanner detect a screenshot?",
          a: "Not reliably. According to Glow Labs, these tools read text and not pixels. A human review before publication and rules that block the creation of public repositories remain necessary.",
        },
      ],
    },
  },
};

export default article;
