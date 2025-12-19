"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer:
      "All orders are processed within 24 hours. Standard shipping takes a maximum of 10 business days to arrive at your door.",
  },
  {
    question: "What's included in the box?",
    answer:
      "The Muvette Air package includes: the hair dryer, concentrator nozzle, diffuser attachment, styling comb, and user manual.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Returns are only accepted if the product arrives damaged or if the order does not reach its destination. Please read our refund terms and conditions for complete details.",
  },
  {
    question: "What if my product arrives damaged?",
    answer:
      "If your Muvette Air arrives damaged, you must send a video showing the damage to +34 675 977 794 via WhatsApp. Our team will review it and process your refund or replacement accordingly.",
  },
  {
    question: "What if my order doesn't arrive?",
    answer:
      "If your order does not reach its destination within the expected timeframe, please contact us at +34 675 977 794. We will investigate and resolve the issue.",
  },
  {
    question: "Is it suitable for all hair types?",
    answer:
      "Yes! The Muvette Air features 3 heat settings and 2 speed settings, making it perfect for all hair types - from fine and delicate to thick and curly. The included attachments provide versatility for any styling need.",
  },
  {
    question: "What voltage does it use?",
    answer:
      "The Muvette Air operates on 220-240V, making it compatible with European outlets. A travel adapter may be required for use in other countries.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package in real-time. Check your spam folder if you don't see the email within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: "1",
      name: "Muvette Air",
      price: 59.99,
      image: "/Gemini_Generated_Image_h7u7lzh7u7lzh7u7 (1).png",
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <section className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about Muvette Air
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-accent transition-colors"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-primary/20 transition-colors"
            >
              <span className="font-bold text-lg pr-8">{faq.question}</span>
              <svg
                className={`w-6 h-6 flex-shrink-0 text-accent transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add to Cart CTA */}
      <div className="mt-12 text-center p-8 bg-primary/30 rounded-xl">
        <h3 className="font-bold text-2xl mb-3">Ready to Transform Your Hair Routine?</h3>
        <p className="text-gray-700 mb-6 text-lg">
          Get your Muvette Air with all accessories included
        </p>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg transition-all font-bold text-lg ${
            isAdding ? "bg-green-600 hover:bg-green-600" : "bg-accent hover:bg-accent/90"
          }`}
        >
          {isAdding ? (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added to Cart!
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Add Muvette Air to Cart - €54.99
            </>
          )}
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Maximum 7 days delivery · Read our{" "}
          <a href="/terms" className="text-accent font-medium underline">
            terms & conditions
          </a>
        </p>
      </div>
    </section>
  );
}

