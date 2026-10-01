import type { Article } from "./types";
import regie from "./regie-vs-integrateur";
import vetting from "./vetting-agentforce-architect";
import aiAct from "./ai-act-deployers";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [aiAct, vetting, regie];
