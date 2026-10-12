/**
 * Official texts opened on 12 October 2026 before writing the pillar pages.
 * The AI Act Service Desk (European Commission) serves the consolidated text of
 * Regulation (EU) 2024/1689 as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI).
 */
const desk = (article: string) => `https://ai-act-service-desk.ec.europa.eu/en/ai-act/${article}`;

export const src = {
  timeline: { url: desk("timeline/timeline-implementation-eu-ai-act"), fr: "Commission européenne, AI Act Service Desk : calendrier d'application", en: "European Commission, AI Act Service Desk: implementation timeline" },
  omnibus: { url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj", fr: "EUR-Lex : règlement (UE) 2026/1744 (omnibus numérique sur l'IA)", en: "EUR-Lex: Regulation (EU) 2026/1744 (Digital Omnibus on AI)" },
  art3: { url: desk("article-3"), fr: "AI Act, article 3 : définitions (fournisseur, déployeur)", en: "AI Act, Article 3: definitions (provider, deployer)" },
  art4: { url: desk("article-4"), fr: "AI Act, article 4 : maîtrise de l'IA", en: "AI Act, Article 4: AI literacy" },
  art6: { url: desk("article-6"), fr: "AI Act, article 6 : classification des systèmes à haut risque", en: "AI Act, Article 6: classification of high-risk systems" },
  art26: { url: desk("article-26"), fr: "AI Act, article 26 : obligations des déployeurs de systèmes à haut risque", en: "AI Act, Article 26: obligations of deployers of high-risk systems" },
  art27: { url: desk("article-27"), fr: "AI Act, article 27 : analyse d'impact sur les droits fondamentaux", en: "AI Act, Article 27: fundamental rights impact assessment" },
  art49: { url: desk("article-49"), fr: "AI Act, article 49 : enregistrement dans la base de données de l'UE", en: "AI Act, Article 49: registration in the EU database" },
  art50: { url: desk("article-50"), fr: "AI Act, article 50 : obligations de transparence", en: "AI Act, Article 50: transparency obligations" },
  art99: { url: "https://artificialintelligenceact.eu/article/99/", fr: "AI Act, article 99 : sanctions (texte reproduit par artificialintelligenceact.eu)", en: "AI Act, Article 99: penalties (text reproduced by artificialintelligenceact.eu)" },
  employment: { url: "https://ai-act-service-desk.ec.europa.eu/en/node/464", fr: "AI Act Service Desk : lignes directrices haut risque, emploi (annexe III, point 4)", en: "AI Act Service Desk: high-risk guidelines, employment (Annex III, point 4)" },
} as const;

export type SourceKey = keyof typeof src;

export const sources = (lang: "fr" | "en", keys: SourceKey[]) => keys.map((k) => ({ title: src[k][lang], url: src[k].url }));

/** Detailed guide on deployer obligations, on the experts site (slugs from content/articles/ai-act-deployers.ts). */
export const deployerGuide = {
  fr: "https://experts.56north.io/fr/insights/ai-act-obligations-deployeurs-copilot-agentforce",
  en: "https://experts.56north.io/insights/eu-ai-act-deployer-obligations-copilot-agentforce",
} as const;
