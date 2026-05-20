import Link from "next/link";
import Image from "next/image";

const serviceAreaTowns = [
  "Evanston", "Wilmette", "Winnetka", "Glencoe", "Highland Park",
  "Lake Forest", "Glenview", "Northbrook", "Deerfield", "Libertyville", "Vernon Hills",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t-4 border-[#DC3545]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="North Shore Exterior Services"
              width={160}
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Built by Titans. Trusted by the North Shore.
            </p>
            <p className="text-gray-500 text-xs">
              Professional exterior cleaning by student-athletes from Glenbrook South High School.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/window-washing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Window Washing
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="/services/trash-bin-cleaning" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Trash Bin Cleaning
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Book a Free Estimate
                </Link>
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
              <a href="tel:8477785310" className="text-[#DC3545] hover:underline">
                Call us
              </a>{" "}
              — we may still serve you.
            </p>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <a
                  href="tel:8477785310"
                  className="text-[#DC3545] font-bold text-xl hover:text-red-400 transition-colors"
                  aria-label="Call us at 847-778-5310"
                >
                  (847) 778-5310
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-gray-300">Hours</p>
                <p>Monday – Saturday</p>
                <p>7:00am – 6:00pm</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-gray-300">Based in</p>
                <p>Glenview, IL</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#DC3545] hover:bg-[#b02a37] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors mt-2"
              >
                Book a Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 North Shore Exterior Services. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Glenview, IL · Serving the entire North Shore
          </p>
        </div>
      </div>
    </footer>
  );
}
