import { Leaf, Users, Music, Beer } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description:
      "We source only the finest ingredients from trusted local farms and premium suppliers worldwide.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description:
      "A warm, welcoming atmosphere where every guest—from toddlers to grandparents—feels at home.",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    description:
      "Enjoy live jazz and acoustic performances every Friday evening and Sunday afternoon.",
  },
  {
    icon: Beer,
    title: "Craft Beverages",
    description:
      "A curated selection of local craft beers, fine wines, and handcrafted cocktails.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-[var(--color-cream-warm)]">
      <div className="max-w-[80rem] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-500)]">
            What We Stand For
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-charcoal)] mt-2">
            Our Values
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-slate)] mt-4 max-w-md mx-auto">
            The principles that guide everything we do at Oak & Barrel.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-250 hover:-translate-y-1 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-[var(--color-primary-600)]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-charcoal)]">
                {value.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
