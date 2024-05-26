import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { links } from './Mylinks';
import logo from "../images/3.png";

const DesktopNav = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-customBlue hidden sm:block">
      {/* Top Nav*/}
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="flex md:flex-row w-full max-w-7xl my-0 mx-auto justify-between items-center p-1">
          {/* Logo */}
          <div className="py-3 md:flex-grow-1"> {/* Set flex-grow-1 to make the logo occupy remaining space */}
            <img src={logo} alt="logo" className="h-24 md:cursor-pointer" />
          </div>

          {/* Business Hours and Location 
          <div className='sm:flex flex-col text-l hidden text-black'>
            <div className='mt-2 flex flex-row gap-5'>
              <div>
                <p className='font-bold w-full text-right'>Location</p>
                <p className='w-full text-right'>24 Daisy Avenue, M8V 2J2, Ontario</p>
              </div>
              <div className='text-3xl'>
                <GoLocation />
              </div>
            </div>
          </div>
          */}
      
          {/* Contact Information */}
          <div className="flex flex-row md:items-start gap-10">
            <button className="bg-red-700 text-white py-2 px-2  flex flex-row items-center gap-2 rounded border border-gray-400 hover:bg-white hover:text-red-700">
              <IoCallOutline />
              <p className='font-sans'>437-662-7338</p>
            </button>
            <button className="bg-transparent text-white py-2 px-2 rounded border border-white hover:bg-white hover:text-customBlue">
              <p className="">Book Your Appointment</p>
            </button>
          </div>



        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="relative bg-gray-100 w-full">
        <div className="max-w-5xl mx-auto flex flex-row gap-20 py-0 justify-center text-black font-semibold">
          {links.map((link) => (
            <div key={link.name} className="relative">
              <div className="text-left cursor-pointer group text-bold">
                <div className={`text-l py-1 px-4 flex items-center justify-center ${location.pathname === link.link ? "bg-red-700 text-white" : "hover:bg-red-700 hover:text-white"} transition-all duration-300 `}>
                  <Link to={link.link} className={location.pathname === link.link ? "text-white" : ""}>
                    {link.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className='bg-gray-900'></hr>
      </nav>
    </div>
  );
};

export default DesktopNav