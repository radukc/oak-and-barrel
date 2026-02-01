import Image from "next/image";

export function FounderSection() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/founder.webp"
                alt="Leon van Zyl, Founder of Oak & Barrel"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-primary-100)] rounded-2xl -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-500)]">
              Meet Our Founder
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--color-charcoal)] mt-2">
              Leon van Zyl
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-primary-600)] font-medium mt-1">
              Founder & Executive Chef
            </p>

            <div className="mt-6 space-y-4 text-[var(--color-slate)] leading-relaxed">
              <p>
                In 2004, Leon van Zyl had a vision: to create a dining destination
                that would bring together the finest culinary traditions from around
                the world under one roof. Born from a passion for exceptional food
                and genuine hospitality, Oak & Barrel opened its doors in the heart
                of New York City.
              </p>
              <p>
                With over two decades of experience in world-renowned kitchens,
                Leon crafted a menu that celebrates the art of the perfect steak,
                the precision of Japanese sushi, the comfort of a gourmet burger,
                and the craft of artisanal brewing.
              </p>
              <p>
                &ldquo;Every dish we serve tells a story,&rdquo; Leon says. &ldquo;We source the
                finest ingredients, work with local farmers and fishermen, and pour
                our hearts into every plate. But more than the food, it&apos;s about
                creating moments that families and friends will cherish forever.&rdquo;
              </p>
              <p>
                Today, Oak & Barrel remains true to its founding principles:
                quality without compromise, warmth without pretension, and a
                commitment to making every guest feel like part of our family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
