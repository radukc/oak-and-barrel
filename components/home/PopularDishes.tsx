import { getPopularItems } from "@/lib/menu-data";
import { DishCard } from "@/components/shared/DishCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function PopularDishes() {
  const popularItems = getPopularItems();

  return (
    <section className="py-20 bg-[var(--color-cream-warm)]">
      <div className="max-w-[80rem] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-500)]">
            Our Favorites
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-charcoal)] mt-2">
            Popular Dishes
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-slate)] mt-4 max-w-md mx-auto">
            Discover our most loved dishes, handpicked by our chefs and celebrated by our guests.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map((dish, index) => (
            <div
              key={dish.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DishCard dish={dish} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/menu">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
