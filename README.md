# 56North Experts — experts.56north.io

The expert network of 56North (https://56north.io).

Next.js 16 (App Router, React Server Components) · Tailwind CSS 4 · TypeScript · Geist fonts (self-hosted, no Google Fonts request).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, all pages pre-rendered except /contact
```

Set `NEXT_PUBLIC_SITE_URL=https://experts.56north.io` in production (canonicals, sitemap, JSON-LD).

## Structure

```
app/
  layout.tsx                 Global layout, fonts, Organization + WebSite JSON-LD
  page.tsx                   Home (hero, vendor bar, ecosystems, service levels,
                             engagement models, process, trust, FAQ, CTA)
  experts/[ecosysteme]/      Programmatic SEO pillar, one static page per practice
  talents/                   Expert onboarding (application form = next iteration)
  insights/                  Content hub (noindex until first articles)
  contact/                   Staffing request form + server action
  sitemap.ts · robots.ts     Technical SEO (AI crawlers explicitly allowed)
  llms.txt/route.ts          GEO: plain-text site map for AI assistants
  opengraph-image.tsx        Generated social card
components/                  Header, Footer, VendorMark, JsonLd, PageHero, home/*
content/en.ts                All home copy (i18n dictionary)
lib/site.ts                  Brand facts & service levels  ← edit first
lib/ecosystems.ts            Practices data (feeds grid, pillar pages, sitemap, llms.txt)
lib/seo.ts                   Metadata helper + JSON-LD builders
lib/i18n.ts                  Locale config (add fr/ar here)
public/logos/                Official vendor logo files (see below)
```

## Forms

Both forms are one-question-per-screen (`components/StepForm.tsx`): all steps stay mounted, per-step validation on the client, full validation on the server, and a server error jumps back to the step concerned. Enter continues, single-choice steps advance on click, contact details come last.

## Forms → Supabase

Both forms write server-side to Supabase (`leads` from /contact, `talents` from /talents).

1. Project `56north-experts` (Paris, eu-west-3) is created and the migration is already applied.
2. Copy `.env.example` to `.env.local` and set `SUPABASE_URL` and `SUPABASE_SECRET_KEY`
   (Project Settings → API keys → secret key). On the server they go in `.env.production`.
3. The secret key stays on the server (`lib/supabase-server.ts` is `server-only`).
   RLS is on with no policies: the public key cannot read these tables.

Without the env vars, dev mode logs submissions to the console; production shows
the visitor an "email us" fallback instead of losing the submission.

## Deployment (OVH)

`output: "standalone"` + `Dockerfile` + `deploy/docker-compose.yml` (Next.js behind Caddy, automatic HTTPS). Step-by-step guide in French: `deploy/OVH.md`.

## Vendor logos

`VendorMark` renders `/public/logos/<slug>.svg` automatically when the file
exists, otherwise a neutral text wordmark. Slugs: `microsoft`, `salesforce`,
`google-cloud`, `sap`, `servicenow`.

Use only files downloaded from each vendor's official press/brand page or
partner portal, and read their trademark guidelines first: most prohibit
using their logo in a way that implies partnership, endorsement or
certification you do not hold. If you are a registered partner, use the
partner badge the programme gives you instead. The footer disclaimer and
the "independent firm" FAQ must be adjusted if you become a partner.

## Before launch (search the code for `TODO`)

- LinkedIn URL (`lib/site.ts`); operating entity: Swell Invest Ltd
- DNS: A record `experts` → OVH VPS IP (see `deploy/OVH.md`)
- Service levels you can honour contractually (`lib/site.ts`)
- 30-day replacement term, payment terms for experts (`content/en.ts`, `app/talents`)
- Email alerts: set RESEND_API_KEY + NOTIFY_EMAIL (the install script asks); verify 56north.io in Resend to send from experts@56north.io
- Rate limiting on forms if spam appears
- Review AI product names in `lib/ecosystems.ts` (vendors rename quarterly)
- Privacy policy + legal notice pages (required for the form under GDPR)
