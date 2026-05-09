# Roadmap — Próximos pasos

Derivado del estado actual del código. Todo lo marcado como [PENDIENTE] no existe en ningún archivo del repositorio.

---

## Estado general

El sitio es hoy un **marketing site estático** completo. Todas las páginas de producto tienen copy, secciones y mockups visuales. No hay backend, no hay autenticación, no hay datos reales.

El siguiente paso natural es construir la plataforma real encima de esta base de UI.

---

## Nivel 1 — Infraestructura mínima

Nada funciona sin esto.

### [PENDIENTE] Autenticación
- Rutas del navbar: `/login`, `/get-started` — no existen como páginas
- Decidir: NextAuth.js / Clerk / Auth.js / custom JWT
- Dos tipos de usuario: empresa y squad/dev

### [PENDIENTE] Base de datos
- No hay ORM ni esquema definido
- El stack visual sugiere: perfiles de squads, proyectos, milestones, pagos
- Opciones compatibles con el stack: Prisma + PostgreSQL, Drizzle, Supabase

### [PENDIENTE] Variables de entorno
- No hay `.env.example` ni referencias a env vars en el código
- Se necesitarán para: DB, auth provider, pasarela de pago, API de IA

---

## Nivel 2 — Rutas rotas en navegación

Estas rutas están linkeadas desde el Navbar pero no tienen `page.tsx`. Generan 404:

| Ruta | Contexto en el nav |
|---|---|
| `/post-project` | Companies → Platform |
| `/analytics` | Companies → Platform |
| `/case-studies` | Companies → Resources |
| `/projects` | Squads → Platform |
| `/earnings` | Squads → Resources |
| `/handbook` | Squads → Resources |
| `/faq` | Squads → Resources (standalone, distinto del FAQSection) |
| `/login` | Desktop CTAs |
| `/get-started` | Desktop CTAs |

Prioridad inmediata: `/login` y `/get-started` porque están en la barra principal.

---

## Nivel 3 — Homepage

### [PENDIENTE] SafePaySection en homepage
`components/sections/SafePaySection.tsx` existe pero no está incluida en `app/page.tsx`. Decidir si va entre `AgenticPipelineSection` y `PlatformFeatures` o se elimina el archivo.

### [PENDIENTE] Secciones huérfanas — revisar y decidir
Estos componentes existen en `/components/sections/` pero no se usan en ninguna página:
- `BenefitsSection.tsx`
- `DualAudienceSection.tsx`
- `FeaturedSquadsSection.tsx`
- `HeroCanvas.tsx`
- `HowItWorksSection.tsx`
- `PlatformShowcase.tsx`
- `PlatformWireframes.tsx`
- `PreRegCTA.tsx`
- `StatsSection.tsx`
- `TheSolutionSection.tsx`
- `WhyZenitSection.tsx`

Opciones: incorporar en la homepage o páginas secundarias, o eliminar.

---

## Nivel 4 — Kaizen (producto core)

Todo el flujo de Kaizen es mockup. Para que exista como producto:

### [PENDIENTE] Backend de conversación
- Integración con un LLM (Anthropic API / OpenAI)
- Almacenamiento de sesiones de discovery
- Lógica de extracción de entidades: stack, timeline, budget, team size

### [PENDIENTE] Motor de evaluación de madurez
- Los 5 estadios están definidos en el código (`AIMaturitySection.tsx`) como copy
- Se necesita la lógica de clasificación basada en respuestas de la conversación

### [PENDIENTE] Generación real del brief
- El brief en `GenUISection.tsx` es estático (datos hardcodeados del logistics SaaS)
- Generar el brief real desde el output del LLM + reglas de negocio

### [PENDIENTE] Algoritmo de matching de squads
- Los scores de match (97%, 91%) en `KaizenSection.tsx` son mockup
- Se necesita: índice de squads con skills, sistema de scoring, ranking

### [PENDIENTE] Monitoreo agentic de entrega
- El terminal trace en `AgenticPipelineSection.tsx` es animación estática
- Para funcionar: webhooks de actualizaciones, análisis de scope, alertas

---

## Nivel 5 — SafePay (pagos)

### [PENDIENTE] Integración de pasarela de pago
- Decidir proveedor: Stripe (multi-currency), Mercado Pago (LATAM), o ambos
- El modelo de comisión (7–12%) necesita implementarse en la lógica de splits

### [PENDIENTE] Sistema de escrow
- No hay ningún backend de escrow
- Los milestones están hardcodeados en los mockups
- Se necesita: creación de escrow, retención de fondos, liberación por aprobación

### [PENDIENTE] Dashboard de empresa y squad
- Para ver estado de escrow, aprobar milestones, ver historial de pagos
- Los mockups visuales existen en `/app/safepay/page.tsx` como referencia de diseño

---

## Nivel 6 — SkillBase

### [PENDIENTE] Perfiles reales
- Los perfiles en `skillbase/page.tsx` son ficticios (Ana Costa, etc.)
- Se necesita: formulario de registro, perfil editable, foto de perfil

### [PENDIENTE] Sistema de asientos para empresas
- El mockup muestra "5-seat plan" pero no hay billing ni gestión de asientos

### [PENDIENTE] Directorio navegable
- El browse actual es un mockup de 4 cards estáticas

---

## Nivel 7 — TalentPath

### [PENDIENTE] Plataforma de challenges
- El mockup muestra una interfaz de código con timer — no hay editor real
- Se necesita: challenges con tests automáticos, evaluación de código

### [PENDIENTE] Billing $49/mes
- No hay integración de subscription

### [PENDIENTE] Sistema de mentorship
- El dashboard del squad mentor es visual solamente

---

## Nivel 8 — TalkFlow

### [PENDIENTE] Traducción de voz en tiempo real
- El mockup muestra latencia de 0.4s y stream de traducción
- Requiere: integración con Whisper (STT), LLM de traducción, TTS, WebSockets
- La grilla de idiomas tiene pares "COMING SOON" — ES↔EN y PT↔EN marcados como LIVE

### [PENDIENTE] Billing add-on +$29/mes
- No hay subscription ni add-on billing

---

## Deuda técnica existente

| Ítem | Descripción |
|---|---|
| GSAP instalado, sin uso activo | `useCountUp.ts` existe pero no se usa en ninguna página actual. Si no hay planes de usarlo, considerar desinstalar |
| AOS instalado, sin uso activo | `AOSProvider.tsx` existe pero Framer Motion cubre todas las animaciones actuales |
| `next-themes` instalado | El diseño es dark-only. Si no se va a implementar un light mode, se puede desinstalar |
| `shadcn-ui` y `@base-ui/react` ambos instalados | Posible duplicación — solo se usa `cn()` de shadcn, no components |
