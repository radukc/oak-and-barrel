"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Users } from "lucide-react";

interface ReservationBannerProps {
  onReserveClick: () => void;
}

export function ReservationBanner({ onReserveClick }: ReservationBannerProps) {
  return (
    <section className="py-20 bg-[var(--color-cream-warm)]">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-[var(--color-cream-deep)] to-[var(--color-cream-subtle)] rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-primary-300)] rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--color-charcoal)] leading-tight">
                Do You Have Any Dinner Plan Today?{" "}
                <span className="text-[var(--color-primary-500)] relative">
                  Reserve
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-[var(--color-primary-200)] -z-10 rounded-sm" />
                </span>{" "}
                Your Table
              </h2>

              <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-slate)] mt-4 max-w-md">
                Book your table now and enjoy an unforgettable dining experience
                with family and friends.
              </p>

              {/* Quick Form Preview */}
              <div className="flex flex-wrap gap-3 mt-8 bg-white p-3 rounded-xl shadow-lg max-w-2xl">
                <div className="flex-1 min-w-[140px] flex items-center gap-2 px-4 py-3 bg-[var(--color-cream)] rounded-md">
                  <Calendar className="w-5 h-5 text-[var(--color-primary-500)]" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-[var(--color-stone)]">
                      Date
                    </div>
                    <div className="text-sm font-medium text-[var(--color-charcoal)]">
                      Select
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-[120px] flex items-center gap-2 px-4 py-3 bg-[var(--color-cream)] rounded-md">
                  <Clock className="w-5 h-5 text-[var(--color-primary-500)]" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-[var(--color-stone)]">
                      Time
                    </div>
                    <div className="text-sm font-medium text-[var(--color-charcoal)]">
                      Select
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-[120px] flex items-center gap-2 px-4 py-3 bg-[var(--color-cream)] rounded-md">
                  <Users className="w-5 h-5 text-[var(--color-primary-500)]" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-[var(--color-stone)]">
                      Guests
                    </div>
                    <div className="text-sm font-medium text-[var(--color-charcoal)]">
                      2 Guests
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="px-8 shadow-[var(--shadow-amber)] hover:shadow-[var(--shadow-amber-lg)] hover:-translate-y-0.5"
                  onClick={onReserveClick}
                >
                  Reserve Now
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <Image
                src="/family-dinner.webp"
                alt="Family enjoying dinner"
                width={450}
                height={300}
                className="w-full max-w-md rounded-xl shadow-xl transform rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
