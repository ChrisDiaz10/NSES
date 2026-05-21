import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function StoryHook() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Pull Quote */}
          <AnimatedSection>
            <div className="border-l-4 border-[#DC3545] pl-8">
              <p className="text-3xl md:text-4xl font-black text-[#0A1628] leading-tight">
                &ldquo;I built this because I knew I could do it better.&rdquo;
              </p>
              <p className="mt-5 text-gray-500 font-medium">
                — Christopher Diaz, Founder
              </p>
            </div>
          </AnimatedSection>

          {/* Story Copy */}
          <AnimatedSection delay={0.15}>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              North Shore Spotless was founded by Christopher Diaz, a student-athlete at Glenbrook South High School. Built to serve his own community — and built to last.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The same discipline, work ethic, and attention to detail developed on the football field goes into every single job. On time. Prepared. Spotless results — every time, no exceptions. When you hire North Shore Spotless, you&apos;re not calling a 1-800 number. You&apos;re working directly with your neighbor.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#DC3545] font-semibold hover:gap-3 transition-all"
            >
              Read the full story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
