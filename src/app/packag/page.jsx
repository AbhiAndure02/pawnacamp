"use client";

import Link from "next/link";

function Packages() {
  const packages = [
    {
      name: "31st Celebration",
      price: 1499,
      features: [
        "Check-in at 3 PM",
        "Evening Welcome Tea/Coffee & Pakoda",
        " Buffet Dinner (Veg & Non-Veg Options)",
        " Live Music & DJ Night",
        "Breakfast (Poha, Upma, Bread Omelette, Tea, Coffee)",
        "Parking, Common Toilets, and First Aid Kit",
      ],
      image: "/images/thrty.jpeg",
    },
    {
      name: "Standard Tent",
      price: 999,
      features: [
        "Tent Stay",
        "Lake View",
        "Couple & Family Friendly",
        "Snacks, BBQ, Unlimited Dinner, Breakfast",
        "Bonfire",
        "Sports activities",
        "Live music on Saturday",
     
      ],
      image: "/images/18.jpeg", // Replace with relevant images from your gallery
    },
    {
      name: "Triangle Tent",
      price: 1499,
      features: [
        "Premium tent design",
        "Exclusive seating area",
        "Scenic lake view",
        "Private bonfire setup",
        "Complimentary snacks",
      ],
      image: "/images/triangle.jpeg",
    },
    {
      name: "Cottage",
      price: 2900,
      features: [
        "Cozy wooden interiors",
        "Private restroom",
        "Airy veranda seating",
        "Electricity and lighting",
        "Meal packages available",
      ],
      image: "/images/cotage.jpeg",
    },

   
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-48">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-gray-600 font-semibold mb-4">
                Starting At just: ₹{pkg.price}
              </p>

              {/* Features */}
              <ul className="text-gray-700 text-sm mb-4 space-y-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>

              {/* Book Now Button */}
              <Link href='booking' >
         
              <button className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
