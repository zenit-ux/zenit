# ZenitRank — Sistema de reputación de squads

## Qué es ZenitRank

ZenitRank es el sistema de reputación de squads de Zenit. Resuelve el problema de confianza central de cualquier marketplace: una startup argentina no tiene forma de saber si un squad de Buenos Aires entrega lo que promete.

**La diferencia con otros sistemas de badges:**
- Alibaba Verified Supplier: certifica capacidades **declaradas** mediante auditoría externa. Cuesta $10,000-$15,000/año + auditoría.
- ZenitRank: certifica **resultados reales** acumulados milestone a milestone. Gratuito. Se gana con performance. Se actualiza en tiempo real.

Un badge de ZenitRank Elite solo se puede tener si entregaste 15+ milestones con 95%+ de cumplimiento en plazos y un score promedio de 9.2/10. No se compra. No se declara. Se gana.

---

## Los 4 niveles

| Badge | Nombre | Requisitos | Qué certifica |
|-------|--------|-----------|---------------|
| ◆ | Squad Validado | Perfil completo. LinkedIn verificado por Agente LinkedIn de Kaizen. Skills declarados. Sin historial en plataforma. | Identidad verificada. Capacidades declaradas. Punto de partida. |
| ★ | Squad Confiable | 1+ milestone completado. Tasa de entrega en fecha >80%. Sin disputas abiertas. Score promedio >7/10. | Historial real en plataforma. Primera señal de confianza basada en resultado. |
| ✓ | Squad Verificado | 5+ milestones completados. Tasa de entrega >90%. Sin disputas perdidas. Score promedio >8.5/10. 2+ clientes distintos. | Track record sólido. Múltiples clientes. Confianza probada en diversidad de proyectos. |
| ★★ | Squad Elite | 15+ milestones. Tasa entrega >95%. Score promedio >9.2/10. 5+ clientes distintos. 0 disputas perdidas en últimos 12 meses. | Top tier de la plataforma. El equivalente a un proveedor con 500+ reviews 4.9/5. |

---

## Las métricas que componen el score

ZenitRank es 100% objetivo — nada subjetivo. Las métricas son:

**On-time rate** — porcentaje de milestones entregados en la fecha pactada en el contrato firmado. Kaizen registra la fecha de entrega automáticamente.

**Response time** — tiempo promedio de respuesta del squad dentro de Kaizen. Mide disponibilidad y profesionalismo.

**Criterios cumplidos** — porcentaje de criterios de aceptación que Kaizen validó positivamente en la primera revisión, sin necesidad de ajustes.

**Disputas** — historial de disputas: abiertas, resueltas a favor del squad, resueltas en contra. Las disputas perdidas afectan significativamente el score.

**Diversidad de clientes** — cantidad de empresas distintas con las que trabajó el squad. Evita que un squad con un solo cliente leal acumule un score artificial.

---

## Por qué supera al modelo de Alibaba

| Dimensión | Alibaba Verified Supplier | ZenitRank |
|-----------|--------------------------|-----------|
| Base de verificación | Auditoría de capacidades declaradas (documentos, instalaciones, procesos) | Historial de resultados reales dentro de la plataforma |
| Subjetividad | Inspector tercero interpreta las capacidades. Puede haber variación. | Datos objetivos: fechas de entrega, scores de criterios, disputas |
| Transparencia | Informe de inspección descargable | Perfil público con historial completo, tasas y scores por tipo de proyecto |
| Actualización | Verificación periódica anual | Se actualiza en tiempo real con cada milestone completado |
| Costo del badge | $10,000-$15,000/año + auditoría SGS/TUV | Gratuito — se gana con performance |
| Puede comprarse | Sí — la membresía se paga | No — solo se gana con resultados |

**La ventaja de diseño:**
En Alibaba, un proveedor puede tener el badge de Verified Supplier y entregar productos de calidad mediocre — porque el badge certifica capacidades, no resultados.

En Zenit, el badge Elite solo se puede tener si entregaste resultados reales. Eso es lo que Zenit puede comunicar al mercado: **"En Zenit, los badges significan algo. Son resultado, no promesa."**

---

## Cómo se muestra ZenitRank

### En el perfil del squad
Cada squad tiene un perfil público con:
- Badge actual con fecha de obtención
- Historial de milestones (empresa, tipo de proyecto, score, fecha)
- Tasa de entrega on-time histórica
- Score promedio por tipo de proyecto (frontend, backend, mobile, etc.)
- Número de clientes distintos
- Historial de disputas (si las hay)

### En el proceso de matching
Cuando Kaizen hace el matching de squads para un proyecto, el ZenitRank es uno de los factores de scoring junto con el fit de stack, disponibilidad y experiencia en el dominio del proyecto.

### En la decisión de la empresa
La empresa ve el ZenitRank de cada squad antes de aprobar el match. No puede ver el detalle de proyectos anteriores de otras empresas (confidencialidad), pero sí las métricas agregadas.

---

## El badge como incentivo de comportamiento

ZenitRank no es solo un indicador — es un mecanismo de incentivos. El squad que mantiene un badge alto:
- Aparece primero en el matching de Kaizen
- Accede a proyectos de mayor valor
- Tiene menos fricción en disputas (su historial habla por él)
- Puede cobrar más caro (el mercado lo valida)

El squad que baja su badge por entregas tardías o disputas perdidas:
- Aparece más abajo en el matching
- Accede a proyectos de menor valor
- Tiene más fricción en el proceso

Este ciclo virtuoso incentiva naturalmente la calidad sin que Zenit tenga que hacer cumplimiento manual.

---

## TalentPath — la entrada para juniors

Los juniors no entran directamente al marketplace. Entran por TalentPath ($49/mes) donde trabajan en proyectos reales junto a squads senior. Cuando acumulan suficiente historial, pueden calificar para el nivel Squad Validado.

Esto protege la calidad del marketplace (primera etapa solo SSR/SR) y crea un pipeline de talento propio.

---

## Estado actual

ZenitRank no tiene implementación en el código. Es concepto de producto documentado.

Lo que existe:
- Referencias a ZenitRank en el copy de varias secciones
- Mockups de perfiles de squad con scores en `app/squads/page.tsx`
- Los scores (97%, 91%) en `KaizenSection.tsx` son mockup estático

### [PENDIENTE] Lo que se necesita para implementar
- Base de datos de milestones completados por squad
- Sistema de cálculo automático de métricas (on-time rate, score promedio, etc.)
- Lógica de actualización de badge en tiempo real
- Perfil público de squad con historial
- Integración con el algoritmo de matching de Kaizen
- Panel de métricas para el squad (ver su propio ZenitRank y cómo mejorarlo)
