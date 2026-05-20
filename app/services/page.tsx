import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services | North Shore Exterior Services",
  description: "Professional window washing, pressure washing, and trash bin cleaning for North Shore homeowners. Free on-site estimates. Serving Evanston, Wilmette, Glenview, and more.",
  openGraph: {
    title: "Our Services | North Shore Exterior Services",
    description: "Window washing, pressure washing, and trash bin cleaning across the North Shore. Book your free estimate today.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com/services" },
};

const services = [
  {
    id: "window-washing",
    title: "Window Washing",
    tagline: "Crystal clear results, every time.",
    href: "/services/window-washing",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.6" />
        <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.6" />
        <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.6" />
      </svg>
    ),
    description: `There's a reason window washing is one of our most requested services. Clean windows don't just look great — they let in more natural light, improve your home's curb appeal, and protect the glass from long-term mineral buildup and staining. Our team handles the whole job from top to bottom, inside and out.

Whether you're getting ready for a season change, prepping your home for sale, or just tired of looking through hazy, streaked glass, we've got you covered. We bring the right tools, the right technique, and the attention to detail that makes the difference between a decent job and a perfect one.`,
    included: [
      "Interior & exterior glass cleaning",
      "Screen removal, cleaning & reinstallation",
      "Window track and sill wiping",
      "Hard water stain treatment",
      "Storm window cleaning",
      "Skylight cleaning where accessible",
      "Final streak check on every pane",
    ],
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    tagline: "Blast away years of grime in a single visit.",
    href: "/services/pressure-washing",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: `The North Shore winters are hard on every exterior surface. By the time spring rolls around, your driveway, patio, and siding have taken months of road salt, grime, and weather wear. Pressure washing gives all of it a fresh start.

We offer both traditional high-pressure washing and low-pressure soft washing for more delicate surfaces. Our team assesses everything on site and uses the right method for each surface — so you get great results without risking damage to wood, siding, or painted surfaces. One visit can make your property look years newer.`,
    included: [
      "Driveways & parking pads",
      "Sidewalks & walkways",
      "Patios & decks",
      "Fences & retaining walls",
      "Home siding (soft wash option available)",
      "Garage floors",
      "Outdoor furniture",
    ],
  },
  {
    id: "trash-bin-cleaning",
    title: "Trash Bin Cleaning",
    tagline: "Fresh bins every week. No effort on your end.",
    href: "/services/trash-bin-cleaning",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    description: `Most people don't think about their trash bins until garbage day, when the smell hits. Over time, bins accumulate bacteria, mold, and residue that regular rinsing just doesn't handle. Our professional bin cleaning service uses hot-water pressure washing and eco-friendly sanitizing solution to get them genuinely clean — not just rinsed off.

We schedule everything around your regular garbage pickup day, so your bins are already empty when we arrive. You don't have to be home, you don't have to do anything — just let us handle it. Monthly or bi-monthly plans available, along with one-time deep cleans for when things have gotten a little out of hand.`,
    included: [
      "Interior & exterior scrub",
      "High-pressure hot water rinse",
      "Eco-friendly sanitizing solution",
      "Deodorizing treatment",
      "Bin returned clean and ready at the curb",
      "Scheduled on or after your regular garbage pickup day",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-white font-medium">Services</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">Our Services</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Three services. One team. Every job treated like game day.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
          id={service.id}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-[#DC3545]">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">{service.title}</h2>
                    <p className="text-[#1B9BD1] font-medium mt-1">{service.tagline}</p>
                  </div>
                </div>

                {service.description.split("\n\n").map((para, j) => (
                  <p key={j} className="text-gray-600 text-lg leading-relaxed mb-4">
                    {para}
                  </p>
                ))}

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-8 py-4 rounded-xl transition-colors text-center"
                  >
                    Book a Free Estimate
                  </Link>
                  <Link
                    href={service.href}
                    className="border-2 border-[#1B9BD1] text-[#1B9BD1] hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl transition-colors text-center"
                  >
                    Full Details →
                  </Link>
                </div>
              </div>

              {/* What's Included */}
              <div className={`bg-[#0A1628] rounded-2xl p-8 text-white ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                <h3 className="font-bold text-lg mb-6 text-[#DC3545] uppercase tracking-wider text-sm">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#DC3545] mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </>
  );
}
