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
