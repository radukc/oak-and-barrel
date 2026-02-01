# Oak & Barrel Design System

A comprehensive design system for the Oak & Barrel restaurant platform, built to create warm, appetizing, and memorable dining experiences.

```
 ╭──────────────────────────────────────────────╮
 │                                              │
 │     🍽️  Oak & Barrel                         │
 │                                              │
 │     "Where every meal is a celebration"      │
 │                                              │
 ╰──────────────────────────────────────────────╯
```

## Overview

This design system provides the foundation for building consistent, accessible, and visually stunning interfaces across the Oak & Barrel digital platform.

### Design Philosophy

- **Appetite Appeal** — Every element should make food look irresistible
- **Effortless Navigation** — Users find what they crave in seconds
- **Trust Through Craft** — Quality UI signals quality food
- **Warm & Inviting** — The digital equivalent of a cozy restaurant

## Quick Start

### 1. Install Design Tokens

Copy the token files to your project:

```bash
# CSS tokens (for any project)
cp docs/design/tokens/tokens.css src/styles/

# Tailwind config (for Tailwind CSS projects)
cp docs/design/tokens/tailwind.config.js ./
```

### 2. Import Fonts

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Josefin+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3. Import Tokens

```css
/* In your global CSS */
@import './tokens.css';

body {
  font-family: var(--font-body);
  color: var(--color-text-primary);
  background: var(--color-background-soft);
}
```

## Documentation Structure

```
docs/design/
├── README.md               ← You are here
├── style-guide.md          ← Brand, typography, colors, spacing
├── tokens/
│   ├── tokens.css         ← CSS custom properties
│   ├── tokens.json        ← JSON for tooling integration
│   └── tailwind.config.js ← Tailwind CSS configuration
└── components/
    ├── index.md           ← Component library overview
    ├── button.md          ← Button component
    ├── input.md           ← Form inputs
    ├── rating.md          ← Star ratings
    ├── navigation.md      ← Navigation header
    ├── hero-section.md    ← Hero sections
    ├── dish-card.md       ← Menu item cards
    ├── chef-card.md       ← Chef profile cards
    └── table-reservation.md ← Reservation forms
```

## Core Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-500` | `#F5A623` | Primary brand color (Oak Amber) |
| `--color-background-soft` | `#FFFBF5` | Page background (Cream) |
| `--color-text-primary` | `#2D2A26` | Headlines (Charcoal) |
| `--color-text-secondary` | `#4A4543` | Body text (Slate) |

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Playfair Display | Headlines, marketing |
| `--font-body` | DM Sans | Body text, UI |
| `--font-accent` | Josefin Sans | Labels, prices |

### Spacing

Based on an 8px grid: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

### Shadows

```css
--shadow-sm   /* Subtle lift */
--shadow-md   /* Cards at rest */
--shadow-lg   /* Cards on hover */
--shadow-xl   /* Modals, featured */
--shadow-amber /* Primary button glow */
```

## Component Library

### Foundation Components
- **Button** — Primary, secondary, ghost, danger variants
- **Input** — Text, email, phone, textarea, select
- **Rating** — Display and interactive star ratings

### Layout Components
- **Navigation** — Sticky header with logo, links, cart
- **Hero Section** — Full-width landing page headers

### Content Components
- **Dish Card** — Food item with image, price, rating, CTA
- **Chef Card** — Chef profile with photo, bio, social links

### Form Components
- **Table Reservation** — Date, time, guests booking form

## Recommended Tech Stack

| Layer | Recommendation |
|-------|----------------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Components | Radix UI + custom styling |
| Animation | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| State | Zustand or Jotai |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

All components meet WCAG 2.1 AA standards:
- 4.5:1 contrast ratio for text
- Keyboard navigation support
- Screen reader compatibility
- Focus visible indicators
- Reduced motion support

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | Jan 2024 | Initial design system release |

---

## Resources

- [Style Guide](./style-guide.md) — Complete brand guidelines
- [Design Tokens (CSS)](./tokens/tokens.css) — CSS custom properties
- [Design Tokens (JSON)](./tokens/tokens.json) — For tooling
- [Tailwind Config](./tokens/tailwind.config.js) — Tailwind integration
- [Component Index](./components/index.md) — All components

---

<p align="center">
  <strong>Oak & Barrel</strong><br>
  <em>Crafted with care for memorable dining experiences</em>
</p>
