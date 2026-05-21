import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "500+", label: "Homes Cleaned" },
  { value: "5-Star", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Guaranteed" },
  { value: "1", label: "Founder. Unlimited Standards." },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0A1628] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
