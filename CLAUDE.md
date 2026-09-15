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
3. Whether a change affects live customer-facing pages.

The homepage question is settled. See "Canonical application source" below.

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

The specific rules for what an agent may do without approval are in the
"Global execution rule" and "DGK agent permission model" sections below.
Those rules are binding.

Relevant tools in the broader DGK operating system may include GitHub, Vercel, Notion, Later, Canva, Google Workspace, and Etsy. Integrations should be explicit, permission-aware, and reversible.

## Canonical application source

**Verified 2026-09-12.** The live homepage at `divaglamkreation.com` renders the hero headline "You matter." That headline is produced by `app/page.tsx`. The Next.js App Router implementation in `app/` is the canonical live production website.

Three generations of the site coexist in this repository. Only one is served.

| Layer | Files | Served in production |
| --- | --- | --- |
| Next.js App Router | `app/` | **Yes — canonical** |
| Legacy static site | Root `.html` files, `style.css` | No |
| Legacy serverless functions | Root `api/*.js` | No |

Why the legacy layers are unreachable:

- Next.js serves static files only from `public/`. Files at the repository root such as `index.html`, `blog.html`, `shop.html`, `about.html`, `journal.html`, `rhythm.html`, `glowlist.html`, and `test-complete.html` are not routable in production.
- Vercel's root `/api` directory convention applies to non-framework projects. Once Next.js is detected, API routes must live in `app/api/`. Treat `api/unsplash.js` and `api/notion/tasks/complete.js` as inactive code.

**Rules:**

1. Make website content changes in `app/`. Never in root `.html` files, unless Divag explicitly instructs otherwise.
2. Editing `blog.html` does not change the live blog. Editing `index.html` does not change the live homepage. A root file and an `app/` route can share a name and have nothing to do with each other.
3. Legacy files are still under the no-deletion rule. Identifying a file as legacy is not authorization to remove it.
4. If a task seems to require touching a legacy file, stop and ask.

## Content editing map

The authoritative file for each common task. Tier refers to the permission model below.

| To change | Edit | Tier |
| --- | --- | --- |
| Product title, description, image, or blurb | `app/home-content.ts` (`products`) | Green |
| Product **price label** or **checkout link** | `app/home-content.ts` (`products`, `links`) | **Yellow** |
| Homepage hero copy, section order, layout | `app/page.tsx` | Green (copy) / Yellow (structure) |
| Homepage blog preview cards | `app/home-content.ts` (`blogPosts`) | Green |
| Header nav / footer links | `app/components/SiteHeader.tsx`, `SiteFooter.tsx` | Green (internal) / Yellow (commerce) |
| New blog post | New folder `app/blog/<slug>/page.tsx`, plus `layout.tsx` for metadata | Green |
| Site-wide SEO, OpenGraph, `metadataBase`, canonical | `app/layout.tsx` | **Yellow** |
| Per-page SEO | That route's `layout.tsx` or exported `metadata` | Green |
| Crawl and index behavior | `app/robots.ts`, `app/sitemap.ts` | **Yellow** |
| Images | Add to `public/images/`, reference from `app/home-content.ts` | Green |
| Policies, returns, refunds | `app/policies/page.tsx`, `app/return-policy/page.tsx` | **Yellow** (customer-facing terms) |
| Styling | `app/globals.css`, `home.css`, `editorial-refresh.css`, `accessibility.css`, `hero-image-fix.css`, `components/*.css` | Green |

`app/home-content.ts` is the most important file in the repository. Most content requests resolve to a single edit there.

### Known traps

**`app/product-links.ts` is stale. Do not use it.**
Every link in it points to `'#glowlist'`. Its prices disagree with `home-content.ts`. It is not what the homepage reads. An agent looking for "where the product links live" will find this file first and be wrong. To change a product link or price, edit `home-content.ts`. This file is a candidate for removal in a future cleanup, pending approval.

