"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, bullets, href, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 rounded-t-2xl group-hover:bg-[#DC3545] transition-colors duration-300" />

      <div className="w-14 h-14 rounded-2xl bg-red-50 group-hover:bg-[#DC3545] flex items-center justify-center text-[#DC3545] group-hover:text-white transition-all duration-300 mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#0A1628] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2 mb-8 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4 text-[#DC3545] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="flex-1 text-center bg-[#DC3545] hover:bg-[#b02a37] text-white font-semibold text-sm py-3 rounded-xl transition-colors"
        >
          Book Free Estimate
        </Link>
        <Link
          href={href}
          className="text-sm font-medium text-gray-500 hover:text-[#0A1628] transition-colors whitespace-nowrap"
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
}
