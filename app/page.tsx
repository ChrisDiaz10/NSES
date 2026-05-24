"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import StoryHook from "@/components/StoryHook";
import HowItWorks from "@/components/HowItWorks";
import StatsBar from "@/components/StatsBar";
import CTABanner from "@/components/CTABanner";
import TrustBadges from "@/components/TrustBadges";
import ServiceAreaBadges from "@/components/ServiceAreaBadges";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Window Washing",
    href: "/services/window-washing",
    description: "Interior and exterior glass, screens, sills, hard water stains — every pane cleaned to perfection. We don't leave until every window is spotless.",
    bullets: ["Interior & exterior glass", "Screen cleaning & reinstall", "Track & sill wiping", "Hard water treatment"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
        <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Pressure Washing",
    href: "/services/pressure-washing",
    description: "Blast away years of grime from driveways, patios, siding, and more. Soft wash available for delicate surfaces. One visit, dramatic results.",
    bullets: ["Driveways & walkways", "Patios & decks", "Home siding", "Soft wash available"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Trash Bin Cleaning",
    href: "/services/trash-bin-cleaning",
    description: "Scheduled deep cleans after garbage pickup. Hot water rinse, eco-friendly sanitizer, deodorizing treatment. Fresh bins every month without lifting a finger.",
    bullets: ["Monthly & bi-monthly plans", "Hot water pressure rinse", "Eco-friendly sanitizer", "Same-day curb return"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Wilmette",
    service: "Window Washing",
    quote: "I honestly wasn't sure what to expect hiring a high schooler, but Christopher showed up on time, was incredibly professional, and my windows have never looked this clean. Already booked him for fall.",
  },
  {
    name: "James R.",
    location: "Highland Park",
    service: "Pressure Washing",
    quote: "Driveway looks brand new. Christopher was punctual, efficient, and clearly takes pride in his work. Highly recommend to anyone on the North Shore.",
  },
  {
    name: "Lisa K.",
    location: "Glenview",
    service: "Trash Bin Cleaning",
    quote: "Love that I'm supporting a local GBS student and getting great service at the same time. Bins are spotless every month without me having to think about it.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center hero-gradient overflow-hidden">
        <div className="dot-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/60" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-20">
          <motion.div variants={stagger} initial="initial" animate="animate" transition={{ staggerChildren: 0.12 }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Now serving the entire North Shore
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-display text-white mb-6">
              The North Shore&apos;s<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC3545] to-[#ff6b7a]">
                Exterior Cleaning
              </span>{" "}
              Standard.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
              Professional window washing, pressure washing, and trash bin cleaning — done right, every time. Serving Glenview and the entire North Shore.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/contact"
                className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 transition-all hover:scale-105 hover:shadow-red-900/60 text-lg"
              >
                Book a Free Estimate
              </Link>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-100 text-[#0A1628] font-bold px-10 py-4 rounded-xl transition-all hover:scale-105 text-lg shadow-sm"
              >
                See Our Services
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <TrustBadges variant="dark" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow" aria-hidden="true">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Story Hook */}
      <StoryHook />

      {/* Services */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-display-sm text-[#0A1628] mb-4">Three services. One standard. Spotless.</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Everything handled by North Shore Spotless — the same attention to detail on every single job.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Not sure which service you need?{" "}
              <Link href="/contact" className="text-[#DC3545] font-semibold hover:underline">
                Book a free estimate
              </Link>{" "}
              and we&apos;ll assess everything on-site.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-4">Why North Shore Spotless</p>
              <h2 className="text-display-sm text-white mb-6">
                Why Homeowners Across the North Shore Choose Us
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                From Wilmette to Lake Forest, homeowners on the North Shore are choosing a different standard. Not a franchise. Not a revolving door of workers. One person. One standard. Spotless results every time.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Founded & Based in Glenview",
                  desc: "This is my community. I take that personally.",
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                },
                {
                  title: "Fully Insured",
                  desc: "Every job is covered. You're protected, no exceptions.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  title: "Eco-Friendly Products",
                  desc: "Safe for your kids, your pets, and your lawn.",
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
                },
                {
                  title: "Satisfaction Guaranteed",
                  desc: "Not happy with the results? I'll re-clean the job at no charge — no questions asked.",
                  icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                },
              ].map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#DC3545]/20 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#DC3545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Stats */}
      <StatsBar />

      {/* Reviews */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="text-display-sm text-[#0A1628]">What Our Neighbors Are Saying</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} {...r} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-[#1B9BD1] font-semibold text-sm uppercase tracking-widest mb-4">Where We Work</p>
            <h2 className="text-display-sm text-white mb-5">Proudly Serving the North Shore</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              From Evanston to Lake Forest, North Shore Spotless serves the communities Christopher grew up in. Local, reliable, and always on time.
            </p>
            <ServiceAreaBadges variant="dark" />
            <p className="text-gray-500 text-sm mt-8">
              Don&apos;t see your town?{" "}
              <a href="mailto:northshorespotless@gmail.com" className="text-[#DC3545] hover:underline">
                Email us
              </a>{" "}
              — we may still serve you.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
            >
              Check Availability
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-display-sm text-[#0A1628] mb-4">See the Difference</h2>
            <p className="text-gray-500 text-lg">Results speak louder than words.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <AnimatedSection delay={0}>
              <BeforeAfterCard label="Window Washing" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <BeforeAfterCard label="Pressure Washing" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <BeforeAfterCard label="Trash Bin Cleaning" />
            </AnimatedSection>
          </div>
          <AnimatedSection className="text-center">
            <Link
              href="/contact"
              className="inline-flex bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-200"
            >
              Get These Results
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#DC3545] font-semibold text-sm uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-display-sm text-[#0A1628]">Frequently Asked Questions</h2>
          </AnimatedSection>
          <FAQAccordion items={[
            {
              question: "How long does a window wash take?",
              answer: "Most homes take 2–4 hours depending on the number of windows and whether you need interior cleaning too. I give you a time estimate at your free on-site assessment so there are no surprises.",
            },
            {
              question: "Do you use eco-friendly products?",
              answer: "Yes. I use biodegradable, eco-friendly cleaning solutions that are safe for kids, pets, and your landscaping. No harsh chemicals left behind.",
            },
            {
              question: "What if I'm not satisfied with the results?",
              answer: "If you're not 100% happy, I'll come back and re-clean the job at no charge — no questions asked. That's what the guarantee means.",
            },
            {
              question: "What's your service area?",
              answer: "I serve Glenview, Northbrook, Wilmette, Winnetka, Evanston, Deerfield, Highland Park, Lake Forest, Glencoe, Libertyville, and Vernon Hills. Not sure if I reach you? Email northshorespotless@gmail.com and I'll let you know.",
            },
            {
              question: "Can I book recurring service?",
              answer: "Absolutely. Many customers do seasonal packages (spring + fall) for window washing, or monthly and bi-monthly plans for trash bin cleaning. Just mention it at your estimate and I'll set it up.",
            },
          ]} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
