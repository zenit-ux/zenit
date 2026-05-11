# Missing & Gaps

Consolidated list of: routes linked but not built, copy inconsistencies, a11y gaps, asset gaps, dead code, and open issues.

---

## 1. Broken Routes (linked but have no `page.tsx`)

### Critical — Linked from Navbar/CTA
| Route | Linked from | Impact |
|-------|-------------|--------|
| `/login` | Navbar ("Log in"), Footer, SkillBase final CTA | Every user trying to log in hits 404 |
| `/get-started` | Navbar ("Get started"), Companies, SkillBase, SafePay, TalentPath, TalkFlow CTAs | Every CTA conversion hits 404 |
| `/post-project` | Navbar megamenu (For Companies) | Disallow'd in robots.txt but no page exists |
| `/ai-migration` | Homepage AITeamsSection CTA, FinalCTASection "For AI Teams" | Broken link from primary homepage section |

### High — Linked from inner pages
| Route | Linked from |
|-------|-------------|
| `/analytics` | Navbar megamenu (For Squads) |
| `/case-studies` | Navbar megamenu (For Companies) |
| `/projects` | Navbar megamenu (For Squads → TalentPath?) |
| `/earnings` | Navbar megamenu (For Squads) |
| `/handbook` | Navbar megamenu (For Squads → Squad Handbook) |
| `/faq` | — (referenced in docs but not in nav) |
| `/about` | Footer "Company" column |
| `/careers` | Footer "Company" column |
| `/contact` | Footer "Company" column |
| `/privacy` | Footer "Legal" column, pre-registro terms |
| `/terms` | Footer "Legal" column, pre-registro terms |

### Medium — Blog posts (no detail route exists)
- `/blog/[slug]` has no implementation
- 6 static post cards on `/blog` each should link to a post detail page
- All 6 post links currently go nowhere (no `<Link href>` targets are implemented)

### Low — Documented but non-existent
| Route | Note |
|-------|------|
| `/squads?q={search_term_string}` | Referenced in WebSite JSON-LD `SearchAction` target, but `/squads` is a static page with no search |

---

## 2. Copy Inconsistencies

### Commission fee discrepancy
| Location | Value shown |
|----------|-------------|
| `app/companies/page.tsx` stats strip | **7–12%** |
| `app/pricing/page.tsx` plan card | **12%** (flat) |
| Homepage (`HeroSection.tsx`) | **"15% cost"** (subheadline) |
| Homepage (`ValuePropSection.tsx`) | **"15% commission"** |
| `app/how-it-works/page.tsx` FAQ | **"15% for standard, 18% for AI-native"** |
| CLAUDE.md / docs | **15% standard, 18% AI-native** |

**Verdict:** 15% is the intended number. The companies page stats strip showing "7–12%" is a copy error.

### Homepage trust line vs. stats card
| Location | Squads claim | Projects claim |
|----------|-------------|----------------|
| HeroSection trust line | "15+ squads" | "$500k+ projects" |
| FinalCTASection stats strip | "500+ vetted squads" | — |
| Footer live badge | "500+ squads active" | — |

**Verdict:** "15+ squads" in the hero trust line is inconsistent with "500+" used everywhere else.

### Language mixing without intent
| Page | Issue |
|------|-------|
| `/safepay` | H1 is in Spanish ("el dinero está seguro"), rest of page is English |
| `/talkflow` | H1/Hero body in Spanish, all features/sections in English |
| `/talentpath` | H1 in Spanish ("Crecé como profesional"), all sections in English |
| `/companies` | Fully Spanish, but site `<html lang="en">` |
| `/squads` | Fully Spanish, same lang issue |
| `/squads/pre-registro` | Correctly trilingual via i18n, but root `<html lang="en">` not updated |

**Root issue:** `app/layout.tsx` hardcodes `lang="en"` globally. The majority of content pages are in Spanish.

---

## 3. Missing Assets

