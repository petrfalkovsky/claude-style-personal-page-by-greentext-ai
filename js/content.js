/* =========================================================================
   Peter Parker — terminal portfolio: content
   Builders read every string from the active locale (window.T(), see
   i18n.js + js/locales/*.js). Only structure and links live here.
   ========================================================================= */

(() => {
  "use strict";

  const LINKS = {
    email:     "peterparker.developer@gmail.com",
    github:    "https://github.com/petrfalkovsky",
    greentext: "https://greentext.ai",
    erlesen:   "https://apps.apple.com/de/app/erlesen-kurzgeschichten/id6758106904",
    aicleaner: "https://apps.apple.com/ar/app/ai-clean-up-phone-cleaner/id6754924948?l=en-GB",
    jewbuzz:   "https://play.google.com/store/apps/details?id=com.it.jewbuzz_love",
    grand:     "https://grnd.game",
    gapopa:    "https://gapopa.com",
    walter:    "https://apps.apple.com/us/app/walter-writes-ai-humanizer/id6757705138",
    walterGP:  "https://play.google.com/store/apps/details?id=com.walterwrites&hl=en",
    whatsapp:  "https://wa.me/541127667104",
    erlesenGP: "https://play.google.com/store/apps/details?id=it.app.erlesen",
    jewbuzzAS: "https://apps.apple.com/us/app/jewbuzz-love/id6446214897",
    grandAS:   "https://apps.apple.com/us/app/grand-mobile-role-play-online/id6741001464",
    grandGP:   "https://play.google.com/store/apps/details?id=com.grand.launcher",
    rusGP:     "https://play.google.com/store/apps/details?id=com.russia.game",
    matrAS:    "https://apps.apple.com/us/app/matreshka-rp-multiplayer-city/id6474574017",
    matrGP:    "https://play.google.com/store/apps/details?id=com.jekmant.matrplauncher",
    greentextApp: "https://app.greentext.ai/",
    mm:        "https://20-mm.ru",
    gapopaGH:  "https://github.com/team113/messenger",
  };

  const { el, kvBlock, productTable, goButton, statBand, expItem, mountPortrait } = window.PortfolioUI;

  // Substitute {email}, {github}, ... placeholders in locale strings.
  const fill = (s) => s.replace(/\{(\w+)\}/g, (m, k) => LINKS[k] ?? m);
  const fillKv = (rows) => rows.map(([k, v]) => [k, fill(v)]);

  /* ---------------------------------------------------------------------
     Boot card — portrait + quick facts
     --------------------------------------------------------------------- */
  function buildCard() {
    const T = window.T();
    const wrap = el("div");
    const nf = el("div", "neofetch");

    const frame = el("div", "portrait-frame");
    mountPortrait(frame);
    nf.appendChild(frame);

    const info = el("div", "nf-info");
    info.appendChild(el("div", "nf-id", T.card.id));
    info.appendChild(el("div", "nf-rule"));
    info.appendChild(el("dl", "nf-rows",
      T.card.rows.map(([k, v]) => `<dt>${k}</dt><dd>${fill(v)}</dd>`).join("")));
    nf.appendChild(info);
    wrap.appendChild(nf);

    wrap.appendChild(el("div", "tline", `<div class="spacer"></div>` + T.card.hint));
    return wrap;
  }

  /* ---------------------------------------------------------------------
     whoami — the story
     --------------------------------------------------------------------- */
  function buildAbout() {
    const T = window.T();
    const wrap = el("div");
    const bio = el("div", "bio");
    bio.appendChild(el("div", "rhead", T.about.head));

    for (const para of T.about.paras) bio.appendChild(el("p", "bio-p", para));

    const nums = el("div", "viz-block");
    nums.appendChild(el("div", "rhead", T.about.numsHead));
    nums.appendChild(statBand(T.about.stats));
    bio.appendChild(nums);

    wrap.appendChild(bio);
    wrap.appendChild(el("div", "tline", `<div class="spacer"></div>` + T.about.hint));
    return wrap;
  }

  /* ---------------------------------------------------------------------
     greentext — the flagship
     --------------------------------------------------------------------- */
  function buildGreentext() {
    const T = window.T();
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", T.greentext.head));
    wrap.appendChild(el("div", "lead", T.greentext.lead));
    wrap.appendChild(el("div", "spacer"));
    wrap.appendChild(kvBlock(fillKv(T.greentext.kv)));
    const go = el("div", "go-row");
    go.appendChild(goButton(LINKS.greentext, T.greentext.btn));
    wrap.appendChild(go);
    return wrap;
  }

  /* ---------------------------------------------------------------------
     projects
     --------------------------------------------------------------------- */
  function buildProjects() {
    const T = window.T();
    const toRows = (items) => items.map((p) => ({
      name: p.name, sub: p.sub, desc: p.desc,
      href: p.link ? LINKS[p.link] : null,
    }));
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", T.projects.headOwn));
    wrap.appendChild(productTable(toRows(T.projects.own)));
    wrap.appendChild(el("div", "rhead", T.projects.headContrib));
    wrap.appendChild(productTable(toRows(T.projects.contrib)));
    return wrap;
  }

  /* ---------------------------------------------------------------------
     apps — every project with its store links
     --------------------------------------------------------------------- */
  function buildApps() {
    const T = window.T();
    const A = T.apps;
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", A.head));
    for (const p of A.items) {
      const rows = [`<b>${p.name}</b>`, ...p.lines];
      if (p.users) rows.push(`${A.users}: ${p.users}`);
      for (const [label, key, note] of p.links) {
        const name = label === "site" ? A.site : label;
        const url = key ? LINKS[key] : null;
        rows.push(url
          ? `${name}: <a href="${url}" target="_blank" rel="noopener noreferrer">${url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗</a>`
          : `${name}: ${A[note]}`);
      }
      wrap.appendChild(el("p", "bio-p", rows.join("<br>")));
    }
    return wrap;
  }

  /* ---------------------------------------------------------------------
     experience
     --------------------------------------------------------------------- */
  function buildExperience() {
    const T = window.T();
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", T.experience.head));
    const tl = el("div", "tl");
    for (const item of T.experience.items) tl.appendChild(expItem(item));
    wrap.appendChild(tl);

    wrap.appendChild(el("div", "rhead", T.experience.beforeHead));
    wrap.appendChild(kvBlock(T.experience.beforeKv));

    const edu = el("div", "tl-edu");
    edu.appendChild(el("div", "tl-logo mono", "🎓"));
    const e = el("div");
    e.appendChild(el("div", "e-name", T.experience.eduName));
    e.appendChild(el("div", "e-meta", T.experience.eduMeta));
    edu.appendChild(e);
    wrap.appendChild(edu);
    return wrap;
  }

  /* ---------------------------------------------------------------------
     skills
     --------------------------------------------------------------------- */
  function buildSkills() {
    const T = window.T();
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", T.skills.head));
    const focus = el("div", "focus");
    const fgrid = el("div", "focus-grid");
    T.skills.focus.forEach((f) => fgrid.appendChild(el("div", "focus-item", `<span class="fx">✦</span>${f}`)));
    focus.appendChild(fgrid);
    wrap.appendChild(focus);

    wrap.appendChild(el("div", "rhead", T.skills.headAI));
    wrap.appendChild(kvBlock(T.skills.kv));
    return wrap;
  }

  /* ---------------------------------------------------------------------
     cv — downloads
     --------------------------------------------------------------------- */
  function buildCv() {
    const T = window.T();
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", T.cv.head));
    wrap.appendChild(el("div", "lead", T.cv.lead));
    wrap.appendChild(el("div", "spacer"));
    wrap.appendChild(productTable(T.cv.items));
    const go = el("div", "go-row");
    go.appendChild(goButton("cv/Peter_Parker_CV_US.pdf", T.cv.btn1));
    wrap.appendChild(go);
    return wrap;
  }

  /* ---------------------------------------------------------------------
     contact
     --------------------------------------------------------------------- */
  function buildContact() {
    const T = window.T();
    const wrap = el("div");
    wrap.appendChild(el("div", "lead", T.contact.lead));
    wrap.appendChild(el("div", "spacer"));
    wrap.appendChild(kvBlock(fillKv(T.contact.kv)));
    return wrap;
  }

  /* ---------------------------------------------------------------------
     help / unknown
     --------------------------------------------------------------------- */
  function buildHelp() {
    const T = window.T();
    const wrap = el("div");
    wrap.appendChild(el("div", "rhead", T.help.head));
    const grid = el("div", "help-grid");
    for (const [c, d] of T.help.cmds) {
      const r = el("div", "help-row");
      r.appendChild(el("code", null, c));
      r.appendChild(el("span", null, d));
      grid.appendChild(r);
    }
    wrap.appendChild(grid);
    return wrap;
  }

  function buildUnknown(cmd) {
    const T = window.T();
    const esc = window.PortfolioUI.esc;
    const wrap = el("div");
    wrap.appendChild(el("div", "tline", T.unknown.notFound.replace("{cmd}", esc(cmd))));
    wrap.appendChild(el("div", "tline", T.unknown.hint));
    return wrap;
  }

  window.Portfolio = {
    intro: buildCard,
    commands: {
      whoami: buildAbout, about: buildAbout, peter: buildAbout, story: buildAbout,
      greentext: buildGreentext, product: buildGreentext, startup: buildGreentext,
      projects: buildProjects, portfolio: buildProjects,
      apps: buildApps, all: buildApps, stores: buildApps,
      experience: buildExperience, exp: buildExperience, work: buildExperience, career: buildExperience, education: buildExperience,
      skills: buildSkills, stack: buildSkills, ai: buildSkills,
      cv: buildCv, resume: buildCv, download: buildCv,
      contact: buildContact, links: buildContact, email: buildContact, hire: buildContact,
      help: buildHelp, "?": buildHelp, ls: buildHelp,
    },
    chips: ["whoami", "greentext", "projects", "apps", "experience", "skills", "cv", "contact"],
    unknown: buildUnknown,
    get banner() {
      const T = window.T();
      return {
        ascii: [
          "██████╗ ███████╗████████╗███████╗██████╗ ",
          "██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗",
          "██████╔╝█████╗     ██║   █████╗  ██████╔╝",
          "██╔═══╝ ██╔══╝     ██║   ██╔══╝  ██╔══██╗",
          "██║     ███████╗   ██║   ███████╗██║  ██║",
          "╚═╝     ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝",
        ],
        title: T.banner.title,
        sub: T.banner.sub,
        shellUser: "peter@macbook",
        shellDir: "/Users/peter",
        shellCmd: "peter",
      };
    },
  };
})();
