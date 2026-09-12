# DivaglamKreation Site Guidance

## Project identity

This repository is the official DivaglamKreation website project.

DivaglamKreation is a faith-rooted brand creating gentle journals, meaningful gifts, reflection prompts, reset routines, and quiet encouragement for women who need space to pause, reflect, and begin again.

Core brand language to preserve:

- You matter.
- Faith. Flow. Flourish.
- Gentle reset, rest, reflection, renewal, and soft beginnings.
- Warm, clear, calm, product-focused copy.
- Coffee, journaling, quiet mornings, prayer, gratitude, seasonal reflection, and intentional gifts.

Do not drift into a generic stationery, wellness, productivity, or luxury ecommerce voice. The site should continue to feel personal, faith-rooted, gentle, and grounded in real life.

## Technical stack

Current app stack:

- Next.js 16
- React 19
- TypeScript
- Vercel deployment
- Vercel Analytics and Speed Insights

Primary commands:

```bash
npm install
npm run dev
npm run build
npm run start
```

The project declares Node `24.x` in `package.json`.

## Important structure

Primary Next.js files:

- `app/page.tsx` - current Next.js homepage
- `app/layout.tsx` - metadata, root layout, analytics, speed insights
- `app/home-content.ts` - product links, image paths, product cards, blog preview data
- `app/globals.css` - global styling
- `app/home.css` and `app/editorial-refresh.css` - homepage styling
- `app/components/` - shared header, footer, product card, and related styles
- `app/blog/` - blog routes
- `app/glowlist/`, `app/contact/`, `app/policies/`, `app/dragonfly-keychain/` - site pages
- `public/images/` - site image assets

Legacy/static files also exist at the repository root, including `index.html`, `blog.html`, `shop.html`, and other `.html` pages. Do not delete, replace, or assume these are unused without verifying the current Vercel routing and live-site behavior.

## Deployment notes

- The GitHub repository is `lemd30-oss/divaglamkreation-site`.
- The default branch is `main`.
- The project is intended to deploy on Vercel.
- `vercel.json` defines clean URLs, no trailing slash, and security/referrer headers.

There is an old `.github/workflows/jekyll-docker.yml` workflow. The presence of that file does not mean the current site is a Jekyll project. Treat it as legacy until verified.

Before changing deployment configuration, verify:

1. Which Vercel project is connected.
2. Which branch Vercel deploys from.
3. Whether the live homepage is served from the Next.js app or legacy `index.html`.
4. Whether a change affects live customer-facing pages.

## Brand and content rules

When editing copy:

- Keep the tone gentle, faith-rooted, clear, and encouraging.
- Prefer simple, warm wording over trendy or overly polished marketing language.
- Avoid harsh urgency, cluttered sales copy, and generic self-care slogans.
- Preserve the recurring DGK themes: rest, reset, renewal, prayer, gratitude, reflection, and beginning softly.
- Keep product copy concrete: what the item is, who it helps, and how it supports a softer reset.

Important current products and links live in `app/home-content.ts`.

When editing design:

- Preserve the warm neutral DGK direction: cream, coffee brown, soft gold, and warm accents.
- Keep layouts readable and calm.
- Avoid adding unnecessary visual clutter, aggressive colors, or off-brand decorative elements.
- Maintain accessibility: semantic structure, useful alt text, keyboard-friendly navigation, and sufficient contrast.

## Safe workflow

Before making code changes:

1. Inspect the existing file and related component/styles.
2. Identify whether the page is part of the Next.js app or a legacy static page.
3. Keep edits small and targeted.
4. Do not remove legacy files, docs, workflows, or assets unless explicitly asked.
5. Do not change deployment settings without approval.
6. Do not publish, delete, or overwrite major site sections without approval.

After changes:

1. Run `npm run build` when dependencies are installed.
2. Check for TypeScript, Next.js, and accessibility issues.
3. Verify the affected page locally if possible.
4. Summarize changed files and any verification performed.

## Agent-system boundary

This website repo is for the DivaglamKreation website.

The larger DivaglamKreation agent system should be built in phases and should not be mixed into the website code unless there is a deliberate integration point.

Phase 1 priorities for the agent system:

- Executive Agent
- Brand Guardian
- Shared DGK knowledge and memory layer
- Coordination and decision support
- Approval before consequential actions

Do not create uncontrolled autonomous publishing, deleting, deployment, or major platform changes.

Relevant tools in the broader DGK operating system may include GitHub, Vercel, Notion, Later, Canva, Google Workspace, and Etsy. Integrations should be explicit, permission-aware, and reversible.
