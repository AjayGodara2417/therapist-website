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
          Therapy can be a space where you invest in yourself—
        </h2>
        <p
          className={`text-xl transition-all duration-700 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          one of the highest forms of self-care.
        </p>
        <p
          className={`text-sm text-gray-700 leading-relaxed transition-all duration-700 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss,
          self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of
          your stress, you don’t have to face it alone. Therapy offers you the time and space to work toward wellness
          and peace.
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
                'The care you provide for others may be driving you to seek therapy—burnout, compassion fatigue, or people-pleasing tendencies. We can address the stressors of your environment and your life.',
              imageSrc: '/service1.jpg',
              alt: 'Healthcare professional therapy',
            },
            {
              title: 'Relationship Counseling',
              description:
                'Life’s challenges, childhood trauma, or loss can lead to deep emotional wounds. Therapy provides a supportive space for healing and grounding.',
              imageSrc: '/service2.jpg',
              alt: 'Holding flower in hands',
            },
            {
              title: 'Trauma Recovery',
              description:
                'Navigating cultures and expectations can be hard. Therapy provides support to explore your identity and strengthen relationships in immigrant family contexts.',
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
