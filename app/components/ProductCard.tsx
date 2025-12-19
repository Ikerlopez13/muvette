"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { trackAddToCart } from "../utils/metaPixel";

interface ProductCardProps {
  id: string;
  name: string;
  images: string[]; // Changed from image to images array
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
  benefits: string[];
  bundles?: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
  }[];
}

export default function ProductCard({
  id,
  name,
  images,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  benefits,
  bundles,
}: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState<1 | 2>(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const quantityOptions = [
    {
      quantity: 1,
      name: "1 Unit",
      price: 54.99,
      originalPrice: 199.99,
      savings: 72,
    },
    {
      quantity: 2,
      name: "2 Units",
      price: 89.99,
      originalPrice: 399.98,
      savings: 77,
      popular: true,
    },
  ];

  const selectedOption = quantityOptions.find(opt => opt.quantity === selectedQuantity)!;

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Add items based on selected quantity
    if (selectedQuantity === 1) {
      addItem({
        id: `${id}-single`,
        name: `${name} (1 Unit)`,
        price: 54.99,
        image: images[0],
        quantity: 1,
      });
      // Track Meta Pixel event
      trackAddToCart(`${name} (1 Unit)`, 54.99);
    } else {
      addItem({
        id: `${id}-double`,
        name: `${name} (2 Units Pack)`,
        price: 89.99,
        image: images[0],
        quantity: 1,
      });
      // Track Meta Pixel event
      trackAddToCart(`${name} (2 Units Pack)`, 89.99);
    }
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNextImage();
    }
    if (isRightSwipe) {
      goToPrevImage();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Responsive Layout: Vertical en móvil, Horizontal en desktop */}
      <div className="flex flex-col lg:flex-row">
        {/* Product Image Carousel - Left side on desktop */}
        <div 
          className="relative w-full lg:w-1/2 bg-primary flex items-center justify-center min-h-[300px] lg:min-h-[400px] group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image */}
          <Image
            src={images[currentImageIndex]}
            alt={`${name} - image ${currentImageIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-200 ease-in-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={currentImageIndex === 0}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImageIndex
                      ? "bg-accent w-8 h-2"
                      : "bg-white/60 hover:bg-white/80 w-2 h-2"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details - Right side on desktop */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
          {/* Product Name */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
            {name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300 fill-current"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm font-medium">
              Rated {rating} ({reviews.toLocaleString('en-US')})
            </span>
            <span className="bg-accent text-white px-3 py-1 rounded text-xs font-bold">
              Happy Customers
            </span>
          </div>

          {/* Price - Dynamic based on selection */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl text-gray-400 line-through">
              €{selectedOption.originalPrice.toFixed(2)}
            </span>
            <span className="text-4xl font-bold text-gray-900">
              €{selectedOption.price.toFixed(2)}
            </span>
          </div>

          {/* Badges/Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              #1 Best-Selling Hair Dryer
            </span>
          </div>

          {/* Stock Alert */}
          <div className="bg-primary border border-primary-dark rounded-lg p-3 mb-6">
            <p className="text-accent font-medium text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Stocks are running out!
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Select Quantity:</h3>
            <div className="space-y-3">
              {quantityOptions.map((option) => (
                <label
                  key={option.quantity}
                  className={`relative flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedQuantity === option.quantity
                      ? "border-accent bg-primary"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="quantity"
                      checked={selectedQuantity === option.quantity}
                      onChange={() => setSelectedQuantity(option.quantity as 1 | 2)}
                      className="w-5 h-5 accent-accent"
                    />
                    <div>
                      <div className="font-bold text-gray-900 flex items-center gap-2">
                        {option.name}
                        {option.popular && (
                          <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-bold">
                            BEST VALUE
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        Save {option.savings}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-xl">
                      €{option.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      €{option.originalPrice.toFixed(2)}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-lg mb-6 ${
              isAdding ? "bg-green-600 hover:bg-green-600" : ""
            }`}
          >
            {isAdding ? (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to cart
              </>
            )}
          </button>

          {/* Free Gifts Banner */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-center font-bold text-gray-900 mb-6 text-sm uppercase tracking-wide">
              FREE GIFTS WITH YOUR FIRST ORDER
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Gift 1: Diffuser */}
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center relative">
                <div className="absolute -top-3 bg-gray-700 text-white px-3 py-1 rounded text-xs font-bold">
                  FREE €10
                </div>
                <div className="my-4">
                  <svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" opacity="0.3"/>
                    <circle cx="12" cy="6" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="18" r="1.5"/>
                    <circle cx="6" cy="9" r="1.5"/>
                    <circle cx="18" cy="9" r="1.5"/>
                    <circle cx="6" cy="15" r="1.5"/>
                    <circle cx="18" cy="15" r="1.5"/>
                  </svg>
                </div>
                <p className="text-center text-xs font-semibold text-gray-700 uppercase">
                  Diffuser
                </p>
              </div>

              {/* Gift 2: Concentrator Nozzle */}
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center relative">
                <div className="absolute -top-3 bg-gray-700 text-white px-3 py-1 rounded text-xs font-bold">
                  FREE €6
                </div>
                <div className="my-4">
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-center text-xs font-semibold text-gray-700 uppercase">
                  Concentrator
                </p>
              </div>

              {/* Gift 3: Styling Diffuser */}
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center relative">
                <div className="absolute -top-3 bg-gray-700 text-white px-3 py-1 rounded text-xs font-bold">
                  FREE €19
                </div>
                <div className="my-4">
                  <svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="8" cy="8" r="1.5"/>
                    <circle cx="16" cy="8" r="1.5"/>
                    <circle cx="8" cy="16" r="1.5"/>
                    <circle cx="16" cy="16" r="1.5"/>
                    <circle cx="12" cy="4" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="20" r="1.5"/>
                    <circle cx="4" cy="12" r="1.5"/>
                    <circle cx="20" cy="12" r="1.5"/>
                  </svg>
                </div>
                <p className="text-center text-xs font-semibold text-gray-700 uppercase">
                  Pro Diffuser
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Key Features:</h3>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

