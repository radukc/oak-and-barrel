import Image from "next/image";

export function MenuHero() {
  return (
    <section className="relative h-[300px] md:h-[350px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/menu-hero.webp"
        alt="Elegant table setting"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative h-full max-w-[80rem] mx-auto px-6 flex flex-col justify-center items-center text-center">
        <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-400)]">
          Culinary Excellence
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2">
          Our Menu
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-white/80 mt-4 max-w-lg">
          Explore our carefully crafted selection of premium steaks, fresh sushi,
          gourmet burgers, and artisanal beverages.
        </p>
      </div>
    </section>
  );
}
