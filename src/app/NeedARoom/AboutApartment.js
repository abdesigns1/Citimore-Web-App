"use client";
import React, { use, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function NeedRoomSection() {
  const [selectedOption, setSelectedOption] = useState("self-contained");

  const handleNext = () => {
    console.log("Selected option:", selectedOption);
    // Handle navigation to next step
  };

  return (
    <>
      <section>
        <NavigationBar />
      </section>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Image with Text Overlay */}
          <div className="relative h-96 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=1000&fit=crop"
              alt="Cozy bedroom"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Need a Room
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-95">
                You already found a room but short on funds and need a roommate
                to split the rent
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-yellow-50">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                1. What type of Room are you looking for?
              </h3>
            </div>

            {/* Radio Options */}
            <div className="space-y-6 mb-12">
              {/* Self-contained Option */}
              <label className="flex items-center cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="roomType"
                    value="self-contained"
                    checked={selectedOption === "self-contained"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500 cursor-pointer"
                  />
                </div>
                <span className="ml-3 text-base text-gray-900 font-medium">
                  Self-contained
                </span>
              </label>

              {/* A room in an Apartment Option */}
              <label className="flex items-center cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="roomType"
                    value="apartment-room"
                    checked={selectedOption === "apartment-room"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500 cursor-pointer"
                  />
                </div>
                <span className="ml-3 text-base text-gray-900 font-medium">
                  A room in an Apartment
                </span>
              </label>

              {/* Other Option */}
              <label className="flex items-center cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="roomType"
                    value="other"
                    checked={selectedOption === "other"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500 cursor-pointer"
                  />
                </div>
                <span className="ml-3 text-base text-gray-900 font-medium">
                  Other
                </span>
              </label>

              <form className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Please specify if other:
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows="3"
                  placeholder="Your answer..."
                ></textarea>
              </form>
            </div>

            {/* Next Button */}
            <div>
              <button
                onClick={handleNext}
                className="bg-teal-800 hover:bg-teal-900 text-white font-semibold px-12 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}
