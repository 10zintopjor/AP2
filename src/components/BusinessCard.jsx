import React from 'react'

function BusinessCard() {
  return (
          <div className="p-4 bg-black rounded-lg text-white text-center">
      <h2 className='text-2xl font-bold mb-2'>Aria Plumbing</h2>
      <div className="border-b-2 border-white w-22 mx-auto mb-2"></div>
      <h4 className="text-lg font-semibold mb-2">Your Family Plumber</h4>
      <p className="text-sm mb-2">Professional Plumbing & Drain Services</p>
      <p className="text-xs">Commercial & Residential</p>
      <p className="text-xs mt-4">* TAPS • FAUCETS • SINKS • TOILETS • PIPE REPLACEMENT</p>
      <p className="text-xs">* PLUGGED DRAINS • BACKED UP SEWERS • HOT WATER</p>
      <p className="text-xs">* WATER PROOFING • SUM PUMP • BACKFLOW PREVENTER</p>
      <p className="text-sm mt-2">
        <a href="https://www.ariaplumbing.ca" target="_blank" rel="noopener noreferrer" className="text-blue-400">www.ariaplumbing.ca</a>
      </p>
    </div>
  )
}

export default BusinessCard
