import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E31E24] transition-colors">
        <div className="text-[#E31E24] group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-6 flex items-center justify-between">
        <Link
          href="/contact"
          className="bg-[#E31E24] hover:bg-[#c01920] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Book a Free Estimate
        </Link>
        <Link
          href={href}
          className="text-[#47C5E8] hover:text-[#2ba8cb] text-sm font-medium flex items-center gap-1 transition-colors"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
