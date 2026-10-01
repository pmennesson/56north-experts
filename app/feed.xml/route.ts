import { feedResponse } from "@/lib/feed";

/** /feed.xml — English articles (the proxy leaves dotted paths untouched). */
export const dynamic = "force-static";
export const GET = () => feedResponse("en");
