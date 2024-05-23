import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import React from 'react';

function Contact() {
  return (
    <>
      <div className='relative p-4 sm:p-20'>
        <div className='absolute inset-0 bg-gray-600 opacity-50'></div>
        <div className='flex flex-col w-full my-4 sm:my-10'>
          <div className='ml-4 sm:ml-20'>
            <div className='flex flex-col'>
              <h1 className='text-3xl sm:text-5xl text-left p-2 sm:p-4'>Expert Plumbing Services in Toronto</h1>
              <h3 className='text-base sm:text-xl p-2 sm:p-4'>Trust our experienced plumbers for all your residential and commercial plumbing needs</h3>
              <div className='flex flex-row justify-start p-2 sm:p-4 gap-4 sm:gap-10'>
                <button className='bg-black text-white rounded text-base sm:text-3xl p-3 sm:p-5'>Schedule</button>
                <button className='bg-transparent text-black text-base sm:text-3xl p-3 sm:p-5 border border-black'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='ml-4 sm:mx-40 sm:mt-20 mt-10'>
            <h1 className='text-3xl sm:text-5xl text-left p-2 sm:p-4'>Contact Information</h1>
            <h3 className='text-base sm:text-xl text-left p-2 sm:p-4'>We're here to help with all your plumbing needs.</h3>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-20'>
        <div>
          <div className='ml-4 sm:ml-20'>
            <div className='flex flex-col'>
              <div className='flex items-start flex-col p-2 sm:p-4'> {/* Added items-start class */}
                <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><MdEmail /></div>
                <h3 className='text-base sm:text-lg'>Email</h3>
                <h3 className='text-base sm:text-lg'>Send us a message today!</h3>
                <span>ariaplumbingca@gmail.com</span>
              </div>
              <div className='flex items-start flex-col p-2 sm:p-4'> {/* Added items-start class */}
                <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><FaPhoneAlt /></div>
                <h3 className='text-base sm:text-lg'>Phone</h3>
                <h3 className='text-base sm:text-lg'>Call us now for assistance.</h3>
                <span>123-456-7890</span>
              </div>
              <div className='flex items-start flex-col p-2 sm:p-4'> {/* Added items-start class */}
                <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'></div>
                <h3 className='text-base sm:text-lg'>Office</h3>
                <h3 className='text-base sm:text-lg'>123 Main St, Toronto, ON M1M 1M1</h3>
                <span><a href="https://www.google.com/maps">Get Directions</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:pr-14 sm:m-0 m-4'>
          {/* Put your map component here */}
          <iframe
            width="100%"
            height="500"
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
