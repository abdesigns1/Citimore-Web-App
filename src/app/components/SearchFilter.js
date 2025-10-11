"use client"; // Add this at the top since we're using useState

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchFilter = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "Wise",
    type: "All Type",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search filters:", filters);
    // Add your search logic here
  };

  return (
    <div className="relative -mb-24 z-20 mt-46">
      {/* This makes it overlap */}
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 md:p-8 max-w-4xl mx-auto">
        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Keyword Filter */}
          <div className="text-left">
            <label className="block text-sm font-light text-gray-400 mb-3 uppercase tracking-wide">
              Keyword
            </label>
            <div className="relative">
              <input
                type="text"
                value={filters.keyword}
                onChange={(e) => handleFilterChange("keyword", e.target.value)}
                placeholder="Enter Keyword"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-700 placeholder-gray-500 bg-white transition-all duration-200 hover:border-gray-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Location Filter */}
          <div className="text-left">
            <label className="block text-sm font-light text-gray-400 mb-3 uppercase tracking-wide">
              Location
            </label>
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-700 appearance-none bg-white transition-all duration-200 hover:border-gray-300"
              >
                <option>Wise</option>
                <option>Downtown</option>
                <option>North Wise</option>
                <option>South Wise</option>
                <option>East Wise</option>
                <option>West Wise</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg
                  className="h-5 w-5 text-gray-400"
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
              </div>
            </div>
          </div>

          {/* Type Filter */}
          <div className="text-left">
            <label className="block text-sm font-light text-gray-400 mb-3 uppercase tracking-wide">
              Type
            </label>
            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-700 appearance-none bg-white transition-all duration-200 hover:border-gray-300"
              >
                <option>All Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
                <option>Studio</option>
                <option>Shared Room</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg
                  className="h-5 w-5 text-gray-400"
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
              </div>
            </div>
          </div>

          {/* Filter Button */}
          <div className="text-left">
            <label className="block text-sm font-light text-gray-400 mb-3 uppercase tracking-wide">
              Filter
            </label>
            <button
              onClick={() => console.log("Open advanced filters")}
              className="w-full px-4 py-3.5 bg-gray-100 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              <span>Filter</span>
            </button>
          </div>

          {/* Search Button */}
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide opacity-0">
              Search
            </label>
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
