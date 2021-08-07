import React from 'react';

const Form = () => {
  return (
    <div>
      <form action='' className='md:w-1/2 mx-auto'>
        <div className='shadow-xl'>
          <div className='flex justify center items-center bg-yellow-500 rounded-t-lg border-b border-yellow-600'>
            <label for='project-id' className='w-24 text-right mr-8 text-yellow-100'>
              Project ID
            </label>
            <input type='text' id='project-id' name='project-id' className='flex-1 p-4 pl-0 bg-transparent outline-none text-white'></input>
          </div>

          <div className='flex justify center items-center bg-yellow-500 border-b border-yellow-600'>
            <label for='project-title' className='w-24 text-right mr-8 text-yellow-100'>
              Project Title
            </label>
            <input type='text' id='project-title' name='project-title' className='flex-1 p-4 pl-0 bg-transparent outline-none text-white'></input>
          </div>

          <div className='flex justify center items-center bg-yellow-500 border-b border-yellow-600'>
            <label for='project-engineer' className='w-24 text-right mr-8 text-yellow-100'>
              Engineer
            </label>
            <input type='text' id='project-engineer' name='project-engineer' className='flex-1 p-4 pl-0 bg-transparent outline-none text-white'></input>
          </div>

          <div className='flex justify center items-center bg-yellow-500 rounded-b-lg mb-10'>
            <label for='project-address' className='w-24 text-right mr-8 text-yellow-100'>
              Address
            </label>
            <input type='text' id='project-address' name='project-address' className='flex-1 p-4 pl-0 bg-transparent outline-none text-white'></input>
          </div>

        </div>   
        <button className='block w-full rounded bg-yellow-500 py-3 text-white font-bold shadow hover:bg-yellow-300'>Submit</button>
      </form>
    </div>
  )
}

export default Form;
