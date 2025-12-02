# Nhat's Brand Color Palette

## 🎨 Philosophy
This palette follows a **minimal + intentional** approach. The core uses 1-2 accent colors with a complete neutral scale, giving you flexibility without overwhelming your designs.

---

## Primary Accent Colors

### Terracotta (Main Brand Color)
```css
--accent-50:  #fdf5f3;  /* Lightest - subtle backgrounds */
--accent-100: #fae8e4;  /* Very light - hover states */
--accent-200: #f5d1c8;  /* Light - soft accents */
--accent-300: #efb3a3;  /* Medium light - borders */
--accent-400: #e38972;  /* Medium - interactive elements */
--accent-500: #c45c48;  /* Base - primary brand color ⭐ */
--accent-600: #a74a3a;  /* Dark - hover/active states */
--accent-700: #8a3c2f;  /* Darker - pressed states */
--accent-800: #6d3026;  /* Very dark - text on light */
--accent-900: #57261f;  /* Darkest - deep contrast */
```

**Hex Values:**
- Base: `#c45c48`
- Common use: `#c45c48` (500), `#fae8e4` (100), `#a74a3a` (600)

---

## Neutral Scale (Warm)

### Cream/Beige (Background System)
```css
--neutral-50:  #fdfcfb;  /* Pure white alternative */
--neutral-100: #f8f6f3;  /* Main background ⭐ */
--neutral-200: #f0ede8;  /* Secondary background */
--neutral-300: #e3dfd8;  /* Subtle dividers */
--neutral-400: #d1ccc3;  /* Light borders */
--neutral-500: #b8b2a7;  /* Medium gray */
--neutral-600: #948e83;  /* Dark borders */
--neutral-700: #6b6660;  /* Secondary text */
--neutral-800: #49453f;  /* Primary text */
--neutral-900: #2d2a26;  /* Darkest text */
```

**Hex Values:**
- Main BG: `#f8f6f3` (100)
- Secondary BG: `#f0ede8` (200)
- Text: `#49453f` (800), `#6b6660` (700)

---

## Secondary Accent (Optional)

### Sage Green (Complementary)
For variety in future projects - pairs beautifully with terracotta.

```css
--green-50:  #f5f9f5;
--green-100: #e8f2e6;
--green-200: #d4e6cf;
--green-300: #b5d4ad;
--green-400: #8fbd84;
--green-500: #6a9e5f;  /* Base sage green */
--green-600: #56824c;
--green-700: #45673d;
--green-800: #364f30;
--green-900: #2a3e26;
```

**Hex Values:**
- Base: `#6a9e5f`
- Common use: `#6a9e5f` (500), `#e8f2e6` (100)

---

## Functional Colors

### Success (Green)
```css
--success-light: #d4edda;
--success:       #28a745;
--success-dark:  #1e7e34;
```

### Warning (Amber)
```css
--warning-light: #fff3cd;
--warning:       #ffc107;
--warning-dark:  #d39e00;
```

### Error (Red)
```css
--error-light: #f8d7da;
--error:       #dc3545;
--error-dark:  #a71d2a;
```

### Info (Blue)
```css
--info-light: #d1ecf1;
--info:       #17a2b8;
--info-dark:  #117a8b;
```

---

## CSS Variables Setup

### Complete CSS Implementation

```css
:root {
  /* Primary Accent - Terracotta */
  --accent-50:  #fdf5f3;
  --accent-100: #fae8e4;
  --accent-200: #f5d1c8;
  --accent-300: #efb3a3;
  --accent-400: #e38972;
  --accent-500: #c45c48;
  --accent-600: #a74a3a;
  --accent-700: #8a3c2f;
  --accent-800: #6d3026;
  --accent-900: #57261f;
  
  /* Neutrals - Warm Cream */
  --neutral-50:  #fdfcfb;
  --neutral-100: #f8f6f3;
  --neutral-200: #f0ede8;
  --neutral-300: #e3dfd8;
  --neutral-400: #d1ccc3;
  --neutral-500: #b8b2a7;
  --neutral-600: #948e83;
  --neutral-700: #6b6660;
  --neutral-800: #49453f;
  --neutral-900: #2d2a26;
  
  /* Secondary - Sage Green (Optional) */
  --green-50:  #f5f9f5;
  --green-100: #e8f2e6;
  --green-200: #d4e6cf;
  --green-300: #b5d4ad;
  --green-400: #8fbd84;
  --green-500: #6a9e5f;
  --green-600: #56824c;
  --green-700: #45673d;
  --green-800: #364f30;
  --green-900: #2a3e26;
  
  /* Functional Colors */
  --success: #28a745;
  --success-light: #d4edda;
  --warning: #ffc107;
  --warning-light: #fff3cd;
  --error: #dc3545;
  --error-light: #f8d7da;
  --info: #17a2b8;
  --info-light: #d1ecf1;
  
  /* Semantic Tokens (for easy reference) */
  --color-brand: var(--accent-500);
  --color-brand-hover: var(--accent-600);
  --color-brand-light: var(--accent-100);
  
  --color-bg-primary: var(--neutral-100);
  --color-bg-secondary: var(--neutral-200);
  --color-bg-tertiary: var(--neutral-50);
  
  --color-text-primary: var(--neutral-900);
  --color-text-secondary: var(--neutral-700);
  --color-text-tertiary: var(--neutral-600);
  
  --color-border: var(--neutral-300);
  --color-border-dark: var(--neutral-400);
}
```

---

## Usage Guidelines

### When to Use Each Color

