// components/OceanBanner.tsx
import Image from "next/image";

export default function OceanBanner() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/ocean.jpg"
        alt="Ocean waves"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="backdrop-blur-sm"
        priority
      />
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center px-4 text-center">
        <blockquote className="text-white text-lg sm:text-xl md:text-2xl font-serif max-w-3xl">
          “I have come to believe that caring for myself is not self-indulgent. <br />
          Caring for myself is an act of survival.”
          <footer className="mt-4 text-sm text-white/80">— Audre Lorde</footer>
        </blockquote>
      </div>
    </div>
  );
}
