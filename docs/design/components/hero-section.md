# Hero Section Component

The hero section creates an impactful first impression and communicates the core value proposition.

## Variants

### Primary Hero (Homepage)
Full-width, prominent hero with headline, subtext, CTA, and featured imagery.

### Category Hero
Smaller hero for category/menu pages with title and optional filter.

### Promotional Hero
For special offers, events, or seasonal promotions.

## Primary Hero Anatomy

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                                                    ┌─────────────────┐   │
│     We Serve The Taste                             │                 │   │
│     You Love 🍝                                    │   Hero Image    │   │
│                                                    │   (Food Photo)  │   │
│     Experience authentic flavors crafted          │                 │   │
│     with passion and the finest ingredients.      └─────────────────┘   │
│                                                                          │
│     ┌─────────────────┐  ┌─────────────────┐                            │
│     │   Order Now     │  │   View Menu     │      ○ ○ ○ ● ○            │
│     └─────────────────┘  └─────────────────┘      (floating dishes)     │
│                                                                          │
│     ┌──────────┐ ┌──────────┐ ┌──────────┐                              │
│     │  500+    │ │  4.9★    │ │  30min   │                              │
│     │  Dishes  │ │  Rating  │ │ Delivery │                              │
│     └──────────┘ └──────────┘ └──────────┘                              │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

## Specifications

### Container
```css
min-height: 80vh;
max-height: 900px;
background: var(--color-background-soft);
padding: var(--space-16) 0;
position: relative;
overflow: hidden;

/* Warm gradient overlay */
&::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 30% 50%,
    rgba(255, 245, 230, 0.8) 0%,
    transparent 70%
  );
  pointer-events: none;
}
```

### Content Grid
```css
max-width: var(--container-7xl);
margin: 0 auto;
padding: 0 var(--space-6);
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--space-12);
align-items: center;

@media (max-width: 1024px) {
  grid-template-columns: 1fr;
  text-align: center;
}
```

### Headline
```css
font-family: var(--font-display);
font-size: clamp(2.5rem, 5vw, 4.5rem);  /* Responsive 40-72px */
font-weight: 700;
line-height: 1.1;
color: var(--color-text-primary);
letter-spacing: -0.02em;

/* Emoji accent */
.emoji {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}
```

### Subheadline
```css
font-family: var(--font-body);
font-size: var(--font-size-lg);  /* 18px */
line-height: 1.6;
color: var(--color-text-secondary);
margin-top: var(--space-6);
max-width: 480px;
```

### CTA Group
```css
display: flex;
gap: var(--space-4);
margin-top: var(--space-8);

@media (max-width: 640px) {
  flex-direction: column;
}
```

### Stats Row
```css
display: flex;
gap: var(--space-8);
margin-top: var(--space-12);

.stat-item {
  text-align: left;
}

.stat-value {
  font-family: var(--font-accent);
  font-size: var(--font-size-3xl);  /* 32px */
  font-weight: 700;
  color: var(--color-text-primary);
}

.stat-label {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin-top: var(--space-1);
}
```

### Hero Image
```css
position: relative;
width: 100%;
max-width: 600px;

.main-image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  filter: saturate(1.05);
}

/* Floating decorative dishes */
.floating-dish {
  position: absolute;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  animation: float 4s ease-in-out infinite;
}

.floating-dish:nth-child(1) {
  top: 10%;
  right: -10%;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
}

.floating-dish:nth-child(2) {
  bottom: 15%;
  left: -5%;
  width: 100px;
  height: 100px;
  animation-delay: 1s;
}

.floating-dish:nth-child(3) {
  top: 50%;
  right: -15%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
}
```

### Background Elements
```css
/* Decorative circles */
.bg-circle {
  position: absolute;
  border-radius: var(--radius-full);
  opacity: 0.1;
  pointer-events: none;
}

.bg-circle-1 {
  width: 400px;
  height: 400px;
  background: var(--color-primary-500);
  top: -100px;
  right: 10%;
}

.bg-circle-2 {
  width: 300px;
  height: 300px;
  background: var(--color-primary-300);
  bottom: -50px;
  left: 5%;
}
```

## Category Hero

Smaller hero for interior pages.

