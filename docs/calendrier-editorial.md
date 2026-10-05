# Calendrier éditorial — 56North (oct. → déc. 2026)

**Ligne éditoriale :** des conseils et des solutions concrètes sur les IA des plateformes d'entreprise (Microsoft, Salesforce, Google Cloud, SAP, ServiceNow, Workday), selon quatre piliers :

| Pilier | Ce qu'on y traite |
|---|---|
| **Intégrer** | Mise en production, architecture, données, droits, tests |
| **Utiliser** | Cas d'usage qui tiennent, adoption, mesure de la valeur |
| **Maintenir** | Dérives, suivi, coûts, mises à jour des éditeurs |
| **Réglementer et risques** | AI Act, données personnelles, surpartage, injection de prompt, IA non déclarées |

**Format de chaque article :** un encadré « L'essentiel » en 3 points, des listes à puces, un tableau quand c'est utile, une FAQ de 3 questions, des sources officielles. Une requête principale + 4 à 5 requêtes de niche.

**Angle danger / conseil, toujours** (demandé par Pascal le 5 oct.) : tout article publié porte un bloc « Le danger / Le conseil », le danger à gauche, le conseil à droite. Dans le code, c'est le champ `dangers` de l'article, placé dans le texte par la ligne `[[danger-conseil]]`. Sur 56north.io le champ est obligatoire : un article sans ce bloc ne compile pas.

**Règle :** le site d'abord, LinkedIn 2 jours après. Circuit : Claude rédige (EN + FR) → mise en ligne en brouillon (non indexé) → Pascal relit → Claude publie → post LinkedIn.

**Les requêtes de niche sont des hypothèses** : peu de concurrence, mais volumes non mesurés. Dans 4 semaines, la Search Console dira lesquelles démarrent, et on réorientera.

## Calendrier

| Semaine | Site | Pilier | Article (FR) | Requête principale | Requêtes de niche visées | Statut |
|---|---|---|---|---|---|---|
| 5 oct. | experts | Réglementer | AI Act : ce que doivent faire les entreprises qui utilisent Copilot, Agentforce ou Joule | AI Act obligations déployeur | AI Act Copilot obligations entreprise · AI Act chatbot mention obligatoire · AI Act haut risque décembre 2027 · suis-je déployeur AI Act | Brouillon prêt |
| 12 oct. | experts | Intégrer | Mettre un agent Agentforce en production : la check-list en 12 points | mise en production agent Agentforce | tester un agent Agentforce avant mise en production · droits agent Agentforce moindre privilège · limites Einstein Trust Layer · agent Agentforce mention IA obligatoire | Brouillon prêt |
| 19 oct. | experts | Maintenir | Maintenir un agent IA en production : ce qui se dégrade, et comment garder le contrôle | maintenir agent IA en production | dérive agent IA en production · maintenance agent Copilot Studio · tests de non-régression agent IA · coût par conversation agent IA | Brouillon prêt |
| 26 oct. | experts | Risques | Copilot et le surpartage des données : sécuriser SharePoint avant le déploiement | Copilot surpartage données | Copilot SharePoint permissions · Copilot étiquettes de confidentialité Purview · préparer Microsoft 365 Copilot sécurité | À écrire |
| 2 nov. | experts | Utiliser | Joule : les cas d'usage SAP qui tiennent en production | cas d'usage Joule SAP | Joule S/4HANA finance · Joule clean core · agents Joule Studio | À écrire |
| 9 nov. | 56north | Réglementer | Registre des IA : ce qu'il doit contenir pour un contrôle | registre des IA entreprise | modèle registre IA AI Act · inventaire systèmes IA · responsable IA nommé | À écrire |
| 16 nov. | experts | Risques | Injection de prompt : protéger un agent IA d'entreprise | injection de prompt agent IA | injection de prompt indirecte e-mail · agent IA sécurité OWASP · garde-fous agent IA | À écrire |
| 23 nov. | 56north | Réglementer | Article 50 de l'AI Act : mettre un chatbot client en conformité | AI Act article 50 chatbot | mention IA chatbot obligatoire · hypertrucage obligation signalement · transparence IA générative | À écrire |
| 30 nov. | experts | Maintenir | Now Assist : garder un déploiement ITSM performant | Now Assist maintenance | Now Assist ITSM résultats · ServiceNow AI Agents gouvernance · coût Now Assist | À écrire |
| 7 déc. | 56north | Risques | Shadow AI : faire l'inventaire des IA que personne n'a déclarées | shadow AI entreprise | IA non déclarées salariés · fonctions IA activées par mise à jour · politique d'usage IA | À écrire |
| 14 déc. | experts | Réglementer | IA et recrutement : ce qui change en décembre 2027 (Workday, SuccessFactors) | IA recrutement haut risque AI Act | Workday IA AI Act · tri de CV IA obligations · information représentants du personnel IA | À écrire |
| 21 déc. | experts | Utiliser | Mesurer la valeur d'un agent IA : les 4 indicateurs qui comptent | mesurer ROI agent IA | taux de résolution agent IA · coût par dossier IA · indicateurs Copilot adoption | À écrire |

## Articles de réaction (veille du lundi)

Chaque lundi, la veille propose au plus trois occasions d'article de réaction à l'actualité de la semaine. Pascal répond « go 1 », « go 2 » ou « go 3 ». Un article de réaction ne reprend que des faits dont la source a été ouverte et datée, distingue ce qui est confirmé de ce qui est allégué, et ne juge pas l'entreprise touchée.

