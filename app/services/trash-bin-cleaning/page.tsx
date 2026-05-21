import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Trash Bin Cleaning | North Shore Spotless",
  description: "Scheduled trash bin cleaning for North Shore homeowners. Monthly & bi-monthly plans. Hot water rinse, sanitizing, deodorizing. Serving Glenview, Northbrook, Wilmette, and the North Shore.",
  keywords: "trash bin cleaning North Shore, garbage can cleaning Glenview IL, bin cleaning subscription Chicago suburbs",
  openGraph: {
    title: "Trash Bin Cleaning | North Shore Spotless",
    description: "Fresh bins every month. Zero effort on your end. Scheduled around your garbage pickup day.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshorespotless.com/services/trash-bin-cleaning" },
};

const included = [
  "Interior & exterior scrub",
  "High-pressure hot water rinse",
  "Eco-friendly sanitizing solution",
  "Deodorizing treatment",
  "Bin returned to curb clean and fresh",
  "Scheduled around your garbage pickup day",
];

const process = [
  { step: "01", title: "Scheduled Around Pickup Day", description: "We coordinate with your garbage pickup schedule so your bins are empty and ready to be cleaned the same day the truck comes." },
  { step: "02", title: "Waste Hauler Empties Bin", description: "The garbage truck picks up as normal. Your bins are left at the curb, empty and ready for us." },
  { step: "03", title: "We Deep Clean", description: "Hot water pressure rinse, eco-friendly sanitizing solution, and deodorizing treatment — the complete deep clean your bins deserve." },
  { step: "04", title: "Bin Returned Fresh & Sanitized", description: "We return your clean, sanitized bins to the curb before you even know we were there. No effort required on your end." },
];

const faqs = [
  { question: "When do you clean the bins?", answer: "We clean your bins on or right after your scheduled garbage pickup day — so the bins are always empty when we arrive. You never have to do anything to prepare." },
  { question: "What if I forget to leave my bin out?", answer: "If your bins aren't accessible on cleaning day, we'll reach out to reschedule. We build flexibility into the schedule — life happens, and we get that." },
  { question: "Are your cleaning products safe for kids and pets?", answer: "Yes. We use eco-friendly, biodegradable sanitizing solutions that are safe for your family, your pets, and the environment. No harsh chemicals left behind." },
  { question: "How do I sign up or cancel?", answer: "Signing up is easy — just book a free estimate and we'll set up your cleaning schedule. If you ever need to pause or cancel, just let us know by email with at least 48 hours notice. No contracts, no hassle." },
  { question: "Can I add more bins?", answer: "Absolutely. If you have multiple bins — recycling, yard waste, or additional trash cans — we can include them all. Just let us know when you book and we'll factor them into your estimate." },
];

export default function TrashBinCleaningPage() {
  return (
    <>
      <section className="bg-[#0A1628] py-24 pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Trash Bin Cleaning</li>
            </ol>
          </nav>
          <h1 className="text-display text-white mb-4">Trash Bin Cleaning</h1>
          <p className="text-[#1B9BD1] text-xl font-semibold mb-5">Fresh bins every month. Zero effort on your end.</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Scheduled deep cleans right after garbage pickup. Hot water rinse, eco-friendly sanitizer, deodorizing — and bins returned to the curb before you even notice.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-900/30">Book a Free Estimate</Link>
            <a href="mailto:northshorespotless@gmail.com" className="border-2 border-white/40 hover:border-white text-white font-semibold px-10 py-4 rounded-xl transition-all hover:bg-white/10">northshorespotless@gmail.com</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-display-sm text-[#0A1628] mb-5">What&apos;s Included</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">Your trash bins are the most overlooked part of home maintenance — and the most unsanitary. Bacteria, mold, and odors build up fast, especially in the North Shore summers. One deep clean makes a dramatic difference.</p>
              <p className="text-gray-600 leading-relaxed mb-8">We set up a recurring schedule around your garbage day, so you never have to think about it. Monthly or bi-monthly — you choose. Your bins come back cleaner than they were when you got them.</p>
              <Link href="/contact" className="inline-flex bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-200">Book a Free Estimate</Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="bg-[#F8F9FA] rounded-2xl p-8">
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#DC3545] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[#0A1628] font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-display-sm text-[#0A1628]">Subscription Plans</h2>
            <p className="mt-4 text-gray-500 text-lg">Set it and forget it. We handle the rest.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Monthly", desc: "A full deep clean every month, scheduled around your garbage pickup day. Best for families and anyone who wants the cleanest bins possible year-round.", badge: "Most Popular" },
              { name: "Bi-Monthly", desc: "A thorough clean every other month — ideal for lower-traffic households or those who want to maintain clean bins without monthly service.", badge: null },
              { name: "One-Time Deep Clean", desc: "Not ready for a subscription? A single deep clean gets your bins back to factory fresh. Perfect for before guests arrive, after moving in, or just as a reset.", badge: null },
            ].map((plan) => (
              <AnimatedSection key={plan.name}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full relative">
                  {plan.badge && (
                    <span className="absolute -top-3 left-6 bg-[#DC3545] text-white text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</span>
                  )}
                  <h3 className="font-bold text-[#0A1628] text-xl mb-3">{plan.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{plan.desc}</p>
                  <Link href="/contact" className="inline-flex text-sm font-semibold text-[#DC3545] hover:underline">
                    Get an Estimate →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <p className="text-gray-400 text-sm">Multi-bin discounts available. All pricing determined during your free on-site estimate.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-display-sm text-[#0A1628]">Our Process</h2>
            <p className="mt-4 text-gray-500 text-lg">Perfectly timed around your garbage pickup day.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#DC3545] flex items-center justify-center mb-5 shadow-md shadow-red-200">
                    <span className="text-white font-black">{p.step}</span>
                  </div>
                  <h3 className="font-bold text-[#0A1628] mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-display-sm text-[#0A1628]">Frequently Asked Questions</h2>
          </AnimatedSection>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0A1628] mb-8">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { href: "/services/window-washing", title: "Window Washing", desc: "Interior & exterior, screens, sills and more" },
              { href: "/services/pressure-washing", title: "Pressure Washing", desc: "Driveways, patios, siding, and more" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-5 border border-gray-200 rounded-xl p-6 hover:border-[#DC3545] hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#DC3545] group-hover:bg-[#DC3545] group-hover:text-white transition-colors shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <div>
                  <p className="font-bold text-[#0A1628]">{s.title}</p>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
