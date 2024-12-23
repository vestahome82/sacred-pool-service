import React from 'react';
import { CheckItem } from './CheckItem';

export default function About() {
  const benefits = [
    "Licensed and certified professionals",
    "Eco-friendly cleaning products",
    "Flexible scheduling options"
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 mb-4">
            We’re a family-owned pool service company dedicated to serving the greater San Diego area. 
            From routine maintenance to expert repairs, we specialize in residential pools to keep them safe, 
            clean, and ready for enjoyment year-round. 
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <CheckItem key={index} text={benefit} />
              ))}
            </ul>
          </div>
          <div className="relative h-96">
            <img
              src="/sacred-pool-service/images/pool-cleaning.jpg"
              alt="Pool maintenance"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}