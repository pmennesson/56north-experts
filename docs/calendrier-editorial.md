# Calendrier éditorial — 56North (oct. → déc. 2026)

**Ligne éditoriale :** des conseils et des solutions concrètes sur les IA des plateformes d'entreprise (Microsoft, Salesforce, Google Cloud, SAP, ServiceNow, Workday), selon quatre piliers :

| Pilier | Ce qu'on y traite |
|---|---|
| **Intégrer** | Mise en production, architecture, données, droits, tests |
| **Utiliser** | Cas d'usage qui tiennent, adoption, mesure de la valeur |
| **Maintenir** | Dérives, suivi, coûts, mises à jour des éditeurs |
| **Réglementer et risques** | AI Act, données personnelles, surpartage, injection de prompt, IA non déclarées |

**Format de chaque article :** un encadré « L'essentiel » en 3 points, des listes à puces, un tableau quand c'est utile, une FAQ de 3 questions, des sources officielles. Une requête principale + 4 à 5 requêtes de niche.

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
| 9 nov. | 56north | Réglementer | Registre des IA : ce qu'il doit contenir pour un contrôle | registre des IA entreprise | modèle registre IA AI Act · inventaire systèmes IA · responsable IA nommé | Après bascule du site |
| 16 nov. | experts | Risques | Injection de prompt : protéger un agent IA d'entreprise | injection de prompt agent IA | injection de prompt indirecte e-mail · agent IA sécurité OWASP · garde-fous agent IA | À écrire |
| 23 nov. | 56north | Réglementer | Article 50 de l'AI Act : mettre un chatbot client en conformité | AI Act article 50 chatbot | mention IA chatbot obligatoire · hypertrucage obligation signalement · transparence IA générative | Après bascule du site |
| 30 nov. | experts | Maintenir | Now Assist : garder un déploiement ITSM performant | Now Assist maintenance | Now Assist ITSM résultats · ServiceNow AI Agents gouvernance · coût Now Assist | À écrire |
| 7 déc. | 56north | Risques | Shadow AI : faire l'inventaire des IA que personne n'a déclarées | shadow AI entreprise | IA non déclarées salariés · fonctions IA activées par mise à jour · politique d'usage IA | Après bascule du site |
| 14 déc. | experts | Réglementer | IA et recrutement : ce qui change en décembre 2027 (Workday, SuccessFactors) | IA recrutement haut risque AI Act | Workday IA AI Act · tri de CV IA obligations · information représentants du personnel IA | À écrire |
| 21 déc. | experts | Utiliser | Mesurer la valeur d'un agent IA : les 4 indicateurs qui comptent | mesurer ROI agent IA | taux de résolution agent IA · coût par dossier IA · indicateurs Copilot adoption | À écrire |

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
