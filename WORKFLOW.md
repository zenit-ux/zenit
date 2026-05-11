# ZENIT — Development Workflow
## Complete Process for Building with Claude.ai + Claude Code

**Status:** ✅ FINAL | **Version:** 1.0  
**Created:** May 10, 2026 | **For:** David Dellacha (CPO/Design/Frontend)

---

## CORE PRINCIPLE

**Claude.ai defines strategy. Claude Code executes.**

- **Claude.ai (here):** What to build, why, how, when
- **Claude Code (terminal):** Write code, see changes live, iterate fast

No overlap. No confusion. One tool for thinking. One for doing.

---

## 1. TASK STRUCTURE TEMPLATE

Every task you ask Claude Code to do should follow this format:

```
TASK: [Clear, one-line title]

CONTEXT: 
[Why we're building this, what it connects to]

SCOPE:
[Exactly what's in scope, what's NOT]

INPUTS:
[Files to read: CLAUDE.md, WORKFLOW.md, Obsidian docs, etc]

OUTPUTS:
[What gets created/changed: files, components, routes]

SUCCESS CRITERIA:
[ ] Code compiles without errors
[ ] Mobile responsive (test on 375px, 768px, 1440px)
[ ] SEO: metadata + JSON-LD if applicable
[ ] A11y: WCAG 2.1 AA, h1→h2→h3 hierarchy, aria-labels
[ ] No custom hex colors (use design tokens only)
[ ] Contrasts verified at webaim.org
[ ] Animations have prefers-reduced-motion fallback
[ ] No console errors/warnings

DEPENDENCIES:
[Does this block anything? Does anything block this?]

TIMELINE:
[How long should this take? 2 hours? Full day?]
```

---

## 2. WHEN TO USE CLAUDE.AI vs CLAUDE CODE

### Use CLAUDE.AI for:
- ✅ Strategy decisions ("Should we change positioning?")
- ✅ Architecture questions ("How do we structure Kaizen?")
- ✅ Process refinement ("Is this workflow working?")
- ✅ Problem-solving ("Users are confused by this, what's the fix?")
- ✅ Syncing with Rik/Lucas ("How do we resolve this conflict?")
- ✅ Updating WORKFLOW.md or CLAUDE.md
- ✅ When you're stuck or unsure

### Use CLAUDE CODE for:
- ✅ Implementing designs (homepage sections, landing pages)
- ✅ Writing components (buttons, modals, forms)
- ✅ Iterating UI/UX (change colors, spacing, animations)
- ✅ Testing in browser (see changes live)
- ✅ Refactoring code
- ✅ Debugging issues
- ✅ Routine tasks (add routes, create files)

---

## 3. YOUR ROLE IN THE WORKFLOW

### David (You) — CPO + Design + Frontend

**Weeks 1-2: Foundation (This Week)**
1. Define homepage structure + copy (DONE — 01_ZENIT_HOMEPAGE_CONTENT_FINAL.md)
2. Define landing pages structure + copy (DONE — 02_ZENIT_LANDING_PAGES_FINAL.md)
3. Define dialogue flows structure (DONE — 03_ZENIT_KAIZEN_DIALOGUES.md)
4. Create WORKFLOW.md (THIS DOCUMENT)

**Weeks 3-4: Pages**
- Implement homepage (9 sections)
- Implement landing pages (4 pages)
- Test mobile + SEO + a11y

**Weeks 5-6: Interaction**
- Implement dialogue modals (squad + company flows)
- Build company + squad dashboards (basic)
- Integrate with Rik's API endpoints

**Weeks 7-8: Polish**
- Refine all pages for responsiveness
- Add animations (Framer Motion v12)
- Audit all copy (tone, clarity, CTAs)
- Full a11y audit

**Weeks 9-10: AI Flavor**
- Create /ai landing page variant
- Update homepage for AI positioning
- Add AI-specific sections

**Weeks 11-12: Ship**
- Final QA (all browsers, all devices)
- Performance audit
- Staging deployment ready

---

### Rik (Backend) — Technical Weight

**When you're ready (Weeks 3+):**
- PostgreSQL schema for squads + companies + projects
- Kaizen API endpoints (discovery, matching, validation)
- SafePay structure + payment handling
- GitHub integration
- ZenitRank calculation

**You'll loop Rik in when:**
- Dialogues need API contracts (Week 4)
- Dashboards need real data (Week 5)
- SafePay needs UI (Week 7)

**Rik has veto on:**
- Anything technically infeasible
- Performance decisions
- Security/infrastructure choices

---

### Lucas (CEO) — Involved Later

**When you loop in (Weeks 6+):**
- Final design approval
- Brand alignment review
- Copy tone validation

