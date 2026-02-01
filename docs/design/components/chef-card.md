# Chef Card Component

Displays chef profiles to build trust and showcase culinary expertise.

## Anatomy

```
┌─────────────────────────────────┐
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │      Chef Photo         │   │
│  │      (Portrait)         │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│        Chef Name                │
│        Executive Chef           │
│                                 │
│   ┌───────┐  ┌───────┐         │
│   │  🐦  │  │  📸  │         │
│   └───────┘  └───────┘         │
│                                 │
└─────────────────────────────────┘
```

## Specifications

### Container
```css
background: var(--color-background-pure);
border-radius: var(--radius-xl);
padding: var(--space-5);
box-shadow: var(--shadow-sm);
text-align: center;
transition: all var(--duration-normal) var(--ease-out);

&:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### Photo
```css
width: 100%;
aspect-ratio: 3 / 4;
border-radius: var(--radius-lg);
object-fit: cover;
filter: grayscale(0.1) contrast(1.02);

&:hover {
  filter: grayscale(0);
}
```

### Name
```css
font-family: var(--font-display);
font-size: var(--font-size-xl);
font-weight: 600;
color: var(--color-text-primary);
margin-top: var(--space-4);
```

### Title/Role
```css
font-family: var(--font-body);
font-size: var(--font-size-sm);
color: var(--color-primary-600);
font-weight: 500;
margin-top: var(--space-1);
```

### Bio (Optional)
```css
font-family: var(--font-body);
font-size: var(--font-size-sm);
color: var(--color-text-tertiary);
line-height: 1.5;
margin-top: var(--space-3);

/* Clamp to 3 lines */
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
```

### Social Links
```css
display: flex;
justify-content: center;
gap: var(--space-2);
margin-top: var(--space-4);

.social-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: var(--color-background-warm);
  color: var(--color-text-secondary);
  transition: all var(--duration-fast) var(--ease-out);
}

.social-link:hover {
  background: var(--color-primary-500);
  color: white;
}
```

## Variants

### Standard
Default card with photo, name, and title.

### Detailed
Includes bio and social links.

### Featured
Larger card for head chef, may include specialty tags.

### Minimal
Photo and name only, for smaller displays.

## Implementation Example (React + Tailwind)

```tsx
interface ChefCardProps {
  chef: {
    id: string;
    name: string;
    title: string;
    photo: string;
    bio?: string;
    specialties?: string[];
    social?: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
  variant?: 'standard' | 'detailed' | 'featured' | 'minimal';
}

const ChefCard = ({ chef, variant = 'standard' }: ChefCardProps) => {
  const isDetailed = variant === 'detailed' || variant === 'featured';

  return (
    <article
      className={`
        bg-white rounded-xl p-5 shadow-sm
        hover:shadow-lg hover:-translate-y-1
        transition-all duration-normal
        text-center
        ${variant === 'featured' ? 'p-6' : ''}
      `}
    >
      {/* Photo */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={chef.photo}
          alt={chef.name}
          className={`
            w-full aspect-[3/4] object-cover
            hover:scale-105 transition-transform duration-slow
            ${variant !== 'featured' ? 'grayscale-[10%]' : ''}
            hover:grayscale-0
          `}
        />
      </div>

      {/* Info */}
      <h3 className={`
        font-display font-semibold text-charcoal mt-4
        ${variant === 'featured' ? 'text-2xl' : 'text-xl'}
      `}>
        {chef.name}
      </h3>

      <p className="text-sm font-medium text-primary-600 mt-1">
        {chef.title}
      </p>

      {/* Specialties */}
      {isDetailed && chef.specialties && (
        <div className="flex flex-wrap justify-center gap-1 mt-3">
          {chef.specialties.map((specialty) => (
            <span
              key={specialty}
              className="text-xs bg-cream-warm text-stone px-2 py-0.5 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      )}

      {/* Bio */}
      {isDetailed && chef.bio && (
        <p className="text-sm text-stone mt-3 line-clamp-3">
          {chef.bio}
        </p>
      )}

      {/* Social Links */}
      {isDetailed && chef.social && (
        <div className="flex justify-center gap-2 mt-4">
          {chef.social.instagram && (
            <a
              href={chef.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-cream-warm text-slate
                         hover:bg-primary-500 hover:text-white
                         transition-colors duration-fast"
              aria-label={`${chef.name} on Instagram`}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          )}
          {chef.social.twitter && (
            <a
              href={chef.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-cream-warm text-slate
                         hover:bg-primary-500 hover:text-white
                         transition-colors duration-fast"
              aria-label={`${chef.name} on Twitter`}
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </article>
  );
};

// Grid layout for chef section
const ChefsSection = ({ chefs }: { chefs: Chef[] }) => {
  return (
    <section className="py-16">
      <div className="max-w-container-xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-accent text-sm uppercase tracking-wider text-primary-500">
            Our Team
          </span>
          <h2 className="font-display text-display-md text-charcoal mt-2">
            Meet Our Chefs
          </h2>
          <p className="font-body text-base text-slate mt-4 max-w-md mx-auto">
            Passionate culinary artists dedicated to crafting memorable dining experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef} variant="detailed" />
          ))}
        </div>
      </div>
    </section>
  );
};
```

## Animation

```css
/* Staggered entrance */
.chef-card {
  animation: fade-in-up var(--duration-normal) var(--ease-out) both;
}

.chef-card:nth-child(1) { animation-delay: 0ms; }
.chef-card:nth-child(2) { animation-delay: 100ms; }
.chef-card:nth-child(3) { animation-delay: 200ms; }
.chef-card:nth-child(4) { animation-delay: 300ms; }

/* Photo zoom on hover */
.chef-card:hover .photo {
  transform: scale(1.05);
}
```

## Usage Guidelines

### Do
- Use professional, well-lit photos
- Keep titles concise
- Show personality through bio
- Link to professional profiles

### Don't
- Don't use inconsistent photo styles
- Don't make cards too large
- Don't include personal contact info
- Don't forget alt text
