"use client"; // Add this at the very top

import React, { useState } from "react";
import Link from "next/link"; // Use Next.js Link
import { usePathname } from "next/navigation"; // Next.js equivalent of useLocation

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path for active states

  return (
    <nav className="bg-green-900 shadow-sm border-b border-gray-200">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-light text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              CITIMORE
            </Link>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/listings"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Listings
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Pages
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Section - Contact Info and Sign Up (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-white">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zm0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2"
                />
              </svg>
              <span className="text-sm">+68 685 88666</span>
            </div>

            {/* Sign Up Button */}
            <Link href="/SignupPage">
              <button className="bg-green-800 text-white px-4 py-2 rounded-3xl hover:bg-yellow-400 hover:text-green-900 transition-colors text-sm font-medium border-1">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/listings"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Contact Info */}
            <div className="px-3 py-2 text-gray-700 border-t border-gray-200 mt-2 pt-4">
              <div className="flex items-center space-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zm0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2"
                  />
                </svg>
                <span>+68 685 88666</span>
              </div>
            </div>

            {/* Mobile Sign Up Button */}
            <div className="px-3 py-2 border-t border-gray-200 pt-4">
              <Link
                href="/signup"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
