"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getMenuByCategory, type MenuCategory } from "@/lib/menu-data";
import { MenuItem } from "./MenuItem";

export function MenuBook() {
  const categories = getMenuByCategory();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToPage = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const pageWidth = container.clientWidth;
      container.scrollTo({
        left: pageWidth * index,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  }, []);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      scrollToPage(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < categories.length - 1) {
      scrollToPage(activeIndex + 1);
    }
  };

  // Handle scroll snap to update active index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const pageWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / pageWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < categories.length) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex, categories.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="py-12 bg-[var(--color-cream)]">
      <div className="max-w-[80rem] mx-auto px-6">
        {/* Category Navigation Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 p-1 bg-[var(--color-cream-warm)] rounded-full">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => scrollToPage(index)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                  ${
                    activeIndex === index
                      ? "bg-[var(--color-primary-500)] text-white shadow-md"
                      : "text-[var(--color-slate)] hover:text-[var(--color-charcoal)] hover:bg-white/50"
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Book Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full bg-white shadow-lg
              flex items-center justify-center
              transition-all duration-200
              ${
                activeIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 hover:bg-[var(--color-primary-50)] hover:shadow-xl"
              }
              hidden md:flex
            `}
            aria-label="Previous category"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--color-charcoal)]" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === categories.length - 1}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full bg-white shadow-lg
              flex items-center justify-center
              transition-all duration-200
              ${
                activeIndex === categories.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 hover:bg-[var(--color-primary-50)] hover:shadow-xl"
              }
              hidden md:flex
            `}
            aria-label="Next category"
          >
            <ChevronRight className="w-6 h-6 text-[var(--color-charcoal)]" />
          </button>

          {/* Scrollable Pages */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-snap-x scrollbar-hide md:mx-16"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {categories.map((category, index) => (
              <MenuPage key={category.name} category={category} index={index} />
            ))}
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => scrollToPage(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-200
                ${
                  activeIndex === index
                    ? "bg-[var(--color-primary-500)] w-8"
                    : "bg-[var(--color-border-strong)] hover:bg-[var(--color-primary-300)]"
                }
              `}
              aria-label={`Go to ${category.name}`}
            />
          ))}
        </div>

        {/* Swipe hint for mobile */}
        <p className="text-center text-sm text-[var(--color-stone)] mt-4 md:hidden">
          Swipe left or right to browse categories
        </p>
      </div>
    </section>
  );
}

interface MenuPageProps {
  category: MenuCategory;
  index: number;
}

function MenuPage({ category, index }: MenuPageProps) {
  return (
    <div
      className="flex-shrink-0 w-full scroll-snap-start px-4"
      style={{ scrollSnapAlign: "start" }}
    >
      <div
        className="bg-white rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] min-h-[500px] animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Category Header */}
        <div className="text-center mb-8 pb-6 border-b border-[var(--color-border-light)]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-charcoal)]">
            {category.name}
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[var(--color-slate)] mt-2">
            {category.description}
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
