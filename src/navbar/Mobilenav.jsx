import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import logo from "../images/logo.png";
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Nav */}
      <div className="bg-gray-100 w-full fixed top-0 left-0 z-50">
        <div className='flex flex-col'>
        <div className="flex flex-row md:flex-row w-full max-w-5xl mx-auto justify-between items-center p-2">
          {/* Logo */}
          <div className="px-2 py-2 md:pl-4"> {/* Added md:pl-4 for desktop padding */}
            <img src={logo} alt="logo" className="h-24 md:cursor-pointer" />
          </div>

          {/* Contact Information */}
          <div className="px-4 py-2 flex flex-col md:items-start gap-2 text-l">
            <div className="bg-black text-white p-2 rounded flex flex-row items-center gap-2">
              <IoCallOutline />
              <p className='font-bold'>437-662-7338</p>
            </div>
          </div>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div>
        <div className="w-full h-10 bg-customBlue flex justify-center text-white"> {/* Increase z-index */}
          <button onClick={toggleMobileMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
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
              <Link to="/" className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/residential" className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>Residential</Link>
              <Link to="/commercial" className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>Commercial</Link>
              <Link to="/services" className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>More Services</Link>
              <Link to="/contact" className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>Contact Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
