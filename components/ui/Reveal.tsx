"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  direction = "up",
}: RevealProps) {
  // globals.css collapses CSS animation/transition durations for
  // prefers-reduced-motion, but framer-motion drives these values via
  // requestAnimationFrame, not CSS — so it needs its own check here to
  // honor the same preference and avoid large opacity/position sweeps.
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion
    ? { opacity: 0 }
    : direction === "left"
    ? { opacity: 0, x: -40 }
    : direction === "right"
    ? { opacity: 0, x: 40 }
    : direction === "none"
    ? { opacity: 0 }
    : { opacity: 0, y };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

