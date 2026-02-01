"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  selectSize?: "sm" | "md" | "lg";
  isRequired?: boolean;
  leftIcon?: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      placeholder,
      selectSize = "md",
      isRequired,
      leftIcon,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: "h-8 text-sm",
      md: "h-10 text-base",
      lg: "h-12 text-base",
    };

    const hasError = !!error;
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-charcoal)]"
          >
            {label}
            {isRequired && (
              <span className="text-[var(--color-error-500)] ml-0.5">*</span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-stone)] pointer-events-none z-10">
              {leftIcon}
            </span>
          )}

          <select
            ref={ref}
            id={inputId}
            className={`
              w-full ${sizes[selectSize]}
              px-4 ${leftIcon ? "pl-10" : ""} pr-10
              bg-white border rounded-md
              font-[family-name:var(--font-body)] text-[var(--color-charcoal)]
              transition-all duration-150 ease-out
              hover:border-[var(--color-border-strong)]
              focus:border-[var(--color-primary-500)] focus:outline-none
              focus:ring-[3px] focus:ring-[var(--color-primary-500)]/15
              disabled:bg-[var(--color-cream-deep)] disabled:text-[var(--color-pebble)] disabled:cursor-not-allowed
              appearance-none cursor-pointer
              ${
                hasError
                  ? "border-[var(--color-error-500)] focus:ring-[var(--color-error-500)]/15"
                  : "border-[var(--color-border)]"
              }
              ${className}
            `}
            aria-invalid={hasError}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-stone)] pointer-events-none" />
        </div>

        {(helperText || error) && (
          <p
            id={error ? `${inputId}-error` : undefined}
            className={`text-xs ${
              hasError ? "text-[var(--color-error-500)]" : "text-[var(--color-stone)]"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
export type { SelectProps, SelectOption };
