"use client";
import { useState } from "react"; // Added useState import
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks"; // Imported HowItWorks component
import Footer from "./components/Footer";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import PropertyCard from "./components/PropertyCard";
import Link from "next/link";

const Home = () => {
  // Changed from export default function Home()
  const [featuredProperties] = useState([
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, Wise",
      price: "$800/month",
      beds: 2,
      baths: 1,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      available: true,
    },
    {
      id: 2,
      title: "Cozy Suburban House",
      location: "North Wise Suburbs",
      price: "$1200/month",
      beds: 3,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      available: true,
    },
    {
      id: 3,
      title: "Luxury Condo with View",
      location: "Riverfront, Wise",
      price: "$1500/month",
      beds: 2,
      baths: 2,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      available: false,
    },
  ]);

  const [statistics] = useState([
    { number: "500+", label: "Properties Listed" },
    { number: "1.2k+", label: "Happy Roommates" },
    { number: "40%", label: "Average Savings" },
    { number: "50+", label: "Cities Covered" },
  ]);

  const [testimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Wise Downtown",
      text: "Found my perfect roommate in just 2 days! Saved me $600/month on rent.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "North Wise",
      text: "The process was smooth and secure. My co-renter is now a good friend!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "West Wise",
      text: "Amazing platform! Made moving to a new city so much easier and affordable.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ]);

  const areas = [
    {
      name: "Wuse",
      count: 8,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Jabi",
      count: 0,
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Jayi",
      count: 2,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Wuye",
      count: 1,
      image:
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Gudu",
      count: 2,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Hero Header with Search */}
        <Header />

        {/* Areas Section */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Find Properties in These Areas
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Find your preferred home in any area in abuja
                </p>
              </div>
              <button className="text-grey-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 w-fit flex items-center space-x-2 group">
                <span>View All Areas</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Areas Grid with Real Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={area.image}
                        alt={area.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-400 transition-colors">
                        {area.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          area.count === 0 ? "text-red-500" : "text-gray-600"
                        }`}
                      >
                        {area.count}{" "}
                        {area.count === 1 ? "Property" : "Properties"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Need a Room / Need a Roommate Section */}
        <section className="py-10 pb-25 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Card - Need a Room */}
              <Link href="/NeedARoom">
                <div className="bg-green-800 rounded-2xl shadow-lg border p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-200 transition-colors">
                      Need a Room?
                    </h3>
                  </div>

                  <div className="text-center">
                    <p className="text-white text-lg leading-relaxed group-hover:text-green-100 transition-colors">
                      You already found a room but short on
                      <br />
                      funds and need a roommate to split the rent
                    </p>
                  </div>
                </div>
              </Link>

              {/* Right Card - Need a Roommate */}
              <Link href="/find-room">
                <div className="bg-green-600 rounded-2xl shadow-lg border p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-200 transition-colors">
                      Need a Roommate?
                    </h3>
                  </div>

                  <div className="text-center">
                    <p className="text-white text-lg leading-relaxed group-hover:text-green-100 transition-colors">
                      You need someone that already
                      <br />
                      found a room and is looking to split the rent
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Room to let Section */}
        <section>
          <PropertyCard />
        </section>
        <section>
          <HowItWorks />
        </section>
        <section>
          <WhyWorkWithUs />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
