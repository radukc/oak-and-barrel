"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-modal)]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[var(--color-charcoal)]/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`
            ${sizes[size]} w-full
            bg-white rounded-2xl shadow-2xl
            p-6 md:p-8
            animate-scale-in
            pointer-events-auto
            max-h-[90vh] overflow-y-auto
          `}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between mb-6">
              <h2
                id="modal-title"
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-charcoal)]"
              >
                {title}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close modal"
                className="!p-2 !min-w-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Close button if no title */}
          {!title && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 !p-2 !min-w-0"
            >
              <X className="w-5 h-5" />
            </Button>
          )}

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
