// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Company Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Pawna Camping</h2>
            <p className="text-sm">
              Escape the hustle and immerse yourself in the beauty of nature with unforgettable lakeside camping experiences at Pawna Lake.
            </p>
            <p className="text-sm mt-2">
              📍 Location: Pawna Lake, Maharashtra
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-2">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>📞 <strong>Phone:</strong> +917040504738</li>
                <li>📧 <strong>Email:</strong> <span  className="text-blue-400 hover:underline">vishalandre1212@gmail.com</span></li>
                <li>📍 <strong>Location:</strong> Pawna Lake,Pune, Maharashtra</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pawna Camping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
