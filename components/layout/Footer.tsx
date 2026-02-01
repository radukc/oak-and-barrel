import Link from "next/link";
import { UtensilsCrossed, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="max-w-[80rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-primary-500)]" />
              <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                Oak & Barrel
              </span>
            </Link>
            <p className="text-[var(--color-pebble)] text-sm leading-relaxed">
              Where every meal is a celebration. Premium steaks, fresh sushi,
              gourmet burgers, and craft beers in the heart of NYC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-pebble)] hover:text-[var(--color-primary-500)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-[var(--color-pebble)]">
                <MapPin className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                <span>
                  123 Oak Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-pebble)]">
                <Phone className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0" />
                <a href="tel:+12125551234" className="hover:text-[var(--color-primary-500)] transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-pebble)]">
                <Mail className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0" />
                <a href="mailto:hello@oakandbarrel.com" className="hover:text-[var(--color-primary-500)] transition-colors">
                  hello@oakandbarrel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-[var(--color-pebble)]">
                <Clock className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Mon - Thu</p>
                  <p>5:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-pebble)]">
                <Clock className="w-5 h-5 text-transparent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Fri - Sat</p>
                  <p>5:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-pebble)]">
                <Clock className="w-5 h-5 text-transparent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p>4:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-pebble)] text-sm">
            &copy; {new Date().getFullYear()} Oak & Barrel. All rights reserved.
          </p>
          <p className="text-[var(--color-stone)] text-xs">
            Est. 2004 in New York City
          </p>
        </div>
      </div>
    </footer>
  );
}
