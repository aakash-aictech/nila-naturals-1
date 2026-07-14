import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
} from "@/lib/constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    slogan: SITE_TAGLINE,
    url: SITE_URL,
    logo: `${SITE_URL}/products/logo.jpeg`,
    image: `${SITE_URL}/products/logo.jpeg`,
    description:
      "Handcrafted organic skincare, herbal wellness and food products made traditionally in Tamil Nadu, India.",
    email: CONTACT_EMAIL,
    telephone: WHATSAPP_DISPLAY,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [INSTAGRAM_URL],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
