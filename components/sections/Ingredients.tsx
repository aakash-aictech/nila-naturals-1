"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Divider } from "../ui/Divider";
import { ingredients } from "@/lib/products";

export function Ingredients() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-cream lg:py-32">
      {/* Real dried-flower texture as ambient background, per the brief */}
      <div className="absolute inset-0">
        <Image
          src="/products/avarampoo-raw.jpeg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What Goes In"
          title="Six ingredients, one philosophy"
          subtitle="No filler names, no unpronounceable chemicals — just botanicals every Tamil household already knows and trusts."
          light
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {ingredients.map((ing, i) => (
            <Reveal key={ing.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center rounded-organic border border-cream/15 bg-cream/5 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-gold/50 hover:bg-cream/10"
              >
                <div className="seal-badge h-16 w-16 bg-gold/15 text-gold-light">
                  <Sparkles size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {ing.name}
                </h3>
                <p className="font-body text-xs italic text-gold-light/90">
                  {ing.tamil}
                </p>
                <p className="mt-2 font-body text-xs leading-relaxed text-cream/60">
                  {ing.note}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Divider />
      </div>
    </section>
  );
}
