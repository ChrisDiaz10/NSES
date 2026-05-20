interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Book Your Free Estimate",
    description: "Fill out our quick form online or give us a call. We'll get back to you within 2 hours during business hours to schedule a time.",
  },
  {
    number: "02",
    title: "We Come to You",
    description: "We visit your property, take a careful look at the job, and give you an exact price on the spot — no guesswork, no hidden fees.",
  },
  {
    number: "03",
    title: "You Decide",
    description: "Zero pressure, zero obligation. You take the estimate and make the call. If you're ready to go, we can often start the same week.",
  },
  {
    number: "04",
    title: "We Get to Work",
    description: "We show up on time, do the job right, and leave your property spotless. We don't leave until you're satisfied.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Getting Started Is Simple</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            Four easy steps from first contact to a spotless property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-0 h-px bg-gray-300"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center md:items-start md:text-left lg:items-center lg:text-center">
                <div className="w-14 h-14 rounded-full bg-[#E31E24] flex items-center justify-center mb-5 z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
