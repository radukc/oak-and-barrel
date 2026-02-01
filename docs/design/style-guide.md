# Oak & Barrel Design System

## Brand Identity

**Oak & Barrel** is a premium restaurant and food delivery platform that celebrates the art of dining. Our design language evokes warmth, appetite, and the comforting essence of a well-crafted meal.

### Brand Personality
- **Warm** — Inviting colors that stimulate appetite and comfort
- **Artisanal** — Crafted with care, attention to detail in every element
- **Fresh** — Clean layouts with generous whitespace
- **Approachable** — Friendly, never pretentious
- **Premium** — Quality without being exclusive

### Design Pillars

1. **Appetite Appeal** — Every design decision should make the food look irresistible
2. **Effortless Navigation** — Users should find what they crave in seconds
3. **Trust Through Craft** — Quality UI signals quality food
4. **Celebration of Simplicity** — Clean, uncluttered, focused on content

---

## Visual Language

### The Oak & Barrel Aesthetic

Our visual identity draws inspiration from:
- **Golden Hour** — The warm light of late afternoon dining
- **Fresh Ingredients** — Natural, organic shapes and textures
- **Artisan Kitchens** — Handcrafted, attention to detail
- **Mediterranean Warmth** — Sun-drenched, inviting spaces

### Mood Keywords
`warm` `appetizing` `golden` `fresh` `crafted` `inviting` `natural` `premium` `clean` `comfortable`

---

## Color System

### Primary Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--oak-amber` | `#F5A623` | `245, 166, 35` | Primary brand color, CTAs, highlights |
| `--oak-amber-dark` | `#E08E00` | `224, 142, 0` | Hover states, emphasis |
| `--oak-amber-light` | `#FFD980` | `255, 217, 128` | Subtle highlights, badges |

### Background Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--cream` | `#FFFBF5` | `255, 251, 245` | Primary background |
| `--cream-warm` | `#FFF5E6` | `255, 245, 230` | Section backgrounds |
| `--cream-deep` | `#F5EBD9` | `245, 235, 217` | Card backgrounds, subtle contrast |
| `--white` | `#FFFFFF` | `255, 255, 255` | Cards, overlays |

### Text Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--charcoal` | `#2D2A26` | `45, 42, 38` | Primary headings |
| `--slate` | `#4A4543` | `74, 69, 67` | Body text |
| `--stone` | `#7A746E` | `122, 116, 110` | Secondary text, captions |
| `--pebble` | `#B5AFA8` | `181, 175, 168` | Placeholder, disabled |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#4CAF50` | Success states, confirmations |
| `--warning` | `#FF9800` | Warnings, alerts |
| `--error` | `#E53935` | Errors, destructive actions |
| `--info` | `#2196F3` | Information, tips |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--paprika` | `#C94C4C` | Spicy items, hot deals |
| `--basil` | `#6B8E23` | Fresh, vegetarian indicators |
| `--truffle` | `#4A3728` | Premium, luxury items |

---

## Typography

### Font Stack

**Display & Headings**
```css
font-family: 'Playfair Display', 'Georgia', serif;
```
Elegant, editorial feel with excellent legibility. Used for hero text, section titles, and marketing copy.

**Body & UI**
```css
font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
```
Modern, clean, highly readable. Used for body copy, navigation, buttons, and interface elements.

**Accent & Labels**
```css
font-family: 'Josefin Sans', 'Futura', sans-serif;
```
Geometric, distinctive. Used for labels, tags, prices, and special callouts.

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `--text-display-xl` | 72px | 1.1 | 700 | Hero headlines |
| `--text-display-lg` | 56px | 1.15 | 700 | Page titles |
| `--text-display-md` | 40px | 1.2 | 600 | Section headings |
| `--text-heading-lg` | 32px | 1.25 | 600 | Card titles, large |
| `--text-heading-md` | 24px | 1.3 | 600 | Card titles |
| `--text-heading-sm` | 20px | 1.35 | 600 | Subsection headings |
| `--text-body-lg` | 18px | 1.6 | 400 | Lead paragraphs |
| `--text-body-md` | 16px | 1.6 | 400 | Body copy |
| `--text-body-sm` | 14px | 1.5 | 400 | Secondary text |
| `--text-caption` | 12px | 1.4 | 500 | Labels, captions |
| `--text-micro` | 10px | 1.3 | 500 | Fine print |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `--font-regular` | 400 | Body text |
| `--font-medium` | 500 | Emphasis, labels |
| `--font-semibold` | 600 | Headings, buttons |
| `--font-bold` | 700 | Display text, strong emphasis |

