import { feedResponse } from "@/lib/feed";

/** /en/feed.xml — English articles. */
export const dynamic = "force-static";
export const GET = () => feedResponse("en");
