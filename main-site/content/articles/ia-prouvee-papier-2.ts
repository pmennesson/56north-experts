import type { Article } from "./types";

/*
 * Papier n°2 de Pascal Mennesson, validé le 22 octobre 2026 (brouillon FR revu avec lui), traduit en anglais le 23 octobre.
 * Publication prévue le jeudi 5 novembre 2026 : passer status à "published" ce jour-là (annonce LinkedIn le même jour).
 * Sources ouvertes le 22 octobre 2026 (voir sources). Écart de prix notaires = ratio brut à surface égale (90-110 m²), pas un calcul toutes choses égales.
 */
const article: Article = {
  id: "ce-que-vaut-une-ia-prouvee",
  status: "draft",
  published: "2026-11-05",
  updated: "2026-11-05",
  category: { fr: "Papier", en: "Paper" },
  dial: { fr: "Preuves AI Act", en: "AI Act evidence" },
  sources: [
    { title: "Ocean Tomo, « Ocean Tomo Releases 2025 Intangible Asset Market Value Study Results » (12 février 2026)", url: "https://oceantomo.com/insights/ocean-tomo-releases-2025-intangible-asset-market-value-study-results/" },
    { title: "Civil Resolution Tribunal (Colombie-Britannique), Moffatt v. Air Canada, 2024 BCCRT 149 (14 février 2024)", url: "https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do" },
    { title: "Zillow Group, résultats du troisième trimestre 2021 et arrêt de Zillow Offers (2 novembre 2021)", url: "https://investors.zillowgroup.com/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx" },
    { title: "Règlement (UE) 2024/1689 sur l'intelligence artificielle (articles 2 et 99)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { title: "Règlement (UE) 2026/1744 (omnibus numérique, JO du 24 juillet 2026)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj" },
    { title: "Actu-Juridique, « Les dernières tendances du marché immobilier analysées par les Notaires de France » (27 janvier 2026)", url: "https://www.actu-juridique.fr/breves/notaires/les-dernieres-tendances-du-marche-immobilier-analysees-par-les-notaires-de-france/" },
    { title: "Minnis, « The Value of Financial Statement Verification in Debt Financing: Evidence from Private U.S. Firms », Journal of Accounting Research (2011)", url: "https://ideas.repec.org/a/bla/joares/v49y2011i2p457-506.html" },
    { title: "Finnegan, « Colorado Replaces Landmark AI Act: An Overview of the New SB 26-189 Framework » (2026)", url: "https://www.finnegan.com/en/insights/articles/colorado-replaces-landmark-ai-act-an-overview-of-the-new-sb-26-189-framework.html" },
    { title: "Paul Hastings, « President Trump Signs Executive Order Challenging State AI Laws » (décembre 2025)", url: "https://www.paulhastings.com/insights/client-alerts/president-trump-signs-executive-order-challenging-state-ai-laws" },
  ],
  versions: {
    fr: {
      slug: "ce-que-vaut-une-ia-quon-peut-prouver",
      title: "Ce que vaut une IA qu'on peut prouver",
      seoTitle: "Conformité IA : ce que vaut une IA qu'on peut prouver",
      description:
        "La régulation de l'IA n'est pas qu'une charge : elle rend la valeur de vos IA vérifiable. Actifs, passifs cachés, stabilité de la règle et valorisation.",
      keyword: "valeur de la conformité IA",
      niche: [
        "AI Act avantage concurrentiel",
        "valorisation des actifs IA",
        "IA et due diligence",
        "risque IA passif caché",
        "registre des IA comme registre d'immobilisations",
      ],
      takeaways: [
        "Lue dans le compte de résultat, la régulation de l'IA ressemble à une charge. Vue par un acheteur, elle réduit l'incertitude, et c'est l'incertitude qui détruit la valeur d'un actif.",
        "Une IA non pilotée est un passif caché : Air Canada a dû répondre des promesses de son chatbot, Zillow a déprécié environ 304 millions de dollars de stock acheté sur la foi d'un algorithme.",
        "Comme le diagnostic énergétique pour l'immobilier ou l'audit pour les comptes, la règle rend la valeur visible : les entreprises qui documentent leurs IA dès maintenant prennent une rente de première arrivée.",
      ],
      body: `
**La règle n'est pas un coût. C'est ce qui donne un prix à vos IA.**

Depuis que l'AI Act existe, j'entends la même phrase dans les comités de direction, à Paris comme à Dubaï : « L'Amérique innove, la Chine copie, l'Europe régule. » Elle fait sourire, elle est souvent juste sur un point, et je ne la balaie pas. Une règle a un coût. Le report voté cet été par l'Union, qui décale de seize mois les obligations sur les systèmes à haut risque, montre d'ailleurs que le législateur lui-même a entendu l'argument.

Mais je crois que ce débat se trompe de document. Lue dans le compte de résultat, la régulation semble être une charge, et c'est là que tout le monde la range. J'ai passé vingt-cinq ans à acquérir et à céder des entreprises, et j'ai appris qu'un acheteur ne paie pas des charges évitées : il paie ce que l'entreprise rapportera demain, et il décote tout ce qu'il ne peut pas vérifier. Vu de là, la question n'est plus « combien coûte la conformité ? ». Elle devient : « combien vaut une IA dont on peut prouver ce qu'elle fait, et combien coûte celle dont on ne peut rien prouver ? »

## Vos IA sont déjà des actifs

Selon Ocean Tomo, les actifs immatériels représentaient fin 2025 environ 92 % de la valeur boursière des entreprises du S&P 500. Les marques, les brevets, les logiciels, les données, les savoir-faire : l'essentiel de ce qu'un acheteur paie aujourd'hui ne se touche pas.

Les IA rejoignent cette valeur invisible au bilan. Un agent qui traite les demandes clients, un modèle qui fixe des prix, un assistant qui rédige des réponses commerciales : ce sont des actifs qui produisent un revenu ou une économie. Et comme tout actif, leur valeur se calcule de la même façon depuis toujours. Ce qu'il rapporte. Moins ce qu'il peut coûter. Le tout corrigé de l'incertitude sur ces deux chiffres.

C'est sur ce dernier terme que tout se joue.

## Une IA qu'on ne pilote pas est un passif caché

Deux histoires vraies, documentées, que je raconte à chaque dirigeant qui me dit que ses IA « tournent bien ».

En novembre 2022, un client d'Air Canada demande au chatbot du site comment obtenir le tarif réduit prévu en cas de deuil. Le chatbot lui invente une procédure : acheter maintenant, se faire rembourser plus tard. La vraie politique de la compagnie disait l'inverse. Devant le tribunal de Colombie-Britannique, Air Canada a soutenu que le chatbot était, en somme, responsable de ses propres actes. Le tribunal a qualifié l'argument de « remarquable » et rappelé l'évidence : l'entreprise répond de toute l'information publiée sur son site, qu'elle vienne d'une page fixe ou d'un agent conversationnel. Le 14 février 2024, la compagnie est condamnée à payer 812 dollars canadiens. Le montant est dérisoire. Le principe ne l'est pas : chaque phrase que prononce votre IA vous engage.

Changeons d'échelle. En 2021, Zillow, le géant américain des annonces immobilières, achète des maisons à grande échelle sur la foi d'un algorithme qui estime leur prix de revente. Le marché tourne plus vite que le modèle. Le 2 novembre 2021, l'entreprise annonce une dépréciation d'environ 304 millions de dollars sur son stock, prévoit encore 240 à 265 millions de pertes au trimestre suivant, ferme l'activité et se sépare d'environ un quart de ses salariés. Son PDG résume : l'imprévisibilité de l'estimation des prix « dépasse de loin ce que nous avions anticipé ». Le modèle n'était pas mauvais le premier jour. Il a dérivé, et personne n'avait l'instrument pour le voir à temps ni la main pour l'arrêter.

Dans les deux cas, le passif existait avant de coûter. Il ne figurait dans aucun bilan. Il attendait.

L'AI Act lui donne désormais un ordre de grandeur. Les amendes peuvent atteindre 35 millions d'euros ou 7 % du chiffre d'affaires mondial pour les pratiques interdites, 15 millions ou 3 % pour les autres obligations. Un acheteur, un prêteur ou un assureur qui lit ces chiffres ne se demande pas si votre IA est brillante. Il se demande si vous pouvez prouver qu'elle est tenue.

## Ce que la règle a fait à l'immobilier

Pour comprendre ce qui se passe, il suffit de regarder ce qui est arrivé aux logements en France.

Pendant des décennies, une passoire thermique se vendait à peu près comme n'importe quelle maison de même surface dans la même rue. Le défaut existait, le chauffage coûtait une fortune, mais il était invisible au moment de signer. Puis le diagnostic de performance énergétique est devenu opposable, en juillet 2021, et la loi a fixé un calendrier connu de tous : les logements classés G ne peuvent plus faire l'objet d'un nouveau bail depuis le 1er janvier 2025, les F suivront en 2028, les E en 2034.

Le marché a fait le reste. Selon les notaires, une maison de 90 à 110 m² classée A ou B se vendait en 2021 une fois et demie plus cher qu'une maison de même surface classée F ou G. En 2024, l'écart atteignait 1,9.

La règle n'a pas créé le défaut. Elle l'a rendu visible, comparable, donc chiffrable. Et elle a récompensé ceux qui avaient diagnostiqué et rénové avant les autres : leur bien n'a pas pris de la valeur parce qu'il était meilleur, mais parce qu'ils pouvaient le prouver.

La finance connaît ce mécanisme depuis longtemps. Une étude menée sur des entreprises américaines non cotées, que rien n'oblige à faire auditer leurs comptes, montre que celles qui le font quand même empruntent moins cher : les banques accordent plus de poids à un chiffre vérifié pour fixer leur taux. L'audit ne crée pas la rentabilité. Il la rend croyable, et le crédit se paie en croyance.

Vos IA entrent exactement dans ce mouvement. Demain, une IA documentée, surveillée, dont les incidents sont tracés et corrigés, vaudra plus qu'une IA identique dont personne ne sait rien. Pas parce qu'elle fonctionne mieux. Parce qu'on peut le montrer.

## La stabilité est un avantage concurrentiel

Il y a un second argument, que les dirigeants financiers comprennent immédiatement : ce qui détruit la valeur d'un actif, ce n'est pas la règle, c'est l'incertitude sur la règle.

Regardons les faits sans parti pris. L'Europe a un texte, un calendrier publié au Journal officiel, et quand elle a décidé de le décaler, elle l'a fait par un règlement qui fixe de nouvelles dates précises : 2 décembre 2027 pour les systèmes à haut risque de l'annexe III, 2 août 2028 pour ceux intégrés à des produits réglementés. On peut contester le contenu. On peut planifier.

Aux États-Unis, le Colorado a voté en 2024 la première loi d'ensemble sur l'IA, prévue pour février 2026. Elle a été repoussée à juin 2026, puis abrogée en mai 2026 et remplacée par un texte différent, applicable en janvier 2027. Entre-temps, un décret présidentiel du 11 décembre 2025 a créé une cellule chargée de contester en justice les lois des États sur l'IA. Je ne dis pas lequel de ces deux modèles est le meilleur pour l'innovation. Je dis lequel est le plus facile à mettre dans un tableur de valorisation.

Un acquéreur, un fonds, un assureur préfère toujours une règle connue à une règle inconnue, même plus exigeante. Et l'AI Act s'applique à toute entreprise dont l'IA produit des effets dans l'Union, où qu'elle soit installée. Un groupe qui sait déjà prouver ce que font ses IA selon la règle la plus lisible du marché dispose d'un actif que ses concurrents devront reconstituer dans l'urgence.

C'est une rente de première arrivée. Comme pour les maisons rénovées avant 2025.

## Ce que font les dirigeants qui l'ont compris

Ceux qui prennent de l'avance ne parlent pas de conformité. Ils parlent de patrimoine. Concrètement, ils font quatre choses.

Ils tiennent le registre de leurs IA comme un registre des immobilisations : chaque système inventorié, avec son propriétaire nommé, son usage, sa classe de risque et ce qu'il rapporte. Une IA absente du registre est un actif qu'on ne peut ni valoriser ni défendre.

Ils produisent les preuves au fil de l'eau, comme une comptabilité, et non la veille d'un contrôle. Une preuve datée du jour de l'événement vaut quelque chose. Une preuve reconstituée trois mois plus tard ne convainc personne.

Ils en rendent compte au conseil, avec quelques indicateurs stables d'un trimestre à l'autre : la fiabilité des réponses, les coûts réels, l'état des preuves, l'utilisation effective, la fraîcheur des connaissances qui alimentent les systèmes. Ce qui se présente au conseil finit par se piloter.

Et ils préparent le jour où quelqu'un leur demandera de montrer. Ce jour arrive toujours : une levée de fonds, une cession, un appel d'offres, un audit, un incident. Ce jour-là, on ne vous demandera pas si vos IA sont performantes. On vous demandera de le prouver.

## Le danger, le conseil

[[danger-conseil]]

## La règle fixe la monnaie de la preuve

On peut continuer à débattre de savoir si l'Europe régule trop. C'est un débat légitime, et il durera. Mais pendant qu'il dure, quelque chose de plus concret s'installe : la règle définit ce qui compte comme une preuve. Elle fixe la monnaie dans laquelle la confiance se paiera, auprès des clients, des régulateurs, des acheteurs et des prêteurs.

Les entreprises qui gagneront ne sont pas celles qui auront le moins de règles. Ce sont celles qui sauront payer les premières dans cette monnaie.

Alors, à chaque dirigeant qui lit ces lignes, une seule question, celle qu'un acheteur vous posera tôt ou tard : si vous deviez céder votre entreprise demain, pourriez-vous prouver ce que font vos IA ?

*Pascal Mennesson, fondateur de Maltem Consulting Group, fondateur de 56North. Si vous êtes dirigeant et souhaitez en parler, [demandez un premier échange](/#diagnostic).*
`,
      dangers: [
        { danger: "Vos IA ne figurent dans aucun inventaire : elles produisent de la valeur que personne ne peut chiffrer et des risques que personne ne voit.", advice: "Tenez un registre de vos IA comme un registre d'immobilisations, avec un propriétaire nommé par système." },
        { danger: "Les preuves sont reconstituées au moment d'un contrôle ou d'une due diligence.", advice: "Produisez des preuves datées au fil de l'eau, dès la mise en service." },
        { danger: "Le conseil d'administration découvre les IA de l'entreprise à l'occasion d'un incident.", advice: "Présentez chaque trimestre quelques indicateurs stables : fiabilité, coûts, preuves, utilisation, référentiels." },
      ],
      faq: [
        { q: "La conformité à l'AI Act n'est-elle pas d'abord un coût ?", a: "Elle a un coût, comme un audit des comptes ou un diagnostic immobilier. Mais elle rend la valeur de vos IA vérifiable, ce qui réduit l'incertitude d'un acheteur, d'un prêteur ou d'un assureur. Et l'incertitude se paie toujours plus cher que la preuve." },
        { q: "Le report de l'AI Act ne rend-il pas le sujet moins urgent ?", a: "Le report a fixé de nouvelles dates précises : 2 décembre 2027 pour les systèmes à haut risque de l'annexe III, 2 août 2028 pour ceux de l'annexe I. Les pratiques interdites et les obligations de transparence s'appliquent déjà. Un calendrier connu est justement ce qui permet de prendre de l'avance." },
        { q: "Une entreprise hors d'Europe est-elle concernée ?", a: "Oui, dès que les résultats de ses IA sont utilisés dans l'Union européenne : recruter, évaluer ou servir des personnes en Europe suffit (article 2 du règlement)." },
      ],
    },
    en: {
      slug: "what-provable-ai-is-worth",
      title: "What an AI you can prove is worth",
      seoTitle: "AI compliance value: what provable AI is worth",
      description:
        "AI regulation is not just a cost: it makes the value of your AI verifiable. Assets, hidden liabilities, regulatory stability and valuation, for executives.",
      keyword: "value of AI compliance",
      niche: [
        "AI Act competitive advantage",
        "valuing AI assets",
        "AI due diligence",
        "AI hidden liability",
        "AI register as fixed-asset register",
      ],
      takeaways: [
        "Read in the income statement, AI regulation looks like an expense. Seen by a buyer, it reduces uncertainty, and uncertainty is what destroys the value of an asset.",
        "Unmonitored AI is a hidden liability: Air Canada had to answer for its chatbot's promises, Zillow wrote down about 304 million dollars of inventory bought on the strength of an algorithm.",
        "Like energy ratings for real estate or audits for accounts, rules make value visible: companies that document their AI now earn a first-mover rent.",
      ],
      body: `
**Rules are not a cost. They are what puts a price on your AI.**

Ever since the AI Act came into being, I have heard the same line in executive committees, from Paris to Dubai: "America innovates, China copies, Europe regulates." It raises a smile, it is often right on one point, and I do not dismiss it. A rule has a cost. The postponement the EU voted this summer, which pushes back the obligations on high-risk systems by sixteen months, shows that lawmakers themselves have heard the argument.

But I believe this debate is reading the wrong document. Read in the income statement, regulation looks like an expense, and that is where everyone files it. I have spent twenty-five years buying and selling companies, and I have learned that a buyer does not pay for expenses avoided: he pays for what the company will earn tomorrow, and he discounts everything he cannot verify. Seen from there, the question is no longer "how much does compliance cost?". It becomes: "what is an AI worth when you can prove what it does, and what does one cost when you can prove nothing?"

## Your AI is already an asset

According to Ocean Tomo, intangible assets accounted for about 92% of the market value of S&P 500 companies at the end of 2025. Brands, patents, software, data, know-how: most of what a buyer pays for today cannot be touched.

AI is joining this value that the balance sheet does not show. An agent that handles customer requests, a model that sets prices, an assistant that drafts sales replies: these are assets that generate revenue or savings. And like any asset, their value has always been calculated the same way. What it earns. Minus what it can cost. All of it adjusted for the uncertainty on those two figures.

Everything turns on that last term.

## Unmonitored AI is a hidden liability

Two true, documented stories, which I tell every executive who assures me their AI "runs fine".

In November 2022, an Air Canada customer asks the website chatbot how to obtain the reduced fare offered for bereavement. The chatbot invents a procedure: buy now, get refunded later. The airline's actual policy said the opposite. Before the British Columbia tribunal, Air Canada argued, in effect, that the chatbot was responsible for its own actions. The tribunal called the argument "remarkable" and stated the obvious: a company answers for all the information on its website, whether it comes from a static page or a chatbot. On 14 February 2024, the airline was ordered to pay 812 Canadian dollars. The amount is trivial. The principle is not: every sentence your AI speaks commits you.

Now change the scale. In 2021, Zillow, the American real estate listings giant, buys homes at scale on the strength of an algorithm that estimates their resale price. The market moves faster than the model. On 2 November 2021, the company announces a write-down of about 304 million dollars on its inventory, expects a further 240 to 265 million in losses the following quarter, shuts the business down and lets go of about a quarter of its staff. Its CEO sums it up: the unpredictability in forecasting home prices "far exceeds what we anticipated". The model was not bad on day one. It drifted, and nobody had the instrument to see it in time or the hand to stop it.

In both cases, the liability existed before it cost anything. It sat on no balance sheet. It was waiting.

The AI Act now gives it an order of magnitude. Fines can reach 35 million euros or 7% of worldwide turnover for prohibited practices, and 15 million or 3% for other obligations. A buyer, a lender or an insurer who reads those figures does not wonder whether your AI is brilliant. They wonder whether you can prove it is under control.

## What rules did to real estate

To understand what is happening, look at what happened to housing in France.

For decades, an energy sieve sold for roughly the same price as any house of the same size on the same street. The defect existed, heating cost a fortune, but it was invisible at signing. Then the energy performance diagnosis (the French DPE) became legally binding in July 2021, and the law set a calendar known to all: homes rated G can no longer be let under a new lease since 1 January 2025, F will follow in 2028, E in 2034.

The market did the rest. According to French notaries, a 90 to 110 m² house rated A or B sold in 2021 for one and a half times the price of a house of the same size rated F or G. By 2024, the ratio had reached 1.9.

The rule did not create the defect. It made it visible, comparable, and therefore priceable. And it rewarded those who had diagnosed and renovated ahead of the others: their property did not gain value because it was better, but because they could prove it.

Finance has known this mechanism for a long time. A study of private US companies, which nothing obliges to have their accounts audited, shows that those who do so anyway borrow more cheaply: banks give more weight to a verified figure when setting their rate. An audit does not create profitability. It makes it believable, and credit is paid for in belief.

Your AI is entering exactly this movement. Tomorrow, an AI that is documented, monitored, whose incidents are traced and corrected, will be worth more than an identical AI nobody knows anything about. Not because it works better. Because it can be shown.

## Stability is a competitive advantage

There is a second argument, one that finance executives grasp immediately: what destroys the value of an asset is not the rule, it is uncertainty about the rule.

Let us look at the facts without taking sides. Europe has a text and a calendar published in its Official Journal, and when it decided to postpone it, it did so through a regulation that sets precise new dates: 2 December 2027 for the high-risk systems of Annex III, 2 August 2028 for those embedded in regulated products. You can dispute the content. You can plan.

In the United States, Colorado passed the first comprehensive AI law in 2024, due to apply in February 2026. It was pushed back to June 2026, then repealed in May 2026 and replaced by a different text, applicable in January 2027. Meanwhile, a presidential executive order of 11 December 2025 set up a task force to challenge state AI laws in court. I am not saying which of these two models is better for innovation. I am saying which one is easier to put into a valuation spreadsheet.

A buyer, a fund or an insurer always prefers a known rule to an unknown one, even a more demanding one. And the AI Act applies to any company whose AI has effects in the Union, wherever it is based. A group that can already prove what its AI does, under the most readable rule on the market, holds an asset its competitors will have to rebuild in a hurry.

It is a first-mover rent. Like the houses renovated before 2025.

## What the executives who get it are doing

Those who are pulling ahead do not talk about compliance. They talk about assets. In practice, they do four things.

They keep the register of their AI systems like a fixed-asset register: every system inventoried, with its named owner, its use, its risk class and what it earns. An AI missing from the register is an asset that can neither be valued nor defended.

They produce evidence as they go, like bookkeeping, not the night before an inspection. Evidence dated on the day of the event is worth something. Evidence rebuilt three months later convinces no one.

They report to the board, with a few indicators that stay stable from one quarter to the next: the reliability of answers, real costs, the state of the evidence, actual usage, and the freshness of the knowledge that feeds the systems. What gets presented to the board ends up being managed.

And they prepare for the day someone asks them to show it. That day always comes: a funding round, a sale, a tender, an audit, an incident. On that day, nobody will ask whether your AI performs well. They will ask you to prove it.

## The danger, the advice

[[danger-conseil]]

## Rules set the currency of proof

We can keep debating whether Europe regulates too much. It is a legitimate debate, and it will last. But while it lasts, something more concrete is taking hold: the rule defines what counts as evidence. It sets the currency in which trust will be paid, to customers, regulators, buyers and lenders.

The companies that win will not be those with the fewest rules. They will be those able to pay first in that currency.

So, to every executive reading this, one question only, the one a buyer will ask you sooner or later: if you had to sell your company tomorrow, could you prove what your AI does?

*Pascal Mennesson, founder of Maltem Consulting Group, founder of 56North. If you are an executive and would like to discuss this, [request a first conversation](/en#diagnostic).*
`,
      dangers: [
        { danger: "Your AI systems appear in no inventory: they create value nobody can price and risks nobody can see.", advice: "Keep a register of your AI systems like a fixed-asset register, with a named owner for each system." },
        { danger: "Evidence is rebuilt at the time of an inspection or a due diligence.", advice: "Produce dated evidence as you go, from the day a system goes live." },
        { danger: "The board discovers the company's AI systems when an incident happens.", advice: "Present a few stable indicators every quarter: reliability, costs, evidence, usage, reference sources." },
      ],
      faq: [
        { q: "Isn't AI Act compliance first and foremost a cost?", a: "It has a cost, like an audit of the accounts or a property survey. But it makes the value of your AI verifiable, which reduces the uncertainty of a buyer, a lender or an insurer. And uncertainty always costs more than proof." },
        { q: "Doesn't the AI Act postponement make the subject less urgent?", a: "The postponement set precise new dates: 2 December 2027 for the high-risk systems of Annex III, 2 August 2028 for those of Annex I. Prohibited practices and transparency obligations already apply. A known calendar is precisely what lets you get ahead." },
        { q: "Is a company based outside Europe concerned?", a: "Yes, as soon as the outputs of its AI are used in the European Union: recruiting, assessing or serving people in Europe is enough (Article 2 of the regulation)." },
      ],
    },
  },
};

export default article;
