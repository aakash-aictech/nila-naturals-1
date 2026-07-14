"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "@/lib/products";

export function Testimonials() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Kind Words"
          title="What our customers say"
          subtitle="Real feedback from real families across Tamil Nadu who've made Nila Naturals part of their routine."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-organic border border-forest/10 bg-cream-card p-7 shadow-card">
                <Quote className="text-gold/60" size={26} aria-hidden="true" />
                <div
                  className="mt-4 flex gap-1"
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-forest/10 pt-4">
                  <p className="font-display text-base font-semibold text-forest-dark">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-ink/50">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
