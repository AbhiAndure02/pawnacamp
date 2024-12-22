"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Advertisement from "./(componets)/Advertise";

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917040504738"; // Replace with the phone number
    const message = encodeURIComponent("Hi, I am enquiring about booking from your website camping at pawna lake ."); // Encode the message for URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <div>
      {/* Background Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <p className="absolute inset-0 z-5">
          <Image
            src="/pawna.jpeg"
            alt="Camping near the lake"
            layout="fill"
            objectFit="cover"
            className="opacity-45"
          />
        </p>

        {/* Content Section */}
        <div className="relative text-center text-black px-6 py-24 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Camping at Pawna Lake</h1>
          <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto">
            Experience the tranquility of nature, enjoy stunning views, and immerse yourself in the serenity
            of camping by the lake. Perfect for relaxation, adventure, and unforgettable memories.
          </p>
          
          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/booking" className="p-3 bg-blue-700 text-white rounded-md m-2">
              Book Now
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="flex gap-2 p-3 bg-green-700 text-white rounded-md m-2"
            >
              <span>Chat with</span>
              <FaWhatsapp className="text-2xl" />
            </button>
            <a
              href="tel:+917040504738"
              className="flex gap-2 p-3 bg-blue-700 text-white rounded-md m-2"
            >
              <FaPhoneAlt className="text-xl" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Advertisement Section */}
      <Advertisement />
    </div>
  );
}
