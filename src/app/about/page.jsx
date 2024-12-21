"use client";

import Image from "next/image";

function page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">About Pawana Camping</h1>

      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg mb-6">
          Nestled amidst the serene beauty of the Pawana Lake, our camping site
          offers a unique blend of tranquility and adventure. Escape the hustle
          of daily life and immerse yourself in nature’s splendor with
          breathtaking views, cozy tents, and memorable experiences.
        </p>
      </div>

      {/* Image Gallery Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="relative w-full h-48">
            <Image
              src={`/images/${index + 1}.jpeg`} // Use images from the gallery (1.jpeg to 6.jpeg)
              alt={`Pawana Camping ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg mb-4">
          For inquiries, bookings, or further details, feel free to reach out:
        </p>
        <ul className="text-gray-700 text-lg">
          <li className="mb-2">
            📞 <strong>Phone:</strong> +917040504738
          </li>
          <li className="mb-2">
            📞 <strong>Alternate Phone:</strong> +917558200679
          </li>
          <li>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:info@pawanacamping.com"
              className="text-blue-600 hover:underline"
            >
              info@pawanacamping.com
            </a>
          </li>
        </ul>
      </div>

      {/* Closing Statement */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <p className="text-center text-gray-700 text-lg">
          Experience the magic of nature with us at Pawana Camping. Your perfect
          getaway awaits!
        </p>
      </div>
    </div>
  );
}

export default page;