**Blog preview count.**
`blogPosts` in `home-content.ts` lists 2 posts. `app/blog/` contains 5 live routes. This may be deliberate curation or may be drift. Confirm with Divag before "correcting" it.

**Stacked CSS.**
Style files named `hero-image-fix.css` and `editorial-refresh.css` are patch layers added over time. Cascade order is set by the import order in `app/layout.tsx` and `app/page.tsx`. Check that order before assuming a rule will apply.

**Duplicate filenames.**
Many root `.html` files mirror an `app/` route name. Same name, different file, different reality.

## Documentation trust hierarchy

Different sources are authoritative for different questions. This is not a single ranking.

| Question | Authoritative source |
| --- | --- |
| What do customers see right now? | The live site at `divaglamkreation.com` |
| What is the intended implementation? | The `app/` code on the current `main` branch |
| How should an agent behave? | This file (`CLAUDE.md`) |
| Everything else | Informational — verify before relying on it |

The live site and `main` can legitimately diverge. `main` may contain merged work that has not finished deploying, and a deployment can lag, fail, or be serving a cached response. When the two disagree, report the divergence rather than silently choosing one. The gap is itself a finding.

When a document conflicts with the code, the code wins and the agent flags the document rather than working around it quietly.

### Known stale documents

Do not follow these without verifying against code first.

| File | Status |
| --- | --- |
| `WEBSITE_UPDATE_CHECKLIST.md` | **Incorrect.** States the live homepage is `index.html`. False as of 2026-09-12. |
| `.github/RESOLUTION.md` | **Outdated.** Describes a CDN script for Speed Insights. Actual implementation is the npm package mounted in `app/layout.tsx`. |
| `SOCIAL_MEDIA_INTEGRATION.md` | **Outdated.** References `index.html` line numbers in the legacy layer. |
| `README.md` | **Partly outdated.** The performance notes are accurate. The "Next content updates" list describes work largely already done. |
| `.github/workflows/jekyll-docker.yml` | **Wrong stack.** Runs a Jekyll build on every push and PR to `main`. This is not a Jekyll site. Pending cleanup approval. |
| `PRODUCTION_CHECKLIST.md`, `DGK_LAUNCH_CHECKLIST.md` | **Usable.** Structure is sound; unchecked boxes may already be complete. Verify before acting. |

## Global execution rule

**Green and Yellow permissions authorize local working-tree changes only.** Neither tier authorizes any action whose effect persists outside the local working copy.

The following are **externally persistent actions**. They always require explicit approval from Divag, in every case, regardless of which tier the underlying edit falls into:

- `git commit`, `git push`, creating a remote branch
- opening, updating, or merging a pull request
- any deployment or production build
- publishing content to any external platform
- creating or modifying anything in Vercel, GitHub settings, or any connected account
- sending email, posting to social, or any outbound customer-facing message

A Green or Yellow task is finished when the working tree contains the edits and the agent has reported what changed. **Nothing becomes externally persistent without explicit approval.**

Tier approval and execution approval are separate. "You may make this edit" never implies "you may ship it."

## DGK agent permission model

This table is binding, and sits underneath the global execution rule above. When a task is ambiguous, treat it as the more restrictive tier.

### Green — edit in the working tree, then report

Safe and reversible. No approval needed for the edit itself.

- Copy edits within `app/` pages and components
- New blog routes under `app/blog/`
- Homepage blog preview updates in `blogPosts`
- Image additions to `public/images/`
- Internal navigation links between existing pages
- Styling adjustments that don't change layout structure
- Per-page SEO metadata
- Documentation files in `docs/`
- Reading, analyzing, auditing anything

### Yellow — propose the diff, wait, then edit in the working tree

Show Divag the exact change. Do not apply it locally until she says yes.

- Any change to `app/home-content.ts` prices or links
- Any change to a customer-facing destination URL
- Site-wide SEO in `app/layout.tsx`, including `metadataBase` and canonicals
- `app/robots.ts`, `app/sitemap.ts`
- Policy and return-policy page text
- New top-level routes
- Researching and proposing a dependency version change, including writing up the reason, the version delta, and the risk — applying it is approval-required
- Structural changes to homepage sections

