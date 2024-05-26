import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { links } from './Mylinks';
import logo from "../images/3.png";

const DesktopNav = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-customBlue hidden sm:block">
      {/* Top Nav */}
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between p-1">
          {/* Logo */}
          <div className="py-3 md:flex-grow-1">
            <img src={logo} alt="logo" className="h-24 md:cursor-pointer" />
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-row md:items-start gap-10">
            <button className="bg-red-700 text-white py-2 px-2 flex flex-row items-center gap-2 rounded border border-gray-400 hover:bg-white hover:text-red-700">
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
        <div className="max-w-5xl w-full md:w-3/4 mx-auto flex flex-row gap-20 py-0 justify-center text-black font-semibold">
          {links.map((link) => (
            <div key={link.name} className="relative">
              <div className="text-left cursor-pointer group text-bold">
                <div className={`text-l py-1 px-4 flex items-center justify-center ${location.pathname === link.link ? "bg-red-700 text-white" : "hover:bg-red-700 hover:text-white"} transition-all duration-300`}>
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

export default DesktopNav;
