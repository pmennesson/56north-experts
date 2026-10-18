import type { Article } from "./types";
import openaiAgents from "./openai-agents-100-organisations";
import pixelLeak from "./pixelleak-coding-agents";
import anthropicActions from "./anthropic-agents-actions-non-voulues";
import buildAugmente from "./build-augmente-papier-fondateur";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [buildAugmente, anthropicActions, openaiAgents, pixelLeak];
