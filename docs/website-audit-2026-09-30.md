# Website audit — 2026-09-30

Read-only audit of `app/` against `CLAUDE.md`. Nothing here has been applied.
Items marked **Yellow** or **Red** need Divag's approval before any edit.

## Commerce links (`app/home-content.ts`)

Live resolution was **not verified**. The sandbox network blocked outbound requests to Gumroad, Amazon, Flodesk, and the live site. Someone needs to click each link once (definition of done, item 5).

| Key | Destination | Used by |
| --- | --- | --- |
| `gumroadShop` | lemdo8.gumroad.com | Footer |
| `gumroadSubscribe` | divaglamkreation.myflodesk.com (Flodesk) | Homepage |
| `gentleReset` | lemdo8.gumroad.com/l/dgk-gentle-pause | Homepage, blog CTAs |
| `graceNotesDigital` | lemdo8.gumroad.com/l/dgk-7-day-reset-journal | Homepage |
| `morningReset` | lemdo8.gumroad.com/l/Divaglamkreation | Homepage |
| `reflectionsHardcover` | amazon.com/dp/B0HK1G42HF | Homepage |
| `theGentleResetBook` | amazon.com/dp/B0HBN6X699 | Footer only |

## Findings

1. **Footer still links the paperback (Yellow).** `SiteFooter.tsx:41` shows "The Gentle Reset Paperback" → `theGentleResetBook`. Recent commits ("Remove Gentle Reset paperback option from homepage", "Restore The Gentle Reset as digital-only") removed it from the homepage. Confirm whether the paperback is still for sale before deciding.
2. **Homepage hero has changed.** `app/page.tsx:20` renders "Who are you?", not "You matter." as `CLAUDE.md` states. Confirm which is intended, then update `CLAUDE.md` or the page.
3. **Sitemap is missing a live post (Yellow).** `/blog/the-art-of-beginning-again` is routable but absent from `app/sitemap.ts`. `/about`, `/return-policy`, and `/sticker-archive` are also absent.
4. **`blogPosts` shows 2 of 6 posts** (now 6 with the new draft). Still an open question whether that is deliberate.
5. **Duplicated URLs.** `app/glowlist/page.tsx:6-7` hard-codes the Flodesk and free-reset URLs instead of importing `links`. A link change in `home-content.ts` would miss this page.
6. **`app/product-links.ts` is still present and stale.** No file imports it.
7. **Dragonfly image is fetched from `raw.githubusercontent.com/.../main/`.** It depends on GitHub and on the file staying on `main`. Consider serving it from `public/images/`.
8. **Reflections price label is just "Hardcover"** while the other products show a price. Confirm whether that is intended.
9. **Naming drift.** `CLAUDE.md` and `README.md:102` say "Grace Notes 7-Day". The site says "The Gentle Reset" for the same product.

## Stale documents — proposed corrections (not applied)

| File | Problem | Proposed change |
| --- | --- | --- |
| `WEBSITE_UPDATE_CHECKLIST.md` | Says the live homepage is `index.html` with the hero "Pour. Pause. Rise." | Point to `app/page.tsx`, `app/home-content.ts`, and `app/blog/`. Remove the hero-copy note. |
| `CLAUDE.md` | Says root `.html` files and the Jekyll workflow exist. Root HTML now lives in `legacy/` and the Jekyll workflow is gone. Open item 1 is partly done. | Update the "Canonical application source" table and open items. |
| `CLAUDE.md` commerce table | Missing `reflectionsHardcover`. Uses "Grace Notes" naming. | Add the row and align the names. |
| `.github/RESOLUTION.md`, `SOCIAL_MEDIA_INTEGRATION.md` | Already flagged in `CLAUDE.md` as outdated. | No change until approved. |

## Workflow handoff note

The Metricool, Notion, and Drive operating prompt belongs in `dgk-brand-os`, not in this repository.
