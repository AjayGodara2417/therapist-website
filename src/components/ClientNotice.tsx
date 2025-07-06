'use client';

import { useEffect, useRef, useState } from 'react';

export default function ClientNotice() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="min-h-[250px] bg-[#f7f4ed] flex items-center justify-center px-4">
      <p
        ref={ref}
        className={`text-center text-gray-800 font-serif text-lg sm:text-xl transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Unable to accept new clients at this time.
      </p>
    </div>
  );
}
