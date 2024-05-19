import React, { useState } from 'react';
import { CiClock2 } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { links } from './Mylinks';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  return (
    <section>
      {/* Top Nav*/}
      
      <div className="bg-gray-100 w-full fixed top-0 left-0 z-50 h-40 flex items-center">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto justify-between items-center p-2">
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
          <div className="px-2 py-2">
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
      <nav className="bg-customBlue w-full mt-40">
        <div className="max-w-5xl mx-auto flex flex-row gap-10 py-4">
          {links.map((link) => (
            <div key={link.name} className="relative">
              <div className="text-left cursor-pointer group">
                <h1
                  className="flex justify-between items-center hover:text-gray-400"
                  onClick={() => toggleMenu(link.name)}
                >
                  {link.name}
                  <span className="text-xl md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </h1>
                {activeMenu === link.name && link.submenu && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2">
                    <div className="p-5 grid grid-cols-2 gap-4">
                      {link.sublinks.map((sublink) => (
                        <div key={sublink.name} className="w-full">
                          <li className="text-gray-600 transition duration-300 ease-in-out hover:text-gray-400">
                            <Link to={sublink.link} className="text-base leading-normal">
                              {sublink.name}
                            </Link>
                          </li>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
