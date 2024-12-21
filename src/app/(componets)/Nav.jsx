"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Packages", path: "/packag" },
  ];

  return (
    <header className="bg-gray-200 text-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-transparent bg-clip-text">
            Camping at Pawan Lake
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link href={path}>
                <div className="hover:bg-gray-400 px-4 py-2 rounded-md cursor-pointer transition duration-300">
                  {name}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-200 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link href={path}>
                  <div
                    className="hover:bg-gray-400 px-4 py-2 rounded-md cursor-pointer transition duration-300"
                    onClick={toggleMenu}
                  >
                    {name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
