# Solvia Technologies Website

Vite + React 18 + TypeScript + Tailwind CSS marketing site for Solvia Technologies
(Solvia Systems & Innovations Company Limited), deployed to Netlify.

## Commands

- `npm run dev` — local dev server (port 5173)
- `npm run build` — production build to `dist/`
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint
- `npm run preview` — preview production build

## Architecture

- Routing: `react-router-dom` (data router in `src/App.tsx`), SPA fallback via `netlify.toml` redirect
- Pages: `src/pages/` | Shared layout: `src/components/layout/` | Reusable UI: `src/components/ui/`
- Site-wide brand/contact/nav config: `src/config/site.ts` (contact details + social links render only when set — never add placeholders)
- Industry content: `src/content/industries.ts` | Insights/articles: `src/content/insights.ts`
- Per-page SEO (title/meta/canonical/OG/JSON-LD): `src/components/Seo.tsx`
- Contact form: Supabase insert into `contact_submissions` (columns: name, email, company, message only — industry/interest are embedded in the message text). Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (local `.env`, Netlify env in production)

## Content rules

- No fabricated statistics, testimonials, team members, clients, case studies or certifications. Verify against brief §2 before adding any factual claim.
- Brand: "Solvia Technologies" is the visible brand; legal entity "Solvia Systems & Innovations Company Limited" appears in footer/about/legal.
- Do not claim certifications (SOC 2, ISO 27001, NDPR, etc.) unless verifiable.