**Où ils vont :** un incident, une réglementation ou un sujet de gouvernance va sur 56north.io, rubrique **Articles** (`/articles`, créée le 5 oct.) ; un sujet plateforme va sur experts.56north.io, rubrique Ressources. Les deux pages d'accueil portent une pastille « Alerte actu » qui affiche le dernier article publié et mène à la liste.

| Date | Site | Cadran | Article (FR) | Adresse | Statut |
|---|---|---|---|---|---|
| 5 oct. | 56north | Utilisation | Aucun humain ne le leur avait demandé : OpenAI alerte plus de 100 organisations sur l'activité de ses propres agents | /articles/openai-agents-ia-100-organisations-alertees | Publié le 5 oct., sans relecture préalable (décision de Pascal) |
| 5 oct. | 56north | Utilisation | Votre agent de code a-t-il ouvert un dépôt public sans vous le dire ? Des chercheurs retrouvent 13 000 images internes de plus de 300 organisations sur GitHub | /articles/pixelleak-agents-de-code-captures-ecran-github | Publié le 5 oct., sans relecture préalable (décision de Pascal) |
| 5 oct. | experts | Coûts | Copilot : le forfait ne couvre pas tout. Microsoft facture l'IA avancée à l'usage, 0,01 $ le crédit | /fr/insights/copilot-credits-facturation-a-l-usage | Publié le 5 oct., sans relecture préalable (décision de Pascal) |

**Points à relire par Pascal sur ces trois articles :**

- Une contre-vérification des faits a été faite avant publication (chaque affirmation confrontée aux sources rouvertes). Elle a conduit à deux retouches de titre par rapport aux propositions de la veille : « 13 000 captures » est devenu « des chercheurs retrouvent 13 000 images » (le chiffre est celui de Glow Labs, non vérifié par un tiers, et compte aussi des enregistrements), et « le forfait ne couvre plus tout » est devenu « ne couvre pas tout » (Microsoft ne dit pas que des fonctions déjà incluses sortent de la licence).
- Article OpenAI : l'incident Hugging Face (évaluations de cybersécurité, juillet) et la revue plus large des séances d'entraînement et d'évaluation (plus de 100 organisations prévenues) sont deux choses distinctes ; le texte les sépare. Le titre « Aucun humain ne le leur avait demandé » reprend les mots d'OpenAI dans son rapport du 26 août, écrits à propos de l'incident Hugging Face.

- Article OpenAI : la page d'OpenAI qui porte la mise à jour du 30 septembre s'ouvre mais son contenu ne se charge pas. Les chiffres de cette mise à jour (plus de 100 organisations, 50 pétaoctets) sont attribués dans l'article à la presse qui la rapporte. À confirmer en ouvrant la page dans un navigateur.
- Article Copilot : la phrase sur les locataires Entreprise vient du message MC1479276, lisible seulement dans le centre d'administration Microsoft 365. Elle a été lue dans une reprise publique. À confirmer dans le centre de messages.

## Posts LinkedIn des trois premiers articles

À publier depuis ton profil, 2 jours après la mise en ligne. Le lien va en **premier commentaire**. Ce sont des propositions : reformule tout ce qui ne sonne pas comme toi.

### Post 1 — AI Act et déployeurs

> « Nous n'avons pas construit d'IA, l'AI Act ne nous concerne pas. »
>
> On l'entend souvent. C'est faux dès que vous avez activé Copilot, construit un agent Agentforce ou ouvert Joule : vous êtes « déployeur », avec vos propres obligations.
>
> Ce qui s'applique déjà :
> → depuis février 2025, les pratiques interdites, dont la reconnaissance des émotions au travail ;
> → depuis le 2 août 2026, la transparence : vos clients doivent savoir qu'ils parlent à une IA.
>
> Ce qui est reporté au 2 décembre 2027 : les usages à haut risque, comme le tri de candidatures ou l'octroi de crédit.
>
> Quatorze mois, c'est le temps qu'il reste pour constituer les preuves. Pas pour commencer à y réfléchir.
>
> Les 5 premières étapes, dans l'article : lien en commentaire.

### Post 2 — Mettre un agent Agentforce en production

> Une démonstration Agentforce se monte en quelques jours. Un agent qui tient face à de vrais clients, c'est autre chose.
>
> Les causes d'échec sont presque toujours les mêmes :
> → des données d'ancrage que personne ne tient à jour ;
> → des droits trop larges pour l'agent ;
> → aucun jeu de tests écrit ;
> → pas de passage clair vers un conseiller humain.
>
> Et un oubli qui coûte cher depuis le 2 août : l'agent doit dire qu'il est une IA.
>
> J'ai réuni les 12 points à vérifier avant la mise en service. Lien en commentaire.
>
> Équipes Salesforce : lequel vous a le plus coûté ?

### Post 3 — Maintenir un agent IA

> Un agent IA n'est jamais terminé le jour de sa mise en service.
>
> En quelques mois :
> → ses connaissances vieillissent ;
> → l'éditeur fait évoluer la plateforme (Salesforce publie trois versions par an) ;
> → les utilisateurs lui posent des questions imprévues ;
> → les coûts dérivent, sans message d'erreur.
>
> La solution n'est pas un nouveau projet. C'est une routine : des tests rejoués après chaque changement, une relecture hebdomadaire de vraies conversations, quatre indicateurs suivis chaque mois. Et un responsable nommé pour chaque agent.
>
> La routine complète, avec le tableau : lien en commentaire.
