# ⚡ Quick Start Guide

## What's New (TypeScript + Next.js)

Your portfolio has been converted to a **modern, type-safe TypeScript + Next.js** application with:

- 🔷 **Full TypeScript**: All components, types, and data are typed
- ⚡ **Next.js 14**: Latest React framework with App Router
- 🎨 **Tailwind CSS**: All styling with utility classes + custom animations
- 🌙 **Dark Mode**: Built-in theme toggle
- 📱 **Responsive**: Mobile-first design
- ⚡ **Fast**: Optimized build with SWC

## Installation & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## File Structure Explained

```
src/
├── app/                   # Next.js App Router
│   ├── page.tsx          # Main home page (all sections)
│   ├── layout.tsx        # HTML structure & head metadata
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── Hero.tsx          # Welcome section with metrics
│   ├── Projects.tsx      # Featured projects grid
│   ├── Experience.tsx    # Leadership & certifications
│   ├── Skills.tsx        # Tech skills with badges
│   ├── Contact.tsx       # Contact form
│   └── Navbar.tsx        # Navigation bar
├── data/
│   └── portfolio.ts      # All your portfolio data (TypeScript)
└── types/
    └── index.ts          # TypeScript interfaces
```

## How to Update Content

### Update Projects
Edit `src/data/portfolio.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 'my-project',
    title: 'Project Name',
    description: 'Project description...',
    tech: ['Tech1', 'Tech2'],
    link: 'https://...',
    linkText: 'View Project',
    featured: true,
  },
  // Add more projects
]
```

### Update Skills
```typescript
export const skills: Skill[] = [
  {
    id: 'languages',
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript'],
  },
  // Add more skill categories
]
```

### Update Metrics
```typescript
export const metrics: Metric[] = [
  { value: '8.9', label: 'CGPA' },
  { value: '50+', label: 'Students Mentored' },
  // Add more metrics
]
```

## TypeScript Benefits

✅ **Type Safety**: Catch errors before runtime
✅ **Autocomplete**: Full IDE support
✅ **Refactoring**: Rename safely across the project
✅ **Documentation**: Types serve as self-documenting code
✅ **Scalability**: Easy to add new features without breaking things

## Animations

All animations use **Tailwind CSS**:

- `animate-slide-up` - Entrance animation
- `animate-fade-in` - Fade in effect
- `hover:-translate-y-2` - Lift on hover
- `hover:scale-105` - Scale on hover
- `transition-all` - Smooth transitions

Customize in `tailwind.config.ts`:
```typescript
animation: {
  'slide-up': 'slideUp 0.6s ease-out forwards',
  'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
  // Add custom animations
}
```

## Deployment Options

### Vercel (1 click)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
```

### Netlify
Connect your GitHub repo → Auto deploy on push

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Form Submissions

Contact form uses **Web3Forms**. To change the email:

Edit `src/components/Contact.tsx`:
```typescript
<input 
  type="hidden" 
  name="access_key" 
  value="YOUR_WEB3FORMS_KEY" 
/>
```

Get your free key at [web3forms.com](https://web3forms.com)

## Dark Mode

Automatically persists to localStorage. Users can toggle with the 🌙 button in navbar.

## TypeScript Check

```bash
npm run type-check
```

This checks for TypeScript errors without building.

## Useful Commands

```bash
npm run dev           # Development server
npm run build         # Build for production
npm start            # Run production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Update your data in `src/data/portfolio.ts`
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share with recruiters!

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run type-check
```

**Need to clear cache?**
```bash
rm -rf .next
npm run dev
```

## Questions?

- Check `SETUP.md` for detailed documentation
- All types are documented in `src/types/index.ts`
- Components are self-documented with JSDoc comments
- Data structure in `src/data/portfolio.ts` is straightforward

Happy coding! 🚀
