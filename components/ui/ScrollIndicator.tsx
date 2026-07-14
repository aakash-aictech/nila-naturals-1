"use client";

import { motion } from "framer-motion";

export function ScrollIndicator({
  targetId = "why-us",
  label = "Scroll to explore",
}: {
  targetId?: string;
  label?: string;
}) {
  return (
    <motion.a
      href={`#${targetId}`}
      aria-label={label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.1 }}
      className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
    >
      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-forest/50 transition-colors group-hover:text-forest">
        {label}
      </span>
      <span className="relative flex h-9 w-6 justify-center rounded-full border border-forest/25 transition-colors group-hover:border-forest/50">
        <motion.span
          animate={{ y: [2, 14, 2], opacity: [1, 0, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-dark"
        />
      </span>
    </motion.a>
  );
}
