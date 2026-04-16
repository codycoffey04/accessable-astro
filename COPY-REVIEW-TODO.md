# AccessAble Copy Review TODO

Generated: April 16, 2026
Source: cross-project learnings audit items 6.2 (FAQ word count) and 6.5 (internal linking)
Status: deferred for Cody copy-review session

Two systemic copy gaps were identified during the April 16 audit. Both require copy rewrites and were deferred out of `audit-fixes-apr-2026` to avoid guessing at brand voice. Work through the list below in a dedicated copy session.

Branch `audit-fixes-apr-2026` has already been committed WITHOUT these changes. Apply these on top or in a separate branch.

---

## Section 1 — FAQ Word Count Expansion (Audit Item 6.2)

**Rule:** Every FAQ answer should be 125 to 175 words, with the direct answer as the first sentence.

**Why:** nf-astro and omnia both proved this range produces the best rich-snippet performance in Google + AI-chat grounding. Short answers get truncated; long answers lose the snippet window.

**Current state:** All 41 FAQ answers across the site are under 125 words. Median ~40 words.

**Compliance constraints to preserve while expanding:**
- Support/aid/assistance language only (no cure/treat/heal/eliminate)
- No em dashes. Use commas or rephrasing
- Gold `#C9A844` is decorative only. Never text color on light backgrounds
- Cite the April 1 locked claim when wear testers come up: "12 wear testers, 4.6 average rating"

### 1a. `src/pages/pages/faq.astro` (25 answers, all short)

| Line | Current words | Question |
|------|---------------|----------|
| L14 | 93 | What compression level should I choose? |
| L18 | 73 | How do I measure for compression socks? |
| L22 | 76 | Are your products latex-free? |
| L26 | 77 | How do I care for my compression socks? |
| L30 | 72 | What is DonnEase™? How does the numbered guide system work? |
| L34 | 51 | Do you offer wide-calf sizes? |
| L43 | ~100 | What does mmHg mean? (script undercounted; verify in file) |
| L47 | 79 | How long should I wear compression socks? |
| L51 | 16 | Can I wear compression socks to bed? |
| L55 | 92 | Do I need a prescription for compression socks? |
| L64 | 24 | Are your socks covered by insurance, HSA, or FSA? |
| L68 | ~1 | What payment methods do you accept? (script truncated; answer is near-empty — write from scratch) |
| L77 | 71 | How long does shipping take? |
| L81 | 39 | Do you ship internationally? |
| L85 | 72 | What is your return policy? |
| L89 | 8 | How do I initiate a return or exchange? (write from scratch) |
| L98 | 67 | What is AccessAble Pro? |
| L102 | 50 | Do you offer team orders for healthcare facilities? |
| L106 | 71 | What makes Pro socks different from your consumer line? |
| L110 | 23 | Can healthcare professionals try a sample before ordering for their team? |
| L119 | 67 | Are your products designed for wheelchair users? |
| L123 | 52 | Do you offer tools to help with putting on compression socks? |
| L127 | 41 | Can I use your products with mobility aids like walkers or canes? |
| L131 | 94 | What makes AccessAble different from other compression sock brands? |
| L140 | 56 | When are you launching? (already updated April 16 QA to reference 12 testers + 4.6 rating; may still need word-count expansion to 125+) |

**Priority within 1a:** L68 and L89 have near-empty answers and must be written. L51 and L110 at 16 and 23 words are dangerously short. Start there.

### 1b. `src/data/conditionContent.ts` (16 answers across 5 condition pages, all short)

