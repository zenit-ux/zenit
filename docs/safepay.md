# SafePay — Sistema de pagos con garantía de resultado

## Concepto

SafePay no es simplemente un escrow. Es el mecanismo que convierte a Zenit en la plataforma más confiable para contratar squads tech en LATAM.

**La diferencia fundamental:**
- Escrow tradicional: protege que el dinero se transfiera correctamente
- SafePay: protege que lo entregado cumple los criterios acordados

Los criterios de aceptación se definen ANTES de que empiece el trabajo. Kaizen los valida automáticamente cuando se entrega. No hay "yo creo que cumplí" — hay criterios y evidencia.

---

## Principio central — no salgas de la plataforma

SafePay **solo cubre milestones gestionados dentro de Kaizen**. Si la startup y el squad acuerdan algo por fuera (WhatsApp, email), ese acuerdo no tiene cobertura.

No es una regla — es un incentivo de diseño. El squad y la startup tienen razón propia para quedarse en la plataforma: ahí está su protección.

Toda la comunicación dentro de Kaizen queda registrada automáticamente en el Product Brain. Esos registros son la base para resolver cualquier disputa.

---

## El flujo completo

```
Fase 0 — Definición
Kaizen genera criterios de aceptación objetivos y medibles
desde el brief del discovery. Sin criterios claros, SafePay no se activa.

Fase 1 — Firma
Ambas partes firman digitalmente el contrato de milestone en Kaizen.
Sin firma de ambos, SafePay no se activa.

Fase 2 — Pago en escrow
La empresa deposita el pago del milestone en SafePay.
El squad recibe confirmación de que el pago está reservado.

Fase 3 — Ejecución
El squad construye. Toda comunicación pasa por Kaizen.
Los registros son automáticos.

Fase 4 — Entrega
El squad marca el milestone como entregado.
Adjunta evidencia: links, demos, código, capturas, documentación.

Fase 5 — Validación
Kaizen evalúa la entrega contra los criterios del contrato firmado.
- Criterios objetivos cumplidos → validación positiva automática
- Ambigüedad → Kaizen escala a revisión humana de Zenit

Fase 6 — Liberación
Validación positiva → SafePay libera fondos al squad en 48hs
Conformidad explícita de la empresa → liberación inmediata
Disputa → activar protocolo de 3 niveles
```

---

## Protocolo de disputas — 3 niveles

| Nivel | Qué pasa | Tiempo |
|-------|----------|--------|
| 1 — Negociación directa | La empresa abre disputa en Kaizen. El squad tiene 3 días para responder con evidencia o propuesta. | 3 días |
| 2 — Mediación Zenit | Si no hay acuerdo, Zenit media con acceso a todo el historial de Kaizen. Propone resolución. | 7 días |
| 3 — Decisión final | Si no se acepta la mediación, Zenit decide con evidencia del sistema. Vinculante. | 5 días hábiles |
| Escalado automático | Si el squad no responde en 7 días desde la apertura, Zenit escala automáticamente. | Automático |

**Ventaja sobre Upwork/Fiverr:** Zenit media con TODO el historial de la conversación, el contrato firmado y la evidencia de entrega disponible desde el primer segundo. No empieza desde cero como Alibaba o Upwork.

---

## Qué cubre y qué no cubre

**Cubre:**
- 100% del valor del milestone definido en el contrato firmado
- Milestone no entregado en la fecha pactada
- Entrega que no cumple los criterios de aceptación del contrato
- Squad que deja de responder sin justificación

**No cubre:**
- Acuerdos realizados fuera de la plataforma
- Cambios de scope no documentados en Kaizen
- Reclamos presentados después de 30 días de la entrega validada
- Pagos realizados fuera de SafePay

---

## Comisión y modelo económico

- **7-12%** sobre el valor de cada transacción
- La tasa exacta por tier no está definida aún — se define cuando haya primer cliente real
- El squad nunca negocia términos manualmente — Kaizen auto-estructura los milestones desde el brief

---

## Comparativa con referentes

| Dimensión | Alibaba Trade Assurance | Upwork | Fiverr | SafePay |
|-----------|------------------------|--------|--------|---------|
| Tipo de bien | Productos físicos | Servicios digitales | Servicios digitales | Servicios digitales |
| Validación | Inspector tercero (subjetivo) | El cliente aprueba (subjetivo) | El cliente aprueba (subjetivo) | Kaizen valida criterios objetivos |
| Disputa | Sin contexto previo, 7-15 días | ~2 días, no vinculante | Sin SLA, favorece comprador | Con historial completo, 7 días |
| Comunicación off-platform | Recomiendan no hacerlo | Válida pero pierde protección | Prohibida por TOS | Solo cubre lo gestionado en Kaizen |
| Comisión | 1-2% (proveedor) | 5-20% | 20% fijo | 7-12% |

---

## Marco legal en Argentina

**Figura correcta: PSP (Proveedor de Servicios de Pago)** — no requiere ser banco.

| Paso | Descripción |
|------|-------------|
| 1 — Sociedad | Zenit debe estar constituida como SRL o SA antes de cualquier trámite |
| 2 — Inscripción PSP BCRA | Vía AFIP con clave fiscal. Requiere estatuto, descripción del flujo de pagos, declaración jurada |
| 3 — Régimen informativo | Reporte mensual de operaciones. Informe trimestral de auditor externo |
| 4 — Cumplimiento UIF | Resolución UIF N°200/2024. Implica KYC para empresas y squads |

**Para el MVP:** PSP tercero ya habilitado (Bind, Pomelo, estructura sobre Mercado Pago). Zenit no retiene fondos directamente. Operativo en 2-4 semanas.

**Migrar a PSP propio:** cuando haya 50+ transacciones mensuales consistentes.

**Profesional a contactar:** Marval O'Farrell Mairal o Beccar Varela — antes del primer cliente que use SafePay.

---

## Estado actual del código

### Lo que está construido (UI/marketing)
- `app/safepay/page.tsx` — página completa con tres mockups:
  - EscrowFlowMockup — flujo de 3 pasos con milestones y status badges
  - RiskDetectionMockup — panel de Kaizen monitoreando, alerta de scope creep
  - MultiCurrencyMockup — conversión USD→BRL
- `components/sections/SafePaySection.tsx` — componente de sección (**no está en `app/page.tsx` todavía**)

### [PENDIENTE] Lo que no existe
- Integración de pasarela de pago (Stripe, Mercado Pago)
- API de escrow y sistema de milestones
- Lógica de verificación y liberación de fondos
- Multi-currency real
- Gestión de disputas
- Dashboards de empresa y squad con estado de escrow real
