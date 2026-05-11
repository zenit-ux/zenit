# i18n Dictionaries

Format and structure for i18n dictionary files.
Source: Derived from existing pattern in `lib/i18n/preregistro.ts`

---

## Current Implementation

**Only one dictionary exists:** `lib/i18n/preregistro.ts`

```ts
type Locale = 'es' | 'en' | 'pt'

export function t(locale: Locale) {
  return {
    // string key: value for each locale
    hero_eyebrow: {
      es: "Para squads de desarrollo · Acceso anticipado",
      en: "For development squads · Early access",
      pt: "Para squads de desenvolvimento · Acesso antecipado"
    }[locale],
    // ...
  }
}
```

This function is called in `PreRegistroPage.tsx` as `const strings = t(locale)`.

---

## Recommended File Structure (for expansion)

```
lib/i18n/
├── preregistro.ts     ← exists
├── homepage.ts        ← create when localizing /
├── companies.ts       ← create when localizing /companies
├── squads.ts          ← create when localizing /squads
├── pricing.ts         ← create when localizing /pricing
├── how-it-works.ts    ← create when localizing /how-it-works
├── kaizen.ts          ← create when localizing /kaizen
├── safepay.ts         ← create when localizing /safepay
├── skillbase.ts       ← create when localizing /skillbase
├── talentpath.ts      ← create when localizing /talentpath
├── talkflow.ts        ← create when localizing /talkflow
├── blog.ts            ← create when localizing /blog
└── global.ts          ← Navbar + Footer + shared strings
```

---

## Dictionary File Template

```ts
// lib/i18n/[page].ts

export type Locale = 'es' | 'en' | 'pt'

export function t(locale: Locale) {
  const strings = {
    // HERO
    hero_eyebrow: {
      es: "",
      en: "",
      pt: ""
    },
    hero_h1_line1: {
      es: "",
      en: "",
      pt: ""
    },
    hero_h1_line2: {
      es: "",
      en: "",
      pt: ""
    },
    hero_body: {
      es: "",
      en: "",
      pt: ""
    },
    hero_cta_primary: {
      es: "",
      en: "",
      pt: ""
    },
    hero_cta_secondary: {
      es: "",
      en: "",
      pt: ""
    },
    // ... other sections
  }

  return Object.fromEntries(
    Object.entries(strings).map(([key, val]) => [key, val[locale]])
  ) as Record<keyof typeof strings, string>
}
```

---

## Global Strings Dictionary

Strings used across all pages (Navbar, Footer):

```ts
// lib/i18n/global.ts

export const globalStrings = {
  nav_companies: { es: "Para Empresas", en: "For Companies", pt: "Para Empresas" },
  nav_squads:    { es: "Para Squads",   en: "For Squads",   pt: "Para Squads" },
  nav_how:       { es: "Cómo Funciona", en: "How It Works", pt: "Como Funciona" },
  nav_pricing:   { es: "Precios",       en: "Pricing",      pt: "Preços" },
  nav_blog:      { es: "Blog",          en: "Blog",         pt: "Blog" },
  nav_login:     { es: "Iniciar sesión",en: "Log in",       pt: "Entrar" },
  nav_cta:       { es: "Empezar",       en: "Get started",  pt: "Começar" },

  footer_tagline: {
    es: "El marketplace para equipos tech de élite.",
    en: "The marketplace for elite tech squads.",
    pt: "O marketplace para times tech de elite."
  },
  footer_copyright: {
    es: "© 2026 Zenit Technologies, Inc. Todos los derechos reservados.",
    en: "© 2026 Zenit Technologies, Inc. All rights reserved.",
    pt: "© 2026 Zenit Technologies, Inc. Todos os direitos reservados."
  }
}
```

---

## Naming Conventions

```
{section}_{element}_{variant}

Examples:
  hero_h1_line1
  hero_cta_primary
  stats_squads_label
  benefits_card1_title
  benefits_card1_body
  cta_button
  form_label_email
  form_error_required
```

---

## Content Sources per Section

When creating dictionaries, use these files as the copy source:

| Page | Copy source |
|------|-------------|
| `/` | `docs/SECTIONS/01-homepage/copy-{locale}.md` |
| `/companies` | `docs/SECTIONS/02-companies/copy-{locale}.md` |
| `/squads` | `docs/SECTIONS/03-squads/copy-{locale}.md` |
| `/pricing` | `docs/SECTIONS/04-pricing/copy-{locale}.md` |
| `/how-it-works` | `docs/SECTIONS/05-how-it-works/copy-{locale}.md` |
| `/kaizen` | `docs/SECTIONS/06-kaizen/copy-{locale}.md` |
| `/safepay` | `docs/SECTIONS/07-safepay/copy-{locale}.md` |
| `/skillbase` | `docs/SECTIONS/08-skillbase/copy-{locale}.md` |
| `/talentpath` | `docs/SECTIONS/09-talentpath/copy-{locale}.md` |
| `/talkflow` | `docs/SECTIONS/10-talkflow/copy-{locale}.md` |
| `/blog` | `docs/SECTIONS/11-blog/copy-{locale}.md` |
| `/squads/pre-registro` | `docs/SECTIONS/12-pre-registro/copy-{locale}.md` |