---

## Spacing System

Based on an 8px grid with harmonious scaling.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon gaps |
| `--space-2` | 8px | Small padding, inline spacing |
| `--space-3` | 12px | Compact padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 24px | Card padding, section gaps |
| `--space-6` | 32px | Large gaps |
| `--space-7` | 48px | Section spacing |
| `--space-8` | 64px | Major section divisions |
| `--space-9` | 96px | Hero spacing |
| `--space-10` | 128px | Page section separators |

### Container Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--container-sm` | 640px | Narrow content (forms) |
| `--container-md` | 768px | Medium content |
| `--container-lg` | 1024px | Standard content |
| `--container-xl` | 1280px | Wide content |
| `--container-2xl` | 1440px | Full-width layouts |

---

## Border & Radius

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements, tags |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards, containers |
| `--radius-xl` | 16px | Large cards, modals |
| `--radius-2xl` | 24px | Hero cards, featured content |
| `--radius-full` | 9999px | Pills, avatars, circular elements |

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border-light` | 1px solid #F0EBE3 | Subtle dividers |
| `--border-medium` | 1px solid #E5DFD5 | Standard borders |
| `--border-strong` | 2px solid #D4CCC0 | Emphasized borders |

---

## Shadows & Elevation

### Shadow Scale

```css
--shadow-xs: 0 1px 2px rgba(45, 42, 38, 0.04);
--shadow-sm: 0 2px 4px rgba(45, 42, 38, 0.06);
--shadow-md: 0 4px 8px rgba(45, 42, 38, 0.08), 0 2px 4px rgba(45, 42, 38, 0.04);
--shadow-lg: 0 8px 24px rgba(45, 42, 38, 0.12), 0 4px 8px rgba(45, 42, 38, 0.06);
--shadow-xl: 0 16px 48px rgba(45, 42, 38, 0.16), 0 8px 16px rgba(45, 42, 38, 0.08);
--shadow-2xl: 0 24px 64px rgba(45, 42, 38, 0.20);
```

### Elevation Levels

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | None | Flat elements |
| 1 | `--shadow-xs` | Subtle lift |
| 2 | `--shadow-sm` | Cards at rest |
| 3 | `--shadow-md` | Cards on hover, dropdowns |
| 4 | `--shadow-lg` | Modals, popovers |
| 5 | `--shadow-xl` | Featured content |
| 6 | `--shadow-2xl` | Hero elements |

---

## Motion & Animation

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | 50ms | Immediate feedback |
| `--duration-fast` | 150ms | Micro-interactions |
| `--duration-normal` | 250ms | Standard transitions |
| `--duration-slow` | 400ms | Complex animations |
| `--duration-slower` | 600ms | Page transitions |

### Easing Curves

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);      /* Smooth, natural */
--ease-in: cubic-bezier(0.4, 0, 1, 1);              /* Accelerate */
--ease-out: cubic-bezier(0, 0, 0.2, 1);             /* Decelerate */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);        /* Symmetric */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);   /* Playful bounce */
--ease-elastic: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Elastic snap */
```

### Animation Presets

| Name | Properties | Usage |
|------|------------|-------|
| `fadeIn` | opacity 0→1 | Content appearance |
| `slideUp` | translateY 20px→0 + fadeIn | Cards, sections |
| `scaleIn` | scale 0.95→1 + fadeIn | Modals, popovers |
| `pulse` | scale 1→1.05→1 | Attention, loading |
| `shimmer` | Background gradient sweep | Loading states |

