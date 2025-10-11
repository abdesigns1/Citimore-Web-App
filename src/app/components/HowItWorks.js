// src/components/HowItWorks.jsx
import React from "react";
import { FaSearch, FaComments, FaKey } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Find Roommate",
      description:
        "Find a listed room for sharing / or a roommate to split the rent",
      icon: FaSearch,
    },
    {
      number: "02",
      title: "Connect via Citimore",
      description: "Connect via Citimore",
      icon: FaComments,
    },
    {
      number: "03",
      title: "Take The Keys",
      description: "Get access to your room upon payment",
      icon: FaKey,
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works?{" "}
            <span className="text-[#191919]">Find a perfect home</span>
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            Here is a step by step guide on how Citimore works
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-amber-50 p-8 transition-all duration-300 h-full">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E7C873] to-[#E7C873] flex items-center justify-center mb-6 shadow-md rounded-4xl mx-auto">
                    <IconComponent className="w-7 h-7 text-white justify-center" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-bold text-[#111827] mb-4">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#6b7280] text-lg leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <button className="bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1d4ed8] transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
