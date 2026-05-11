# 03 — For Squads

**File:** `app/squads/page.tsx`
**Route:** `/squads`
**Language:** Spanish (primary)
**Status:** ✅ Built
**Layout:** `<main>` + 7 sections

---

## Current State

Fully built Spanish-language page targeting tech squads. Includes `SquadDashboardMockup` on the hero (hidden mobile). ZenitRank 4-badge system explained in detail. Primary CTAs link to `/get-started` (broken).

---

## Visual Structure

Full-width, dark-only. Hero is 2-column (text + mockup) on desktop. Remaining sections use centered or 2-col layouts. `max-w-7xl` standard container.

---

## Sub-sections

### 1 — Hero (2-col on desktop)
**Background:** NeuralNoise teal `[15, 118, 110]`, opacity 0.40
- Eyebrow: "Para Squads" (teal pill)
- H1: 2 lines (shimmer cyan)
- Body: 1 sentence
- CTA primary → `/get-started` **(BROKEN)**
- CTA secondary → `/how-it-works`
- Right: `SquadDashboardMockup` — shows 3 squads with ZenitRank % (hidden on mobile)

### 2 — Stats Strip (4 stats)
- `50+` Squads pre-registrados
- `48h` De aplicación a primer match
- `100%` Equipos calibrados por Kaizen
- `$0` Costo de entrada

### 3 — Benefits (6 cards, 3-col grid)
Eyebrow: "Por qué Zenit" / H2 (shimmer cyan) + 6 feature cards:
1. ZenitRank: reputación que se acumula (cyan, TrendingUp)
2. SafePay: el pago está antes de que escribas una línea (teal, Shield)
3. Kaizen trae el cliente correcto (gold, BrainCircuit)
4. Acceso a proyectos globales sin salir de LATAM (cyan, Globe)
5. Sin ops, sin chasing, sin invoicing (teal, Zap)
6. TalentPath: tu pipeline de talento propio (gold, GraduationCap)

### 4 — ZenitRank (4 badges, 4-col grid)
Eyebrow: "ZenitRank" / H2 (shimmer cyan)
4 badges (criteria per badge):
- ◆ Squad Validado (cyan)
- ★ Squad Confiable (teal)
- ✓ Squad Verificado (gold)
- ★★ Squad Elite (cyan)
Footer note about badge priority in Kaizen matching.

### 5 — Process (4 steps, vertical list)
Eyebrow: "El proceso" / H2
4 numbered steps alternating cyan/teal:
1. Aplicá y pasá el review técnico
2. Obtenés tu badge inicial (◆ Squad Validado)
3. Kaizen te matchea con el proyecto correcto
4. Entregás, Kaizen valida, cobrás

### 6 — Criteria (2-col: text left, checklist right)
H2 (shimmer cyan) + 6 criteria with CheckCircle2:
- 3+ engineers con skills complementarios
- Portfolio público o GitHub con productos entregados
- Comunicación en inglés (B2+ o superior)
- Track record de entregas en fecha
- Async-ready y remote-native
- Mínimo una especialidad full-stack o vertical

### 7 — CTA
H2 (shimmer cyan) + body + CTA → `/get-started` **(BROKEN)**

---

## Copy — English

Route: `/squads`
Status: ⚠️ Pending — Page is in Spanish. EN copy is a translation.

### Hero
- H1: "Your squad. / Your price."
- Body: "Verified clients. SafePay projects. ZenitRank that grows with every delivery."
- CTA primary: "Pre-register my squad →"
- CTA secondary: "See criteria"
- Trust: "No spam · Only the opening notification"

### Stats Strip
- `50+` Pre-registered squads / `48h` Application to first match / `100%` Teams calibrated by Kaizen / `$0` Entry cost

### Section 1
- H2: "You set the price. We guarantee it."
- Col 1: "No race to the bottom" / Col 2: "SafePay guarantees your payment" / Col 3: "ZenitRank positions you"

### Section 2 — How It Works
1. Pre-registration: "Kaizen reviews your squad — profile, stack, featured project."
2. Matching: "When we open, Kaizen proposes projects that fit you."
3. Project with SafePay: "Funds in escrow before starting. You get paid per milestone."

### ZenitRank Badges
- ◆ Validated: "Complete profile · Verified LinkedIn"
- ★ Reliable: "1+ milestone · >80% on-time · Score >7"
- ✓ Verified: "5+ milestones · >90% on-time · 2+ clients"
- ★★ Elite: "15+ milestones · >95% on-time · 5+ clients"

### Final CTA
- H2: "Pre-register your squad."
- Body: "First registered squads get priority access when we open the marketplace."
- CTA: "Pre-register →"

---

## Copy — Spanish (Español)

Route: `/squads`
Language: Spanish (primary)

### Hero

- Eyebrow: "Para squads · Acceso anticipado"
- H1 line 1: "Tu squad."
- H1 line 2: "Tu precio." *(shimmer-gold)*
- Body: "Clientes verificados. Proyectos con SafePay. ZenitRank que crece con cada entrega."
- CTA primary: "Pre-registrar mi squad →" *(→ `/squads/pre-registro`)*
- CTA secondary: "Ver criterios"
- Trust: "Sin spam · Solo el aviso de apertura"

