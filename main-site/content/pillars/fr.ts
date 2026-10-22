import type { PillarDictionary } from "./types";
import { deployerGuide, sources } from "./sources";

/**
 * Pages piliers, version française. Mêmes règles que content/fr.ts (docs/faits-publics.md) :
 * - Cockpit : livré, décrit au présent. Jamais « preuves versionnées » ni « rejouable à une date passée ».
 * - Human in the Loop, Factory : des OFFRES (« activée sur engagement », « mise en place sur abonnement »),
 *   jamais au présent comme un dispositif qui tourne.
 * - Faits réglementaires : uniquement ceux des sources listées, ouvertes le 12/10/2026.
 * Les espaces insécables avant ? ! : ; sont ajoutées automatiquement.
 */
const fr: PillarDictionary = {
  ui: {
    home: "Accueil",
    faqTitle: "Questions fréquentes",
    sourcesTitle: "Sources",
    sourcesNote: "Sources ouvertes le 12 octobre 2026.",
    relatedTitle: "Pour aller plus loin",
    ctaTitle: "Savez-vous quelles IA tournent chez vous, et qui en répond ?",
    ctaBody: "Premier échange de 30 minutes offert, sans engagement.",
    cta: "Demander un diagnostic",
    updated: "Mis à jour le 12 octobre 2026",
    footerTitle: "Gouvernance de l'IA",
    more: {
      cockpit: "En savoir plus sur le Cockpit",
      hitl: "En savoir plus sur Human in the Loop",
      factory: "En savoir plus sur la Factory",
      whyThirdParty: "En savoir plus sur la gouvernance IA par un tiers",
      clock: "Quelles preuves préparer pour la conformité AI Act",
    },
  },
  pages: {
    /* ------------------------------------------------------------------ Cockpit */
    cockpit: {
      title: "Cockpit IA entreprise : piloter et prouver vos IA",
      description:
        "Le Cockpit 56North pilote toutes les IA de l'entreprise : registre, note de 0 à 100 sur cinq cadrans, rapport de vol mensuel scellé, preuves datées AI Act.",
      name: "Le Cockpit",
      eyebrow: "Le Cockpit · Le logiciel",
      h1: "Cockpit IA d'entreprise : piloter et prouver toutes vos IA",
      answer:
        "Le Cockpit est le logiciel de 56North : le registre de toutes les IA de l'entreprise, une note de 0 à 100 sur cinq cadrans, un rapport de vol mensuel scellé et des preuves datées, quels que soient les éditeurs.",
      status: "Disponible",
      service: {
        name: "Cockpit 56North",
        serviceType: "Plateforme de pilotage et de gouvernance de l'IA",
        description:
          "Registre des IA de l'entreprise, classes de risque historisées, échéancier réglementaire, note de navigabilité sur cinq cadrans et rapport de vol mensuel scellé.",
      },
      keywords: ["cockpit IA entreprise", "pilotage IA", "tableau de bord IA entreprise", "note IA", "gouvernance IA logiciel"],
      related: ["governance", "register", "compliance", "hitl", "factory"],
      body: `
## Ce que fait le Cockpit

Une entreprise utilise aujourd'hui l'IA de son CRM, celle de sa suite bureautique, celle de son ERP et celle de son outil de tickets. Chaque éditeur montre son propre tableau de bord. Aucun ne montre l'ensemble.

Le Cockpit se place au-dessus, du côté de l'entreprise. Il rassemble en un seul endroit :

- le [registre de vos IA](/registre-des-ia), chacune avec son usage et un responsable nommé ;
- leur classe de risque au sens de l'AI Act, historisée ;
- l'échéancier des paliers du règlement qui s'appliquent à vous ;
- les preuves rattachées aux articles de l'AI Act, avec le journal de qui a fait quoi ;
- la note de navigabilité et le rapport de vol mensuel.

## Cinq cadrans, une note de 0 à 100

Une méthodologie publiée, versionnée, identique pour tous les clients. Chaque note porte la version de la méthode qui l'a produite et le périmètre qu'elle couvre.

| Cadran | Ce qu'il mesure |
|---|---|
| Fiabilité | La qualité des réponses, évaluée sur vos échanges réels. |
| Coûts | Le coût par dossier traité, et sa tendance. |
| Preuves AI Act | Le registre, les preuves, les échéances applicables. |
| Utilisation | Qui utilise réellement chaque IA. |
| Référentiels | La fraîcheur du savoir dont vos IA se nourrissent. |

Une note de 0 à 100, une lettre de A à E, une tendance sur 30 jours. Ce qui peut être mesuré l'est automatiquement ; ce qui repose sur une déclaration est signalé comme tel. Le périmètre accompagne toujours la note : une note calculée sur quatre IA sur six le dit.

## Le rapport de vol mensuel

Chaque mois, le rapport de vol est figé à sa publication et scellé par une empreinte qui garantit qu'il n'a pas été modifié depuis. Un tiers peut vérifier cette empreinte. C'est une empreinte de contenu, pas une signature électronique.

Le rapport se lit en deux minutes par un comité de direction : la note, son évolution, les écarts, les preuves manquantes.

## Des preuves datées, avec leur auteur

Un tableau de bord montre l'état d'aujourd'hui. Une preuve montre ce qui était vrai à une date donnée et qui l'a constaté. Dans le Cockpit, chaque preuve porte une date d'enregistrement et son auteur, et se rattache à l'article du règlement qu'elle documente. La page [Conformité AI Act](/conformite-ai-act) détaille quelles preuves constituer.

## En route en trois temps

1. **Déclarer.** Quelques questions par IA, et le registre se remplit.
2. **Brancher.** Une adresse et une clé à changer dans le logiciel.
3. **Mesurer.** Les cadrans s'allument dès les premiers appels.

Les IA intégrées à un progiciel, qu'on ne peut pas brancher, entrent quand même au registre : elles sont classées et reçoivent leurs preuves.

## Deux modes de déploiement

- **SaaS**, hébergé par 56North : une instance dédiée, mise en route rapide, mises à jour incluses.
- **On-premise**, installé chez vous : pour les secteurs régulés, installation conduite par notre équipe.

Même méthode de notation dans les deux cas. Une instance et une base par client, jamais mutualisées. Les identités des utilisateurs sont pseudonymisées dès l'arrivée, de façon irréversible.

## Ce que le Cockpit ne fait pas seul

Un logiciel seul ne prouve rien. Deux offres le complètent, et s'achètent séparément : [Human in the Loop](/human-in-the-loop), pour faire tester vos IA par des humains, et la [Factory](/factory), pour raccorder et maintenir vos systèmes en place.
`,
      faq: [
        {
          q: "Le Cockpit remplace-t-il les outils de gouvernance des éditeurs ?",
          a: "Non. Les outils natifs restent nécessaires : ils gouvernent chaque IA de l'intérieur. Le Cockpit se place au-dessus, du côté de l'entreprise, et consolide ce qu'ils produisent en un seul registre, une seule note, un seul dossier de preuves.",
        },
        {
          q: "Et les IA incluses dans notre progiciel, qu'on ne peut pas brancher ?",
          a: "Elles entrent au registre, sont classées et reçoivent leurs preuves. Le règlement demande de les gouverner, pas forcément de les mesurer. La note indique toujours le périmètre qu'elle couvre.",
        },
        {
          q: "Peut-on installer le Cockpit chez nous ?",
          a: "Oui. En mode SaaS, sur une instance dédiée, ou en on-premise, dans votre infrastructure. La méthode et la note sont strictement identiques.",
        },
      ],
    },

    /* -------------------------------------------------------- Human in the Loop */
    hitl: {
      title: "Human in the Loop : tests humains de vos IA",
      description:
        "Human in the Loop, offre activée sur engagement avec Isahit : tests et relectures de vos IA par des humains formés, versés au Cockpit comme preuves datées.",
      name: "Human in the Loop",
      eyebrow: "Human in the Loop · Prouver, avec nos partenaires",
      h1: "Human in the Loop : des tests humains indépendants pour vos IA",
      answer:
        "Human in the Loop est l'offre de 56North, activée sur engagement avec notre partenaire Isahit, qui prévoit que des personnes formées mettent vos IA à l'épreuve et relisent leurs réponses ; chaque résultat entre au Cockpit comme preuve datée, avec son auteur.",
      status: "Activée sur engagement, avec notre partenaire Isahit",
      service: {
        name: "Human in the Loop",
        serviceType: "Tests humains et relecture de systèmes d'IA",
        description:
          "Offre activée sur engagement, avec le partenaire Isahit : campagnes de tests en boîte noire, double regard, relecture d'échantillons de conversations réelles et jeux de tests, versés au Cockpit comme preuves datées.",
      },
      keywords: ["human in the loop IA", "test humain IA", "audit biais IA", "relecture réponses IA", "red teaming IA entreprise"],
      related: ["cockpit", "factory", "governance", "compliance"],
      body: `
## Pourquoi des humains, et pas l'éditeur

Un éditeur ne peut pas être juge et partie de ses propres biais. Son outil de gouvernance existe pour vous rassurer sur son produit. Un contrôleur, un assureur ou un client grand compte demandera qui, en dehors de l'éditeur, a vérifié.

Les mesures automatiques du [Cockpit](/cockpit) disent combien une IA coûte et qui l'utilise. Elles ne disent pas si une réponse est juste, biaisée ou dangereuse. Pour cela, il faut des personnes qui lisent.

## Ce que l'offre couvre

- **Campagnes de tests en boîte noire.** Biais, hallucinations, fuites de données, procédures non respectées : des scénarios écrits pour vos cas d'usage, joués sur vos IA telles qu'elles tournent.
- **Double regard.** Chaque cas est jugé par deux personnes indépendantes. En cas de désaccord, un troisième avis tranche.
- **Relecture de conversations réelles.** Des échantillons relus par des personnes résidant dans l'Union européenne, en équipes constituées pour chaque client selon nos exigences, dans le cadre précisé au bon de commande.
- **Jeux de tests pour vos agents.** Constitution et annotation des scénarios qui serviront ensuite à vos tests de non-régression.

## Comment un résultat devient une preuve

Chaque résultat entre au Cockpit comme preuve datée, avec son auteur. C'est ce qu'un contrôleur accepte, et ce qu'aucun outil d'éditeur ne peut produire sur ses propres IA. Les preuves se rattachent aux systèmes du [registre des IA](/registre-des-ia) et aux obligations qu'elles documentent.

## Notre partenaire : Isahit

[Isahit](https://www.isahit.com/) est une société française spécialisée dans l'annotation de données. Première entreprise européenne d'IA éthique certifiée B Corp : plus de 1 000 annotateurs, plus de 7 500 projets, des références comme Airbus, Orange et L'Oréal.

L'offre est activée sur engagement : chaque campagne se prépare pour un client, sur ses cas d'usage, dans le cadre fixé au bon de commande.

## Construire et contrôler restent séparés

Une campagne Human in the Loop ne teste jamais un système que la [Factory](/factory) a construit ou maintient chez le même client. C'est la condition pour que le résultat compte comme un regard indépendant.

Pour situer cette offre dans l'ensemble, voir la page [Gouvernance IA](/gouvernance-ia).
`,
      faq: [
        {
          q: "Qui voit nos données pendant les tests ?",
          a: "La détection de biais se fait sur des scénarios fabriqués, sans aucune de vos données. La relecture d'échanges réels est réservée à des personnes résidant dans l'Union européenne, et précisée au bon de commande.",
        },
        {
          q: "Peut-on commander des campagnes sans le reste ?",
          a: "Oui : le Cockpit seul, des campagnes Human in the Loop seules, ou la Factory pour faire tourner vos systèmes. L'ensemble fonctionne mieux, mais rien n'oblige à tout prendre.",
        },
        {
          q: "Une campagne de tests vaut-elle certification ?",
          a: "Non. Nous préparons un dossier de preuves prêt pour un contrôle. Nous ne l'appelons jamais certification.",
        },
      ],
    },

    /* ------------------------------------------------------------------ Factory */
    factory: {
      title: "Factory : connecter et maintenir vos IA en place",
      description:
        "La Factory, mise en place sur abonnement avec Wikolabs, raccorde au Cockpit les IA déjà en service, les maintient en production et prépare le rapport mensuel.",
      name: "Factory",
      eyebrow: "Factory · Opérer, avec nos partenaires",
      h1: "Factory : connecter, maintenir et faire tourner les IA déjà en place",
      answer:
        "La Factory est l'offre de 56North, mise en place sur abonnement avec notre partenaire Wikolabs, qui prévoit de raccorder au Cockpit les IA que vous utilisez déjà, de les maintenir en production et de préparer le rapport de vol mensuel.",
      status: "Mise en place sur abonnement, avec notre partenaire Wikolabs",
      service: {
        name: "Factory",
        serviceType: "Raccordement, maintenance et supervision de systèmes d'IA",
        description:
          "Offre mise en place sur abonnement, avec le partenaire Wikolabs : raccordement des IA en place au Cockpit, maintenance en production, surveillance des dérives et préparation du rapport de vol mensuel.",
      },
      keywords: ["maintenance IA en production", "exploitation IA entreprise", "supervision IA", "centre de gouvernance IA"],
      related: ["cockpit", "hitl", "governance", "register"],
      body: `
## Le constat

La plupart des IA d'une entreprise sont déjà en place, chez plusieurs éditeurs. Elles évoluent à chaque version de l'éditeur, leurs sources de connaissance vieillissent, leurs coûts dérivent sans message d'erreur. Les suivre demande une équipe que peu d'entreprises veulent monter.

Avec notre partenaire Wikolabs, la Factory est conçue pour raccorder ces IA au [Cockpit](/cockpit), les garder fiables en production et vous éviter de monter une équipe dédiée. L'équivalent d'un centre de surveillance cybersécurité, pour la gouvernance de l'IA.

## Ce que la Factory prend en charge

- **Raccorder.** Brancher vos IA au Cockpit : passerelle, journaux, puis connecteurs éditeurs à mesure qu'ils arrivent. Vous passez du niveau « déclaré » au niveau « connecté ».
- **Maintenir.** Tests rejoués après chaque version d'éditeur, sources de connaissance tenues à jour, droits d'accès revus, coûts suivis.
- **Surveiller et alerter.** Les dérives sont repérées et signalées avant qu'un client, un salarié ou un contrôleur ne les découvre.
- **Produire le rapport.** Le rapport de vol mensuel, préparé par la Factory et publié par un humain.

## Déclaré, puis connecté

Une IA entre au [registre](/registre-des-ia) par une déclaration : son usage, son responsable, sa classe de risque. Elle est alors gouvernée, mais pas mesurée. Une fois raccordée, ses appels alimentent les cadrans du Cockpit. Le passage de l'un à l'autre est le premier travail de la Factory.

## Notre partenaire : Wikolabs

Wikolabs installe des agents sur modèles ouverts, chez ses clients, raccordés à leurs ERP, CRM et bases de données. Une méthode en six étapes, avec une démonstration à chaque sprint et votre validation à chaque livrable.

La Factory est mise en place sur abonnement : son périmètre se fixe avec vous, système par système.

## Règle d'indépendance

Une campagne [Human in the Loop](/human-in-the-loop) ne teste jamais un système que la Factory a construit ou maintient chez le même client. Construire et contrôler restent séparés.

Pour situer cette offre dans l'ensemble, voir la page [Gouvernance IA](/gouvernance-ia).
`,
      faq: [
        {
          q: "Peut-on prendre la Factory sans le reste ?",
          a: "Oui : le Cockpit seul, des campagnes Human in the Loop seules, ou la Factory pour faire tourner vos systèmes. L'ensemble fonctionne mieux, mais rien n'oblige à tout prendre.",
        },
        {
          q: "Qui publie le rapport de vol ?",
          a: "Le rapport de vol mensuel est préparé par la Factory et publié par un humain. Une fois publié, il est figé et scellé par une empreinte qui garantit qu'il n'a pas été modifié depuis.",
        },
        {
          q: "La Factory peut-elle tester les systèmes qu'elle maintient ?",
          a: "Non. Une campagne Human in the Loop ne teste jamais un système que la Factory a construit ou maintient chez le même client. Construire et contrôler restent séparés.",
        },
      ],
    },

    /* ----------------------------------------------------------- Gouvernance IA */
    governance: {
      title: "Gouvernance IA : le rôle d'un tiers indépendant",
      description:
        "Gouvernance de l'IA en entreprise : les six questions à trancher, pourquoi les outils des éditeurs ne suffisent pas, le calendrier AI Act, par où commencer.",
      name: "Gouvernance IA",
      eyebrow: "Gouvernance IA",
      h1: "Gouvernance IA : pourquoi confier la preuve à un tiers indépendant",
      answer:
        "Gouverner l'IA, c'est savoir quelles IA l'entreprise utilise, qui en répond, ce qu'elles font, quel risque elles créent, si elles se comportent comme prévu, et pouvoir le prouver ; 56North est le tiers indépendant qui tient ce dossier, tous éditeurs confondus.",
      keywords: ["gouvernance IA", "gouvernance de l'IA en entreprise", "tiers indépendant IA", "AI Act déployeur", "pilotage IA"],
      related: ["register", "compliance", "cockpit", "hitl", "factory"],
      body: `
## Six questions, et personne pour y répondre

Celles qu'une direction générale se pose dès que l'IA entre dans les opérations.

1. **Quelles IA avons-nous ?** Y compris celles que personne n'a déclarées : comptes individuels, fonctions activées par une mise à jour de logiciel.
2. **Qui en répond ?** Une personne physique, nommée. C'est la première chose qu'un contrôleur demande, et rarement ce qu'il trouve.
3. **Que font-elles ?** Sur quels dossiers, à quel rythme, pour combien de personnes. Et qui s'en sert réellement.
4. **Quel risque créent-elles ?** La classe de risque dépend de l'usage : trier des candidatures ou résumer une réunion n'engage pas les mêmes obligations.
5. **Se comportent-elles comme prévu ?** Personne ne relit les réponses de l'IA. Les écarts se découvrent trop tard.
6. **Pouvons-nous le prouver ?** Au contrôle, l'intention ne suffit pas : il faut des preuves datées, avec le nom de leur auteur.

Les deux premières questions se règlent avec un [registre des IA](/registre-des-ia). La dernière, avec un dossier de [preuves de conformité AI Act](/conformite-ai-act).

## Fournisseur et déployeur : deux responsabilités distinctes

Le règlement européen sur l'IA (AI Act) distingue deux rôles. Le **fournisseur** développe un système d'IA et le met sur le marché sous son nom. Le **déployeur** utilise un système d'IA sous sa propre autorité, dans un cadre professionnel (article 3).

L'éditeur répond de son produit. Vous répondez de l'usage que vous en faites. Pour les systèmes à haut risque, l'article 26 vous demande notamment de confier la surveillance humaine à des personnes compétentes, de surveiller le fonctionnement et de conserver les journaux au moins six mois. L'article 50 impose des obligations de transparence. Aucun outil d'éditeur ne porte ces obligations à votre place.

## Pourquoi les outils natifs ne suffisent pas

Chaque grand éditeur livre désormais sa propre tour de contrôle. Ces outils sont utiles. Ils ne répondent pas à la question qu'un contrôleur vous posera.

- **Chaque tour de contrôle ne voit que son écosystème.** Quatre éditeurs, quatre tableaux de bord, quatre définitions de la conformité. Aucun ne voit les trois autres.
- **Celui qui vend l'IA ne peut pas la noter.** Un éditeur qui évalue ses propres agents est juge et partie. Ce n'est pas une accusation, c'est une position.
- **Une preuve se juge à sa tenue dans le temps.** Un tableau de bord montre l'état d'aujourd'hui. Une preuve montre ce qui était vrai à une date donnée, qui l'a constaté, et qu'elle n'a pas été retouchée depuis.

Les outils natifs gouvernent chaque IA de l'intérieur. Un tiers se place au-dessus, du côté de l'entreprise, et consolide ce qu'ils produisent en un seul registre, une seule note, un seul dossier de preuves. 56North ne vend ni modèle, ni intégration, ni cloud.

## L'horloge réglementaire

L'AI Act s'applique par paliers. Le règlement (UE) 2026/1744, dit omnibus numérique sur l'IA, a reporté les règles des systèmes à haut risque.

| Date | Ce qui s'applique |
|---|---|
| 2 février 2025 | Pratiques interdites et maîtrise de l'IA (article 4) |
| 2 août 2025 | Modèles d'IA à usage général |
| 2 août 2026 | Transparence (article 50) et début des contrôles |
| 2 décembre 2027 | Systèmes à haut risque de l'annexe III, dont le recrutement |
| 2 août 2028 | Haut risque : IA intégrée aux produits réglementés de l'annexe I |

Les amendes vont jusqu'à 35 M€ ou 7 % du chiffre d'affaires mondial pour les pratiques interdites, et jusqu'à 15 M€ ou 3 % pour les manquements aux obligations des déployeurs (article 26) et de transparence (article 50), le montant le plus élevé étant retenu ; pour les PME, le moins élevé (article 99).

## Contrôler, prouver, opérer

Un logiciel seul ne prouve rien. Il faut aussi des humains qui testent, et une équipe qui tient la barre. Les trois composantes s'achètent séparément.

- **[Le Cockpit](/cockpit)**, le logiciel, disponible : registre, note sur cinq cadrans, rapport de vol mensuel.
- **[Human in the Loop](/human-in-the-loop)**, activée sur engagement avec Isahit : des tests et des relectures par des humains formés.
- **[La Factory](/factory)**, mise en place sur abonnement avec Wikolabs : raccorder et maintenir les IA en place.

## Par où commencer

Par la carte. Un diagnostic à prix fixe dresse la liste de vos IA, leur classement, et ce qui manquerait devant un contrôleur. Le premier échange de 30 minutes est offert.
`,
      faq: [
        {
          q: "Qu'est-ce que la gouvernance de l'IA en entreprise ?",
          a: "C'est l'ensemble des règles et des preuves qui permettent de répondre à six questions : quelles IA l'entreprise utilise, qui en répond, ce qu'elles font, quel risque elles créent, si elles se comportent comme prévu, et comment le prouver.",
        },
        {
          q: "Quelle différence avec les outils de conformité des éditeurs ?",
          a: "Chaque éditeur prouve la conformité de son propre outil. 56North se place du côté de l'entreprise qui déploie les IA, et consolide l'ensemble de son parc, quel que soit le fournisseur.",
        },
        {
          q: "Nous ne sommes pas dans l'Union européenne. Sommes-nous concernés ?",
          a: "Probablement, si vous avez des filiales, des clients ou des candidats dans l'Union. Et au-delà du règlement, la question demeure : vos IA font-elles ce que vous croyez ?",
        },
      ],
      sources: sources("fr", ["timeline", "omnibus", "art3", "art4", "art26", "art50", "art99", "employment"]),
    },

    /* --------------------------------------------------------- Registre des IA */
    register: {
      title: "Registre des IA en entreprise : contenu et rôle",
      description:
        "Registre des IA d'entreprise : ce qu'il contient (usage, responsable, classe de risque, preuves), pourquoi il fonde la conformité AI Act, comment le bâtir.",
      name: "Registre des IA",
      eyebrow: "Registre des IA",
      h1: "Registre des IA d'entreprise : ce qu'il contient et à quoi il sert",
      answer:
        "Un registre des IA est la liste de tous les systèmes d'IA qu'utilise une entreprise, avec pour chacun son usage, son responsable, sa classe de risque au sens de l'AI Act et les preuves associées : c'est le point de départ de toute gouvernance de l'IA.",
      keywords: ["registre des IA entreprise", "inventaire systèmes IA", "modèle registre IA AI Act", "responsable IA nommé", "cartographie des IA"],
      related: ["compliance", "governance", "cockpit", "factory"],
      body: `
## Pourquoi tenir un registre

Les obligations de l'AI Act ne s'appliquent pas à « l'IA » en général. Elles dépendent de chaque système et de son usage. Un assistant qui résume des réunions et un outil qui trie des candidatures n'engagent pas les mêmes règles. Le second relève en principe du haut risque (annexe III, point 4), le premier non.

Pour savoir quelles règles s'appliquent, il faut d'abord savoir quelles IA tournent. C'est le rôle du registre. Sans lui, aucune des autres questions de [gouvernance de l'IA](/gouvernance-ia) n'a de réponse.

Le règlement n'emploie pas le mot « registre » pour un inventaire interne. Il ne le prescrit pas sous ce nom à toutes les entreprises. Mais chacune de ses obligations porte sur un système précis : sans inventaire, impossible de montrer qu'on les a examinées.

## À ne pas confondre avec la base de données de l'UE

L'AI Act crée une base de données européenne. Les fournisseurs y enregistrent les systèmes à haut risque de l'annexe III. Les autorités publiques qui les déploient y enregistrent leur utilisation (article 49). Une entreprise privée qui déploie un système n'a pas cette obligation d'enregistrement, sauf si elle agit pour le compte d'une autorité publique. Son registre interne reste le sien.

## Ce qu'un registre contient

| Rubrique | Pourquoi |
|---|---|
| Le système et son éditeur | Savoir de quoi on parle, y compris les fonctions IA d'un progiciel. |
| L'usage | La classe de risque dépend de l'usage, pas de la technologie. |
| Le responsable nommé | Une personne physique. C'est la première chose qu'un contrôleur demande. |
| Le rôle de l'entreprise | Déployeur, ou fournisseur si elle met le système en service sous son propre nom (article 3). |
| La classe de risque, datée | Un classement change quand l'usage change : il faut garder l'historique. |
| Les obligations et leurs échéances | Transparence depuis le 2 août 2026, haut risque au 2 décembre 2027. |
| Les preuves rattachées | Chaque preuve avec sa date et son auteur. |
| Le niveau de suivi | Déclaré, ou connecté et mesuré. |

## Les IA qu'on oublie

Le registre ne vaut que s'il est complet. Trois familles échappent souvent à l'inventaire :

- **les comptes individuels**, ouverts par des salariés sans passer par la DSI ;
- **les fonctions activées par une mise à jour** d'un logiciel déjà en place ;
- **les IA intégrées à un progiciel**, qu'on ne peut pas brancher. Elles entrent quand même au registre : le règlement demande de les gouverner, pas forcément de les mesurer.

L'obligation de maîtrise de l'IA (article 4) vise le personnel qui utilise des systèmes d'IA. Le registre dit aussi qui les utilise.

## Du registre aux preuves

Un registre tenu dans un tableur montre l'état du jour. Devant un contrôleur, il faut montrer ce qui était vrai à une date passée : quand tel système a été classé, par qui, sur quelle base. C'est pourquoi la classe de risque doit être historisée et chaque preuve datée. La page [Conformité AI Act](/conformite-ai-act) détaille quelles preuves rattacher à chaque obligation.

## Comment le constituer

1. **Déclarer.** Quelques questions par IA : usage, responsable, éditeur. Le registre se remplit.
2. **Classer.** La classe de risque au sens de l'AI Act, et les obligations qui en découlent.
3. **Raccorder ce qui peut l'être.** Une IA raccordée est mesurée, plus seulement déclarée.

Dans le [Cockpit](/cockpit), le registre, les classes de risque historisées et les preuves datées tiennent en un seul endroit, quels que soient les éditeurs. La [Factory](/factory) est l'offre qui prévoit le raccordement des systèmes en place.
`,
      faq: [
        {
          q: "Le registre des IA est-il obligatoire ?",
          a: "L'AI Act ne prescrit pas sous ce nom un registre interne à toutes les entreprises. Mais ses obligations portent chacune sur un système et un usage précis : sans inventaire, une entreprise ne peut pas montrer qu'elle les a examinées.",
        },
        {
          q: "Faut-il y inscrire Copilot, Agentforce ou les IA intégrées à nos logiciels ?",
          a: "Oui. Une entreprise qui utilise un système d'IA sous sa propre autorité, dans un cadre professionnel, en est le déployeur au sens de l'article 3, quel que soit l'éditeur.",
        },
        {
          q: "Quelle différence avec la base de données européenne ?",
          a: "La base de l'UE reçoit l'enregistrement des systèmes à haut risque de l'annexe III par leurs fournisseurs, et celui de leur utilisation par les autorités publiques (article 49). Le registre interne couvre toutes les IA de l'entreprise.",
        },
      ],
      sources: sources("fr", ["art3", "art4", "art6", "art49", "art50", "employment", "timeline"]),
    },

    /* ------------------------------------------------------- Conformité AI Act */
    compliance: {
      title: "Conformité AI Act : les preuves à constituer",
      description:
        "Conformité AI Act en entreprise : quelles preuves constituer pour chaque obligation du déployeur, ce qui les rend opposables, qui les produit et quand.",
      name: "Conformité AI Act",
      eyebrow: "Conformité AI Act",
      h1: "Conformité AI Act : quelles preuves constituer, et qui les produit",
      answer:
        "Être en conformité avec l'AI Act ne suffit pas, il faut pouvoir le montrer : avec des preuves datées, attribuées à leur auteur et intactes depuis leur enregistrement, qui portent sur vos propres usages et non sur le produit de l'éditeur.",
      keywords: ["preuves de conformité AI Act", "conformité AI Act entreprise", "AI Act déployeur preuves", "dossier de conformité IA", "AI Act article 26"],
      related: ["register", "governance", "cockpit", "hitl"],
      body: `
## Qui est concerné ?

Le règlement ne trie pas les entreprises par taille ni par secteur, mais par usage.

- **Toutes les tailles.** Il n'existe pas d'exemption pour les PME. Elles bénéficient d'allègements, comme une documentation simplifiée et des plafonds d'amendes plus bas, pas d'une dispense.
- **Au-delà de l'Union.** Le règlement s'applique aux déployeurs établis dans l'Union, et aux fournisseurs et déployeurs établis ailleurs dès que les résultats produits par le système sont utilisés dans l'Union (article 2). Une entreprise suisse, mauricienne ou américaine qui recrute, évalue ou sert des personnes dans l'Union est concernée.
- **Tous les secteurs.** Le haut risque se définit par l'usage (annexe III) : biométrie, infrastructures critiques, éducation, emploi et gestion des salariés, accès aux services essentiels (crédit, assurance santé et vie, prestations publiques), répression, migration, justice. Une chaîne d'hôtels qui trie des candidatures avec une IA est concernée au même titre qu'une banque. S'y ajoute l'IA intégrée à des produits déjà réglementés (annexe I), comme les machines ou les dispositifs médicaux.
- **Hors champ.** Les usages purement personnels, la défense et la sécurité nationale, la recherche scientifique menée pour elle-même.

## La conformité de l'éditeur n'est pas la vôtre

Le règlement distingue le **fournisseur**, qui développe un système d'IA et le met sur le marché sous son nom, et le **déployeur**, qui l'utilise sous sa propre autorité (article 3). L'éditeur documente son produit. Vous répondez de l'usage que vous en faites. Les preuves de l'un ne couvrent pas les obligations de l'autre.

Cette page porte sur les preuves. Le détail des obligations, plateforme par plateforme, est dans notre guide [AI Act : ce que doivent faire les entreprises qui utilisent Copilot, Agentforce ou Joule](${deployerGuide.fr}).

[[dossier-de-preuves]]

L'information prévue à l'article 50 doit être donnée au plus tard lors de la première interaction ou exposition. Les organismes publics, les entités privées fournissant des services publics et certains autres déployeurs doivent en outre conduire une analyse d'impact sur les droits fondamentaux avant de déployer un système à haut risque (article 27).

Une entreprise qui met un agent en service sous son propre nom peut aussi être fournisseur. Elle répond alors de l'article 50(1) : les personnes doivent savoir qu'elles s'adressent à une IA.

## Ce qui rend une preuve opposable

Une preuve se juge à sa tenue dans le temps. Pour qu'un contrôleur l'accepte, elle doit être :

- **datée** : ce qui était vrai, et à quelle date ;
- **attribuée** : qui l'a constatée, avec son nom ;
- **intacte** : rien ne permet de la retoucher sans que cela se voie ;
- **rattachée** : à un système du [registre des IA](/registre-des-ia) et à l'article qu'elle documente ;
- **bornée** : son périmètre est dit, y compris ce qu'elle ne couvre pas.

Des captures d'écran dans un dossier partagé ne remplissent aucune de ces conditions.

## Qui produit quelles preuves

| Preuve | Qui la produit |
|---|---|
| Notice d'utilisation, documentation du système | Le fournisseur, qui la remet au déployeur |
| Registre, classe de risque, responsable nommé | L'entreprise, dans le [Cockpit](/cockpit) |
| Mesures de coût et d'utilisation | Le Cockpit, à partir des appels mesurés |
| Tests et relectures par des humains | [Human in the Loop](/human-in-the-loop), offre activée sur engagement |
| Rapport de vol mensuel, figé et scellé | Le Cockpit, publié par un humain |

Dans le Cockpit, chaque preuve porte une date d'enregistrement et son auteur. Le rapport de vol mensuel est figé à sa publication et scellé par une empreinte qu'un tiers peut vérifier.

## Ce que 56North ne fait pas

Nous ne délivrons pas de certification. Nous préparons un dossier de preuves prêt pour un contrôle, sur le périmètre des obligations de l'entreprise qui déploie des IA, notamment les articles 26 et 50. Nous ne l'appelons jamais certification.

## Ce que coûte l'absence de preuve

Les manquements aux obligations des déployeurs (article 26) et aux obligations de transparence (article 50) exposent à des amendes jusqu'à 15 M€ ou 3 % du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu, et le moins élevé pour les PME. Pour les pratiques interdites, le plafond est de 35 M€ ou 7 % (article 99). Pour situer ces échéances dans l'ensemble, voir [Gouvernance IA](/gouvernance-ia).
`,
      faq: [
        {
          q: "Les preuves de conformité de l'éditeur nous couvrent-elles ?",
          a: "Non. L'éditeur, fournisseur au sens du règlement, documente son produit. L'entreprise qui l'utilise est déployeur et répond de son usage : surveillance humaine, journaux, information des personnes, transparence.",
        },
        {
          q: "Combien de temps conserver les journaux d'une IA à haut risque ?",
          a: "Au moins six mois pour les journaux générés automatiquement dont le déployeur a le contrôle, ou plus si la finalité du système l'exige ou si un autre texte le prévoit (article 26, paragraphe 6). L'obligation s'applique aux systèmes de l'annexe III à partir du 2 décembre 2027.",
        },
        {
          q: "Existe-t-il une certification AI Act pour une entreprise qui utilise l'IA ?",
          a: "56North ne délivre pas de certification. Nous préparons un dossier de preuves prêt pour un contrôle, sur le périmètre des obligations du déployeur, notamment les articles 26 et 50.",
        },
      ],
      sources: sources("fr", ["art3", "art4", "art26", "art27", "art50", "art99", "timeline", "omnibus"]),
    },

    /* ------------------------------------------------------------------- About */
    about: {
      title: "À propos de 56North et de son fondateur",
      description:
        "56North est fondé par Pascal Mennesson, cofondateur de Maltem Consulting Group, développé jusqu'à plus de 1 100 consultants dans 12 pays avant sa cession.",
      name: "À propos",
      eyebrow: "Qui est derrière",
      h1: "À propos de 56North : le fondateur, Pascal Mennesson",
      answer:
        "56North est fondé par Pascal Mennesson, cofondateur de Maltem Consulting Group, développé à partir de 2001 jusqu'à plus de 1 100 consultants dans 12 pays avant sa cession.",
      keywords: ["56North", "Pascal Mennesson", "fondateur 56North"],
      related: ["governance", "cockpit"],
      body: `
## Fondé par un dirigeant qui a fait grandir une équipe de 1 100 consultants.

Il part d'un constat simple : les entreprises adoptent l'IA plus vite qu'elles ne savent la gouverner.
`,
      faq: [
        {
          q: "Qu'est-ce que 56North ?",
          a: "56North est le système de référence des IA d'une entreprise : un tiers qui recense, mesure et prouve le comportement de toutes ses intelligences artificielles, quels que soient leurs éditeurs, et qui ne vend ni modèle, ni intégration, ni cloud.",
        },
        {
          q: "Qui a fondé 56North ?",
          a: "Pascal Mennesson, cofondateur de Maltem Consulting Group, développé à partir de 2001 jusqu'à plus de 1 100 consultants dans 12 pays avant sa cession.",
        },
        {
          q: "Quelle société édite 56North ?",
          a: "Swell Invest Ltd, société immatriculée en République de Maurice, qui édite aussi 56North Experts, le réseau d'experts IA.",
        },
      ],
    },
  },
};

export default fr;
