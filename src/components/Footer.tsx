import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/images/logo.png"
            alt="Sacred Pool Service Logo"
            className="h-12 w-12"
          />
          <span className="ml-2 text-xl font-bold">Sacred Pool Service</span>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Sacred Pool Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}