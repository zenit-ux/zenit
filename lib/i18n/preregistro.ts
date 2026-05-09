export type Locale = "es" | "pt" | "en";

export interface PreregistroTranslations {
  /* ── Hero ── */
  heroEyebrow: string;
  heroH1: [string, string]; // two lines
  heroProblem: string;
  heroSolution: string;
  heroEmphasis: string;
  heroCta: string;
  heroCtaSecondary: string;
  heroTrust: string;

  /* ── Stats strip ── */
  stats: Array<{ label: string; value: string; sub: string }>;

  /* ── Steps ── */
  stepsEyebrow: string;
  stepsH2: string;
  steps: Array<{ title: string; body: string }>;

  /* ── Criteria ── */
  criteriaEyebrow: string;
  criteriaH2: string;
  criteria: Array<{ ok: boolean; text: string }>;
  whySeniorTitle: string;
  whySeniorBody: string;
  talentpathLabel: string;
  talentpathH3: string;
  talentpathBody: string;
  talentpathCta: string;

  /* ── ZenitRank ── */
  rankEyebrow: string;
  rankH2: [string, string];
  rankBody: string;
  rankBadges: Array<{ symbol: string; name: string; req: string; current?: boolean }>;
  rankCurrentTag: string;
  rankQuote: string;
  rankCite: string;

  /* ── Guide blurb (before chat) ── */
  guideBody: string;

  /* ── Form header ── */
  formEyebrow: string;
  formH2: string;
  formSubtitle: string;

  /* ── Kaizen conversational messages ── */
  kaizen: {
    greeting: string;
    memberCount: string;      // {{squadName}}
    memberIntro: string;      // after member count — "cuéntame sobre cada uno"
    memberNext: string;       // {{ordinal}}
    memberNombre0: string;    // {{squadName}}
    memberNombreN: string;    // {{ordinal}}
    memberRol: string;        // {{nombre}}
    memberLinkedIn: string;   // {{nombre}}
    yearsExperience: string;
    stack: string;
    project: string;
    email: string;
    terms: string;
    review: string;           // {{squadName}}
    injectionResponse: string;
    outOfScopeMatching: string;
    outOfScopeOthers: string;
    outOfScopeDefault: string;
  };

  /* ── Input placeholders ── */
  placeholders: {
    squadName: string;
    memberCount: string;
    memberCount2: string;
    memberCount3: string;
    memberCount4: string;
    memberNombre: string;
    memberRol: string;
    memberLinkedIn: string;
    industries: string;
    yearsExperience: string;
    projectName: string;
    projectDesc: string;
    projectLink: string;
    email: string;
    skillSearch: string;
    addCustomSkill: string;
  };

  /* ── Buttons ── */
  btnSend: string;
  btnSkip: string;
  btnConfirm: string;
  btnSubmit: string;
  btnSubmitting: string;
  btnEdit: string;
  btnDelete: string;
  btnSave: string;
  btnCancel: string;
  btnClose: string;

  /* ── Modal UI ── */
  modalTitle: string;
  modalPreview: string;
  memberLabel: string;

  /* ── Validation errors ── */
  errors: {
    required: string;
    emailInvalid: string;
    descTooLong: string;
    termsRequired: string;
    urlInvalid: string;
    memberCountInvalid: string;
    linkedinInvalid: string;
    tooShort: string;
    tooGeneric: string;
    skillsRequired: string; // {{n}}
    descTooShort: string;
    linkInvalid: string;
    linkDomainBlocked: string;
    linkUnreachable: string;
  };

  /* ── Terms ── */
  termsText: string;
  termsLink1: string;
  termsLink2: string;

  /* ── Success ── */
  successH2: string;
  successBody: string;
  successNote: string;
  successSummaryTitle: string;

  /* ── Review labels ── */
  reviewSquadName: string;
  reviewMembers: string;
  reviewStack: string;
  reviewProject: string;
  reviewEmail: string;
  reviewIndustries: string;
  reviewYearsExp: string;

  /* ── Skills UI ── */
  skillsLabel: string;
  minSkillsHint: string; // {{n}}
  skillLevelLabels: [string, string, string, string]; // [básico, intermedio, avanzado, experto]

