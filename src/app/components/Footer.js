import React, { useState } from "react";
import { BsArrowRight, BsApple, BsGooglePlay } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing:", email);
  };

  return (
    <footer className="bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-yellow-400">CITIMORE</div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-gray-900 font-medium">Follow Us</span>
            <a
              href="#"
              className="text-gray-900 hover:text-teal-700 transition-colors"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-teal-700 transition-colors"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-teal-700 transition-colors"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-teal-700 transition-colors"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Subscribe Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Subscribe</h3>
            <div className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-teal-700 outline-none bg-transparent text-gray-900 placeholder-gray-500"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-800 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition-colors flex items-center gap-2 font-medium"
                >
                  Send
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>

          {/* Discover Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Discover</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Jabi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Wuse
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Wuye
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Utako
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Gudu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Gwarimpa
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-700 hover:text-teal-700 transition-colors"
              >
                citimore.com
              </a>
              <a
                href="tel:+2342345678900"
                className="block text-gray-700 hover:text-teal-700 transition-colors"
              >
                (234) 456-7890
              </a>
            </div>
          </div>

          {/* Our Address & Get the App Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Our Address
            </h3>
            <address className="not-italic text-gray-700 mb-8 leading-relaxed">
              99 Fifth Avenue, 3rd Floor
              <br />
              Abuja, Nigeria
            </address>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get the app
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-teal-800 text-white px-4 py-3 rounded-lg hover:bg-teal-900 transition-colors"
              >
                <BsApple className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">Apple Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-teal-800 text-white px-4 py-3 rounded-lg hover:bg-teal-900 transition-colors"
              >
                <BsGooglePlay className="text-xl" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-sm text-gray-600">Copyright © 2025 Citimore</p>
        </div>
      </div>
    </footer>
  );
}
