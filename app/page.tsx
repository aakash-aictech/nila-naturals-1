import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { SkipLink } from "@/components/ui/SkipLink";
import { GallerySkeleton } from "@/components/ui/GallerySkeleton";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Categories } from "@/components/sections/Categories";
import { Ingredients } from "@/components/sections/Ingredients";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/Footer";


// The Instagram masonry gallery is the heaviest, least SEO-critical section
// (decorative photos, not indexable copy) so it's code-split out of the
// initial bundle. `ssr: true` (the default) is kept explicit here so its
// content is still server-rendered for visitors with JS disabled — this
// only trims client-side JavaScript, it doesn't change what search engines
// or no-JS visitors see.
const InstagramGallery = dynamic(
  () =>
    import("@/components/sections/InstagramGallery").then(
      (mod) => mod.InstagramGallery
    ),
  {
    ssr: true,
    loading: () => <GallerySkeleton />,
  }
);

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyChooseUs />
        <FeaturedProducts />
        <Categories />
        <Ingredients />
        <About />
        <Testimonials />
        <InstagramGallery />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
