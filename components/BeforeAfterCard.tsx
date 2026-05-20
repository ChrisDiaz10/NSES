interface BeforeAfterCardProps {
  label: string;
}

export default function BeforeAfterCard({ label }: BeforeAfterCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      {/* Before/After visual */}
      <div className="relative h-52 flex">
        {/* Before side */}
        <div className="w-1/2 bg-gray-500 flex items-center justify-center relative">
          <span className="absolute top-3 left-3 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded">
            BEFORE
          </span>
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Divider */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white z-10 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* After side */}
        <div className="w-1/2 flex items-center justify-center relative">
          <span className="absolute top-3 right-3 text-xs font-bold text-[#1A1A1A] bg-white/80 px-2 py-1 rounded z-20">
            AFTER
          </span>
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f3f4f6 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Label */}
      <div className="bg-white px-5 py-4 border-t border-gray-100">
        <p className="font-bold text-[#1A1A1A] text-sm text-center">{label}</p>
      </div>
    </div>
  );
}
