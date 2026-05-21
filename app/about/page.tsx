import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import StatsBar from "@/components/StatsBar";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About | North Shore Spotless",
  description: "North Shore Spotless was founded by Christopher Diaz, a student-athlete at Glenbrook South High School in Glenview, IL. Built in the community he grew up in.",
  keywords: "North Shore Spotless Christopher Diaz, Glenbrook South student founder exterior cleaning, Glenview IL cleaning business",
  openGraph: {
    title: "About North Shore Spotless | Christopher Diaz, Founder",
    description: "Built in Glenview. Committed to Spotless. The story behind North Shore Spotless.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://northshorespotless.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">About</li>
            </ol>
          </nav>
          <h1 className="text-display text-white mb-5">
            Built in Glenview.<br />Committed to Spotless.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">The story behind North Shore Spotless.</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo Placeholder */}
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#0A1628] via-[#0d2040] to-[#1a3a5c] flex items-end shadow-2xl">
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="relative z-10 p-8 text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm font-medium">Christopher Diaz</p>
                  <p className="text-white/50 text-xs">Founder, North Shore Spotless · GBS &apos;26</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Story */}
            <AnimatedSection delay={0.15}>
              <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-4">My Story</p>
              <h2 className="text-display-sm text-[#0A1628] mb-6">I built this because I knew I could do it better.</h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>North Shore Spotless was built by me — Christopher Diaz, a student-athlete at Glenbrook South High School in Glenview, IL. I started this business because I wanted to build something real in my own community. Not a side hustle. A real company.</p>
                <p>I bring the same discipline, work ethic, and attention to detail I&apos;ve developed as an athlete to every single job I take. I show up on time. I work hard. And I don&apos;t leave until the job is done right.</p>
                <p>When you hire North Shore Spotless, you&apos;re not calling a 1-800 number or dealing with a rotating crew of workers. You&apos;re working directly with me — your neighbor — and I take that seriously.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-200">
                  Book a Free Estimate
                </Link>
                <a href="mailto:northshorespotless@gmail.com" className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-[#DC3545] text-gray-700 hover:text-[#DC3545] font-semibold px-8 py-4 rounded-xl transition-all">
                  Send Me an Email
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-3">What I Stand For</p>
            <h2 className="text-display-sm text-[#0A1628]">How I Show Up</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hard Work",
                desc: "No shortcuts. No half-measures. Every job gets everything I&apos;ve got — the same way I approach every practice and every game.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Accountability",
                desc: "If something isn&apos;t right, I make it right. No questions asked, no excuses. My name is on every job I do.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Community",
                desc: "I live here too. Wilmette, Winnetka, Glenview, Highland Park — these aren&apos;t just towns on a map. This is my neighborhood, and it matters to me personally.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#DC3545]/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-[#DC3545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: value.desc.replace(/&apos;/g, "'") }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Why Hire Christopher */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <div className="border-l-4 border-[#DC3545] pl-8 text-left mb-10">
              <blockquote className="text-2xl md:text-3xl font-bold text-[#0A1628] leading-tight">
                &ldquo;When you hire me, you&apos;re not just getting a clean home. You&apos;re supporting a kid from your community who&apos;s building something from the ground up — and who will work harder than anyone else to earn your trust.&rdquo;
              </blockquote>
              <p className="mt-5 text-gray-500 font-medium">— Christopher Diaz, Founder</p>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              I don&apos;t have a marketing department or a fleet of trucks. What I have is a genuine commitment to doing exceptional work for the people I grew up around. Every single job I take is a chance to prove that, and I don&apos;t take that lightly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        headline="Ready to Work with Your Neighbor?"
        subtext="Book your free on-site estimate. I'll come to your property, assess the job, and give you an exact price — no obligation, no pressure."
      />
    </>
  );
}
