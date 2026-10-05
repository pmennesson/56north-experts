import type { Article } from "./types";
import openaiAgents from "./openai-agents-100-organisations";
import pixelLeak from "./pixelleak-coding-agents";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [openaiAgents, pixelLeak];
