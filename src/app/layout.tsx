import type { Metadata } from "next";
import "./globals.css";
import { SEO, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  metadataBase: new URL("https://princefitness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://princefitness.com",
    siteName: BUSINESS.name,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — Premium Gym in Ghatkopar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Structured Data for Local Business SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: BUSINESS.name,
  image: "https://princefitness.com/images/hero.png",
  description: SEO.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 1, Ground Floor, Near Ghatkopar Station, LBS Marg",
    addressLocality: "Ghatkopar West",
    addressRegion: "Maharashtra",
    postalCode: "400086",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.0860",
    longitude: "72.9080",
  },
  url: "https://princefitness.com",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "06:00",
      closes: "22:00",
    },
  ],
  priceRange: "₹1,999 - ₹5,999/month",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
    bestRating: "5",
  },
  sameAs: [
    BUSINESS.social.instagram,
    BUSINESS.social.facebook,
    BUSINESS.social.youtube,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Ghatkopar, Mumbai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
