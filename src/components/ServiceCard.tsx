import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
};

export default function ServiceCard({
  title,
  description,
  imageSrc,
  alt,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col h-2xl items-center text-center max-w-md px-4">
      {/* Circle Image */}
      <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-md mb-6">
        <Image
          src={imageSrc}
          alt={alt}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#3a4a3f] text-lg md:text-xl font-serif font-medium mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#3a4a3f] text-sm md:text-base leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
}
