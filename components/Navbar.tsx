"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const services = [
  { name: "Window Washing", href: "/services/window-washing" },
  { name: "Pressure Washing", href: "/services/pressure-washing" },
  { name: "Trash Bin Cleaning", href: "/services/trash-bin-cleaning" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="North Shore Exterior Services"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.name === "Services" ? (
                  <div
                    key="services"
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                        scrolled ? "text-[#1A1A1A]" : "text-white"
                      } ${pathname.startsWith("/services") ? "text-[#E31E24]" : "hover:text-[#E31E24]"}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E31E24] font-medium"
                        >
                          All Services
                        </Link>
                        <div className="h-px bg-gray-100 mx-3 my-1" />
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#E31E24] ${
                              pathname === s.href ? "text-[#E31E24] font-medium" : "text-gray-700"
                            }`}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium text-sm transition-colors ${
                      scrolled ? "text-[#1A1A1A]" : "text-white"
                    } ${pathname === link.href ? "text-[#E31E24]" : "hover:text-[#E31E24]"}`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              <a
                href="tel:8477785310"
                className="ml-4 bg-[#E31E24] hover:bg-[#c01920] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                aria-label="Call North Shore Exterior Services at 847-778-5310"
              >
                (847) 778-5310
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1A1A1A]" : "text-white"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Image
                src="/logo.png"
                alt="North Shore Exterior Services"
                width={140}
                height={42}
                className="h-9 w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              <Link
                href="/"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === "/" ? "bg-red-50 text-[#E31E24]" : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              <div>
                <Link
                  href="/services"
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === "/services" ? "bg-red-50 text-[#E31E24]" : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  Services
                </Link>
                <div className="ml-4 mt-1 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        pathname === s.href ? "bg-red-50 text-[#E31E24]" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === "/about" ? "bg-red-50 text-[#E31E24]" : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === "/contact" ? "bg-red-50 text-[#E31E24]" : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="p-5 border-t border-gray-100 space-y-3">
              <a
                href="tel:8477785310"
                className="flex items-center justify-center gap-2 w-full bg-[#E31E24] hover:bg-[#c01920] text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (847) 778-5310
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full border-2 border-[#E31E24] text-[#E31E24] font-semibold py-3.5 rounded-xl hover:bg-red-50 transition-colors"
              >
                Book a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
