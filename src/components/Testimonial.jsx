import React from 'react'
import { FaStar } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Excellent service! Highly recommend.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      feedback: "Very professional and prompt.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      feedback: "Great experience overall.",
      rating: 4,
    },
  ];

  return (
    <div className='mb-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>Happy Customers</h1>
        <h4 className='text-lg mt-4'>Hear what our customers have to say about us</h4>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-10'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-xs'>
            <div className='flex flex-row justify-center items-center mb-4'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className='text-yellow-500' />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <FaStar key={i} className='text-gray-300' />
              ))}
            </div>
            <p className='italic mb-4'>" {testimonial.feedback} "</p>
            <h3 className='font-bold'>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial;
