import React from 'react';
import { Hero } from '../components/Hero';
import { Clock, MapPin, Phone } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      <Hero />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-green-700" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p>Tuesday - Sunday</p>
              <p>11:30 AM - 10:00 PM</p>
              <p className="text-gray-600">Closed on Mondays</p>
            </div>
            
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-green-700" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>Schwarzwaldstraße 123</p>
              <p>79868 Feldberg</p>
              <p className="text-gray-600">Black Forest, Germany</p>
            </div>
            
            <div className="text-center p-6">
              <Phone className="w-12 h-12 mx-auto mb-4 text-green-700" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>+49 (0) 7676 123456</p>
              <p>info@gasthaus-schwarzwald.de</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}