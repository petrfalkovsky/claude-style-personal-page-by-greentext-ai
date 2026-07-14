/* =========================================================================
   Peter Parker — terminal portfolio: i18n
   Picks the active locale (en / ru / es) from ?lang= → localStorage →
   navigator.language, exposes window.LANG + window.T, renders the
   language switcher in the titlebar. Locales live in js/locales/*.js.
   ========================================================================= */

(() => {
  "use strict";

  const SUPPORTED = ["en", "ru", "es"];

  const url = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("lang");
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();

  const lang =
    (SUPPORTED.includes(url) && url) ||
    (SUPPORTED.includes(saved) && saved) ||
    (SUPPORTED.includes(nav) && nav) ||
    "en";

  if (url && SUPPORTED.includes(url)) localStorage.setItem("lang", url);

  window.LANG = lang;
  // Locales are loaded after this file; resolve lazily.
  window.T = () => window.LOCALES[lang] || window.LOCALES.en;

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = lang;

    const T = window.T();
    const input = document.getElementById("input");
    if (input) input.placeholder = T.meta.placeholder;

    const hire = document.getElementById("hire-btn");
    if (hire && T.meta.hire) hire.textContent = T.meta.hire;

    const bar = document.getElementById("langbar");
    if (!bar) return;

    const switchTo = (l) => {
      if (l === lang) return;
      localStorage.setItem("lang", l);
      const u = new URL(location.href);
      u.searchParams.set("lang", l);
      location.href = u.toString();
    };

    // Единственная кнопка текущего языка, по тапу выпадают остальные —
    // одинаково на десктопе и мобильных.
    const dd = document.createElement("div");
    dd.className = "lang-dd";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "lang-btn active lang-dd-toggle";
    toggle.textContent = lang.toUpperCase() + " ▾";
    toggle.setAttribute("aria-haspopup", "listbox");
    toggle.setAttribute("aria-expanded", "false");
    const menu = document.createElement("div");
    menu.className = "lang-dd-menu";
    menu.setAttribute("role", "listbox");
    for (const l of SUPPORTED) {
      if (l === lang) continue;
      const item = document.createElement("button");
      item.type = "button";
      item.className = "lang-btn lang-dd-item";
      item.textContent = l.toUpperCase();
      item.setAttribute("role", "option");
      item.addEventListener("click", () => switchTo(l));
      menu.appendChild(item);
    }
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", () => {
      dd.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
    dd.appendChild(toggle);
    dd.appendChild(menu);
    bar.appendChild(dd);
  });
})();
