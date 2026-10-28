/* Locale: español (castellano). Misma estructura de claves que en.js. */
window.LOCALES = window.LOCALES || {};
window.LOCALES.es = {
  meta: { placeholder: "escribe un comando (prueba: greentext o cv) y pulsa enter", enterHint: "enter ↵", hire: "contratar ↗" },

  banner: {
    title: "Bienvenido a peter — Founder OS",
    sub: `Fundador de <b>Greentext AI</b> · Flutter Developer · ingeniero AI-first. Escribe <code>help</code> para ver los comandos o pulsa uno abajo.<br><span class="b-cwd">cwd: /Users/peter</span>`,
  },

  card: {
    id: "<b>Peter Parker</b> · Fundador de Greentext AI",
    rows: [
      ["rol", "<b>Founder / Solo Engineer</b> · Flutter Developer · ingeniero AI-first"],
      ["construyo", "<b>Greentext AI</b> — humanizador y detector de texto con IA, en producción y con usuarios de pago"],
      ["stack", "Flutter · Go · Next.js · Swift · Kotlin · Java · PyTorch"],
      ["ubicación", "Buenos Aires, Argentina · trabajo con empresas de EE. UU. a través de mi propia empresa en EE. UU."],
      ["antes", "un camino muy largo: entrenador de culturismo → finanzas → SEO → 8 negocios → código"],
      ["github", `<a href="{github}" target="_blank" rel="noopener noreferrer">github.com/petrfalkovsky ↗</a>`],
      ["sitio", `<a href="{greentext}" target="_blank" rel="noopener noreferrer">greentext.ai ↗</a>`],
    ],
    hint: `Escribe <span class="accent">whoami</span> para la historia completa, o <span class="accent">greentext</span>, <span class="accent">projects</span>, <span class="accent">experience</span>, <span class="accent">cv</span> para profundizar.`,
  },

  about: {
    head: "Sobre mí",
    paras: [
      "Hola, cómo andan! Soy <b>desarrollador Flutter con más de 6 años de experiencia</b> en desarrollo móvil B2B y B2C — y fundador de <b>Greentext AI</b>. Me encanta crear funcionalidades visuales llamativas y refactorizar mi código antiguo. En el desarrollo disfruto viendo resultados y construyendo interfaces bonitas, usables y <b>pixel-perfect</b>. He trabajado en equipos de 3 a 50 personas, con code reviews y git flow — y ahora entrego en solitario el resultado de un equipo pequeño, trabajando junto a agentes de IA.",
      "Pero el camino hasta aquí fue de todo menos recto. Estudié en la <b>Universidad Estatal Tecnológica de Bielorrusia</b> (Facultad de IT, Ingeniería de Software) — y luego la vida me llevó por prácticamente todos los negocios que existen.",
      "Empecé como <b>entrenador de culturismo</b>. Competí yo mismo — fui <b>campeón absoluto juvenil de la región de Cheliábinsk</b> — y entrené a un atleta que logró el <b>4.º puesto en el Campeonato de Europa del Este</b> en Ekaterimburgo. Luego vinieron las ventas: productos financieros, captación de inversiones para fondos de inversión y para inmuebles en Montenegro. De ahí nació mi propio <b>microfondo de gestión en los mercados de valores</b>.",
      "Después: venta mayorista de alcohol y productos cárnicos. Luego el <b>SEO</b> — monté desde cero el departamento de posicionamiento en la agencia web <b>Webformat</b>, creé una <b>red de sitios</b> para vender publicidad de banners, SEO y linkbuilding, y después otra red de <b>tráfico de arbitraje</b> con el programa de afiliados <b>Leads Leader</b>. En <b>i-Free</b> buscaba estudios indie con juegos poco exitosos para adquirirlos y construir una red publicitaria. Más tarde posicioné sitios en los <b>mercados canadiense, estadounidense y europeo</b> en Ivanov SEO.",
      "El gusanillo emprendedor nunca se fue: creé <b>Master Ninja</b> (una empresa de selección de coches), un taller de <b>reparación de móviles a domicilio</b>, intenté lanzar un servicio de entrega de alimentos (un análogo de Samokat / Yandex Lavka — ese no despegó), y conseguí inversión de un <b>fondo letón</b> para un servicio de entrega de café y una cafetería en el centro de San Petersburgo.",
      "Y entonces, hace unos seis años, me enamoré de la <b>programación</b> — y fue definitivo. Mi stack principal es <b>Flutter</b>; alrededor: <b>Next.js, Go, Swift, Kotlin, Java</b>. Cada negocio anterior me enseñó algo que uso a diario como fundador en solitario: ventas, marketing, SEO, unit economics, contratación y cómo sobrevivir cuando el plan falla.",
      "En mi tiempo libre llevo un blog de estilo de vida, juego al ajedrez y al baloncesto, aprendo castellano y paso tiempo con los míos. Hasta tengo un gato — <b>Vaska</b>!",
    ],
    numsHead: "En cifras",
    stats: [
      { v: "6+ años", l: "en ingeniería de software" },
      { v: "10+", l: "negocios fundados antes del código" },
      { v: "1", l: "empresa en EE. UU. (Greentext AI Inc.)" },
      { v: "4M MAU", l: "el producto más grande" },
      { v: "$1.2M MRR", l: "Walter Writes — lead de desarrollo" },
      { v: "1", l: "gato — Vaska" },
    ],
    hint: `Explora <span class="accent">greentext</span>, <span class="accent">projects</span>, <span class="accent">experience</span> o <span class="accent">skills</span> para profundizar.`,
  },

  greentext: {
    head: "Greentext AI",
    lead: "Greentext AI es un humanizador y detector de texto con IA — un producto en producción con usuarios de pago, construido y operado de principio a fin por un solo ingeniero. Investigué el mercado, constituí la empresa en EE. UU., abrí la cuenta bancaria, construí el producto en móvil, web, backend y ML, y llevo el growth yo mismo. Una sola aplicación en Flutter cubre Web, iOS y Android desde una única base de código.",
    kv: [
      ["producto", "Flutter Web + iOS + Android: acceso con Google / Apple / email, Cloudflare Turnstile, planes de suscripción, editores a pantalla completa, panel de administración."],
      ["backend", "Go: REST API, PostgreSQL, Redis, migraciones, rate limiting, mecánica de prueba con cooldowns crecientes, fingerprinting de dispositivos anti-abuso."],
      ["ML", "Detector propio: RoBERTa afinada con datos adversariales (RAID + pares de paráfrasis), ensamble con estilometría y Binoculars, resaltado a nivel de frase — detecta textos que pasan Sapling / Winston."],
      ["facturación", "Stripe: suscripciones, excedente de palabras medido, webhooks, idempotencia, conversiones server-side; merchant-of-record de respaldo conmutable por configuración."],
      ["growth", "Sitio SEO en Next.js + una fábrica de 1.500+ landing pages programáticas (5 layouts hero × 12 paletas, personalizadas por utm_term de Google Ads). GA4 + GTM + Measurement Protocol, atribución gclid/UTM de extremo a extremo, del clic a la compra."],
      ["infra", "AWS EC2, Docker Compose, GitHub Actions CI/CD (staging + prod), Cloudflare, email transaccional, Sentry, dashboards de administración (embudos, MRR, saldos de API)."],
      ["empresa", "Empresa en EE. UU., banca de empresa, listo para trabajar directamente con clientes y socios estadounidenses."],
    ],
    btn: "Visitar greentext.ai ↗",
  },

  projects: {
    headOwn: "Productos creados desde cero",
    own: [
      { name: "Greentext AI", sub: "fundador · solo engineer", desc: "Humanizador y detector de texto con IA. Flutter + Go + Next.js + ML propio. En producción, con usuarios de pago.", link: "greentext" },
      { name: "Walter Writes AI", sub: "iOS · Android · $1.2M MRR", desc: "Humanizador de textos con IA creado para <b>Walter IA Inc.</b> (EE. UU.). Formé el equipo y lideré el desarrollo de ambas apps; publicadas en App Store y Google Play, hoy el producto factura $1.2M MRR.", link: "walter" },
      { name: "20mm", sub: "sistema ERP · AI roll-up", desc: "Sistema ERP para una empresa de interiores de piedra llave en mano: presupuesto en 15 minutos en lugar de 3–4 horas, selección de piedras por foto en 10 minutos, contrato y documentos para producción en 20 minutos. Un gestor atiende 150–200 clientes al mes en lugar de 25–30; la facturación creció de 3 a 8 M RUB al mes.", link: "mm" },
      { name: "Erlesen", sub: "iOS · Android", desc: "Kurzgeschichten — app de lectura de relatos cortos para el mercado alemán, creada y publicada en solitario.", link: "erlesen" },
      { name: "AI Clean Up — Phone Cleaner", sub: "iOS", desc: "Utilidad de limpieza del móvil con IA: duplicados, fotos similares, análisis de almacenamiento. Publicada en el App Store.", link: "aicleaner" },
      { name: "IPTV Player", sub: "utilidad", desc: "Reproductor IPTV: listas de reproducción, EPG, favoritos.", link: null },
    ],
    headContrib: "He contribuido en",
    contrib: [
      { name: "JewBuzz", sub: "iOS · Android", desc: "App de citas y comunidad con decenas de miles de MAU, en plena expansión hacia los mercados de LatAm.", link: "jewbuzz" },
      { name: "Grand Mobile", sub: "4M MAU", desc: "Juego móvil simulador de vida — lancé la versión de iOS (port de Java → Flutter) en 10 meses.", link: "grand" },
      { name: "Gapopa messenger", sub: "open source", desc: "Mensajero de código abierto (Singapur): BloC, GraphQL, FFI, Gherkin, CI/CD.", link: "gapopa" },
    ],
  },

  experience: {
    head: "Carrera en ingeniería",
    current: "actual",
    items: [
      { mono: "G", current: true, when: "2026 — ahora", meta: "greentext.ai",
        role: "<b>Founder / Solo Engineer</b> · Greentext AI",
        note: "Humanizador y detector de texto con IA. Construí y opero todo el stack: apps Flutter, backend en Go, sitio SEO en Next.js, detector ML propio, facturación con Stripe, infraestructura AWS, analítica de growth. Producto en producción con usuarios de pago.", tag: "actual" },
      { mono: "W", current: true, when: "oct 2025 — ahora", meta: "Greentext AI Inc. · EE. UU.",
        role: "<b>Lead Mobile Developer</b> · Walter Writes AI para Walter IA Inc.",
        note: "Apps de iOS y Android para un cliente de EE. UU.: humanizador, detector, historial offline, 10 idiomas, suscripciones IAP con verificación en el servidor. Formé y lideré el equipo; la app factura $1.2M MRR. Flujo con IA: tests primero — a partir del contrato OpenAPI, el agente confirma que fallan y luego implementa hasta que pasan; tests unitarios y de bloc como capa de verificación; el agente no ve las claves de producción." },
      { mono: "E", when: "ene 2026 — jun 2026", meta: "Greentext AI Inc. · EE. UU.",
        role: "<b>Flutter Developer</b> · Erlesen — lector de cuentos para Alemania",
        note: "Modos de lectura y enfoque, audio en segundo plano, biblioteca offline (Drift), suscripciones con RevenueCat, Firebase, deep links. Flujo con IA: ingeniería de contexto — reglas en CLAUDE.md y un grafo de conocimiento del código vía MCP; el agente revisa el radio de impacto y la cobertura de tests antes de editar; explore → plan → code → verify; revisión del diff por riesgo antes de mi aceptación." },
      { mono: "A", when: "oct 2025 — ene 2026", meta: "Greentext AI Inc. · EE. UU.",
        role: "<b>Flutter Developer</b> · AI Clean Up — limpieza de galería en iOS",
        note: "Fotos similares por perceptual hash, borrosas (Laplaciano + Apple Vision), duplicados, videos; vistas nativas de iOS 26 vía Pigeon. Flujo con IA: spec-driven — la especificación técnica y las fases son el contrato del agente; el agente hace commits con su propio autor de git (46 de 72), cada cambio es trazable y reversible; aceptación humana por fase en un dispositivo real." },
      { mono: "J", when: "mar 2025 — jun 2026", meta: "Greentext AI Inc. · EE. UU.",
        role: "<b>Flutter Developer</b> · JewBuzz Love — app de citas, expansión en LatAm",
        note: "Como parte del equipo: chats en tiempo real (Amity, Socket.IO, MQTT), modos de descubrimiento, compras in-app, deep links, flavors dev/preprod/prod. Flujo con IA sobre una base de código grande: primero exploración en solo lectura y un plan, PRs pequeños con la revisión del equipo, orchestrator-workers con subagentes en paralelo, gate automático (analyze + build de todos los flavors) antes de que una persona vea el cambio." },
      { mono: "2", when: "abr 2026 — oct 2026", meta: "20mm · Moscú",
        role: "<b>Fullstack Developer</b> · 20mm — AI roll-up de interiores de piedra llave en mano",
        note: "Sistema ERP del diseño al lanzamiento: un gestor atiende 150–200 clientes al mes en lugar de 25–30, la facturación creció de 3 a 8 M RUB al mes sin gastos significativos. Presupuesto en 15 minutos en lugar de 3–4 horas, selección de piedras por foto en 10 minutos en lugar de 4–5 horas, contrato y documentos para producción en 20 minutos en lugar de 2–3 horas. Equipo — 1 ingeniero + agentes de IA sobre Claude Fable 5. Next.js · TypeScript · PostgreSQL · Go · Flutter." },
      { mono: "S", when: "≈2025",
        role: "<b>Cofundador</b> · Sylvent — fintech de préstamos a pymes",
        note: "Cofundé una plataforma de préstamos para pequeñas empresas: construí el MVP, validé la hipótesis de producto, negocié con inversores. La ronda no se cerró — el proyecto se cerró con honestidad. Aprendizajes: proceso de fundraising, unit economics de productos de crédito, validación rápida de hipótesis." },
      { mono: "▶", when: "ago 2024 — jul 2025", meta: "grnd.game · 50+ personas",
        role: "<b>Desarrollador Flutter</b> · Grand Mobile (juego, 4M MAU)",
        note: "Lancé la versión de iOS (port de Java → Flutter) en 10 meses; 30+ pantallas de Figma; lógica de cliente de 40+ interfaces y módulos del juego; contratos con backend C++ (RakNet::BitStream, RPC). Stack: Bloc · Dio · Retrofit · Clean Architecture · GoRouter." },
      { mono: "T", when: "feb 2023 — jun 2024", meta: "tn-group.net",
        role: "<b>Desarrollador Flutter</b> · TN-GROUP — ERP de servicio de campo",
        note: "Mantuve 4 apps de cliente sobre ERP-Aurora: 20+ correcciones, 5 funcionalidades, navegador SSO WebView; offline-first para dispositivos Android antiguos. Stack: Bloc · MobX · SQLite · Drift · Hive." },
      { mono: "D", when: "may 2022 — ene 2023", meta: "dolinger",
        role: "<b>Desarrollador Flutter</b> · Dolinger — delivery white-label",
        note: "Mantuve 70+ apps; integraciones de SDK de pagos y mapas; Firebase messaging, deeplinks; introduje una Contribution Guide y Gitflow; publicaciones en App Store / Google Play." },
      { mono: "⌥", when: "ene 2021 — jun 2024", meta: "github.com/petrfalkovsky",
        role: "<b>Desarrollador Flutter</b> · Open source y trabajo por contrato",
        note: "Gapopa messenger (open source) · Kaif Games (Dubái): sistema de diseño para todas las proporciones de teléfonos y tablets, probado en 12 interfaces, platform channels · Laskino Park (app residencial iOS) · VIBE GAMES (Kazajistán) · Toxicity · Athina Plus." },
    ],
    beforeHead: "Antes del código — la década emprendedora",
    beforeKv: [
      ["deporte", "Entrenador de culturismo; campeón absoluto juvenil de la región de Cheliábinsk; entrené a un atleta hasta el 4.º puesto del Campeonato de Europa del Este."],
      ["finanzas", "Venta de productos financieros, inversiones en fondos y en inmuebles de Montenegro; fundé un microfondo en los mercados de valores."],
      ["SEO y tráfico", "Monté el departamento SEO en Webformat; redes de sitios de banners, linkbuilding y tráfico de arbitraje; programa de afiliados Leads Leader; posicionamiento en EE. UU./Canadá/Europa."],
      ["paid social", "Publicidad segmentada en Facebook e Instagram: por este canal construí toda la base de clientes de negocios en San Petersburgo, del primer test a un flujo estable de leads."],
      ["paid search", "Publicidad de búsqueda en un nicho muy competitivo de EE. UU.: 1.200 keywords, títulos dinámicos según la consulta y A/B testing rápido de landings. CPC de $2,50 a $0,90; conversión a solicitud del 7% al 18%."],
      ["negocios", "Master Ninja (selección de coches), taller de reparación de móviles a domicilio, intento de delivery de alimentos, entrega de café + cafetería en San Petersburgo con inversión de un fondo letón."],
    ],
    eduName: "Universidad Estatal Tecnológica de Bielorrusia, Minsk",
    eduMeta: "Facultad de IT · Ingeniería de Software",
  },

  skills: {
    head: "Habilidades clave",
    focus: [
      "UX · diseño de interacción · sistemas de diseño · TypeScript · a11y",
      "Flutter · Dart · Bloc · Clean Architecture",
      "Go · PostgreSQL · Redis · REST",
      "Next.js · React · ingeniería SEO",
      "Swift · Kotlin · Java · Platform Channels · FFI",
      "Facturación Stripe · webhooks · idempotencia",
      "AWS · Docker · GitHub Actions CI/CD · Cloudflare",
      "Fine-tuning con PyTorch · ensambles de ML",
      "GA4 / GTM · atribución · CRO",
      "Google Ads · Meta Ads · SEO semántico",
      "Playwright · tests Widget / Integration / Unit",
    ],
    headAI: "Ingeniería AI-native (2025–2026)",
    kv: [
      ["desarrollo agéntico", "Claude Code y similares: briefs de tarea con contexto completo, sesiones autónomas de varias horas, agentes en paralelo, entrenamientos de ML nocturnos con checkpoints y protocolos de control."],
      ["memoria", "Sistemas de memoria persistente en ficheros, pipelines de palabras clave, «lecciones aprendidas» como reglas ejecutables — orden de rotación de secretos, protocolos de testing honesto, checklists de despliegue."],
      ["verificación", "Los agentes compilan la app, ejecutan escenarios de Playwright y verifican API / BD / pagos de extremo a extremo antes de informar."],
      ["seguridad", "Separación de privilegios (los agentes nunca hacen commit / deploy), fuentes únicas de verdad (precios y límites en la BD, no en el código), tests de contrato contra el desfase front↔back."],
      ["ingeniería LLM", "Fine-tuning de transformers (MPS / GPU), datasets adversariales, ensambles y calibración, ingeniería de costes de APIs de IA externas."],
      ["escalera de confianza", "Según «Building Effective Agents» de Anthropic: primero lo más simple — una sola llamada o un workflow (chaining, routing, evaluator-optimizer); autonomía al agente solo cuando eso no alcanza. La confianza crece a medida que pasan las capas de verificación: tests, linters, un agente revisor, hooks, aceptación manual. Herramientas diseñadas como agent-computer interface, permisos por allowlist, acciones irreversibles solo a través de una persona."],
      ["publicidad de resultados", "Google Ads y Meta Ads de punta a punta: semántica de 1.200+ keywords, títulos dinámicos, A/B tests de landings en lote, atribución completa clic → solicitud → pago. Resultado: CPC $2,50 → $0,90, conversión 7% → 18%."],
      ["SEO", "15 años en buscadores: departamento de posicionamiento desde cero, redes de sitios y tráfico de arbitraje, proyectos llevados a EE. UU. / Canadá / Europa. Hoy: SEO programático — clustering semántico, landings de long tail por plantilla, E-E-A-T y enlazado interno como código."],
      ["growth", "1.500+ landing pages únicas, SEO semántico, pipelines de contenido E-E-A-T, scoring CRO automatizado."],
    ],
  },

  cv: {
    head: "Descargar CV",
    lead: "Mobile · Flutter Developer · desarrollo AI-first. Elige una versión:",
    items: [
      { name: "CV (esp) versión corta, lo destacado", sub: "PDF", desc: "Una página: lo destacado.", href: "cv/Peter_Parker_CV_Short_ES.pdf" },
      { name: "CV (esp) versión completa", sub: "PDF", desc: "Toda la experiencia, proyectos y stack en detalle.", href: "cv/Peter_Parker_CV_ES.pdf" },
    ],
    btn1: "Descargar CV (esp) ↗",
  },

  contact: {
    lead: "Construyo Greentext AI. Abierto a empresas de EE. UU. (a través de mi propia empresa en EE. UU.), inversores, socios y trabajo Flutter / full-stack interesante.",
    kv: [
      ["email", `<a href="mailto:{email}">{email}</a>`],
      ["github", `<a href="{github}" target="_blank" rel="noopener noreferrer">github.com/petrfalkovsky ↗</a>`],
      ["whatsapp", `<a href="{whatsapp}" target="_blank" rel="noopener noreferrer">+54 11 2766-7104 ↗</a>`],
      ["sitio", `<a href="{greentext}" target="_blank" rel="noopener noreferrer">greentext.ai ↗</a>`],
      ["ubicación", "<b>Buenos Aires, Argentina</b> · remoto"],
      ["idiomas", "Español (castellano, B1) · Ruso · de oído: ucraniano, bielorruso, inglés, portugués, italiano"],
    ],
  },

  apps: {
    "head": "Todos los proyectos",
    "users": "Usuarios",
    "site": "Sitio",
    "iosOnly": "— (solo iOS)",
    "web": "— (app web)",
    "items": [
      {
        "name": "Walter Writes AI",
        "lines": [
          "Humanizador y detector de texto con IA para Walter IA Inc. (EE. UU.).",
          "Lideré el desarrollo desde cero."
        ],
        "users": "producto con $1.2M MRR",
        "links": [
          [
            "App Store",
            "walter"
          ],
          [
            "Google Play",
            "walterGP"
          ]
        ]
      },
      {
        "name": "Erlesen — Kurzgeschichten",
        "lines": [
          "Lector de cuentos cortos para el mercado alemán: versiones en audio, biblioteca offline, suscripciones."
        ],
        "links": [
          [
            "App Store",
            "erlesen"
          ],
          [
            "Google Play",
            "erlesenGP"
          ]
        ]
      },
      {
        "name": "AI Clean Up (AI Cleaner)",
        "lines": [
          "Utilidad de limpieza de la galería en iOS: fotos similares y borrosas, duplicados, videos pesados."
        ],
        "links": [
          [
            "App Store",
            "aicleaner"
          ],
          [
            "Google Play",
            null,
            "iosOnly"
          ]
        ]
      },
      {
        "name": "JewBuzz Love",
        "lines": [
          "Citas para la comunidad judía: chats en tiempo real, mapa, ruleta, citas a ciegas."
        ],
        "users": "más de 10K MAU",
        "links": [
          [
            "App Store",
            "jewbuzzAS"
          ],
          [
            "Google Play",
            "jewbuzz"
          ]
        ]
      },
      {
        "name": "Grand Mobile: Role Play Online",
        "lines": [
          "Juego de rol móvil, simulador de vida; portamos la versión iOS de Java a Flutter."
        ],
        "users": "4M MAU",
        "links": [
          [
            "App Store",
            "grandAS"
          ],
          [
            "Google Play",
            "grandGP"
          ]
        ]
      },
      {
        "name": "Rus Mobile: RP Online",
        "lines": [
          "Juego RP móvil de Kaif Games (Dubái); creé un sistema de diseño para que la interfaz del juego se vea perfecta en todas las proporciones de teléfonos y tablets, y lo probé en 12 interfaces conectadas."
        ],
        "links": [
          [
            "Google Play",
            "rusGP"
          ]
        ]
      },
      {
        "name": "MATRESHKA RP",
        "lines": [
          "Juego RP móvil multijugador; desarrollé 3 interfaces complejas."
        ],
        "links": [
          [
            "App Store",
            "matrAS"
          ],
          [
            "Google Play",
            "matrGP"
          ]
        ]
      },
      {
        "name": "Greentext AI",
        "lines": [
          "Una herramienta para estudiantes de EE. UU. para revisar ensayos y humanizar texto de IA: humanizador y detector de texto con IA, Flutter (Web, iOS, Android) + Go + modelo ML propio."
        ],
        "links": [
          [
            "site",
            "greentextApp"
          ]
        ]
      },
      {
        "name": "20mm sistema ERP",
        "lines": [
          "AI roll-up de una empresa de interiores de piedra llave en mano.",
          "Permite a un gestor atender 150–200 clientes al mes en lugar de 25–30. Llevamos la facturación de 3 a 8 M RUB al mes sin gastos significativos."
        ],
        "links": [
          [
            "site",
            "mm"
          ],
          [
            "App Store / Google Play",
            null,
            "web"
          ]
        ]
      },
      {
        "name": "Gapopa messenger (open source)",
        "lines": [
          "Mensajero de código abierto; mis commits fueron aceptados en el repositorio principal."
        ],
        "links": [
          [
            "site",
            "gapopa"
          ],
          [
            "GitHub",
            "gapopaGH"
          ]
        ]
      }
    ]
  },

  help: {
    head: "Comandos",
    cmds: [
      ["whoami", "la historia completa"],
      ["greentext", "el producto insignia"],
      ["projects", "todo lo publicado"],
      ["apps", "todas las apps con enlaces"],
      ["experience", "carrera en ingeniería"],
      ["skills", "stack e ingeniería AI-native"],
      ["cv", "descargar el CV"],
      ["contact", "email y enlaces"],
      ["clear", "limpiar la pantalla"],
    ],
  },

  unknown: {
    notFound: `comando no encontrado: <span class="muted">{cmd}</span>`,
    hint: `Prueba <span class="accent">help</span> para ver la lista, o pregunta por <span class="accent">greentext</span> y <span class="accent">projects</span>.`,
  },
};
