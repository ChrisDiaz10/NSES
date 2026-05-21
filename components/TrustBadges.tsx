const badges = [
  { label: "Licensed & Insured", icon: "shield" },
  { label: "Free On-Site Estimates", icon: "tag" },
  { label: "Satisfaction Guaranteed", icon: "check" },
  { label: "Student-Athlete Owned", icon: "star" },
];

function Icon({ type }: { type: string }) {
  if (type === "shield") return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  if (type === "tag") return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
  if (type === "check") return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

interface TrustBadgesProps {
  variant?: "dark" | "light";
}

export default function TrustBadges({ variant = "dark" }: TrustBadgesProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium ${
            variant === "dark"
              ? "bg-white/10 backdrop-blur-sm text-white border border-white/20"
              : "bg-white text-gray-700 border border-gray-200 shadow-sm"
          }`}
        >
          <span className="text-emerald-400">
            <Icon type={badge.icon} />
          </span>
          {badge.label}
        </div>
      ))}
    </div>
  );
}
