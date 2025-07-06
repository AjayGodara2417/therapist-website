"use client"; // Add this if you're using App Router (Next.js 13+)

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger & Close icons from Heroicons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f7f4ed] border-b border-transparent px-6 py-4 sm:px-16 sm:pt-16">
      <div className="flex items-center justify-between">
        {/* Title */}
        <div className="leading-tight">
          <h1 className="text-sm sm:text-base text-[#3a4a3f] font-serif font-medium">
            Dr. Serena Blake, PsyD.
          </h1>
          <p className="text-xs sm:text-sm text-[#6d7c6e] font-serif">
            Clinical Psychologist
          </p>
        </div>

        {/* Hamburger / Close */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-[#3a4a3f] focus:outline-none"
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 h-screen md:hidden space-y-3 text-[#3a4a3f] font-sans text-sm">
          {/* <a href="/" className="block">Home</a>
          <a href="/about" className="block">About</a>
          <a href="/services" className="block">Services</a>
          <a href="/contact" className="block">Contact</a> */}
        </div>
      )}
    </header>
  );
}
