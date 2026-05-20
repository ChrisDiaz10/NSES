import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTABanner({
  headline = "Ready for a Cleaner Home?",
  subtext = "Book your free on-site estimate today. We'll come to you, assess the job, and give you an exact price — no obligation, no surprises.",
  primaryLabel = "Book a Free Estimate",
  primaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section
      className="relative bg-[#DC3545] text-white py-20 overflow-hidden"
      style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.3) 20px,
            rgba(255,255,255,0.3) 21px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">{headline}</h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href={primaryHref}
            className="bg-white text-[#DC3545] hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg"
          >
            {primaryLabel}
          </Link>
          <div className="text-center">
            <a
              href="tel:8477785310"
              className="text-white font-bold text-2xl hover:text-red-200 transition-colors block"
              aria-label="Call us at 847-778-5310"
            >
              (847) 778-5310
            </a>
            <p className="text-red-200 text-sm mt-1">Mon–Sat, 7am–6pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
