import React from 'react';

export default function SessionFeeSection() {
  return (
    <section className="bg-[#8aa3a3] text-center py-12 px-4 text-gray-900">
      <div className="max-w-3xl mx-auto space-y-2 font-light">
        <h2 className="text-2xl sm:text-3xl font-serif">Rates & Office Hours</h2>

        <p className="text-base sm:text-lg">Session Fee - $200 / individual session</p>
        <p className="text-base sm:text-lg">$240 / couples session</p>

        <p className="text-base sm:text-lg">In-person: Tue & Thu, 10 AM–6 PM</p>
        <p className="text-base sm:text-lg">Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>

        <p className="text-base">
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
      </div>
    </section>
  );
}
