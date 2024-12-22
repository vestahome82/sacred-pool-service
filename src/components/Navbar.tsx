import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Replacing Droplets with the logo */}
            <img
              src="/images/logo.png"
              alt="Sacred Pool Service Logo"
              className="h-12 w-12"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Sacred Pool Service
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
