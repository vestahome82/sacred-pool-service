import React from 'react';
import ServiceCard from './ServiceCard';
import { Droplets, Brush, TestTube, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      Icon: Droplets,
      title: "Regular Maintenance",
      description: "Weekly or bi-weekly pool maintenance to keep your water pristine"
    },
    {
      Icon: Brush,
      title: "Deep Cleaning",
      description: "Thorough cleaning of walls, floor, and equipment"
    },
    {
      Icon: TestTube,
      title: "Water Testing",
      description: "Professional water chemistry analysis and balancing"
    },
    {
      Icon: Wrench,
      title: "Equipment Repair",
      description: "Expert repair and maintenance of pool equipment"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}