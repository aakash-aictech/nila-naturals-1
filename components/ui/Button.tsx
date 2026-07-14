"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
} & HTMLMotionProps<"button">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={clsx(
        "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-body font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        size === "lg" ? "px-9 py-4 text-base" : "px-6 py-3 text-sm",
        variant === "primary" &&
          "bg-forest text-cream shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] hover:bg-forest-dark hover:shadow-soft hover:-translate-y-0.5",
        variant === "secondary" &&
          "border border-forest/40 bg-transparent text-forest hover:border-forest hover:bg-forest/5",
        variant === "ghost" && "bg-gold/15 text-gold-dark hover:bg-gold/25",
        className
      )}
      {...props}
    >
      {/* Subtle diagonal light sweep on hover — a quiet "premium" signal on the primary CTA only */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
