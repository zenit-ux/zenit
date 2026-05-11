# Casos de Uso — Zenit

> Flujos de usuario documentados. Separados de producto.md para mantener el foco del MVP.
> Última actualización: 29 de abril de 2026

---

## Qué está activo y qué no

| Caso | Estado | Descripción |
|------|--------|-------------|
| **Caso 1** | **MVP — activo** | Empresa busca squad → Kaizen matchea → SafePay |
| Caso 2 | Roadmap futuro | Squad trae cliente propio |
| Caso 3 | Roadmap futuro | Empresa elige squad del catálogo directamente |
| Caso 4 | Roadmap futuro | Squad migra contratos desde Upwork/Toptal |

Los Casos 2-4 no se construyen hasta que el Caso 1 esté validado con clientes reales. Agregarlo antes distrae y fragmenta el producto.

---

## CASO 1 — Core (MVP)

**Empresa busca squad. Kaizen matchea. SafePay formaliza.**

Este es el único flujo activo. Todo el esfuerzo de producto, engineering y go-to-market se concentra acá.

**Iniciador:** Empresa
**Discovery:** Kaizen completo (30-45 min)
**Matching:** Automático
**SafePay:** Estándar (comisión 7-12%)

```
Empresa
  → Pre-registro
  → Discovery Kaizen (30-45 min)
    → Brief técnico generado
    → Matching automático (top 5 squads)
    → Empresa elige squad
  → SafePay setup
    → Criterios de aceptación firmados
    → Escrow activado
  → Inicio del proyecto
  → Kaizen monitorea milestones
  → SafePay libera pago cuando Kaizen valida
```

**Por qué funciona:**
- La empresa no sabe qué squad necesita → Kaizen hace el trabajo de discovery
- El pago no se libera hasta que hay resultado → SafePay elimina riesgo del lado del cliente
- El squad cobra garantizado si cumple criterios → SafePay elimina riesgo del lado del squad

**Flujo de ingresos:**
- Comisión sobre el valor del proyecto vía SafePay escrow

---

## CASOS 2-4 — Roadmap futuro

> Estos casos **no se construyen en MVP**. Se documentan acá para no perder el razonamiento, pero no condicionan ninguna decisión de producto actual.
>
> **Condición de activación:** Caso 1 validado con al menos 3 clientes reales que completaron un proyecto con Kaizen + SafePay.

---

### Caso 2 — Squad tiene cliente listo

Squad ya tiene cliente propio (referral, conocido, proyecto anterior). No necesita matching — necesita formalización opcional.

**Iniciador:** Squad
**Discovery:** Kaizen rápido (10-15 min)
**Matching:** No corresponde
**SafePay:** Opcional — decisión del squad

```
Squad pre-registro
  → "Tengo cliente: Juan de TechCorp"
  → Kaizen: discovery del squad + análisis del proyecto
  → Squad decide:
    ├── Usa SafePay → comisión reducida (10% vs 15% del matching estándar)
    │   Squad + TechCorp firman contrato con escrow
    │   SafePay valida milestones, libera pagos
    │   ZenitRank sube con proyecto completado
    └── No usa SafePay → sigue freelance, Zenit no cobra nada
```

**Punto clave:** SafePay es OPCIONAL acá. Si el squad ya ganó el cliente por su cuenta, Zenit no tiene derecho a la misma comisión que cuando hizo el matching. La propuesta de valor es formalización + garantías, no el cliente en sí.

**Para el squad:** si usa SafePay, gana protección de cobro, Product Brain que documenta el proyecto, ZenitRank que sube con trabajo real.

**Para el cliente (TechCorp):** no buscó squad pero igual tiene SafePay que lo protege si el resultado no cumple, y SLAs automáticos sin negociación manual.

---

### Caso 3 — Empresa quiere squad específico

Empresa ve un squad en el catálogo (portfolio, ZenitRank, skills) y quiere contratarlo directamente sin pasar por matching automático.

**Iniciador:** Empresa
**Discovery:** Kaizen muy rápido (5-10 min) — empresa ya sabe qué quiere
**Matching:** No corresponde — squad ya elegido
**SafePay:** Estándar + fee por contacto directo

```
Empresa busca catálogo
  → Ve "Código Sur" (ZenitRank ★★, stack relevante)
  → "Contratar este squad"
  → Pre-registro del proyecto (quickstart, no discovery completo)
  → Brief rápido (empresa sabe qué quiere, squad ya conoce el stack)
  → SafePay + SLAs automáticos
  → Inicio directo
```

Diferencia vs Caso 1: no hay matching automático, discovery abreviado, comisión incluye fee por visibilidad en catálogo.

---

### Caso 4 — Squad migra desde otra plataforma

Squad activo en Upwork, Toptal u otra plataforma. Quiere traer contratos existentes a Zenit para ganar SafePay, mejor margen y formalización.

**Iniciador:** Squad
**Discovery:** Kaizen — validación de skills
**Matching:** No corresponde — clientes ya existen
**SafePay:** Estándar con migración fee reducido

```
Squad pre-registro
  → "Tengo 3 clientes en Upwork"
  → Kaizen valida skills (ZenitRank empieza en ◆)
  → Squad propone a clientes migrar contrato a Zenit SafePay
  → Cliente acepta → SafePay formaliza + protege ambos lados
  → ZenitRank empieza a acumular historial real
```

**Para el squad:** mejor margen que Upwork (comisión Zenit < comisión Upwork), SafePay que garantiza cobro, formalización legal, ZenitRank que se construye con trabajo real.

**Para el cliente:** protección SafePay, SLAs, escrow transparente.

---

## Tabla comparativa de flujos

| Caso | Iniciador | Discovery | Matching | SafePay | Estado |
|------|-----------|-----------|---------|---------|--------|
| Empresa busca squad | Empresa | Kaizen completo (30-45 min) | Sí, automático | Obligatorio | **MVP activo** |
| Squad tiene cliente listo | Squad | Kaizen rápido (10-15 min) | No | Opcional (comisión reducida) | Futuro |
| Empresa elige squad directo | Empresa | Kaizen rápido (5-10 min) | No | Obligatorio + fee catálogo | Futuro |
| Squad migra de otra plataforma | Squad | Kaizen validación | No | Obligatorio (fee reducido) | Futuro |

---

## Modelo de ingresos por caso

| Caso | Revenue para Zenit | Justificación |
|------|--------------------|---------------|
| Caso 1 (core) | Comisión 7-12% en SafePay | Zenit hizo el matching |
| Caso 2 (futuro) | 0% si no usa SafePay / 10% si usa | Zenit formalizó, no buscó el cliente |
| Caso 3 (futuro) | Comisión estándar + fee de catálogo | Zenit dio visibilidad + SafePay |
| Caso 4 (futuro) | Comisión estándar (fee de migración reducido) | Zenit atrae volumen ya existente |

---

## Messaging

**Hoy (MVP — Caso 1 únicamente):**

> "¿No tenés equipo tech? Kaizen te busca el perfecto. SafePay te garantiza el resultado."

**Futuro (cuando Casos 2-4 estén validados):**

> "¿Ya tenés squad? Formalizá con SafePay — pagás menos comisión porque ya trajiste el cliente."
>
> "¿Querés un squad específico del catálogo? Contratalo directo."
>
> "¿Venís de Upwork? Migra tus contratos a Zenit — mejor margen, mismo cliente."

**Regla de prioridad:** el Caso 1 es el único mensaje que aparece en el sitio mientras esté en MVP. Los Casos 2-4 no se comunican hasta que existan.
