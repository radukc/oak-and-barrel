import Image from "next/image";
import { Music, Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Friday Live Music",
    description:
      "Join us every Friday evening for live jazz and acoustic performances while you dine.",
    schedule: "Every Friday, 7 PM - 10 PM",
    image: "/live-music.webp",
    icon: Music,
  },
  {
    id: 2,
    title: "Sunday Sessions",
    description:
      "Unwind with our Sunday afternoon sessions featuring local artists and special menu items.",
    schedule: "Every Sunday, 4 PM - 7 PM",
    image: "/sunday-sessions.webp",
    icon: Calendar,
  },
];

export function EventsSection() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-[80rem] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-500)]">
            Join Us
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-charcoal)] mt-2">
            Upcoming Events
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-slate)] mt-4 max-w-md mx-auto">
            Experience more than just great food. Join us for live entertainment
            and special events.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <article
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-250 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                    <event.icon className="w-4 h-4" />
                    <span>{event.schedule}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-slate)] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
