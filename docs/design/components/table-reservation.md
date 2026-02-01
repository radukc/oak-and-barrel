# Table Reservation Component

A prominent CTA section for booking restaurant tables, combining visual appeal with functional form elements.

## Variants

### Banner Style
Full-width promotional banner with form inline or modal trigger.

### Card Style
Compact card that can be placed in sidebars or pages.

### Modal Form
Full reservation form in a modal dialog.

## Banner Anatomy

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                                                                     │ │
│  │  Do You Have Any Dinner           ┌────────────────────────────┐   │ │
│  │  Plan Today? Reserve              │                            │   │ │
│  │  Your Table                       │     [Food Image]           │   │ │
│  │                                   │     Family/Group           │   │ │
│  │  Book your table now and enjoy    │     Dining Photo           │   │ │
│  │  an unforgettable dining          │                            │   │ │
│  │  experience.                      └────────────────────────────┘   │ │
│  │                                                                     │ │
│  │  ┌───────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📅 Date     │ 🕐 Time    │ 👥 Guests  │ [ Reserve Now ]       │ │ │
│  │  └───────────────────────────────────────────────────────────────┘ │ │
│  │                                                                     │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

## Specifications

### Banner Container
```css
background: linear-gradient(
  135deg,
  var(--color-background-warm) 0%,
  var(--color-cream-deep) 100%
);
border-radius: var(--radius-2xl);
padding: var(--space-12);
margin: var(--space-16) 0;
position: relative;
overflow: hidden;

/* Decorative background pattern */
&::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/patterns/food-pattern.svg');
  background-size: 200px;
  opacity: 0.03;
  pointer-events: none;
}
```

### Content Grid
```css
display: grid;
grid-template-columns: 1.2fr 1fr;
gap: var(--space-12);
align-items: center;

@media (max-width: 1024px) {
  grid-template-columns: 1fr;
  gap: var(--space-8);
}
```

### Headline
```css
font-family: var(--font-display);
font-size: var(--font-size-4xl);  /* 40px */
font-weight: 700;
line-height: 1.2;
color: var(--color-text-primary);

/* Highlighted word */
.highlight {
  color: var(--color-primary-500);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 8px;
  background: var(--color-primary-200);
  z-index: -1;
  border-radius: 2px;
}
```

### Description
```css
font-family: var(--font-body);
font-size: var(--font-size-md);
line-height: 1.6;
color: var(--color-text-secondary);
margin-top: var(--space-4);
max-width: 400px;
```

### Quick Form Row
```css
display: flex;
gap: var(--space-3);
margin-top: var(--space-8);
background: var(--color-background-pure);
padding: var(--space-3);
border-radius: var(--radius-xl);
box-shadow: var(--shadow-lg);

@media (max-width: 768px) {
  flex-direction: column;
  padding: var(--space-4);
}
```

### Form Input (Inline)
```css
flex: 1;
display: flex;
align-items: center;
gap: var(--space-2);
padding: var(--space-3) var(--space-4);
background: var(--color-background-soft);
border-radius: var(--radius-md);
border: 1px solid transparent;
cursor: pointer;
transition: all var(--duration-fast) var(--ease-out);

&:hover {
  background: var(--color-background-warm);
}

&:focus-within {
  border-color: var(--color-primary-500);
  background: var(--color-background-pure);
}

.icon {
  color: var(--color-primary-500);
  width: var(--icon-sm);
  height: var(--icon-sm);
  flex-shrink: 0;
}

.label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
}
```

### Reserve Button
```css
flex-shrink: 0;
height: auto;
padding: var(--space-4) var(--space-8);
background: var(--color-primary-500);
color: white;
font-weight: 600;
border-radius: var(--radius-md);
box-shadow: var(--shadow-amber);
transition: all var(--duration-fast) var(--ease-out);

&:hover {
  background: var(--color-primary-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-amber-lg);
}
```

### Image
```css
width: 100%;
max-width: 450px;
border-radius: var(--radius-xl);
box-shadow: var(--shadow-xl);
transform: rotate(3deg);

@media (max-width: 1024px) {
  display: none;  /* Hide on mobile */
}
```

## Card Variant

```css
.reservation-card {
  background: var(--color-background-pure);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);

  .card-title {
    font-family: var(--font-display);
    font-size: var(--font-size-xl);
    font-weight: 600;
  }

  .form-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    margin-top: var(--space-5);
  }
}
```

## Full Form Fields

### Date Picker
```tsx
<DateInput
  label="Date"
  icon={<CalendarIcon />}
  min={today}
  max={thirtyDaysFromNow}
/>
```

### Time Picker
```tsx
<Select
  label="Time"
  icon={<ClockIcon />}
  options={availableTimeSlots}
  placeholder="Select time"
/>
```

### Guest Count
```tsx
<Select
  label="Guests"
  icon={<UsersIcon />}
  options={[
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5 Guests' },
    { value: '6', label: '6+ Guests' },
  ]}
/>
```

