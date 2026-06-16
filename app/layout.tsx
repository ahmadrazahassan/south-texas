import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { business, images } from "@/lib/site-config";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "roofing",
    "roof repair",
    "roof replacement",
    "storm damage restoration",
    "Rio Grande Valley roofing",
    "San Antonio roofing",
    "Austin roofing",
    "Weslaco roofing contractor",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    images: [
      {
        url: images.hero.poster,
        width: 1200,
        height: 630,
        alt: `${business.name} roofing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    images: [images.hero.poster],
  },
  robots: { index: true, follow: true },
};

/** JSON-LD LocalBusiness schema built from the real NAP data. */
function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: business.name,
    image: `${business.url}${images.hero.poster}`,
    "@id": business.url,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: business.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      business.social.facebook,
      business.social.instagram,
      business.social.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
