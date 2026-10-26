import type { Article } from "./types";
import openaiAgents from "./openai-agents-100-organisations";
import pixelLeak from "./pixelleak-coding-agents";
import anthropicActions from "./anthropic-agents-actions-non-voulues";
import buildAugmente from "./build-augmente-papier-fondateur";
import iaProuvee from "./ia-prouvee-papier-2";
import storm0940 from "./storm-0940-artex-microsoft-365";
import metrMonitoring from "./metr-surveillance-agents-openai";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [iaProuvee, metrMonitoring, storm0940, buildAugmente, anthropicActions, openaiAgents, pixelLeak];