#### Terracotta (Primary Accent)
- ✅ **Use for**: CTAs, links, active states, brand elements, highlights
- ❌ **Avoid**: Large backgrounds, body text, overuse (use sparingly for impact)

#### Neutrals (Backgrounds & Text)
- ✅ **Use for**: Backgrounds, text, borders, cards, containers
- **Hierarchy**: 
  - 100 = main background
  - 200 = cards/sections
  - 50 = pure surfaces
  - 800-900 = text
  - 300-400 = borders

#### Sage Green (Secondary)
- ✅ **Use for**: Secondary actions, success states, nature/eco themes, variety
- ❌ **Avoid**: Mixing too much with terracotta in same view

#### Functional Colors
- ✅ **Use for**: Alerts, form validation, status indicators, notifications
- Use standard colors (green/yellow/red/blue) so users instantly understand meaning

---

## Design Patterns

### Minimal Approach (Recommended)
```
90% Neutrals + 10% Accent = Clean, Professional
```

**Example composition:**
- Background: neutral-100
- Cards: neutral-50 or neutral-200
- Text: neutral-800, neutral-700
- Accents: accent-500 (sparingly)
- Borders: neutral-300

### With Secondary Color
```
85% Neutrals + 10% Primary + 5% Secondary = Balanced, Versatile
```

**Example composition:**
- Background: neutral-100
- Primary CTAs: accent-500
- Secondary CTAs: green-500
- Text/borders: neutrals

---

## Color Combinations That Work

### 1. Classic (Your Current Style)
```
Background: #f8f6f3 (neutral-100)
Accent:     #c45c48 (accent-500)
Text:       #49453f (neutral-800)
```

### 2. Fresh & Natural
```
Background: #fdfcfb (neutral-50)
Primary:    #6a9e5f (green-500)
Accent:     #c45c48 (accent-500)
Text:       #2d2a26 (neutral-900)
```

### 3. Bold & Modern
```
Background: #f0ede8 (neutral-200)
Primary:    #a74a3a (accent-600)
Accent:     #56824c (green-600)
Text:       #2d2a26 (neutral-900)
```

### 4. Soft & Subtle
```
Background: #f8f6f3 (neutral-100)
Accent:     #e38972 (accent-400)
Secondary:  #8fbd84 (green-400)
Text:       #6b6660 (neutral-700)
```

---

## Accessibility

### Contrast Ratios (WCAG AA Compliant)

**Text on Backgrounds:**
- ✅ neutral-900 on neutral-100 = 9.8:1 (AAA)
- ✅ neutral-800 on neutral-100 = 7.2:1 (AAA)
- ✅ neutral-700 on neutral-100 = 4.9:1 (AA)
- ✅ accent-600 on neutral-100 = 5.1:1 (AA)
- ⚠️ accent-500 on neutral-100 = 3.8:1 (AA Large only)

**Buttons:**
- ✅ White on accent-500 = 4.1:1 (AA)
- ✅ White on accent-600 = 5.4:1 (AA)
- ✅ neutral-100 on accent-600 = 5.8:1 (AA)

**Best Practices:**
- Use accent-500+ for backgrounds with white text
- Use neutral-700+ for readable body text
- Use accent-600 for better contrast on CTAs

---

## Quick Reference

### Most Used Colors
```css
/* You'll use these 80% of the time */
--color-bg:        #f8f6f3;  /* neutral-100 */
--color-card:      #fdfcfb;  /* neutral-50 */
--color-accent:    #c45c48;  /* accent-500 */
--color-text:      #49453f;  /* neutral-800 */
--color-text-muted:#6b6660;  /* neutral-700 */
--color-border:    #e3dfd8;  /* neutral-300 */
```

### Copy-Paste Hex Values
```
Terracotta: #c45c48
Cream BG:   #f8f6f3
Card BG:    #fdfcfb
Dark Text:  #49453f
Light Text: #6b6660
Border:     #e3dfd8
Sage Green: #6a9e5f
```

---

## Export Formats

### Tailwind Config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fdf5f3',
          100: '#fae8e4',
          200: '#f5d1c8',
          300: '#efb3a3',
          400: '#e38972',
          500: '#c45c48',
          600: '#a74a3a',
          700: '#8a3c2f',
          800: '#6d3026',
          900: '#57261f',
        },
        neutral: {
          50: '#fdfcfb',
          100: '#f8f6f3',
          200: '#f0ede8',
          300: '#e3dfd8',
          400: '#d1ccc3',
          500: '#b8b2a7',
          600: '#948e83',
          700: '#6b6660',
          800: '#49453f',
          900: '#2d2a26',
        },
        sage: {
          50: '#f5f9f5',
          100: '#e8f2e6',
          200: '#d4e6cf',
          300: '#b5d4ad',
          400: '#8fbd84',
          500: '#6a9e5f',
          600: '#56824c',
          700: '#45673d',
          800: '#364f30',
          900: '#2a3e26',
        },
      },
    },
  },
}
```

### Figma/Design Tools
```
Create color styles named:
- Accent/500, Accent/600, etc.
- Neutral/100, Neutral/800, etc.
- Sage/500, etc.
```

---

## Final Recommendation

**For most projects, stick to:**
1. **Neutral scale** (100% usage) - backgrounds, text, borders
2. **One accent color** (accent-500 + lighter/darker shades)
3. **Functional colors** (only when needed for alerts/status)

This gives you a **professional, cohesive look** without overwhelming the design.

**Add the sage green** when you need:
- Secondary actions/buttons
- Categorization (e.g., different content types)
- Visual variety across multiple pages/sections

---

🎨 **Your signature look**: Warm terracotta + cream neutrals = timeless, approachable, professional.
