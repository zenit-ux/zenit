# Pre-registro — Components Used

Routes: `/squads/pre-registro`, `/es/squads/pre-registro`, `/en/squads/pre-registro`, `/pt/squads/pre-registro`

---

## Standalone version (`/squads/pre-registro`)
File: `app/squads/pre-registro/page.tsx`

| Component | Notes |
|-----------|-------|
| `SquadProfileMockup` | Inline — "Código Sur" card, hidden mobile; `role="img"` + `aria-label` ✅ |
| `SuccessView` | Inline — post-submit checkmark + confirmation |
| AnimatePresence | `framer-motion` — member add/remove + success state |

## Localized versions (`/es/`, `/en/`, `/pt/`)
File: `components/squads/PreRegistroPage.tsx`

| Component | File | Notes |
|-----------|------|-------|
| `PreRegistroPage` | `components/squads/PreRegistroPage.tsx` | `{ locale: Locale }` prop |
| `RegistroModal` | `components/squads/RegistroModal.tsx` | 9-step conversational flow |
| `lib/i18n/preregistro.ts` | `lib/i18n/preregistro.ts` | `t(locale)` — all strings in ES/EN/PT |

## Accessibility implementation (best in site)

All form inputs use:
- `<label htmlFor="id">` ✅
- `aria-required="true"` ✅
- `aria-invalid={!!error}` ✅
- `aria-describedby` → error IDs ✅
- Error: `role="alert"` ✅
- Counter: `aria-live="polite" aria-atomic="true"` ✅
- Stack pills: `aria-pressed={selected}` ✅
- Groups: `<fieldset>` + `<legend>` ✅
- Glows: `aria-hidden` ✅
