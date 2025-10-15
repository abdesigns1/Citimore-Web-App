import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function HeroSection() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Wuse");
  const [type, setType] = useState("All Type");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const locations = [
    "Wuse",
    "Gwawalada",
    "UTAKO",
    "Wuye Axis",
    "Jabi",
    "Jahi",
    "Maitama",
    "Asokoro",
  ];
  const types = [
    "All Type",
    "Apartment",
    "House",
    "Self Contained",
    "Room to Let",
    "Studio",
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Hero Image.png')",
        }}
      >
        {/* Dark overlay   bg-black/20*/}
        <div className="absolute inset-0"></div>{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-green-900">Co-Rent A</span>
            <br />
            <span className="text-yellow-500">Home </span>
            <span className="text-green-900">Today!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mt-6">
            Find a room mate to split your
            <br />
            housing rent with you.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Keyword Input */}
              <div className="md:col-span-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Keyword
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <BiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="md:col-span-3 relative">
                <label className="block text-sm text-gray-600 mb-2">
                  Location
                </label>
                <button
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown);
                    setShowTypeDropdown(false);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-left flex items-center justify-between"
                >
                  <span className="text-gray-900">{location}</span>
                  <MdKeyboardArrowDown className="text-gray-600 text-xl" />
                </button>
                {showLocationDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                    {locations.map((loc) => (
                      <div
                        key={loc}
                        onClick={() => {
                          setLocation(loc);
                          setShowLocationDropdown(false);
                        }}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-900"
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Dropdown */}
              <div className="md:col-span-3 relative">
                <label className="block text-sm text-gray-600 mb-2">Type</label>
                <button
                  onClick={() => {
                    setShowTypeDropdown(!showTypeDropdown);
                    setShowLocationDropdown(false);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-left flex items-center justify-between"
                >
                  <span className="text-gray-900">{type}</span>
                  <MdKeyboardArrowDown className="text-gray-600 text-xl" />
                </button>
                {showTypeDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                    {types.map((t) => (
                      <div
                        key={t}
                        onClick={() => {
                          setType(t);
                          setShowTypeDropdown(false);
                        }}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-900"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Filter and Search Buttons */}
              <div className="md:col-span-2 flex gap-2">
                <button className="flex-1 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  Filter
                </button>
                <button className="flex-1 px-6 py-3 bg-yellow-300 rounded-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
