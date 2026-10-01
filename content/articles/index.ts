import type { Article } from "./types";
import aiAct from "./ai-act-deployers";
import goLive from "./agentforce-go-live-checklist";
import maintain from "./maintain-ai-agents";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [aiAct, goLive, maintain];
