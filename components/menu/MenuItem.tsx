import Image from "next/image";
import { Flame, ChefHat } from "lucide-react";
import type { MenuItem as MenuItemType } from "@/lib/menu-data";
import { formatPrice } from "@/lib/utils";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="96px"
        />
        {item.badge && (
          <div className="absolute top-1 left-1">
            <span
              className={`
                inline-flex items-center justify-center
                w-6 h-6 rounded-full
                ${
                  item.badge === "popular"
                    ? "bg-[var(--color-primary-500)]"
                    : "bg-[var(--color-accent-truffle)]"
                }
              `}
            >
              {item.badge === "popular" ? (
                <Flame className="w-3 h-3 text-white" />
              ) : (
                <ChefHat className="w-3 h-3 text-white" />
              )}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-charcoal)]">
            {item.name}
          </h3>
          <span className="font-[family-name:var(--font-accent)] text-lg font-bold text-[var(--color-primary-600)] flex-shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-stone)] mt-1 line-clamp-2">
          {item.description}
        </p>
        {item.badge && (
          <span className="inline-block mt-2 text-xs font-medium text-[var(--color-primary-600)]">
            {item.badge === "popular" ? "Popular" : "Chef's Pick"}
          </span>
        )}
      </div>
    </div>
  );
}
