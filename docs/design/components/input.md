# Input Component

Form input fields for user data entry including text, email, phone, and number inputs.

## Variants

### Text Input (Default)
Standard single-line text input.

### Textarea
Multi-line text input.

### Select
Dropdown selection.

### Search
Input with search icon and clear button.

## Anatomy

```
┌───────────────────────────────────────────────┐
│  Label                            (Optional)  │
├───────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────┐  │
│  │ [icon]  Placeholder text...    [action] │  │
│  └─────────────────────────────────────────┘  │
│  Helper text or error message                 │
└───────────────────────────────────────────────┘
```

## Specifications

### Container
```css
display: flex;
flex-direction: column;
gap: var(--space-1-5);
```

### Label
```css
font-family: var(--font-body);
font-size: var(--font-size-sm);  /* 14px */
font-weight: 500;
color: var(--color-text-primary);

/* Required indicator */
.required::after {
  content: ' *';
  color: var(--color-error-500);
}

/* Optional indicator */
.optional::after {
  content: ' (optional)';
  font-weight: 400;
  color: var(--color-text-tertiary);
}
```

### Input Field
```css
width: 100%;
height: var(--input-height-md);  /* 40px */
padding: 0 var(--space-4);
background: var(--color-background-pure);
border: 1px solid var(--color-border-default);
border-radius: var(--radius-md);
font-family: var(--font-body);
font-size: var(--font-size-md);  /* 16px */
color: var(--color-text-primary);
transition: all var(--duration-fast) var(--ease-out);

/* With icon */
&.has-left-icon {
  padding-left: var(--space-10);  /* 40px */
}

&.has-right-icon {
  padding-right: var(--space-10);
}
```

### Placeholder
```css
&::placeholder {
  color: var(--color-text-placeholder);
}
```

### Helper Text
```css
font-family: var(--font-body);
font-size: var(--font-size-sm);  /* 12px */
color: var(--color-text-tertiary);
```

### Icon
```css
position: absolute;
top: 50%;
transform: translateY(-50%);
width: var(--icon-sm);  /* 20px */
height: var(--icon-sm);
color: var(--color-text-tertiary);

.left-icon {
  left: var(--space-3);
}

.right-icon {
  right: var(--space-3);
}
```

## States

### Default
```css
border-color: var(--color-border-default);
background: var(--color-background-pure);
```

### Hover
```css
border-color: var(--color-border-strong);
```

### Focus
```css
border-color: var(--color-primary-500);
outline: none;
box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
```

### Filled
```css
background: var(--color-background-soft);
border-color: var(--color-border-default);
```

### Disabled
```css
background: var(--color-background-muted);
color: var(--color-text-disabled);
cursor: not-allowed;
opacity: 0.6;
```

### Error
```css
border-color: var(--color-error-500);

&:focus {
  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.15);
}

.helper-text {
  color: var(--color-error-500);
}
```

### Success
```css
border-color: var(--color-success-500);
```

## Size Variants

| Size | Height | Padding X | Font Size |
|------|--------|-----------|-----------|
| `sm` | 32px | 12px | 14px |
| `md` | 40px | 16px | 16px |
| `lg` | 48px | 16px | 16px |

## Textarea

```css
min-height: 120px;
padding: var(--space-3) var(--space-4);
resize: vertical;
line-height: 1.5;

/* Auto-resize (with JS) */
&.auto-resize {
  overflow: hidden;
  resize: none;
}
```

## Select

```css
appearance: none;
background-image: url("data:image/svg+xml,...");  /* Chevron icon */
background-repeat: no-repeat;
background-position: right var(--space-3) center;
background-size: var(--icon-sm);
padding-right: var(--space-10);
cursor: pointer;
```

## Search Input

```css
/* Search icon on left */
padding-left: var(--space-10);

/* Clear button on right (when has value) */
.clear-button {
  position: absolute;
  right: var(--space-2);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  color: var(--color-text-tertiary);
  opacity: 0;
  transition: opacity var(--duration-fast);
}

&:not(:placeholder-shown) .clear-button {
  opacity: 1;
}

.clear-button:hover {
  background: var(--color-background-muted);
  color: var(--color-text-primary);
}
```

## Implementation Example (React + Tailwind)

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
  isRequired?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  inputSize = 'md',
  isRequired,
  className,
  ...props
}, ref) => {
  const sizes = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-base',
  };

  const hasError = !!error;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-charcoal">
          {label}
          {isRequired && <span className="text-error-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2
                         text-stone pointer-events-none">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          className={`
            w-full ${sizes[inputSize]}
            px-4 ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}
            bg-white border rounded-md
            font-body text-charcoal
            placeholder:text-pebble
            transition-all duration-fast ease-out
            hover:border-border-strong
            focus:border-primary-500 focus:outline-none
            focus:ring-3 focus:ring-primary-500/15
            disabled:bg-cream-deep disabled:text-pebble disabled:cursor-not-allowed
            ${hasError
              ? 'border-error-500 focus:ring-error-500/15'
              : 'border-border-DEFAULT'}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2
                         text-stone">
            {rightIcon}
          </span>
        )}
      </div>

      {(helperText || error) && (
        <p
          id={error ? `${props.id}-error` : undefined}
          className={`text-xs ${hasError ? 'text-error-500' : 'text-stone'}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

// Textarea variant
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  helperText,
  error,
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-charcoal">{label}</label>
      )}

      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3
          bg-white border rounded-md
          font-body text-base text-charcoal leading-relaxed
          placeholder:text-pebble
          transition-all duration-fast
          hover:border-border-strong
          focus:border-primary-500 focus:outline-none focus:ring-3
          focus:ring-primary-500/15
          resize-y min-h-[120px]
          ${error ? 'border-error-500' : 'border-border-DEFAULT'}
        `}
        {...props}
      />

      {(helperText || error) && (
        <p className={`text-xs ${error ? 'text-error-500' : 'text-stone'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});
```

## Input Types

### Email
```tsx
<Input type="email" leftIcon={<MailIcon />} placeholder="you@example.com" />
```

### Phone
```tsx
<Input type="tel" leftIcon={<PhoneIcon />} placeholder="+1 (555) 000-0000" />
```

### Password
```tsx
<Input
  type={showPassword ? 'text' : 'password'}
  rightIcon={
    <button onClick={togglePassword}>
      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
    </button>
  }
/>
```

### Number (Quantity)
```tsx
<div className="flex items-center border rounded-md">
  <button className="px-3 h-10" onClick={decrement}>-</button>
  <input type="number" className="w-16 text-center border-x" value={qty} />
  <button className="px-3 h-10" onClick={increment}>+</button>
</div>
```

## Accessibility

- Always associate label with input via `htmlFor`/`id`
- Use `aria-invalid` for error states
- Use `aria-describedby` to link helper/error text
- Ensure 4.5:1 contrast for text
- Focus visible for keyboard navigation
- Don't use placeholder as label

## Usage Guidelines

### Do
- Use clear, concise labels
- Provide helpful placeholder examples
- Show validation feedback immediately
- Group related inputs logically

### Don't
- Don't use placeholder as sole label
- Don't disable paste in password fields
- Don't require unnecessary fields
- Don't auto-focus without user action
