"use client";
import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function NeedRoomWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    roomType: "self-contained",
    location: "",
    budget: "",
    moveInDate: "",
    duration: "6-months",
    bedrooms: "1",
    bathrooms: "1",
    furnishing: "furnished",
    amenities: [],
    gender: "any",
    occupation: "",
    lifestyle: [],
    description: "",
    contactName: "",
    email: "",
    phone: "",
  });

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleArrayField = (field, value) => {
    const currentArray = formData[field];
    if (currentArray.includes(value)) {
      updateFormData(
        field,
        currentArray.filter((item) => item !== value)
      );
    } else {
      updateFormData(field, [...currentArray, value]);
    }
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

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

          {/* Right Side - Form Steps */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-yellow-50 relative">
            {/* Back Button */}
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="absolute top-6 left-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <BiChevronLeft className="text-2xl" />
                <span className="font-medium">Back</span>
              </button>
            )}

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="text-sm text-gray-500">
                Step {currentStep} of 7
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div
                  className="bg-teal-800 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 7) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Room Type */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  1. What type of Room are you looking for?
                </h3>
                <div className="space-y-6 mb-12">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="self-contained"
                      checked={formData.roomType === "self-contained"}
                      onChange={(e) =>
                        updateFormData("roomType", e.target.value)
                      }
                      className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    />
                    <span className="ml-3 text-base text-gray-900 font-medium">
                      Self-contained
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="apartment-room"
                      checked={formData.roomType === "apartment-room"}
                      onChange={(e) =>
                        updateFormData("roomType", e.target.value)
                      }
                      className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    />
                    <span className="ml-3 text-base text-gray-900 font-medium">
                      A room in an Apartment
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="other"
                      checked={formData.roomType === "other"}
                      onChange={(e) =>
                        updateFormData("roomType", e.target.value)
                      }
                      className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500"
                    />
                    <span className="ml-3 text-base text-gray-900 font-medium">
                      Other
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: About Apartment */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  2. About Apartment
                </h3>
                <div className="space-y-6 mb-12">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where is your prefered location?
                    </label>
                    <input
                      type="text"
                      placeholder="Enter location (e.g., Wuse, Jabi)"
                      value={formData.location}
                      onChange={(e) =>
                        updateFormData("location", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Second option (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your budget"
                      value={formData.budget}
                      onChange={(e) => updateFormData("budget", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Move-in Date & Duration */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  3. Budgeting / Relocation?
                </h3>
                <div className="space-y-6 mb-12">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When do you plan to move in to the Apartment?
                    </label>
                    <input
                      type="date"
                      value={formData.moveInDate}
                      onChange={(e) =>
                        updateFormData("moveInDate", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What is your total budget?
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your budget"
                      value={formData.budget}
                      onChange={(e) => updateFormData("budget", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Room Details */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  4. Room preferences
                </h3>
                <div className="space-y-6 mb-12">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Bedrooms
                    </label>
                    <select
                      value={formData.bedrooms}
                      onChange={(e) =>
                        updateFormData("bedrooms", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4+ Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Bathrooms
                    </label>
                    <select
                      value={formData.bathrooms}
                      onChange={(e) =>
                        updateFormData("bathrooms", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="1">1 Bathroom</option>
                      <option value="2">2 Bathrooms</option>
                      <option value="3">3+ Bathrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Furnishing
                    </label>
                    <div className="space-y-3">
                      {["furnished", "unfurnished", "semi-furnished"].map(
                        (furnish) => (
                          <label
                            key={furnish}
                            className="flex items-center cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="furnishing"
                              value={furnish}
                              checked={formData.furnishing === furnish}
                              onChange={(e) =>
                                updateFormData("furnishing", e.target.value)
                              }
                              className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500"
                            />
                            <span className="ml-3 text-base text-gray-900 font-medium capitalize">
                              {furnish.replace("-", " ")}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Amenities */}
            {currentStep === 5 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  5. What amenities are important?
                </h3>
                <div className="space-y-4 mb-12">
                  {[
                    "WiFi",
                    "Parking",
                    "Laundry",
                    "Air Conditioning",
                    "Security",
                    "Generator",
                    "Swimming Pool",
                    "Gym",
                  ].map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => toggleArrayField("amenities", amenity)}
                        className="w-5 h-5 text-teal-800 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="ml-3 text-base text-gray-900 font-medium">
                        {amenity}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Roommate Preferences */}
            {currentStep === 6 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  6. Roommate preferences
                </h3>
                <div className="space-y-6 mb-12">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Gender
                    </label>
                    <div className="space-y-3">
                      {["any", "male", "female"].map((gender) => (
                        <label
                          key={gender}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={(e) =>
                              updateFormData("gender", e.target.value)
                            }
                            className="w-5 h-5 text-teal-800 border-2 border-gray-300 focus:ring-2 focus:ring-teal-500"
                          />
                          <span className="ml-3 text-base text-gray-900 font-medium capitalize">
                            {gender}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lifestyle Preferences
                    </label>
                    <div className="space-y-3">
                      {[
                        "Non-smoker",
                        "Pet-friendly",
                        "Quiet",
                        "Social",
                        "Working Professional",
                        "Student",
                      ].map((lifestyle) => (
                        <label
                          key={lifestyle}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.lifestyle.includes(lifestyle)}
                            onChange={() =>
                              toggleArrayField("lifestyle", lifestyle)
                            }
                            className="w-5 h-5 text-teal-800 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
                          />
                          <span className="ml-3 text-base text-gray-900 font-medium">
                            {lifestyle}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Contact Information */}
            {currentStep === 7 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  7. Contact information
                </h3>
                <div className="space-y-6 mb-12">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.contactName}
                      onChange={(e) =>
                        updateFormData("contactName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      placeholder="Tell us more about yourself or special requirements..."
                      value={formData.description}
                      onChange={(e) =>
                        updateFormData("description", e.target.value)
                      }
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleNext}
                className="bg-teal-800 hover:bg-teal-900 text-white font-semibold px-12 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                {currentStep === 7 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
