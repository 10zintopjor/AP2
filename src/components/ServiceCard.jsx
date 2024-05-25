import React from 'react';

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <img src={icon} alt={title} className="w-20 h-20 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-center mb-4">{description}</p>
      <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
