import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { links } from './Mylinks';
import logo from "../images/8.png";

const DesktopNav = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-customBlue hidden sm:block">
      {/* Top Nav */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-1">
        {/* Logo */}
        <div className="py-3 pl-20 flex-grow-0">
          <img src={logo} alt="logo" className="h-24 md:cursor-pointer" />
        </div>
        
        {/* Contact Information */}
        <div className='flex flex-col gap-6 mt-6 md:ml-auto pr-20'>
          <div className="flex flex-row gap-10 justify-end">
            <button className="bg-red-700 text-white py-2 px-2 flex flex-row items-center gap-2 rounded border border-gray-400 hover:bg-white hover:text-red-700">
              <IoCallOutline />
              <p className='font-sans'>437-662-7338</p>
            </button>
            <button className="bg-transparent text-white py-2 px-2 rounded border border-white hover:bg-white hover:text-customBlue">
              <p className="">Book Your Appointment</p>
            </button>
          </div>
          <div className=''>
            <div className="max-w-5xl w-full md:w-3/4 mx-auto flex flex-row gap-8 justify-center text-white text-xl border-b-2 border-transparent">
              {links.map((link) => (
                <div key={link.name} className="relative">
                  <div className="text-left cursor-pointer group text-bold">
                    <Link to={link.link} className={`text-l py-2 px-4 flex items-center justify-center ${location.pathname === link.link ? "text-white underline underline-offset-8 pb-1" : "text-white"} transition-all duration-300 relative hover:underline hover:underline-offset-8 hover:pb-4`}>
                      {link.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
