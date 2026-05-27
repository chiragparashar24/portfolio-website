# Chirag Parashar — Portfolio Website

A world-class, recruiter-focused personal portfolio built with **pure HTML, CSS & JavaScript** — no frameworks, no build tools, no dependencies.

> **Tagline:** Building Intelligent Solutions with AI, Data & Code.

---

## Live Demo

Open `index.html` in any modern browser, or deploy to GitHub Pages / Netlify / Vercel as a static site.

---

## Features

- **Modern dark theme** with glassmorphism, gradient mesh, and animated particle background
- **Animated sliding sections** — scroll-reveal, slide-in-left/right transitions
- **Typing animation** cycling through roles (AI/ML Engineer, Python Developer, etc.)
- **Sticky navbar** with active-section indicator and responsive mobile drawer
- **12 recruiter-focused sections:** Hero, About, Skills, Experience, Projects, Achievements, Leadership, Certifications, GitHub Stats, Blog, Testimonials, Contact
- **Filterable + searchable projects** grid
- **Animated skill progress bars** and achievement counters
- **Dark/Light theme toggle** (persisted in localStorage)
- **Validated contact form** with mailto fallback
- **Live GitHub stats** fetched from the public API
- **Back-to-top button** and loading screen
- **Fully responsive** — mobile-first design
- **Accessible** — semantic HTML, focus styles, reduced-motion support
- **SEO optimized** — Open Graph, Twitter Cards, JSON-LD structured data

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Interactivity | Vanilla JavaScript (ES6+, IntersectionObserver) |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Google Fonts — Inter, Space Grotesk, JetBrains Mono |

**Zero dependencies. Zero build step. Just open and ship.**

---

## File Structure

```
portfolio-website/
├── index.html          ← The entire portfolio (single page)
├── style.css           ← All styles (~700 lines)
├── script.js           ← All interactivity (~280 lines)
├── public/
│   └── resume.pdf      ← Downloadable resume
├── CODE_OF_CONDUCT.md
├── contributions.md
├── security.md
└── README.md
```

---

## Customization

1. **Personal info:** Edit directly in `index.html` (search for your name/email/links)
2. **Resume:** Replace `public/resume.pdf`
3. **Colors:** Change CSS custom properties at the top of `style.css`
4. **Projects:** Add/remove project cards in the `#projects` section of `index.html`

---

## Deployment

### GitHub Pages
Push to `main` branch, then in repo Settings → Pages → Source: `main` / root.

### Netlify / Vercel
Drag-and-drop the repo folder or connect via Git — no build command needed.

---

## License

MIT © Chirag Parashar
