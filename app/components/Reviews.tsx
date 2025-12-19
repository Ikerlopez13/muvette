"use client";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  rating: 5;
  comment: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "This hair dryer is amazing! My hair has never looked better. No frizz at all.",
    image: "/A8a700f6281774c2d9279198ca2817c17v.jpg_960x960q75.jpg_.avif",
  },
  {
    id: 2,
    name: "Jessica R.",
    rating: 5,
    comment: "Best purchase this year! Lightweight, powerful, and gives salon-quality results.",
    image: "/Aeb6eb15bfc0e494284faa260cea1ee0cB.jpg_960x960q75.jpg_.avif",
  },
  {
    id: 3,
    name: "Maricarmen",
    rating: 5,
    comment: "Me deja el pelo genial, lo recomiendo 100%. Súper contenta con la compra!",
    image: "/A0fce3c2eb89d49499912ac24c01c0421f.jpg_960x960q75.jpg_.avif",
  },
];

export default function Reviews() {
  return (
    <section className="my-12 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
        What Our Customers Say
      </h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#ffe6ef]/20 rounded-lg overflow-hidden"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={review.image}
                alt={review.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-3 italic">
                "{review.comment}"
              </p>
              <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