### Red — never, without explicit approval from Divag

No exception for urgency, convenience, or confidence.

- `vercel.json`, `next.config.js`
- `.github/workflows/`
- Vercel project settings, domains, DNS, production environment variables
- Deleting **any** file, including files identified here as legacy or stale
- Rewriting git history or force-pushing
- Applying a live change to any checkout link, product price, or Gumroad/Amazon URL
- Applying any edit to `package.json`, a lockfile, or any other dependency manifest, including version bumps, additions, and removals
- Creating or connecting new external accounts or integrations
- Everything listed under the global execution rule

**Escalation rule:** when a task cannot be completed within Green and Yellow, stop and describe what's blocked. Do not route around a Red item.

## Brand Guardian rules

The DGK foundation. Preserve these. They are not placeholder copy.

- **"Who are you?"** — the founding question the brand returns to
- **"You matter."** — the core statement, currently the live homepage hero
- **Every woman matters**
- **"You mattered before anyone was looking."**
- Coffee, creativity, reflection, gentle self-care
- The **Glow Owl**
- Faith-rooted, calm, reflective encouragement
- Rest, reset, renewal, prayer, gratitude, beginning softly
- **Faith. Flow. Flourish.**

### Reject drift toward

- Generic wellness language ("self-care journey," "your best self," "wellness era")
- Generic stationery brand voice (product-feature copy with no faith or reflection underneath)
- Generic luxury ("elevated," "curated," "indulge," "treat yourself")
- Trend-led branding, urgency tactics, scarcity pressure, hype punctuation
- Productivity framing that turns rest into optimization

### Brand Guardian check

Before any copy ships, confirm: Does it sound like Divag? Is faith present without being preachy? Is it warm without being cluttered? Does it name a real product and a real person it helps? Would a woman who is tired feel invited rather than sold to?

If a requested change would weaken the foundation, say so before writing it.

## Commerce safety

These are live customer-facing destinations defined in `app/home-content.ts`. A broken link here is lost revenue, not a cosmetic bug.

| Destination | Where |
| --- | --- |
| Gumroad shop | `links.gumroadShop` |
| Gumroad subscribe (Glowlist signup) | `links.gumroadSubscribe` |
| The Gentle Reset, 3-Day Mini (free) | `links.gentleReset` |
| Grace Notes 7-Day, digital | `links.graceNotesDigital` |
| Grace Notes 7-Day, paperback (Amazon) | `links.theGentleResetBook` |
| Gentle Morning Reset Pack | `links.morningReset` |
| Dragonfly Reminder Charm | `/dragonfly-keychain` (internal route) |
| Contact email | `links.contactEmail` |

**Rules:**

1. An agent **may** research, prepare, and propose a price or checkout-link change, and present it as a diff for review. That work is Yellow.
2. An agent **may not** make any pricing or commerce change live. Applying a change so that customers see a different price or land on a different destination always requires explicit approval from Divag, and the shipping step is governed by the global execution rule.
3. Never edit a commerce URL as a side effect of another task.
4. After any approved change reaches production, open the link and confirm it resolves to the correct product at the correct price.
5. `app/product-links.ts` is not a commerce source. See "Known traps."
6. The live Glowlist signup routes to Flodesk (`https://divaglamkreation.myflodesk.com`). The variable in `app/home-content.ts` is still named `gumroadSubscribe` even though it points to Flodesk. Verify the destination, not the variable name.

## Deployment safety

