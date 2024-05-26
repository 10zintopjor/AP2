import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../navbar/Navbar';

function ResidentialServices() {
  return (
    <>
      <NavBar />
      <div className='w-full md:w-3/4 mx-auto p-6 sm:p-20'>
        <h1 className='text-3xl sm:text-5xl text-left'>Residential Plumbing Services</h1>
        <h3 className='text-base sm:text-xl text-left mt-4'>Expert plumbing solutions for your home.</h3>
        <p className='mt-4'>
          We offer a wide range of residential plumbing services to meet all your needs. Whether it's a leaky faucet, a clogged drain, or a complete bathroom remodel, our experienced plumbers are here to help.
        </p>
        <ul className='list-disc mt-4 ml-6'>
          <li>Leak Detection and Repair</li>
          <li>Drain Cleaning</li>
          <li>Water Heater Installation and Repair</li>
          <li>Fixture Installation and Repair</li>
          <li>Bathroom and Kitchen Remodeling</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default ResidentialServices;
