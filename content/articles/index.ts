import type { Article } from "./types";
import aiAct from "./ai-act-deployers";
import goLive from "./agentforce-go-live-checklist";
import maintain from "./maintain-ai-agents";
import copilotBilling from "./copilot-usage-based-billing";
import geminiColleagues from "./google-gemini-agents-collegues-workspace";
import copilotCli from "./copilot-cli-injection-adversa";
import salesforceHpi from "./salesforce-agent-calls-flex-credits";

/** Every article, newest first. Add a file, import it here, done. */
export const articles: Article[] = [salesforceHpi, geminiColleagues, copilotCli, copilotBilling, aiAct, goLive, maintain];
