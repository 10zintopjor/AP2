import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";

import React from 'react';

function Contact() {
  return (
    <>
      <div className='relative'>
        <div className='w-full bg-customBlue text-white py-8 sm:py-10'>
          <div className='flex flex-col w-full my-4 sm:my-10'>
            <div className='sm:ml-40'>
              <div className='flex flex-col'>
                <h1 className='text-3xl sm:text-5xl text-left p-2 sm:p-4'>Expert Plumbing Services in Toronto</h1>
                <h3 className='text-base sm:text-xl p-2 sm:p-4'>Trust our experienced plumbers for all your residential and commercial plumbing needs</h3>
                <div className='flex flex-col sm:flex-row justify-center sm:justify-start p-2 sm:p-4 gap-4 sm:gap-10'>
                  <button className='bg-black text-white rounded text-base sm:text-3xl p-3 sm:p-5'>Schedule</button>
                  <button className='bg-transparent text-white text-base sm:text-3xl p-3 sm:p-5 border border-white'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-4 sm:ml-20 p-6 sm:p-20'>
        <h1 className='text-3xl sm:text-5xl text-left'>Contact Information</h1>
        <h3 className='text-base sm:text-xl text-left mt-4'>We're here to help with all your plumbing needs.</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 m-8 gap-4'>
          <div className='flex flex-col bg-white rounded-lg p-4'>
            <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><MdEmail /></div>
            <h3 className='text-base sm:text-lg'>Email</h3>
            <h3 className='text-base sm:text-lg'>Send us a message today!</h3>
            <span>ariaplumbingca@gmail.com</span>
          </div>
          <div className='flex flex-col bg-white rounded-lg p-4'>
            <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><FaPhoneAlt /></div>
            <h3 className='text-base sm:text-lg'>Phone</h3>
            <h3 className='text-base sm:text-lg'>Call us now for assistance.</h3>
            <span>123-456-7890</span>
          </div>
          <div className='flex flex-col bg-white rounded-lg p-4'>
            <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><FaLocationDot /></div>
            <h3 className='text-base sm:text-lg'>Office</h3>
            <h3 className='text-base sm:text-lg'>123 Main St, Toronto, ON M1M 1M1</h3>
            <span><a href="https://www.google.com/maps">Get Directions</a></span>
          </div>
        </div>
        <div className='sm:pr-14 sm:m-0 m-4'>
          <iframe
            width="100%"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1971853082517!2d-79.4122510850296!3d43.698276979121925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cbbe6b9c29a9%3A0x8388f105ee5aa9d0!2s123%20Main%20St%2C%20Toronto%2C%20ON%20M1M%201M1%2C%20Canada!5e0!3m2!1sen!2sus!4v1620625074885!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
