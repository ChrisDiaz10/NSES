import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Professional Window Washing | North Shore Spotless",
  description: "Expert window washing on the North Shore. Interior & exterior glass, screens, sills, hard water stains — every pane spotless. Serving Evanston, Wilmette, Winnetka, Glenview, and beyond.",
  keywords: "window washing North Shore, window cleaning Evanston Wilmette Winnetka Glenview, professional window cleaning Chicago suburbs",
  openGraph: {
    title: "Professional Window Washing | North Shore Spotless",
    description: "Crystal clear results, every time. Interior & exterior window cleaning serving the North Shore.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshorespotless.com/services/window-washing" },
};

const included = [
  "Interior & exterior glass cleaning",
  "Screen removal, cleaning & reinstallation",
  "Window track and sill wiping",
  "Hard water stain treatment",
  "Storm window cleaning",
  "Skylight cleaning where accessible",
  "Final streak check on every single pane",
];

const process = [
  { step: "01", title: "Inspection & Assessment", description: "We walk the property and assess every window — noting hard water stains, damaged screens, and any areas needing special attention before we start." },
  { step: "02", title: "Screen & Frame Clean", description: "We remove, clean, and set aside all screens. Frames, tracks, and sills get wiped down before we ever touch the glass." },
  { step: "03", title: "Glass Cleaned Inside & Out", description: "Using professional-grade squeegees and streak-free solution, we clean every pane inside and out — then double check for any spots." },
  { step: "04", title: "Final Streak Check & Walkthrough", description: "We do a full walkthrough before we leave. Every pane inspected in the light — if there's a streak, we fix it before we go." },
];

const faqs = [
  { question: "How long does a window washing appointment take?", answer: "Most residential appointments take 2–4 hours depending on the number of windows, the size of the home, and whether we're doing interior and exterior. We give you a time estimate at your free on-site assessment." },
  { question: "Do you clean interior windows too?", answer: "Yes. We offer full interior and exterior window cleaning on every job. If you only need exterior, we can do that too — just let us know. Most customers opt for both while we're there." },
  { question: "Are your products safe for kids and pets?", answer: "We use eco-friendly, biodegradable cleaning solutions that are safe for kids, pets, and your landscaping. No harsh chemicals, no residue." },
  { question: "Do I need to be home during the appointment?", answer: "For exterior-only cleanings, you don't need to be home. For interior cleaning, we do need access, so someone needs to be present. We'll confirm all details in advance." },
  { question: "How often should I get my windows cleaned?", answer: "Most North Shore homeowners benefit from 2–3 cleanings per year — a spring clean after winter, a midsummer refresh, and a fall prep before the cold. We'll help figure out the right schedule based on your home." },
];

export default function WindowWashingPage() {
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
              <li className="text-white font-medium">Window Washing</li>
            </ol>
          </nav>
          <h1 className="text-display text-white mb-4">Professional Window Washing</h1>
          <p className="text-[#1B9BD1] text-xl font-semibold mb-5">Crystal clear results — inside and out.</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Interior and exterior window cleaning by a team that takes the job as seriously as any sport they play.</p>
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
              <p className="text-gray-600 text-lg leading-relaxed mb-5">Every window washing job includes a full service — not just the glass. We take care of the whole window, top to bottom, inside and out. No upsells, no add-ons, no surprises.</p>
              <p className="text-gray-600 leading-relaxed mb-8">Homeowners in Wilmette, Winnetka, and Glenview have trusted us to bring back the sparkle that Midwest winters steal. We don&apos;t leave until every pane is spotless and you&apos;re satisfied.</p>
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
            <h2 className="text-display-sm text-[#0A1628]">Our Process</h2>
            <p className="mt-4 text-gray-500 text-lg">Every job follows the same four-step routine.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-display-sm text-[#0A1628] mb-6">Who It&apos;s For</h2>
              <ul className="space-y-3">
                {["Homeowners doing seasonal spring or fall cleanups", "Landlords preparing rentals between tenants", "Families doing move-in or move-out cleanings", "Homeowners prepping to list their property", "Anyone who wants clean windows without doing it themselves"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#1B9BD1] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="text-display-sm text-[#0A1628] mb-6">Seasonal Packages</h2>
              <div className="space-y-4">
                {[
                  { name: "Spring Clean", desc: "After a long Illinois winter, your windows accumulate mineral deposits, grime, and film. Our spring clean covers every window inside and out, plus screens and tracks." },
                  { name: "Post-Winter Deep Clean", desc: "Targeted at heavy mineral and road salt residue. Ideal for homes with south or west-facing windows that take the brunt of winter weather." },
                  { name: "Fall Prep", desc: "Get your windows clean before the cold sets in. Remove summer dust, pollen, and buildup before you close up for the season." },
                ].map((pkg) => (
                  <div key={pkg.name} className="border border-gray-200 rounded-xl p-5 hover:border-[#DC3545]/30 transition-colors">
                    <h3 className="font-bold text-[#0A1628] mb-2">{pkg.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
                <p className="text-gray-400 text-xs pt-2">All pricing determined during your free on-site estimate.</p>
              </div>
            </AnimatedSection>
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
              { href: "/services/pressure-washing", title: "Pressure Washing", desc: "Driveways, patios, siding, and more" },
              { href: "/services/trash-bin-cleaning", title: "Trash Bin Cleaning", desc: "Monthly & bi-monthly subscription plans" },
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
