import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Professional Window Washing | North Shore Exterior Services",
  description: "Expert window washing on the North Shore. Interior & exterior glass, screens, sills, hard water stains, and more. Serving Evanston, Wilmette, Winnetka, Glenview, and beyond.",
  keywords: "window washing North Shore, window cleaning Evanston Wilmette Winnetka Glenview, professional window cleaning Chicago suburbs",
  openGraph: {
    title: "Professional Window Washing | North Shore Exterior Services",
    description: "Crystal-clear results, every time. Interior & exterior window cleaning by student-athletes serving the North Shore.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com/services/window-washing" },
};

const included = [
  "Interior & exterior glass cleaning",
  "Screen removal, cleaning & reinstallation",
  "Window track and sill wiping",
  "Hard water stain treatment",
  "Storm window cleaning",
  "Skylight cleaning where accessible",
  "Final streak check on every pane",
];

const process = [
  {
    step: "01",
    title: "Inspection & Assessment",
    description: "We walk the property and assess every window — noting hard water stains, damaged screens, and any areas that need special attention before we start.",
  },
  {
    step: "02",
    title: "Screen & Frame Clean",
    description: "We remove, clean, and set aside all screens. Frames, tracks, and sills get wiped down before we touch the glass.",
  },
  {
    step: "03",
    title: "Glass Cleaned Inside & Out",
    description: "Using professional-grade squeegees and streak-free solution, we clean every pane from the inside out — then double check for any spots we might have missed.",
  },
  {
    step: "04",
    title: "Final Streak Check & Walkthrough",
    description: "We do a full walkthrough with you before we leave. Every pane is inspected in the light — if there's a streak, we fix it before we go.",
  },
];

const faqs = [
  {
    question: "How long does a window washing appointment take?",
    answer: "Most residential appointments take 2–4 hours depending on the number of windows, the size of the home, and whether we're doing interior and exterior. We give you a time estimate when we come out for your free on-site estimate, so you know exactly what to expect.",
  },
  {
    question: "Do you clean interior windows too?",
    answer: "Yes. We offer full interior and exterior window cleaning on every job. If you only need exterior cleaning, we can do that too — just let us know at your estimate. Most customers opt for both while we're there.",
  },
  {
    question: "What products do you use — are they safe for kids and pets?",
    answer: "We use eco-friendly, biodegradable cleaning solutions that are safe for kids, pets, and your landscaping. No harsh chemicals, no residue that needs to be kept away from anyone.",
  },
  {
    question: "Do I need to be home during the appointment?",
    answer: "For exterior-only cleanings, you don't need to be home. For interior cleaning, we do need access to the inside of the home, so someone needs to be present. Either way, we'll confirm all the details in advance so there are no surprises.",
  },
  {
    question: "How often should I get my windows cleaned?",
    answer: "Most North Shore homeowners benefit from 2–3 cleanings per year — a spring clean after winter, a midsummer refresh, and a fall prep before the cold sets in. We can help you figure out the right schedule based on your home, your trees, and how much you care about clean windows (no judgment if the answer is 'a lot').",
  },
];

export default function WindowWashingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Window Washing</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Professional Window Washing on the North Shore
          </h1>
          <p className="text-[#1B9BD1] text-xl font-medium">Crystal clear results, every time.</p>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            Interior and exterior window cleaning by a team that takes the job as seriously as any sport they play.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-10 py-4 rounded-xl transition-colors"
            >
              Book a Free Estimate
            </Link>
            <a
              href="tel:8477785310"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-xl transition-colors"
            >
              (847) 778-5310
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">What&apos;s Included</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Every window washing job includes a full service — not just the glass. We take care of the whole window, top to bottom, inside and out. No upsells, no add-ons, no surprises.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Homeowners in Wilmette, Winnetka, and Glenview have been counting on us to bring back the sparkle that Midwest winters tend to steal. We don&apos;t leave until every pane is spotless and you&apos;re satisfied with the results.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex"
                >
                  Book a Free Estimate
                </Link>
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-2xl p-8">
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#DC3545] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">Our Process</h2>
            <p className="mt-4 text-gray-600 text-lg">Every job follows the same four-step routine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#DC3545] flex items-center justify-center mb-5">
                  <span className="text-white font-bold">{p.step}</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">Who It&apos;s For</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Our window washing service is built for homeowners across the North Shore who want professional-quality results without the hassle of finding, vetting, and scheduling a cleaning company that doesn&apos;t call you back.
              </p>
              <ul className="space-y-3">
                {[
                  "Homeowners doing seasonal spring or fall cleanups",
                  "Landlords preparing rentals between tenants",
                  "Families doing move-in or move-out cleanings",
                  "Homeowners prepping to list their property for sale",
                  "Anyone who just wants clean windows and doesn't want to do it themselves",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#1B9BD1] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Seasonal Packages */}
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">Seasonal Packages</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Spring Clean",
                    description: "Start the season right. After a long Illinois winter, your windows accumulate mineral deposits, grime, and film. Our spring clean covers every window inside and out, plus screens and tracks.",
                  },
                  {
                    name: "Post-Winter Deep Clean",
                    description: "Targeted at heavy mineral and road salt residue. Ideal for homes with south or west-facing windows that take the brunt of winter weather.",
                  },
                  {
                    name: "Fall Prep",
                    description: "Get your windows clean before the cold sets in. Remove summer dust, pollen, and buildup before you're closing up for the season.",
                  },
                ].map((pkg) => (
                  <div key={pkg.name} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#1A1A1A] mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
                  </div>
                ))}
                <p className="text-gray-500 text-sm mt-4">
                  All pricing is determined during your free on-site estimate. We assess your home and give you an exact price — no guesswork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/services/pressure-washing"
              className="flex items-center gap-5 border border-gray-200 rounded-xl p-6 hover:border-[#DC3545] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#DC3545] group-hover:bg-[#DC3545] group-hover:text-white transition-colors shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">Pressure Washing</p>
                <p className="text-gray-500 text-sm">Driveways, patios, siding, and more</p>
              </div>
            </Link>
            <Link
              href="/services/trash-bin-cleaning"
              className="flex items-center gap-5 border border-gray-200 rounded-xl p-6 hover:border-[#DC3545] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#DC3545] group-hover:bg-[#DC3545] group-hover:text-white transition-colors shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">Trash Bin Cleaning</p>
                <p className="text-gray-500 text-sm">Scheduled monthly or bi-monthly</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