- Production deploys through **Vercel, from GitHub**. Pushing to `main` triggers a production build automatically.
- `lemd30-oss/divaglamkreation-site` on branch `main` is the source of truth. A direct Vercel deploy that doesn't match a GitHub commit will be overwritten on the next push.
- `divaglamkreation-site.vercel.app` is a Vercel-generated deployment URL for this project. **Nothing in this repository confirms what it serves.** It may be a production alias rather than a separate staging environment. Do not describe it as staging, and do not rely on it as a pre-production review surface, until that is confirmed in the Vercel project settings.
- Access to preview deployment URLs depends on the project's deployment protection configuration. Some settings require authentication, some don't. Check the project's protection settings before assuming a preview link can be shared or opened on a phone.
- Documentation-only commits should include `[skip ci]` in the commit message to avoid an unnecessary production build.
- Environment variables `UNSPLASH_ACCESS_KEY` and `NOTION_TOKEN` are referenced only by the legacy root `api/` handlers. Do not add, remove, or modify environment variables without approval.

Do not change Vercel configuration, domains, production environment variables, deployment settings, or the production branch. All Red.

## Definition of done

A website change is complete only when all of the following are true:

1. The edit was made in the canonical `app/` layer, not a legacy file.
2. `npm run build` completes with no TypeScript or Next.js errors.
3. No new accessibility regressions: semantic structure intact, alt text present and meaningful, keyboard navigation works, contrast holds.
4. Affected pages were viewed and behave correctly, including on mobile width.
5. Any touched commerce link was confirmed to resolve correctly.
6. Copy passes the Brand Guardian check.
7. The agent reports: files changed, what verification was run, and anything left unverified.
8. Any document made stale by the change is either updated or flagged in the report.

"Done" here means the working tree is ready for review. Shipping is a separate approval. Unverified is not done — say what wasn't checked.

## Future DGK Brand OS

**`divaglamkreation-site` is the website repository.** Its scope is the Next.js application, Vercel deployment, site content, commerce links, SEO, and website documentation.

The broader DivaglamKreation operating system belongs in a separate repository, **`dgk-brand-os`**, which will hold cross-platform brand foundation, Brand Guardian definitions, shared knowledge and operating memory, agent definitions and permissions, platform SOPs, decision history, and content strategy.

```text
                    DIVAGLAMKREATION
                           │
                 DGK Executive Agent
                           │
              ┌────────────┴────────────┐
              │                         │
        DGK Brand OS               Website Repo
      dgk-brand-os              divaglamkreation-site
              │                         │
       Brand foundation              Next.js
       Brand Guardian                Vercel
       Shared memory                 Site content
       Agent permissions             Commerce links
       Platform SOPs                 SEO
       Decisions                     Website docs
       Content strategy
              │
      ┌───────┼────────┬────────┐
      ▼       ▼        ▼        ▼
   Content  Product Pinterest Analytics
```

**Why the split:** brand rules, agent instructions, and platform playbooks govern work across Canva, Later, Etsy, KDP, Substack, Instagram, and Pinterest. If they live here, every brand-voice edit triggers a Vercel build, and every agent loads TypeScript and CSS context to answer a question that has nothing to do with the website.

**Do not expand this repository into the DGK business operating system.** When work clearly belongs to the brand OS, say so rather than adding it here.

## Open items

Tracked, not yet approved. Do not act on these.

1. Repository cleanup: remove the Jekyll workflow, gitignore `tsconfig.tsbuildinfo`, remove the stray `j.s` file, move root `.html` files into `/legacy/`, resolve `app/product-links.ts`.
2. Split `docs/` into `docs/architecture.md`, `docs/content-editing.md`, `docs/commerce-inventory.md`, `docs/deployment.md`, and a dated `docs/decisions/` log.
3. Stand up `dgk-brand-os`.
4. Confirm what `divaglamkreation-site.vercel.app` serves and what the deployment protection settings are.
5. Audit whether `UNSPLASH_ACCESS_KEY` and `NOTION_TOKEN` are still set in Vercel and whether they can be retired.
6. Resolve the font gap. The live site renders in Georgia / Times New Roman system serifs. The DGK canonical file in Drive names Playfair Display, Lora, Dancing Script, and Montserrat. Confirm whether the system-serif choice is deliberate (Google Fonts CDN avoidance) before changing anything.
