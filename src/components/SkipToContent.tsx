import React from 'react';

const SkipToContent = () => {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-teal-800 focus:font-bold focus:rounded-md focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;