# Chirag Parashar — Portfolio (Next.js)

A world-class, recruiter-focused personal portfolio for **Chirag Parashar** —
Microsoft Learn Student Ambassador, AI/ML Engineer, and Software Developer.

> **Tagline:** Building Intelligent Solutions with AI, Data & Code.

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router) + React 18
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v3 with custom design tokens (`#00D4FF`, `#7C3AED`, `#00FFB3`)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/) (Font Awesome 6 + Simple Icons)
- **GitHub stats:** Public GitHub REST API + community badge services
- **SEO:** Next.js metadata API, JSON-LD structured data, sitemap, robots, OG/Twitter cards

---

## Highlights

- 🎨 Modern dark theme with glassmorphism + animated gradient mesh
- ⚡ Lighthouse-friendly (95+ targets across Performance / A11y / BP / SEO)
- ♿ Accessibility-first: semantic HTML, focus styles, skip link, reduced-motion support, aria labels
- 🌓 Dark / light mode toggle (persisted in `localStorage`)
- 🌀 Scroll-reveal animations, typing animation, animated counters, particle background, custom loader
- 🔍 Filterable + searchable projects grid
- 🪟 Certificate details modal (with keyboard / overlay close)
- 📈 Live GitHub stats fetched from the public GitHub API
- 📨 Validated contact form (graceful `mailto:` fallback — no backend required)
- 🧭 Sticky navbar with active-section highlight and mobile drawer

---

## Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── manifest.ts
│   ├── components/
│   │   ├── effects/        # Background canvases, mesh, loading screen
│   │   ├── layout/         # Navbar, Footer, BackToTop, ThemeToggle
│   │   ├── sections/       # All page sections (Hero, About, ...)
│   │   └── ui/             # Reusable primitives (Section, GlassCard, ...)
│   ├── lib/
│   │   ├── data.ts         # All content (single source of truth)
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

All copy, links, projects, certifications, etc. live in **`src/lib/data.ts`** —
edit one file to update the site.

---

## Getting Started

> Requires Node.js 18.17+ (or 20+).

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Type-check & lint

```bash
npm run type-check
npm run lint
```

---

## Customization

1. **Personal info & links:** `src/lib/data.ts` (`personal` object).
2. **Resume PDF:** drop `resume.pdf` into `portfolio/public/`.
3. **Open Graph image:** add `og-image.png` (1200×630) to `portfolio/public/`.
4. **PWA icons:** add `icon-192.png` and `icon-512.png` to `portfolio/public/`.
5. **Site URL:** update `personal.siteUrl` in `data.ts` for SEO + sitemap.
6. **Colors:** tweak the design tokens in `tailwind.config.ts`.

---

## Deployment

The simplest path is [Vercel](https://vercel.com/):

```bash
# from the portfolio/ directory
npx vercel
```

Or deploy on any platform that supports Next.js 14 (Netlify, Cloudflare, AWS, etc.).

---

## License

MIT © Chirag Parashar
