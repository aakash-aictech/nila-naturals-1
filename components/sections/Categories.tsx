"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { categories } from "@/lib/products";

export function Categories() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Explore"
          title="Shop by category"
          subtitle="From daily skincare rituals to wholesome kitchen staples — everything sorted the way you shop."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.08}>
              <a
                href="#products"
                className="group relative block aspect-[3/4] overflow-hidden rounded-organic shadow-card"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-cream">
                      {cat.name}
                    </h3>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur transition-all duration-300 group-hover:bg-gold group-hover:text-forest-dark">
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-cream/80">
                    {cat.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
