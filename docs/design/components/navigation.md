# Navigation Component

The main navigation bar provides site-wide navigation, branding, and quick actions.

## Anatomy

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   🍽️ Oak & Barrel     Home  Menu  About  Contact     🔍  🛒 (3)  Sign In │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
     ↑                         ↑                           ↑
   Logo                   Nav Links                   Actions
```

## Specifications

### Container
```css
position: sticky;
top: 0;
z-index: var(--z-sticky);
height: var(--nav-height);  /* 72px desktop, 64px mobile */
background: var(--color-background-soft);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--color-border-light);
transition: all var(--duration-normal) var(--ease-out);

/* Scrolled state - more opaque */
&.scrolled {
  background: rgba(255, 251, 245, 0.95);
  box-shadow: var(--shadow-sm);
}
```

### Inner Container
```css
max-width: var(--container-7xl);  /* 1280px */
margin: 0 auto;
padding: 0 var(--space-6);
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
```

### Logo
```css
display: flex;
align-items: center;
gap: var(--space-2);

.logo-icon {
  width: 40px;
  height: 40px;
  color: var(--color-primary-500);
}

.logo-text {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}
```

### Navigation Links
```css
display: flex;
align-items: center;
gap: var(--space-8);

.nav-link {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) 0;
  position: relative;
  transition: color var(--duration-fast) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link.active {
  color: var(--color-primary-500);
}

/* Active indicator */
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary-500);
  border-radius: 1px;
}
```

### Action Buttons
```css
display: flex;
align-items: center;
gap: var(--space-4);

.icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  transition: all var(--duration-fast) var(--ease-out);
}

.icon-button:hover {
  background: var(--color-background-warm);
  color: var(--color-text-primary);
}
```

### Cart Badge
```css
position: relative;

.badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--color-primary-500);
  color: white;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Mobile Navigation

### Mobile Header
```css
height: var(--nav-height-mobile);  /* 64px */
padding: 0 var(--space-4);

/* Hamburger menu icon */
.menu-toggle {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Mobile Menu (Overlay)
```css
position: fixed;
inset: 0;
z-index: var(--z-overlay);
background: var(--color-background-soft);

/* Slide in animation */
animation: slide-in-right var(--duration-normal) var(--ease-out);

.nav-link-mobile {
  display: block;
  padding: var(--space-4) var(--space-6);
  font-size: var(--font-size-lg);
  border-bottom: 1px solid var(--color-border-light);
}
```

## States

### Default
Standard appearance with transparent/semi-transparent background.

### Scrolled
After scrolling past threshold (~50px):
- More opaque background
- Subtle shadow
- Slightly reduced height (optional)

### Mobile Open
- Menu overlay visible
- Hamburger transforms to X
- Body scroll locked

## Dropdown Menu

For items with submenus (e.g., Menu categories):

```css
.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  background: var(--color-background-pure);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-2);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-8px);
  transition: all var(--duration-fast) var(--ease-out);
}

.nav-link:hover .dropdown,
.nav-link:focus-within .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: block;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  transition: all var(--duration-fast);
}

.dropdown-item:hover {
  background: var(--color-background-warm);
  color: var(--color-text-primary);
}
```

## Implementation Example (React + Tailwind)

```tsx
interface NavProps {
  currentPath: string;
  cartItemCount: number;
  isAuthenticated: boolean;
}

const Navigation = ({ currentPath, cartItemCount, isAuthenticated }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`
        sticky top-0 z-sticky h-[72px]
        backdrop-blur-md transition-all duration-normal
        ${isScrolled
          ? 'bg-cream-DEFAULT/95 shadow-sm'
          : 'bg-cream-DEFAULT/80'}
        border-b border-border-light
      `}
    >
      <div className="max-w-container-xl mx-auto px-6 h-full
                      flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ChefHatIcon className="w-10 h-10 text-primary-500" />
          <span className="font-display text-xl font-bold text-charcoal">
            Oak & Barrel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                font-body font-medium text-base
                transition-colors duration-fast
                relative py-2
                ${currentPath === link.href
                  ? 'text-primary-500'
                  : 'text-slate hover:text-charcoal'}
              `}
            >
              {link.label}
              {currentPath === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5
                               bg-primary-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center
                           text-slate hover:bg-cream-warm hover:text-charcoal
                           transition-colors duration-fast">
            <SearchIcon className="w-5 h-5" />
          </button>

          <button className="w-10 h-10 rounded-full flex items-center justify-center
                           text-slate hover:bg-cream-warm hover:text-charcoal
                           transition-colors duration-fast relative">
            <ShoppingCartIcon className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px]
                             bg-primary-500 text-white text-[11px] font-semibold
                             rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          {isAuthenticated ? (
            <AvatarDropdown />
          ) : (
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <MobileMenu
          links={navLinks}
          currentPath={currentPath}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};
```

## Accessibility

- Skip to main content link
- Keyboard navigation support
- `aria-current="page"` for active link
- `aria-expanded` for dropdown/mobile menu
- Focus trap in mobile menu
- Escape key closes menus

## Usage Guidelines

### Do
- Keep navigation items minimal (5-7 max)
- Use clear, concise labels
- Highlight current location
- Provide easy access to cart

### Don't
- Don't hide primary navigation on desktop
- Don't use dropdown menus excessively
- Don't make logo too small
- Don't forget mobile users
