# Refund and return policy comparison — 2026-09-30

Read-only comparison of the two customer-facing policy pages. **No policy text has been changed.** Policy and return-policy text is Yellow: propose the diff, wait for approval. This is not legal advice.

- `/policies` — `app/policies/page.tsx`, "Last updated July 24, 2026." Linked from the footer. In the sitemap.
- `/return-policy` — `app/return-policy/page.tsx`, "Last updated August 6, 2026." **Not linked** from the footer or header. **Not in the sitemap.** The page renders when the URL is typed.

## Side by side

| Topic | `/policies` (#refunds, #digital-downloads, #shipping) | `/return-policy` |
| --- | --- | --- |
| Scope statement | "Digital products delivered through Gumroad and limited-batch physical products paid for through GoDaddy Payments." | "Each product is created with care and intention." No mention of Gumroad, GoDaddy, or Amazon. |
| Digital refunds | "Digital purchases are generally final." | "Generally non-refundable once the files have been accessed or downloaded." |
| Digital problems | Contact us for a duplicate charge, wrong file, or no access, "so the issue can be reviewed." | Contact us for a technical issue, wrong file, or no access. Adds: "Refunds will also be provided where required by applicable law." |
| Damaged or wrong physical item | Email **within seven days of delivery** with order details and photos of the item and packaging. "Replacement or other appropriate resolution." | Contact us "as soon as possible." May ask for photos. "Replacement, store credit, or refund." No deadline. |
| Ordinary physical returns | **Not addressed.** | Return requests accepted **within 14 days** of delivery. Item unused, original condition, original packaging when reasonably possible. Proof of purchase may be required. Contact us before sending it back. |
| Return shipping | Not addressed. Shipping section says charges are shown at checkout, and address changes "cannot be guaranteed after fulfillment begins." | Buyer generally pays, unless the item arrived damaged, defective, or incorrect. Original shipping "generally non-refundable." |
| Refund method | Not addressed. | "Generally issued to the original payment method." Timing "may vary by bank or payment provider." |
| Exchanges | Not addressed. | Not guaranteed. Contact us. |
| Cancellations | Not addressed. | Contact us as soon as possible. Orders already in production, shipped, personalized, or digitally delivered "may not be eligible." |
| Non-returnable items | Not addressed. | Downloaded digital products, personalized or custom items, final-sale items, used or damaged items. "Exceptions required by applicable law still apply." |
| Contact email | divaglamkreation@gmail.com | divaglamkreation@gmail.com (asks for name, order number, short description) |

## Where they could confuse a customer

1. **Damaged items: 7 days vs. "as soon as possible."** A customer who reads only `/return-policy` may not know about the seven-day window. A customer who reads only `/policies` may not know a refund or store credit is possible.
2. **Ordinary returns exist on one page only.** `/policies` is the linked page and says nothing about a 14-day return option.
3. **Resolution options differ.** "Replacement or other appropriate resolution" vs. "replacement, store credit, or refund."
4. **Digital wording differs slightly.** "Generally final" vs. "generally non-refundable once accessed or downloaded." The second adds a condition and a legal carve-out.
5. **Discoverability.** The more detailed page is the one customers can't reach from the site.

## Things neither page addresses

- **Reflections hardcover (Amazon).** It is sold through Amazon, where returns are handled under Amazon's terms. Neither page says so.
- **Digital purchases on Gumroad.** Gumroad has its own checkout and refund tooling. Neither page says whether DGK follows a different rule than the platform default.
- **Dragonfly Reminder Charm (GoDaddy Payments).** `/policies` covers physical orders generally. `/return-policy` covers eligibility. The product page says nothing about returns or the color choice at checkout.

## Questions only you can answer

1. For physical items (the Dragonfly charm and any others), what do you actually offer today: a 14-day return? Who pays return shipping? Refund, store credit, or replacement?
2. What window applies to damaged or wrong items: seven days, or "as soon as possible"?
3. Do you want digital purchases to stay "generally final," or are there cases you'd refund (e.g. within a set number of days if the file was never opened)?
4. Should the Amazon hardcover be mentioned, with a line pointing customers to Amazon for returns?
5. Do you want one page or two?

## Options (choose after the questions above)

| Option | What changes | Tier / approval |
| --- | --- | --- |
| **A. One canonical page: `/policies`.** Move the return details into `/policies`, then make `/return-policy` redirect to `/policies#refunds`. | Rewrite the refunds section. A redirect can be done inside `app/return-policy/page.tsx` with Next's `redirect()`, which avoids editing the Red files `vercel.json` or `next.config.js`. | Yellow (policy text). Redirect: confirm with Divag first. |
| **B. One canonical page: `/return-policy`.** Link it from the footer and from `/policies#refunds`. Trim `/policies` to a short summary that points to it. | Footer link (Yellow, customer-facing), sitemap line, trimmed `/policies` refunds section. | Yellow |
| **C. Keep both, with clear scopes.** `/policies` = overview (delivery, privacy, terms). `/return-policy` = returns and refunds only. Align the shared facts (windows, options). Link both from the footer. | Small copy edits on both, plus footer and sitemap lines. | Yellow |

**My lean:** Option C is the smallest change and keeps the detailed page. Option A is the simplest for customers. I'd wait for your answers to questions 1–3 before drafting any wording. The facts matter more than the layout.

## Suggested next steps

1. Answer the five questions above.
2. I draft the exact copy diff for the option you choose and show it before editing.
3. One small PR for the policy text. Any footer or sitemap change goes in the same PR so the pages stay consistent.
4. If you want legal or platform-terms review (Gumroad, GoDaddy Payments, Amazon), do it before merge.
