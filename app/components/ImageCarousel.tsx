"use client";

import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  // Duplicamos las imágenes para crear el efecto infinito
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container */}
      <div className="flex gap-6 animate-scroll-horizontal">
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative flex-shrink-0 w-[350px] md:w-[450px] lg:w-[550px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={image}
              alt={`Muvette Air lifestyle ${(index % images.length) + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 350px, (max-width: 1024px) 450px, 550px"
              priority={index < images.length}
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 12s linear infinite;
        }

        /* Faster on mobile */
        @media (max-width: 768px) {
          .animate-scroll-horizontal {
            animation: scroll-horizontal 10s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}

