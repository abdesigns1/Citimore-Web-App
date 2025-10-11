import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";

export default function WhyWorkWithUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images and Card */}
        <div className="relative">
          {/* Family Image */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full overflow-hidden shadow-2xl z-10">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop"
              alt="Happy family"
              className="w-full h-full object-cover"
            />
          </div>

          {/* House Image */}
          <div className="ml-32 mt-32 w-96 h-96 rounded-full overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop"
              alt="Modern house"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Properties Card */}
          <div className="absolute bottom-0 left-0 bg-yellow-200 rounded-3xl p-8 shadow-xl w-64 z-20">
            <div className="bg-teal-800 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <HiOutlineHome className="text-white text-2xl" />
            </div>
            <p className="text-gray-800 font-medium mb-2">
              Properties for Rent
            </p>
            <p className="text-4xl font-bold text-gray-900">200</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Why You Should Work With Us
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            we build relationships, deliver results, and guide you through one
            of life's most important decisions with confidence and care.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <BsCheckLg className="text-gray-900 mt-1 flex-shrink-0" />
              <span className="text-gray-900 font-medium">100% Secure</span>
            </div>

            <div className="flex items-start gap-3">
              <BsCheckLg className="text-gray-900 mt-1 flex-shrink-0" />
              <span className="text-gray-900 font-medium">
                Truested by Thousands
              </span>
            </div>

            <div className="flex items-start gap-3 md:col-span-2">
              <BsCheckLg className="text-gray-900 mt-1 flex-shrink-0" />
              <span className="text-gray-900 font-medium">
                Connect you to your Share Room
              </span>
            </div>
          </div>

          {/* Learn More Button */}
          <button className="bg-yellow-200 hover:bg-yellow-300 transition-colors px-8 py-4 rounded-b-sm flex items-center gap-3 font-medium text-gray-900 shadow-lg">
            Learn More
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
