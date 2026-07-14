"use client";

import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function About() {
  return (
    <section id="about" className="relative bg-cream-dark/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal direction="left">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic shadow-soft">
              <Image
                src="/products/nalangu-powder-2.jpeg"
                alt="Nila Naturals herbal bath powder surrounded by the whole almonds, dried rose petals and turmeric it is hand-blended from"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-cream bg-gold shadow-gold sm:h-36 sm:w-36">
              <p className="text-center font-display text-sm font-semibold leading-tight text-forest-dark sm:text-base">
                Family
                <br />
                Owned
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <span className="mb-4 inline-block font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
            Our Story
          </span>
          <h2 className="font-display text-4xl font-medium leading-tight text-forest-dark md:text-5xl">
            A kitchen table,
            <br />
            <span className="italic text-sage">a family recipe book,</span>
            <br />
            and a lot of love.
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink/70">
            <p>
              Nila Naturals began the way so many good things do — in a home
              kitchen in Tamil Nadu, with recipes passed down through
              generations of women who understood skin, soil and season
              better than any label ever could.
            </p>
            <p>
              What started as nalangu maavu made for family weddings slowly
              grew into a small, family-run business: kadukkai and avarampoo
              sun-dried on the terrace, rose petals hand-sorted, oils
              cold-pressed and bottled one at a time.
            </p>
            <p>
              We still do it the same way today. Nothing is mass-produced.
              Every batch is small enough that we know exactly what went into
              it — because we made it ourselves.
            </p>
          </div>
          <div className="mt-9">
            <a href="#products">
              <Button size="lg">Discover Our Products</Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
