import type { Article } from "./types";
import openaiAgents from "./openai-agents-100-organisations";
import pixelLeak from "./pixelleak-coding-agents";
import anthropicActions from "./anthropic-agents-actions-non-voulues";
import buildAugmente from "./build-augmente-papier-fondateur";
import iaProuvee from "./ia-prouvee-papier-2";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [iaProuvee, buildAugmente, anthropicActions, openaiAgents, pixelLeak];
