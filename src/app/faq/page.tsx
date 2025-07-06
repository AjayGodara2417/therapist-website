'use client'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const faqRef = useRef<HTMLDivElement>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (faqRef.current) observer.observe(faqRef.current)
    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current)
    }
  }, [])

  return (
    <section className="bg-[#f7f4ed] py-16 px-4 text-[#3b5a66]">
      <div
        ref={faqRef}
        className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">
          Frequently Asked Questions
        </h2>
        <h3 className="text-lg font-medium mb-6 text-left">Therapy</h3>
        <div className="divide-y divide-[#bfd3d4]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-4 cursor-pointer transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-base font-light hover:underline transition">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-[#3b5a66]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#3b5a66]" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm font-light text-[#4b6c72]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
