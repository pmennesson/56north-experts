import { feedResponse } from "@/lib/feed";

/** /feed.xml — French articles (the proxy leaves dotted paths untouched). */
export const dynamic = "force-static";
export const GET = () => feedResponse("fr");
