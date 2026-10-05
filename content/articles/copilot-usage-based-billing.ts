import type { Article } from "./types";

/*
 * Sources opened on 5 October 2026:
 * - Microsoft Partner Center announcements, October 2026 (1 October 2026, primary): usage-based billing on by
 *   default for new Microsoft 365 Copilot Business licences in CSP from 1 December 2026 (previously 2 November),
 *   default limit of 4,000 Copilot Credits per user per month, markets not in the first wave.
 * - Microsoft Licensing, "Copilot Credits": $0.01 per credit pay-as-you-go, pre-purchase plans, what consumes credits.
 * - Microsoft Learn, "Managing AI experiences enabled by usage-based billing" (ms.date 1 October 2026):
 *   spending policies, limits, what happens at the limit, alerts, auto-apply new services.
 * - Microsoft Learn, "Understand usage-based billing and cost management for Copilot Credits".
 * - Message Center MC1479276 (25 September 2026) is only readable inside a tenant: read through a public copy
 *   (PupuWeb, listed in the sources). The Q4 2026 rollout and the sentence on Enterprise tenants come from it.
 *   To be checked in the admin center.
 * - Microsoft Copilot Blog, "Evolution of the Copilot pricing model" (modified 28 September 2026): only its summary line loaded.
 * The dollar amounts in the table are our own arithmetic on Microsoft's public figures.
 */
