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

## Copy — English

Route: `/en/squads/pre-registro`
Language: English (via `lib/i18n/preregistro.ts`)

### Hero

- Eyebrow: "For development squads · Early access"
- H1: "Can't find work? / Zenit fixes that."
- Body (3 paragraphs):
  - Problem: "It's not that AI replaced you. Companies over-hired and now can't sustain it. Zenit solves that for everyone."
  - Value: "Companies hire teams per project — no payroll overhead. You earn more per milestone, work with multiple clients in parallel, and SafePay guarantees you get paid what we agreed."
  - Framing: "This isn't freelance. It's your squad as a productive asset."
- CTA 1: "Pre-register my squad"
- CTA 2: "See criteria"
- Trust: "No spam · Only the opening notification"

### Stats Strip

- ZenitRank: "100% objective"
- SafePay: "Per milestone"
- Squads: "All levels"

### How It Works (3 steps)

- H2: "Three steps. No friction."
1. "Kaizen reviews your squad" — "We verify profile, stack, and featured project against objective criteria."
2. "We notify you when we open" — "First registered squads get priority access."
3. "First projects with SafePay" — "Every milestone has criteria defined before starting."

### Who We're Looking For

**✅ Accept:**
1. Teams of 2+ people who have worked together
2. Demonstrable level — Kaizen calibrates average team maturity
3. At least one documented, deliverable project
4. Stack in React/Next.js, Node, Python, or mobile
5. Availability for 4–12 week projects

**❌ Reject:**
1. Solo profiles with no team history
2. Teams with no documented deliverable in production

**TalentPath callout:** "Are you a junior? TalentPath is for you."

### Form Labels

- Squad name: "Squad name"
- Members legend: "Squad members"
- Member name: "Name" / role: "Role" / LinkedIn: "LinkedIn (optional)"
- Add: "+ Add member" / Remove: "Remove"
- Stack legend: "Main stack"
- Project legend: "Featured project"
- Project name: "Project name"
- Description: "Description (280 characters)"
- Project link: "Link (optional)"
- Email: "Contact email"
- Terms: "I accept the [terms and conditions] and [privacy policy]"
- Submit: "Pre-register my squad"
- Loading: "Sending..."
- Success: "Squad registered. / You're on the early access list."

### ZenitRank Badges

- ◆ Validated: "Entry point" — "You start here"
- ★ Reliable
- ✓ Verified
- ★★ Elite

**Blockquote:**
"Squads that join in this phase start with track record from day one. You don't start from zero — you start with an advantage."

---

## Copy — Spanish (Español)

Route: `/squads/pre-registro` + `/es/squads/pre-registro`
Language: Spanish (default + es locale)

### Hero

- Eyebrow: "Para squads de desarrollo · Acceso anticipado"
- H1 line 1: "¿No encontrás trabajo?"
- H1 line 2: "Zenit lo soluciona."
- Body paragraph 1 — Problem: "No es que la IA te reemplazó. Es que las empresas ampliaron demasiado y ahora no pueden sostenerlo. Zenit resuelve eso para todos."
- Body paragraph 2 — Value: "Las empresas contratan equipos por proyecto — sin carga de nómina fija. Vos cobrás más por milestone, trabajás con múltiples clientes en paralelo, y SafePay garantiza que cobrás lo que acordamos."
- Body paragraph 3 — Framing: "No es freelance. Es tu squad como un activo productivo."
- CTA 1: "Pre-registrar mi squad" *(→ `#form`)*
- CTA 2: "Ver criterios" *(→ `#criterios`)*
- Trust: "Sin spam · Solo el aviso de apertura"

### Stats Strip

- ZenitRank: "100% objetivo"
- SafePay: "Por milestone"
- Squads: "Todo nivel"

### Cómo Funciona (3 steps)

- H2: "Tres pasos. Sin fricción."
1. "Kaizen revisa tu squad" — "Verificamos perfil, stack y proyecto destacado contra criterios objetivos."
2. "Te notificamos cuando abramos" — "Los primeros squads registrados tienen prioridad de acceso."
3. "Primeros proyectos con SafePay" — "Cada milestone tiene criterios definidos antes de arrancar."

### A Quién Buscamos (`id="criterios"`)

- H2: "¿A quién buscamos?"

**✅ Criterios de aceptación:**
1. Equipos de 2 o más personas que ya trabajaron juntos
2. Nivel demostrable — Kaizen calibra la madurez promedio del equipo
3. Al menos un proyecto entregado documentable
4. Stack en React/Next.js, Node, Python o mobile
5. Disponibilidad para proyectos de 4 a 12 semanas

**❌ Criterios de rechazo:**
1. Perfiles sueltos sin historial en equipo
2. Equipos sin ningún entregable documentable en producción

