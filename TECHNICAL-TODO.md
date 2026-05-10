# AccessAble Technical TODO

Deferred technical / infrastructure tasks. Companion to `COPY-REVIEW-TODO.md`
(which scopes copy/content work). Pick up items here outside of copy-review
sessions.

---

## Schema logo spec compliance

**File:** `public/images/logo-main-optimized.png` — currently 40×40 PNG.

**Used by:**
- `src/content/site.json:6` (`logo` field)
- `src/utils/schemaFactory.ts:5` (`LOGO_URL` → Organization JSON-LD `logo`)

**Problem:** Google's structured-data spec for `Organization.logo` recommends
**≥112×112**, square-ish, with the brand mark clearly visible. The current
40×40 file is well below that minimum and is likely undersized in Google's
Knowledge Graph and AI-agent grounding.

**Fix:** Generate a **200–512px square** crop of the AccessAble icon and
replace `logo-main-optimized.png`. Use the in-repo source `ac-logo.svg`
(zero-pinhole vector, 1024×1024 viewBox) — render to PNG at the chosen size
with `sharp`, transparent or white background per Schema.org guidance.

**Why this isn't urgent:** SEO/AI ranking impact, not a user-facing bug. No
broken pages. Wire-up location is already in place; only the asset needs
upgrading.

**Suggested approach when picking this up:**
1. Decide on size (recommend 512×512 for futureproofing).
2. Render: `npx sharp-cli -i public/images/ac-logo.svg -o public/images/logo-main-optimized.png --resize 512 --flatten "#ffffff"`
   (or whatever sharp invocation; verify the icon is properly centered and not anti-aliased into the corners).
3. No source-code changes needed — `site.json` and `schemaFactory.ts`
   already point at the same filename.
4. Verify in production with Google's Rich Results Test
   (`https://search.google.com/test/rich-results`) by pasting the deployed URL.

**Logged:** 2026-05-10 by the same session that committed the SVG vector lockups
(`b58938f` → `b386c42`). Surfaced in the audit alongside the lockup-swap work
but deferred to keep that PR focused.