  /* ── Language switcher ── */
  langLabel: string;
  ordinals: string[];
  charCount: string; // "{{n}}/280"
}

/* ─── ESPAÑOL ─────────────────────────────────────────────── */

const es: PreregistroTranslations = {
  heroEyebrow: "Para squads de desarrollo · Acceso anticipado",
  heroH1: ["¿No encontrás trabajo?", "Zenit lo soluciona."],
  heroProblem:
    "No es que la IA te reemplazó. Es que las empresas ampliaron demasiado y ahora no pueden sostenerlo. Zenit resuelve eso para todos.",
  heroSolution:
    "Las empresas contratan equipos por proyecto — sin carga de nómina fija. Vos cobrás más por milestone, trabajás con múltiples clientes en paralelo, y SafePay garantiza que cobrás lo que acordamos.",
  heroEmphasis: "No es freelance. Es tu squad como un activo productivo.",
  heroCta: "Pre-registrar mi squad",
  heroCtaSecondary: "Ver criterios",
  heroTrust: "Sin spam · Solo el aviso de apertura",

  stats: [
    { label: "ZenitRank", value: "100% objetivo",  sub: "Basado en resultados reales" },
    { label: "SafePay",   value: "Por milestone",   sub: "Escrow hasta validación" },
    { label: "Squads",    value: "Todos los niveles", sub: "Kaizen calibra la madurez" },
  ],

  stepsEyebrow: "Qué pasa después",
  stepsH2: "Tres pasos. Sin fricción.",
  steps: [
    {
      title: "Kaizen revisa tu squad",
      body: "Verificamos perfil, stack y proyecto destacado contra criterios objetivos. No es una entrevista — es una revisión de señales reales.",
    },
    {
      title: "Te notificamos cuando abramos",
      body: "Los primeros squads registrados tienen prioridad de acceso. Te avisamos por email cuando el marketplace esté activo.",
    },
    {
      title: "Primeros proyectos con SafePay",
      body: "Cada milestone tiene criterios definidos antes de arrancar. SafePay retiene el pago hasta que Kaizen valida la entrega.",
    },
  ],

  criteriaEyebrow: "Criterios de selección",
  criteriaH2: "A quién buscamos",
  criteria: [
    { ok: true,  text: "Equipos de 2 o más personas que ya trabajaron juntos" },
    { ok: true,  text: "Nivel demostrable — Kaizen calibra la madurez promedio del equipo" },
    { ok: true,  text: "Al menos un proyecto entregado documentable" },
    { ok: true,  text: "Stack en React/Next.js, Node, Python o mobile" },
    { ok: true,  text: "Disponibilidad para proyectos de 4 a 12 semanas" },
    { ok: false, text: "Perfiles sueltos sin historial en equipo" },
    { ok: false, text: "Equipos sin ningún entregable documentable en producción" },
  ],
  whySeniorTitle: "¿Y si mi equipo tiene juniors?",
  whySeniorBody:
    "Kaizen evalúa el promedio del equipo, no a cada integrante por separado. Juniors que entran junto a un equipo senior se incorporan en TalentPath — trabajan en proyectos reales, el squad gana ingresos extra, y el estándar de entrega se mantiene.",
  talentpathLabel: "Desarrollador junior",
  talentpathH3: "TalentPath es para vos.",
  talentpathBody:
    "TalentPath incorpora juniors en equipos senior activos. Trabajás en proyectos reales, generás ingresos para el squad, y cuando acumulás historial verificado — calificás para el marketplace de forma independiente.",
  talentpathCta: "Conocer TalentPath",

  rankEyebrow: "Sistema de reputación",
  rankH2: ["ZenitRank — tu historial", "empieza hoy."],
  rankBody:
    "No hay rating subjetivo. ZenitRank mide on-time rate, response time y criterios cumplidos — calculado automáticamente por Kaizen después de cada milestone. Los badges no se compran. Se ganan con resultados.",
  rankBadges: [
    { symbol: "◆", name: "Validado",  req: "Perfil completo · LinkedIn verificado", current: true },
    { symbol: "★", name: "Confiable", req: "1+ milestone · >80% on-time · Score >7" },
    { symbol: "✓", name: "Verificado",req: "5+ milestones · >90% on-time · 2+ clientes" },
    { symbol: "★★",name: "Elite",     req: "15+ milestones · >95% on-time · 5+ clientes" },
  ],
  rankCurrentTag: "Entrás aquí",
  rankQuote:
    "Los squads que entran en esta fase arrancan con historial desde el primer proyecto. No empezás de cero — empezás con ventaja.",
  rankCite: "— Kaizen, agente de producto de Zenit",

  guideBody: "Kaizen te va a hacer algunas preguntas sobre tu squad — quiénes son, qué stack usan y qué proyecto los representa. No es un formulario genérico, es una revisión real. Solo lleva unos minutos.",

  formEyebrow: "Acceso anticipado",
  formH2: "Hablá con Kaizen",
  formSubtitle: "Kaizen revisa tu squad antes del lanzamiento. Una conversación, no un formulario.",

  kaizen: {
    greeting:
      "Hola, soy Kaizen. Antes de abrirte el acceso quiero conocer tu squad. ¿Cómo se llaman?",
    memberCount: "\"{{squadName}}\", bien. ¿Cuántos integrantes tiene el squad?",
    memberIntro: "Perfecto. Cuéntame sobre cada uno — nombre, rol y LinkedIn.",
    memberNext: "¿Y el {{ordinal}} integrante?",
    memberNombre0: "Vamos con el equipo de {{squadName}}. ¿Cómo se llama el primer integrante?",
    memberNombreN: "¿Y el {{ordinal}} integrante, cómo se llama?",
    memberRol: "¿Qué rol tiene {{nombre}} en el squad?",
    memberLinkedIn: "¿Hay un perfil de LinkedIn de {{nombre}} para verificar la experiencia?",
    yearsExperience: "¿Cuántos años de experiencia promedio tiene el squad?",
    stack: "¿Qué tecnologías usa el squad? Podés elegir varias o agregar las que no estén.",
    project: "¿Cuál es el proyecto del que están más orgullosos? Contame sobre él.",
    email: "Casi terminamos. ¿A qué email les aviso cuando abramos el acceso?",
    terms: "Un último paso: necesito que confirmes que leíste y aceptás los términos de uso de Zenit.",
    review: "Listo. Registré a \"{{squadName}}\". Revisá el resumen antes de confirmar.",
    injectionResponse: "Soy Kaizen en modo registro. Mi función es conocer tu squad. Retomemos donde estábamos.",
    outOfScopeMatching: "Eso lo ves en el discovery. Por ahora, contame sobre tu squad.",
    outOfScopeOthers: "Solo conozco datos del squad que se está registrando. Continuemos.",
    outOfScopeDefault: "Eso está fuera de mi scope en este modo. Retomemos el registro.",
  },

  placeholders: {
    squadName: "Ej. Código Sur",
    memberCount: "Ej. 3, cinco, diez",
    memberCount2: "2 integrantes",
    memberCount3: "3 integrantes",
    memberCount4: "4 integrantes",
    memberNombre: "Nombre completo",
    memberRol: "Ej. Backend Sr.",
    memberLinkedIn: "linkedin.com/in/usuario",
    industries: "Ej. Fintech, SaaS, E-commerce",
    yearsExperience: "Ej. 5",
    projectName: "Ej. Panel logístico en tiempo real",
    projectDesc: "¿Qué construyeron? ¿Cuál fue el desafío técnico? ¿Qué resultó?",
    projectLink: "https://github.com/usuario/repo",
    email: "squad@ejemplo.com",
    skillSearch: "Buscar skill...",
    addCustomSkill: "Agregar skill personalizado",
  },

  btnSend: "Enviar",
  btnSkip: "Saltear",
  btnConfirm: "Confirmar",
  btnSubmit: "Pre-registrar mi squad",
  btnSubmitting: "Registrando...",
  btnEdit: "Editar",
  btnDelete: "Borrar",
  btnSave: "Guardar",
  btnCancel: "Cancelar",
  btnClose: "Cerrar",

  modalTitle: "Pre-registro",
  modalPreview: "Vista previa",
  memberLabel: "Integrante",

  errors: {
    required: "Este campo es obligatorio.",
    emailInvalid: "Email inválido.",
    descTooLong: "Máximo 280 caracteres.",
    termsRequired: "Debés aceptar los términos para continuar.",
    urlInvalid: "URL inválida.",
    memberCountInvalid: "Ingresá entre 2 y 20 integrantes.",
    linkedinInvalid: "Ej. linkedin.com/in/tu-usuario",
    tooShort: "Por favor, sé más específico en tu respuesta.",
    tooGeneric: "Parece una respuesta genérica. Contanos específicamente sobre tu squad.",
    skillsRequired: "Seleccioná al menos {{n}} skill(s).",
    descTooShort: "La descripción debe tener al menos 30 caracteres y mencionar qué construyeron, el desafío técnico y el resultado.",
    linkInvalid: "URL inválida. Asegurate de incluir https://",
    linkDomainBlocked: "Dominio no permitido. Usá el link directo al repo o demo (GitHub, Vercel, Netlify, etc.)",
    linkUnreachable: "No pudimos acceder al link. Verificá que esté online.",
  },

  termsText: "He leído y acepto los {{terms}} y la {{privacy}} de Zenit.",
  termsLink1: "términos de uso",
  termsLink2: "política de privacidad",

  successH2: "Squad registrado.",
  successBody: "Entrás a la lista de acceso anticipado.",
  successNote: "Te notificamos cuando abramos el marketplace. Sin spam — solo el aviso cuando estemos listos.",
  successSummaryTitle: "Resumen del registro",

  reviewSquadName: "Squad",
  reviewMembers: "Integrantes",
  reviewStack: "Stack",
  reviewProject: "Proyecto",
  reviewEmail: "Email",
  reviewIndustries: "Industrias",
  reviewYearsExp: "Experiencia",

  skillsLabel: "Skills",
  minSkillsHint: "Mín. {{n}}",
  skillLevelLabels: ["Básico", "Intermedio", "Avanzado", "Experto"],

  langLabel: "Idioma",
  ordinals: ["segundo", "tercer", "cuarto", "quinto", "sexto", "séptimo"],
  charCount: "{{n}}/280",
};

