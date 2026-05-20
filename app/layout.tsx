import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "North Shore Exterior Services | Window Washing, Pressure Washing & Bin Cleaning",
  description: "Professional exterior cleaning by student-athletes from Glenbrook South High School. Window washing, pressure washing, and trash bin cleaning across the North Shore.",
  metadataBase: new URL("https://northshoreexteriorservices.com"),
  openGraph: {
    title: "North Shore Exterior Services | Built by Titans. Trusted by the North Shore.",
    description: "Professional exterior cleaning by student-athletes from Glenbrook South High School. Serving Evanston, Wilmette, Winnetka, Glenview, and communities across the North Shore.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#1A1A1A]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
