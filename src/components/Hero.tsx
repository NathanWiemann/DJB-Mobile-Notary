import React from 'react';
import { Shield, Clock, MapPin, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Professional
              <span className="text-blue-800 block">Notary Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-6 leading-relaxed">
              Certified, bonded, and insured mobile notary available 24/7. 
              Same-day appointments for all your document notarization needs.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Bonded & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-amber-500" />
                <span className="text-gray-700 font-medium">5-Star Rated</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={scrollToContact}
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Schedule Appointment
              </button>
              <a
                href="tel:+15551234567"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Licensed & Certified Notary Public</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Mobile Service to Your Location</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Same-Day Appointments Available</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Competitive Pricing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Professional & Reliable Service</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-amber-500 text-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;