### Stats Strip

- `50+` — Squads pre-registrados
- `48h` — De aplicación a primer match
- `100%` — Equipos calibrados por Kaizen
- `$0` — Costo de entrada

### Section 1 — Why Zenit for Squads

- H2: "Vos ponés el precio. Nosotros lo garantizamos."
- Column 1: "Sin race to the bottom"
- Column 2: "SafePay garantiza tu pago"
- Column 3: "ZenitRank te posiciona"

### Section 2 — How It Works (Squad perspective)

1. **Pre-registro:** "Kaizen revisa tu squad — perfil, stack, proyecto destacado."
2. **Matching:** "Cuando abramos, Kaizen te propone proyectos que encajan con vos."
3. **Proyecto con SafePay:** "Fondos en escrow antes de arrancar. Cobrás por milestone."

### Section 3 — ZenitRank System

- Eyebrow: "Sistema de reputación"
- H2: "ZenitRank — tu reputación empieza hoy."
- Badge 1 — ◆ Validado: "Perfil completo · LinkedIn verificado"
- Badge 2 — ★ Confiable: "1+ milestone · >80% on-time · Score >7"
- Badge 3 — ✓ Verificado: "5+ milestones · >90% on-time · 2+ clientes"
- Badge 4 — ★★ Elite: "15+ milestones · >95% on-time · 5+ clientes"

### Section 4 — SafePay for Squads

- Eyebrow: "SafePay"
- H2: "Cobrás lo que acordamos. Siempre."
- Guarantee 1: "Escrow pre-trabajo"
- Guarantee 2: "GitHub proof"
- Guarantee 3: "Squad B si falla la empresa"

### Section 5 — Squad Profile Mockup

- Profile: "React & Node Squad 🇦🇷" · "4.9 ★"
- Stats: "48 proyectos · $280k entregado"
- Badges: ★★ Elite / Disponible / ZenitRank 97/100
- Rate: "$95/h · Disponible esta semana"
- Stats row: 98% on-time / $280k delivered / 4 clientes activos

### Section 6 — Final CTA

- H2: "Pre-registrá tu squad."
- Body: "Los primeros squads registrados tienen prioridad de acceso cuando abramos el marketplace."
- CTA: "Pre-registrar →" *(→ `/squads/pre-registro`)*

---

## Copy — Portuguese (Português)

Route: `/squads`
Status: ❌ Missing — All strings TBD (PT-BR).

- H1: TBD — "Seu squad. / Seu preço."
- Body: TBD
- ZenitRank badges: TBD
- CTAs: TBD — "Pré-registrar meu squad →"

Translate from English or Spanish copy above. Keep brand names as-is.

---

## Components Used

| Component | File | Notes |
|-----------|------|-------|
| `NeuralNoise` | `components/ui/neural-noise.tsx` | Teal `[15,118,110]`, opacity 0.40 |
| `SquadDashboardMockup` | Inline in page or dedicated component | 3 squad cards with ZenitRank %, hidden mobile |
| Lucide icons | `lucide-react` | TrendingUp, Shield, BrainCircuit, Globe, Zap, GraduationCap, CheckCircle2 |

See `components-used.md` for full details.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--secondary` (cyan) | `#00b4d8` | H1 shimmer, benefit cards #1/#4, ZenitRank ◆/★★ |
| `--primary` (teal) | `#0d9488` | NeuralNoise, benefit cards #2/#5, ZenitRank ★ |
| `--accent` (gold) | `#f59e0b` | Benefit cards #3/#6, ZenitRank ✓ |
| H1 | `clamp(28px, 3.8vw, 54px)` | shimmer cyan |
| `.text-shimmer` | CSS animation | H1, H2s throughout |

---

## Accessibility

| Check | Status |
|-------|--------|
| Single `<h1>` | ✅ |
| `<main>` | ✅ |
| `<html lang>` | ⚠️ Spanish page but `lang="en"` globally |
| `SquadDashboardMockup` | ⚠️ Needs `role="img"` + `aria-label` |
| Reduced motion | ✅ |

---

## Responsive

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (375px) | Hero single-col (mockup hidden). All sections 1-col. ZenitRank badges stack 2×2 or 1-col. |
| Tablet (768px) | Benefits 2-col. ZenitRank 2×2. |
| Desktop (1440px) | Hero 2-col (mockup visible). Benefits 3-col. ZenitRank 4-col. Criteria 2-col. |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P0 | CTA "Registrar mi squad" → `/get-started` — BROKEN |
| P0 | Secondary CTA "Registrar mi squad" in Section 7 → `/get-started` — BROKEN |
| P1 | `<html lang="en">` for Spanish page |
| P1 | No OG image at `/og-squads.png` |
| P2 | Stats: "50+ squads pre-registrados" — should reconcile with "500+" elsewhere |

---

## Next Steps

- [ ] Fix CTA routes
- [ ] Add `role="img"` + `aria-label` to SquadDashboardMockup
- [ ] Migrate copy to i18n dictionaries
- [ ] Generate `/og-squads.png`
- [ ] Reconcile "50+" vs "500+" squad count
