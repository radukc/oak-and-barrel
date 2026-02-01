import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative h-[400px] bg-[var(--color-cream-deep)] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[var(--color-primary-500)] mx-auto mb-4" />
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-charcoal)]">
                  123 Oak Street
                </p>
                <p className="font-[family-name:var(--font-body)] text-[var(--color-slate)]">
                  New York, NY 10001
                </p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-stone)] mt-2">
                  Located in the heart of Manhattan
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-[var(--color-primary-200)]/30 rounded-full" />
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-[var(--color-primary-100)]/40 rounded-full" />
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-wider text-[var(--color-primary-500)]">
              Visit Us
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-charcoal)] mt-2">
              Find Our Restaurant
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-slate)] mt-4">
              We&apos;re conveniently located in Manhattan, just steps from Central Park.
              Whether you&apos;re joining us for a weeknight dinner or a special
              celebration, we look forward to welcoming you.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-charcoal)]">
                    Address
                  </h3>
                  <p className="text-[var(--color-slate)]">
                    123 Oak Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-charcoal)]">
                    Phone
                  </h3>
                  <a
                    href="tel:+12125551234"
                    className="text-[var(--color-slate)] hover:text-[var(--color-primary-500)] transition-colors"
                  >
                    (212) 555-1234
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-charcoal)]">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@oakandbarrel.com"
                    className="text-[var(--color-slate)] hover:text-[var(--color-primary-500)] transition-colors"
                  >
                    hello@oakandbarrel.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-charcoal)]">
                    Hours
                  </h3>
                  <div className="text-[var(--color-slate)] text-sm space-y-1">
                    <p>
                      <span className="font-medium">Mon - Thu:</span> 5:00 PM - 10:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Fri - Sat:</span> 5:00 PM - 11:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> 4:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