**Lucas has veto on:**
- Positioning/messaging
- Target audience framing
- Brand consistency

---

## 4. DECISION FRAMEWORK

### Small Decisions (You decide alone)
- Component styling
- Animation timing
- Button text
- Section ordering
- Color token choices

### Medium Decisions (Discuss with Rik via Claude.ai)
- API contracts
- Data structure for dashboards
- Performance trade-offs
- Component architecture

### Big Decisions (All three discuss via Claude.ai)
- Pivot positioning
- Skip/add features from brief
- Change target audience
- Major workflow redesign
- Go/no-go decisions

**How:** You ask here (Claude.ai), I facilitate discussion with what Rik/Lucas would likely say.

---

## 5. CLAUDE CODE SESSION TEMPLATE

Every time you open Claude Code:

```bash
claude-zenit

# In Claude Code, ALWAYS start with:
cat .claude-context
cat WORKFLOW.md (this file)

# Then ask:
"[Your task following the TASK STRUCTURE above]"
```

Claude Code will:
1. Read .claude-context (which tells it to read Obsidian docs)
2. Read WORKFLOW.md (this file)
3. Know exactly what you want
4. Execute without asking for clarification

---

## 6. QUALITY GATES (BEFORE MARKING DONE)

Every task must pass these checks:

### Code Quality
- [ ] No TypeScript errors (`tsc --noEmit` passes)
- [ ] No ESLint errors
- [ ] No console errors/warnings
- [ ] Follows naming conventions (camelCase components, kebab-case files)

### Responsiveness
- [ ] 375px (mobile) — no overflow, readable
- [ ] 768px (tablet) — proper spacing
- [ ] 1440px (desktop) — optimized layout

### SEO + Meta
- [ ] Page has unique `<title>`
- [ ] Page has unique `<meta description>` (120-160 chars)
- [ ] JSON-LD schema if applicable (FAQ, Service, etc)
- [ ] `og:image` for social preview
- [ ] Canonical URL set

### Accessibility
- [ ] One `<h1>` per page
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)
- [ ] All icon buttons have `aria-label`
- [ ] Form inputs have associated `<label>`
- [ ] Buttons/links have `:focus-visible` styles
- [ ] No color-only indicators (red = error needs text too)

### Design System
- [ ] No custom hex colors (use tokens: teal, cyan, gold)
- [ ] No hardcoded spacing (use Tailwind scale)
- [ ] Typography uses `clamp()` for h1/h2 (not Tailwind breakpoints)
- [ ] Buttons use design system components

### Colors & Contrast
- [ ] All text meets WCAG 2.1 AA (4.5:1 for normal, 3:1 for large)
- [ ] Verified at https://webaim.org/resources/contrastchecker/
- [ ] Never use `opacity-XX` on containers (kills contrast)

### Animations
- [ ] Framer Motion v12 (or GSAP if necessary)
- [ ] `as const` for easing arrays
- [ ] `prefers-reduced-motion` respected
- [ ] No animations on critical interactions (buttons, forms)

### Copy & Messaging
- [ ] Follows ZENIT 2.0 positioning
- [ ] No typos (use Grammarly if unsure)
- [ ] CTAs are clear and urgent (not vague)
- [ ] Tone matches brand (direct, no hype, specific numbers)

---

## 7. SYNC POINTS WITH TEAM

### Monday 10 AM (Weekly Check-in)
**What:** Status + blockers  
**Who:** You, Rik, Lucas  
**Duration:** 30 min  
**Format:** 
- What David finished last week
- What David is starting this week
- Any blockers for Rik/Lucas
- Any decisions needed

### Friday 3 PM (Design Review)
**What:** Review what shipped + plan next week  
**Who:** You, Rik, Lucas  
**Duration:** 30 min  
**Format:**
- Walk through live changes (on localhost or staging)
- Get feedback (Rik on tech, Lucas on brand)
- Decide what's ready vs needs refinement
- Plan next week priorities

### Async (Between meetings)
- Slack for quick questions (30 min response expected)
- Claude.ai for strategy/decisions (can wait till next sync)
- No blocking on async communication

---

## 8. DOCUMENT UPDATE PROTOCOL

### When to Update CLAUDE.md
- After every major decision
- After discovering something important about the stack
- After changing how something works
- End of each week (Friday afternoon)

### When to Update WORKFLOW.md
- After pivoting strategy
- After discovering blockers
- After adding/removing features
- After changing priorities
- Every 2 weeks (beginning of sprint)

### When to Commit to Git
- After finishing a complete task (section/page/component)
- Commit message format: `[section] Task title - brief description`
- Example: `[homepage] Implement HERO section - 9 sections complete`