| Line | Current words | Condition | Question |
|------|---------------|-----------|----------|
| L82 | 33 | post-surgery | When can I start using DonnEase™ Socks after surgery? |
| L83 | 38 | post-surgery | What if I still can't reach my feet to put on DonnEase™ Socks? |
| L84 | 29 | post-surgery | How long will I need compression after surgery? |
| L85 | 28 | post-surgery | Can I sleep in DonnEase™ Socks? |
| L86 | 28 | post-surgery | Will DonnEase™ Socks work with my knee brace / walking boot / other equipment? |
| L135 | 45 | arthritis | Will DonnEase™ Socks work with severe arthritis? |
| L136 | 35 | arthritis | Can I use these with one hand? |
| L137 | 35 | arthritis | Do the numbered markers make the socks look medical or institutional? |
| L138 | 36 | arthritis | What if my hands swell throughout the day? |
| L139 | 33 | arthritis | Can I wash these in the washing machine? |
| L194 | 40 | wheelchair-users | Can I use DonnEase™ Socks from a wheelchair? |
| L195 | 43 | wheelchair-users | What if I can't reach my feet at all, even seated? |
| L196 | 41 | wheelchair-users | Will DonnEase™ Socks work with limited hip flexion? |
| L197 | 46 | wheelchair-users | Can I use these with back pain restrictions? |
| L198 | 37 | wheelchair-users | Are these compatible with leg braces or orthotics? |
| L199 | 36 | wheelchair-users | What if my balance is unstable? |

Diabetes and limited-mobility condition pages also exist in this file. Script did not find FAQs on those entries — verify whether they have FAQ content at all, and if so, add them to this list.

---

## Section 2 — Internal Linking Insertions (Audit Item 6.5)

**Rule:** Each condition page and learn article should carry in-body contextual links to related products, related guides, and supporting articles. Header and footer nav links do not count.

**Why:** nf-astro and omnia both showed that in-body links improve topical cluster strength and increase the share of pages that earn featured-snippet placements.

**Current state:** Zero in-body internal links in `conditionContent.ts`, `articleContent.ts`, and `learnArticles.ts`. Condition pages and learn articles that rely on these data sources render entirely without contextual links.

**Suggested link patterns per page type:**

### 2a. `src/data/conditionContent.ts`

For each of the 5 condition entries (post-surgery, arthritis, limited-mobility, wheelchair-users, diabetes), add contextual links in the `educationalContent.paragraphs` array and the `howItHelps.whyCompression` / `whatAdaptiveFeatures` fields. Aim for two to four links per condition page, minimum.

Suggested targets per condition:
- **Every condition page** should link once to `/collections/donnease` (the flagship PDP) and once to `/pages/size-guide`.
- **Post-surgery:** link to `/learn/caregiver-guide-compression-socks`, `/learn/how-to-put-on-compression-socks-easily`.
- **Arthritis:** link to `/learn/donnease-adaptive-compression-guide`, `/learn/how-to-put-on-compression-socks-easily`.
- **Limited-mobility:** link to `/learn/donnease-adaptive-compression-guide`, `/learn/mobility-aids`.
- **Wheelchair-users:** link to `/learn/compression-socks-spinal-cord-injury`, `/learn/donnease-adaptive-compression-guide`, `/learn/caregiver-guide-compression-socks`.
- **Diabetes:** link to `/learn/compression-101`, `/pages/faq` (the diabetes-specific question).

Use anchor tags inline in the copy, e.g. `<a href="/learn/donnease-adaptive-compression-guide">DonnEase donning guide</a>`.

### 2b. `src/data/articleContent.ts`

This file backs compression-101, mobility-aids, and travel-tips articles. The `ContentBlock` structure stores paragraphs as plain strings. Add anchor tags inline where topics overlap:

- **compression-101** should link to `/collections/donnease`, `/pages/size-guide`, `/learn/how-to-put-on-compression-socks-easily`, and the relevant condition pages where it mentions conditions (arthritis, post-surgery, etc).
- **mobility-aids** should link to `/collections/donnease`, `/learn/travel-tips`, `/collections/wheelchair-users` (mentioned contextually).
- **travel-tips** should link to `/learn/compression-101`, `/collections/compression-socks`, `/pages/faq`.

### 2c. `src/data/learnArticles.ts`

This is the index of all 7 learn articles. Verify each article's summary/metadata has a natural link target in the body when referenced from other articles (check related-article slugs in each article's frontmatter).

