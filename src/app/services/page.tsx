'use client';

import { useEffect, useRef, useState } from 'react';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const [introVisible, setIntroVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === introRef.current && entry.isIntersecting) {
            setIntroVisible(true);
          }
          if (entry.target === servicesRef.current && entry.isIntersecting) {
            setServicesVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const introNode = introRef.current;
    const servicesNode = servicesRef.current;

    if (introNode) observer.observe(introNode);
    if (servicesNode) observer.observe(servicesNode);

    return () => {
      if (introNode) observer.unobserve(introNode);
      if (servicesNode) observer.unobserve(servicesNode);
    };
  }, []);

  return (
    <div className="bg-[#f7f4ec] text-gray-900 px-6 py-20 space-y-20">

      {/* Section 1: Therapy Intro */}
      <section ref={introRef} className="max-w-4xl mx-auto text-center space-y-6">
        <h2
          className={`text-2xl sm:text-3xl font-serif transition-all duration-700 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Discover a path to healing, growth, and self-discovery.
        </h2>
        <p
          className={`text-xl transition-all duration-700 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Therapy is a courageous step toward understanding yourself and embracing positive change.
        </p>
        <p
          className={`text-sm text-gray-700 leading-relaxed transition-all duration-700 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Whether you’re navigating anxiety, working through past experiences, or seeking deeper connections, you deserve support that honors your unique journey. Together, we’ll create a safe, compassionate space where your voice is heard and your goals matter. Let’s work side by side to foster resilience, clarity, and a renewed sense of well-being.
        </p>
        <hr className="mt-10 border-t border-gray-400" />
      </section>

      {/* Section 2: Services Cards */}
      <section
        ref={servicesRef}
        className={`text-center transition-all duration-1000 ease-out ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl font-serif mb-16">Areas of Focus</h2>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-stretch gap-10">
          {[
            {
              title: 'Anxiety & Stress Management',
              description:
                'Learn to manage overwhelming thoughts, reduce stress, and develop healthy coping strategies. Therapy can help you understand anxiety triggers and build resilience for a calmer, more balanced life.',
              imageSrc: '/service1.jpg',
              alt: 'Healthcare professional therapy',
            },
            {
              title: 'Relationship Counseling',
              description:
                'Improve communication, resolve conflicts, and strengthen your connections. Whether you’re facing challenges with a partner, family, or friends, therapy offers a safe space to foster healthier relationships.',
              imageSrc: '/service2.jpg',
              alt: 'Holding flower in hands',
            },
            {
              title: 'Trauma Recovery',
              description:
                'Heal from past experiences and regain a sense of safety and control. Therapy supports you in processing trauma, building self-compassion, and moving forward with renewed confidence.',
              imageSrc: '/service3.jpg',
              alt: 'Holding American flag stickers',
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-out ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
