import type { Metadata } from "next";
import Link from "next/link";
import TwoStepForm from "@/components/TwoStepForm";
import ServiceAreaBadges from "@/components/ServiceAreaBadges";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Book a Free Estimate | North Shore Spotless",
  description: "Book your free on-site estimate with North Shore Spotless. Christopher Diaz comes to your property, assesses the job, and gives you an exact price — no obligation, no surprises.",
  openGraph: {
    title: "Book a Free Estimate | North Shore Spotless",
    description: "Free on-site estimates for window washing, pressure washing, and trash bin cleaning on the North Shore.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshorespotless.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Book a Free Estimate</li>
            </ol>
          </nav>
          <h1 className="text-display text-white mb-4">Book Your Free On-Site Estimate</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            I&apos;ll come to your property, assess the job, and give you an exact price on the spot — no obligation, no pressure, no surprises.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <TwoStepForm />
            </div>

            {/* Sidebar — 2 cols */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
              {/* What Happens Next */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-[#0A1628] text-lg mb-6">What Happens Next</h2>
                <ol className="space-y-5">
                  {[
                    "I receive your request and reach out within 2 hours",
                    "We schedule a time that works for you",
                    "I come to your property and assess the job",
                    "I give you an exact price on the spot — you decide from there",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#DC3545]/10 text-[#DC3545] flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact Info */}
              <div className="bg-[#0A1628] text-white rounded-2xl p-8">
                <h3 className="font-bold text-white mb-6">Reach Out Directly</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1.5 font-medium">Email</p>
                    <a
                      href="mailto:northshorespotless@gmail.com"
                      className="text-[#1B9BD1] hover:text-white font-semibold transition-colors"
                    >
                      northshorespotless@gmail.com
                    </a>
                    <p className="text-gray-500 text-xs mt-1">Typically responds within 2 hours</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1.5 font-medium">Phone</p>
                    <a
                      href="tel:8477785310"
                      className="text-white font-bold text-xl hover:text-gray-200 transition-colors"
                      aria-label="Call us at 847-778-5310"
                    >
                      (847) 778-5310
                    </a>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1.5 font-medium">Hours</p>
                    <p className="text-gray-300 text-sm">Monday – Saturday</p>
                    <p className="text-gray-300 text-sm">7:00am – 6:00pm</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-medium">Service Area</p>
                    <ServiceAreaBadges variant="dark" />
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: "Licensed & Insured", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                    { label: "Satisfaction Guaranteed", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
                    { label: "Local & Trusted", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                      </svg>
                      <span className="font-medium">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
