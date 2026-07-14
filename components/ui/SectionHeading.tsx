"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <Reveal direction="none">
          <span
            className={clsx(
              "mb-4 inline-block font-body text-xs font-bold uppercase tracking-[0.3em]",
              light ? "text-gold-light" : "text-gold-dark"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={clsx(
            "font-display text-4xl font-medium leading-tight md:text-5xl",
            light ? "text-cream" : "text-forest-dark"
          )}
        >
          <span className="relative inline-block pb-2">
            {title}
            <motion.span
              className="absolute bottom-0 left-[2%] right-[2%] h-[0.28em] origin-left rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(198,161,91,0.05), rgba(198,161,91,0.55) 20%, rgba(198,161,91,0.55) 80%, rgba(198,161,91,0.05))",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={clsx(
              "mt-5 text-base leading-relaxed md:text-lg",
              light ? "text-cream/80" : "text-ink/70"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
