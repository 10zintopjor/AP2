import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import logo from "../images/3.png";
import { motion, AnimatePresence } from 'framer-motion';
import { links } from './Mylinks'; // Importing links from Mylinks

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 sm:hidden'>
      {/* Top Nav */}
      <div className="bg-customBlue w-full">
        <div className='flex flex-col'>
          <div className="flex flex-col  w-full max-w-5xl mx-auto justify-between items-center ">
            {/* Logo */}
            <div className="p-4"> {/* Added md:pl-4 for desktop padding */}
              <img src={logo} alt="logo" className="h-24 md:cursor-pointer" />
            </div>

            <div className='flex justify-between items-center w-full'>
            
          {/* Hamburger Menu for Mobile */}
          <div>
            <div className="w-full h-10 bg-customBlue text-white items-center"> {/* Increase z-index */}
              <button onClick={toggleMobileMenu}  className='ml-3'>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Contact Information */}
          <div className="px-4 py-2 flex flex-col md:items-start gap-2 text-l items-center">
              <div className="bg-red-700 text-white p-2 rounded flex flex-row items-center gap-2">
                <IoCallOutline />
                <p className='font-bold'>437-662-7338</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-customBlue z-50 flex flex-col justify-center text-white text-2xl"
          >
            <button className="absolute top-0 right-0 p-6 text-8xl" onClick={toggleMobileMenu}>
              &times;
            </button>
            <nav className="flex flex-col items-center">
              {/* Map over links array to create Link components */}
              {links.map((link) => (
                <Link key={link.name} to={link.link} className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
