# 12 — Squad Pre-Registration

**File:** `app/squads/pre-registro/page.tsx` (standalone ES)
**Localized:** `app/es/squads/pre-registro/`, `app/en/squads/pre-registro/`, `app/pt/squads/pre-registro/`
**Route:** `/squads/pre-registro` (default ES) | `/es/squads/pre-registro` | `/en/squads/pre-registro` | `/pt/squads/pre-registro`
**Language:** Spanish (default/standalone) | Trilingual (ES/EN/PT via i18n)
**Status:** ✅ Built — most complete i18n implementation in the site
**Layout:** Hero + Stats + Steps + Criteria + ZenitRank + Form

---

## Current State

The most complete page in the codebase. Two versions:
1. **Standalone** (`/squads/pre-registro`) — fully in Spanish, no modal
2. **Localized** (`/es/`, `/en/`, `/pt/`) — uses `PreRegistroPage` component with `t(locale)` from `lib/i18n/preregistro.ts`, opens `RegistroModal` on CTA click

The form has the best accessibility implementation in the entire codebase.

---

## Sub-sections

### 1 — Hero (2-col on desktop)
- Eyebrow: "Para squads de desarrollo · Acceso anticipado"
- H1: "¿No encontrás trabajo? / Zenit lo soluciona."
- 3-paragraph body: problem framing → value prop → "No es freelance. Es tu squad como un activo productivo."
- CTAs: "Pre-registrar mi squad" → `#form` + "Ver criterios" → `#criterios`
- Trust: "Sin spam · Solo el aviso de apertura"
- Right: `SquadProfileMockup` — "Código Sur" card with stack, ZenitRank, SafePay status, floating milestone card *(hidden on mobile)*

### 2 — Stats Strip (3 columns)
- ZenitRank: "100% objetivo"
- SafePay: "Por milestone"
- Squads: "Todo nivel"

### 3 — Cómo Funciona (3-col grid)
- H2: "Tres pasos. Sin fricción."
- 01 Kaizen revisa tu squad
- 02 Te notificamos cuando abramos
- 03 Primeros proyectos con SafePay

### 4 — A Quién Buscamos (2-col, `id="criterios"`)
Left: checklist (5 ✅ green, 2 ✕ red strikethrough)
Right: TalentPath callout (gold card) + junior FAQ note

**✅ Accept:**
- Equipos de 2 o más personas que ya trabajaron juntos
- Nivel demostrable — Kaizen calibra la madurez
- Al menos un proyecto entregado documentable
- Stack en React/Next.js, Node, Python o mobile
- Disponibilidad para proyectos de 4 a 12 semanas

**❌ Reject:**
- Perfiles sueltos sin historial en equipo
- Equipos sin ningún entregable documentable en producción

### 5 — ZenitRank Section (4 badges)
Badges with "Entrás aquí" tag on ◆ Validado.
Blockquote from "Kaizen, agente de producto de Zenit"

### 6 — Form (`id="form"`, `max-w-2xl`)
Fields:
- Squad name
- Members (2–4, dynamic add/remove with AnimatePresence)
- Stack selector (pills)
- Featured project (name + description 280ch counter + optional link)
- Email
- Terms checkbox

Accessibility (best in site):
- `aria-label="Formulario de pre-registro de squad"` on `<form>` ✅
- `<label htmlFor="id">` for every input ✅
- `aria-required="true"` ✅
- `aria-invalid={!!error}` ✅
- `aria-describedby` → error message IDs ✅
- Error messages: `role="alert"` ✅
- Character counter: `aria-live="polite" aria-atomic="true"` ✅
- Stack buttons: `aria-pressed={selected}` ✅
- `<fieldset>` + `<legend>` for member group + project group ✅
- Decorative glows: `aria-hidden` ✅

Submit → loading state → `SuccessView` (checkmark + confirmation)

---

## Copy

See `copy-es.md` / `copy-en.md` / `copy-pt.md`.
Full trilingual copy from `lib/i18n/preregistro.ts`.

---

## Components Used

| Component | File | Notes |
|-----------|------|-------|
| `PreRegistroPage` | `components/squads/PreRegistroPage.tsx` | Used by `/es/`, `/en/`, `/pt/` variants — not standalone |
| `RegistroModal` | `components/squads/RegistroModal.tsx` | Modal flow — used by localized version only |
| `SquadProfileMockup` | Inline or component | Has `role="img"` + `aria-label` ✅ |
| `SuccessView` | Inline or component | Post-submit state |
| AnimatePresence | `framer-motion` | Dynamic member add/remove |

See `components-used.md` for full details.

---

## Design Tokens

- H1: clamp(28px, 3.8vw, 54px), shimmer cyan
- Form: `max-w-2xl`, centered
- Member rows: AnimatePresence height animation
- Error states: red/destructive border on inputs
- Stack pills: `aria-pressed` toggle, teal when selected

---

## Accessibility

| Check | Status |
|-------|--------|
| Form `<label>` for every input | ✅ |
| `aria-required` | ✅ |
| `aria-invalid` + `aria-describedby` | ✅ |
| Error `role="alert"` | ✅ |
| Character counter `aria-live` | ✅ |
| Stack pills `aria-pressed` | ✅ |
| `<fieldset>` + `<legend>` | ✅ |
| Decorative `aria-hidden` | ✅ |
| `SquadProfileMockup` `role="img"` | ✅ |
| Checkbox visible focus | ⚠️ Custom checkbox has no visual indicator beyond global outline |
| `<html lang>` | ⚠️ Root `lang="en"` not updated per-locale |

---

## Responsive

| Breakpoint | Behavior |
|-----------|----------|
| Mobile | Hero single-col (SquadProfileMockup hidden). Form full-width. |
| Desktop | Hero 2-col. Form `max-w-2xl` centered. |

---

## Known Issues

| Priority | Issue |
|----------|-------|
| P1 | `<html lang>` stays "en" even on `/es/` and `/pt/` locale routes |
| P1 | No OG image at `/og-pre-registro.png` |
| P2 | Custom checkbox has no specific visible focus indicator |
| P2 | `/squads/pre-registro` not in sitemap |
| P2 | Locale variants not in sitemap |

---

## Next Steps

- [ ] Fix `lang` attribute per-locale route (es → lang="es", pt → lang="pt")
- [ ] Add `/squads/pre-registro` + locale variants to sitemap
- [ ] Generate OG image
- [ ] Add visible focus indicator to custom checkbox
