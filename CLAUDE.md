# CLAUDE.md

Guidance for Claude Code (and future contributors) working in this repository.

## Project overview

DivaglamKreation ("DGK") is a faith-rooted lifestyle brand selling digital
journals, printable reset packs, and small physical gifts (e.g. a dragonfly
charm). This repo is the brand's marketing/e-commerce website:

- **Framework**: Next.js 16 (App Router, `app/` directory), React 19, TypeScript.
- **Hosting**: Vercel, auto-deployed from GitHub. Push to `main` → Vercel builds
  with `next build` and deploys to production.
- **Repo**: `lemd30-oss/divaglamkreation-site` on GitHub.
- **Live domain**: `divaglamkreation.com` (see `metadataBase` in `app/layout.tsx`).
- Checkout/fulfillment is **not** handled in this app — products link out to
  Gumroad (digital) and a GoDaddy Payments link (the dragonfly charm). There
  is no cart, no payment processing, and no database in this repo.

## Architecture — read this before editing

**The Next.js `app/` directory is the live site.** Vercel's Next.js framework
preset builds and deploys only what `next build` produces; loose files sitting
in the repo root are not served unless they live under `public/`.

There are legacy, **stale, unused** static HTML files at the repo root
(`index.html`, `about.html`, `blog.html`, `shop.html`, `journal.html`, etc.),
plus `style.css` and a stray `j.s` file. These predate the Next.js migration
(first Next.js commit: `fe5d310`, Aug 2026) and have not been touched since.
`WEBSITE_UPDATE_CHECKLIST.md` and `.github/RESOLUTION.md` describe that old
`index.html`-based setup and are **out of date** — do not follow them for how
to update the live site. Do not edit the root `.html` files expecting them to
affect production; if asked to clean up the repo, confirm with the user before
deleting them (they may still be wanted as historical reference or copy
source), but treat `app/` as the single source of truth for anything live.

The `.github/workflows/jekyll-docker.yml` workflow is likewise a leftover
template artifact — this project is not a Jekyll site. It's effectively dead
CI and safe to ignore (or remove, if asked).

### Directory map (current, real site)

- `app/page.tsx` — homepage (hero, product grid, about, blog preview, Glowlist
  CTA, footer). Marked `'use client'`, so page-level `metadata` export isn't
  used here (root metadata comes from `app/layout.tsx` instead).
- `app/layout.tsx` — root layout: global `<html>`/`<body>`, site-wide SEO
  metadata (title template, OpenGraph, Twitter card), `preconnect`/`dns-prefetch`
  hints for Gumroad/Facebook, and mounts `@vercel/analytics` +
  `@vercel/speed-insights`.
- `app/home-content.ts` — single source of truth for homepage product data,
  outbound links (Gumroad URLs, Amazon, email, Facebook), and blog preview
  entries. **Update product info/pricing/links here**, not scattered inline.
- `app/product-links.ts` — a second, smaller link/pricing map still pointing
  placeholder links (`#glowlist`, `#shop`) at the Glowlist section; appears
  partially superseded by `home-content.ts`. Check both before assuming a
  product link is live.
- `app/components/` — shared UI: `SiteHeader.tsx`, `SiteFooter.tsx`,
  `ProductCard.tsx`, plus component-scoped CSS (`site-chrome.css`,
  `product-trust.css`).
- Route folders (`app/blog/`, `app/contact/`, `app/glowlist/`,
  `app/dragonfly-keychain/`, `app/policies/`, `app/return-policy/`,
  `app/blog/<slug>/`) — each is a page. **Pattern to follow**: when a page
  needs to be a client component (interactivity, hooks), put `metadata` in a
  sibling `layout.tsx` instead (see `app/blog/layout.tsx`,
  `app/glowlist/layout.tsx`), since a client component can't export
  `metadata` itself. Server-component pages (e.g. `app/contact/page.tsx`,
  `app/dragonfly-keychain/page.tsx`) export `metadata` directly.
- `app/sitemap.ts` / `app/robots.ts` / `app/opengraph-image.tsx` —
  programmatic SEO/OG image generation. **When adding a new route, add it to
  the `routes` array in `app/sitemap.ts`.**
- `app/globals.css`, `app/home.css`, `app/editorial-refresh.css`,
  `app/accessibility.css`, `app/hero-image-fix.css` — layered global styling;
  no CSS framework/Tailwind is used, just hand-written CSS with custom
  properties. New pages typically reuse the shared classes (`.section`,
  `.hero`, `.card`, `.button`, `.eyebrow`) rather than inventing new ones.
- `api/` — **Vercel serverless functions** (plain Node handlers, not Next.js
  Route Handlers under `app/api/`). Currently:
  - `api/unsplash.js` — proxies Unsplash search against an allowlist of
    approved query strings, requires `UNSPLASH_ACCESS_KEY`.
  - `api/notion/tasks/complete.js` — marks a Notion task page `Done`,
    requires `NOTION_TOKEN`. Internal/admin use, not linked from the site UI.
