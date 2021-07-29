import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-between items-center h-16 bg-black text-white p-4'>
      <div className='md:block sm:hidden'>
        <Link className='p-4' to='/'>Home</Link>
        <Link className='p-4' to='/start'>Start</Link>
        <Link className='p-4' to='/about'>About</Link>
        <Link className='p-4' to='/contact'>Contact</Link>
      </div>
      <p>Copyright &copy; 2021 GC All rights reserved.</p>
    </div>
  )
}

export default Footer
