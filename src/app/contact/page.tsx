'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactTime: '',
    contactMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process submission (API call, validation, etc.)
    console.log(formData);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto border rounded-lg p-6 shadow-md border-gray-300">
        <h2 className="text-xl font-semibold text-center text-green-900 mb-2">Get In Touch</h2>
        <p className="text-center text-sm text-gray-700 mb-6">
          Simply fill out the brief fields below and Dr. Norman will be in touch with you soon,
          usually within one business day. This form is safe, private, and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-800">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 234-5678"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-800">Message</label>
            <textarea
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-800">Preferred Contact Time</label>
            <input
              type="text"
              name="contactTime"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              value={formData.contactTime}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <p className="text-xs text-gray-600 mt-1">Let us know when you're typically available for a call or consultation</p>
          </div>

          <div>
            <label className="text-sm text-gray-800">Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">Select preferred method</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
              <option value="Text">Text</option>
            </select>
          </div>

          {/* CAPTCHA placeholder */}
          <div className="border rounded px-3 py-2 bg-gray-50 text-center text-sm text-gray-600">
            I'm not a robot [Insert reCAPTCHA Here]
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 px-4 rounded hover:bg-green-800 transition"
          >
            Submit
          </button>

          <p className="text-xs text-gray-600 mt-2">
            ⓘ By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
          </p>
        </form>
      </div>
    </section>
  );
}