The 4 `/learn/*.astro` files that load source content from `/Desktop/accessable/content/learn-hub/*.md` (donnease guide, caregiver guide, SCI guide, easy donning) already have some in-body links per the audit — re-verify those are still intact.

### 2d. Anchor quality rules while writing link copy

- Use descriptive anchor text. Not "click here". Not "this page".
- Open internal links in the same tab (no `target="_blank"`).
- External links (to .gov/.edu/.org sources) should include `rel="noopener noreferrer"` and `target="_blank"`.
- Do not add decorative gold color to links. Use the existing link style in the stylesheet.

---

## Section 3 — Empty Condition Page Content (diabetes, wheelchair-users)

**Rule:** Every shipped `/collections/*` condition page should have substantive audience-specific content across all major sections: challenges, how compression helps, practical tips, and (where applicable) caregiver notes.

**Why:** The page layout in `src/components/astro/ConditionSection.astro` conditionally hides empty sections (lines 72, 88, 120, 136, 152), so thin entries render as short, mostly-educational pages that miss the differentiated value of a dedicated audience collection. Wheelchair users are a core audience and diabetes is a high-volume search target.

### Current indexing status (April 16 QA decision)

| Page | Indexable? | Reason |
|---|---|---|
| `/collections/diabetes` | **noindex** (as of commit flagging this TODO) | Too empty to ship as indexable. Also excluded from sitemap via `astro.config.mjs` filter. Remove noindex + sitemap exclusion once Section 3a copy below is written. |
| `/collections/wheelchair-users` | **indexable** | Core audience segment. Ships with 3 wheelchair-specific FAQs + 1 caregiver note + 3 educational paragraphs + shopping fallback CTA. Thin but not empty. **Priority-high copy task** to fill Section 3b before expanding reach (e.g., earned links, micro-influencer seeding referencing this URL). |

**Current state of empty data keys in `src/data/conditionContent.ts`:**

### 3a. `diabetes` entry (approx L203-228) — UNBLOCKS noindex removal

Needs content in:
- `challenges: []` — diabetes-specific daily-life friction points (neuropathy, foot inspection needs, circulation monitoring, seamless fit priorities, etc.)
- `howItHelps.whyCompression: ''` — why people managing diabetes use compression (comfort during long wear, circulation support)
- `howItHelps.whatAdaptiveFeatures: ''` — what AccessAble products offer (seamless construction, graduated support, fit options)
- `howItHelps.features: []` — bulleted feature list (material, compression level, fit, care)
- `howItHelps.disclaimer: ''` — compliance disclaimer ("not a medical device, does not treat or cure diabetes")
- `practicalTips: []` — daily strategies (foot inspection routine, sizing considerations, wash cycle, when to replace)
- `faqs: []` — diabetes-specific FAQs (can I wear with neuropathy, how does this differ from diabetic socks, etc.)
- `caregiverNotes` — optional, add if relevant

**When 3a is complete:**

1. Remove `noindex={true}` from `src/pages/collections/diabetes.astro` BaseLayout.
2. Remove the `!page.includes('/collections/diabetes')` line from the sitemap filter in `astro.config.mjs`.
3. Rebuild and confirm `dist/sitemap-0.xml` includes the diabetes URL.
4. Request indexing via Google Search Console.

### 3b. `wheelchair-users` entry (approx L230-260) — PRIORITY HIGH

Wheelchair users are a core audience segment and the page is live + indexable. Thin content today undermines the brand promise for that segment. Prioritize this copy work above diabetes and above the faq.astro word-count expansion.

Needs content in:
- `challenges: []` — wheelchair-specific friction points (pressure points from long sitting, reaching feet from seated, compatibility with cushions/braces, working around footrests)
- `howItHelps.whyCompression: ''` — why wheelchair users use compression (circulation support during seated days)
- `howItHelps.whatAdaptiveFeatures: ''` — seated-donning features of DonnEase™
- `howItHelps.features: []` — wide-mouth opening, numbered markers, brace compatibility, pressure-aware fabric
- `howItHelps.disclaimer: ''` — compliance disclaimer
- `practicalTips: []` — elevate foot on footrest, pre-position socks within reach, morning routine, rotation for laundry

