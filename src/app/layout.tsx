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
    "Great Swamp Bonsai Society — NJ's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome. Annual show, workshops & more.",
  keywords: [
    "NJ bonsai club",
    "New Jersey bonsai society",
    "bonsai club Roseland NJ",
    "bonsai near me NJ",
    "Great Swamp Bonsai Society",
    "GSBS",
    "bonsai meetings NJ",
    "bonsai show New Jersey",
  ],
  openGraph: {
    title: "Great Swamp Bonsai Society · NJ Bonsai Club Since 1976",
    description:
      "New Jersey's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome.",
    url: "https://www.greatswampbonsai.com",
    siteName: "Great Swamp Bonsai Society",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.greatswampbonsai.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
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
    "New Jersey's premier bonsai club for anyone interested in the ancient art of bonsai — growing miniature trees in pots. Northern New Jersey Bonsai Community Since 1976.",
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
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
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