---

## Iconography

### Style Guidelines

- **Weight:** 1.5px stroke (matching DM Sans)
- **Size Grid:** 16px, 20px, 24px, 32px
- **Corner Radius:** Slightly rounded (2px) for warmth
- **Style:** Outlined with occasional filled variants for active states

### Icon Set Recommendation

Use **Lucide Icons** or **Heroicons** as base, with custom icons for:
- Food categories (pasta, burger, salad, etc.)
- Dining actions (reserve, order, rate)
- Brand-specific (Oak & Barrel logo, chef hat)

### Icon Sizing

| Token | Size | Usage |
|-------|------|-------|
| `--icon-xs` | 16px | Inline, labels |
| `--icon-sm` | 20px | Buttons, list items |
| `--icon-md` | 24px | Navigation, actions |
| `--icon-lg` | 32px | Feature icons |
| `--icon-xl` | 48px | Empty states, illustrations |

---

## Grid & Layout

### Grid System

12-column grid with responsive breakpoints.

```css
--grid-columns: 12;
--grid-gutter: 24px;
--grid-margin: 16px;  /* Mobile */
--grid-margin-lg: 32px;  /* Tablet */
--grid-margin-xl: 64px;  /* Desktop */
```

### Breakpoints

| Token | Value | Columns | Gutter |
|-------|-------|---------|--------|
| `--breakpoint-sm` | 640px | 4 | 16px |
| `--breakpoint-md` | 768px | 8 | 20px |
| `--breakpoint-lg` | 1024px | 12 | 24px |
| `--breakpoint-xl` | 1280px | 12 | 32px |
| `--breakpoint-2xl` | 1536px | 12 | 32px |

### Common Layout Patterns

- **Hero:** Full-width, 80vh minimum height
- **Content Sections:** max-width 1280px, centered with auto margins
- **Product Grid:** 1/2/3/4 columns responsive
- **Sidebar Layout:** 300px fixed sidebar + fluid content

---

## Photography Guidelines

### Food Photography Style

- **Lighting:** Warm, natural, golden-hour inspired
- **Angle:** 45° overhead or eye-level for texture
- **Background:** Neutral, warm wood or marble surfaces
- **Props:** Minimal, purposeful (fresh ingredients, utensils)
- **Color:** Vibrant but natural, no over-saturation

### Image Treatment

```css
/* Standard food image treatment */
.food-image {
  border-radius: var(--radius-lg);
  object-fit: cover;
  filter: saturate(1.05) contrast(1.02);
}

/* Hover enhancement */
.food-image:hover {
  filter: saturate(1.1) contrast(1.05) brightness(1.02);
}
```

### Image Sizes

| Context | Dimensions | Aspect Ratio |
|---------|------------|--------------|
| Hero | 1920×800 | 2.4:1 |
| Product Card | 400×300 | 4:3 |
| Product Detail | 800×600 | 4:3 |
| Thumbnail | 120×120 | 1:1 |
| Chef Profile | 300×400 | 3:4 |

---

## Accessibility

### Color Contrast

All text must meet WCAG 2.1 AA standards:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--oak-amber);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Touch Targets

- Minimum size: 44×44px
- Adequate spacing between targets: 8px minimum

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Notes

### Recommended Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS with custom configuration
- **Components:** Radix UI primitives + custom styling
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **State:** Zustand or Jotai

### File Organization

```
src/
├── app/                    # Next.js app router
├── components/
│   ├── ui/                 # Base UI components
│   ├── layout/             # Layout components
│   ├── features/           # Feature-specific components
│   └── icons/              # Custom icons
├── styles/
│   ├── globals.css         # Global styles, CSS variables
│   └── tokens.css          # Design tokens
├── lib/                    # Utilities, hooks
└── types/                  # TypeScript definitions
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01 | Initial design system release |
