"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../components/Header";

export default function CheckoutPage() {
  const { items, getTotal } = useCart();
  const router = useRouter();

  const shipping = 5.99;
  const total = getTotal() + shipping;

  // Calculate total quantity in cart
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  // Stripe payment links based on quantity
  const stripeLinks = {
    1: "https://buy.stripe.com/9B66oI4Hd9IxcgSdGiaR20f",
    2: "https://buy.stripe.com/28E3cw5Lh4oddkWcCeaR20e",
  };

  const handleCheckout = () => {
    const link = stripeLinks[totalQuantity as keyof typeof stripeLinks];
    if (link) {
      window.location.href = link;
    } else {
      alert("Invalid quantity. Please contact support.");
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Add some products before checking out
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Order Summary</h1>

        <div className="bg-white rounded-xl p-8 shadow-md">
          {/* Order Items */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Items</h2>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-6 border-b last:border-b-0"
              >
                <div className="relative w-24 h-24 bg-primary rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1">Quantity: {item.quantity}</p>
                  <p className="font-bold text-accent text-xl mt-2">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Breakdown */}
          <div className="border-t pt-6 space-y-3">
            <div className="flex justify-between text-lg">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-medium">€{getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-gray-700">Shipping:</span>
              <span className="font-medium">€{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-bold border-t pt-3">
              <span>Total:</span>
              <span className="text-accent">€{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-8 space-y-4">
            <button
              onClick={handleCheckout}
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-lg transition-colors text-lg"
            >
              Proceed to Payment
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-lg transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Muvette. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

