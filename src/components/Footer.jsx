import React from 'react';
import Logo from "../images/logo.png";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import BusinessCard from './BusinessCard';

function Footer() {
  return (
    <>
      <hr className="border-b-2 border-black" />

      <div className='grid grid-cols-1 sm:grid-cols-3 ml-4 sm:mx-40 m-5 gap-6'>
        <div className='flex flex-col'>
          <img className="p-4" src={Logo} alt="logo" style={{ width: '180px', height: 'auto' }} />
          <div className='p-4'>
            <h3>Address</h3>
            <span>Level1, 123 Main St, Toronto, ON</span>
          </div>
          <div className='p-4'>
            <h3>Contact</h3>
            <h3>437-662-7338</h3>
            <span>ariaplumbingca@gmail.com</span>
          </div>
          <div className='flex text-3xl gap-10 p-4'>
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaTwitter />
          </div>
        </div>
        
        
        
        <div className='flex flex-col sm:flex-row gap-6 justify-center mb-4 sm:items-center items-start p-4'>
          <div className='flex flex-col gap-2 sm:gap-6 sm:p-10'>
            <p>Services</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Blog</p>
          </div>
          <div className='flex flex-col gap-2 sm:gap-6 sm:p-10'>
            <p>Testimonials</p>
            <p>Gallery</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className='flex justify-center items-center px-6'>
          <div className='w-full sm:w-auto'>
            <BusinessCard />
          </div>
        </div>
      </div>
      

      <hr className="border-b-2 border-black" />
      <div className="flex flex-col sm:flex-row sm:justify-between mx-4 sm:mx-40 sm:my-2 my-4">
        <p className="text-center sm:text-left">© 2024 Plumbing Company. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-center sm:text-left">Privacy Policy</a>
          <a href="#" className="text-center sm:text-left">Terms of Service</a>
          <a href="#" className="text-center sm:text-left">Cookie Settings</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
