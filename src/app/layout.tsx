import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Great Swamp Bonsai Society · NJ Bonsai Club Since 1976",
    template: "%s | Great Swamp Bonsai Society",
  },
  description:
    "Great Swamp Bonsai Society  -  NJ's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome. Annual show, workshops & more.",
  keywords: [
    "NJ bonsai club",
    "New Jersey bonsai society",
    "bonsai club Roseland NJ",
    "bonsai near me NJ",
    "Great Swamp Bonsai Society",
    "GSBS",
    "bonsai meetings NJ",
    "bonsai show New Jersey",
    "bonsai Essex County NJ",
    "bonsai Morris County NJ",
    "bonsai northern New Jersey",
    "learn bonsai NJ",
    "bonsai workshop NJ",
    "bonsai beginners NJ",
    "bonsai club near me",
    "bonsai annual show Roseland",
  ],
  openGraph: {
    title: "Great Swamp Bonsai Society · NJ Bonsai Club Since 1976",
    description:
      "New Jersey's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome.",
    url: "https://www.greatswampbonsai.com",
    siteName: "Great Swamp Bonsai Society",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.greatswampbonsai.com/images/gsbs-logo.png",
        width: 500,
        height: 500,
        alt: "Great Swamp Bonsai Society Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Great Swamp Bonsai Society · NJ Bonsai Club Since 1976",
    description:
      "New Jersey's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome.",
    images: ["https://www.greatswampbonsai.com/images/gsbs-logo.png"],
  },
  metadataBase: new URL("https://www.greatswampbonsai.com"),
  alternates: {
    canonical: "/",
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
  other: {
    "google-site-verification": "REPLACE_WITH_GSC_VERIFICATION_CODE",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.greatswampbonsai.com/#localbusiness",
  name: "Great Swamp Bonsai Society",
  alternateName: "GSBS",
  description:
    "New Jersey's premier bonsai club since 1976. Free monthly meetings, workshops, and annual show in Roseland, NJ. Open to beginners and experts.",
  url: "https://www.greatswampbonsai.com",
  email: "great.swampbonsai@gmail.com",
  telephone: "(973) 228-8776",
  foundingDate: "1976",
  image: "https://www.greatswampbonsai.com/images/gsbs-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "621-B Eagle Rock Ave",
    addressLocality: "Roseland",
    addressRegion: "NJ",
    postalCode: "07068",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.8218,
    longitude: -74.3046,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Tuesday",
    opens: "18:00",
    closes: "21:00",
    description: "2nd Tuesday of each month (no December meeting)",
  },
  priceRange: "Free meetings, $40/year membership",
  areaServed: [
    {
      "@type": "State",
      name: "New Jersey",
    },
    {
      "@type": "City",
      name: "Roseland",
      containedInPlace: { "@type": "State", name: "New Jersey" },
    },
    {
      "@type": "AdministrativeArea",
      name: "Essex County",
      containedInPlace: { "@type": "State", name: "New Jersey" },
    },
    {
      "@type": "AdministrativeArea",
      name: "Morris County",
      containedInPlace: { "@type": "State", name: "New Jersey" },
    },
  ],
  knowsAbout: [
    "bonsai",
    "bonsai cultivation",
    "bonsai styling",
    "Japanese bonsai art",
    "bonsai workshops",
    "bonsai exhibitions",
  ],
  sameAs: [
    "https://www.facebook.com/groups/296001945128377",
    "https://www.youtube.com/@greatswampbonsaisociety5552",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Great Swamp Bonsai Society",
  alternateName: "GSBS",
  url: "https://www.greatswampbonsai.com",
  foundingDate: "1976",
  email: "great.swampbonsai@gmail.com",
  description:
    "New Jersey's premier bonsai club for anyone interested in the ancient art of bonsai  -  growing miniature trees in pots. Northern New Jersey Bonsai Community Since 1976.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "621-B Eagle Rock Ave",
    addressLocality: "Roseland",
    addressRegion: "NJ",
    postalCode: "07068",
    addressCountry: "US",
  },
  location: {
    "@type": "Place",
    name: "Essex County Environmental Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "621-B Eagle Rock Ave",
      addressLocality: "Roseland",
      addressRegion: "NJ",
      postalCode: "07068",
      addressCountry: "US",
    },
  },
  sameAs: [
    "https://www.facebook.com/groups/296001945128377",
    "https://www.youtube.com/@greatswampbonsaisociety5552",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Mid-Atlantic Bonsai Societies",
      url: "https://www.midatlanticbonsai.org",
    },
    {
      "@type": "Organization",
      name: "NJ Bonsai Societies",
      url: "https://njbonsaisocieties.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0MVQFLLVY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z0MVQFLLVY');
          `}
        </Script>
      </body>
    </html>
  );
}
