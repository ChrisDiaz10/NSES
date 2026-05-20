import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import StatsBar from "@/components/StatsBar";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "About Us | North Shore Exterior Services",
  description: "North Shore Exterior Services was founded by student-athletes from Glenbrook South High School in Glenview, IL. Learn our story and why we do this work.",
  keywords: "Glenbrook South student athletes business, locally owned exterior cleaning Glenview IL, student athlete cleaning North Shore",
  openGraph: {
    title: "About Us | North Shore Exterior Services",
    description: "Built by Titans. Trusted by the North Shore. The story behind student-athletes from Glenbrook South who built a real business in their own community.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshoreexteriorservices.com/about" },
};

const values = [
  {
    name: "Hard Work",
    description: "We outwork everyone, every time. No shortcuts, no excuses, no half-measures. Whether it's a single window or a full exterior job, the standard stays the same.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Accountability",
    description: "If it's not right, we make it right. Every single time, no questions asked. We back every job with a satisfaction guarantee because that's the only way we know how to operate.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "Community",
    description: "We live here too. Your neighborhood is our neighborhood. The streets we clean are the same ones we've grown up on. We take that seriously — and it shows in how we treat every job.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#DC3545]/20 text-[#DC3545] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#DC3545]/30">
            Glenbrook South · Glenview, IL
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Built by Titans. Trusted by the North Shore.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re not a faceless company. We&apos;re your neighbors.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              North Shore Exterior Services was founded by a group of student-athletes from Glenbrook South High School who wanted to build something real in their own community. What started as a way to earn money between seasons turned into a legitimate exterior cleaning business serving homeowners all across the North Shore.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              We bring the same work ethic, discipline, and team mentality we learned on the football field to every job we show up to — on time, prepared, and focused on results. When you&apos;re an athlete, you learn early that preparation and execution are everything. You don&apos;t half-rep it in practice and expect to perform on game day. The same logic applies when we show up at a home in Wilmette at 8am to wash windows or clean a driveway in Highland Park after a long winter.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              We&apos;re not a faceless company. We&apos;re your neighbors. You might see us at a game on Friday night and cleaning your driveway on Saturday morning. That&apos;s not a coincidence — it&apos;s the whole point. We wanted to build a business that was genuinely rooted in this community, not one that just happens to operate here.
            </p>
            <p className="text-xl leading-relaxed">
              Every job we take is a reflection of who we are — as athletes, as students, and as members of this community. That&apos;s a standard we hold ourselves to every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">How We Show Up</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
              Three values. Every job. No exceptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#DC3545] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{value.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Stats */}
      <StatsBar />

      {/* Why Hire Student-Athletes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-5">What You Get When You Hire Us</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Student-athletes bring a different kind of work culture to a job site. Years of early morning practices, competitive environments, and high-stakes performances shape how we approach everything — including cleaning your driveway.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Punctual", detail: "We show up when we say we will. Every time." },
                  { label: "Coachable", detail: "If you have specific preferences or areas of concern, we listen and we adapt." },
                  { label: "Accountable", detail: "If something isn't right, we come back and fix it. No debate, no excuses." },
                  { label: "Community-Invested", detail: "This is our neighborhood. We take pride in the work because the work reflects on us here." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#DC3545] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-[#1A1A1A]">{item.label}</span>
                      <span className="text-gray-600"> — {item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A1628] rounded-2xl p-10 text-white">
              <div className="w-12 h-1 bg-[#DC3545] mb-6" aria-hidden="true" />
              <blockquote className="text-2xl font-bold leading-snug mb-6">
                &ldquo;When you hire us, you&apos;re not just getting a clean home — you&apos;re supporting kids from your own community who are building something from the ground up.&rdquo;
              </blockquote>
              <div className="text-gray-400 text-sm">
                <p className="font-semibold text-white">North Shore Exterior Services</p>
                <p>Glenview, IL · Founded by Glenbrook South student-athletes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Support Local?"
        subtext="Book a free on-site estimate and get the same work ethic we bring to every game — applied to your home."
      />
    </>
  );
}
