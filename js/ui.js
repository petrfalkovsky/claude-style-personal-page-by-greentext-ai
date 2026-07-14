/* =========================================================================
   Peter Parker — terminal portfolio: shared UI builders
   DOM helpers and reusable blocks (kv tables, product tables, charts,
   timeline items, portrait). No content in here.
   ========================================================================= */

(() => {
  "use strict";

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function mountPortrait(frame) {
    const img = el("img", "portrait-photo");
    img.src = "assets/peter.jpg";
    img.alt = "Portrait of Peter Parker";
    img.setAttribute("role", "img");
    frame.appendChild(img);
    frame.appendChild(el("span", "ptag", "peter.jpg"));
  }

  function kvBlock(rows) {
    const kv = el("div", "kv");
    for (const [k, v] of rows) {
      const r = el("div", "kv-row");
      r.appendChild(el("div", "kv-k", k));
      r.appendChild(el("div", "kv-v", v));
      kv.appendChild(r);
    }
    return kv;
  }

  function productTable(rows) {
    const t = el("div", "ptable");
    for (const p of rows) {
      const row = el(p.href ? "a" : "div", "prow");
      if (p.href) { row.href = p.href; row.target = "_blank"; row.rel = "noopener noreferrer"; }
      const name = el("div", "p-name", p.name + (p.sub ? `<span class="p-sub">${p.sub}</span>` : ""));
      row.appendChild(name);
      row.appendChild(el("div", "p-desc", p.desc));
      row.appendChild(el("div", "p-go", p.href ? "open ↗" : ""));
      t.appendChild(row);
    }
    return t;
  }

  function goButton(href, label, ghost) {
    const a = el("a", "btn-go" + (ghost ? " ghost" : ""), label);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }

  // A row of headline stat tiles. items: [{ v, l }]
  function statBand(items) {
    const b = el("div", "statband");
    for (const it of items) {
      const c = el("div", "stat");
      c.appendChild(el("div", "stat-v", it.v));
      c.appendChild(el("div", "stat-l", it.l));
      b.appendChild(c);
    }
    return b;
  }

  // Horizontal bar chart. bars: [{ lab, val (number), disp, hi }]
  function barChart({ title, sub, bars, source }) {
    const max = Math.max(...bars.map((b) => b.val)) || 1;
    const w = el("div", "chart");
    if (title) w.appendChild(el("div", "chart-head", title + (sub ? ` <span>${sub}</span>` : "")));
    const rows = el("div", "bars");
    bars.forEach((b, i) => {
      const row = el("div", "bar-row");
      row.appendChild(el("div", "bar-lab", b.lab));
      const track = el("div", "bar-track");
      const fill = el("div", "bar-fill" + (b.hi ? " hi" : ""));
      fill.style.setProperty("--w", (b.val / max * 100).toFixed(1) + "%");
      fill.style.transitionDelay = (i * 0.12).toFixed(2) + "s";
      track.appendChild(fill);
      row.appendChild(track);
      row.appendChild(el("div", "bar-val", b.disp));
      rows.appendChild(row);
    });
    w.appendChild(rows);
    if (source) w.appendChild(el("div", "chart-src", source));
    return w;
  }

  // Career timeline item.
  function expItem({ logo, logos, mono, current, when, meta, role, note, tag, link }) {
    const it = el("div", "tl-item");
    if (logos) {
      const l = el("div", "tl-logo duo");
      for (const src of logos) { const img = el("img"); img.src = src; img.alt = ""; l.appendChild(img); }
      it.appendChild(l);
    } else if (logo) {
      const l = el("div", "tl-logo");
      const img = el("img");
      img.src = logo; img.alt = "";
      l.appendChild(img);
      it.appendChild(l);
    } else {
      it.appendChild(el("div", "tl-logo mono" + (current ? " current" : ""), mono || "·"));
    }
    const w = el("div", "tl-when", when + (meta ? `<span class="tl-meta">${meta}</span>` : ""));
    it.appendChild(w);
    const body = el("div", "tl-body");
    body.appendChild(el("div", "tl-role", role));
    if (note) body.appendChild(el("div", "tl-note", note));
    if (tag || link) {
      const tags = el("div", "tl-tags");
      if (tag) tags.appendChild(el("span", "tl-tag", tag));
      if (link) {
        const a = el("a", "tl-tag tl-link", esc(link.label) + '<span class="tl-link-arrow">↗</span>');
        a.href = link.href; a.target = "_blank"; a.rel = "noopener noreferrer";
        tags.appendChild(a);
      }
      body.appendChild(tags);
    }
    it.appendChild(body);
    return it;
  }

  window.PortfolioUI = { el, esc, mountPortrait, kvBlock, productTable, goButton, statBand, barChart, expItem };
})();
