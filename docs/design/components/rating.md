# Rating Component

Star rating display and input component for dish reviews and feedback.

## Variants

### Display Rating (Read-only)
Shows existing rating with optional review count.

### Input Rating (Interactive)
Allows users to submit their own rating.

### Compact Rating
Minimal display for tight spaces.

## Display Rating Anatomy

```
★★★★☆  4.5  (128 reviews)
 ↑       ↑        ↑
Stars  Score   Count
```

## Specifications

### Star Container
```css
display: inline-flex;
align-items: center;
gap: var(--space-1);
```

### Star Icons
```css
width: 16px;   /* Default size */
height: 16px;

/* Filled star */
.star-filled {
  color: var(--color-primary-500);
}

/* Empty star */
.star-empty {
  color: var(--color-border-strong);
}

/* Partial fill (for half stars) */
.star-partial {
  position: relative;
  color: var(--color-border-strong);
}

.star-partial::before {
  content: '★';
  position: absolute;
  left: 0;
  color: var(--color-primary-500);
  overflow: hidden;
  width: 50%;  /* Adjustable for precise percentages */
}
```

### Score Text
```css
font-family: var(--font-body);
font-size: var(--font-size-base);
font-weight: 600;
color: var(--color-text-primary);
margin-left: var(--space-2);
```

### Review Count
```css
font-family: var(--font-body);
font-size: var(--font-size-sm);
color: var(--color-text-tertiary);
margin-left: var(--space-1);
```

## Size Variants

| Size | Star Size | Font Size | Gap |
|------|-----------|-----------|-----|
| `xs` | 12px | 12px | 2px |
| `sm` | 14px | 14px | 2px |
| `md` | 16px | 14px | 3px |
| `lg` | 20px | 16px | 4px |
| `xl` | 24px | 18px | 4px |

## Interactive Rating

### Hover State
```css
.star-interactive {
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-bounce);
}

.star-interactive:hover {
  transform: scale(1.15);
}

/* All stars up to hovered one fill */
.rating-input:hover .star:nth-child(-n+3) {
  color: var(--color-primary-400);  /* Preview fill */
}
```

### Click Animation
```css
@keyframes star-pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.star-selected {
  animation: star-pop var(--duration-fast) var(--ease-bounce);
}
```

### States

**Empty**
```css
.star { color: var(--color-border-strong); }
```

**Hover Preview**
```css
.star { color: var(--color-primary-400); }  /* Lighter amber */
```

**Selected**
```css
.star { color: var(--color-primary-500); }
```

**Disabled**
```css
.star {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
```

## Implementation Example (React + Tailwind)

```tsx
interface RatingProps {
  value: number;          // 0-5, supports decimals
  max?: number;           // Default 5
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showScore?: boolean;
  showCount?: boolean;
  reviewCount?: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

const Rating = ({
  value,
  max = 5,
  size = 'md',
  showScore = false,
  showCount = false,
  reviewCount,
  interactive = false,
  onChange,
  disabled = false,
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const sizes = {
    xs: { star: 'w-3 h-3', text: 'text-xs', gap: 'gap-0.5' },
    sm: { star: 'w-3.5 h-3.5', text: 'text-sm', gap: 'gap-0.5' },
    md: { star: 'w-4 h-4', text: 'text-sm', gap: 'gap-1' },
    lg: { star: 'w-5 h-5', text: 'text-base', gap: 'gap-1' },
    xl: { star: 'w-6 h-6', text: 'text-lg', gap: 'gap-1' },
  };

  const displayValue = hoverValue ?? value;

  const renderStar = (index: number) => {
    const filled = displayValue >= index + 1;
    const partial = !filled && displayValue > index && displayValue < index + 1;
    const fillPercent = partial ? (displayValue - index) * 100 : 0;

    return (
      <span
        key={index}
        className={`
          relative inline-block ${sizes[size].star}
          ${interactive && !disabled ? 'cursor-pointer hover:scale-110' : ''}
          transition-transform duration-fast ease-bounce
        `}
        onMouseEnter={() => interactive && !disabled && setHoverValue(index + 1)}
        onMouseLeave={() => interactive && setHoverValue(null)}
        onClick={() => interactive && !disabled && onChange?.(index + 1)}
      >
        {/* Background star (empty) */}
        <StarIcon
          className={`
            absolute inset-0 w-full h-full
            ${disabled ? 'text-border-strong/50' : 'text-border-strong'}
          `}
        />

        {/* Filled star */}
        {(filled || partial) && (
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: filled ? '100%' : `${fillPercent}%` }}
          >
            <StarIcon
              className={`
                w-full h-full
                ${disabled ? 'text-primary-300' : 'text-primary-500'}
              `}
              fill="currentColor"
            />
          </span>
        )}
      </span>
    );
  };

  return (
    <div
      className={`inline-flex items-center ${sizes[size].gap}`}
      role={interactive ? 'radiogroup' : 'img'}
      aria-label={`Rating: ${value} out of ${max} stars`}
    >
      <div className={`flex ${sizes[size].gap}`}>
        {Array.from({ length: max }, (_, i) => renderStar(i))}
      </div>

      {showScore && (
        <span className={`font-semibold text-charcoal ml-2 ${sizes[size].text}`}>
          {value.toFixed(1)}
        </span>
      )}

      {showCount && reviewCount !== undefined && (
        <span className={`text-stone ml-1 ${sizes[size].text}`}>
          ({reviewCount.toLocaleString()}{showCount === 'full' ? ' reviews' : ''})
        </span>
      )}
    </div>
  );
};

// Star icon component (using Lucide or similar)
const StarIcon = ({ className, fill }: { className?: string; fill?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill={fill || 'none'}
    stroke="currentColor"
    strokeWidth={fill ? 0 : 1.5}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
```

## Usage Examples

### Dish Card Rating
```tsx
<Rating value={4.5} size="sm" showScore />
// Output: ★★★★½ 4.5
```

### Review Summary
```tsx
<Rating value={4.7} size="lg" showScore showCount reviewCount={1284} />
// Output: ★★★★¾ 4.7 (1,284 reviews)
```

### User Input
```tsx
<Rating
  value={userRating}
  size="xl"
  interactive
  onChange={setUserRating}
/>
```

### Compact Badge
```tsx
<div className="flex items-center gap-1 bg-cream-warm px-2 py-1 rounded-full">
  <StarIcon className="w-3 h-3 text-primary-500" fill="currentColor" />
  <span className="text-xs font-medium">4.8</span>
</div>
```

## Accessibility

- `role="img"` for display, `role="radiogroup"` for input
- `aria-label` describes the rating
- Keyboard navigation for interactive (arrow keys)
- Focus visible outline
- `aria-checked` for selected star in input mode

## Animation

```css
/* Star fill animation on load */
@keyframes star-fill {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.star-animated {
  animation: star-fill var(--duration-normal) var(--ease-out);
  animation-fill-mode: both;
}

/* Stagger for multiple stars */
.star:nth-child(1) { animation-delay: 0ms; }
.star:nth-child(2) { animation-delay: 50ms; }
.star:nth-child(3) { animation-delay: 100ms; }
.star:nth-child(4) { animation-delay: 150ms; }
.star:nth-child(5) { animation-delay: 200ms; }
```

## Usage Guidelines

### Do
- Use half-star precision for display ratings
- Show review count for credibility
- Make interactive ratings large enough to tap
- Use amber/gold color for filled stars

### Don't
- Don't show ratings with fewer than 5 reviews
- Don't use more than 5 stars
- Don't make stars too small to see clearly
- Don't use confusing color schemes
