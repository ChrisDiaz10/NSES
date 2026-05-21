import Link from "next/link";
import Image from "next/image";

const serviceAreaTowns = [
  "Glenview", "Evanston", "Wilmette", "Winnetka", "Glencoe",
  "Highland Park", "Lake Forest", "Northbrook", "Deerfield",
  "Libertyville", "Vernon Hills",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white border-t-4 border-[#DC3545]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + Tagline */}
          <div>
            <Image
              src="/logo-stacked.png"
              alt="North Shore Spotless"
              width={140}
              height={100}
              className="h-20 w-auto mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-3 italic">
              "The Standard Is Spotless."
            </p>
            <a
              href="mailto:northshorespotless@gmail.com"
              className="text-[#1B9BD1] hover:text-white text-sm transition-colors"
            >
              northshorespotless@gmail.com
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">All Services</Link>
              </li>
              <li>
                <Link href="/services/window-washing" className="text-gray-400 hover:text-white text-sm transition-colors">Window Washing</Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="text-gray-400 hover:text-white text-sm transition-colors">Pressure Washing</Link>
              </li>
              <li>
                <Link href="/services/trash-bin-cleaning" className="text-gray-400 hover:text-white text-sm transition-colors">Trash Bin Cleaning</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Book a Free Estimate</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Area */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Service Area</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreaTowns.map((town) => (
                <span
                  key={town}
                  className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-full"
                >
                  {town}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Don&apos;t see your town?{" "}
              <a href="mailto:northshorespotless@gmail.com" className="text-[#DC3545] hover:underline">
                Email us
              </a>{" "}
              — we may still serve you.
            </p>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
              </li>
            </ul>
            <div className="text-gray-400 text-sm space-y-1">
              <p className="font-medium text-gray-300">Hours</p>
              <p>Monday – Saturday</p>
              <p>7:00am – 6:00pm</p>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              <p className="font-medium text-gray-300">Based in</p>
              <p>Glenview, IL</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 North Shore Spotless. All rights reserved. Founded by Christopher Diaz.
          </p>
          <p className="text-gray-600 text-xs">
            Glenview, IL · The Standard Is Spotless.
          </p>
        </div>
      </div>
    </footer>
  );
}
