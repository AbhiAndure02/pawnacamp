"use client";
import Image from "next/image";

function page() {
  const images = Array.from({ length: 20 }, (_, i) => `/images/${i + 1}.jpeg`);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={300}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{`Image ${
                index + 1
              }`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
