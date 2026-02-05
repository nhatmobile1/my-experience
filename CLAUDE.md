# My Experience Portfolio - Project Reference

## Project Overview

Personal portfolio website for Nhat Tran showcasing marketing operations expertise, professional experience, and projects.

- **URL:** https://www.nhattran.me
- **Framework:** Next.js 16.0.9 (React 19)
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Deployment:** Vercel

## Project Structure

```
app/
├── page.jsx           # Main portfolio (About, Experience, Projects tabs)
├── summary/page.jsx   # Recruiter-friendly printable summary
├── globals.css        # Custom styles, colors, animations
└── layout.jsx         # Root layout with theme provider

components/
├── ui/                # 56 shadcn/ui components
└── theme-provider.jsx # Dark/light theme support
```

## Current Design System (Updated Jan 2026)

### Color Palette
Moved from warm cream/terracotta (AI slop) to cool professional tones:

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| Background | `#f7f7f8` | `#18181b` |
| Foreground | `#18181b` | `#ffffff` |
| Accent | `#627d98` (slate blue) | `#829ab1` |
| Secondary | `#e8e8eb` | `#3f3f46` |

CSS variables defined in `globals.css`:
- `--accent-*` (50-900): Professional slate blue scale
- `--neutral-*` (50-900): Cool zinc/gray scale
- `--sage-*` (50-900): Slate secondary scale

### Typography
- Sans: Geist (Next.js optimized)
- Mono: Geist Mono

### Border Radius
- Base: `0.375rem` (6px)
- Tags/badges: `rounded-sm` (2px)
- Buttons: 6px
- Cards: Uses base radius

### Animations
Defined in `globals.css`:
- `.animate-fade-in` - Subtle 0.4s fade with 8px translate
- `.animate-fade-in-up` - 0.5s fade with 16px translate
- `.stagger-1` through `.stagger-6` - Staggered delays (0.05s increments)

Applied to:
- Header (fade-in)
- Expertise cards (staggered fade-in-up)
- Experience cards (staggered fade-in-up)
- Project cards (staggered fade-in-up)

### Button Variants
Custom enhanced styles in `globals.css`:
- `.btn-icon-enhanced` - Icon buttons (theme toggle, summary link)
- `.btn-outline-enhanced` - Outline with animated left border accent
- `.btn-primary-enhanced` - Primary with subtle lift on hover

## Recent Updates (Jan 2026)

### Design Overhaul
Removed "AI slop" patterns per frontend design guidelines:

**Before:**
- Cream backgrounds (`#f8f6f3`)
- Terracotta accents (`#c45c48`)
- Warm neutral scale
- 12px border radius
- "Cozy webapp" aesthetic

**After:**
- Cool white backgrounds (`#f7f7f8`)
- Slate blue accents (`#627d98`)
- Cool neutral scale
- 6px border radius
- Clean, professional, content-focused

### Files Modified
1. `app/globals.css` - Complete color palette overhaul, new animations
2. `app/page.jsx` - Added animation classes, updated border radius on tags
3. `app/summary/page.jsx` - Updated border radius for consistency

## Development

```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm run lint   # ESLint
```

## Next Steps & Suggestions

### Quick Wins
- [ ] Add a custom favicon that matches the new color scheme
- [ ] Consider a more distinctive display font for the name/headings
- [ ] Add `prefers-reduced-motion` media query for accessibility

### Content Improvements
- [ ] Add metrics/numbers to more project cards where possible
- [ ] Consider adding a "Certifications" section (Marketo Certified Expert)
- [ ] Add testimonials or recommendations section

### Technical Enhancements
- [ ] Add page transitions between tabs (consider Framer Motion)
- [ ] Implement view transitions API for tab switching
- [ ] Add Open Graph images for better social sharing
- [ ] Consider adding a blog or articles section

### Design Refinements
- [ ] Explore different typography pairings (e.g., distinctive display font)
- [ ] Add subtle hover states to cards (border color shift)
- [ ] Consider adding a subtle grid or dot pattern background
- [ ] Evaluate dark mode contrast ratios

### Performance
- [ ] Audit and optimize images if any are added
- [ ] Consider lazy loading for below-fold content
- [ ] Review Core Web Vitals after deployment

## Design Guidelines Reference

When making design changes, reference:
- `/Users/nhattran/documents/projects/claude-skills/skills/frontend/frontend-design-complete/SKILL.md`
- `/Users/nhattran/documents/projects/claude-skills/skills/frontend/design-styles/references/design-styles-comprehensive-reference.md`

### Key Patterns to Avoid (AI Slop)
- Cream/off-white backgrounds (`#f8f6f3` type)
- Terracotta/coral accents (`#c45c48` type)
- Generous rounded corners (12-16px+)
- Warm shadows with colored tints
- The "cozy webapp" aesthetic

### Recommended Approaches
- Cool color temperatures
- Sharp geometry (0-6px radius)
- High contrast
- Distinctive typography
- Commit to a clear design direction (Swiss, Editorial, Dark Mode, etc.)

## Contact & Links

- **Email:** nhatmobile@gmail.com
- **LinkedIn:** linkedin.com/in/nt-tran/
- **GitHub:** github.com/nhatmobile1
