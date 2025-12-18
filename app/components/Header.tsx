"use client";

import Image from "next/image";
import { useState } from "react";
import CountdownBanner from "./CountdownBanner";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Countdown Banner */}
      <CountdownBanner />

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left: Navigation */}
          <nav className="flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Home
            </a>
          </nav>

          {/* Center: Logo */}
          <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/logo.svg"
              alt="Muvette"
              width={35}
              height={44}
              className="h-11 w-auto invert"
              priority
            />
            <span className="ml-2 text-2xl font-bold tracking-tight text-gray-900 font-heading">
              Muvette
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* User Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="User account">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

          {/* Cart Icon with Badge */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            aria-label="Shopping cart"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Menu Button */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Muvette"
              width={30}
              height={38}
              className="h-9 w-auto invert"
              priority
            />
            <span className="ml-2 text-xl font-bold tracking-tight text-gray-900 font-heading">
              Muvette
            </span>
          </div>

          {/* Cart */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors" 
            aria-label="Shopping cart"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