### OG Images (referenced in metadata, not in `/public`)
| File | Referenced in |
|------|--------------|
| `/og-image.png` | Root layout (`app/layout.tsx`) |
| `/og-companies.png` | `app/companies/layout.tsx` |
| `/og-squads.png` | `app/squads/layout.tsx` |
| `/og-pricing.png` | `app/pricing/layout.tsx` |
| `/og-safepay.png` | `app/safepay/layout.tsx` |
| `/og-how-it-works.png` | `app/how-it-works/layout.tsx` |
| `/og-kaizen.png` | `app/kaizen/layout.tsx` |
| `/og-blog.png` | `app/blog/layout.tsx` |
| `/og-pre-registro.png` | `app/squads/pre-registro/layout.tsx` |
| `/og-skillbase.png` | `app/skillbase/layout.tsx` |
| `/og-talentpath.png` | `app/talentpath/layout.tsx` |
| `/og-talkflow.png` | `app/talkflow/layout.tsx` |

**Impact:** All social shares (Twitter, LinkedIn, WhatsApp) show no preview image. The `metadataBase` is set, so Next.js will try to resolve these URLs and serve a broken image.

---

## 4. Unused / Orphan Components

These components exist in `components/sections/` but are not imported in any page. They are dead code.

| Component | Notes |
|-----------|-------|
| `AIMaturitySection.tsx` | Purpose unclear |
| `AgenticPipelineSection.tsx` | Content exists inline in how-it-works |
| `BenefitsSection.tsx` | Benefits inline in page files |
| `DualAudienceSection.tsx` | Unused |
| `FAQSection.tsx` | FAQ inline in how-it-works + pricing |
| `FeaturedSquadsSection.tsx` | Unused |
| `GenUISection.tsx` | Content inline in how-it-works |
| `HeroCanvas.tsx` | Canvas/neural handled by `neural-noise.tsx` |
| `HeroVisuals.tsx` | Unused |
| `HowItWorksSection.tsx` | How It Works is a full page |
| `KaizenSection.tsx` | Kaizen is a full page |
| `PlatformFeatures.tsx` | Unused |
| `PlatformShowcase.tsx` | Unused |
| `PlatformWireframes.tsx` | Unused |
| `PreRegCTA.tsx` | Unused |
| `ProblemSolutionSection.tsx` | Unused |
| `SafePaySection.tsx` | SafePay is a full page |
| `StatsSection.tsx` | Stats inline in pages |
| `TheSolutionSection.tsx` | Unused |
| `TrustSignals.tsx` | Trust signals inline in HeroSection |
| `TrustStrip.tsx` | Unused |

**Count:** 21 unused section components.

**Also unused:**
- `components/squads/KaizenChat.tsx` — not confirmed used anywhere
- `components/providers/AOSProvider.tsx` — initialized but no AOS classes active

---

## 5. Sitemap Gaps

`app/sitemap.ts` includes 11 routes but is missing:

| Missing route | Reason |
|---------------|--------|
| `/squads/pre-registro` | Exists as a page, not in sitemap |
| `/es/squads/pre-registro` | Localized route, not in sitemap |
| `/en/squads/pre-registro` | Localized route, not in sitemap |
| `/pt/squads/pre-registro` | Localized route, not in sitemap |
| `/blog/[slug]` | No detail pages exist yet |
| `hreflang` alternates | No locale variants declared |

---

## 6. Robots.txt Issues

`app/robots.ts` disallows: `/api/`, `/login`, `/get-started`, `/post-project`

- Disallowing `/login` and `/get-started` while they don't exist yet is harmless, but means once built they won't be indexed
- `/get-started` is the primary conversion CTA on every page — intentional disallow or copy error?

---

## 7. Accessibility Gaps

### Critical
- **No skip-to-main-content link** — keyboard users must tab through the full navbar on every page
- **Desktop megamenu keyboard inaccessible** — hover-only, no focus management. Tab enters the dropdown trigger button but focus does not enter the megamenu panel
- **`<html lang="en">` globally** — majority of pages are in Spanish. Incorrect for screen readers

