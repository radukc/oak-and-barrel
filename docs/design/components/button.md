# Button Component

Buttons are the primary interactive elements for triggering actions.

## Variants

### Primary (Default)
The main call-to-action button. Used for primary actions like "Add to Cart", "Order Now", "Reserve Table".

```
Background: var(--color-primary-500) #F5A623
Text: white
Border: none
Shadow: var(--shadow-sm)
Hover: var(--color-primary-600) #E08E00, shadow-amber
Active: var(--color-primary-700) #B87200
```

### Secondary
For secondary actions. Outlined style.

```
Background: transparent
Text: var(--color-primary-500)
Border: 2px solid var(--color-primary-500)
Hover: Background var(--color-primary-50), border var(--color-primary-600)
Active: Background var(--color-primary-100)
```

### Ghost
Minimal, for tertiary actions or within cards.

```
Background: transparent
Text: var(--color-text-secondary)
Border: none
Hover: Background var(--color-background-warm)
Active: Background var(--color-background-muted)
```

### Danger
Destructive actions.

```
Background: var(--color-error-500)
Text: white
Hover: var(--color-error-700)
```

## Sizes

| Size | Height | Padding X | Font Size | Border Radius |
|------|--------|-----------|-----------|---------------|
| `sm` | 32px | 12px | 14px | 6px |
| `md` | 40px | 16px | 16px | 8px |
| `lg` | 48px | 24px | 16px | 10px |
| `xl` | 56px | 32px | 18px | 12px |

## States

### Default
Normal resting state.

### Hover
Subtle elevation increase, color shift.
```css
transform: translateY(-1px);
box-shadow: var(--shadow-md);
```

### Active/Pressed
Pressed feedback.
```css
transform: translateY(0);
box-shadow: var(--shadow-xs);
```

### Focus
Keyboard navigation indicator.
```css
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;
```

### Disabled
Non-interactive state.
```css
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;
```

### Loading
Shows spinner, text optional.
```css
/* Spinner replaces or accompanies text */
cursor: wait;
```

## Anatomy

```
┌─────────────────────────────────────┐
│  [icon]  Label Text  [icon/spinner] │
└─────────────────────────────────────┘
     ↑                      ↑
  Leading Icon         Trailing Icon
  (optional)           (optional)
```

## Spacing

- Icon to text: 8px
- Internal padding: 12-32px (varies by size)
- Minimum width: 64px (prevents tiny buttons)

## Typography

- Font family: `var(--font-body)` (DM Sans)
- Font weight: 600 (semibold)
- Letter spacing: 0.01em
- Text transform: none (sentence case)

## Icons

- Size matches font size
- Consistent stroke width (1.5px)
- Optional leading/trailing position
- Spinner for loading state

## Animation

```css
transition: all var(--duration-fast) var(--ease-default);

/* Hover lift */
.button:hover {
  transform: translateY(-1px);
}

/* Click feedback */
.button:active {
  transform: translateY(0);
  transition-duration: var(--duration-instant);
}
```

## Accessibility

- Minimum touch target: 44x44px (padding if needed)
- Clear focus indicator
- `aria-disabled` when disabled
- `aria-busy` when loading
- Sufficient color contrast (4.5:1 minimum)

## Implementation Example (React + Tailwind)

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-body font-semibold
    transition-all duration-fast ease-out
    focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:-translate-y-px active:translate-y-0
  `;

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-amber active:bg-primary-700',
    secondary: 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-50',
    ghost: 'bg-transparent text-slate hover:bg-cream-warm',
    danger: 'bg-error-500 text-white hover:bg-error-700',
  };

  const sizes = {
    sm: 'h-8 px-3 text-body-sm rounded-md',
    md: 'h-10 px-4 text-body-md rounded-md',
    lg: 'h-12 px-6 text-body-md rounded-lg',
    xl: 'h-14 px-8 text-body-lg rounded-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
};
```

## Usage Guidelines

### Do
- Use primary button for single main action per view
- Use verb-first labels ("Add to Cart", not "Cart Add")
- Keep labels short (2-3 words max)
- Provide visual feedback on interaction

### Don't
- Don't use multiple primary buttons in close proximity
- Don't use all-caps (harder to read)
- Don't disable without explanation
- Don't make buttons too small on mobile
