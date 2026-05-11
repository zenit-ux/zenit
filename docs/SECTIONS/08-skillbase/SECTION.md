# 08 — SkillBase

**File:** `app/skillbase/page.tsx`
**Route:** `/skillbase`
**Language:** English (primary)
**Status:** ✅ Built (partially audited)
**Layout:** Hero + 5 sections + pricing strip

---

## Current State

Community browse product page. English-primary. Features `CommunityBrowseMockup` with profile cards. Includes a "Seats Model" for companies ($99/seat/mo). Not fully audited in initial SITE-AUDIT — hero and first sections confirmed, deep sections inferred. CTA → `/get-started` (broken).

---

## Sub-sections

### 1 — Hero
- NeuralNoise (color not confirmed, likely teal or cyan)
- Eyebrow: "SkillBase · Free to join"
- H1: "Your squad. / Visible to the world." *(text-shimmer cyan)*
- Body: "SkillBase is the free community where squads and individual devs showcase their work and get found by companies — without competing on price."
- CTA primary: "Create your free profile →" → `/get-started` (BROKEN)
- CTA secondary: "Browse the community"
- Trust: "Free forever for squads and devs. Companies pay for seats."

### 2 — The Community
- Eyebrow: "The Community"
- H3: "Not Upwork. A curated community of real builders."
- Body: "SkillBase is invite-and-vet, not open registration."
- Bullets: 3 (Squads + devs welcome / Free to join / Kaizen uses profiles for AI matching)

### 3 — Your Profile
- Eyebrow: "Your Profile"
- H3: "One link. Your entire track record."
- Bullets: 3 (Real projects/ratings/availability / Individual + squad profiles / Auto-updates as you ship)

### 4 — CommunityBrowseMockup
- Footer: "312 profiles · 89 available now"
- Profiles: React & Node Squad 🇦🇷 $85/h 4.9★ / Ana Costa 🇧🇷 $65/h 4.8★ / DevOps Latam 🇲🇽 $90/h 4.9★ / Carlos Mendez 🇨🇴 $70/h 4.7★
- Filter chips (visible in mockup)

### 5 — Pricing Strip
- Squads & Devs: "Free" — "Create your profile, get discovered, receive project matches. Always free."
- Companies: "From $99/seat/mo" — "Reserve your preferred talent. Cancel anytime."

### 6 — Seats Model (For Companies)
- Eyebrow: "For Companies · Seats Model"
- H3: "The talent you need, always available."
- Body: "Instead of searching every time, companies buy 'seats' — reserved access to specific squads or devs for ongoing projects."
- Bullets: 3

### 7 — AI Callout
- Eyebrow: "SkillBase + Kaizen"
- H2: "Your profile is Kaizen's training data."
- Body: "Every project you ship on Zenit, every rating you earn, every skill you add — Kaizen reads it all."
- Stats: 500+ / Free / 3x

### 8 — Final CTA
- H2: "Join the community. Get found." *(shimmer cyan)*
- Body: "Free for squads and individual devs. Always."
- CTA: "Create your free profile →"

---

## Copy — English

Route: `/skillbase`
Language: English (primary — full page)

### Hero

- Eyebrow: "SkillBase · Free to join"
- H1 line 1: "Your squad."
- H1 line 2: "Visible to the world." *(text-shimmer cyan)*
- Body: "SkillBase is the free community where squads and individual devs showcase their work and get found by companies — without competing on price."
- CTA primary: "Create your free profile →"
- CTA secondary: "Browse the community"
- Trust: "Free forever for squads and devs. Companies pay for seats."

### The Community

- Eyebrow: "The Community"
- H3: "Not Upwork. A curated community of real builders."
- Body: "SkillBase is invite-and-vet, not open registration."
- Bullets:
  - "Squads and individual devs — both welcome"
  - "Free to join, free to be found"
  - "Kaizen uses SkillBase profiles to power AI matching"

### Your Profile

- Eyebrow: "Your Profile"
- H3: "One link. Your entire track record."
- Body: "Real projects, real ratings, real availability — visible to every company on Zenit."
- Bullets:
  - "Showcase completed projects and client ratings"
  - "Individual devs and full squads — same profile system"
  - "Your profile updates automatically as you ship"

### CommunityBrowseMockup

- Footer: "312 profiles · 89 available now"
- Profile 1: "React & Node Squad 🇦🇷 · $85/h · 4.9★"
- Profile 2: "Ana Costa 🇧🇷 · $65/h · 4.8★"
- Profile 3: "DevOps Latam 🇲🇽 · $90/h · 4.9★"
- Profile 4: "Carlos Mendez 🇨🇴 · $70/h · 4.7★"
- Company card in mockup: "$299/mo · 5 seats · Save vs. per-project rates"

### Pricing Strip

- Squads & Devs: **Free** — "Create your profile, get discovered, receive project matches. Always free."
- Companies: **From $99/seat/mo** — "Reserve your preferred talent. Cancel anytime."

### Seats Model (For Companies)

- Eyebrow: "For Companies · Seats Model"
- H3: "The talent you need, always available."
- Body: "Instead of searching every time, companies buy 'seats' — reserved access to specific squads or devs for ongoing projects."
- Bullets:
  - "Lock in your preferred talent before they're taken"
  - "Pay monthly, not per-project"
  - "Mix squads and individual devs in your seat plan"

### AI Callout

- Eyebrow: "SkillBase + Kaizen"
- H2: "Your profile is Kaizen's training data."
- Body: "Every project you ship on Zenit, every rating you earn, every skill you add — Kaizen reads it all. Better profile → better matches → better clients."
- Stats: 500+ profiles / Free to join / 3× more hires vs. job boards

### Final CTA

- H2: "Join the community. Get found." *(shimmer cyan)*
- Body: "Free for squads and individual devs. Always."
- CTA: "Create your free profile →"

---

## Copy — Spanish (Español)

Route: `/skillbase`
Status: ⚠️ Pending — Page is EN. ES translation TBD for i18n.

### Key strings (ES translation)

- H1: "Tu squad. / Visible para el mundo."
- Body: "SkillBase es la comunidad gratuita donde squads y devs muestran su trabajo y son encontrados por empresas — sin competir por precio."
- CTA: "Crear mi perfil gratis →"
- Trust: "Gratis para siempre para squads y devs. Las empresas pagan por seats."
- "The Community" H3: "No es Upwork. Una comunidad curada de builders reales."
- Pricing: "Gratis" para squads / "Desde $99/seat/mes" para empresas
- Final CTA: "Unite a la comunidad. Que te encuentren."

Full translation from English copy above pending.

---

## Copy — Portuguese (Português)

Route: `/skillbase`
Status: ❌ Missing — All strings TBD (PT-BR).

Translate from English copy above. Keep "SkillBase", "Kaizen", "squad", "ZenitRank" as-is.

---

## Components Used

| Component | Notes |
|-----------|-------|
| `NeuralNoise` | Color not confirmed |
| `CommunityBrowseMockup` | Inline — profile cards with filter chips |

See `components-used.md`.

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | CTA → `/get-started` BROKEN |
| P1 | No OG image at `/og-skillbase.png` |
| P2 | Page not fully audited |

---

## Next Steps

- [ ] Fix broken CTAs
- [ ] Complete full accessibility audit
- [ ] Generate OG image
- [ ] Migrate to i18n if needed
