"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Leaf } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { products } from "@/lib/products";
import { whatsappOrderLink } from "@/lib/constants";

export function FeaturedProducts() {
  return (
    <section id="products" className="relative bg-cream-dark/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Products"
          title="Small batches, made by hand"
          subtitle="Every pouch you see is a real product from our home kitchen — photographed, weighed and packed by us, for you."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-organic bg-cream-card shadow-card ring-1 ring-forest/5 transition-shadow duration-500 hover:shadow-premium focus-within:shadow-premium"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-sage/10">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-forest/10 to-gold/10 px-6 text-center">
                      <Sparkles className="text-gold-dark" size={28} aria-hidden="true" />
                      <p className="font-body text-xs uppercase tracking-widest text-forest/60">
                        Product photo coming soon
                      </p>
                    </div>
                  )}
                  {/* Soft gradient wash so the badge always stays legible over any photo */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-forest-dark/25 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-forest-dark shadow-sm ring-1 ring-cream backdrop-blur-sm">
                    <Leaf size={11} className="text-sage" aria-hidden="true" />
                    {product.category}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  {product.tamilNote && (
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold-dark">
                      {product.tamilNote}
                    </span>
                  )}
                  <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-forest-dark">
                    {product.name}
                  </h3>
                  <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-ink/65">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-forest/10 pt-5">
                    <div>
                      <span className="font-display text-2xl font-semibold tracking-tight text-forest">
                        ₹{product.price}
                      </span>
                      <span className="ml-1.5 font-body text-xs text-ink/50">
                        / {product.size}
                      </span>
                    </div>
                    <a
                      href={whatsappOrderLink(
                        `Hi Nila Naturals, I'd like to order the ${product.name} (${product.size}).`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Order ${product.name} on WhatsApp`}
                    >
                      <Button size="md">
                        <ShoppingBag size={16} aria-hidden="true" /> Shop
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
