/* Locale: English (US). Keys mirror the ARB-style naming used across Greentext. */
window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {
  meta: { placeholder: "type a command (try: greentext or cv) and press enter", enterHint: "enter ↵", hire: "hire ↗" },

  banner: {
    title: "Welcome to peter — Founder OS",
    sub: `Founder of <b>Greentext AI</b> · Flutter Developer · AI-first engineer. Type <code>help</code> for commands, or tap one below.<br><span class="b-cwd">cwd: /Users/peter</span>`,
  },

  card: {
    id: "<b>Peter Parker</b> · Founder of Greentext AI",
    rows: [
      ["role", "<b>Founder / Solo Engineer</b> · Flutter Developer · AI-first engineer"],
      ["building", "<b>Greentext AI</b> — AI text humanizer &amp; detector, live with paying users"],
      ["stack", "Flutter · Go · Next.js · Swift · Kotlin · Java · PyTorch"],
      ["based", "Buenos Aires, Argentina · works with US companies via own Delaware C-corp"],
      ["before", "a very long road: bodybuilding coach → finance → SEO → 8 businesses → code"],
      ["github", `<a href="{github}" target="_blank" rel="noopener noreferrer">github.com/petrfalkovsky ↗</a>`],
      ["site", `<a href="{greentext}" target="_blank" rel="noopener noreferrer">greentext.ai ↗</a>`],
    ],
    hint: `Type <span class="accent">whoami</span> for the full story, or <span class="accent">greentext</span>, <span class="accent">projects</span>, <span class="accent">experience</span>, <span class="accent">cv</span> to go deeper.`,
  },

  about: {
    head: "About",
    paras: [
      "Hi, I'm a <b>Flutter developer with 6+ years of experience</b> in B2B and B2C mobile app development — and the founder of <b>Greentext AI</b>. I love creating cool visual features and refactoring my old code. In development, I enjoy seeing results and building beautiful, user-friendly, <b>pixel-perfect UIs</b>. I've worked in teams ranging from 3 to 50 people, with code reviews and git flow — and now I ship the output of a small team solo, working alongside AI agents.",
      "But the road here was anything but straight. I studied at the <b>Belarusian State Technological University</b> (Faculty of IT, Software Engineering) — and then life took a detour through more or less every business there is.",
      "I started as a <b>bodybuilding coach</b>. I competed myself — became the <b>absolute junior champion of the Chelyabinsk region</b> — and coached an athlete who took <b>4th place at the Eastern European Championship</b> in Yekaterinburg. Then came sales: financial products, raising investments into mutual funds and into real estate in Montenegro. That grew into founding my own <b>micro-fund managing money on securities markets</b>.",
      "After that: wholesale sales of alcohol and meat products. Then <b>SEO</b> — I built the promotion department at the <b>Webformat</b> web studio from scratch, then created a <b>network of websites</b> selling banner ads, SEO promotion and linkbuilding, then another network for <b>arbitrage traffic</b> with the <b>Leads Leader</b> affiliate program. At <b>i-Free</b> I scouted indie game studios with under-performing titles to acquire them and build an in-game ad network. Later I promoted sites to the <b>Canadian, US and European markets</b> at Ivanov SEO.",
      "The founder itch never went away: I built <b>Master Ninja</b> (a car-selection company), a workshop for <b>on-site smartphone repairs</b>, tried to launch a grocery-delivery service (a Samokat / Yandex Lavka analog — that one didn't take off), and raised investment from a <b>Latvian fund</b> for a coffee-delivery service and a coffee shop in the center of Saint Petersburg.",
      "Then, about six years ago, I fell in love with <b>programming</b> — and it stuck. My main stack is <b>Flutter</b>; around it: <b>Next.js, Go, Swift, Kotlin, Java</b>. Every business I ran before taught me something I use daily as a solo founder: sales, marketing, SEO, unit economics, hiring, and how to survive when a plan doesn't.",
      "In my spare time I run a lifestyle blog, play chess and basketball, learn Castilian Spanish, and spend time with my loved ones. I even have a cat — <b>Vaska</b>!",
    ],
    numsHead: "By the numbers",
    stats: [
      { v: "6+ yrs", l: "in software engineering" },
      { v: "10+", l: "businesses founded before code" },
      { v: "1", l: "Delaware C-corp (Greentext AI)" },
      { v: "4M MAU", l: "biggest product shipped to" },
      { v: "$1.2M MRR", l: "Walter Writes — dev lead" },
      { v: "1", l: "cat — Vaska" },
    ],
    hint: `Explore <span class="accent">greentext</span>, <span class="accent">projects</span>, <span class="accent">experience</span> or <span class="accent">skills</span> to go deeper.`,
  },

  greentext: {
    head: "Greentext AI",
    lead: "Greentext AI is an AI text humanizer &amp; detector — a live product with paying users, built and operated end to end by one engineer. I researched the market, incorporated in Delaware, opened banking, built the product across mobile, web, backend and ML, and run growth myself. One application on Flutter covers Web, iOS and Android from a single codebase.",
    kv: [
      ["product", "Flutter Web + iOS + Android: Google / Apple / email auth, Cloudflare Turnstile, subscription tiers, full-screen editors, admin panel."],
      ["backend", "Go: REST API, PostgreSQL, Redis, migrations, rate limiting, trial mechanics with escalating cooldowns, anti-abuse device fingerprinting."],
      ["ML", "Custom detector: fine-tuned RoBERTa on adversarial data (RAID + paraphrase pairs), ensemble with stylometry and Binoculars, sentence-level highlighting — catches texts that pass Sapling / Winston."],
      ["billing", "Stripe: subscriptions, metered word overage, webhooks, idempotency, server-side conversions; backup merchant-of-record switchable via config."],
      ["growth", "Next.js SEO site + a factory of 1,500+ programmatic ad landing pages (5 hero layouts × 12 palettes, personalized by Google Ads utm_term). GA4 + GTM + Measurement Protocol, end-to-end gclid/UTM attribution from ad click to purchase."],
      ["infra", "AWS EC2, Docker Compose, GitHub Actions CI/CD (staging + prod), Cloudflare, transactional email, Sentry, admin dashboards (funnels, MRR, API balances)."],
      ["company", "US Delaware C-corp, business banking, ready to work with US clients and partners directly."],
    ],
    btn: "Visit greentext.ai ↗",
  },

  projects: {
    headOwn: "Products built from scratch",
    own: [
      { name: "Greentext AI", sub: "founder · solo engineer", desc: "AI text humanizer & detector. Flutter + Go + Next.js + custom ML. Live, with paying users.", link: "greentext" },
      { name: "Walter Writes AI", sub: "iOS · Android · $1.2M MRR", desc: "AI humanizer built for <b>Walter IA Inc.</b> (US). I assembled the team and led development of both mobile apps; shipped on the App Store and Google Play, the product now runs at $1.2M MRR.", link: "walter" },
      { name: "20mm", sub: "ERP system · AI roll-up", desc: "ERP system for a turnkey stone interiors company: a quote in 15 minutes instead of 3–4 hours, stone selections from a photo in 10 minutes, contract and production documents in 20 minutes. One manager handles 150–200 clients a month instead of 25–30; revenue grew from 3M to 8M RUB a month.", link: "mm" },
      { name: "Erlesen", sub: "iOS · Android", desc: "Kurzgeschichten — a short-stories reading app for the German market, built and published solo.", link: "erlesen" },
      { name: "AI Clean Up — Phone Cleaner", sub: "iOS", desc: "AI-powered phone-cleaning utility: duplicates, similar photos, storage insights. Live on the App Store.", link: "aicleaner" },
      { name: "IPTV Player", sub: "utility", desc: "IPTV player app: playlists, EPG, favorites.", link: null },
    ],
    headContrib: "Contributed to",
    contrib: [
      { name: "JewBuzz", sub: "iOS · Android", desc: "Dating & community app with tens of thousands of MAU, actively expanding into LatAm markets.", link: "jewbuzz" },
      { name: "Grand Mobile", sub: "4M MAU", desc: "Mobile life-simulator game — shipped the iOS release (Java → Flutter port) in 10 months.", link: "grand" },
      { name: "Gapopa messenger", sub: "open source", desc: "Open-source messenger (Singapore): BloC, GraphQL, FFI, Gherkin, CI/CD.", link: "gapopa" },
    ],
  },

  experience: {
    head: "Engineering career",
    current: "current",
    items: [
      { mono: "M", current: true, when: "Jul 2025 — now", meta: "mercadolibre.com · Buenos Aires",
        role: "<b>UX Expert - Software</b> · Mercado Pago (MercadoLibre) — e-commerce & fintech in LatAm",
        note: "Product and interaction design of Mercado Pago payment and profile flows, turned into stable production code: design-system components in HTML, CSS, TypeScript and component frameworks (React, Flutter), with accessibility and performance as acceptance criteria. Generative AI in the design → code loop: generating interface variants from design tokens, AI review of layouts against design and a11y, generated UI tests. Built and evaluated agentic workflows — context, tools, instructions, safety boundaries — for internal seller tools and the courier logistics app.", tag: "current" },
      { mono: "G", current: true, when: "2026 — now", meta: "greentext.ai",
        role: "<b>Founder / Solo Engineer</b> · Greentext AI",
        note: "AI text humanizer & detector. Built and operate the entire stack: Flutter apps, Go backend, Next.js SEO site, custom ML detector, Stripe billing, AWS infra, growth analytics. Live product with paying users.", tag: "current" },
      { mono: "W", current: true, when: "Oct 2025 — now", meta: "Greentext AI Inc. · USA",
        role: "<b>Lead Mobile Developer</b> · Walter Writes AI for Walter IA Inc.",
        note: "iOS and Android apps for a US client: humanizer, detector, offline history, 10 languages, IAP subscriptions with server-side verification. I hired and led the team; the app is at $1.2M MRR. AI workflow: test-first loop — tests from the OpenAPI contract, the agent confirms they fail, then implements until green; unit and bloc tests as a verification layer; agent never sees production keys." },
      { mono: "E", when: "Jan 2026 — Jun 2026", meta: "Greentext AI Inc. · USA",
        role: "<b>Flutter Developer</b> · Erlesen — short-story reader for Germany",
        note: "Reading and focus modes, background audio, offline library (Drift), RevenueCat subscriptions, Firebase, deep links. AI workflow: context engineering — CLAUDE.md rules plus a code knowledge graph over MCP; the agent checks blast radius and test coverage before editing; explore → plan → code → verify; risk-scored diff review before I accept." },
      { mono: "A", when: "Oct 2025 — Jan 2026", meta: "Greentext AI Inc. · USA",
        role: "<b>Flutter Developer</b> · AI Clean Up — iOS photo cleaner",
        note: "Perceptual-hash similar photos, blur detection (Laplacian + Apple Vision), duplicates, videos; native iOS 26 views via Pigeon. AI workflow: spec-driven — the tech spec and phases are the agent’s contract; the agent commits under its own git author (46 of 72 commits), so every change is traceable and revertible; human acceptance per phase on a real device." },
      { mono: "J", when: "Mar 2025 — Jun 2026", meta: "Greentext AI Inc. · USA",
        role: "<b>Flutter Developer</b> · JewBuzz Love — dating app, LatAm expansion",
        note: "As part of the team: real-time chats (Amity, Socket.IO, MQTT), discovery modes, in-app purchases, deep links, dev/preprod/prod flavors. AI workflow on a large codebase: read-only exploration and a plan first, small PRs through the team’s review, orchestrator-workers with parallel subagents, an automated gate (analyze + all-flavor builds) before a human sees the change." },
      { mono: "2", when: "Apr 2026 — Oct 2026", meta: "20mm · Moscow",
        role: "<b>Fullstack Developer</b> · 20mm — AI roll-up of turnkey stone interiors",
        note: "ERP system from design to release: one manager handles 150–200 clients a month instead of 25–30, revenue grew from 3M to 8M RUB a month with no significant new costs. Quote in 15 minutes instead of 3–4 hours, stone selections from a photo in 10 minutes instead of 4–5 hours, contract and production documents in 20 minutes instead of 2–3 hours. Team — 1 engineer + AI agents on Claude Fable 5. Next.js · TypeScript · PostgreSQL · Go · Flutter." },
      { mono: "S", when: "≈2025",
        role: "<b>Co-Founder</b> · Sylvent — SMB lending fintech",
        note: "Co-founded a small-business lending platform: built the MVP, validated the product hypothesis, ran investor negotiations. The round didn't close — the project was shut down honestly. Takeaways: fundraising process, credit-product unit economics, fast hypothesis testing." },
      { mono: "▶", when: "Aug 2024 — Jul 2025", meta: "grnd.game · 50+ people",
        role: "<b>Flutter Developer</b> · Grand Mobile (4M MAU game)",
        note: "Shipped the iOS release (Java → Flutter port) in 10 months; 30+ Figma screens; client logic for 40+ interfaces and game modules; C++ backend contracts (RakNet::BitStream, RPC). Stack: Bloc · Dio · Retrofit · Clean Architecture · GoRouter." },
      { mono: "T", when: "Feb 2023 — Jun 2024", meta: "tn-group.net",
        role: "<b>Flutter Developer</b> · TN-GROUP — field-service ERP",
        note: "Maintained 4 client apps on ERP-Aurora: 20+ bug fixes, 5 features, SSO WebView browser; offline-first for legacy Android devices. Stack: Bloc · MobX · SQLite · Drift · Hive." },
      { mono: "D", when: "May 2022 — Jan 2023", meta: "dolinger",
        role: "<b>Flutter Developer</b> · Dolinger — food-delivery white-label",
        note: "Maintained 70+ apps; payment & maps SDK integrations; Firebase messaging, deeplinks; introduced a Contribution Guide and Gitflow; App Store / Google Play releases." },
      { mono: "⌥", when: "Jan 2021 — Jun 2024", meta: "github.com/petrfalkovsky",
        role: "<b>Flutter Developer</b> · Open source & contract work",
        note: "Gapopa messenger (open source) · Kaif Games (Dubai): 12 game interfaces, platform channels · Laskino Park (iOS residential app) · VIBE GAMES (Kazakhstan) · Toxicity · Athina Plus." },
    ],
    beforeHead: "Before code — the founder decade",
    beforeKv: [
      ["sport", "Bodybuilding coach; absolute junior champion of the Chelyabinsk region; coached an athlete to 4th at the Eastern European Championship."],
      ["finance", "Sales of financial products, investments into mutual funds and Montenegro real estate; founded a micro-fund on securities markets."],
      ["SEO & traffic", "Built the SEO department at Webformat; networks of sites for banner ads, linkbuilding and arbitrage traffic; Leads Leader affiliate program; promotion to US/CA/EU markets."],
      ["paid social", "Facebook and Instagram targeted ads: built an entire client base for businesses in Saint Petersburg through this channel — from first test to a steady flow of leads."],
      ["paid search", "Search ads in a highly competitive US niche: 1,200 keywords, dynamic query-matched headlines, rapid landing-page A/B testing. CPC from $2.50 down to $0.90, lead conversion from 7% to 18%."],
      ["ventures", "Master Ninja (car selection), on-site smartphone repair workshop, grocery-delivery attempt, coffee delivery + coffee shop in St. Petersburg funded by a Latvian fund."],
    ],
    eduName: "Belarusian State Technological University, Minsk",
    eduMeta: "Faculty of IT · Software Engineering",
  },

  skills: {
    head: "Key skills",
    focus: [
      "UX · interaction design · design systems · TypeScript · a11y",
      "Flutter · Dart · Bloc · Clean Architecture",
      "Go · PostgreSQL · Redis · REST",
      "Next.js · React · SEO engineering",
      "Swift · Kotlin · Java · Platform Channels · FFI",
      "Stripe billing · webhooks · idempotency",
      "AWS · Docker · GitHub Actions CI/CD · Cloudflare",
      "PyTorch fine-tuning · ML ensembles",
      "GA4 / GTM · attribution · CRO",
      "Google Ads · Meta Ads · semantic SEO",
      "Playwright · Widget / Integration / Unit tests",
    ],
    headAI: "AI-native engineering (2025–2026)",
    kv: [
      ["agentic dev", "Claude Code & similar: full-context task briefs, autonomous multi-hour sessions, parallel agents, overnight ML training runs with checkpoints and control protocols."],
      ["memory", "Persistent file-based memory systems, codeword pipelines, «lessons learned» as executable rules — secret-rotation order, honest-testing protocols, deploy checklists."],
      ["verification", "Agents build the app, run Playwright scenarios, verify API / DB / payments end-to-end before reporting."],
      ["safety", "Privilege separation (agents never commit / deploy), single sources of truth (prices and limits in DB, not code), contract tests against front↔back drift."],
      ["LLM eng", "Transformer fine-tuning (MPS / GPU), adversarial datasets, ensembles & calibration, cost engineering of external AI APIs."],
      ["trust ladder", "After Anthropic’s «Building Effective Agents»: simplest thing first — a single call or a workflow (chaining, routing, evaluator-optimizer); agent autonomy only when that falls short. Trust grows as verification layers pass: tests, linters, a reviewer agent, hooks, manual acceptance. Tools designed as an agent-computer interface, allowlisted permissions, irreversible actions through a human only."],
      ["performance ads", "Google Ads and Meta Ads end-to-end: 1,200+ keyword semantics, dynamic headlines, landing A/B tests in batches, full click → lead → payment attribution. Result: CPC $2.50 → $0.90, conversion 7% → 18%."],
      ["SEO", "15 years in search: built a promotion department from zero, ran site networks and arbitrage traffic, took projects into US / Canada / EU markets. Today: programmatic SEO — semantic clustering, templated long-tail landings, E-E-A-T and internal linking as code."],
      ["growth", "1,500+ unique landing pages, semantic SEO, E-E-A-T content pipelines, automated CRO scoring."],
    ],
  },

  cv: {
    head: "Download CV",
    lead: "Flutter Developer · Full-Stack Product Engineer · AI-first Builder. Pick a version:",
    items: [
      { name: "CV (eng) short version, highlights", sub: "PDF", desc: "One page: highlights.", href: "cv/Peter_Parker_CV_Short_US.pdf" },
      { name: "CV (eng) full version", sub: "PDF", desc: "All experience, projects and stack in detail.", href: "cv/Peter_Parker_CV_US.pdf" },
    ],
    btn1: "Download CV (eng) ↗",
  },

  contact: {
    lead: "Building Greentext AI. Open to US companies (via my own Delaware C-corp), investors, partners and interesting Flutter / full-stack work.",
    kv: [
      ["email", `<a href="mailto:{email}">{email}</a>`],
      ["github", `<a href="{github}" target="_blank" rel="noopener noreferrer">github.com/petrfalkovsky ↗</a>`],
      ["whatsapp", `<a href="{whatsapp}" target="_blank" rel="noopener noreferrer">+54 11 2766-7104 ↗</a>`],
      ["site", `<a href="{greentext}" target="_blank" rel="noopener noreferrer">greentext.ai ↗</a>`],
      ["based", "<b>Buenos Aires, Argentina</b> · remote"],
      ["languages", "Spanish (Castellano, B1) · Russian · by ear: Ukrainian, Belarusian, English, Portuguese, Italian"],
    ],
  },

  apps: {
    "head": "All projects",
    "users": "Users",
    "site": "Site",
    "iosOnly": "— (iOS only)",
    "web": "— (web app)",
    "items": [
      {
        "name": "Walter Writes AI",
        "lines": [
          "AI text humanizer and detector for Walter IA Inc. (USA).",
          "Led development from scratch."
        ],
        "users": "$1.2M MRR product",
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
          "Short-story reader for the German market: audio versions, offline library, subscriptions."
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
          "iOS photo library cleaner: similar and blurry photos, duplicates, large videos."
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
          "Dating for the Jewish community: real-time chats, map, roulette, blind dates."
        ],
        "users": "10K+ MAU",
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
          "Mobile role-playing game, life simulator; ported the iOS version from Java to Flutter."
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
          "Mobile RP game by Kaif Games (Dubai); built and wired 12 interfaces."
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
          "Multiplayer mobile RP game; built 3 complex interfaces."
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
          "A tool for US students to check essays and humanize AI text: AI text humanizer and detector, Flutter (Web, iOS, Android) + Go + custom ML model."
        ],
        "links": [
          [
            "site",
            "greentextApp"
          ]
        ]
      },
      {
        "name": "20mm ERP system",
        "lines": [
          "AI roll-up of a turnkey stone interiors company.",
          "Lets one manager handle 150–200 clients a month instead of 25–30. Grew company revenue from 3M to 8M RUB a month with no significant new costs."
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
          "Open-source messenger; my commits were merged into the main repository."
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
    head: "Commands",
    cmds: [
      ["whoami", "the full story"],
      ["greentext", "the flagship product"],
      ["projects", "everything shipped"],
      ["apps", "every app, with store links"],
      ["experience", "engineering career"],
      ["skills", "stack & AI-native engineering"],
      ["cv", "download the CV"],
      ["contact", "email and links"],
      ["clear", "wipe the screen"],
    ],
  },

  unknown: {
    notFound: `command not found: <span class="muted">{cmd}</span>`,
    hint: `Try <span class="accent">help</span> for the list, or ask about <span class="accent">greentext</span> and <span class="accent">projects</span>.`,
  },
};
