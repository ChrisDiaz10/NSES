import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "North Shore Spotless | Exterior Cleaning for the North Shore",
  description: "Professional window washing, pressure washing, and trash bin cleaning serving the North Shore Chicago suburbs. Founded by Christopher Diaz, Glenbrook South student-athlete. Free on-site estimates.",
  metadataBase: new URL("https://northshorespotless.com"),
  keywords: "exterior cleaning North Shore Chicago, window washing Chicago suburbs, pressure washing Glenview IL, trash bin cleaning North Shore",
  openGraph: {
    title: "North Shore Spotless | The Standard Is Spotless.",
    description: "Professional exterior cleaning serving Glenview, Wilmette, Winnetka, Highland Park, and the entire North Shore. Free on-site estimates. Founded by Christopher Diaz.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "North Shore Spotless",
  description: "Professional exterior cleaning services including window washing, pressure washing, and trash bin cleaning serving the North Shore Chicago suburbs.",
  founder: {
    "@type": "Person",
    name: "Christopher Diaz",
  },
  email: "northshorespotless@gmail.com",
  url: "https://northshorespotless.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Glenview",
    addressRegion: "IL",
    addressCountry: "US",
  },
  areaServed: [
    "Glenview", "Evanston", "Wilmette", "Winnetka", "Glencoe",
    "Highland Park", "Lake Forest", "Northbrook", "Deerfield",
    "Libertyville", "Vernon Hills"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trash Bin Cleaning" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#0A1628]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
