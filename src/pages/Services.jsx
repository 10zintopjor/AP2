import React from 'react';
import NavBar from '../navbar/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import tapImg from '../images/services/tap.png';
import faucetImg from '../images/services/faucet.png';
import basinImg from '../images/services/basin.png';
import toiletImg from '../images/services/toilet.png';
import brokenImg from '../images/services/broken.png';
import drainImg from '../images/services/drain.png';
import sewerImg from '../images/services/sewer.png';
import hotWaterImg from '../images/services/hot_water.png';
import waterProofingImg from '../images/services/water_proofing.png';
import sumpPumpImg from '../images/services/sum_pump.png';
import backflowImg from '../images/services/backflow.png';

const icons = {
  "TAPS": tapImg,
  "FAUCETS": faucetImg,
  "SINKS": basinImg,
  "TOILETS": toiletImg,
  "PIPE REPLACEMENT": brokenImg,
  "PLUGGED DRAINS": drainImg,
  "BACKED UP SEWERS": sewerImg,
  "HOT WATER": hotWaterImg,
  "WATER PROOFING": waterProofingImg,
  "SUM PUMP": sumpPumpImg,
  "BACKFLOW PREVENTER": backflowImg
};

const services = [
  "TAPS",
  "FAUCETS",
  "SINKS",
  "TOILETS",
  "PIPE REPLACEMENT",
  "PLUGGED DRAINS",
  "BACKED UP SEWERS",
  "HOT WATER",
  "WATER PROOFING",
  "SUM PUMP",
  "BACKFLOW PREVENTER"
];

function Services() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 mt-16 sm:mt-8">
          <h1 className="text-5xl font-bold text-center mb-8">Our Plumbing Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service} icon={icons[service]} />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-blue-400 py-10 md:py-20'>
  <div className='flex flex-col md:flex-row w-full justify-evenly items-center text-center md:text-left'>
    <div className='flex flex-col text-2xl md:text-3xl m-10 md:m-20 text-white'>
      <p className='m-2'>NEED PLUMBING SERVICE?</p>
      <p className='m-2'>CONTACT THE EXPERTS AT ARIA PLUMBING</p>
      <p className='m-2'>CALL US AT 437-662-7338</p>
    </div>
    <div className='flex items-center text-2xl md:text-3xl m-5 md:m-2'>
      <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border border-white hover:bg-gray-500 transition">
        SCHEDULE SERVICE
      </button>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Services;
