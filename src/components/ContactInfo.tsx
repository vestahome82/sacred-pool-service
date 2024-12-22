import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
      <div className="space-y-6">
        <div className="flex items-center">
          <Phone className="h-6 w-6 text-blue-600 mr-3" />
          <span>(805) 748-8365</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-6 w-6 text-blue-600 mr-3" />
          <span>contact@csacredpoolservice.com</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-6 w-6 text-blue-600 mr-3" />
          <span>2113 Wabaska Ct<br />San Diego, CA 92107</span>
        </div>
      </div>
    </div>
  );
}