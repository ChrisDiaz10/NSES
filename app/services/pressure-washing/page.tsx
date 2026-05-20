import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pressure Washing Services | North Shore Exterior Services",
  description: "Professional pressure washing for North Shore homes. Driveways, patios, siding, decks & more. Soft wash option available. Serving Glenview, Highland Park, Northbrook, and the North Shore.",
  keywords: "pressure washing North Shore Chicago, driveway cleaning Chicago suburbs, soft wash North Shore, exterior cleaning Glenview Northbrook Highland Park",
  openGraph: {
    title: "Pressure Washing Services | North Shore Exterior Services",
    description: "Blast away years of grime in a single visit. Professional pressure washing by student-athletes serving the North Shore.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com/services/pressure-washing" },
};

const included = [
  "Driveways & parking pads",
  "Sidewalks & walkways",
  "Patios & decks",
  "Fences & retaining walls",
  "Home siding (soft wash option available for delicate surfaces)",
  "Garage floors",
  "Outdoor furniture",
];

const process = [
  {
    step: "01",
    title: "On-Site Assessment",
    description: "We walk the property and assess each surface — noting stains, the type of material, and whether standard pressure or soft wash is the right approach.",
  },
  {
    step: "02",
    title: "Pre-Treatment of Stains",
    description: "Tough stains like oil, mold, or rust get pre-treated with the appropriate solution before the main wash for maximum effectiveness.",
  },
  {
    step: "03",
    title: "Pressure or Soft Wash",
    description: "We apply the right method for each surface. High pressure for concrete and hardscape, soft wash for siding, wood, and painted surfaces.",
  },
  {
    step: "04",
    title: "Rinse & Final Inspection",
    description: "A thorough rinse clears all residue, and we do a final walkthrough to make sure every surface looks exactly the way it should.",
  },
];

const faqs = [
  {
    question: "Will pressure washing damage my siding or deck?",
    answer: "Not when it's done right. High-pressure washing on the wrong surfaces can cause damage — that's why we assess every surface before we start. For wood, vinyl, painted surfaces, and anything delicate, we use soft washing instead: lower pressure, longer dwell time, and the right cleaning agents. You get great results without any risk of damage.",
  },
  {
    question: "How long does pressure washing take?",
    answer: "A typical driveway and walkway job takes 1–3 hours. A full exterior wash of a larger home with multiple surfaces can take a full day. We'll give you a realistic time estimate when we come out for your free on-site assessment.",
  },
  {
    question: "How often should I pressure wash my driveway?",
    answer: "For North Shore homeowners, once a year is generally a good baseline — typically in the spring after road salt and winter debris have had a chance to build up. Driveways with a lot of traffic or tree coverage may benefit from more frequent cleaning.",
  },
  {
    question: "Can you remove oil stains from my driveway?",
    answer: "In many cases, yes. Fresh oil stains respond well to pre-treatment and pressure washing. Older, set-in stains may be significantly lightened but not always fully removed depending on how long they've been there and the surface type. We'll give you an honest assessment on site.",
  },
  {
    question: "Do I need to be home during the appointment?",
    answer: "For most exterior pressure washing jobs, you don't need to be home. We just need access to the areas being cleaned. If you have a gate or need us to access the backyard, we'll coordinate those details in advance. We always check in with you before we leave.",
  },
];

export default function PressureWashingPage() {
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
              <li className="text-white font-medium">Pressure Washing</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Pressure Washing Services for North Shore Homes
          </h1>
          <p className="text-[#47C5E8] text-xl font-medium">Blast away years of grime in a single visit.</p>
          <p className="mt-5 text-gray-300 text-lg max-w-2xl mx-auto">
            We restore your driveways, patios, siding, and more to looking clean and fresh — using the right technique for every surface.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#E31E24] hover:bg-[#c01920] text-white font-bold px-10 py-4 rounded-xl transition-colors"
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
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">What We Clean</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                The North Shore is one of the most beautiful stretches of suburbs in the country — but a winter&apos;s worth of road salt, mold, algae, and general grime can make even the nicest property look worn out. A single pressure washing visit can make a dramatic difference.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you&apos;re in Highland Park prepping your driveway before summer entertaining, in Northbrook getting your deck ready for the season, or in Deerfield cleaning up before listing your home — we show up prepared and deliver results that speak for themselves.
              </p>
              <Link
                href="/contact"
                className="bg-[#E31E24] hover:bg-[#c01920] text-white font-bold px-8 py-4 rounded-xl transition-colors inline-flex"
              >
                Book a Free Estimate
              </Link>
            </div>

            <div className="bg-[#F8F9FA] rounded-2xl p-8">
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E31E24] flex items-center justify-center shrink-0 mt-0.5">
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
            <p className="mt-4 text-gray-600 text-lg">Done right, every single time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E31E24] flex items-center justify-center mb-5">
                  <span className="text-white font-bold">{p.step}</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For + Soft Wash */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">Who It&apos;s For</h2>
              <ul className="space-y-3">
                {[
                  "Homeowners prepping for summer outdoor entertaining",
                  "Post-winter cleanup — salt, grime, and algae buildup",
                  "Pre-listing home prep to maximize curb appeal",
                  "Regular seasonal maintenance to protect surfaces long-term",
                  "Rental property owners maintaining their investment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#47C5E8] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A1628] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Soft Wash vs. High Pressure</h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                Not every surface should get the same treatment. Concrete driveways and brick can handle high pressure — but vinyl siding, wood decking, and painted surfaces need a gentler approach.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                Soft washing uses lower water pressure combined with professional-grade cleaning solutions that break down mold, algae, and grime without the force that can damage delicate materials.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We assess every surface on site and apply the right method automatically. There&apos;s no extra charge for soft washing — it&apos;s just part of doing the job properly.
              </p>
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
              href="/services/window-washing"
              className="flex items-center gap-5 border border-gray-200 rounded-xl p-6 hover:border-[#E31E24] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-colors shrink-0">
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
              href="/services/trash-bin-cleaning"
              className="flex items-center gap-5 border border-gray-200 rounded-xl p-6 hover:border-[#E31E24] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white transition-colors shrink-0">
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
