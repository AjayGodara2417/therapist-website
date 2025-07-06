'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactTime: '',
    contactMethod: '',
  });

  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-[#f7f4ec] py-16 px-4">
      <div
        ref={formRef}
        className={`max-w-3xl mx-auto border rounded-2xl p-8 shadow-xl border-gray-200 bg-white transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-green-900 text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-sm text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed">
          Simply fill out the brief form below and Dr. Serena Blake will be in touch shortly.
          This form is confidential, secure, and free of charge.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Jane Doe' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com' },
            { label: 'Phone', name: 'phone', type: 'tel', placeholder: '(555) 234-5678' },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-800">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-800">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">Preferred Contact Time</label>
            <input
              type="text"
              name="contactTime"
              placeholder="e.g., Mornings, Afternoons, Weekends"
              value={formData.contactTime}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Suggest a time when you’re available for a consultation.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-green-300 focus:outline-none"
            >
              <option value="">Choose an option</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
              <option value="Text">Text</option>
            </select>
          </div>

          <div className="border rounded px-3 py-3 bg-gray-50 text-center text-sm text-gray-600">
            I'm not a robot [Insert reCAPTCHA]
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition"
          >
            Submit Request
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            ⓘ By submitting this form, you consent to receive email or text communication from Dr. Blake.
          </p>
        </form>
      </div>
    </section>
  );
}
