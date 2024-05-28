import hero_img from "../images/hero_img.jpeg";
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";


const VerticalLine = ({ height = '100px', color = 'white', width = '2px', margin = '0 10px' }) => {
  return (
    <div 
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        margin: margin
      }}
    />
  );
}

function Hero() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='items-start'>
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-cover bg-center bg-no-repeat text-white h-max" style={{ backgroundImage: `url(${hero_img})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Proudly Plumbing section */}
      <div className="z-10 p-10 lg:p-40 text-center max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold">Proudly Plumbing</h1>
        <h3 className="text-xl mt-8">We provide high-quality plumbing services for residential and commercial clients in the Greater Toronto Area</h3>
        {/* Buttons */}
        <div className="mt-8">
          <button className="bg-transparent text-white text-lg sm:text-2xl py-3 px-6 border border-white rounded-lg mr-4 hover:bg-white hover:text-customBlue transition duration-300">Schedule</button>
          <button className="bg-transparent text-white text-lg sm:text-2xl py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-customBlue transition duration-300">Learn More</button>
        </div>
      </div>
      {/* Form section */}
      <div className="z-10 lg:p-10 rounded  text-center max-w-4xl bg-gray-500 bg-opacity-75 border border-white">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        {/* Form fields */}
        <form className="flex flex-col space-y-4 ">
          <input type="text" placeholder="Your Name" className="rounded-lg py-3 px-4 focus:outline-none" />
          <input type="tel" placeholder="Phone Number" className="rounded-lg py-3 px-4 focus:outline-none" />
          <input type="text" placeholder="Location" className="rounded-lg py-3 px-4 focus:outline-none" />
          <textarea placeholder="Describe your issue..." rows="4" className="rounded-lg py-3 px-4 focus:outline-none"></textarea>
          <button type="submit" className="bg-customBlue py-3 px-6 rounded-lg hover:bg-white hover:text-customBlue transition duration-300">Submit</button>
        </form>
      </div>
    </div>


   <div className='flex sm:flex-row flex-col bg-customBlue sm:h-36 min-h-10 border-solid-gray-100 text-white items-center justify-center'>
      <div className='sm:text-right text-center sm:mr-20 text-2xl sm:p-1 p-8 flex flex-row items-center gap-6'>
        <p>Proudly Serving GTA</p>
          <IoLocationOutline className="text-4xl"/>

      </div>
      {isMobile ? ( // Check if screen width is less than 640px (mobile)
        <hr className="sm:hidden block mx-4 border-gray-100 h-0.5 w-full" /> // Render horizontal line for mobile
      ) : (
        <VerticalLine className="sm:block hidden" /> // Render vertical line for desktop
      )}
      <div className='sm:text-left flex flex-row text-center sm:ml-20 text-2xl items-center sm:p-1 p-8 gap-6'>
        <BsTelephone className="text-4xl" />
        <p>Emergency Plumbing? </p>
      </div>
    </div>
    </div>
  );
}




export default Hero;
