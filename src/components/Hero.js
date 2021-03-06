import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div 
      className='bg-gradient-to-r from-green-300 to-yellow-900 h-screen flex flex-col justify-center items-center'
    >
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
        UNDIRTIFY
      </h1>
      <Link 
        className='py-6 px-10 bg-yellow-400 rounded-full text-3xl hover:bg-yellow-200 transition duration-300 ease-in-out flex items-center animate-bounce'
        to='/start'
      >
        Start Logging
        <svg 
          className="w-6 h-6 ml-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
          />
        </svg>
      </Link>
      <span className='my-8 font-extrabold'>Geological borehole recording made clean</span>
    </div>
  )
}

export default Hero
