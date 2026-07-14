# claude-style personal page — by Greentext AI

> An interactive terminal-style portfolio in pure HTML/CSS/JS. No frameworks, no build step, no dependencies. ~1,400 lines total.

**Live demo → [peter.greentext.ai](https://peter.greentext.ai)**

```
peter@greentext:~$ whoami
Solo founder shipping Greentext AI — Flutter, Go, and my own ML models.
peter@greentext:~$ help
  whoami      who is this guy
  projects    what he has built
  greentext   the flagship product
  stack       tools he actually uses
  cv          download the résumé (EN/RU/ES)
  contact     say hi
  clear       you know what this does
```

## Why this exists

Every developer portfolio looks the same: hero section, three cards, a contact form. I wanted mine to feel like the place where I actually live — a terminal. Type commands, get answers. That's it.

It also doubles as a template: all content lives in one file, all strings in locale files. Fork it, replace the words, deploy anywhere that serves static files.

## Features

- **Real command input** with history (↑/↓), autocomplete chips, and an animated boot sequence
- **Zero dependencies** — no React, no bundler, no npm. `python3 -m http.server` is the whole dev environment
- **i18n out of the box** — English, Russian, Spanish; adding a language = one file in `js/locales/`
- **neofetch-style intro card**, CRT scanlines, typing animation — all CSS/vanilla JS
- **Accessible by default** — respects `prefers-reduced-motion`, works without JS beyond the terminal itself, mobile-adapted
- **CV pipeline included** — printable HTML sources that render to PDF in three languages

## Structure

```
site/
├── index.html          markup: terminal frame, chips, composer
├── css/
│   ├── base.css        theme tokens, background, scanlines
│   ├── terminal.css    terminal frame, titlebar, banner
│   ├── components.css  neofetch card, bio, charts
│   ├── content.css     timeline, tables, kv-blocks
│   ├── input.css       chips + input line
│   └── responsive.css  mobile + reduced-motion
├── js/
│   ├── engine.js       the terminal: input, history, animations, boot
│   ├── content.js      structure of every "command output" (no strings)
│   ├── i18n.js + locales/{en,ru,es}.js   all text lives here
│   └── ui.js           DOM helpers
├── assets/             portrait
└── cv/                 printable CV sources + PDFs (EN/RU/ES)
```

The separation is deliberate: **engine** knows nothing about content, **content** knows nothing about words. To make this portfolio yours, you edit `js/locales/*.js` and never touch the engine.

## Run locally

```bash
git clone https://github.com/petrfalkovsky/claude-style-personal-page-by-greentext-ai
cd claude-style-personal-page-by-greentext-ai
python3 -m http.server 8000
# open http://localhost:8000
```

No install step. That's the point.

## Deploy

Any static hosting works: GitHub Pages, Netlify, Vercel, an S3 bucket.
For the classic nginx route there's `deploy/deploy.example.sh` and
`deploy/example.nginx.conf` — replace the host/paths with yours.

## Make it yours

1. Replace strings in `js/locales/en.js` (bio, projects, contacts)
2. Swap `assets/peter.jpg` for your face
3. Adjust theme tokens in `css/base.css` (one block of CSS variables)
4. Deploy: any static hosting works — GitHub Pages, Netlify, nginx, an S3 bucket

## Built by

**Peter Parker** — solo founder of [Greentext AI](https://greentext.ai), an AI text humanizer & detector (Flutter web/iOS/Android + Go + own ML models in production).

- Portfolio: [peter.greentext.ai](https://peter.greentext.ai)
- Product: [greentext.ai](https://greentext.ai)
- LinkedIn: [linkedin.com/in/peterparker-solopreneur](https://www.linkedin.com/in/peterparker-solopreneur/)

## License

MIT — take it, ship it, no attribution required (though a star is appreciated ⭐).