**TalentPath callout (gold card):**
"¿Sos junior? TalentPath es para vos."
Link: "Ver TalentPath →"

**Junior FAQ note:** "Aceptamos equipos mixtos (senior + junior) si el líder es senior y el proyecto está documentado."

### ZenitRank Badges

- ◆ Validado (entry point — "Entrás aquí" tag)
- ★ Confiable
- ✓ Verificado
- ★★ Elite

**Blockquote (from Kaizen):**
"Los squads que entran en esta fase arrancan con historial desde el primer proyecto. No empezás de cero — empezás con ventaja."

### Form

- `aria-label` (form): "Formulario de pre-registro de squad"
- Squad name label: "Nombre del squad"
- Squad name placeholder: "ej. Código Sur, Rocket Squad..."
- Members section legend: "Integrantes del squad"
- Member name: "Nombre"
- Member role: "Rol"
- Member LinkedIn: "LinkedIn (opcional)"
- Add member button: "+ Agregar integrante"
- Remove member button: "Eliminar"
- Stack section legend: "Stack principal"
- Project section legend: "Proyecto destacado"
- Project name label: "Nombre del proyecto"
- Project description label: "Descripción (280 caracteres)"
- Project link label: "Link (opcional)"
- Email label: "Email de contacto"
- Email placeholder: "tu@email.com"
- Terms checkbox: "Acepto los [términos y condiciones] y la [política de privacidad]"
- Submit button: "Pre-registrar mi squad"
- Loading state: "Enviando..."
- Success H1: "Squad registrado."
- Success subtitle: "Entrás a la lista de acceso anticipado."

### Conversational Flow (9 steps — modal version)

1. Squad name
2. Member count
3. Member info (name + role + LinkedIn) × n
4. Years experience
5. Tech stack
6. Best project
7. Email
8. Terms acceptance
9. Review + confirm

---

## Copy — Portuguese (Português)

Route: `/pt/squads/pre-registro`
Language: Portuguese (via `lib/i18n/preregistro.ts` — PT locale implemented)

### Hero

- Eyebrow: "Para squads de desenvolvimento · Acesso antecipado"
- H1: "Sem trabalho? / A Zenit resolve isso."
- Body (3 paragraphs):
  - Problem: "Não é a IA que te substituiu. As empresas contrataram demais e agora não conseguem sustentar. A Zenit resolve isso para todos."
  - Value: "Empresas contratam times por projeto — sem folha de pagamento fixa. Você ganha mais por milestone, trabalha com vários clientes em paralelo, e o SafePay garante que você recebe o que combinamos."
  - Framing: "Não é freelance. É seu squad como um ativo produtivo."
- CTA 1: "Pré-registrar meu squad"
- CTA 2: "Ver critérios"
- Trust: "Sem spam · Apenas o aviso de abertura"

### Stats Strip

- ZenitRank: "100% objetivo"
- SafePay: "Por milestone"
- Squads: "Todos os níveis"

### How It Works (3 steps)

- H2: "Três passos. Sem fricção."
1. "Kaizen revisa seu squad" — "Verificamos perfil, stack e projeto em destaque contra critérios objetivos."
2. "Te notificamos quando abrirmos" — "Os primeiros squads registrados têm prioridade de acesso."
3. "Primeiros projetos com SafePay" — "Cada milestone tem critérios definidos antes de começar."

### Criteria

**✅ Aceitos:**
1. Times de 2+ pessoas que já trabalharam juntos
2. Nível demonstrável — Kaizen calibra a maturidade média do time
3. Pelo menos um projeto entregue e documentado
4. Stack em React/Next.js, Node, Python ou mobile
5. Disponibilidade para projetos de 4–12 semanas

**❌ Recusados:**
1. Perfis individuais sem histórico em equipe
2. Times sem nenhuma entrega documentada em produção

### Form Labels (PT)

- Squad name: "Nome do squad"
- Members: "Integrantes do squad"
- Add: "+ Adicionar integrante" / Remove: "Remover"
- Stack: "Stack principal"
- Project: "Projeto em destaque"
- Description: "Descrição (280 caracteres)"
- Email: "E-mail de contato"
- Terms: "Aceito os [termos e condições] e a [política de privacidade]"
- Submit: "Pré-registrar meu squad"
- Loading: "Enviando..."
- Success: "Squad registrado. / Você está na lista de acesso antecipado."

### ZenitRank Badges (PT)

- ◆ Validado: "Você começa aqui"
- ★ Confiável
- ✓ Verificado
- ★★ Elite

**Blockquote:**
"Os squads que entram nessa fase começam com histórico desde o primeiro projeto. Você não começa do zero — começa com vantagem."

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
