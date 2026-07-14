/* =========================================================================
   Peter Parker — terminal portfolio: engine
   Pure vanilla JS. Rendering, typing animation, input, history, boot.
   Content and commands come from window.Portfolio (content.js).
   ========================================================================= */

(() => {
  "use strict";

  const screen   = document.getElementById("screen");
  const input    = document.getElementById("input");
  const composer = document.getElementById("composer");
  const chipsBar = document.getElementById("chips");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { el } = window.PortfolioUI;
  const P = window.Portfolio;

  const history = [];
  let histIdx = -1;
  let busy = false;

  const scrollDown = () => { screen.scrollTop = screen.scrollHeight; };
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  // Charts (.chart / .statband) animate when scrolled into view.
  const VIZ_SEL = ".chart, .statband";
  const vizIO = ("IntersectionObserver" in window)
    ? new IntersectionObserver((ents) => {
        for (const e of ents) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); vizIO.unobserve(e.target); }
        }
      }, { root: null, threshold: 0.22 })
    : null;
  const observeViz = (root) => {
    root.querySelectorAll(VIZ_SEL).forEach((n) => {
      if (vizIO) vizIO.observe(n); else n.classList.add("is-in");
    });
  };

  function loadPortrait() {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = () => resolve();
      img.src = "assets/peter.jpg";
    });
  }

  /* ---------------------------------------------------------------------
     Rendering an exchange
     --------------------------------------------------------------------- */
  function addCommandLine(text, { typed = false } = {}) {
    const entry = el("div", "entry");
    const line = el("div", "cmd-line");
    line.appendChild(el("span", "caret", "❯"));
    const cmd = el("span", "cmd");
    line.appendChild(cmd);
    entry.appendChild(line);
    screen.appendChild(entry);
    scrollDown();
    if (!typed || reduceMotion) { cmd.textContent = text; return Promise.resolve(entry); }
    return new Promise((resolve) => {
      const cursor = el("span", "cursor");
      cmd.appendChild(cursor);
      let i = 0;
      const step = () => {
        if (i <= text.length) {
          cursor.remove();
          cmd.textContent = text.slice(0, i);
          cmd.appendChild(cursor);
          i++; scrollDown();
          setTimeout(step, 40 + Math.random() * 45);
        } else { cursor.remove(); cmd.textContent = text; resolve(entry); }
      };
      step();
    });
  }

  async function addResponse(entry, builder, { think = true } = {}) {
    const resp = el("div", "resp");
    entry.appendChild(resp);

    const anchored = !!entry.querySelector(".cmd-line");
    const intoView = () => {
      if (anchored) entry.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      else scrollDown();
    };
    intoView();

    if (think && !reduceMotion) {
      const t = el("div", "thinking");
      t.innerHTML = `<span class="sigil">✻</span><span>Working</span><span class="dots"><span></span><span></span><span></span></span>`;
      resp.appendChild(t);
      intoView();
      await wait(340 + Math.random() * 260);
      t.remove();
    }

    const holder = el("div", "reveal");
    holder.appendChild(el("span", "sigil", "✻"));
    holder.appendChild(builder());
    resp.appendChild(holder);
    observeViz(holder);
    intoView();

    if (reduceMotion) return;
    const total = streamReveal(holder);
    if (total) await wait(total);
  }

  // Word-by-word reveal of the response.
  function streamReveal(holder) {
    const tokens = [];
    const isMedia = (n) =>
      n.matches && n.matches("img, canvas, svg, .shot, .portrait-frame, .bio-shot, .chart, .statband");

    (function collect(node) {
      for (const child of Array.from(node.childNodes)) {
        if (child.nodeType === 3) {
          if (!/\S/.test(child.textContent)) continue;
          const frag = document.createDocumentFragment();
          for (const part of child.textContent.split(/(\s+)/)) {
            if (part === "") continue;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); continue; }
            const s = el("span", "w");
            s.textContent = part;
            frag.appendChild(s);
            tokens.push(s);
          }
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          if (child.classList && child.classList.contains("sigil")) continue;
          if (isMedia(child)) { child.classList.add("tok-media"); tokens.push(child); }
          else collect(child);
        }
      }
    })(holder);

    if (!tokens.length) return 0;
    const per = 28, cap = 4000;
    tokens.forEach((t, i) => { t.style.animationDelay = Math.min(i * per, cap) + "ms"; });
    return Math.min((tokens.length - 1) * per, cap) + 320;
  }

  async function run(raw, { typed = false } = {}) {
    if (busy) return;
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    busy = true;
    setChipsEnabled(false);

    if (cmd === "clear" || cmd === "cls") {
      await addCommandLine(raw, { typed });
      screen.innerHTML = "";
      busy = false; setChipsEnabled(true); input.focus();
      return;
    }

    const entry = await addCommandLine(raw, { typed });
    const builder = P.commands[cmd] || (() => P.unknown(cmd));
    await addResponse(entry, builder);

    busy = false; setChipsEnabled(true); input.focus();
  }

  /* ---------------------------------------------------------------------
     Chips
     --------------------------------------------------------------------- */
  function setChipsEnabled(on) {
    chipsBar.querySelectorAll(".chip").forEach((c) => { c.disabled = !on; c.style.opacity = on ? "" : "0.5"; });
  }
  function buildChips() {
    for (const c of P.chips) {
      const b = el("button", "chip", c);
      b.type = "button";
      b.addEventListener("click", () => { if (!busy) run(c); });
      chipsBar.appendChild(b);
    }
  }

  /* ---------------------------------------------------------------------
     Input + history
     --------------------------------------------------------------------- */
  composer.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value;
    if (!v.trim() || busy) return;
    history.push(v.trim());
    histIdx = history.length;
    input.value = "";
    run(v);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (histIdx > 0) { histIdx--; input.value = history[histIdx]; queueMicrotask(() => input.setSelectionRange(input.value.length, input.value.length)); }
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx]; }
      else { histIdx = history.length; input.value = ""; }
      e.preventDefault();
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault(); screen.innerHTML = "";
    }
  });

  document.addEventListener("click", (e) => {
    if (busy) return;
    const t = e.target;
    if (t.closest("a, button, input")) return;
    if (window.getSelection && String(window.getSelection())) return;
    input.focus();
  });

  /* ---------------------------------------------------------------------
     Boot sequence
     --------------------------------------------------------------------- */
  function typeInto(node, text, speed = 34) {
    return new Promise((resolve) => {
      if (reduceMotion) { node.textContent = text; return resolve(); }
      const cursor = el("span", "cursor");
      node.appendChild(cursor);
      let i = 0;
      const step = () => {
        if (i <= text.length) {
          cursor.remove();
          node.textContent = text.slice(0, i);
          node.appendChild(cursor);
          i++; scrollDown();
          setTimeout(step, speed + Math.random() * 30);
        } else { cursor.remove(); node.textContent = text; resolve(); }
      };
      step();
    });
  }

  async function shellLine(promptHTML, command) {
    const line = el("div", "shell");
    line.innerHTML = promptHTML;
    const cmd = el("span", "scmd");
    line.appendChild(cmd);
    screen.appendChild(line);
    scrollDown();
    await typeInto(cmd, command);
    await wait(reduceMotion ? 0 : 180);
  }

  function bootBox() {
    const entry = el("div", "entry");
    const art = el("pre", "ascii");
    art.textContent = P.banner.ascii.join("\n");
    entry.appendChild(art);

    const banner = el("div", "banner");
    banner.innerHTML = `
      <div class="b-title"><span class="sigil">✻</span>${P.banner.title}</div>
      <div class="b-sub">${P.banner.sub}</div>
    `;
    entry.appendChild(banner);
    screen.appendChild(entry);
    scrollDown();
  }

  async function boot() {
    buildChips();
    await loadPortrait();
    await wait(reduceMotion ? 0 : 300);
    await shellLine(`<span class="sp">${P.banner.shellUser}</span><span class="sdir">~</span>`, "cd " + P.banner.shellDir);
    await shellLine(`<span class="sp">${P.banner.shellUser}</span><span class="sdir">${P.banner.shellDir}</span>`, P.banner.shellCmd);
    await wait(reduceMotion ? 0 : 220);
    bootBox();
    await wait(reduceMotion ? 0 : 420);
    const entry = el("div", "entry");
    screen.appendChild(entry);
    await addResponse(entry, P.intro);
  }

  boot();
})();
