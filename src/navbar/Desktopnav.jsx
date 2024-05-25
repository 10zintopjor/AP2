import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { links } from './Mylinks';
import logo from "../images/logo.png";

const DesktopNav = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-gray-100 hidden sm:block">
      {/* Top Nav*/}
      <div className="w-full left-0 flex items-center">
        <div className="flex flex-col md:flex-row w-full max-w-5xl my-0 mx-auto justify-between items-center p-1">
          {/* Business Hours and Location */}
          <div className='sm:flex flex-col text-l hidden text-black'>
            <div className="flex flex-row items-center justify-end gap-5">
              <div>
                <p className="font-bold w-full text-right">Hours</p>
                <p className="w-full text-right">Mon-Fri</p>
                <p className="w-full text-right">8AM to 4PM</p>
              </div>
              <div className='text-3xl'><CiClock2 /></div>
            </div>
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
          
          {/* Logo */}
          <div className="px-2 py-0">
            <img src={logo} alt="logo" className="h-24 md:cursor-pointer" />
          </div>

          {/* Contact Information */}
          <div className="px-4 py-2 flex flex-col md:items-start gap-2 text-xl">
            <div className="bg-black text-white py-3 px-5 rounded flex flex-row items-center gap-2">
              <IoCallOutline />
              <p className='font-bold'>437-662-7338</p>
            </div>
            <div className="bg-black text-white py-3 px-5 rounded">
              <p className="font-bold">Book Your Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="relative bg-customBlue w-full">
        <div className="max-w-5xl mx-auto flex flex-row gap-20 py-0 justify-center text-white">
          {links.map((link) => (
            <div key={link.name} className="relative">
              <div className="text-left cursor-pointer group text-bold">
                <div className={`text-l py-1 px-4 flex items-center justify-center ${location.pathname === link.link ? "bg-red-700" : "hover:bg-red-700"} transition-all duration-300 `}>
                  <Link to={link.link} className={location.pathname === link.link ? "text-white" : ""}>
                    {link.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DesktopNav;
