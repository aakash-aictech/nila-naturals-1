# Nila Naturals — Landing Page

A premium, production-ready marketing landing page for **Nila Naturals**, a
family-run organic skincare, herbal wellness, and food brand from Tamil
Nadu, India.

**Live demo:** _add your deployed Vercel URL here once deployed_

---

## Project Overview

This is a single-page marketing site built to convert visitors into WhatsApp
and Instagram orders. There is intentionally no cart, checkout, login, or
backend — the site's only job is to present the brand and products
beautifully and route interested customers to a real conversation.

Highlights:

- Every product photo, the logo, and every price shown are the brand's real
  assets — nothing is stock photography or placeholder data.
- Deep-linked "Shop" buttons open WhatsApp with the product name and size
  pre-filled into the message.
- Fully responsive, animated with Framer Motion, and built with
  accessibility and SEO as first-class concerns rather than an afterthought.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Fonts | Fraunces (display) + Manrope (body), via `next/font/google` |
| Deployment target | Vercel |

## Installation

Requirements: Node.js `18.18+` (or `20+`) and npm.

```bash
git clone <your-repo-url>
cd nila-naturals
npm install
```

Copy the environment example and set your production domain (used for SEO
metadata, the sitemap, and robots.txt):

```bash
cp .env.example .env.local
# then edit .env.local and set NEXT_PUBLIC_SITE_URL
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app hot-reloads on
save.

```bash
npm run lint
```

Runs ESLint with `next/core-web-vitals`.

## Production Build

```bash
npm run build
npm run start
```

`npm run build` compiles and type-checks the app, generates the static
`robots.txt`/`sitemap.xml` routes, and optimizes all images. `npm run start`
serves that production build locally on port 3000 so you can smoke-test it
before deploying.

## Deployment

This project is configured for **zero-config deployment on Vercel** (the
team that builds Next.js, so first-party support is best-in-class and has a
generous free tier).

1. Push this repository to GitHub (see commands below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — leave the default build command
   (`next build`) and output settings as-is.
4. Add one environment variable in the Vercel project settings:
   - `NEXT_PUBLIC_SITE_URL` → your production domain (e.g.
     `https://nilanaturals.com`)
5. Click **Deploy**. Every push to `main` redeploys automatically; every
   pull request gets its own preview URL.

No other configuration, serverless functions, or database are required.

## Folder Structure

```
app/                      Next.js App Router
  layout.tsx                Root layout, fonts, global metadata, JSON-LD
  page.tsx                  Landing page — composes all sections
  globals.css                Tailwind layers + small global CSS (focus rings,
                              reduced-motion, signature divider/badge styles)
  robots.ts                  Generates /robots.txt
  sitemap.ts                 Generates /sitemap.xml

components/
  Navbar.tsx                 Sticky glass navbar with scroll-spy active link
  Footer.tsx                  Site footer (contact, links, socials)
  OrganizationJsonLd.tsx      Organization structured data (SEO rich results)
  sections/                   One component per landing-page section
    Hero.tsx, WhyChooseUs.tsx, FeaturedProducts.tsx, Categories.tsx,
    Ingredients.tsx, About.tsx, Testimonials.tsx, InstagramGallery.tsx,
    FAQ.tsx, Newsletter.tsx
  ui/                         Small reusable primitives
    Button.tsx, SectionHeading.tsx, Reveal.tsx, Divider.tsx,
    ScrollIndicator.tsx, SkipLink.tsx, GallerySkeleton.tsx

hooks/
  useScrollSpy.ts             Tracks the active section for navbar highlighting

lib/
  products.ts                 Product, pricing, testimonial, and FAQ content
  constants.ts                 Site name, URL, WhatsApp/email/Instagram, helpers

public/products/             Real brand photography, logo, and price list
```

## Editing content

- **Products & prices:** `lib/products.ts`
- **Copy per section:** the matching file in `components/sections/`
- **Colors, fonts, shadows:** `tailwind.config.ts`
- **Contact details (WhatsApp/email/Instagram):** `lib/constants.ts`

No login, cart, checkout, or backend is included by design — this is a
marketing landing page intended to drive WhatsApp/Instagram orders.
