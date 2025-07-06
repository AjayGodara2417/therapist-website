'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function OceanBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => {
      if (quoteRef.current) observer.unobserve(quoteRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[550px]">
      {/* Background Image */}
      <Image
        src="/ocean.jpg"
        alt="Ocean waves"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="backdrop-blur-sm"
        priority
      />

      {/* Overlay and Quote */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 text-center">
        <div
          ref={quoteRef}
          className="text-white font-serif text-lg sm:text-xl md:text-2xl max-w-3xl"
        >
          <p
            className={`transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            “I have come to believe that caring for myself is not self-indulgent.
          </p>
          <p
            className={`transition-all duration-700 ease-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Caring for myself is an act of survival.”
          </p>
          <footer
            className={`mt-4 text-sm text-white/80 transition-all duration-700 ease-out delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            — Audre Lorde
          </footer>
        </div>
      </div>
    </div>
  );
}
