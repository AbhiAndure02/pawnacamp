"use client";
import Image from "next/image";

export default function Advertisement() {
  return (
    <div className="bg-gradient-to-b from-gray-500 to-gray-200 py-8">
      {/* Header */}
      <div className="text-center animate-fadeInUp">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900">
          31st December Big Event & Live Music New Year Party Celebration
        </h2>
      </div>

      {/* Image and Details */}
      <div className="container mx-auto mt-6 animate-zoomIn">
        <div className="flex flex-wrap justify-center">
          {/* Main Advertisement Image */}
          <div className="relative w-full max-w-lg md:max-w-3xl rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/offer.jpeg"
              alt="Camping Offer"
              layout="responsive"
              width={700}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Pricing and Package Details */}
      <div className="mt-6 text-center animate-fadeInUp">
        <div className="text-orange-500 text-2xl font-bold">
          Starting at <span className="text-black">₹1999</span> per person
        </div>
        <div className="mt-4 text-lg font-semibold">Package Inclusions:</div>
        <ul className="mt-2 text-gray-700 space-y-2">
          <li>⏰ Check-in 3 PM</li>
          <li>🥞 Breakfast</li>
          <li>🍖 Unlimited Dinner & BBQ</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6 flex justify-center gap-6 animate-fadeInUp">
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
          Call: 7040504738
        </button>
      </div>
    </div>
  );
}
