# Dish Card Component

The dish card is the primary content unit for displaying menu items. It should make food look irresistible while providing essential ordering information.

## Variants

### Standard Card
Default card for menu grids and listings.

### Compact Card
Smaller card for sidebar recommendations or horizontal scrolling.

### Featured Card
Larger, more prominent card for highlighted dishes.

### List Item
Horizontal layout for order history or search results.

## Anatomy

```
┌─────────────────────────────────────┐
│                                     │
│         ┌─────────────────┐         │
│         │                 │         │
│         │   Food Image    │  ← 4:3 aspect ratio
│         │                 │         │
│         └─────────────────┘         │
│                                     │
│  Category Tag                       │
│                                     │
│  Dish Name                          │
│                                     │
│  Short description text that        │
│  wraps to two lines max...          │
│                                     │
│  ★★★★☆  4.5 (128 reviews)          │
│                                     │
│  ┌──────────┐      ┌──────────┐    │
│  │  $35.00  │      │ Add to   │    │
│  │          │      │  Cart    │    │
│  └──────────┘      └──────────┘    │
│                                     │
└─────────────────────────────────────┘
```

## Specifications

### Container
```css
background: var(--color-background-pure);
border-radius: var(--radius-xl);  /* 16px */
padding: var(--space-4);          /* 16px */
box-shadow: var(--shadow-card);
transition: all var(--duration-normal) var(--ease-out);

/* Hover state */
&:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}
```

### Image
```css
aspect-ratio: 4 / 3;
border-radius: var(--radius-lg);  /* 12px */
object-fit: cover;
filter: saturate(1.05) contrast(1.02);

/* Hover enhancement */
&:hover {
  filter: saturate(1.1) contrast(1.05) brightness(1.02);
  transform: scale(1.02);
}
```

### Category Tag
```css
font-family: var(--font-accent);
font-size: var(--font-size-sm);   /* 12px */
font-weight: 500;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--color-primary-600);
margin-top: var(--space-3);
```

### Dish Name
```css
font-family: var(--font-display);
font-size: var(--font-size-xl);   /* 20px */
font-weight: 600;
line-height: 1.3;
color: var(--color-text-primary);
margin-top: var(--space-2);
```

### Description
```css
font-family: var(--font-body);
font-size: var(--font-size-base);  /* 14px */
line-height: 1.5;
color: var(--color-text-tertiary);
margin-top: var(--space-2);

/* Clamp to 2 lines */
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
```

### Rating Section
```css
display: flex;
align-items: center;
gap: var(--space-2);
margin-top: var(--space-3);

.stars {
  color: var(--color-primary-500);
  font-size: 14px;
}

.rating-text {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}
```

### Price
```css
font-family: var(--font-accent);
font-size: var(--font-size-2xl);   /* 24px */
font-weight: 700;
color: var(--color-text-primary);

/* Original price (if discounted) */
.original-price {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-left: var(--space-2);
}
```

### Footer Actions
```css
display: flex;
justify-content: space-between;
align-items: center;
margin-top: var(--space-4);
padding-top: var(--space-4);
border-top: 1px solid var(--color-border-light);
```

## Size Variants

### Standard (Default)
```
Width: 280-320px
Image height: ~210-240px
Total height: ~400-440px
```

### Compact
```
Width: 200-240px
Image height: ~150-180px
Total height: ~300-340px
Reduced padding and font sizes
```

### Featured
```
Width: 360-400px
Image height: ~270-300px
Total height: ~480-520px
Enhanced shadow and typography
```

## Interactive States

### Default
Resting state with subtle shadow.

### Hover
```css
transform: translateY(-4px);
box-shadow: var(--shadow-lg);

.image {
  transform: scale(1.02);
}
```

### Focus
```css
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;
```

### Loading
Skeleton placeholder with shimmer animation.

### Out of Stock
```css
.image {
  filter: grayscale(0.6) opacity(0.7);
}

.content {
  opacity: 0.7;
}

/* Overlay badge */
.out-of-stock-badge {
  position: absolute;
  background: var(--color-text-primary);
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-full);
}
```