/* ─── PORTUGUÊS ───────────────────────────────────────────── */

const pt: PreregistroTranslations = {
  heroEyebrow: "Para squads de desenvolvimento · Acesso antecipado",
  heroH1: ["Não consegue trabalho?", "A Zenit resolve isso."],
  heroProblem:
    "Não é que a IA te substituiu. É que as empresas cresceram demais e agora não conseguem sustentar. A Zenit resolve isso para todos.",
  heroSolution:
    "As empresas contratam equipes por projeto — sem custo fixo de folha. Você recebe mais por milestone, trabalha com múltiplos clientes em paralelo, e o SafePay garante que você recebe o que foi acordado.",
  heroEmphasis: "Não é freelance. É seu squad como um ativo produtivo.",
  heroCta: "Pré-registrar meu squad",
  heroCtaSecondary: "Ver critérios",
  heroTrust: "Sem spam · Só o aviso de abertura",

  stats: [
    { label: "ZenitRank", value: "100% objetivo",  sub: "Baseado em resultados reais" },
    { label: "SafePay",   value: "Por milestone",   sub: "Escrow até validação" },
    { label: "Squads",    value: "Todos os níveis",  sub: "Kaizen calibra a maturidade" },
  ],

  stepsEyebrow: "O que acontece depois",
  stepsH2: "Três etapas. Sem fricção.",
  steps: [
    {
      title: "Kaizen revisa seu squad",
      body: "Verificamos perfil, stack e projeto destaque contra critérios objetivos. Não é uma entrevista — é uma revisão de sinais reais.",
    },
    {
      title: "Te notificamos quando abrirmos",
      body: "Os primeiros squads registrados têm prioridade de acesso. Avisamos por email quando o marketplace estiver ativo.",
    },
    {
      title: "Primeiros projetos com SafePay",
      body: "Cada milestone tem critérios definidos antes de começar. O SafePay retém o pagamento até a Kaizen validar a entrega.",
    },
  ],

  criteriaEyebrow: "Critérios de seleção",
  criteriaH2: "Quem buscamos",
  criteria: [
    { ok: true,  text: "Equipes de 2 ou mais pessoas que já trabalharam juntas" },
    { ok: true,  text: "Nível comprovável — Kaizen calibra a maturidade média da equipe" },
    { ok: true,  text: "Pelo menos um projeto entregue documentável" },
    { ok: true,  text: "Stack em React/Next.js, Node, Python ou mobile" },
    { ok: true,  text: "Disponibilidade para projetos de 4 a 12 semanas" },
    { ok: false, text: "Perfis soltos sem histórico em equipe" },
    { ok: false, text: "Equipes sem nenhum entregável documentável em produção" },
  ],
  whySeniorTitle: "E se minha equipe tem juniores?",
  whySeniorBody:
    "Kaizen avalia a média da equipe, não cada integrante separadamente. Juniores que entram com uma equipe sênior se incorporam no TalentPath — trabalham em projetos reais, o squad ganha receita extra, e o padrão de entrega se mantém.",
  talentpathLabel: "Desenvolvedor junior",
  talentpathH3: "TalentPath é para você.",
  talentpathBody:
    "O TalentPath incorpora juniores em equipes sêniors ativas. Você trabalha em projetos reais, gera receita para o squad, e quando acumula histórico verificado — se qualifica para o marketplace de forma independente.",
  talentpathCta: "Conhecer TalentPath",

  rankEyebrow: "Sistema de reputação",
  rankH2: ["ZenitRank — seu histórico", "começa hoje."],
  rankBody:
    "Sem rating subjetivo. O ZenitRank mede on-time rate, response time e critérios cumpridos — calculado automaticamente pela Kaizen após cada milestone. Os badges não se compram. Se ganham com resultados.",
  rankBadges: [
    { symbol: "◆", name: "Validado",   req: "Perfil completo · LinkedIn verificado", current: true },
    { symbol: "★", name: "Confiável",  req: "1+ milestone · >80% on-time · Score >7" },
    { symbol: "✓", name: "Verificado", req: "5+ milestones · >90% on-time · 2+ clientes" },
    { symbol: "★★",name: "Elite",      req: "15+ milestones · >95% on-time · 5+ clientes" },
  ],
  rankCurrentTag: "Você entra aqui",
  rankQuote:
    "Os squads que entram nessa fase começam com histórico desde o primeiro projeto. Você não começa do zero — começa com vantagem.",
  rankCite: "— Kaizen, agente de produto da Zenit",

  guideBody: "Kaizen vai te fazer algumas perguntas sobre seu squad — quem são, qual stack usam e qual projeto os representa. Não é um formulário genérico, é uma revisão real. Leva só alguns minutos.",

  formEyebrow: "Acesso antecipado",
  formH2: "Fale com a Kaizen",
  formSubtitle: "Kaizen revisa seu squad antes do lançamento. Uma conversa, não um formulário.",

  kaizen: {
    greeting:
      "Olá, sou a Kaizen. Antes de liberar o acesso, quero conhecer seu squad. Como se chamam?",
    memberCount: "\"{{squadName}}\", ótimo. Quantos integrantes tem o squad?",
    memberIntro: "Perfeito. Me conta sobre cada um — nome, papel e LinkedIn.",
    memberNext: "E o {{ordinal}} integrante?",
    memberNombre0: "Vamos com a equipe de {{squadName}}. Como se chama o primeiro integrante?",
    memberNombreN: "E o {{ordinal}} integrante, como se chama?",
    memberRol: "Qual é o papel de {{nombre}} no squad?",
    memberLinkedIn: "Tem um perfil de LinkedIn de {{nombre}} para verificar a experiência?",
    yearsExperience: "Quantos anos de experiência em média tem o squad?",
    stack: "Quais tecnologias o squad usa? Pode escolher várias ou adicionar as que faltam.",
    project: "Qual é o projeto do qual vocês mais se orgulham? Conte-nos sobre ele.",
    email: "Quase terminamos. Qual email uso para avisar quando abrirmos o acesso?",
    terms: "Último passo: preciso que confirme que leu e aceita os termos de uso da Zenit.",
    review: "Pronto. Registrei \"{{squadName}}\". Revise o resumo antes de confirmar.",
    injectionResponse: "Sou a Kaizen em modo registro. Minha função é conhecer seu squad. Voltemos ao que estávamos.",
    outOfScopeMatching: "Isso você vê no discovery. Por enquanto, me conta sobre seu squad.",
    outOfScopeOthers: "Só conheço dados do squad que está se registrando. Continuemos.",
    outOfScopeDefault: "Isso está fora do meu escopo nesse modo. Voltemos ao registro.",
  },

  placeholders: {
    squadName: "Ex. Código Sul",
    memberCount: "Ex. 3, cinco, dez",
    memberCount2: "2 integrantes",
    memberCount3: "3 integrantes",
    memberCount4: "4 integrantes",
    memberNombre: "Nome completo",
    memberRol: "Ex. Backend Sr.",
    memberLinkedIn: "linkedin.com/in/usuario",
    industries: "Ex. Fintech, SaaS, E-commerce",
    yearsExperience: "Ex. 5",
    projectName: "Ex. Painel logístico em tempo real",
    projectDesc: "O que construíram? Qual foi o desafio técnico? O que resultou?",
    projectLink: "https://github.com/usuario/repo",
    email: "squad@exemplo.com",
    skillSearch: "Buscar skill...",
    addCustomSkill: "Adicionar skill personalizada",
  },

  btnSend: "Enviar",
  btnSkip: "Pular",
  btnConfirm: "Confirmar",
  btnSubmit: "Pré-registrar meu squad",
  btnSubmitting: "Registrando...",
  btnEdit: "Editar",
  btnDelete: "Excluir",
  btnSave: "Salvar",
  btnCancel: "Cancelar",
  btnClose: "Fechar",

  modalTitle: "Pré-registro",
  modalPreview: "Pré-visualização",
  memberLabel: "Integrante",

  errors: {
    required: "Este campo é obrigatório.",
    emailInvalid: "Email inválido.",
    descTooLong: "Máximo 280 caracteres.",
    termsRequired: "Você precisa aceitar os termos para continuar.",
    urlInvalid: "URL inválida.",
    memberCountInvalid: "Insira entre 2 e 20 integrantes.",
    linkedinInvalid: "Ex. linkedin.com/in/seu-usuario",
    tooShort: "Por favor, seja mais específico na sua resposta.",
    tooGeneric: "Parece uma resposta genérica. Conte especificamente sobre seu squad.",
    skillsRequired: "Selecione pelo menos {{n}} skill(s).",
    descTooShort: "A descrição deve ter pelo menos 30 caracteres e mencionar o que construíram, o desafio técnico e o resultado.",
    linkInvalid: "URL inválida. Certifique-se de incluir https://",
    linkDomainBlocked: "Domínio não permitido. Use o link direto para o repositório ou demo.",
    linkUnreachable: "Não conseguimos acessar o link. Verifique se está online.",
  },

  termsText: "Li e aceito os {{terms}} e a {{privacy}} da Zenit.",
  termsLink1: "termos de uso",
  termsLink2: "política de privacidade",

  successH2: "Squad registrado.",
  successBody: "Você entra na lista de acesso antecipado.",
  successNote: "Avisamos quando o marketplace abrir. Sem spam — só o aviso quando estivermos prontos.",
  successSummaryTitle: "Resumo do registro",

  reviewSquadName: "Squad",
  reviewMembers: "Integrantes",
  reviewStack: "Stack",
  reviewProject: "Projeto",
  reviewEmail: "Email",
  reviewIndustries: "Indústrias",
  reviewYearsExp: "Experiência",

  skillsLabel: "Skills",
  minSkillsHint: "Mín. {{n}}",
  skillLevelLabels: ["Básico", "Intermediário", "Avançado", "Especialista"],

  langLabel: "Idioma",
  ordinals: ["segundo", "terceiro", "quarto", "quinto", "sexto", "sétimo"],
  charCount: "{{n}}/280",
};

