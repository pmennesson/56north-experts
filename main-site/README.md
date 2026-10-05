# 56north.io — main site

Next.js 16 (App Router) · Tailwind CSS 4 · same design system as experts.56north.io (`app/globals.css`, `components/ui`).
French is the default (unprefixed), English lives under `/en`. Old `.html` URLs redirect (`next.config.ts`).

Content: `content/fr.ts` and `content/en.ts`. **Every public claim must match `docs/faits-publics.md` in the
cockpit-56north repo** (dial names, certified figures, layers 02/03 sold as offers, not as running services).

Form "Premier échange" → Supabase table `diagnostic_requests` (project 56north-experts) + email alert (Resend),
using the same `.env.production` as the experts site.

Deployment: service `main` in `deploy/docker-compose.yml`; preview at `new.56north.io`, go-live block commented in `deploy/Caddyfile`.

```bash
npm install && npm run dev   # http://localhost:3000
```

## Articles (`/articles`, `/en/articles`)

One file per article in `content/articles/`, imported in `content/articles/index.ts`. Each language has its own slug.
`status: "draft"` keeps a page reachable by URL, unlisted and noindex; `"published"` lists it, indexes it, and shows it
in the "Alerte actu" pill of the home page, in the sitemap, the RSS feeds (`/feed.xml`, `/en/feed.xml`), `/llms.txt`
and `/llms-full.txt` (full text in Markdown for AI assistants).

Every article carries a danger / advice block: the `dangers` field is required by the type, and the line
`[[danger-conseil]]` in the Markdown body says where it goes. Sources are opened and dated before publication;
they are listed at the end of the page and sent as `citation` in the structured data.

