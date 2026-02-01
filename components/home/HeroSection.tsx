"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  onReserveClick: () => void;
}

export function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] bg-[var(--color-cream)] overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-24 right-[10%] w-96 h-96 rounded-full bg-[var(--color-primary-500)]/10 blur-3xl" />
      <div className="absolute -bottom-12 left-[5%] w-72 h-72 rounded-full bg-[var(--color-primary-300)]/10 blur-3xl" />

      <div className="relative max-w-[80rem] mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="animate-fade-in-up">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[var(--color-charcoal)] leading-[1.1]">
            Where Every Meal is a{" "}
            <span className="text-[var(--color-primary-500)]">Celebration</span>
          </h1>

          <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-slate)] mt-6 max-w-md leading-relaxed">
            Experience the finest steaks, freshest sushi, gourmet burgers, and
            craft beers in the heart of New York City. A dining destination
            where quality meets passion.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary" size="lg" onClick={onReserveClick}>
              Reserve a Table
            </Button>
            <Button variant="secondary" size="lg" onClick={() => window.location.href = '/menu'}>
              View Menu
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: "Est. 2004", label: "Serving NYC" },
              { value: "NYC", label: "Location" },
              { value: "Live Music", label: "Fri & Sun" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-left animate-fade-in-up"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="font-[family-name:var(--font-accent)] text-2xl font-bold text-[var(--color-charcoal)]">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-body)] text-sm text-[var(--color-stone)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className="relative animate-fade-in-up lg:block"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src="/hero-ambiance.webp"
              alt="Restaurant ambiance with warm lighting"
              width={600}
              height={450}
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              priority
            />

            {/* Floating dishes */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full shadow-lg overflow-hidden animate-float hidden lg:block"
              style={{ animationDelay: "0s" }}
            >
              <Image
                src="/ribeye-thumb.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full shadow-lg overflow-hidden animate-float hidden lg:block"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/dragon-roll-thumb.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute top-1/2 -right-8 w-16 h-16 rounded-full shadow-lg overflow-hidden animate-float hidden lg:block"
              style={{ animationDelay: "2s" }}
            >
              <Image
                src="/wagyu-burger-thumb.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
