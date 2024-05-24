import { FaStar } from "react-icons/fa";
import * as React from 'react';
import { FcGoogle } from "react-icons/fc";
import ReviewCard from "./ReviewCard";


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
    <>
      <div className='mb-20 flex flex-col items-center'>
        <h1 className='text-5xl font-bold m-10 text-center'>What Clients Are Saying About Us</h1>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-100 border-gray-200 w-full flex rounded justify-center flex-col items'>
            <div className="text-xl m-2 gap-2 flex flex-row items-center px-4 mx-6">
              <FcGoogle className="text-3xl"/> 
              <p className="text-xs"> Google 4.7</p>
            </div>
            <hr></hr>
            <div className="grid grid-cols-2 gap-4 mx-6">
              <div className="text-2xl flex flex-col p-4">
                <FcGoogle className="text-3xl" />
                <div className="flex items-center gap-2">
                  <p className="text-s">4.7</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <div className="text-gray-500 text-sm">
                  <p>150 reviews</p>
                </div>
              </div>
              <div className="flex items-center justify-end pr-4">
                <button className="bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-8 rounde mx-10">Write a Review</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-10 px-1 py-2'>
            {testimonials.map((testimonial, index) => (
              <ReviewCard 
              name={testimonial.name}
              review={testimonial.feedback}
              rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
