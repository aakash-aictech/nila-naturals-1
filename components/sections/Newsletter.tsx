"use client";

import { useState, FormEvent } from "react";
import { Mail, Check } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative bg-forest py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="mb-4 inline-block font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-light">
            Stay Rooted
          </span>
          <h2 className="font-display text-3xl font-medium text-cream md:text-4xl">
            Get seasonal skincare tips &amp; new batch alerts
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-cream/70">
            No spam — just an occasional note when a new herbal blend is
            ready, or the season calls for a skincare switch.
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-cream/10 px-6 py-4 font-body text-sm text-cream">
              <Check size={18} className="text-gold-light" aria-hidden="true" />
              Thank you — you&apos;re on the list!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Mail
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/50"
                />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-full border border-cream/20 bg-cream/10 py-3.5 pl-11 pr-4 font-body text-sm text-cream placeholder:text-cream/50 outline-none focus-visible:border-gold"
                />
              </div>
              <Button type="submit" size="lg" variant="ghost" className="!bg-gold !text-forest-dark hover:!bg-gold-light">
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
