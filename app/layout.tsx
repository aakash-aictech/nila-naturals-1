import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const title = `${SITE_NAME} | ${SITE_TAGLINE}`;
const description =
  "Handcrafted organic skincare, herbal wellness and food products made traditionally in Tamil Nadu. Nalangu powder, herbal bath powders, skin glow oil, handmade soap and more — 100% natural, chemical free, made with love.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Nila Naturals",
    "organic skincare Tamil Nadu",
    "handmade herbal powder",
    "nalangu maavu",
    "kadukkai powder",
    "avarampoo powder",
    "skin glow oil",
    "handmade organic soap",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/products/logo.jpeg",
        width: 1200,
        height: 1350,
        alt: "Nila Naturals — Organic Beauty emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/products/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body bg-cream text-ink antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
