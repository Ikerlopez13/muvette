"use client";

interface Review {
  id: number;
  name: string;
  rating: 5;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "This hair dryer is amazing! My hair has never looked better. No frizz at all.",
  },
  {
    id: 2,
    name: "Maricarmen",
    rating: 5,
    comment: "Me deja el pelo genial, lo recomiendo 100%. Súper contenta con la compra!",
  },
  {
    id: 3,
    name: "Jessica R.",
    rating: 5,
    comment: "Best purchase this year! Lightweight, powerful, and gives salon-quality results.",
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
            className="bg-[#ffe6ef]/20 rounded-lg p-4"
          >
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
        ))}
      </div>
    </section>
  );
}

