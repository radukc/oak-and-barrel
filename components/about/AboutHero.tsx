import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-[350px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about-hero.webp"
        alt="Oak & Barrel restaurant interior"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative h-full max-w-[80rem] mx-auto px-6 flex flex-col justify-center items-center text-center">
        <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-400)]">
          Since 2004
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-2">
          Our Story
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg text-white/80 mt-4 max-w-lg">
          Two decades of culinary excellence, unforgettable moments, and a
          passion for bringing people together.
        </p>
      </div>
    </section>
  );
}
