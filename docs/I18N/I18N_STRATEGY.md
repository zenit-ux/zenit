# i18n Strategy

Source: SITE-AUDIT analysis (May 2026 baseline)

---

## Current State

Only **one page flow** has proper i18n implementation: `/squads/pre-registro`.
All other pages are single-language with no locale routing.

---

## Locale Coverage by Route

| Route | Language | i18n | Notes |
|-------|----------|------|-------|
| `/` | English + ES badges | ❌ | EN primary, some ES mixed in |
| `/companies` | Spanish | ❌ | Full ES, no variants |
| `/squads` | Spanish | ❌ | Full ES, no variants |
| `/pricing` | ES/EN mixed | ❌ | Plans in ES, FAQ in EN |
| `/how-it-works` | ES/EN mixed | ❌ | Mixed without structure |
| `/kaizen` | ES/EN mixed | ❌ | Mixed without structure |
| `/safepay` | ES/EN mixed | ❌ | H1 in ES, body in EN |
| `/skillbase` | English | ❌ | EN primary |
| `/talentpath` | ES/EN mixed | ❌ | H1 in ES, sections in EN |
| `/talkflow` | ES/EN mixed | ❌ | H1 in ES, sections in EN |
| `/blog` | ES posts / EN UI | ❌ | Mixed without structure |
| `/squads/pre-registro` | Spanish | ❌ | Standalone, no modal |
| `/es/squads/pre-registro` | Spanish | ✅ | Via `lib/i18n/preregistro.ts` |
| `/en/squads/pre-registro` | English | ✅ | Via `lib/i18n/preregistro.ts` |
| `/pt/squads/pre-registro` | Portuguese | ✅ | Via `lib/i18n/preregistro.ts` |

---

## Target Languages

| Code | Language | Market |
|------|----------|--------|
| `es` | Spanish (LatAm) | Argentina, Mexico, Colombia, Chile, Uruguay |
| `en` | English | US, Europe, global companies |
| `pt` | Portuguese (PT-BR) | Brazil |

Default locale: `es` (most content is already in Spanish)

---

## Current i18n Pattern (pre-registro)

**File:** `lib/i18n/preregistro.ts`
**Pattern:**
```ts
type Locale = 'es' | 'en' | 'pt'

export function t(locale: Locale) {
  return {
    hero_h1: { es: "...", en: "...", pt: "..." }[locale],
    // ... all strings
  }
}
```

**Used in:** `components/squads/PreRegistroPage.tsx` with `{ locale }` prop.

---

## Locale Routing

Current implementation:
- Locale prefix: `/es/`, `/en/`, `/pt/` prepended to route
- Only `/squads/pre-registro` has locale variants
- `LocaleSwitcher` in Navbar detects locale from pathname and rewrites URL
- On non-localized pages (e.g., `/pricing`), clicking locale switcher navigates to `/es/pricing` → 404

**Root issue:** The locale switcher adds a prefix to all routes, but only pre-registro routes exist with prefixes.

---

## `<html lang>` Issue

`app/layout.tsx` hardcodes `lang="en"` globally. This is incorrect for:
- All Spanish pages (`/companies`, `/squads`, etc.)
- Portuguese locale pages

**Impact:** Screen readers announce content in wrong language. This is a P1 accessibility issue.

---

## Recommended Implementation Path

### Phase 1 — Fix html lang (immediate)
Use Next.js `generateStaticParams` or middleware to set `lang` per route based on content language.

### Phase 2 — Formalize locale routing
Adopt Next.js App Router internationalization with `[locale]` segment:
```
app/[locale]/page.tsx          → /
app/[locale]/companies/page.tsx → /companies
```
Or use a library like `next-intl` or `next-i18next`.

### Phase 3 — Extract all copy to dictionaries
Follow the pattern from `lib/i18n/preregistro.ts` for each page.
See `DICTIONARIES.md` for the recommended format.

### Phase 4 — Sitemap hreflang
Add `hreflang` alternates for each localized route in `app/sitemap.ts`.

---

## Priority for Translation

| Page | Priority | Reason |
|------|----------|--------|
| `/` (homepage) | High | Primary entry point |
| `/companies` | High | Already in ES — needs EN + PT |
| `/squads` | High | Already in ES — needs EN + PT |
| `/pricing` | High | Currently mixed — needs proper i18n |
| `/how-it-works` | Medium | Mixed — needs cleanup |
| `/kaizen` | Medium | Mixed |
| `/safepay` | Medium | Mixed |
| `/skillbase` | Low | Already EN — needs ES + PT |
| `/talentpath` | Low | Mixed — needs cleanup |
| `/talkflow` | Low | Mixed — PT especially relevant |
| `/blog` | Low | Post content requires translation |

---

## Brand Terms (Never Translate)

These are proper nouns — keep in all locales:
- Zenit
- Kaizen
- SafePay
- ZenitRank
- TalentPath
- TalkFlow
- SkillBase
- Squad / Squad B
- ZenitRank badges: Validado / Confiable / Verificado / Elite *(may localize badge names)*

---

## Technical Terms (Keep or Translate Per Locale)

| Term | ES | PT |
|------|----|----|
| milestone | milestone *(keep)* or "entrega" | milestone *(keep)* or "entrega" |
| discovery | discovery *(keep)* or "diagnóstico" | discovery *(keep)* or "diagnóstico" |
| escrow | escrow *(keep)* | escrow *(keep)* |
| brief | brief *(keep)* | brief *(keep)* |
| stack | stack *(keep)* | stack *(keep)* |
| onboarding | onboarding *(keep)* | onboarding *(keep)* |
