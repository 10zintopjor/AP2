import React from 'react';

function ServiceCard({ title, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transform transition duration-500 hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        {icon && <img src={icon} alt={title} className="w-16 h-16" />}
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
    </div>
  );
}

export default ServiceCard;