### Moderate
- **Mobile `<nav>` lacks `aria-label`** — indistinguishable from the desktop `<nav>` for screen readers
- **Mockup interactive buttons without `aria-disabled` or `role="presentation"`** — `KaizenDashboardMockup`, `DeliveryDashboardMockup`, `SquadMentorDashboardMockup`, etc. contain `<button>` elements with `cursor-default` but no semantic disabled state
- **Checkbox in pre-registro form** — no visible focus indicator beyond the global `focus-visible` outline. The visual toggle uses `CheckCircle2` icon but there's no standard checkbox `[type="checkbox"]` that AT can expose

### Minor
- `--cyan` (#00b4d8) — ~3.5:1 contrast on background. Borderline fail for normal text (AA requires 4.5:1). Passes only for large text.
- `--gold` (#f59e0b) — ~4.2:1. Borderline AA for normal text.
- `text-white/40`, `text-white/30`, `text-white/25` combinations used in cards — likely fail AA at those opacity levels on dark card backgrounds
- Pages `/safepay`, `/skillbase`, `/talentpath`, `/talkflow` not fully audited for a11y

---

## 8. Inconsistencies Between CLAUDE.md and Live Site

| CLAUDE.md claim | What exists in code |
|-----------------|---------------------|
| "15% commission, 18% AI-native" | companies page shows 7–12% |
| "Kaizen connects companies with verified Latin American tech squads. AI-powered matching via Kaizen in 48 hours." (root metadata desc) | Matches |
| "15+ squads · $500k+ projects" (HeroSection) | Inconsistent with "500+ squads" used on Footer, FinalCTA |

---

## 9. BETA / Concept Labels in Production

These sections are visible to users but marked as not-ready:

| Location | Label |
|----------|-------|
| `how-it-works` — AgentNetworkMockup | "BETA CONCEPT" badge in mockup header |
| `how-it-works` — GenUIMockup | "BETA" badge in section eyebrow |

Both sections are rendered with real content and no conditional hide. The BETA labels are inside the mockup UI, which may confuse users about what's live vs. roadmap.

---

## 10. `/ai-migration` — Linked from Two Homepage Sections

This route is non-existent but linked from:
1. `AITeamsSection.tsx` CTA: "Explore AI Transformation" → `/ai-migration`
2. `FinalCTASection.tsx` "For AI Teams" card: "Explore AI Path →" → `/ai-migration`

Both are on the homepage — primary conversion touchpoints. This is the highest-priority broken link.

---

## 11. Missing Functionality

These features are described or implied but have no implementation:

| Feature | Referenced in | Status |
|---------|--------------|--------|
| Project search (`/squads?q=`) | JSON-LD WebSite SearchAction | No search on `/squads` |
| Blog post detail pages | Blog page cards | No `/blog/[slug]` route |
| Auth / login flow | Navbar "Log in", footer | No page, no auth system |
| Get started flow | Every CTA | No page |
| Squad matching | Kaizen, how-it-works | Frontend only, no backend |
| SafePay escrow transactions | SafePay page | Frontend mockup only |
| ZenitRank scoring | Squads, pre-registro | Frontend mockup only |
| TalkFlow calls | TalkFlow page | Frontend mockup only |

---

## Summary by Priority

### P0 — Fix immediately (broken user flows)
1. `/ai-migration` — linked from two homepage sections
2. `/get-started` — all primary CTAs land here, page missing
3. `/login` — linked from navbar on every page
4. Commission fee inconsistency (companies page: 7–12% vs. 15% everywhere else)
5. Hero trust line "15+ squads" vs. "500+ squads" everywhere else

### P1 — Fix before launch
6. All OG images missing (social sharing broken)
7. `/privacy` and `/terms` missing (linked in legal section AND in form terms)
8. `<html lang>` attribute — should be `es` for Spanish pages (or use dynamic lang per route)
9. Desktop megamenu keyboard accessibility
10. Skip-to-main-content link

### P2 — Fix before public traffic
11. Blog post detail pages `/blog/[slug]`
12. `/about`, `/careers`, `/contact` from Footer
13. Add `/squads/pre-registro` to sitemap
14. BETA concept labels — decide: hide or show as roadmap
15. Reconsider `/get-started` and `/login` disallow in robots.txt
