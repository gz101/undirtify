import React from 'react';
import ImgMud from '../images/mud.jpg';
import ImgRocks from '../images/rocks.jpg';

const Body = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImgMud} alt='hands' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Placeholder 1</h2>
          <p className='mb-2'>Placeholder text for the first placeholder.</p>
          <span>This is a secondary placeholder for the first placeholder.</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImgRocks} alt='rocks' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Placeholder 2</h2>
          <p className='mb-2'>Placeholder text for the second placeholder.</p>
          <span>This is a secondary placeholder for the second placeholder.</span>
        </div>
      </div>      
    </>
  )
}

export default Body
