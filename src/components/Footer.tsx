import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f9f6ef] h-96 text-center py-10 text-sm text-gray-800">
      <div className="space-y-3">
        <p className="text-lg font-serif">
          Dr. Serena Blake, PsyD Clinical Psychologist
        </p>

        <p>
          <a href="mailto:serena@blakepsychology.com" className="underline hover:text-blue-600">
            serena@blakepsychology.com
          </a>
        </p>

        <p>
          Phone: <a href="tel:3235550192" className="underline hover:text-blue-600">(323) 555-0192</a>
        </p>

        <p>
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>

        <div className="space-x-4">
          <Link href="/" className="underline hover:text-blue-600">Home</Link>
          <Link href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</Link>
          <Link href="/good-faith-estimate" className="underline hover:text-blue-600">Good Faith Estimate</Link>
        </div>

        <div className="mt-16">
          <Link href="/client-portal" className="underline  hover:text-blue-600">
            Client Portal
          </Link>
        </div>

        <p className="text-xs text-gray-600 mt-16">
          © {new Date().getFullYear()} Dr. Serena Blake, PsyD (Clinical Psychologist), PLLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
