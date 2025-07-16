import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/djb-mobile-notary-logo.png" 
            alt="Daniel J. Bolanos Mobile Notary Logo" 
            className="h-20 w-20"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>
        
        <div className="mt-12 text-gray-500 text-sm">
          <p>Need assistance? Contact me directly:</p>
          <a href="tel:+19146198328" className="text-teal-800 hover:text-teal-600 font-semibold">
            (914) 619-8328
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;