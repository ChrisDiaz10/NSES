"use client";

import Link from "next/link";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-white/90 to-transparent">
      <Link
        href="/contact"
        className="animate-float-in flex items-center justify-center w-full bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold text-base py-4 rounded-xl shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
        aria-label="Book a free estimate"
      >
        Book a Free Estimate
      </Link>
    </div>
  );
}
