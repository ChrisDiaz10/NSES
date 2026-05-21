import AnimatedSection from "./AnimatedSection";

interface ReviewCardProps {
  name: string;
  location: string;
  service: string;
  quote: string;
  delay?: number;
}

export default function ReviewCard({ name, location, service, quote, delay = 0 }: ReviewCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="flex items-center gap-0.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="relative mb-5 flex-1">
          <span className="absolute -top-2 -left-1 text-5xl text-[#DC3545]/20 font-serif leading-none" aria-hidden="true">&ldquo;</span>
          <blockquote className="text-gray-700 leading-relaxed text-sm relative z-10 pt-4">
            {quote}
          </blockquote>
        </div>

        <div className="border-t border-gray-100 pt-5">
          <p className="font-bold text-[#0A1628] text-sm">{name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{location} · {service}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
