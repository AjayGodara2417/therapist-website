// app/about/page.tsx or pages/about.tsx depending on your file structure
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#fdfdfb] min-h-screen px-80 font-sans text-[#444]">
      <div className="max-w-6xl m-auto flex md:py-48 flex-col md:flex-row gap-16 ">
        
        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4a4a3f] font-serif mb-6">
            About Dr. Serena Blake
          </h2>

          <div className="space-y-5 text-base md:text-lg leading-relaxed text-gray-700 font-sans">
            <p>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma.
            </p>
            <p>
              Whether you meet in her Maplewood Drive office or connect
              virtually via Zoom, Dr. Blake is committed to creating a safe,
              supportive space for you to thrive.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/therapist.jpg"
            alt="Dr. Serena Blake"
            width={600}
            height={500}
            className="rounded-md object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
