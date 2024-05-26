import React from 'react';

function CommercialServices() {
  return (
    <>
      <div className='w-full md:w-3/4 mx-auto p-6 sm:p-20'>
        <h1 className='text-3xl sm:text-5xl text-left'>Commercial Plumbing Services</h1>
        <h3 className='text-base sm:text-xl text-left mt-4'>Professional plumbing solutions for businesses.</h3>
        <p className='mt-4'>
          Our commercial plumbing services are designed to keep your business running smoothly. From routine maintenance to emergency repairs, our team is equipped to handle any plumbing issue your business may face.
        </p>
        <ul className='list-disc mt-4 ml-6'>
          <li>Plumbing System Maintenance</li>
          <li>Pipe Installation and Repair</li>
          <li>Backflow Prevention</li>
          <li>Commercial Water Heaters</li>
          <li>Restroom and Facility Plumbing</li>
        </ul>
      </div>
    </>
  );
}

export default CommercialServices;
