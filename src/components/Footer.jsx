import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1D] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Resume Platform</h3>
          <p className="text-gray-400">
            Helping you build and manage resumes for the best job opportunities.
          </p>
          <p className="text-gray-400 mt-4">Email: support@resumeplatform.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/services" className="text-gray-400 hover:underline">Services</a></li>
            <li><a href="/pricing" className="text-gray-400 hover:underline">Pricing</a></li>
            <li><a href="/contact" className="text-gray-400 hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <p className="text-gray-600 text-center mt-10">&copy; 2025 Resume Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
