import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f7f4ed]  py-4">
      <div className="max-w-9xl mx-auto">
        <div className="relative rounded overflow-hidden">
          {/* Background Image */}
          <div className="w-full px-16 h-[590px]">
            <Image
              src="/ocean.jpg"
              alt="Ocean" className="w-full h-full object-cover"
              height={100} width={900}
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4">
              Psychological Care for
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
              Change, Insight, and Well-Being
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mb-8 font-light">
              Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
            </p>
            <button className="bg-[#a7bcb4] hover:bg-[#92aaa1] text-white text-xs sm:text-sm tracking-wide px-8 py-3 rounded-full transition">
              SCHEDULE A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
