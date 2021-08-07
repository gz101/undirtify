import React from 'react';
import Form from '../components/Form';

const Log = () => {
  return (
    <div 
      className='min-h-screen bg-gradient-to-r from-yellow-700'
    >
      <h1 
        className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-yellow-200 mb-14 p-4'
      >
        Create Log
      </h1>
      <Form />
    </div>
  )
}

export default Log;
