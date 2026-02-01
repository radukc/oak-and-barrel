"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

interface NavigationProps {
  onReserveClick?: () => void;
}

export function Navigation({ onReserveClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        sticky top-0 z-[200] h-[72px]
        backdrop-blur-md transition-all duration-250
        ${
          isScrolled
            ? "bg-[var(--color-cream)]/95 shadow-sm"
            : "bg-[var(--color-cream)]/80"
        }
        border-b border-[var(--color-border-light)]
      `}
    >
      <div className="max-w-[80rem] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <UtensilsCrossed className="w-9 h-9 text-[var(--color-primary-500)]" />
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-charcoal)]">
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
                font-[family-name:var(--font-body)] font-medium text-base
                transition-colors duration-150
                relative py-2
                ${
                  pathname === link.href
                    ? "text-[var(--color-primary-500)]"
                    : "text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
                }
              `}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary-500)] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            size="md"
            onClick={onReserveClick}
            className="hidden sm:inline-flex"
          >
            Reserve a Table
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center text-[var(--color-charcoal)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-[300] bg-[var(--color-cream)] md:hidden animate-fade-in">
          <nav className="flex flex-col p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  py-4 text-lg font-medium
                  border-b border-[var(--color-border-light)]
                  ${
                    pathname === link.href
                      ? "text-[var(--color-primary-500)]"
                      : "text-[var(--color-charcoal)]"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onReserveClick?.();
              }}
              className="mt-6"
            >
              Reserve a Table
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
