'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f4ed] py-4">
      <div className="max-w-9xl mx-auto">
        <div className="relative rounded overflow-hidden" ref={heroRef}>
          {/* Background Image */}
          <div className="w-full px-4 sm:px-16 h-[590px]">
            <Image
              src="/ocean.jpg"
              alt="Ocean"
              className="w-full h-full object-cover"
              height={100}
              width={900}
            />
          </div>

          {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Discover Your Brighter Tomorrow
            </h2>
            <h1
              className={`text-4xl sm:text-5xl font-serif font-bold mb-6 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Compassionate Therapy for Growth & Healing
            </h1>
            <p
              className={`text-base sm:text-lg max-w-2xl mb-8 font-light transition-all duration-700 delay-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Begin your journey to self-discovery and resilience. Personalized support for adults, available virtually across Michigan and most U.S. states through PSYPACT.
            </p>
            <button
              className={`bg-[#a7bcb4] hover:bg-[#92aaa1] text-white text-xs sm:text-sm tracking-wide px-8 py-3 rounded-full transition duration-700 delay-600 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              START YOUR JOURNEY
            </button>
            </div>
        </div>
      </div>
    </section>
  );
}
