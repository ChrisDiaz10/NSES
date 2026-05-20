const towns = [
  "Evanston", "Wilmette", "Winnetka", "Glencoe", "Highland Park",
  "Lake Forest", "Glenview", "Northbrook", "Deerfield", "Libertyville", "Vernon Hills",
];

interface ServiceAreaBadgesProps {
  variant?: "dark" | "light";
}

export default function ServiceAreaBadges({ variant = "light" }: ServiceAreaBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {towns.map((town) => (
        <span
          key={town}
          className={`text-sm font-medium px-3 py-1.5 rounded-full border transition-colors ${
            variant === "dark"
              ? "bg-white/10 text-gray-300 border-white/20"
              : "bg-white text-[#47C5E8] border-[#47C5E8]/30 hover:border-[#47C5E8]"
          }`}
        >
          {town}
        </span>
      ))}
    </div>
  );
}
