import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Pressure Washing Services | North Shore Spotless",
  description: "Professional pressure washing for North Shore homes. Driveways, patios, siding, decks & more. Soft wash option available. Serving Glenview, Highland Park, Northbrook, and the North Shore.",
  keywords: "pressure washing North Shore Chicago, driveway cleaning Chicago suburbs, soft wash North Shore, exterior cleaning Glenview Northbrook Highland Park",
  openGraph: {
    title: "Pressure Washing Services | North Shore Spotless",
    description: "Blast away years of grime in a single visit. Professional pressure washing serving the North Shore.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshorespotless.com/services/pressure-washing" },
};

const included = [
  "Driveways & parking pads",
  "Sidewalks & walkways",
  "Patios & decks",
  "Fences & retaining walls",
  "Home siding (soft wash option available)",
  "Garage floors",
  "Outdoor furniture",
];

const process = [
  { step: "01", title: "On-Site Assessment", description: "We walk the property and assess each surface — noting stains, material type, and whether standard pressure or soft wash is the right approach." },
  { step: "02", title: "Pre-Treatment of Stains", description: "Tough stains like oil, mold, or rust get pre-treated with the appropriate solution before the main wash for maximum effectiveness." },
  { step: "03", title: "Pressure or Soft Wash", description: "We apply the right method for each surface. High pressure for concrete and hardscape, soft wash for siding, wood, and painted surfaces." },
  { step: "04", title: "Rinse & Final Inspection", description: "A thorough rinse clears all residue, and we do a final walkthrough to make sure every surface looks exactly the way it should." },
];

const faqs = [
  { question: "Will pressure washing damage my siding or deck?", answer: "Not when it's done right. High-pressure washing on the wrong surfaces can cause damage — that's why we assess every surface before we start. For wood, vinyl, painted surfaces, and anything delicate, we use soft washing instead: lower pressure, longer dwell time, and the right cleaning agents." },
  { question: "How long does pressure washing take?", answer: "A typical driveway and walkway job takes 1–3 hours. A full exterior wash of a larger home with multiple surfaces can take a full day. We'll give you a realistic time estimate at your free on-site assessment." },
  { question: "How often should I pressure wash my driveway?", answer: "For North Shore homeowners, once a year is generally a good baseline — typically in the spring after road salt and winter debris have built up. Driveways with a lot of traffic or tree coverage may benefit from more frequent cleaning." },
  { question: "Can you remove oil stains from my driveway?", answer: "In many cases, yes. Fresh oil stains respond well to pre-treatment and pressure washing. Older, set-in stains may be significantly lightened but not always fully removed depending on how long they've been there. We'll give you an honest assessment on site." },
  { question: "Do I need to be home during the appointment?", answer: "For most exterior pressure washing jobs, you don't need to be home. We just need access to the areas being cleaned. If you have a gate or need us to access the backyard, we'll coordinate those details in advance." },
];

export default function PressureWashingPage() {
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
              <li className="text-white font-medium">Pressure Washing</li>
            </ol>
          </nav>
          <h1 className="text-display text-white mb-4">Pressure Washing Services</h1>
          <p className="text-[#1B9BD1] text-xl font-semibold mb-5">Blast away years of grime in a single visit.</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We restore your driveways, patios, siding, and more — using the right technique for every surface.</p>
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
              <h2 className="text-display-sm text-[#0A1628] mb-5">What We Clean</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">The North Shore is one of the most beautiful stretches of suburbs in the country — but a winter&apos;s worth of road salt, mold, algae, and general grime can make even the nicest property look worn out.</p>
              <p className="text-gray-600 leading-relaxed mb-8">Whether you&apos;re in Highland Park prepping your driveway before summer entertaining, in Northbrook getting your deck ready for the season, or in Deerfield cleaning up before listing your home — we show up prepared and deliver results that speak for themselves.</p>
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
            <p className="mt-4 text-gray-500 text-lg">Done right, every single time.</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-display-sm text-[#0A1628] mb-6">Who It&apos;s For</h2>
              <ul className="space-y-3">
                {["Homeowners prepping for summer outdoor entertaining", "Post-winter cleanup — salt, grime, and algae buildup", "Pre-listing home prep to maximize curb appeal", "Regular seasonal maintenance to protect surfaces long-term", "Rental property owners maintaining their investment"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#1B9BD1] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="bg-[#0A1628] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Soft Wash vs. High Pressure</h2>
              <p className="text-gray-300 leading-relaxed mb-5">Not every surface should get the same treatment. Concrete driveways and brick can handle high pressure — but vinyl siding, wood decking, and painted surfaces need a gentler approach.</p>
              <p className="text-gray-300 leading-relaxed mb-5">Soft washing uses lower water pressure combined with professional-grade cleaning solutions that break down mold, algae, and grime without the force that can damage delicate materials.</p>
              <p className="text-gray-300 leading-relaxed">We assess every surface on site and apply the right method automatically. There&apos;s no extra charge for soft washing — it&apos;s just part of doing the job properly.</p>
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
              { href: "/services/window-washing", title: "Window Washing", desc: "Interior & exterior, screens, sills and more" },
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
