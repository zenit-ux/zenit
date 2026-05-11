# 11 — Blog

**File:** `app/blog/page.tsx`
**Route:** `/blog`
**Language:** Spanish (post content) + English (hero, newsletter, UI labels)
**Status:** ✅ Built (listing page) / ❌ Detail pages missing
**Layout:** Hero + featured post + 5-post grid + newsletter

---

## Current State

Blog listing page with 6 static posts. No `/blog/[slug]` route exists — all post links are broken. Newsletter form is fully accessible. Posts are static data in the page file, not from a CMS.

---

## Sub-sections

### 1 — Hero
- H1: "The Zenit Blog" *(or "Ideas on the future of work.")*
- Body: "Insights on remote teams, AI-augmented development, and building with squads."
- Eyebrow: gold shimmer

### 2 — Featured Post (full-width card)
- "Por qué el matching automático falla (y cómo Kaizen lo resuelve)"
- Category: Engineering / Date: Abr 28, 2026 / Read time: 7 min
- All link clicks → 404 (no `/blog/[slug]` route)

### 3 — Post Grid (5 posts, 3-col)
1. Engineering — "SSR vs SR: cuándo cada uno" (Abr 21, 2026)
2. Culture — "La verdad sobre equipos 100% remotos en LATAM" (Abr 14, 2026)
3. Product — "SafePay: cómo construimos escrow para proyectos de software" (Abr 7, 2026)
4. Case Study — "Caso real: cómo Kaizen matcheó un backend bancario en 48h" (Mar 31, 2026)
5. Product — "ZenitRank: por qué la reputación objetiva cambia todo" (Mar 24, 2026)

### 4 — Newsletter Form
- H2: "Stay ahead of remote team strategy."
- Input placeholder: "your@email.com"
- CTA: "Subscribe →"
- `aria-label="Newsletter signup"` ✅
- `<label className="sr-only">` ✅
- `autoComplete="email"` ✅

---

## Copy

See `copy-en.md` / `copy-es.md` / `copy-pt.md`.

---

## Components Used

| Component | Notes |
|-----------|-------|
| Newsletter form | Inline — fully accessible with sr-only label |
| Post cards | Inline static data array |

---

## Accessibility

| Check | Status |
|-------|--------|
| Newsletter form | ✅ Full a11y (label, aria-label, autoComplete) |
| Post link hrefs | ⚠️ All link to 404 pages |
| Post card images | ✅ No img tags — all CSS/design |
| `<html lang>` | ⚠️ Posts are in Spanish, page is `lang="en"` |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P1 | No `/blog/[slug]` route — all 6 post links 404 |
| P1 | No OG image at `/og-blog.png` |
| P2 | Static data — no CMS integration |
| P2 | Mixed ES posts / EN UI without i18n |

---

## Next Steps

- [ ] Create `/blog/[slug]` dynamic route + static generation for 6 posts
- [ ] Generate OG image
- [ ] Connect to CMS or MDX for post content
- [ ] Add i18n to post listings
