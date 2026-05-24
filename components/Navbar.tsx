"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { name: "Window Washing", href: "/services/window-washing" },
  { name: "Pressure Washing", href: "/services/pressure-washing" },
  { name: "Trash Bin Cleaning", href: "/services/trash-bin-cleaning" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">

            <Link href="/" className="flex items-center shrink-0" aria-label="North Shore Spotless home">
              <Image
                src="/logo-horizontal.svg"
                alt="North Shore Spotless"
                width={210}
                height={56}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {[{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(href)
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive(href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#DC3545] rounded-full" />
                  )}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive("/services")
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isActive("/services") && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#DC3545] rounded-full" />
                  )}
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-[#0D1F3C] rounded-xl shadow-xl border border-white/10 py-2 overflow-hidden">
                    <Link href="/services" className="block px-4 py-2.5 text-sm text-white/50 hover:text-white hover:bg-white/5 font-medium transition-colors">
                      All Services
                    </Link>
                    <div className="h-px bg-white/10 my-1" />
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="mailto:northshorespotless@gmail.com"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                northshorespotless@gmail.com
              </a>
              <Link
                href="/contact"
                className="bg-[#DC3545] hover:bg-[#b02a37] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all"
              >
                Book Free Estimate
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-[#0A1628] shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Image src="/logo-horizontal.svg" alt="North Shore Spotless" width={170} height={44} className="h-9 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors" aria-label="Close navigation menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-5 space-y-1" aria-label="Mobile navigation">
              <Link href="/" className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${isActive("/") ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`}>
                Home
              </Link>
              <div className="pt-2">
                <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-white/30">Services</p>
                <Link href="/services" className="flex items-center px-4 py-2.5 rounded-xl text-sm text-white/50 hover:bg-white/5 hover:text-white transition-colors">
                  All Services
                </Link>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className={`flex items-center px-4 py-2.5 rounded-xl text-sm transition-colors ${isActive(s.href) ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`}>
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link href="/about" className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${isActive("/about") ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`}>
                About
              </Link>
              <Link href="/contact" className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${isActive("/contact") ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`}>
                Contact
              </Link>
            </nav>

            <div className="p-5 border-t border-white/10 space-y-3">
              <Link href="/contact" className="flex items-center justify-center w-full bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold py-4 rounded-xl transition-colors">
                Book a Free Estimate
              </Link>
              <a href="mailto:northshorespotless@gmail.com" className="flex items-center justify-center w-full text-sm text-white/50 hover:text-white transition-colors">
                northshorespotless@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
