# Blueblood Ventures Website - Project Context

## Project Overview

This is the official company website for **Blueblood Ventures LLC**, a consumer applications company focused on building mobile apps for sports fans. The site is deployed to GitHub Pages at `blueblood-ventures.github.io`.

**Founder**: Brendon Ng
**Contact**: brendon@bngventures.com

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui (custom components in `src/components/ui/`)
- **Dark Mode**: next-themes with class-based toggling
- **Icons**: lucide-react
- **Fonts**: Inter (via next/font)
- **Deployment**: GitHub Actions → GitHub Pages (static export)

## Design System

### Colors

**Primary Colors:**
- **Blueblood Blue**: `#2563eb` (600) - Main brand color
  - Full palette: 50-900 defined in `tailwind.config.ts`
- **Blueblood Gold**: `#fbbf24` (400) - Accent/secondary color
  - Range: 200-500 defined in `tailwind.config.ts`

**Theme Variables:**
- Uses CSS custom properties (HSL format) for light/dark mode
- Defined in `src/app/globals.css`
- Applied through Tailwind's color system

### Typography
- **Font Family**: Inter (Google Fonts, self-hosted via next/font)
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, antialiased

### Design Aesthetic
- Creative/playful yet minimal/clean
- Gradient accents (blue-to-gold)
- Smooth animations and transitions (200-300ms)
- Responsive: mobile-first design

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider, fonts, metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind directives + CSS variables
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Sticky header with nav & theme toggle
│   │   └── footer.tsx      # Footer with copyright & email
│   ├── sections/
│   │   ├── hero.tsx        # Landing section with gradient background
│   │   ├── about.tsx       # Company mission & vision
│   │   ├── projects.tsx    # Coming soon project cards
│   │   └── contact.tsx     # Email contact section
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   ├── logo.tsx            # Text logo with gradient
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── theme-toggle.tsx    # Dark/light mode toggle button
├── config/
│   └── site.ts             # Centralized site configuration
└── lib/
    └── utils.ts            # cn() helper for class merging

public/
└── .nojekyll               # Prevents GitHub Pages Jekyll processing

.github/workflows/
└── deploy.yml              # GitHub Actions deployment workflow
```

## Key Configuration Files

### `next.config.ts`
- **Important**: `output: 'export'` for static export
- `images.unoptimized: true` (required for GitHub Pages)

### `tailwind.config.ts`
- Custom color palettes (blueblood-blue, blueblood-gold)
- Theme variables mapped to CSS custom properties
- `darkMode: ['class']` for class-based dark mode

### `src/config/site.ts`
- Centralized configuration for site metadata
- Company name, founder info, email
- Single source of truth for contact information

## Development Workflow

### Local Development
```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build production bundle
npm run lint     # Run ESLint
```

### Making Changes
1. Edit files in `src/`
2. Test locally with `npm run dev`
3. Build to verify: `npm run build`
4. Commit changes
5. Push to `main` branch
6. GitHub Actions automatically deploys to GitHub Pages

### Deployment
- **Trigger**: Push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies (`npm ci`)
  4. Build static site (`npm run build`)
  5. Upload `out/` directory artifact
  6. Deploy to GitHub Pages
- **Live URL**: https://blueblood-ventures.github.io

## Important Notes & Gotchas

### Button Styling
- **Hero section buttons**: Use explicit colors (not theme variables) since hero has fixed blue background
- **Learn More button**: Must have `bg-transparent` to avoid white-on-white in light mode
- **Icon buttons**: Don't add `mr-2` to icons - Button component already has `gap-2`
- Use `asChild` prop with `<a>` tags for proper link semantics

### Dark Mode
- Uses `next-themes` with `suppressHydrationWarning` on `<html>` tag
- Theme persists in localStorage
- No flash on page load
- Toggle component includes mounted check to prevent hydration mismatch

### Smooth Scroll
- Enabled in `globals.css` with `html { scroll-behavior: smooth; }`
- Navigation links use `#section-id` format
- All main sections have IDs: `home`, `about`, `projects`, `contact`

### ESLint Rules
- No unescaped apostrophes in JSX - use `&apos;` instead of `'`
- All interactive elements must have accessible labels

### GitHub Pages
- Site deploys to root domain (not a project subdirectory)
- No `basePath` needed in Next.js config
- `.nojekyll` file is critical for `_next` directory to work
- Pages must be enabled in repository settings with "GitHub Actions" as source

## Content Updates

### To Update Site Information
- **Email/Contact**: Edit `src/config/site.ts`
- **Hero headline/tagline**: Edit `src/components/sections/hero.tsx`
- **Company description**: Edit `src/components/sections/about.tsx`
- **Projects**: Edit `src/components/sections/projects.tsx`
- **Colors**: Edit `tailwind.config.ts` and optionally `src/app/globals.css`

### To Add New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/layout/header.tsx`
4. Ensure section has unique `id` attribute for smooth scroll

## Future Considerations

### When Apps Launch
- Replace "Coming Soon" badges with "Live" or "New"
- Add actual project links and screenshots
- Consider adding a dedicated projects page if multiple apps

### Potential Enhancements
- Add animations on scroll (framer-motion)
- Add blog section for company updates
- Add team section when company grows
- Add testimonials or case studies
- Implement analytics (Plausible or Google Analytics)

### Performance
- Current bundle size: ~102KB shared JS
- Target metrics:
  - First Contentful Paint: < 1.0s
  - Largest Contentful Paint: < 2.0s
  - Time to Interactive: < 2.5s
- Static export ensures fast load times

## Dependencies to Watch

### Core Dependencies
- `next`: Stay on v15.x (App Router)
- `react`: v19+ (latest)
- `tailwindcss`: v3.x (do NOT upgrade to v4 yet - different syntax)
- `next-themes`: v0.4+ for dark mode
- `typescript`: v5+

### Version Notes
- Tailwind v4 has breaking changes (uses `@import` syntax) - stick with v3 for now
- Next.js 15 requires React 19+
- lucide-react updates frequently but is stable

## Common Tasks

### Adding a New UI Component
1. Create in `src/components/ui/` following shadcn/ui patterns
2. Use `cn()` utility for className merging
3. Forward refs for accessibility
4. Support variant props with class-variance-authority

### Updating Theme Colors
1. Edit `tailwind.config.ts` to add/modify color palettes
2. Update CSS variables in `src/app/globals.css` if needed
3. Test in both light and dark modes

### Fixing Styling Issues
- Always test in both light and dark modes
- Check responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Use browser dev tools to inspect Tailwind classes
- Remember that hero section has fixed colors (doesn't change with theme)

## Questions to Ask

If you need to make changes and are unsure:
1. Should this work in both light and dark modes?
2. Does this need to be responsive?
3. Should colors come from the theme or be hardcoded?
4. Is this a temporary or permanent change?
5. Should this be added to site.ts config or hardcoded?

## Contact for Issues

- **Owner**: Brendon Ng
- **Email**: brendon@bngventures.com
- For bugs or issues: Create an issue in the repository
