import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready for a Spotless Home?",
  subtext = "Book your free on-site estimate today. I'll come to your property, assess the job, and give you an exact price — no obligation, no pressure, no surprises.",
}: CTABannerProps) {
  return (
    <section
      className="relative bg-[#DC3545] text-white py-24 overflow-hidden"
      style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.4) 20px,
            rgba(255,255,255,0.4) 21px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">{headline}</h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center bg-white text-[#DC3545] hover:bg-gray-100 font-bold px-12 py-4 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105"
        >
          Book a Free Estimate
        </Link>

        <p className="mt-6 text-red-200 text-sm">
          <a href="mailto:northshorespotless@gmail.com" className="hover:text-white transition-colors underline">
            northshorespotless@gmail.com
          </a>
          {" "}· Typically responds within 2 hours
        </p>
      </div>
    </section>
  );
}
