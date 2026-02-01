"use client";

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
  isRequired?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      inputSize = "md",
      isRequired,
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
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-stone)] pointer-events-none">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`
              w-full ${sizes[inputSize]}
              px-4 ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""}
              bg-white border rounded-md
              font-[family-name:var(--font-body)] text-[var(--color-charcoal)]
              placeholder:text-[var(--color-pebble)]
              transition-all duration-150 ease-out
              hover:border-[var(--color-border-strong)]
              focus:border-[var(--color-primary-500)] focus:outline-none
              focus:ring-[3px] focus:ring-[var(--color-primary-500)]/15
              disabled:bg-[var(--color-cream-deep)] disabled:text-[var(--color-pebble)] disabled:cursor-not-allowed
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
          />

          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-stone)]">
              {rightIcon}
            </span>
          )}
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

Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  isRequired?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, helperText, error, rows = 4, isRequired, className = "", id, ...props },
    ref
  ) => {
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

        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={`
            w-full px-4 py-3
            bg-white border rounded-md
            font-[family-name:var(--font-body)] text-base text-[var(--color-charcoal)] leading-relaxed
            placeholder:text-[var(--color-pebble)]
            transition-all duration-150
            hover:border-[var(--color-border-strong)]
            focus:border-[var(--color-primary-500)] focus:outline-none focus:ring-[3px]
            focus:ring-[var(--color-primary-500)]/15
            resize-y min-h-[120px]
            ${hasError ? "border-[var(--color-error-500)]" : "border-[var(--color-border)]"}
            ${className}
          `}
          {...props}
        />

        {(helperText || error) && (
          <p
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

Textarea.displayName = "Textarea";

export { Input, Textarea };
export type { InputProps, TextareaProps };
