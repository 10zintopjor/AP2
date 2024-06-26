import React from 'react';
import Logo from "../images/3.png";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import BusinessCard from './BusinessCard';

function Footer() {
  return (
    <div>
      <hr className="border-b-2 border-black w-full" />

      <div className='w-full sm:w-3/4 mx-auto mt-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-2'>
          <div className='flex flex-col items-center md:items-start justify-center'>
            <img className="p-4" src={Logo} alt="logo" style={{ width: '300px', height: 'auto' }} />
            <div className='p-4 text-center md:text-left'>
              <h3>Address</h3>
              <span>Level1, 123 Main St, Toronto, ON</span>
            </div>
            <div className='p-4 text-center md:text-left'>
              <h3>Contact</h3>
              <h3>437-662-7338</h3>
              <span>ariaplumbingca@gmail.com</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='block md:hidden lg:block'>
              <div className='w-full md:w-auto mb-5'>
                <BusinessCard />
              </div>
              <div className='flex text-3xl gap-10 p-2 items-center justify-center'>
                <FaFacebook />
                <FaInstagram />
                <FaTiktok />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className='flex flex-row sm:gap-2 gap-20 justify-center mb-4 md:items-start p-4 md:pl-4'>
            <div className='flex flex-col gap-2 md:gap-6 md:p-10'>
              <p>Services</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQs</p>
              <p>Blog</p>
            </div>
            <div className='flex flex-col gap-2 md:gap-6 md:p-10'>
              <p>Testimonials</p>
              <p>Gallery</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-b-2 border-black w-full" />

      <div className="w-full sm:w-3/4 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between mx-4 md:mx-0 md:my-2 my-4">
          <p className="text-center md:text-left">© 2024 Plumbing Company. All rights reserved.</p>
          <div className="flex flex-col md:flex-row md:gap-10 gap-4 mt-4 md:mt-0">
            <a href="#" className="text-center md:text-left">Privacy Policy</a>
            <a href="#" className="text-center md:text-left">Terms of Service</a>
            <a href="#" className="text-center md:text-left">Cookie Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
