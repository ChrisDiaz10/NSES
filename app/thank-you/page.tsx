"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const name = sessionStorage.getItem("submittedName");
    if (name) setFirstName(name);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center">
        {/* Animated checkmark */}
        <div className="animate-scale-in w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-emerald-500"
            viewBox="0 0 52 52"
            fill="none"
            aria-label="Success checkmark"
          >
            <path
              className="animate-checkmark"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 27l8 8 16-16"
            />
          </svg>
        </div>

        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Expected response within 2 hours
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#0A1628] mb-5">
            You&apos;re All Set{firstName ? `, ${firstName}` : ""}!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Thanks for reaching out to North Shore Spotless. I&apos;ll be in touch within 2 hours to schedule your free on-site estimate.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            I can&apos;t wait to show you what the standard looks like.
          </p>

          <p className="text-gray-500 font-medium mb-10">— Christopher Diaz, Founder</p>

          {/* What's next */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-left mb-8">
            <h2 className="font-bold text-[#0A1628] mb-5 text-center">What Happens Next</h2>
            <ol className="space-y-4">
              {[
                "I receive your request and will be in touch within 2 hours",
                "We'll find a time that works for your schedule",
                "I come to your property and assess the job in person",
                "I give you an exact price on the spot — no obligation",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#DC3545]/10 text-[#DC3545] flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Contact + CTA */}
          <div className="space-y-4 mb-10">
            <p className="text-gray-500 text-sm">
              Questions in the meantime? Email me directly:
            </p>
            <a
              href="mailto:northshorespotless@gmail.com"
              className="inline-block text-[#1B9BD1] font-semibold hover:underline"
            >
              northshorespotless@gmail.com
            </a>
            <p className="text-gray-400 text-sm">or call</p>
            <a
              href="tel:8477785310"
              className="inline-block text-[#0A1628] font-bold text-xl hover:text-[#DC3545] transition-colors"
              aria-label="Call us at 847-778-5310"
            >
              (847) 778-5310
            </a>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#0d1f35] text-white font-bold px-10 py-4 rounded-xl transition-all hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
