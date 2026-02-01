import Image from "next/image";
import { Flame, ChefHat } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";

interface DishCardProps {
  dish: MenuItem;
  variant?: "standard" | "compact" | "featured";
}

export function DishCard({ dish, variant = "standard" }: DishCardProps) {
  const sizes = {
    standard: "w-full",
    compact: "w-56",
    featured: "w-full md:w-96",
  };

  return (
    <article
      className={`
        ${sizes[variant]}
        bg-white rounded-xl p-4
        shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]
        transition-all duration-250 ease-out
        hover:-translate-y-1
        group
      `}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover food-image group-hover:scale-[1.02] transition-transform duration-250"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badge */}
        {dish.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`
                inline-flex items-center gap-1
                text-white text-xs font-[family-name:var(--font-accent)] font-medium
                px-2.5 py-1 rounded-full
                ${
                  dish.badge === "popular"
                    ? "bg-[var(--color-primary-500)]"
                    : "bg-[var(--color-accent-truffle)]"
                }
              `}
            >
              {dish.badge === "popular" ? (
                <Flame className="w-3 h-3" />
              ) : (
                <ChefHat className="w-3 h-3" />
              )}
              {dish.badge === "popular" ? "Popular" : "Chef's Pick"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-4">
        <span className="font-[family-name:var(--font-accent)] text-xs uppercase tracking-wider text-[var(--color-primary-600)]">
          {dish.category}
        </span>

        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-charcoal)] mt-1">
          {dish.name}
        </h3>

        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-stone)] mt-2 line-clamp-2">
          {dish.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border-light)]">
          <span className="font-[family-name:var(--font-accent)] text-2xl font-bold text-[var(--color-charcoal)]">
            {formatPrice(dish.price)}
          </span>
        </div>
      </div>
    </article>
  );
}
