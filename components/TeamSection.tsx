const teamMembers = [
  { role: "Co-Founder" },
  { role: "Co-Founder" },
  { role: "Operations Lead" },
  { role: "Team Member" },
  { role: "Team Member" },
  { role: "Team Member" },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">The Team</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            A tight-knit group of Glenbrook South football athletes who take as much pride in their work as they do in representing their school and community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-200 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 mb-3">
                <svg className="w-10 h-10 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gray-400 text-xs text-center px-2">Photo coming soon</span>
              </div>
              <p className="text-xs font-medium text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
