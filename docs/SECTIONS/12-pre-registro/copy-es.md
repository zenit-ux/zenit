# Pre-registro — Copy (ES)

Route: `/squads/pre-registro` + `/es/squads/pre-registro`
Language: Spanish (default + es locale)
Source: `07-copy-inventory.md` + `lib/i18n/preregistro.ts`

---

## Hero

- Eyebrow: "Para squads de desarrollo · Acceso anticipado"
- H1 line 1: "¿No encontrás trabajo?"
- H1 line 2: "Zenit lo soluciona."
- Body paragraph 1 — Problem: "No es que la IA te reemplazó. Es que las empresas ampliaron demasiado y ahora no pueden sostenerlo. Zenit resuelve eso para todos."
- Body paragraph 2 — Value: "Las empresas contratan equipos por proyecto — sin carga de nómina fija. Vos cobrás más por milestone, trabajás con múltiples clientes en paralelo, y SafePay garantiza que cobrás lo que acordamos."
- Body paragraph 3 — Framing: "No es freelance. Es tu squad como un activo productivo."
- CTA 1: "Pre-registrar mi squad" *(→ `#form`)*
- CTA 2: "Ver criterios" *(→ `#criterios`)*
- Trust: "Sin spam · Solo el aviso de apertura"

---

## Stats Strip

- ZenitRank: "100% objetivo"
- SafePay: "Por milestone"
- Squads: "Todo nivel"

---

## Cómo Funciona (3 steps)

- H2: "Tres pasos. Sin fricción."
1. "Kaizen revisa tu squad" — "Verificamos perfil, stack y proyecto destacado contra criterios objetivos."
2. "Te notificamos cuando abramos" — "Los primeros squads registrados tienen prioridad de acceso."
3. "Primeros proyectos con SafePay" — "Cada milestone tiene criterios definidos antes de arrancar."

---

## A Quién Buscamos (`id="criterios"`)

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

---

## ZenitRank Badges

- ◆ Validado (entry point — "Entrás aquí" tag)
- ★ Confiable
- ✓ Verificado
- ★★ Elite

**Blockquote (from Kaizen):**
"Los squads que entran en esta fase arrancan con historial desde el primer proyecto. No empezás de cero — empezás con ventaja."

---

## Form

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

---

## Conversational Flow (9 steps — modal version)

1. Squad name
2. Member count
3. Member info (name + role + LinkedIn) × n
4. Years experience
5. Tech stack
6. Best project
7. Email
8. Terms acceptance
9. Review + confirm
