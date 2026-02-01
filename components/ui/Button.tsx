"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      isDisabled = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-[family-name:var(--font-body)] font-semibold
      transition-all duration-150 ease-out
      focus-visible:outline-2 focus-visible:outline-[var(--color-primary-500)] focus-visible:outline-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      hover:-translate-y-px active:translate-y-0
    `;

    const variants = {
      primary:
        "bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)] hover:shadow-[var(--shadow-amber)] active:bg-[var(--color-primary-700)]",
      secondary:
        "bg-transparent text-[var(--color-primary-500)] border-2 border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)]",
      ghost:
        "bg-transparent text-[var(--color-slate)] hover:bg-[var(--color-cream-warm)]",
      danger:
        "bg-[var(--color-error-500)] text-white hover:bg-[var(--color-error-700)]",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm rounded-md min-w-[64px]",
      md: "h-10 px-4 text-base rounded-md min-w-[64px]",
      lg: "h-12 px-6 text-base rounded-lg min-w-[64px]",
      xl: "h-14 px-8 text-lg rounded-xl min-w-[64px]",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