```css
min-height: 300px;
padding: var(--space-12) 0;
background: linear-gradient(
  135deg,
  var(--color-background-soft) 0%,
  var(--color-background-warm) 100%
);

.category-title {
  font-family: var(--font-display);
  font-size: var(--font-size-4xl);  /* 40px */
  font-weight: 700;
  text-align: center;
}

.category-description {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  text-align: center;
  margin-top: var(--space-4);
  max-width: 600px;
  margin-inline: auto;
}

/* Breadcrumb */
.breadcrumb {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-4);
}
```

## Animations

### Entrance Animation
```css
.hero-content {
  animation: fade-in-up var(--duration-slow) var(--ease-out);
}

.hero-image {
  animation: fade-in-up var(--duration-slow) var(--ease-out);
  animation-delay: 150ms;
}

.stats-row {
  animation: fade-in-up var(--duration-slow) var(--ease-out);
  animation-delay: 300ms;
}
```

### Floating Animation
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
}
```

### Parallax (Optional)
```javascript
// Subtle parallax on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroImage = document.querySelector('.hero-image');
  heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
});
```

## Implementation Example (React + Tailwind)

```tsx
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  heroImage: string;
  floatingImages?: string[];
  stats?: { value: string; label: string }[];
}

const HeroSection = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  heroImage,
  floatingImages = [],
  stats = [],
}: HeroProps) => {
  return (
    <section className="relative min-h-[80vh] max-h-[900px] bg-cream overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cream-warm/80
                      via-transparent to-transparent pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute -top-24 right-[10%] w-96 h-96 rounded-full
                      bg-primary-500/10" />
      <div className="absolute -bottom-12 left-[5%] w-72 h-72 rounded-full
                      bg-primary-300/10" />

      <div className="relative max-w-container-xl mx-auto px-6 py-16
                      grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="animate-fade-in-up">
          <h1 className="font-display text-display-xl text-charcoal">
            {headline.split(' ').map((word, i) => (
              <span key={i}>
                {word}{' '}
                {word.includes('emoji:') && (
                  <span className="inline-block animate-float">
                    {getEmoji(word)}
                  </span>
                )}
              </span>
            ))}
          </h1>

          <p className="font-body text-body-lg text-slate mt-6 max-w-md">
            {subheadline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary" size="lg" asChild>
              <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
            </Button>

            {secondaryCTA && (
              <Button variant="secondary" size="lg" asChild>
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>

          {stats.length > 0 && (
            <div className="flex gap-8 mt-12 animate-fade-in-up"
                 style={{ animationDelay: '300ms' }}>
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="font-accent text-3xl font-bold text-charcoal">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-stone mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative animate-fade-in-up"
             style={{ animationDelay: '150ms' }}>
          <img
            src={heroImage}
            alt="Featured dish"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl
                       food-image"
          />

          {/* Floating dishes */}
          {floatingImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`
                absolute w-24 h-24 rounded-full shadow-lg object-cover
                animate-float
                ${i === 0 ? 'top-[10%] -right-[10%]' : ''}
                ${i === 1 ? 'bottom-[15%] -left-[5%]' : ''}
                ${i === 2 ? 'top-[50%] -right-[15%] w-20 h-20' : ''}
              `}
              style={{ animationDelay: `${i}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

## Responsive Behavior

### Mobile (< 768px)
- Single column, stacked layout
- Centered text alignment
- Smaller headline (40px)
- Image below content
- Stats in 2x2 grid

### Tablet (768px - 1024px)
- Still single column but larger
- Image may appear alongside on landscape

### Desktop (> 1024px)
- Two column layout
- Full-size typography
- Floating decorative elements visible

## Accessibility

- Semantic `<section>` with `aria-label`
- `<h1>` for main headline (only one per page)
- Decorative images have empty `alt=""`
- Focus visible on CTAs
- Reduced motion support

## Usage Guidelines

### Do
- Use high-quality, appetizing hero images
- Keep headline under 8 words
- Single clear CTA (secondary optional)
- Ensure text is readable over backgrounds

### Don't
- Don't use autoplay videos without controls
- Don't hide important info in decorative elements
- Don't use low-contrast text
- Don't make the section too tall on mobile
