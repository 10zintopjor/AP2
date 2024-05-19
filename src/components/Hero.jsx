import React from 'react';
import TemporaryImage from '../images/no-photo.png'; // Import your temporary image

function HeroSection() {
  return (
    <div className="bg-blue-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center">
          <img src={TemporaryImage} alt="Temporary Image" className="max-w-full h-auto" /> {/* Responsive image */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
