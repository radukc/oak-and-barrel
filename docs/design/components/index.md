# Component Library Index

This document provides an overview of all UI components in the Oak & Barrel design system.

## Component Categories

### Foundation
Base-level primitives that other components build upon.

| Component | Status | Description |
|-----------|--------|-------------|
| [Button](./button.md) | Complete | Primary interactive element for actions |
| [Input](./input.md) | Complete | Text input fields, textareas, selects |
| [Rating](./rating.md) | Complete | Star rating display and input |

### Layout
Components that define page structure and navigation.

| Component | Status | Description |
|-----------|--------|-------------|
| [Navigation](./navigation.md) | Complete | Main site navigation header |
| [Hero Section](./hero-section.md) | Complete | Prominent landing page headers |
| Footer | Planned | Site-wide footer |

### Content
Components for displaying primary content.

| Component | Status | Description |
|-----------|--------|-------------|
| [Dish Card](./dish-card.md) | Complete | Menu item display with image, price, rating |
| [Chef Card](./chef-card.md) | Complete | Chef profile display |
| Testimonial Card | Planned | Customer review display |
| Category Card | Planned | Menu category navigation |

### Forms & Inputs
Components for user data collection.

| Component | Status | Description |
|-----------|--------|-------------|
| [Table Reservation](./table-reservation.md) | Complete | Restaurant booking form |
| Quantity Selector | Planned | +/- input for cart quantities |
| Search | Planned | Search input with autocomplete |

### Feedback
Components that communicate status and feedback.

| Component | Status | Description |
|-----------|--------|-------------|
| Toast | Planned | Notification messages |
| Modal | Planned | Dialog overlays |
| Loading Skeleton | Planned | Content loading placeholders |

### Commerce
Components specific to ordering and checkout.

| Component | Status | Description |
|-----------|--------|-------------|
| Cart Item | Planned | Shopping cart line items |
| Order Summary | Planned | Cart totals and checkout |
| Payment Form | Planned | Credit card and payment input |

---

## Component Status Legend

| Status | Meaning |
|--------|---------|
| Complete | Full specification and implementation example |
| In Progress | Specification started, may be incomplete |
| Planned | On roadmap, not yet specified |

---

## Component Architecture Principles

### 1. Composition Over Configuration
Components should be composable, allowing complex UIs to be built from simple primitives.

```tsx
// Good: Composable
<Card>
  <Card.Image src={dish.image} />
  <Card.Body>
    <Card.Title>{dish.name}</Card.Title>
    <Card.Price>{dish.price}</Card.Price>
  </Card.Body>
</Card>

// Avoid: Over-configured
<Card
  image={dish.image}
  title={dish.name}
  price={dish.price}
  // ... many more props
/>
```

### 2. Accessible by Default
All components must meet WCAG 2.1 AA standards out of the box.

- Proper semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Focus management

### 3. Consistent API Patterns
Components follow consistent prop naming and patterns:

| Prop | Type | Description |
|------|------|-------------|
| `variant` | string | Visual variant (primary, secondary, etc.) |
| `size` | string | Size variant (sm, md, lg, xl) |
| `isDisabled` | boolean | Disabled state |
| `isLoading` | boolean | Loading state |
| `className` | string | Additional CSS classes |
| `children` | ReactNode | Child elements |

### 4. Design Token Integration
All styling references design tokens, never hard-coded values.

```css
/* Good */
color: var(--color-primary-500);
padding: var(--space-4);
border-radius: var(--radius-md);

/* Avoid */
color: #F5A623;
padding: 16px;
border-radius: 8px;
```

### 5. Responsive by Design
Components work across all breakpoints without additional configuration.

---

## Implementation Checklist

When implementing a component, ensure:

- [ ] Follows design token system
- [ ] All variants documented
- [ ] All states implemented (default, hover, focus, active, disabled)
- [ ] Responsive behavior defined
- [ ] Animations smooth and purposeful
- [ ] Accessibility requirements met
- [ ] TypeScript types defined
- [ ] Usage examples provided
- [ ] Edge cases handled

---

## File Structure

```
docs/design/
├── style-guide.md           # Brand & design principles
├── tokens/
│   ├── tokens.css          # CSS custom properties
│   ├── tokens.json         # JSON format for tooling
│   └── tailwind.config.js  # Tailwind configuration
└── components/
    ├── index.md            # This file
    ├── button.md           # Button specification
    ├── input.md            # Input specification
    ├── rating.md           # Rating specification
    ├── navigation.md       # Navigation specification
    ├── hero-section.md     # Hero specification
    ├── dish-card.md        # Dish card specification
    ├── chef-card.md        # Chef card specification
    └── table-reservation.md # Reservation specification
```

---

## Contributing

When adding new components:

1. Create a new `.md` file in `/components`
2. Use the existing component specs as templates
3. Include: Anatomy, Specifications, Variants, States, Implementation Example
4. Update this index file
5. Ensure design tokens are used throughout
