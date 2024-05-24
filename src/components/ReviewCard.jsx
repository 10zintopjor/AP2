import React from 'react';
import { FaStar } from 'react-icons/fa';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ReviewCard = ({ name, review, rating }) => {
  const bgColor = getRandomColor();

  return (
    <div className="mb-4">
      <div className="w-80 bg-gray-100 border p-4 border-gray-200 rounded-lg shadow-md">
        <div className="p-4">
          <blockquote className="mb-4 text-gray-700">
            <h3 className="text-lg font-semibold text-gray-700">{review}</h3>
          </blockquote>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-2">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <div className='space-x-2 mb-2'>
              <span className="text-sm text-gray-500 dark:text-gray-400">Rating: {rating} out of 5</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full w-6 h-6 flex items-center justify-center" style={{ backgroundColor: bgColor }}>
                <span className="text-white">{name.charAt(0).toUpperCase()}</span>
              </div>
              <span className="text-sm text-gray-700">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
