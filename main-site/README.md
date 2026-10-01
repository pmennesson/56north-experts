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
