/**
 * Site-wide constants.
 * Pulling these out of individual components removes the duplicated
 * WhatsApp number that previously lived in both FeaturedProducts.tsx and
 * Footer.tsx, and gives SEO/metadata a single source of truth for the URL.
 */
export const SITE_NAME = "Nila Naturals";
export const SITE_TAGLINE = "Nature's Purity, Crafted with Love.";

// Set NEXT_PUBLIC_SITE_URL in your environment (e.g. Vercel project
// settings) once the site has a live domain. Falls back to a placeholder
// so metadata/sitemap/robots still build correctly in the meantime.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nilanaturals.example.com";

export const WHATSAPP_NUMBER = "918883816166";
export const WHATSAPP_DISPLAY = "+91 88838 16166";
export const CONTACT_EMAIL = "nilanaturals13@gmail.com";
export const INSTAGRAM_HANDLE = "_nila_naturals_";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export function whatsappOrderLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
