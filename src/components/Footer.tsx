'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const lines = [
    <p className="text-lg font-serif" key="title">
      Dr. Serena Blake, PsyD Clinical Psychologist
    </p>,
    <p key="email">
      <a href="mailto:serena@blakepsychology.com" className="underline hover:text-blue-600">
        serena@blakepsychology.com
      </a>
    </p>,
    <p key="phone">
      Phone: <a href="tel:3235550192" className="underline hover:text-blue-600">(323) 555-0192</a>
    </p>,
    <p key="address">1287 Maplewood Drive, Los Angeles, CA 90026</p>,
    <div key="links" className="space-x-4">
      <Link href="/" className="underline hover:text-blue-600">Home</Link>
      <Link href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</Link>
      <Link href="/good-faith-estimate" className="underline hover:text-blue-600">Good Faith Estimate</Link>
    </div>,
    <div key="portal" className="mt-16">
      <Link href="/client-portal" className="underline hover:text-blue-600">
        Client Portal
      </Link>
    </div>,
    <p className="text-xs text-gray-600 mt-16" key="copyright">
      © {new Date().getFullYear()} Dr. Serena Blake, PsyD (Clinical Psychologist), PLLC. All rights reserved.
    </p>,
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            setVisibleLines((prev) => {
              if (prev >= lines.length - 1) {
                clearInterval(timer);
              }
              return prev + 1;
            });
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#f9f6ef] h-96 text-center py-10 text-sm text-gray-800">
      <div className="space-y-3">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-out ${
              visibleLines >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </footer>
  );
}
