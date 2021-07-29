import React from 'react';
import ImgMud from '../images/mud.jpg';
import ImgRocks from '../images/rocks.jpg';

const Body = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImgMud} alt='hands' className='h-4/5 rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Geological Borehole Logging</h2>
          <p className='mb-2 max-w-lg'>
            Boreholes are traditionally logged by enigneers and geologists on site using a clipboard, 
            paper, and pen. Rain, snow, sun (or handwriting) can often impact the legibility of the 
            borehole logs.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImgRocks} alt='rocks' className='h-4/5 rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Digital Borehole Logging</h2>
          <p className='mb-2 max-w-lg'>
            unDirtify provides an alternative solution to the problem of borehole log legibility. Boreholes 
            can now be logged without any medium that would be affected by the legibility issues above.
          </p>
        </div>
      </div>      
    </>
  )
}

export default Body
