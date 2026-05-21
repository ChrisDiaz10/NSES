interface BeforeAfterCardProps {
  label: string;
  beforeDesc?: string;
  afterDesc?: string;
}

export default function BeforeAfterCard({ label, beforeDesc = "Before", afterDesc = "After" }: BeforeAfterCardProps) {
  return (
    <div className="before-after-card relative rounded-2xl overflow-hidden h-64 shadow-md group cursor-pointer">
      {/* Before half */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2020h40M20%200v40%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="absolute bottom-4 left-4 bg-black/40 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
          {beforeDesc}
        </div>
      </div>

      {/* After half - clips from right */}
      <div
        className="divider absolute inset-y-0 right-0"
        style={{ left: "45%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4ff] via-white to-[#f0f9ff]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px,
              transparent 1px, transparent 20px
            ), repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px,
              transparent 1px, transparent 20px
            )`
          }} />
          <div className="absolute bottom-4 right-4 bg-[#DC3545]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            {afterDesc}
          </div>
        </div>
      </div>

      {/* Center divider line + icon */}
      <div
        className="divider absolute inset-y-0 flex items-center justify-center z-10"
        style={{ left: "45%", width: "2px", marginLeft: "-1px" }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 w-9 h-9 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <p className="text-white font-bold text-sm text-center">{label}</p>
      </div>
    </div>
  );
}
