# ZENIT 2.0 — Kaizen Conversational Flows

> **Owner:** David + Rik | **Status:** Draft  
> Squad pre-register (9 steps) + Company discovery (6 steps)

---

## Flow 1 — Squad Pre-Register (9 steps)

| Step | Question | Response Type |
|------|----------|---------------|
| 1 | Squad name? | Text |
| 2 | Primary tech stack? | Multi-select |
| 3 | Team size? | Number |
| 4 | Availability (hrs/week)? | Select |
| 5 | Past project types? | Multi-select |
| 6 | GitHub org link? | URL |
| 7 | Average project rate? | Range |
| 8 | Preferred project length? | Select |
| 9 | Contact email? | Email |

<!-- TODO: Full dialogue copy per step, validation rules, edge cases -->

---

## Flow 2 — Company Discovery (6 steps)

| Step | Question | Response Type |
|------|----------|---------------|
| 1 | What do you want to build? | Text (open) |
| 2 | Tech preferences? | Multi-select / None |
| 3 | Timeline? | Select |
| 4 | Budget range? | Range |
| 5 | Team already started? | Boolean |
| 6 | Contact / next step | Email + CTA |

<!-- TODO: Full dialogue copy per step, Kaizen AI response templates, fallback paths -->

---

## Implementation Notes

- Kaizen is a discovery engine, not a chatbot
- Each step should expose options, not just collect answers
- Squad B backup logic triggers at step 4 of company flow
- `ai_native` flag is set based on tech preferences in step 2

---

*Backend implementation → coordinate with Rik on [`00_BRIEF_FOR_RIK.md`](00_BRIEF_FOR_RIK.md)*
