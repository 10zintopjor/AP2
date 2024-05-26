import React from 'react';
import { MdOutlinePlumbing } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GrEmergency } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";

function Services() {
  return (
    <div className='flex flex-col items-center my-16 justify-center'>
      {/* First Component */}
      <div className="sm:w-3/4 w-full">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center">
          Professional Plumbing Services in Greater Toronto Area
        </h2>
      <div className='flex flex-col sm:flex-row mt-10 justify-center gap-10 p-2'>
        <div className='flex flex-col items-center text-center'>
          <div className='text-4xl'>
            <MdOutlinePlumbing />
          </div>
          <h2 className='mt-5 text-2xl'>Leak Repairs, Installations and Maintenance</h2>
          <p className='mt-5 text-sm'>
            Our team of expert plumbers provides a wide range of services including leak repairs, installations, and maintenance.
          </p>
          <button className="px-8 py-4 rounded-full bg-transparent text-black flex items-center mt-4">
            Learn More <IoIosArrowForward className="ml-2" />
          </button>
        </div>
        <div className='flex flex-col items-center text-center'>
          <div className='text-4xl'>
            <GrEmergency />
          </div>
          <h2 className='mt-5 text-2xl'>24/7 Emergency Plumbing Services</h2>
          <p className='mt-5 text-sm'>
            We offer 24/7 emergency plumbing services to ensure that you're covered in case of any plumbing emergencies.
          </p>
          <button className="px-8 py-4 rounded-full bg-transparent text-black flex items-center mt-4">
            Contact <IoIosArrowForward className="ml-2" />
          </button>
        </div>
        <div className='flex flex-col items-center text-center'>
          <div className='text-4xl'>
            <GiAutoRepair />
          </div>
          <h2 className='mt-5 text-2xl'>Professional Plumbing Solutions for Residential and Commercial Properties</h2>
          <p className='mt-5 text-sm'>
            Our experienced plumbers provide reliable and efficient plumbing solutions for both residential and commercial properties.
          </p>
          <button className="px-8 py-4 rounded-full bg-transparent text-black flex items-center mt-4">
            Get Started <IoIosArrowForward className="ml-2" />
          </button>
        </div>
      </div>
      </div>


      {/* Second Component */}
      <div className='flex flex-col sm:flex-row justify-center items-center mt-20 w-full p-4'>
        <div className='flex flex-col w-full sm:w-3/4'>
          <p>Reliable</p>
          <h2 className='text-3xl sm:text-5xl font-semibold mt-5'>
            Fast and Efficient Plumbing Services in Toronto
          </h2>
          <p className='mt-5'>
            We provide emergency plumbing services 24/7. Our team of experienced plumbers is always ready to tackle any plumbing issue, ensuring prompt and reliable solutions for both residential and commercial properties in the Greater Toronto Area.
          </p>
          <div className='flex flex-col sm:flex-row mt-10 gap-4 sm:gap-0'>
            <button className="px-8 py-4 text-xl rounded-lg border border-black bg-transparent text-black hover:bg-gray-400 hover:text-white transition sm:mr-5">
              Learn More
            </button>
            <button className="px-8 py-4 text-xl rounded-lg border border-black bg-transparent text-black hover:bg-gray-400 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
