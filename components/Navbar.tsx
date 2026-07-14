"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Button } from "./ui/Button";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Products", href: "#products", id: "products" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ease-out",
        scrolled
          ? "bg-cream/75 py-2 shadow-nav backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-cream/60"
          : "bg-transparent py-5"
      )}
    >
      {/* Hairline that only appears once glass is active — reads as a refined edge, not a hard line */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-forest/15 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/products/logo.jpeg"
              alt="Nila Naturals logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-display text-xl font-semibold tracking-wide text-forest-dark">
            Nila Naturals
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "relative rounded-full px-4 py-2 font-body text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  isActive ? "text-forest" : "text-ink/75 hover:text-forest"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-forest/8"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a href="#products">
            <Button size="md">Shop Now</Button>
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-full p-1 text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream/95 shadow-nav backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === link.id ? "page" : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className={clsx(
                    "rounded-lg px-3 py-3 font-body text-base font-medium transition-colors",
                    activeId === link.id
                      ? "bg-forest/8 text-forest"
                      : "text-ink/80 hover:bg-forest/5 hover:text-forest"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#products"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * links.length, duration: 0.3 }}
                className="mt-2"
              >
                <Button className="w-full">Shop Now</Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