const article: Article = {
  id: "copilot-usage-based-billing",
  // Mis hors ligne le 5 oct. 2026 à la demande de Pascal : publication après cette semaine.
  status: "draft",
  published: "2026-10-05",
  updated: "2026-10-05",
  pillar: "maintain",
  category: { en: "Run & maintain", fr: "Exploiter et maintenir" },
  practices: ["microsoft"],
  sources: [
    { title: "Microsoft Partner Center announcements, October 2026: usage-based billing default for Microsoft 365 Copilot Business", url: "https://learn.microsoft.com/en-us/partner-center/announcements/2026-october" },
    { title: "Microsoft Licensing: Copilot Credits", url: "https://www.microsoft.com/licensing/guidance/Copilot-Credits" },
    { title: "Microsoft Learn: Managing AI experiences enabled by usage-based billing", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-manage-copilot-credits" },
    { title: "Microsoft Learn: Understand usage-based billing and cost management for Copilot Credits", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" },
    { title: "Microsoft Copilot Blog: Evolution of the Copilot pricing model", url: "https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/evolution-of-the-copilot-pricing-model/4559416" },
    { title: "Message Center MC1479276, « Evolving the Copilot Pricing Model and New FinOps Capabilities for AI » (25 September 2026), public copy by PupuWeb", url: "https://pupuweb.com/mc1479276-microsoft-copilot-evolving-the-copilot-pricing-model-and-new-finops-capabilities-for-ai/" },
  ],
  versions: {
    en: {
      slug: "copilot-credits-usage-based-billing",
      title: "Copilot: the flat fee does not cover everything. Microsoft bills advanced AI by usage, at $0.01 per credit",
      description:
        "Microsoft 365 Copilot adds usage-based billing: Copilot Credits at $0.01, on by default for new CSP Business licences from 1 December 2026. What to set up.",
      keyword: "Copilot Credits usage-based billing",
      niche: [
        "Microsoft 365 Copilot spending policy",
        "Copilot Credits price per credit",
        "Copilot Cowork cost",
        "Copilot usage-based billing France",
        "Copilot Business CSP default billing December 2026",
      ],
      takeaways: [
        "Microsoft splits Copilot in two: everyday AI stays in the per-user licence, advanced AI (Copilot Cowork, Work IQ APIs, agents) consumes Copilot Credits billed by usage, at $0.01 per credit on pay-as-you-go.",
        "For new Microsoft 365 Copilot Business licences bought through CSP, usage-based billing will be on by default from 1 December 2026, with a default limit of 4,000 credits per user per month. France, Germany, Belgium, Italy, Spain, the Netherlands and Poland are not in the first wave.",
        "In Enterprise tenants, users see the usage-billed features, but these do not work until an admin creates a spending policy. That policy is a decision to prepare now: who gets access, with what monthly limit, and who is alerted.",
      ],
      body: `
Until now, a Copilot budget was a number of seats multiplied by a price. On 25 September 2026, Microsoft told administrators (Message Center post MC1479276) that advanced AI features would be billed by usage, on top of the licence. On 1 October, it gave its partners the date and the default limit for Copilot Business licences.

## What Microsoft announced

- **Two regimes.** Microsoft's Copilot blog sums it up: everyday AI stays at a fixed price per user, advanced AI runs on Copilot Credits. According to post MC1479276, the rollout starts in the fourth quarter of 2026.
- **The price.** $0.01 per credit on pay-as-you-go. One-year pre-purchase plans give a 5% discount for 300,000 credits, up to 20% for 300 million.
- **What consumes credits.** According to Microsoft's licensing site: Copilot Cowork tasks, Work IQ APIs, Copilot Studio agents, Dynamics 365 agents and app hosting in the Copilot Managed Runtime.
- **On by default in CSP.** For new Microsoft 365 Copilot Business licences bought from a CSP reseller, usage-based billing will be on by default from 1 December 2026. The date announced earlier was 2 November.
- **The default limit.** 4,000 credits per user per month, which admins can change.
- **The countries.** The default will not be available at first in Australia, Belgium, Brazil, France, Germany, India, Italy, Korea, the Netherlands, Poland and Spain.

## What it adds up to

| Users | Default limit (credits per month) | Maximum at $0.01 per credit |
|---|---|---|
| 1 | 4,000 | $40 |
| 100 | 400,000 | $4,000 |
| 1,000 | 4,000,000 | $40,000 |

This arithmetic is ours, based on Microsoft's public figures; the example of 100 users and 400,000 credits appears in its announcement. The limit is a maximum: Microsoft bills actual usage. These amounts come on top of the licence price, and Microsoft publishes this rate in US dollars.

## What applies to you today

| Your situation | What changes |
|---|---|
| Copilot Business bought through CSP, in a first-wave country | New licences arrive with usage-based billing switched on from 1 December 2026. |
| Copilot Business bought through CSP in France, Germany, Belgium, Italy, Spain, the Netherlands or Poland | No default at first. Microsoft says it will share more as availability expands. |
| Enterprise tenant | The features are visible to all users and stay inactive until an admin creates a spending policy (MC1479276). |
| Existing licences | The announcement to partners covers new purchases. |

## The danger, the advice

[[danger-conseil]]

## What to do this week

1. **Find out how you buy Copilot.** Through CSP or an Enterprise agreement, with Business or Enterprise licences.
2. **Check whether a spending policy already exists.** Look in the Cost management dashboard of the Microsoft 365 admin center. Note who created it.
3. **Check the roles.** Which administrators can create or change a policy. Microsoft's documentation names the Global administrator and the Billing administrator for the choice of billing method.
4. **Pick a pilot group** and measure one month of consumption before opening access more widely.
5. **Set limits and alerts**, and decide the path for credit requests.

## What a solid team does differently

It treats Copilot spending as consumption to be steered. Each use case has an owner, a limit and a monthly review that sets the cost against the result. It redoes the sums at each vendor announcement, because the list of usage-billed services is growing: Microsoft writes that it is working to bring more agents and services into this model.
`,
      dangers: [
        {
          danger: "Users see features that need credits and ask for them. The first policy is created in a hurry, for everyone, with no limit.",
          advice: "Decide before anyone asks: which groups get access, and for which use. A policy applies to all users by default; restrict it to a security group.",
        },
        {
          danger: "The default limit is taken for a budget. 4,000 credits per user per month is the vendor's default value, which your admins can change.",
          advice: "Set your own monthly limit, per policy and per user, from the measured consumption of a pilot group.",
        },
        {
          danger: "A user reaches the limit mid-month and loses access to agents and services until the first of the next month.",
          advice: "Set the alert thresholds for admins and for users, and name the person who approves requests for more credits.",
        },
        {
          danger: "The setting that auto-applies new services is selected by default: each newly supported service enters the policy without a decision on your part.",
          advice: "Check that setting. Turn it off, or name someone to review each newly covered service.",
        },
        {
          danger: "You track cost per licence while consumption now happens per task.",
          advice: "Track cost per use case and per agent every month, next to what that usage produced.",
        },
      ],
      faq: [
        {
          q: "How much does a Copilot Credit cost?",
          a: "$0.01 on pay-as-you-go, according to Microsoft's licensing site. One-year pre-purchase plans give discounts from 5% for 300,000 credits to 20% for 300 million.",
        },
        {
          q: "Is Copilot usage-based billing on by default in France?",
          a: "Not at first. Microsoft's announcement to partners of 1 October 2026 lists France among the countries where the default for Copilot Business licences in CSP will not be available initially. In Enterprise tenants, the usage-billed features do not work until an admin creates a spending policy.",
        },
        {
          q: "What happens when a user reaches the credit limit?",
          a: "According to Microsoft's documentation, the user loses access to agents and services until credits reset on the first day of the next month. The user can request more credits.",
        },
      ],
    },
    fr: {
      slug: "copilot-credits-facturation-a-l-usage",
      title: "Copilot : le forfait ne couvre pas tout. Microsoft facture l'IA avancée à l'usage, 0,01 $ le crédit",
      description:
        "Microsoft 365 Copilot : l'IA avancée facturée à l'usage, 0,01 $ le crédit, par défaut sur les nouvelles licences Business en CSP au 1er décembre 2026.",
      keyword: "crédits Copilot facturation à l'usage",
      niche: [
        "politique de dépense Microsoft 365 Copilot",
        "prix crédit Copilot",
        "coût Copilot Cowork",
        "facturation à l'usage Copilot France",
        "Copilot Business CSP décembre 2026",
      ],
      takeaways: [
        "Microsoft sépare Copilot en deux : l'IA de tous les jours reste dans la licence par utilisateur, l'IA avancée (Copilot Cowork, API Work IQ, agents) consomme des crédits Copilot facturés à l'usage, 0,01 $ le crédit en paiement à l'usage.",
        "Pour les nouvelles licences Microsoft 365 Copilot Business achetées en CSP, la facturation à l'usage sera activée par défaut à partir du 1er décembre 2026, avec un plafond par défaut de 4\u00a0000 crédits par utilisateur et par mois. La France, l'Allemagne, la Belgique, l'Italie, l'Espagne, les Pays-Bas et la Pologne ne font pas partie de la première vague.",
        "Dans les locataires Entreprise, les utilisateurs voient les fonctions facturées à l'usage, mais elles ne fonctionnent pas tant qu'un administrateur n'a pas créé une politique de dépense. Cette politique se prépare maintenant : qui a accès, avec quel plafond mensuel, et qui est alerté.",
      ],
      body: `
Jusqu'ici, un budget Copilot se calculait en multipliant un nombre de sièges par un prix. Le 25 septembre 2026, Microsoft a annoncé aux administrateurs (message MC1479276 du centre de messages) que les fonctions d'IA avancée seraient facturées à l'usage, en plus de la licence. Le 1er octobre, elle a donné à ses partenaires la date et le plafond par défaut pour les licences Copilot Business.

## Ce que Microsoft a annoncé

- **Deux régimes.** Le blog Copilot de Microsoft le résume : l'IA de tous les jours reste à prix fixe par utilisateur, l'IA avancée fonctionne aux crédits Copilot. Selon le message MC1479276, le déploiement commence au quatrième trimestre 2026.
- **Le prix.** 0,01 $ le crédit en paiement à l'usage. Des plans prépayés d'un an donnent 5 % de remise pour 300\u00a0000 crédits, et jusqu'à 20 % pour 300 millions.
- **Ce qui consomme des crédits.** Selon le site de licences de Microsoft : les tâches Copilot Cowork, les API Work IQ, les agents Copilot Studio, les agents Dynamics 365 et l'hébergement d'applications dans le Copilot Managed Runtime.
- **L'activation par défaut en CSP.** Pour les nouvelles licences Microsoft 365 Copilot Business achetées auprès d'un revendeur CSP, la facturation à l'usage sera activée par défaut à partir du 1er décembre 2026. La date annoncée auparavant était le 2 novembre.
- **Le plafond par défaut.** 4\u00a0000 crédits par utilisateur et par mois, que les administrateurs peuvent modifier.
- **Les pays.** L'activation par défaut ne sera pas disponible au départ en Allemagne, Australie, Belgique, Brésil, Corée, Espagne, France, Inde, Italie, Pays-Bas et Pologne.

## Ce que cela représente

| Utilisateurs | Plafond par défaut (crédits par mois) | Maximum à 0,01 $ le crédit |
|---|---|---|
| 1 | 4\u00a0000 | 40 $ |
| 100 | 400\u00a0000 | 4\u00a0000 $ |
| 1\u00a0000 | 4\u00a0000\u00a0000 | 40\u00a0000 $ |

Ce calcul est le nôtre, à partir des chiffres publics de Microsoft ; l'exemple de 100 utilisateurs et 400\u00a0000 crédits figure dans son annonce. Le plafond est un maximum : Microsoft facture l'usage réel. Ces montants s'ajoutent au prix de la licence, et Microsoft publie ce tarif en dollars.

## Ce qui s'applique à vous aujourd'hui

| Votre situation | Ce qui change |
|---|---|
| Copilot Business acheté en CSP, pays de la première vague | Les nouvelles licences arrivent avec la facturation à l'usage activée à partir du 1er décembre 2026. |
| Copilot Business acheté en CSP en France, Allemagne, Belgique, Italie, Espagne, Pays-Bas ou Pologne | Pas d'activation par défaut au départ. Microsoft annonce des précisions quand la disponibilité s'étendra. |
| Locataire Entreprise | Les fonctions sont visibles de tous les utilisateurs et restent inactives tant qu'un administrateur n'a pas créé de politique de dépense (MC1479276). |
| Licences existantes | L'annonce aux partenaires porte sur les nouveaux achats. |

## Le danger, le conseil

[[danger-conseil]]

## À faire cette semaine

1. **Savoir comment vous achetez Copilot.** En CSP ou par contrat Entreprise, avec des licences Business ou Entreprise.
2. **Regarder s'il existe déjà une politique de dépense.** Elle se trouve dans le tableau de bord de gestion des coûts du centre d'administration Microsoft 365. Notez qui l'a créée.
3. **Vérifier les rôles.** Quels administrateurs peuvent créer ou modifier une politique. La documentation Microsoft cite l'administrateur général et l'administrateur de facturation pour le choix du mode de facturation.
4. **Choisir un groupe pilote** et mesurer un mois de consommation avant d'ouvrir plus largement.
5. **Fixer plafonds et alertes**, et décider du circuit des demandes de crédits.

## Ce qu'une équipe solide fait différemment

Elle traite la dépense Copilot comme une consommation à piloter. Chaque cas d'usage a un responsable, un plafond et une revue mensuelle qui met le coût en face du résultat. Elle refait le calcul à chaque annonce de l'éditeur, parce que la liste des services facturés à l'usage s'allonge : Microsoft écrit qu'elle travaille à y faire entrer d'autres agents et services.
`,
      dangers: [
        {
          danger: "Les utilisateurs voient des fonctions qui demandent des crédits et les réclament. La première politique est créée dans l'urgence, pour tout le monde, sans plafond.",
          advice: "Décidez avant qu'on vous le demande : quels groupes ont accès, et pour quel usage. Une politique s'applique à tous les utilisateurs par défaut ; limitez-la à un groupe de sécurité.",
        },
        {
          danger: "Le plafond par défaut est pris pour un budget. 4\u00a0000 crédits par utilisateur et par mois, c'est la valeur par défaut de l'éditeur, que vos administrateurs peuvent modifier.",
          advice: "Fixez votre propre plafond mensuel, par politique et par utilisateur, à partir de la consommation mesurée d'un groupe pilote.",
        },
        {
          danger: "Un utilisateur atteint son plafond en cours de mois et perd l'accès aux agents et aux services jusqu'au 1er du mois suivant.",
          advice: "Réglez les seuils d'alerte pour les administrateurs et pour les utilisateurs, et désignez qui approuve les demandes de crédits supplémentaires.",
        },
        {
          danger: "Le réglage d'ajout automatique des nouveaux services est coché par défaut : chaque service nouvellement pris en charge entre dans la politique sans décision de votre part.",
          advice: "Vérifiez ce réglage. Coupez-le, ou désignez quelqu'un pour examiner chaque nouveau service couvert.",
        },
        {
          danger: "Vous suivez le coût par licence alors que la consommation se fait désormais par tâche.",
          advice: "Suivez chaque mois le coût par cas d'usage et par agent, en face de ce que cet usage a produit.",
        },
      ],
      faq: [
        {
          q: "Combien coûte un crédit Copilot ?",
          a: "0,01 $ en paiement à l'usage, selon le site de licences de Microsoft. Des plans prépayés d'un an offrent de 5 % de remise pour 300\u00a0000 crédits à 20 % pour 300 millions.",
        },
        {
          q: "La facturation à l'usage de Copilot est-elle activée par défaut en France ?",
          a: "Pas au départ. L'annonce de Microsoft à ses partenaires du 1er octobre 2026 cite la France parmi les pays où l'activation par défaut des licences Copilot Business en CSP ne sera pas disponible dans un premier temps. Dans les locataires Entreprise, les fonctions facturées à l'usage ne fonctionnent pas tant qu'un administrateur n'a pas créé de politique de dépense.",
        },
        {
          q: "Que se passe-t-il quand un utilisateur atteint son plafond de crédits ?",
          a: "Selon la documentation Microsoft, il perd l'accès aux agents et aux services jusqu'à la remise à zéro des crédits, le premier jour du mois suivant. Il peut demander des crédits supplémentaires.",
        },
      ],
    },
  },
};

export default article;
