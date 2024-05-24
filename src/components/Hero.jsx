import React from 'react';
import hero_img from "../images/hero_img.jpeg";

function Hero() {
  return (
    <div className='items-center'>
          <div className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white h-max" style={{ backgroundImage: `url(${hero_img})`}}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="z-10 sm:p-32 p-10 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold">Reliable Plumbing Services in the GTA</h1>
          <h3 className="text-xl mt-8">We provide high-quality plumbing services for residential and commercial clients in the Greater Toronto Area</h3>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-10">
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-500 transition">Learn More</button>
            <button className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-500 transition">Contact Us</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row sm:m-10 my-12 mx-2 items-center'>
        <div className='flex flex-col p-2 md:w-1/2 w-full'>
          <p>Reliable</p>
          <h2 className='text-4xl mt-5'>
            Fast and Efficient Plumbing Services in Toronto
          </h2>
          <p className='mt-5 sm:mr-10'>
            We provide emergency plumbing services 24/7. Our team of experienced plumbers is always ready to tackle any plumbing issue, ensuring prompt and reliable solutions for both residential and commercial properties in the Greater Toronto Area.
          </p>
          <div className='flex flex-row md:flex-row mt-10'>
            <button className="px-8 py-4 text-xl rounded-lg border border-black bg-transparent text-black hover:bg-gray-500 transition mr-5 md:mr-10 mb-4 md:mb-0">Learn More</button>
            <button className="px-8 py-4 text-xl rounded-lg border border-black bg-transparent text-black hover:bg-gray-500 transition mr-5 md:mr-10 mb-4 md:mb-0">Contact Us</button>
          </div>
        </div>
        <div className='sm:p-10 p-2 md:w-1/2 w-full'>
          <img src={hero_img} alt="logo" className='w-full h-auto max-h-screen' /> {/* Ensuring the image is responsive */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