### Contact Info
```tsx
<Input label="Name" placeholder="Your full name" required />
<Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" required />
<Input label="Email" type="email" placeholder="you@example.com" />
<Textarea label="Special Requests" placeholder="Allergies, occasion, seating preferences..." />
```

## Implementation Example (React + Tailwind)

```tsx
interface ReservationBannerProps {
  onReserve?: (data: ReservationData) => void;
}

const ReservationBanner = ({ onReserve }: ReservationBannerProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickReserve = () => {
    if (date && time && guests) {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-cream-warm to-cream-deep
                        rounded-2xl p-12 my-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/patterns/food.svg')]
                      bg-[length:200px] opacity-[0.03] pointer-events-none" />

      <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="font-display text-4xl font-bold text-charcoal leading-tight">
            Do You Have Any Dinner Plan Today?{' '}
            <span className="text-primary-500 relative">
              Reserve
              <span className="absolute bottom-1 left-0 right-0 h-2
                             bg-primary-200 -z-10 rounded-sm" />
            </span>{' '}
            Your Table
          </h2>

          <p className="font-body text-base text-slate mt-4 max-w-md">
            Book your table now and enjoy an unforgettable dining experience
            with family and friends.
          </p>

          {/* Quick Form */}
          <div className="flex flex-wrap gap-3 mt-8 bg-white p-3
                          rounded-xl shadow-lg">
            {/* Date */}
            <button
              onClick={() => {/* Open date picker */}}
              className="flex-1 min-w-[140px] flex items-center gap-2 px-4 py-3
                         bg-cream rounded-md hover:bg-cream-warm transition-colors"
            >
              <CalendarIcon className="w-5 h-5 text-primary-500" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-stone">
                  Date
                </div>
                <div className="text-sm font-medium text-charcoal">
                  {date ? format(date, 'MMM d') : 'Select'}
                </div>
              </div>
            </button>

            {/* Time */}
            <button
              onClick={() => {/* Open time picker */}}
              className="flex-1 min-w-[120px] flex items-center gap-2 px-4 py-3
                         bg-cream rounded-md hover:bg-cream-warm transition-colors"
            >
              <ClockIcon className="w-5 h-5 text-primary-500" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-stone">
                  Time
                </div>
                <div className="text-sm font-medium text-charcoal">
                  {time || 'Select'}
                </div>
              </div>
            </button>

            {/* Guests */}
            <button
              onClick={() => {/* Open guests picker */}}
              className="flex-1 min-w-[120px] flex items-center gap-2 px-4 py-3
                         bg-cream rounded-md hover:bg-cream-warm transition-colors"
            >
              <UsersIcon className="w-5 h-5 text-primary-500" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-stone">
                  Guests
                </div>
                <div className="text-sm font-medium text-charcoal">
                  {guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}
                </div>
              </div>
            </button>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="lg"
              className="px-8 shadow-amber hover:shadow-amber-lg
                         hover:-translate-y-0.5"
              onClick={handleQuickReserve}
            >
              Reserve Now
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img
            src="/images/family-dining.jpg"
            alt="Family enjoying dinner"
            className="w-full max-w-md rounded-xl shadow-xl transform rotate-3"
          />
        </div>
      </div>

      {/* Full Form Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={{ date, time, guests }}
        onSubmit={onReserve}
      />
    </section>
  );
};

// Reservation Modal
const ReservationModal = ({ isOpen, onClose, initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    ...initialData,
    name: '',
    phone: '',
    email: '',
    requests: '',
  });

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-modal" />

      <div className="fixed inset-0 z-modal flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl shadow-2xl w-full max-w-lg
                                  p-8 animate-scale-in">
          <Dialog.Title className="font-display text-2xl font-bold text-charcoal">
            Complete Your Reservation
          </Dialog.Title>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
              <Input
                label="Time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>

            <Select
              label="Number of Guests"
              value={formData.guests}
              onChange={(value) => setFormData({ ...formData, guests: value })}
              options={guestOptions}
              required
            />

            <Input
              label="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              required
            />

            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
            />

            <Textarea
              label="Special Requests"
              value={formData.requests}
              onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
              placeholder="Allergies, special occasion, seating preferences..."
              rows={3}
            />

            <div className="flex gap-3 mt-6">
              <Button variant="ghost" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button variant="primary" type="submit" className="flex-1">
                Confirm Reservation
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
```

## States

### Default
Form ready for input.

### Loading
Checking availability or submitting.

### Success
Reservation confirmed with confirmation details.

### Error
Validation errors or unavailable time slot.

## Accessibility

- `role="form"` with `aria-label`
- Required fields marked with `aria-required`
- Date/time pickers keyboard accessible
- Focus trap in modal
- Escape closes modal
- Clear success/error announcements

## Usage Guidelines

### Do
- Make the CTA prominent and inviting
- Show available time slots only
- Confirm reservation details clearly
- Send confirmation email/SMS

### Don't
- Don't require too many fields upfront
- Don't hide important info (minimum party size, etc.)
- Don't allow past dates
- Don't forget mobile users
