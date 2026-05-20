import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Trash Bin Cleaning | North Shore Exterior Services",
  description: "Professional trash bin cleaning scheduled around your pickup day. Monthly or bi-monthly plans. Serving Glenview, Northbrook, Deerfield, Wilmette, and the North Shore.",
  keywords: "trash bin cleaning North Shore, garbage can cleaning Chicago suburbs Glenview, bin cleaning subscription Wilmette Northbrook",
  openGraph: {
    title: "Trash Bin Cleaning | North Shore Exterior Services",
    description: "Fresh bins every week. No effort on your end. Scheduled around your regular garbage pickup day.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com/services/trash-bin-cleaning" },
};

const included = [
  "Interior & exterior scrub",
  "High-pressure hot water rinse",
  "Eco-friendly sanitizing solution",
  "Deodorizing treatment",
  "Bin returned clean and ready at the curb",
  "Scheduled on or after your regular garbage pickup day",
];

const process = [
  {
    step: "01",
    title: "We Schedule Around Your Pickup Day",
    description: "Tell us your garbage day and we schedule our visit right after — so the bin is always empty when we arrive.",
  },
  {
    step: "02",
    title: "Waste Hauler Empties Bin",
    description: "Your regular garbage pickup happens as normal. Once it's done, the bin is ready for us.",
  },
  {
    step: "03",
    title: "We Arrive & Deep Clean",
    description: "Hot-water pressure washing, eco-friendly sanitizing solution, and deodorizing treatment. Interior and exterior, every time.",
  },
  {
    step: "04",
    title: "Bin Returned Fresh & Sanitized",
    description: "Your bin is returned to the curb clean, sanitized, and odor-free. No input needed from you.",
  },
];

const faqs = [
  {
    question: "When exactly do you clean the bins?",
    answer: "We schedule your cleaning for the same day as your regular garbage pickup — after the waste hauler has come through. This means your bin is always empty when we arrive. If pickup runs late for any reason, we'll reschedule to the next available slot at no charge.",
  },
  {
    question: "What if I forget to leave my bin accessible?",
    answer: "Life happens. If your bin isn't accessible when we arrive, we'll let you know and reschedule for the following week. We ask that bins be left at or near the curb after pickup so we can get to them without issue.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer: "Yes. We use eco-friendly, biodegradable sanitizing solutions that are safe for kids, pets, and the environment. No harsh chemicals, no residue that lingers after the bin dries.",
  },
  {
    question: "How do I sign up or cancel my subscription?",
    answer: "Signing up is easy — just fill out our estimate form or give us a call at (847) 778-5310. We'll walk you through the details and get you on the schedule. Canceling is just as simple: there's no contract, no cancellation fee. Just let us know.",
  },
  {
    question: "Can I add more bins to my plan?",
    answer: "Absolutely. Most homes have 2–3 bins between trash, recycling, and yard waste. We offer multi-bin discounts — the more bins you add, the better the per-bin value. Ask us about it when we come out for your estimate.",
  },
];

const subscriptions = [
  {
    name: "Monthly Cleaning",
    description: "Our most popular option. Your bin gets a full deep clean once per month, keeping bacteria and odors from building up over time. Perfect for families, pet owners, and anyone who wants consistent results without thinking about it.",
  },
  {
    name: "Bi-Monthly Cleaning",
    description: "A deep clean every two months for homeowners who don't need monthly service but still want the benefits of a professionally cleaned bin. Great for smaller households or lower-traffic bins.",
  },
  {
    name: "One-Time Deep Clean",
    description: "For when things have gotten a little out of hand. One thorough treatment — interior scrub, hot water rinse, sanitizing solution, and deodorizer — to get your bin back to a clean starting point.",
  },
];

export default function TrashBinCleaningPage() {
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
              <li className="text-white font-medium">Trash Bin Cleaning</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Trash Bin Cleaning — Scheduled Around Your Pickup Day
          </h1>
          <p className="text-[#1B9BD1] text-xl font-medium">Fresh bins every week. No effort on your end.</p>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            We handle the part of garbage day everyone dreads. You&apos;ll never have to think about it again.
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
                Standard rinsing doesn&apos;t cut it. Over time, bins accumulate layers of bacteria, mold, and odor that only professional cleaning can address. We use a combination of high-temperature pressure washing and eco-friendly sanitizing solution to get your bins genuinely clean — not just wet.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Homeowners in Glenview, Northbrook, and across the North Shore have made this their easiest home maintenance subscription. Once you&apos;re on the schedule, you stop thinking about your bins — and you start wondering how you lived without this service.
              </p>
              <Link
                href="/contact"
                className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex"
              >
                Book a Free Estimate
              </Link>
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

      {/* Subscription Options */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">Subscription Options</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the frequency that works for your home. All pricing is determined during your free on-site estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptions.map((sub) => (
              <div key={sub.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl text-[#1A1A1A] mb-4">{sub.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{sub.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Multi-bin discounts available — ask us about it at your estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">Our Process</h2>
            <p className="mt-4 text-gray-600 text-lg">Simple, consistent, and built around your schedule.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100">
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
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">Who It&apos;s For</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Honestly? This service is for anyone who has ever opened a trash bin on a hot day in July and immediately regretted it. But specifically:
              </p>
              <ul className="space-y-3">
                {[
                  "Families with young kids who play in the driveway near the bins",
                  "Pet owners whose animals have a habit of investigating the garbage",
                  "Anyone who wants a cleaner, odor-free bin year-round without lifting a finger",
                  "Homeowners who dread garbage day because of the smell",
                  "HOA members or landlords maintaining high standards on a property",
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

            <div className="bg-[#0A1628] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most people don&apos;t realize how much bacteria and mold can accumulate in a trash bin over months of regular use. Standard rinsing barely scratches the surface.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hot water pressure washing combined with professional-grade sanitizing solution eliminates the buildup that causes odor and bacteria growth. It&apos;s not just cleaner — it&apos;s genuinely sanitary.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For families with kids and pets who spend time outdoors near the bins, this isn&apos;t just a convenience service — it&apos;s a health one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/services/window-washing"
              className="flex items-center gap-5 border border-gray-200 bg-white rounded-xl p-6 hover:border-[#DC3545] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#DC3545] group-hover:bg-[#DC3545] group-hover:text-white transition-colors shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                  <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
                  <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">Window Washing</p>
                <p className="text-gray-500 text-sm">Interior & exterior, screens, sills and more</p>
              </div>
            </Link>
            <Link
              href="/services/pressure-washing"
              className="flex items-center gap-5 border border-gray-200 bg-white rounded-xl p-6 hover:border-[#DC3545] hover:shadow-md transition-all group"
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
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
