import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | North Shore Exterior Services",
  description: "Thanks for reaching out to North Shore Exterior Services. We'll be in touch within 2 hours to schedule your free on-site estimate.",
  robots: { index: false },
  alternates: { canonical: "https://northshoreexteriorservices.com/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-[#F8F9FA] flex items-center justify-center py-20 pt-28">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        {/* Animated checkmark */}
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-green-500"
            viewBox="0 0 52 52"
            fill="none"
            aria-label="Success checkmark"
          >
            <circle cx="26" cy="26" r="25" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.3" />
            <path
              className="animate-checkmark"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-5">You&apos;re All Set!</h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Thanks for reaching out to North Shore Exterior Services. We&apos;ll call or text you within 2 hours to schedule your free on-site estimate. We can&apos;t wait to show you what we can do.
        </p>

        {/* Expected response badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 font-semibold px-5 py-2.5 rounded-full text-sm mb-8">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
          Expected response: within 2 hours
        </div>

        {/* Call option */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
          <p className="text-gray-600 text-sm mb-3">Need it faster?</p>
          <a
            href="tel:8477785310"
            className="text-[#E31E24] font-bold text-2xl hover:text-[#c01920] transition-colors block mb-1"
            aria-label="Call us at 847-778-5310"
          >
            (847) 778-5310
          </a>
          <p className="text-gray-400 text-xs">Monday – Saturday, 7am–6pm</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
