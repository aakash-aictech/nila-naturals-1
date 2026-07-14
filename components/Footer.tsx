import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
} from "@/lib/constants";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Nalangu Herbal Bath Powder",
  "Skin Glow Oil",
  "Kadukkai Powder",
  "AvaramPoo Powder",
  "Handmade Organic Soap",
  "Murungai Karuveppilai Idly Powder",
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-forest-dark pt-20 text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image
                  src="/products/logo.jpeg"
                  alt="Nila Naturals logo"
                  fill
                  loading="lazy"
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="font-display text-lg font-semibold text-cream">
                Nila Naturals
              </span>
            </div>
            <p className="mt-5 font-body text-sm leading-relaxed text-cream/60">
              Nature&apos;s Purity, Crafted with Love. Handmade organic
              skincare and wellness products from a family kitchen in Tamil
              Nadu.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              aria-label="Nila Naturals on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-cream">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-cream">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="font-body text-sm text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-cream">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 font-body text-sm text-cream/60">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-none text-gold-light" aria-hidden="true" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-gold-light">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-none text-gold-light" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-gold-light"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-none text-gold-light" aria-hidden="true" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 sm:flex-row">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Nila Naturals. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/40">
            Handmade with love in Tamil Nadu 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}
