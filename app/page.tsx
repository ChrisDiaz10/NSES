import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import CTABanner from "@/components/CTABanner";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import TrustBadges from "@/components/TrustBadges";
import StoryHook from "@/components/StoryHook";
import ServiceAreaBadges from "@/components/ServiceAreaBadges";

export const metadata: Metadata = {
  title: "North Shore Exterior Services | Exterior Cleaning North Shore Chicago",
  description: "Professional window washing, pressure washing, and trash bin cleaning by student-athletes from Glenview, IL. Serving Evanston, Wilmette, Winnetka, and the entire North Shore.",
  keywords: "exterior cleaning North Shore Chicago, window washing Chicago suburbs, student athlete cleaning business Glenview IL, pressure washing North Shore",
  openGraph: {
    title: "North Shore Exterior Services | Built by Titans. Trusted by the North Shore.",
    description: "Professional exterior cleaning by student-athletes from Glenbrook South High School. Serving communities across the North Shore.",
    url: "https://northshoreexteriorservices.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com" },
};

const windowIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.8" />
    <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.8" />
    <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.8" />
  </svg>
);

const pressureIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const binIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Student-Athletes",
    description: "We live and go to school right here in Glenview. This is our community too — every job we take, we take personally.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Fully Insured",
    description: "Every job is fully covered. You're protected, no exceptions. Peace of mind comes standard with every estimate.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Eco-Friendly Products",
    description: "Safe for your kids, your pets, and your landscaping. We use products that clean thoroughly without harming what matters.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#E31E24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "100% Satisfaction Guarantee",
    description: "If you're not happy with the results, we come back and make it right. No questions asked, no excuses made.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "North Shore Exterior Services",
    telephone: "+18477785310",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glenview",
      addressRegion: "IL",
      addressCountry: "US",
    },
    areaServed: [
      "Evanston", "Wilmette", "Winnetka", "Glencoe", "Highland Park",
      "Lake Forest", "Glenview", "Northbrook", "Deerfield", "Libertyville", "Vernon Hills",
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
    openingHours: "Mo-Sa 07:00-18:00",
    priceRange: "$$",
    description: "Professional exterior cleaning by student-athletes from Glenbrook South High School. Serving the North Shore.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 30px)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#E31E24]" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-[#E31E24]/20 text-[#E31E24] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#E31E24]/30">
              Built by Titans. Trusted by the North Shore.
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-4 animate-fade-in-up animate-delay-100">
            North Shore&apos;s Most Trusted
            <span className="block text-[#E31E24]">Exterior Cleaning</span>
          </h1>

          <p className="mt-7 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Professional window washing, pressure washing, and trash bin cleaning — delivered by hardworking student-athletes from right here in Glenview.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#E31E24] hover:bg-[#c01920] text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg"
            >
              Book a Free Estimate
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-xl transition-colors text-lg"
            >
              View Our Services
            </Link>
          </div>

          <div className="animate-fade-in-up animate-delay-400">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Story Hook */}
      <StoryHook />

      {/* Services Overview */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">What We Do</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
              Three services, one team, zero shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={windowIcon}
              title="Window Washing"
              description="Crystal-clear results inside and out. We clean glass, frames, sills, and screens — leaving your windows streak-free and spotless from every angle."
              href="/services/window-washing"
            />
            <ServiceCard
              icon={pressureIcon}
              title="Pressure Washing"
              description="Years of grime removed in a single visit. Driveways, patios, siding, fences, and more — restored to looking clean and fresh again."
              href="/services/pressure-washing"
            />
            <ServiceCard
              icon={binIcon}
              title="Trash Bin Cleaning"
              description="Scheduled around your pickup day, so you never have to think about it. Hot-water rinse, eco-friendly sanitizing, and deodorizing — every time."
              href="/services/trash-bin-cleaning"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                Why North Shore Homeowners Choose Us
              </h2>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                We&apos;re not a national franchise with a call center in another state. We&apos;re kids from Glenbrook South who grew up on the same streets we clean. When you hire us, you get the work ethic of athletes and the accountability of neighbors.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center mt-7 text-[#E31E24] font-semibold hover:text-[#c01920] transition-colors gap-1"
              >
                Learn more about our team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Stats Bar */}
      <StatsBar />

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                Proudly Serving the North Shore
              </h2>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                From Evanston up through Lake Forest, we cover the North Shore communities that matter most. We&apos;re not a company that stretches thin across the whole Chicagoland — we&apos;re focused on the neighborhoods we know, where our teammates and families live.
              </p>
              <div className="mt-8">
                <ServiceAreaBadges />
              </div>
              <p className="mt-5 text-gray-500 text-sm">
                Don&apos;t see your town?{" "}
                <a href="tel:8477785310" className="text-[#E31E24] font-medium hover:underline">
                  Call us
                </a>{" "}
                — we may still serve you.
              </p>
            </div>

            <div className="relative bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Our Coverage Area</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  "Evanston", "Wilmette", "Winnetka",
                  "Glencoe", "Highland Park", "Lake Forest",
                  "Glenview", "Northbrook", "Deerfield",
                  "Libertyville", "Vernon Hills",
                ].map((town) => (
                  <div
                    key={town}
                    className="bg-white border border-[#47C5E8]/20 rounded-xl px-3 py-3 text-center hover:border-[#47C5E8] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#1A1A1A]">{town}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-200 text-center">
                <Link href="/contact" className="text-[#E31E24] font-semibold text-sm hover:underline">
                  Book a free estimate in your area →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">What Our Neighbors Are Saying</h2>
            <p className="mt-4 text-gray-600 text-lg">Real reviews from real North Shore homeowners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard
              name="Jennifer M."
              location="Wilmette"
              service="Window Washing"
              review="Honestly blown away. They cleaned every single window inside and out, including some storm windows I thought were beyond saving. I was a little surprised when they showed up and looked like high schoolers — but the quality of their work was absolutely professional. Every pane was spotless. They even wiped down the sills without being asked. Will 100% be using them again this fall."
            />
            <ReviewCard
              name="Mark T."
              location="Highland Park"
              service="Pressure Washing"
              review="My driveway had oil stains and general grime that had built up over years. These guys showed up on time, got straight to work, and the results were unreal — looked brand new. They were thorough, professional, and checked in with me before they left to make sure I was happy. Great experience start to finish."
            />
            <ReviewCard
              name="Sarah L."
              location="Glenview"
              service="Trash Bin Cleaning"
              review="I signed up for their monthly bin cleaning and it's been such a game changer. No more dreading garbage day because the bins smell horrible. They schedule it right after pickup so I don't even have to think about it. Love that I'm supporting local student-athletes too — these kids are working hard and it shows. Highly recommend."
            />
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">See the Difference</h2>
            <p className="mt-4 text-gray-600 text-lg">The results speak for themselves.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BeforeAfterCard label="Window Washing" />
            <BeforeAfterCard label="Pressure Washing" />
            <BeforeAfterCard label="Trash Bin Cleaning" />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#E31E24] hover:bg-[#c01920] text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg"
            >
              Get These Results
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
