// app/services/page.tsx
'use client';

import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f4ec] text-gray-900 px-6 py-20 space-y-20">
      
      {/* Section 1: Therapy Intro */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-serif mb-6">
          Therapy can be a space where you invest in yourself—<br />
          <span className="text-xl">one of the highest forms of self-care.</span>
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss,
          self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of
          your stress, you don’t have to face it alone. Therapy offers you the time and space to work toward wellness
          and peace.
        </p>
        <hr className="mt-10 border-t border-gray-400" />
      </section>

      {/* Section 2: Services Cards */}
      <section className="text-center">
        <h2 className="text-2xl font-serif mb-16">Areas of Focus</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <ServiceCard
            title="Anxiety & Stress Management"
            description="The care you provide for others may be driving you to seek therapy—burnout, compassion fatigue, or people-pleasing tendencies. We can address the stressors of your environment and your life."
            imageSrc="/service1.jpg"
            alt="Healthcare professional therapy"
          />
          <ServiceCard
            title="Relationship Counseling"
            description="Life’s challenges, childhood trauma, or loss can lead to deep emotional wounds. Therapy provides a supportive space for healing and grounding."
            imageSrc="/service2.jpg"
            alt="Holding flower in hands"
          />
          <ServiceCard
            title="Trauma Recovery"
            description="Navigating cultures and expectations can be hard. Therapy provides support to explore your identity and strengthen relationships in immigrant family contexts."
            imageSrc="/service3.jpg"
            alt="Holding American flag stickers"
          />
        </div>
      </section>
    </div>
  );
}