## Badges & Labels

### Discount Badge
```css
position: absolute;
top: var(--space-3);
left: var(--space-3);
background: var(--color-accent-paprika);
color: white;
padding: 4px 10px;
border-radius: var(--radius-full);
font-family: var(--font-accent);
font-size: 12px;
font-weight: 600;
```

### Vegetarian/Vegan Badge
```css
background: var(--color-accent-basil);
/* Icon: leaf */
```

### Popular Badge
```css
background: var(--color-primary-500);
/* Icon: flame or star */
```

### New Badge
```css
background: var(--color-info-500);
```

## Responsive Behavior

### Mobile (< 640px)
- Cards stack vertically or 2-column grid
- Reduced padding (12px)
- Smaller image height

### Tablet (640px - 1024px)
- 2-3 column grid
- Standard sizing

### Desktop (> 1024px)
- 3-4 column grid
- Full sizing with enhanced hover effects

## Animation

```css
/* Card entrance */
@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dish-card {
  animation: card-enter var(--duration-normal) var(--ease-out);
  animation-fill-mode: both;
}

/* Staggered animation for grids */
.dish-card:nth-child(1) { animation-delay: 0ms; }
.dish-card:nth-child(2) { animation-delay: 50ms; }
.dish-card:nth-child(3) { animation-delay: 100ms; }
.dish-card:nth-child(4) { animation-delay: 150ms; }
/* etc. */
```

## Implementation Example (React + Tailwind)

```tsx
interface DishCardProps {
  dish: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating: number;
    reviewCount: number;
    badges?: ('popular' | 'vegetarian' | 'new' | 'spicy')[];
    isAvailable?: boolean;
  };
  variant?: 'standard' | 'compact' | 'featured';
  onAddToCart?: (id: string) => void;
}

const DishCard = ({ dish, variant = 'standard', onAddToCart }: DishCardProps) => {
  const sizes = {
    standard: 'w-72',
    compact: 'w-56',
    featured: 'w-96',
  };

  return (
    <article
      className={`
        ${sizes[variant]}
        bg-white rounded-xl p-4
        shadow-card hover:shadow-card-hover
        transition-all duration-normal ease-out
        hover:-translate-y-1
        group
      `}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-food-card">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover food-image
                     group-hover:scale-102 transition-transform duration-normal"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {dish.badges?.includes('popular') && (
            <span className="bg-primary-500 text-white text-xs font-accent
                           px-2 py-1 rounded-full">
              Popular
            </span>
          )}
          {dish.originalPrice && (
            <span className="bg-accent-paprika text-white text-xs font-accent
                           px-2 py-1 rounded-full">
              {Math.round((1 - dish.price / dish.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <span className="font-accent text-xs uppercase tracking-wider text-primary-600">
          {dish.category}
        </span>

        <h3 className="font-display text-xl font-semibold text-charcoal mt-1">
          {dish.name}
        </h3>

        <p className="font-body text-sm text-stone mt-2 line-clamp-2">
          {dish.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <StarRating rating={dish.rating} />
          <span className="text-xs text-stone">
            {dish.rating} ({dish.reviewCount})
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-light">
          <div className="flex items-baseline gap-2">
            <span className="font-accent text-2xl font-bold text-charcoal">
              ${dish.price.toFixed(2)}
            </span>
            {dish.originalPrice && (
              <span className="text-sm text-pebble line-through">
                ${dish.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onAddToCart?.(dish.id)}
            isDisabled={!dish.isAvailable}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
};
```

## Usage Guidelines

### Do
- Use high-quality, appetizing food photography
- Keep descriptions concise and descriptive
- Show clear pricing and availability
- Maintain consistent card heights in grids

### Don't
- Don't use low-quality or generic stock photos
- Don't truncate dish names
- Don't hide prices until interaction
- Don't make cards too small to read comfortably
