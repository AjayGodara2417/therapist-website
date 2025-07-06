'use client';

import { useEffect, useRef, useState } from 'react';

export default function SessionFeeSection() {
  const lines = [
    'Rates & Office Hours',
    'Session Fee - $200 / individual session',
    '$240 / couples session',
    'In-person: Tue & Thu, 10 AM–6 PM',
    'Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM',
    `For out-of-network plans, I’ve partnered with Mentaya using this tool to help you check your eligibility for reimbursement for my services.`,
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setVisibleLines((prev) => {
              if (prev >= lines.length - 1) {
                clearInterval(interval);
              }
              return prev + 1;
            });
          }, 250);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#8aa3a3] text-center py-12 px-4 text-gray-900">
      <div ref={containerRef} className="max-w-3xl mx-auto space-y-4 font-light transition-all">
        {lines.map((line, index) => {
          // Custom render for header and link
          if (index === 0) {
            return (
              <h2
                key={index}
                className={`text-2xl sm:text-3xl font-serif transition-all duration-500 ease-out ${
                  visibleLines >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {line}
              </h2>
            );
          }

          if (index === 5) {
            return (
              <p
                key={index}
                className={`text-base sm:text-lg transition-all duration-500 ease-out ${
                  visibleLines >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                For out-of-network plans, I’ve partnered with Mentaya using{' '}
                <a
                  href="https://www.mentaya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-900 hover:text-blue-700"
                >
                  this tool
                </a>{' '}
                to help you check your eligibility for reimbursement for my services.
              </p>
            );
          }

          // Default paragraph
          return (
            <p
              key={index}
              className={`text-base sm:text-lg transition-all duration-500 ease-out ${
                visibleLines >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {line}
            </p>
          );
        })}
      </div>
    </section>
  );
}
