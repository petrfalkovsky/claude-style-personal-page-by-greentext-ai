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
      ["ubicación", "Buenos Aires, Argentina · trabajo con empresas de EE. UU. a través de mi propia C-corp de Delaware"],
      ["antes", "un camino muy largo: entrenador de culturismo → finanzas → SEO → 8 negocios → código"],
      ["github", `<a href="{github}" target="_blank" rel="noopener noreferrer">github.com/petrfalkovsky ↗</a>`],
      ["sitio", `<a href="{greentext}" target="_blank" rel="noopener noreferrer">greentext.ai ↗</a>`],
    ],
    hint: `Escribe <span class="accent">whoami</span> para la historia completa, o <span class="accent">greentext</span>, <span class="accent">projects</span>, <span class="accent">experience</span>, <span class="accent">cv</span> para profundizar.`,
  },

  about: {
    head: "Sobre mí",
    paras: [
      "¡Hola! Soy <b>desarrollador Flutter con más de 6 años de experiencia</b> en desarrollo móvil B2B y B2C — y fundador de <b>Greentext AI</b>. Me encanta crear funcionalidades visuales llamativas y refactorizar mi código antiguo. En el desarrollo disfruto viendo resultados y construyendo interfaces bonitas, usables y <b>pixel-perfect</b>. He trabajado en equipos de 3 a 50 personas, con code reviews y git flow — y ahora entrego en solitario el resultado de un equipo pequeño, trabajando junto a agentes de IA.",
      "Pero el camino hasta aquí fue de todo menos recto. Estudié en la <b>Universidad Estatal Tecnológica de Bielorrusia</b> (Facultad de IT, Ingeniería de Software) — y luego la vida me llevó por prácticamente todos los negocios que existen.",
      "Empecé como <b>entrenador de culturismo</b>. Competí yo mismo — fui <b>campeón absoluto juvenil de la región de Cheliábinsk</b> — y entrené a un atleta que logró el <b>4.º puesto en el Campeonato de Europa del Este</b> en Ekaterimburgo. Luego vinieron las ventas: productos financieros, captación de inversiones para fondos de inversión y para inmuebles en Montenegro. De ahí nació mi propio <b>microfondo de gestión en los mercados de valores</b>.",
      "Después: venta mayorista de alcohol y productos cárnicos. Luego el <b>SEO</b> — monté desde cero el departamento de posicionamiento en la agencia web <b>Webformat</b>, creé una <b>red de sitios</b> para vender publicidad de banners, SEO y linkbuilding, y después otra red de <b>tráfico de arbitraje</b> con el programa de afiliados <b>Leads Leader</b>. En <b>i-Free</b> buscaba estudios indie con juegos poco exitosos para adquirirlos y construir una red publicitaria. Más tarde posicioné sitios en los <b>mercados canadiense, estadounidense y europeo</b> en Ivanov SEO.",
      "El gusanillo emprendedor nunca se fue: creé <b>Master Ninja</b> (una empresa de selección de coches), un taller de <b>reparación de móviles a domicilio</b>, intenté lanzar un servicio de entrega de alimentos (un análogo de Samokat / Yandex Lavka — ese no despegó), y conseguí inversión de un <b>fondo letón</b> para un servicio de entrega de café y una cafetería en el centro de San Petersburgo.",
      "Y entonces, hace unos seis años, me enamoré de la <b>programación</b> — y fue definitivo. Mi stack principal es <b>Flutter</b>; alrededor: <b>Next.js, Go, Swift, Kotlin, Java</b>. Cada negocio anterior me enseñó algo que uso a diario como fundador en solitario: ventas, marketing, SEO, unit economics, contratación y cómo sobrevivir cuando el plan falla.",
      "En mi tiempo libre llevo un blog de estilo de vida, juego al ajedrez y al baloncesto, aprendo castellano y paso tiempo con los míos. ¡Hasta tengo un gato — <b>Vaska</b>!",
    ],
    numsHead: "En cifras",
    stats: [
      { v: "6+ años", l: "en ingeniería de software" },
      { v: "10+", l: "negocios fundados antes del código" },
      { v: "1", l: "C-corp de Delaware (Greentext AI)" },
      { v: "4M MAU", l: "el producto más grande" },
      { v: "$1.2M MRR", l: "Walter Writes — lead de desarrollo" },
      { v: "1", l: "gato — Vaska" },
    ],
    hint: `Explora <span class="accent">greentext</span>, <span class="accent">projects</span>, <span class="accent">experience</span> o <span class="accent">skills</span> para profundizar.`,
  },

  greentext: {
    head: "Greentext AI",
    lead: "Greentext AI es un humanizador y detector de texto con IA — un SaaS en producción con usuarios de pago, construido y operado de principio a fin por un solo ingeniero. Investigué el mercado, constituí la empresa en Delaware, abrí la cuenta bancaria, construí el producto en móvil, web, backend y ML, y llevo el growth yo mismo. Una sola aplicación en Flutter cubre Web, iOS y Android desde una única base de código.",
    kv: [
      ["producto", "Flutter Web + iOS + Android: acceso con Google / Apple / email, Cloudflare Turnstile, planes de suscripción, editores a pantalla completa, panel de administración."],
      ["backend", "Go: REST API, PostgreSQL, Redis, migraciones, rate limiting, mecánica de prueba con cooldowns crecientes, fingerprinting de dispositivos anti-abuso."],
      ["ML", "Detector propio: RoBERTa afinada con datos adversariales (RAID + pares de paráfrasis), ensamble con estilometría y Binoculars, resaltado a nivel de frase — detecta textos que pasan Sapling / Winston."],
      ["facturación", "Stripe: suscripciones, excedente de palabras medido, webhooks, idempotencia, conversiones server-side; merchant-of-record de respaldo conmutable por configuración."],
      ["growth", "Sitio SEO en Next.js + una fábrica de 1.500+ landing pages programáticas (5 layouts hero × 12 paletas, personalizadas por utm_term de Google Ads). GA4 + GTM + Measurement Protocol, atribución gclid/UTM de extremo a extremo, del clic a la compra."],
      ["infra", "AWS EC2, Docker Compose, GitHub Actions CI/CD (staging + prod), Cloudflare, email transaccional, Sentry, dashboards de administración (embudos, MRR, saldos de API)."],
      ["empresa", "C-corp de Delaware en EE. UU., banca de empresa, listo para trabajar directamente con clientes y socios estadounidenses."],
    ],
    btn: "Visitar greentext.ai ↗",
  },

  projects: {
    headOwn: "Productos creados desde cero",
    own: [
      { name: "Greentext AI", sub: "fundador · solo engineer", desc: "Humanizador y detector de texto con IA. Flutter + Go + Next.js + ML propio. En producción, con usuarios de pago.", link: "greentext" },
      { name: "Walter Writes AI", sub: "iOS · Android · $1.2M MRR", desc: "Humanizador de textos con IA creado para <b>Walter IA Inc.</b> (EE. UU.). Formé el equipo y lideré el desarrollo de ambas apps; publicadas en App Store y Google Play, hoy el producto factura $1.2M MRR.", link: "walter" },
      { name: "Curator AI", sub: "MVP · CRM AI-first", desc: "CRM para contratistas de piedra natural: presupuestos, contratos y actas en minutos en vez de horas. Un gestor lleva 7 veces más clientes, sin demoras en ningún paso.", link: null },
      { name: "20mm", sub: "cofundador · llave en mano", desc: "Piedra natural llave en mano para varios estudios de diseño de Moscú con 7–9M RUB de facturación mensual.", link: null },
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
      { mono: "M", current: true, when: "jul 2025 — ahora", meta: "mercadolibre.com · Buenos Aires",
        role: "<b>Mobile Developer</b> · MercadoLibre — e-commerce y fintech de LatAm",
        note: "UI de cara al cliente en la app móvil; integraciones de API (perfil, pagos, sistemas de backend); gestión de estado con soporte offline y manejo robusto de errores de red; correcciones de estabilidad detectadas por Firebase Crashlytics; releases de producción vía CI/CD. App interna de logística para repartidores (rutas y entregas).", tag: "actual" },
      { mono: "G", current: true, when: "2026 — ahora", meta: "greentext.ai",
        role: "<b>Founder / Solo Engineer</b> · Greentext AI",
        note: "Humanizador y detector de texto con IA. Construí y opero todo el stack: apps Flutter, backend en Go, sitio SEO en Next.js, detector ML propio, facturación con Stripe, infraestructura AWS, analítica de growth. Producto en producción con usuarios de pago.", tag: "actual" },
      { mono: "W", current: true, when: "2025 — ahora", meta: "Walter IA Inc. · EE. UU.",
        role: "<b>Lead Mobile Developer</b> · Walter Writes AI",
        note: "Apps de iOS y Android desarrolladas por encargo de Walter IA Inc. Formé el equipo y lideré el desarrollo: arquitectura, code review y ciclo de releases en App Store y Google Play. Hoy la app factura $1.2M MRR.", tag: "ahora" },
      { mono: "2", current: true, when: "2026 — ahora", meta: "20mm · Moscú",
        role: "<b>Cofundador</b> · 20mm — piedra natural llave en mano",
        note: "Servicio integral para varios estudios de diseño de Moscú con 7–9M RUB al mes: medición → taller → entrega → instalación → aceptación. Responsable de producto, procesos y automatización.", tag: "ahora" },
      { mono: "C", current: true, when: "2026 — ahora", meta: "MVP",
        role: "<b>Fundador</b> · Curator AI — CRM AI-first para contratistas de piedra",
        note: "En fase MVP: el sistema calcula presupuestos y genera contratos y actas en minutos en vez de horas. La productividad del gestor se multiplicó por 7 en clientes atendidos, con mayor calidad y sin esperas.", tag: "ahora" },
      { mono: "S", when: "≈2025",
        role: "<b>Cofundador</b> · Sylvent — fintech de préstamos a pymes",
        note: "Cofundé una plataforma de préstamos para pequeñas empresas: construí el MVP, validé la hipótesis de producto, negocié con inversores. La ronda no se cerró — el proyecto se cerró con honestidad. Aprendizajes: proceso de fundraising, unit economics de productos de crédito, validación rápida de hipótesis." },
      { mono: "▶", when: "sep 2024 — jul 2025", meta: "grnd.game · 50+ personas",
        role: "<b>Desarrollador Flutter</b> · Grand Mobile (juego, 4M MAU)",
        note: "Lancé la versión de iOS (port de Java → Flutter) en 10 meses; 30+ pantallas de Figma; lógica de cliente de 40+ interfaces y módulos del juego; contratos con backend C++ (RakNet::BitStream, RPC). Stack: Bloc · Dio · Retrofit · Clean Architecture · GoRouter." },
      { mono: "T", when: "feb 2024 — feb 2025", meta: "tn-group.net",
        role: "<b>Desarrollador Flutter</b> · TN-GROUP — ERP de servicio de campo",
        note: "Mantuve 4 apps de cliente sobre ERP-Aurora: 20+ correcciones, 5 funcionalidades, navegador SSO WebView; offline-first para dispositivos Android antiguos. Stack: Bloc · MobX · SQLite · Drift · Hive." },
      { mono: "D", when: "may 2023 — nov 2024", meta: "dolinger",
        role: "<b>Desarrollador Flutter</b> · Dolinger — delivery white-label",
        note: "Mantuve 70+ apps; integraciones de SDK de pagos y mapas; Firebase messaging, deeplinks; introduje una Contribution Guide y Gitflow; publicaciones en App Store / Google Play." },
      { mono: "⌥", when: "ene 2021 — jun 2024", meta: "github.com/petrfalkovsky",
        role: "<b>Desarrollador Flutter</b> · Open source y trabajo por contrato",
        note: "Gapopa messenger (open source) · Kaif Games (Dubái): 12 interfaces de juego, platform channels · Laskino Park (app residencial iOS) · VIBE GAMES (Kazajistán) · Toxicity · Athina Plus." },
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
      ["publicidad de resultados", "Google Ads y Meta Ads de punta a punta: semántica de 1.200+ keywords, títulos dinámicos, A/B tests de landings en lote, atribución completa clic → solicitud → pago. Resultado: CPC $2,50 → $0,90, conversión 7% → 18%."],
      ["SEO", "15 años en buscadores: departamento de posicionamiento desde cero, redes de sitios y tráfico de arbitraje, proyectos llevados a EE. UU. / Canadá / Europa. Hoy: SEO programático — clustering semántico, landings de long tail por plantilla, E-E-A-T y enlazado interno como código."],
      ["growth", "1.500+ landing pages únicas, SEO semántico, pipelines de contenido E-E-A-T, scoring CRO automatizado."],
    ],
  },

  cv: {
    head: "Descargar CV",
    lead: "Flutter Developer · Full-Stack Product Engineer · AI-first Builder. Elige un idioma:",
    items: [
      { name: "CV — inglés", sub: "PDF", desc: "CV Flutter / full-stack, formato estadounidense.", href: "cv/Peter_Parker_CV_US.pdf" },
      { name: "CV — ruso", sub: "PDF", desc: "Currículum en ruso.", href: "cv/Peter_Parker_CV_RU.pdf" },
      { name: "CV — español", sub: "PDF", desc: "CV en español.", href: "cv/Peter_Parker_CV_ES.pdf" },
    ],
    btn1: "Descargar CV (EN) ↗",
  },

  contact: {
    lead: "Construyo Greentext AI. Abierto a empresas de EE. UU. (a través de mi propia C-corp de Delaware), inversores, socios y trabajo Flutter / full-stack interesante.",
    kv: [
      ["email", `<a href="mailto:{email}">{email}</a>`],
      ["github", `<a href="{github}" target="_blank" rel="noopener noreferrer">github.com/petrfalkovsky ↗</a>`],
      ["whatsapp", `<a href="{whatsapp}" target="_blank" rel="noopener noreferrer">+54 11 2766-7104 ↗</a>`],
      ["sitio", `<a href="{greentext}" target="_blank" rel="noopener noreferrer">greentext.ai ↗</a>`],
      ["ubicación", "<b>Buenos Aires, Argentina</b> · remoto"],
      ["idiomas", "Ruso (nativo) · Inglés (B2+) · Español (B1+)"],
    ],
  },

  help: {
    head: "Comandos",
    cmds: [
      ["whoami", "la historia completa"],
      ["greentext", "el producto insignia"],
      ["projects", "todo lo publicado"],
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
