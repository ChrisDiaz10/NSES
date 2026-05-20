export default function StoryHook() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Pullquote */}
          <div className="border-l-4 border-[#DC3545] pl-8">
            <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-tight">
              &ldquo;We built this on the same principles we learned on the football field — show up, work hard, and never cut corners.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-px bg-[#DC3545]" aria-hidden="true" />
              <p className="text-[#DC3545] font-semibold text-sm">North Shore Exterior Services</p>
            </div>
          </div>

          {/* Right: Story copy */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              North Shore Exterior Services isn&apos;t your average cleaning company. We&apos;re a team of student-athletes from Glenbrook South High School who started this business to serve our own community. Every job we take, we treat like game day — fully prepared, locked in, and focused on delivering results.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-5">
              From Wilmette to Lake Forest, from Evanston to Deerfield, we&apos;re the crew your neighbors are calling. Not because we run the most ads — because we show up and do the work right, every single time.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center text-[#1B9BD1] font-semibold hover:text-[#1577a8] transition-colors gap-1"
              >
                Our full story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
