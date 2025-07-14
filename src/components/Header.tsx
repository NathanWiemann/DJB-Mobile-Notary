import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Reviews' },
    { path: '/blog', label: 'Blog' },
    { path: '/documents', label: 'Documents' },
    { path: '/espanol', label: 'Español' },
    { path: '/faq', label: 'FAQ' },
    { path: '/locations', label: 'Locations' }
  ];

  const headerNavItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Reviews' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Name - Left aligned */}
          <Link to="/" className="flex items-center space-x-3" aria-label="Daniel J. Bolanos Mobile Notary - Home">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-teal-800">
                Daniel J. Bolanos
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">Mobile Notary</p>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {headerNavItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-800 border-b-2 border-teal-800'
                    : 'text-gray-700 hover:text-teal-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone Number & Contact Button - Right aligned */}
          <div className="flex items-center space-x-4">
            {/* Phone Number - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-teal-800">
                <Phone className="h-5 w-5" />
                <a 
                  href="tel:+19146198328" 
                  className="text-lg font-semibold hover:text-teal-600 transition-colors"
                  aria-label="Call Daniel at (914) 619-8328"
                >
                  (914) 619-8328
                </a>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Evenings & Weekends</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
              aria-label="Contact Daniel to schedule an appointment"
            >
              Contact Daniel
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800 hover:text-teal-800 hover:bg-gray-100 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Phone Number */}
        <div className="md:hidden pb-4">
          <div className="flex items-center justify-center space-x-2 text-teal-800">
            <Phone className="h-5 w-5" />
            <a href="tel:+19146198328" className="text-lg font-semibold">
              (914) 619-8328
            </a>
          </div>
        </div>
      </div>

      {/* Slide-out Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
      )}

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Menu Header - Fixed */}
        <div className="p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/djb-mobile-notary-logo.png" 
                alt="Daniel J. Bolanos Mobile Notary Logo" 
                className="h-12 w-12"
              />
              <div>
                <h2 className="text-lg font-bold text-teal-800">Daniel J. Bolanos</h2>
                <p className="text-sm text-gray-600">Mobile Notary</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-gray-800 hover:text-teal-800 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Menu Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Menu Items */}
            <nav className="space-y-2 mb-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-teal-100 text-teal-800 border-l-4 border-teal-800'
                      : 'text-gray-800 hover:bg-gray-100 hover:text-teal-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info in Menu */}
            <div className="pt-8 border-t border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-800" />
                  <a href="tel:+19146198328" className="text-teal-800 font-semibold">
                    (914) 619-8328
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-teal-800" />
                  <span className="text-gray-600">Evenings & Weekends</span>
                </div>
              </div>
              
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors block text-center"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;