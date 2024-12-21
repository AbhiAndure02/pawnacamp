// components/Footer.js

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';  // Example for social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Company Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Camping by the Lake</h2>
            <p className="text-sm">
              Experience nature like never before, with our beautiful lakeside camping spots.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/about">
              <p className="text-sm hover:text-blue-400 transition">About Us</p>
            </Link>
            <Link href="/contact">
              <p className="text-sm hover:text-blue-400 transition">Contact</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-sm hover:text-blue-400 transition">Privacy Policy</p>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Camping by the Lake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