/* ─── ENGLISH ─────────────────────────────────────────────── */

const en: PreregistroTranslations = {
  heroEyebrow: "For development squads · Early access",
  heroH1: ["Can't land work?", "Zenit solves that."],
  heroProblem:
    "It's not that AI replaced you. Companies overhired and now can't sustain it. Zenit fixes that for everyone.",
  heroSolution:
    "Companies hire teams per project — no fixed payroll. You earn more per milestone, work with multiple clients in parallel, and SafePay ensures you get paid what we agreed.",
  heroEmphasis: "Not freelance. Your squad as a productive asset.",
  heroCta: "Pre-register my squad",
  heroCtaSecondary: "See criteria",
  heroTrust: "No spam · Only the access notification",

  stats: [
    { label: "ZenitRank", value: "100% objective", sub: "Based on real results" },
    { label: "SafePay",   value: "Per milestone",  sub: "Escrow until validation" },
    { label: "Squads",    value: "All levels",     sub: "Kaizen calibrates team maturity" },
  ],

  stepsEyebrow: "What happens next",
  stepsH2: "Three steps. No friction.",
  steps: [
    {
      title: "Kaizen reviews your squad",
      body: "We check profile, stack and featured project against objective criteria. Not an interview — a review of real signals.",
    },
    {
      title: "We notify you when we launch",
      body: "First registered squads get priority access. We'll email you when the marketplace is active.",
    },
    {
      title: "First projects with SafePay",
      body: "Each milestone has criteria defined before work starts. SafePay holds payment until Kaizen validates delivery.",
    },
  ],

  criteriaEyebrow: "Selection criteria",
  criteriaH2: "Who we're looking for",
  criteria: [
    { ok: true,  text: "Teams of 2 or more people who have worked together before" },
    { ok: true,  text: "Demonstrable level — Kaizen calibrates the team's average maturity" },
    { ok: true,  text: "At least one documented delivered project" },
    { ok: true,  text: "Stack in React/Next.js, Node, Python or mobile" },
    { ok: true,  text: "Availability for 4 to 12 week projects" },
    { ok: false, text: "Solo profiles without team history" },
    { ok: false, text: "Teams with no documented deliverable in production" },
  ],
  whySeniorTitle: "What if my team has juniors?",
  whySeniorBody:
    "Kaizen evaluates the team's average, not each member individually. Juniors who join alongside a senior team are onboarded through TalentPath — they work on real projects, the squad earns extra income, and delivery standards stay intact.",
  talentpathLabel: "Junior developer",
  talentpathH3: "TalentPath is for you.",
  talentpathBody:
    "TalentPath places juniors inside active senior teams. You work on real projects, generate income for the squad, and once you build a verified track record — you qualify for the marketplace on your own.",
  talentpathCta: "Learn about TalentPath",

  rankEyebrow: "Reputation system",
  rankH2: ["ZenitRank — your track record", "starts today."],
  rankBody:
    "No subjective rating. ZenitRank measures on-time rate, response time and criteria met — calculated automatically by Kaizen after each milestone. Badges aren't bought. They're earned with results.",
  rankBadges: [
    { symbol: "◆", name: "Validated",  req: "Complete profile · LinkedIn verified", current: true },
    { symbol: "★", name: "Reliable",   req: "1+ milestone · >80% on-time · Score >7" },
    { symbol: "✓", name: "Verified",   req: "5+ milestones · >90% on-time · 2+ clients" },
    { symbol: "★★",name: "Elite",      req: "15+ milestones · >95% on-time · 5+ clients" },
  ],
  rankCurrentTag: "You start here",
  rankQuote:
    "Squads joining this phase start with a track record from day one. You're not starting from zero — you're starting with an edge.",
  rankCite: "— Kaizen, Zenit product agent",

  guideBody: "Kaizen will ask a few questions about your squad — who they are, what stack they use and what project represents their work. It's not a generic form, it's a real review. Takes just a few minutes.",

  formEyebrow: "Early access",
  formH2: "Talk to Kaizen",
  formSubtitle: "Kaizen reviews your squad before launch. A conversation, not a form.",

  kaizen: {
    greeting:
      "Hi, I'm Kaizen. Before opening access, I want to get to know your squad. What's the squad's name?",
    memberCount: "\"{{squadName}}\", great. How many members does the squad have?",
    memberIntro: "Perfect. Tell me about each one — name, role and LinkedIn.",
    memberNext: "And the {{ordinal}} member?",
    memberNombre0: "Let's go with the {{squadName}} team. What's the first member's name?",
    memberNombreN: "And the {{ordinal}} member, what's their name?",
    memberRol: "What's {{nombre}}'s role in the squad?",
    memberLinkedIn: "Does {{nombre}} have a LinkedIn profile to verify experience?",
    yearsExperience: "What's the squad's average years of experience?",
    stack: "What technologies does the squad use? Pick as many as you need, or add your own.",
    project: "What's the project you're most proud of? Tell me about it.",
    email: "Almost done. What email should I use to notify you when we open access?",
    terms: "One last step: confirm that you've read and accept Zenit's terms of use.",
    review: "Done. I've registered \"{{squadName}}\". Review the summary before confirming.",
    injectionResponse: "I'm Kaizen in registration mode. My job is to get to know your squad. Let's pick up where we left off.",
    outOfScopeMatching: "You'll see that in the discovery phase. For now, tell me about your squad.",
    outOfScopeOthers: "I only know the data of the squad currently registering. Let's continue.",
    outOfScopeDefault: "That's outside my scope in this mode. Let's get back to registration.",
  },

  placeholders: {
    squadName: "E.g. Southern Code",
    memberCount: "E.g. 3, five, ten",
    memberCount2: "2 members",
    memberCount3: "3 members",
    memberCount4: "4 members",
    memberNombre: "Full name",
    memberRol: "E.g. Senior Backend",
    memberLinkedIn: "linkedin.com/in/username",
    industries: "E.g. Fintech, SaaS, E-commerce, Healthcare",
    yearsExperience: "E.g. 5",
    projectName: "E.g. Real-time logistics dashboard",
    projectDesc: "What did you build? What was the technical challenge? What was the outcome?",
    projectLink: "https://github.com/user/repo",
    email: "squad@example.com",
    skillSearch: "Search skills...",
    addCustomSkill: "Add custom skill",
  },

  btnSend: "Send",
  btnSkip: "Skip",
  btnConfirm: "Confirm",
  btnSubmit: "Pre-register my squad",
  btnSubmitting: "Registering...",
  btnEdit: "Edit",
  btnDelete: "Remove",
  btnSave: "Save",
  btnCancel: "Cancel",
  btnClose: "Close",

  modalTitle: "Registration",
  modalPreview: "Preview",
  memberLabel: "Member",

  errors: {
    required: "This field is required.",
    emailInvalid: "Invalid email.",
    descTooLong: "Maximum 280 characters.",
    termsRequired: "You must accept the terms to continue.",
    urlInvalid: "Invalid URL.",
    memberCountInvalid: "Enter between 2 and 20 members.",
    linkedinInvalid: "E.g. linkedin.com/in/your-username",
    tooShort: "Please be more specific in your answer.",
    tooGeneric: "That looks like a generic answer. Tell us specifically about your squad.",
    skillsRequired: "Select at least {{n}} skill(s).",
    descTooShort: "Description must be at least 30 characters and mention what you built, the technical challenge, and the result.",
    linkInvalid: "Invalid URL. Make sure to include https://",
    linkDomainBlocked: "Domain not allowed. Use a direct link to the repo or demo (GitHub, Vercel, Netlify, etc.)",
    linkUnreachable: "Couldn't reach the link. Make sure it's online.",
  },

  termsText: "I've read and accept Zenit's {{terms}} and {{privacy}}.",
  termsLink1: "terms of use",
  termsLink2: "privacy policy",

  successH2: "Squad registered.",
  successBody: "You're on the early access list.",
  successNote: "We'll notify you when the marketplace opens. No spam — just the launch notice.",
  successSummaryTitle: "Registration summary",

  reviewSquadName: "Squad",
  reviewMembers: "Members",
  reviewStack: "Stack",
  reviewProject: "Project",
  reviewEmail: "Email",
  reviewIndustries: "Industries",
  reviewYearsExp: "Experience",

  skillsLabel: "Skills",
  minSkillsHint: "Min. {{n}}",
  skillLevelLabels: ["Basic", "Intermediate", "Advanced", "Expert"],

  langLabel: "Language",
  ordinals: ["second", "third", "fourth", "fifth", "sixth", "seventh"],
  charCount: "{{n}}/280",
};

/* ─── Export ─────────────────────────────────────────────── */

export const translations: Record<Locale, PreregistroTranslations> = { es, pt, en };

export function t(locale: Locale): PreregistroTranslations {
  return translations[locale];
}
