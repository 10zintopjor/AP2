import React from 'react';

function Reviews() {
  return (
    <>
      <div className='w-full md:w-3/4 mx-auto p-6 sm:p-20'>
        <h1 className='text-3xl sm:text-5xl text-left'>Customer Reviews</h1>
        <h3 className='text-base sm:text-xl text-left mt-4'>See what our customers are saying about us.</h3>
        <div className='mt-4'>
          <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <h3 className='text-xl font-bold'>John Doe</h3>
            <p className='text-base mt-2'>"Excellent service! The team was professional and efficient. Highly recommend."</p>
            <p className='text-sm mt-2 text-gray-500'>- January 15, 2024</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <h3 className='text-xl font-bold'>Jane Smith</h3>
            <p className='text-base mt-2'>"Great experience from start to finish. The plumbers were knowledgeable and fixed the issue quickly."</p>
            <p className='text-sm mt-2 text-gray-500'>- February 10, 2024</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
            <h3 className='text-xl font-bold'>Emily Johnson</h3>
            <p className='text-base mt-2'>"Very satisfied with the service. They were on time and did a fantastic job. Will use them again."</p>
            <p className='text-sm mt-2 text-gray-500'>- March 22, 2024</p>
          </div>
          {/* Add more reviews as needed */}
        </div>
      </div>
    </>
  );
}

export default Reviews;
