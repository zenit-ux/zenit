# Routes & Pages

## Existing Routes (have `page.tsx`)

| Route | File | Language | Status |
|-------|------|----------|--------|
| `/` | `app/page.tsx` | EN | ✅ Built |
| `/companies` | `app/companies/page.tsx` | ES | ✅ Built |
| `/squads` | `app/squads/page.tsx` | ES | ✅ Built |
| `/squads/pre-registro` | `app/squads/pre-registro/page.tsx` | ES | ✅ Built (standalone form) |
| `/pricing` | `app/pricing/page.tsx` | EN/ES mixed | ✅ Built |
| `/how-it-works` | `app/how-it-works/page.tsx` | ES/EN mixed | ✅ Built |
| `/kaizen` | `app/kaizen/page.tsx` | ES/EN mixed | ✅ Built |
| `/safepay` | `app/safepay/page.tsx` | ES/EN mixed | ✅ Built |
| `/skillbase` | `app/skillbase/page.tsx` | EN | ✅ Built |
| `/talentpath` | `app/talentpath/page.tsx` | EN | ✅ Built |
| `/talkflow` | `app/talkflow/page.tsx` | EN | ✅ Built |
| `/blog` | `app/blog/page.tsx` | ES | ✅ Built (static posts, no detail pages) |
| `/es/squads/pre-registro` | `app/es/squads/pre-registro/page.tsx` | ES | ✅ Built |
| `/en/squads/pre-registro` | `app/en/squads/pre-registro/page.tsx` | EN | ✅ Built |
| `/pt/squads/pre-registro` | `app/pt/squads/pre-registro/page.tsx` | PT | ✅ Built |

## Routes Linked in Navbar — NOT Built

These are linked from the Navbar or footer but have no `page.tsx`:

| Route | Linked From | Priority |
|-------|-------------|----------|
| `/login` | Navbar CTA | 🔴 High |
| `/get-started` | Navbar CTA, all CTAs site-wide | 🔴 High |
| `/post-project` | (not in nav, referenced in robots.txt disallow) | 🟡 Medium |
| `/analytics` | (referenced in CLAUDE.md) | 🟡 Medium |
| `/case-studies` | (referenced in CLAUDE.md) | 🟡 Medium |
| `/projects` | (referenced in CLAUDE.md) | 🟡 Medium |
| `/earnings` | (referenced in CLAUDE.md) | 🟡 Medium |
| `/handbook` | (referenced in CLAUDE.md) | 🟡 Medium |
| `/faq` | (referenced in CLAUDE.md) | 🟡 Medium |
| `/ai-migration` | `AITeamsSection.tsx` CTA + FinalCTASection | 🔴 High — linked from homepage |
| `/about` | Footer | 🟡 Medium |
| `/careers` | Footer | 🟡 Medium |
| `/contact` | Footer + Pricing Enterprise CTA | 🟡 Medium |
| `/privacy` | Pre-registro form terms | 🟡 Medium |
| `/terms` | Pre-registro form terms | 🟡 Medium |
| `/terminos` | Pre-registro form (es locale) | 🟡 Medium |
| `/privacidad` | Pre-registro form (es locale) | 🟡 Medium |
| `/blog/[slug]` | Blog page links to individual posts | 🟡 Medium |

## Blog Posts (static data, no detail pages)

These slugs are defined in `app/blog/page.tsx` data but no route exists:

- `/blog/por-que-el-matching-automatico-falla`
- `/blog/ssr-vs-sr-cuando-cada-uno`
- `/blog/la-verdad-sobre-equipos-remotos-latam`
- `/blog/safepay-como-construimos-escrow-para-software`
- `/blog/kaizen-caso-real-backend-bancario`
- `/blog/zenitrank-reputacion-objetiva`

## i18n Structure

Only the pre-registro flow has locale variants:
- `/squads/pre-registro` — default (Spanish)
- `/es/squads/pre-registro` — ES explicit
- `/en/squads/pre-registro` — EN
- `/pt/squads/pre-registro` — PT

All other pages are single-language (no `/es/`, `/en/`, `/pt/` variants).

The `LocaleSwitcher` in the Navbar detects `/es/`, `/pt/`, `/en/` prefix and switches accordingly. On all other pages it prepends the locale (e.g., clicking "Español" on `/pricing` navigates to `/es/pricing`, which is a 404).

## Sitemap (app/sitemap.ts)

Includes: `/`, `/kaizen`, `/safepay`, `/companies`, `/squads`, `/how-it-works`, `/pricing`, `/talentpath`, `/talkflow`, `/skillbase`, `/blog`

Does NOT include: `/squads/pre-registro`, locale variants, blog post detail pages.

## Robots (app/robots.ts)

- Allow: `*`
- Disallow: `/api/`, `/login`, `/get-started`, `/post-project`
