"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const gallery = [
  { src: "/products/skin-glow-oil-2.jpeg", alt: "Rows of Skin Glow Oil bottles freshly labelled", tall: true },
  { src: "/products/handmade-soap-2.jpeg", alt: "Freshly cut handmade organic soap bars curing" },
  { src: "/products/avarampoo-raw.jpeg", alt: "Sun-dried avarampoo flowers ready for grinding" },
  { src: "/products/skin-glow-oil-3.jpeg", alt: "Skin Glow Oil bottles packed for dispatch", tall: true },
  { src: "/products/nalangu-powder-1.jpeg", alt: "Herbal bath powder surrounded by almonds and rose petals" },
  { src: "/products/kadukkai-powder.jpeg", alt: "Kadukkai powder pouch on fresh grass" },
];

export function InstagramGallery() {
  return (
    <section className="relative bg-cream-dark/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={`@${INSTAGRAM_HANDLE}`}
          title="Follow our journey"
          subtitle="Behind-the-scenes glimpses from our home kitchen to your doorstep."
        />

        <div className="mt-16 columns-2 gap-5 sm:columns-3 [column-fill:_balance]">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06} className="mb-5 break-inside-avoid">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`View on Instagram: ${img.alt}`}
                className={`group relative block w-full overflow-hidden rounded-organic shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  img.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest-dark/0 opacity-0 transition-all duration-300 group-hover:bg-forest-dark/40 group-hover:opacity-100">
                  <Instagram className="text-cream" size={26} aria-hidden="true" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-forest hover:text-forest-dark"
          >
            <Instagram size={16} aria-hidden="true" /> @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
