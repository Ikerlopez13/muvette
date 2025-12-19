"use client";

interface Review {
  id: number;
  name: string;
  rating: 5;
  date: string;
  comment: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2 days ago",
    comment: "This hair dryer is absolutely amazing! My hair has never looked better. The ionic technology really works - no frizz at all. The pink details are so cute too!",
    verified: true,
  },
  {
    id: 2,
    name: "Emma L.",
    rating: 5,
    date: "5 days ago",
    comment: "I was skeptical at first, but the Muvette Air exceeded all my expectations. It dries my thick hair in half the time compared to my old dryer. Love the diffuser attachment!",
    verified: true,
  },
  {
    id: 3,
    name: "Jessica R.",
    rating: 5,
    date: "1 week ago",
    comment: "Best purchase I've made this year! Lightweight, powerful, and gives salon-quality results. The concentrator nozzle is perfect for creating smooth, sleek styles.",
    verified: true,
  },
  {
    id: 4,
    name: "Maria G.",
    rating: 5,
    date: "1 week ago",
    comment: "Finally found a hair dryer that doesn't damage my hair! My curls look defined and bouncy with the diffuser. The multiple heat settings are perfect for my fine hair.",
    verified: true,
  },
  {
    id: 5,
    name: "Ana P.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Obsessed! This dryer is so quiet compared to others I've tried. My hair feels softer and looks shinier. The design is beautiful and it's comfortable to hold.",
    verified: true,
  },
  {
    id: 6,
    name: "Laura K.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Worth every penny! My hair stylist even asked what I was using because my blowouts at home look professional now. The pink accents match my bathroom perfectly!",
    verified: true,
  },
];

export default function Reviews() {
  return (
    <section className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Customer Reviews
        </h2>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-8 h-8 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-900">5.0</span>
          <span className="text-gray-600">
            Based on {reviews.length * 300}+ reviews
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#ffe6ef]/30 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
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
              {review.verified && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  Verified
                </span>
              )}
            </div>

            {/* Comment */}
            <p className="text-gray-700 leading-relaxed mb-4 italic">
              "{review.comment}"
            </p>

            {/* Author and Date */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="w-10 h-10 bg-[#e91e63] rounded-full flex items-center justify-center text-white font-bold">
                {review.name.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Stats */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-[#e91e63] mb-2">98%</div>
            <div className="text-sm text-gray-600">Would Recommend</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#e91e63] mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#e91e63] mb-2">1,800+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#e91e63] mb-2">95%</div>
            <div className="text-sm text-gray-600">5-Star Reviews</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 italic">
          Join thousands of satisfied customers who transformed their hair routine with Muvette Air
        </p>
      </div>
    </section>
  );
}

