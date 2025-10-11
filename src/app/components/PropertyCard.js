import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BiArea } from "react-icons/bi";

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  badges,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Image Section */}
      <div className="relative h-52">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-md text-xs font-bold uppercase ${
                badge === "FOR RENT"
                  ? "bg-teal-800 text-white"
                  : badge === "BOOSTED"
                  ? "bg-red-600 text-white"
                  : badge === "TAKEN"
                  ? "bg-yellow-300 text-gray-900"
                  : "bg-gray-800 text-white"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          <span className="text-lg font-bold text-orange-500 whitespace-nowrap ml-2">
            {price}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-3">
          <MdLocationOn className="text-gray-500 text-base" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-5 text-gray-600 text-sm">
          {beds && (
            <div className="flex items-center gap-1.5">
              <IoBedOutline className="text-base" />
              <span>{beds}</span>
            </div>
          )}
          {baths && (
            <div className="flex items-center gap-1.5">
              <LuBath className="text-base" />
              <span>{baths}</span>
            </div>
          )}
          {sqft && (
            <div className="flex items-center gap-1.5">
              <BiArea className="text-base" />
              <span>{sqft}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function RoomToLet() {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      title: "2 Bedroom Flat",
      location: "WUSE 2",
      price: "₦800,000",
      beds: "2 Beds",
      baths: "1 Baths",
      sqft: "400 sqft",
      badges: ["FOR RENT", "BOOSTED"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      title: "3 Bedroom to split",
      location: "Gwawalada",
      price: "₦2,500,000",
      beds: "3 Beds",
      baths: "2 Baths",
      sqft: "450 sqft",
      badges: ["FOR RENT"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
      title: "1 Room Self Contained",
      location: "UTAKO",
      price: "₦750,000",
      beds: "1 Bed",
      baths: "2 Baths",
      sqft: "400 sqft",
      badges: ["FOR RENT"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      title: "2 Bedroom Flat",
      location: "Wuye Axis",
      price: "₦1,500,000",
      beds: "2 Beds",
      baths: "2 Baths",
      sqft: "450 sqft",
      badges: ["FOR RENT"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      title: "1  Bedroom Flat",
      location: "Jabi",
      price: "₦800,000",
      beds: "2 Beds",
      baths: "1 Baths",
      sqft: "460 sqft",
      badges: ["FOR RENT"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      title: "2 Bedroom Flat",
      location: "Jahi",
      price: "₦2,000,000",
      beds: "2 Beds",
      baths: "2 Baths",
      sqft: "",
      badges: ["FOR RENT", "TAKEN", "BOOSTED"],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Room To-Let</h1>
          <p className="text-gray-700 text-base">
            Find a room listed for sharing
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
}
