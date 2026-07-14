"use client";

import { Leaf, FlaskConical, Hand, ScrollText, Recycle, MapPin } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { whyChooseUs } from "@/lib/products";

const icons = [Leaf, FlaskConical, Hand, ScrollText, Recycle, MapPin];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Nila Naturals"
          title="Rooted in tradition, made for today"
          subtitle="Every jar and pouch carries a promise: nothing but what nature intended, prepared the way it always has been."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-organic border border-forest/10 bg-cream-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sage/10 transition-transform duration-500 group-hover:scale-125" />
                  <div className="seal-badge relative h-14 w-14 bg-forest/10 text-forest">
                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-forest-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
