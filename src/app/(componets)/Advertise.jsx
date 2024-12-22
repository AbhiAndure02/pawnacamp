"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use `next/navigation` for app directory in Next.js 13+
import { useEffect, useState } from "react";

export default function Advertisement() {
  const [isClient, setIsClient] = useState(false); // State to track if the component is client-side
  const router = useRouter();

  // Set isClient to true when the component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBookNow = () => {
    // Ensure we are on the client-side before calling the router
    if (isClient) {
      router.push('/booking'); // Adjust the URL to match your actual booking page route
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-400 py-12 px-4">
      {/* Header */}
      <div className="text-center animate-fadeInUp mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          31st December Big Event & Live Music New Year Party Celebration
        </h2>
        <p className="text-lg text-white mt-4 max-w-3xl mx-auto">
          Join us for a fun-filled evening with great food, live music, and exciting activities at Pawna Lake!
        </p>
      </div>

      {/* Image and Details */}
      <div className="container mx-auto mt-6 animate-zoomIn mb-8">
        <div className="flex flex-wrap justify-center">
          {/* Main Advertisement Image */}
          <div className="relative w-full max-w-lg md:max-w-3xl rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/thrty.jpeg"
              alt="Camping Offer"
              layout="responsive"
              width={800}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Pricing and Package Details */}
      <div className="mt-6 text-center animate-fadeInUp text-white">
        <div className="text-3xl font-bold text-orange-500">
          Starting at <span className="text-black">₹2000</span> per person
        </div>
        <div className="mt-4 text-lg font-semibold">
          <span className="underline">Package Inclusions:</span>
        </div>
        <ul className="mt-4 text-lg space-y-2 text-white mx-auto max-w-2xl">
          <li>⏰ Check-in at 3 PM</li>
          <li>🍖 Evening Welcome Tea/Coffee & Pakoda</li>
          <li>🎮 Free Indoor Games Available</li>
          <li>🍢 Paneer Chilli & Chicken Chilli BBQ (250g) at 8 PM</li>
          <li>🍽️ Buffet Dinner (Veg & Non-Veg Options)</li>
          <li>🎶 Live Music & DJ Night</li>
          <li>🔥 Bonfire</li>
          <li>🥞 Breakfast (Poha, Upma, Bread Omelette, Tea, Coffee)</li>
          <li>🚗 Parking, Common Toilets, and First Aid Kit</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp">
        <a
          href="tel:+917040504738"
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Call: 7040504738
        </a>
        <button
          onClick={handleBookNow}
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
