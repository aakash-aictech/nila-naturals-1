"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollIndicator } from "../ui/ScrollIndicator";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll-linked parallax: background elements and the emblem drift at
  // different speeds as the visitor scrolls past the hero, purely additive
  // motion — no layout, copy, or image changes.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const leavesY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const emblemY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark pt-28"
    >
      {/* Ambient floating leaves — signature organic motion, now with scroll parallax */}
      <motion.div
        style={{ y: reduceMotion ? 0 : leavesY }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <Leaf className="absolute left-[6%] top-[18%] h-10 w-10 text-forest/15 animate-float-slow" />
        <Leaf className="absolute left-[14%] top-[70%] h-6 w-6 rotate-45 text-gold/25 animate-float-slower" />
        <Leaf className="absolute right-[10%] top-[22%] h-14 w-14 -rotate-12 text-sage/20 animate-float-slower" />
        <Leaf className="absolute right-[18%] top-[68%] h-8 w-8 rotate-90 text-forest/10 animate-float-slow" />
      </motion.div>
      <motion.div
        style={{ y: reduceMotion ? 0 : blobsY }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ opacity: copyOpacity }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10"
      >
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark"
          >
            <Leaf size={12} aria-hidden="true" />
            Handmade in Tamil Nadu
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-medium leading-[1.08] text-forest-dark sm:text-6xl lg:text-[3.75rem]"
          >
            Pure Nature.
            <br />
            <span className="italic text-sage">Beautiful Skin.</span>
            <br />
            Healthy Living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-7 max-w-md font-body text-lg leading-relaxed text-ink/70"
          >
            Handcrafted organic skincare and traditional wellness products,
            made with love — the way our grandmothers made them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#products">
              <Button size="lg">
                Shop Now <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </a>
            <a href="#why-us">
              <Button size="lg" variant="secondary">
                Explore Products
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex items-center gap-8"
          >
            <div>
              <p className="font-display text-2xl text-forest-dark">100%</p>
              <p className="font-body text-xs uppercase tracking-widest text-ink/50">
                Natural
              </p>
            </div>
            <div className="h-8 w-px bg-ink/10" aria-hidden="true" />
            <div>
              <p className="font-display text-2xl text-forest-dark">0</p>
              <p className="font-body text-xs uppercase tracking-widest text-ink/50">
                Chemicals
              </p>
            </div>
            <div className="h-8 w-px bg-ink/10" aria-hidden="true" />
            <div>
              <p className="font-display text-2xl text-forest-dark">Made in</p>
              <p className="font-body text-xs uppercase tracking-widest text-ink/50">
                Tamil Nadu
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visual: real logo as the emblem, framed like a wax seal in a botanical clearing */}
        <div className="order-1 flex justify-center lg:order-2">
          <motion.div
            style={{ y: reduceMotion ? 0 : emblemY }}
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 scale-110 animate-spin-slow rounded-full border border-dashed border-gold/40" />
            <div className="relative aspect-square w-[280px] overflow-hidden rounded-full border-8 border-cream shadow-soft ring-1 ring-forest/10 sm:w-[360px] lg:w-[420px]">
              <Image
                src="/products/logo.jpeg"
                alt="Nila Naturals — Organic Beauty emblem"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                className="object-cover"
              />
            </div>
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 rounded-2xl bg-cream-card px-5 py-3 shadow-card"
            >
              <p className="font-display text-sm italic text-forest">
                &ldquo;Nature&apos;s Purity,
                <br />
                Crafted with Love&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <ScrollIndicator targetId="why-us" label="Scroll to explore" />
    </section>
  );
}
