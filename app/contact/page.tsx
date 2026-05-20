import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ServiceAreaBadges from "@/components/ServiceAreaBadges";

export const metadata: Metadata = {
  title: "Book a Free Estimate | North Shore Exterior Services",
  description: "Book your free on-site estimate for window washing, pressure washing, or trash bin cleaning on the North Shore. We come to you, assess the job, and give you an exact price on the spot.",
  openGraph: {
    title: "Book a Free Estimate | North Shore Exterior Services",
    description: "No obligation. No pressure. We come to your property and give you an exact price on the spot.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-20 pt-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Book Your Free On-Site Estimate
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed">
            We&apos;ll come to your property, take a look at the job, and give you an exact price on the spot — no obligation, no surprises, no pressure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Your Information</h2>
                <p className="text-gray-500 text-sm mb-7">
                  Fill this out and we&apos;ll reach out within 2 hours to schedule your estimate.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Right: How It Works + Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* How It Works */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Here&apos;s How It Works</h2>
                <ol className="space-y-5">
                  {[
                    {
                      n: "1",
                      title: "Fill out the form or give us a call",
                      detail: "Takes less than 2 minutes. We'll handle everything from there.",
                    },
                    {
                      n: "2",
                      title: "We schedule a time to see your property",
                      detail: "We come to you — no need to bring anything or go anywhere.",
                    },
                    {
                      n: "3",
                      title: "We assess the job and give you an exact price",
                      detail: "On the spot, in person. You know exactly what you're getting.",
                    },
                    {
                      n: "4",
                      title: "You decide — zero pressure, zero obligation",
                      detail: "We mean it. No pressure to book, no follow-up calls.",
                    },
                  ].map((step) => (
                    <li key={step.n} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#DC3545] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1A1A1A] text-sm">{step.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact Info */}
              <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-6">Or Just Call Us</h2>

                <div className="mb-5">
                  <a
                    href="tel:8477785310"
                    className="text-[#DC3545] font-bold text-3xl hover:text-red-400 transition-colors block"
                    aria-label="Call us at 847-778-5310"
                  >
                    (847) 778-5310
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Monday – Saturday, 7am–6pm</p>
                </div>

                <div className="border-t border-white/10 pt-5 mb-5">
                  <div className="flex items-center gap-2 text-green-400 text-sm mb-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    Fast response guaranteed
                  </div>
                  <p className="text-gray-400 text-sm">
                    We typically respond within 2 hours during business hours.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Towns We Serve</p>
                  <ServiceAreaBadges variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