`caregiverNotes` and `faqs` are already populated (from April 16 wheelchair content move — commit `957f39f`).

### 3c. `conditionRecommendations` for diabetes and wheelchair-users

Currently only `post-surgery`, `arthritis`, and `limited-mobility` have entries in `conditionRecommendations` (approx L285-401). `/collections/diabetes` and `/collections/wheelchair-users` fall through to the universal shopping fallback added in commit `1dbe2a2`. Once real recommendations are written, add them as new keys in `conditionRecommendations` and the fallback will automatically stop rendering on those pages (gated by `{!recommendations && ...}` in `ConditionSection.astro`).

Suggested structure per entry (match the pattern in existing `post-surgery` / `arthritis` / `limited-mobility` entries):
- `primary`: DonnEase™ as the headline recommendation with audience-specific "whyHelps" framing
- `secondary`: Standard Compression Socks (or Low-Cut Pro for diabetes)
- `completeSolution`: a bundle with audience-specific framing

---

## Out of scope for this TODO

- Homepage, About, Policies, Contact — copy on these pages was not flagged as short or linking-deficient in the April 16 audit.
- AccessAble Pro pages — B2B flow is a separate content effort. Audit item 6.2 and 6.5 apply to DTC only.

---

## How to tackle this

Suggested order:
1. Fix the 3 near-empty FAQ answers first (L68, L89, L51 in faq.astro). These are quick wins.
2. Work through faq.astro answers in order. One commit per category.
3. Move to conditionContent.ts. One commit per condition page.
4. Add internal links in conditionContent.ts as you expand the FAQs in step 3 (same files, same commits).
5. Finish with articleContent.ts links last. Articles change less often, so this is the stablest place to add cross-links.

After every commit, run `npm run build` and verify the FAQ schema JSON output on one of the affected pages to confirm the expanded copy renders correctly in `dist/.../<page>.html`.

---

## POST-CART-FLIP

Not copy work. Code tasks that must be executed when the CartDrawer is uncommented and the site flips from waitlist-only to Add-to-Cart.

### PCF-1 — Fix primary-recommendation CTA destination

**File:** `src/components/astro/ConditionSection.astro`
**Lines:** 208-215 (as of commit `1dbe2a2`)
**Current state:** The primary recommendation CTA is hardcoded to `https://signup.accessablecompression.com` regardless of the `ctaLink` configured in `conditionRecommendations[slug].primary.ctaLink`. This is correct behavior for pre-launch waitlist mode: every "Shop DonnEase™ Socks" button on post-surgery / arthritis / limited-mobility condition pages currently directs users to the waitlist signup even though the data layer already specifies `/collections/donnease` as the intended destination.

**What to change post-cart-flip:**

```astro
<!-- Change from -->
<a
  href="https://signup.accessablecompression.com"
  target="_blank"
  rel="noopener noreferrer"
  class="..."
>
  {recommendations.primary.ctaText}
</a>

<!-- To -->
<a
  href={recommendations.primary.ctaLink}
  class="..."
>
  {recommendations.primary.ctaText}
</a>
```

Also remove the `target="_blank"` and `rel="noopener noreferrer"` attributes when switching to an internal link.

**Why not change it now:** Codex adversarial review flagged this on April 16 as a medium-severity finding. Decision (April 16 QA): leave as-is because waitlist-only mode makes the hardcoded behavior correct for launch. Revisit only after the CartDrawer is uncommented and the store accepts orders.

**Also check:** the `completeSolution` CTA on the same file (around L274-281) is hardcoded to the waitlist too. Apply the same fix there, using `recommendations.completeSolution.ctaLink`.

### PCF-2 — Confirm no other hardcoded waitlist links on commerce paths

After the cart flip, search the codebase for `signup.accessablecompression.com` and audit every occurrence: which should remain (waitlist list page, dedicated waitlist CTAs in hero/footer when soft-launching, etc.) and which should swap to internal cart/checkout paths. Do this as a batch audit, not one-off fixes.

