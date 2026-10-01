import { feedResponse } from "@/lib/feed";

/** /fr/feed.xml — French articles. */
export const dynamic = "force-static";
export const GET = () => feedResponse("fr");
