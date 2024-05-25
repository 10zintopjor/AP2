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
    <div className='items-center'>
         <div className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white h-max" style={{ backgroundImage: `url(${hero_img})`}}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="z-10 sm:p-40 p-10 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold">Reliable Plumbing Services in the GTA</h1>
          <h3 className="text-xl mt-8">We provide high-quality plumbing services for residential and commercial clients in the Greater Toronto Area</h3>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-10">
            <div className='flex flex-col sm:flex-row justify-center sm:justify-start p-2 sm:p-4 gap-4 sm:gap-10'>
                  <button className='bg-transparent text-white text-base sm:text-3xl p-3 sm:p-5 border border-white hover:bg-white hover:text-customBlue transition duration-300'>Schedule</button>
                  <button className='bg-transparent text-white text-base sm:text-3xl p-3 sm:p-5 border border-white hover:bg-white hover:text-customBlue transition duration-300'>Learn More</button>
                </div>
          </div>
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
