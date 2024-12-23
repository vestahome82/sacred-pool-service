import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8" style={{
      backgroundImage: 'url("/sacred-pool-service/images/pool.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="max-w-7xl mx-auto py-32 bg-black bg-opacity-50 rounded-lg text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
        Your Neighborhood Pool Experts in San Diego
        </h1>
        <p className="text-xl text-white mb-8">
        Keep your pool crystal clear with our expert maintenance services. Expect nothing but perfection.
        </p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </a>
      </div>
    </section>
  );
}