- `docs/` — marketing planning notes (newsletter launch kit, Glowlist first
  posts), not code documentation.
- `public/images/` — actual served images referenced by pages/components.
  Root-level `dgk-dragonfly-*.jpg` are instead referenced via raw
  `raw.githubusercontent.com` URLs in `home-content.ts` /
  `dragonfly-keychain/page.tsx` (not through `public/` or `next/image`) —
  unusual but intentional as currently written; don't "fix" this without
  checking with the user, since it works today.

## Brand rules

**Name/tagline**: "DivaglamKreation" (site chrome usually shows "DK" as a
mark). Tagline: **"Faith. Flow. Flourish."**

**Voice**: faith-rooted, soft, warm, encouraging, unhurried. Never rushed,
salesy, or cluttered. Recurring phrases: "begin softly," "gentle reset,"
"pause and reflect," "you don't have to earn rest." Keep copy short,
reflective, and product-focused — avoid corporate or hype language.

**Color palette** (CSS custom properties in `app/globals.css`):

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#fbf7f0` | primary background |
| `--warm-cream` | `#fffdf8` | secondary background / button text on dark |
| `--coffee` | `#4b3a32` | primary text, buttons |
| `--soft-brown` | `#75675f` | body copy, nav |
| `--gold` | `#76551f` | eyebrow labels, accents |
| `--gold-on-dark` | `#f4d995` | accent on dark backgrounds |
| `--rose` | `#c98f88` | accent |
| `--sage` / `--sage-deep` | `#8f9a82` / `#66705f` | accent, borders |
| `--blush` | `#f3e7e2` | accent background |

**Typography**: Georgia / "Times New Roman" / serif throughout — no sans-serif
UI font is used. Preserve this serif-first, editorial feel in new components.

**Tone checklist** (from `PRODUCTION_CHECKLIST.md` / `DGK_LAUNCH_CHECKLIST.md`):
copy should read as faith-rooted, gentle, encouraging, and clear; layout
should stay calm and uncluttered — don't add visual noise or urgency-driven
sales tactics.

## Workflow

**Local development**
```bash
npm install
npm run dev     # next dev
npm run build   # next build — run before pushing anything structural
npm run start   # serve production build locally
```
Node engine pinned to `24.x` in `package.json`.

**Deploying**: push to `main` (or open a PR — Vercel builds preview
deployments per-branch/PR automatically). No manual deploy step; don't hand-run
Vercel CLI commands unless the user asks. Vercel auto-detects Next.js from
`package.json`; `vercel.json` only adds security headers
(`X-Content-Type-Options`, `Referrer-Policy`) and URL behavior (`cleanUrls`,
no trailing slash) — it doesn't need touching for routine content changes.

**Environment variables** (set in Vercel project settings, not committed):
- `NOTION_TOKEN` — used by `api/notion/tasks/complete.js`.
- `UNSPLASH_ACCESS_KEY` — used by `api/unsplash.js`.
There's no `.env.example`; `.gitignore` excludes `.env*` files as usual.

**When adding/updating a product**: edit `products` in `app/home-content.ts`
(and `app/product-links.ts` if it's one of the still-placeholder Glowlist
links). Keep `priceLabel`/`buttonLabel` copy consistent with the tone rules
above, and add real images to `public/images/` rather than external hosts
when possible.

**When adding a new page/route**: follow the existing App Router pattern —
`page.tsx` (+ `layout.tsx` for metadata if the page is a client component),
reuse `SiteHeader`/`SiteFooter`, add the route to `app/sitemap.ts`, and match
the shared CSS classes instead of introducing new styling systems.

**Project checklists** — useful living docs, keep them updated as items are
completed:
- `PRODUCTION_CHECKLIST.md` — production-readiness checklist (deployment,
  homepage, shop, SEO, brand polish).
- `DGK_LAUNCH_CHECKLIST.md` — checklist for launches/seasonal refreshes.
- `SOCIAL_MEDIA_INTEGRATION.md` — status of Linkin.bio / social link rollout.

Treat `WEBSITE_UPDATE_CHECKLIST.md` and `.github/RESOLUTION.md` as historical
only (pre-Next.js-migration); don't follow their instructions for updating the
live site.

## Conventions / gotchas

- No test suite exists in this repo; there's nothing to run beyond
  `npm run build` as a correctness check.
- No linter/formatter config (no ESLint/Prettier config files) — match
  surrounding code style by hand.
- `app/page.tsx` is a client component (`'use client'`) mainly because of
  interactive header state; most other pages are server components. Don't
  default new pages to `'use client'` unless they need interactivity.
- Outbound purchase links (Gumroad, Amazon, GoDaddy Payments) should always
  open in a new tab with `target="_blank" rel="noopener noreferrer"`,
  matching existing links.
- Images from Gumroad/Unsplash need their hostnames added to
  `remotePatterns` in `next.config.js` before `next/image` can use them.
