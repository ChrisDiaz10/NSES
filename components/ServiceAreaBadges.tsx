const towns = [
  "Glenview", "Evanston", "Wilmette", "Winnetka", "Glencoe",
  "Highland Park", "Lake Forest", "Northbrook", "Deerfield",
  "Libertyville", "Vernon Hills",
];

interface ServiceAreaBadgesProps {
  variant?: "dark" | "light";
}

export default function ServiceAreaBadges({ variant = "light" }: ServiceAreaBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {towns.map((town) => (
        <span
          key={town}
          className={`text-sm px-4 py-1.5 rounded-full font-medium ${
            variant === "dark"
              ? "bg-white/10 text-white border border-white/20"
              : "bg-white text-gray-600 border border-gray-200 shadow-sm"
          }`}
        >
          {town}
        </span>
      ))}
    </div>
  );
}
