import { FaStar } from "react-icons/fa";
import * as React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "The service provided was exceptional! From start to finish, the team demonstrated professionalism and efficiency. I highly recommend their services to anyone in need. Thank you for going above and beyond!",
      rating: 4,
    },
    {
      name: "Jane Smith",
      feedback: "I was thoroughly impressed with the level of expertise and attention to detail exhibited by the team. ",
      rating: 5,
    },
    {
      name: "Michelle",
      feedback: "The overall experience was fantastic! The team was prompt, courteous, and extremely knowledgeable. They exceeded my expectations in every aspect and delivered outstanding results.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      feedback: "Great experience overall.",
      rating: 4,
    },
  ];

  const googleReviews = 150; // Number of Google reviews

  return (
    <div className='flex flex-col items-center w-full '>
      <h1 className='text-5xl font-semibold m-10 text-center'>What Clients Are Saying About Us</h1>
      <div className='flex flex-col items-center bg-gray-100 border-gray-200'>
        <div className=' w-3/4 flex rounded justify-center flex-col items'>
          <div className="text-xl m-2 gap-2 flex flex-row items-center">
            <FcGoogle className="text-3xl"/> 
            <p className="text-xs"> Google 4.7</p>
          </div>
          <hr></hr>
          <div className="grid md:grid-cols-2 gap-10 py-4 mb-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-xl flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-s">4.7</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-gray-500 text-sm flex items-center my-3">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center mr-2" style={{ backgroundColor: getRandomColor() }}>
                    <span className="text-white">{testimonial.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>{testimonial.name}</div>
                </div>
                <div>{testimonial.feedback}</div>
              </div>
            ))}
          </div>
          <Link to="/reviews" className="text-blue-600 cursor-pointer mt-2 mb-6">View More</Link>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
