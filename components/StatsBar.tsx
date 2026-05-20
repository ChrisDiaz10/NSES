const stats = [
  { value: "500+", label: "Homes Cleaned" },
  { value: "5-Star", label: "Average Rating" },
  { value: "100%", label: "Student-Athlete Owned & Operated" },
  { value: "Guaranteed", label: "Satisfaction on Every Job" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0A1628] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[#DC3545] font-bold text-3xl md:text-4xl mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
