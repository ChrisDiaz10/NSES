import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Book Your Free Estimate",
    description: "Fill out our quick form or send us an email. No commitment, no obligation — just let us know what you need.",
  },
  {
    number: "02",
    title: "We Come to You",
    description: "I come to your property, walk through what needs to be done, and give you an exact price on the spot.",
  },
  {
    number: "03",
    title: "You Decide",
    description: "Zero pressure, zero obligation, zero surprises. You know the exact cost before we do anything.",
  },
  {
    number: "04",
    title: "We Get to Work",
    description: "On time, fully equipped, and focused on one thing: spotless results that speak for themselves.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-display-sm text-[#0A1628] mb-4">Getting Started Is Simple</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Four steps from first contact to spotless results.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1} className="relative text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-20 h-20 rounded-2xl bg-[#DC3545] flex items-center justify-center mb-6 shadow-lg shadow-red-200 relative z-10">
                    <span className="text-white font-black text-2xl">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