---

## 9. TIMELINE OVERVIEW (12 Weeks)

```
WEEK 1-2: FOUNDATION (Current)
├─ David: Define everything (done)
├─ David: Create WORKFLOW.md (this)
└─ David: Ready to implement

WEEK 3-4: PAGES
├─ David: Homepage (9 sections)
├─ David: Landing pages (4 pages)
└─ David: Mobile + SEO + a11y

WEEK 5-6: INTERACTION
├─ David: Dialogue modals
├─ David: Basic dashboards
└─ David + Rik: API integration starts

WEEK 7-8: PROTECTION
├─ David: Refinement + animations
├─ David: Copy audit
├─ Rik: SafePay structure
└─ David + Rik: Integration

WEEK 9-10: AI FLAVOR
├─ David: /ai landing page
├─ David: AI-specific sections
└─ David + Rik: AI features integration

WEEK 11-12: SHIP
├─ David: Final QA
├─ David: Performance audit
├─ Rik: Backend testing
└─ All: Staging deployment ready
```

---

## 10. HOW TO HANDLE BLOCKERS

### If Claude Code can't solve it:
1. Try in Claude Code first (full context)
2. If still stuck after 15 min → come here (Claude.ai)
3. Describe the problem + what you tried
4. I'll help debug or advise

### If you need Rik's input:
1. Document the problem clearly
2. Ask here (Claude.ai)
3. I'll think through what Rik would say
4. If critical → schedule ad-hoc sync with him

### If you need to pivot the brief:
1. Come here (Claude.ai)
2. Discuss why it's not working
3. Decide together (you + my input representing Rik/Lucas)
4. Update this WORKFLOW.md
5. Continue in Claude Code with new plan

---

## 11. SUCCESS LOOKS LIKE

### Week 2 (End of this week)
- [ ] WORKFLOW.md completed (this document)
- [ ] CLAUDE.md refined
- [ ] All 5 ZENIT docs in Obsidian
- [ ] Claude Code set up and tested
- [ ] Ready to start implementation

### Week 4 (Mid-way)
- [ ] Homepage 9 sections implemented
- [ ] Landing pages 4 pages implemented
- [ ] All mobile responsive
- [ ] All SEO + a11y complete
- [ ] Rik has API endpoints defined

### Week 8 (Mid-way + refinement)
- [ ] All pages + interactions complete
- [ ] Dialogue modals working
- [ ] Dashboards basic but functional
- [ ] Rik's SafePay structure in place
- [ ] Everything animated

### Week 12 (MVP Ready)
- [ ] Entire site staging-ready
- [ ] All quality gates passed
- [ ] Rik's backend tested
- [ ] Lucas has approved brand
- [ ] Ready to soft-launch

---

## 12. CRITICAL RULES

### Never:
- ❌ Implement without reading CLAUDE.md + WORKFLOW.md
- ❌ Create custom hex colors (use tokens)
- ❌ Skip mobile testing
- ❌ Skip a11y checklist
- ❌ Implement features not in the brief without asking here first
- ❌ Make decisions affecting Rik without mentioning him
- ❌ Assume something's "good enough"

### Always:
- ✅ Read .claude-context at start of Claude Code session
- ✅ Pass all quality gates before "done"
- ✅ Test on mobile first
- ✅ Use design tokens only
- ✅ Commit after each complete task
- ✅ Update WORKFLOW.md if anything changes
- ✅ Ask here if unsure

---

## 13. HOW TO EVOLVE THIS WORKFLOW

Every Friday after the sync, ask yourself:
- What worked this week?
- What was frustrating?
- Should we change anything?

If yes: **Come here (Claude.ai), we update WORKFLOW.md together.**

This is a living document. It evolves as you learn what works.

---

## QUICK REFERENCE: THIS WEEK

**Your job:**
1. ✅ ZENIT 2.0 briefs done
2. ✅ CLAUDE.md created
3. ✅ WORKFLOW.md created (this)
4. ⬜ Setup Claude Code + test

**Next week:**
1. ⬜ Implement homepage section 1: HERO
2. ⬜ Implement homepage section 2: THE SHIFT
3. ⬜ Mobile + SEO + a11y for both

---

*Version: 1.0 — FINAL*  
*Last Updated: May 10, 2026*  
*Next Review: May 17, 2026 (Friday 3 PM sync)*

---

**READY TO START IMPLEMENTATION?**

Once you confirm this WORKFLOW.md is correct:
1. Save it to `~/Proyectos/zenit/WORKFLOW.md`
2. Commit to git
3. Next task: `claude-zenit` + implement homepage section 1
