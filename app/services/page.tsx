import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Services | North Shore Spotless",
  description: "Professional window washing, pressure washing, and trash bin cleaning for North Shore homes. Free on-site estimates. Serving Glenview, Wilmette, Winnetka, Highland Park, and beyond.",
  keywords: "exterior cleaning services North Shore, window washing pressure washing trash bin cleaning Chicago suburbs",
  openGraph: {
    title: "Our Services | North Shore Spotless",
    description: "Three services. One standard. Spotless.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshorespotless.com/services" },
};

const services = [
  {
    title: "Window Washing",
    href: "/services/window-washing",
    tagline: "Crystal clear results — inside and out.",
    description: "Your windows are the first thing guests notice. North Shore Spotless delivers professional-grade window cleaning for homes across the North Shore — interior, exterior, screens, sills, hard water stains, and more.",
    included: [
      "Interior & exterior glass cleaning",
      "Screen removal, cleaning & reinstallation",
      "Window track and sill wiping",
      "Hard water stain treatment",
      "Storm window cleaning",
      "Skylight cleaning where accessible",
      "Final streak check on every single pane",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
        <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Pressure Washing",
    href: "/services/pressure-washing",
    tagline: "Blast away years of grime in a single visit.",
    description: "A North Shore winter leaves a mark — road salt, mold, algae, and years of buildup on your driveway, patio, and siding. One visit from North Shore Spotless brings it all back. Soft wash available for delicate surfaces.",
    included: [
      "Driveways & parking pads",
      "Sidewalks & walkways",
      "Patios & decks",
      "Fences & retaining walls",
      "Home siding (soft wash available)",
      "Garage floors",
      "Outdoor furniture",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Trash Bin Cleaning",
    href: "/services/trash-bin-cleaning",
    tagline: "Fresh bins every month. Zero effort on your end.",
    description: "Your garbage bins are cleaned right after pickup day — hot water rinse, eco-friendly sanitizer, deodorizing treatment, and returned to the curb before you even notice. Monthly and bi-monthly plans available.",
    included: [
      "Interior & exterior scrub",
      "High-pressure hot water rinse",
      "Eco-friendly sanitizing solution",
      "Deodorizing treatment",
      "Bin returned to curb same day",
      "Scheduled around your garbage pickup day",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Services</li>
            </ol>
          </nav>
          <h1 className="text-display text-white mb-5">Our Services</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Three services. One standard. Every job gets the same level of care — no shortcuts, no half-measures.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="divide-y divide-gray-100">
        {services.map((service, i) => (
          <section key={service.title} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <AnimatedSection>
                  <div className={`flex items-start gap-5 mb-6 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="w-16 h-16 rounded-2xl bg-[#DC3545]/10 flex items-center justify-center text-[#DC3545] shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-display-sm text-[#0A1628]">{service.title}</h2>
                      <p className="text-[#1B9BD1] font-medium mt-1">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-200"
                    >
                      Book a Free Estimate
                    </Link>
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-[#DC3545] text-gray-700 hover:text-[#DC3545] font-semibold px-8 py-4 rounded-xl transition-all"
                    >
                      Full Details →
                    </Link>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.15} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">What&apos;s Included</p>
                    <ul className="space-y-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#DC3545] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-gray-400 text-xs">
                      All pricing determined on-site. Free estimates, no obligation.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner />
    </>
  );
}
