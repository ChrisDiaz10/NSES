const badges = [
  "Licensed & Insured",
  "Student-Athlete Owned",
  "Based in Glenview",
  "Free On-Site Estimates",
  "Satisfaction Guaranteed",
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {badges.map((badge) => (
        <div
          key={badge}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full"
        >
          <svg
            className="w-4 h-4 text-green-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>{badge}</span>
        </div>
      ))}
    </div>
  );
}
