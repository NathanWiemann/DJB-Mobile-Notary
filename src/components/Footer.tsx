import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Branding Section */}
      <div className="bg-teal-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/djb-mobile-notary-logo.png" 
                alt="Daniel J. Bolanos Mobile Notary Logo" 
                className="h-16 w-16"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Daniel J. Bolanos</h3>
                <p className="text-teal-100">Mobile Notary - Personal Service You Can Trust</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl font-bold text-white">(914) 619-8328</p>
              <p className="text-teal-100">Evenings & Weekends Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Daniel</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-teal-400 mt-0.5" />
                  <div>
                    <a href="tel:+19146198328" className="text-gray-300 hover:text-white transition-colors">
                      (914) 619-8328
                    </a>
                    <p className="text-gray-400 text-sm">Call or Text Anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-teal-400 mt-0.5" />
                  <div>
                    <a href="mailto:contact@danielbolanosnotary.com" className="text-gray-300 hover:text-white transition-colors">
                      contact@djb-mobile-notary.com
                    </a>
                    <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Local Area & Surrounding Communities</p>
                    <p className="text-gray-400 text-sm">Mobile service within 25 miles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-teal-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Weekdays: 5-8 PM</p>
                    <p className="text-gray-300">Weekends: 9 AM-8 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors underline" aria-label="Go to home page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors underline" aria-label="Learn about Daniel">
                    About Daniel
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors underline" aria-label="View services and pricing">
                    Services & Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors underline" aria-label="Read client reviews">
                    Client Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors underline" aria-label="Contact and schedule with Daniel">
                    Contact & Scheduling
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Highlights */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">
                  <span className="text-teal-400">•</span> Document Notarization
                </li>
                <li className="text-gray-300">
                  <span className="text-teal-400">•</span> Real Estate Closings
                </li>
                <li className="text-gray-300">
                  <span className="text-teal-400">•</span> Loan Signing Services
                </li>
                <li className="text-gray-300">
                  <span className="text-teal-400">•</span> Business Documents
                </li>
                <li className="text-gray-300">
                  <span className="text-teal-400">•</span> Personal Legal Papers
                </li>
                <li className="text-gray-300">
                  <span className="text-teal-400">•</span> Mobile Service
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <p className="text-amber-400 font-semibold text-sm">✓ Licensed & Bonded</p>
                <p className="text-amber-400 font-semibold text-sm">✓ $100K Insurance Coverage</p>
                <p className="text-amber-400 font-semibold text-sm">✓ Personal Service</p>
              </div>
            </div>

            {/* Personal Touch & CTA */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Why Choose Daniel?</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-red-400 mt-0.5" />
                  <p className="text-gray-300 text-sm">Personal care and attention for every client</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-teal-400 mt-0.5" />
                  <p className="text-gray-300 text-sm">Flexible scheduling to fit your life</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                  <p className="text-gray-300 text-sm">I come to you for convenience</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-teal-900 border border-teal-700 rounded-lg p-4">
                <h5 className="text-white font-bold mb-2">Ready to Schedule?</h5>
                <p className="text-teal-100 text-sm mb-3">
                  Contact me today for personal, professional notary service.
                </p>
                <a
                  href="tel:+19146198328"
                  className="bg-teal-800 hover:bg-teal-900 text-white px-4 py-2 rounded text-sm font-semibold transition-colors block text-center"
                >
                  Call Daniel Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Text */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-sm leading-relaxed">
                © 2025 Daniel J. Bolanos Mobile Notary. All rights reserved. Licensed Notary Public, 
                State of Pennsylvania. Commission #1411855. 
                Bonded and insured.
              </p>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <div className="space-y-1">
                <p>Notary Commission Active</p>
                <p>Background Check Verified • Fingerprinted</p>
              </div>
              <div className="mt-4 space-x-4">
                <Link to="/privacy-policy" className="hover:text-white transition-colors underline" aria-label="View our Privacy Policy">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors underline" aria-label="View our Terms of Service">Terms of Service</Link>
                <Link to="/accessibility" className="hover:text-white transition-colors underline" aria-label="View our Accessibility Statement">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;