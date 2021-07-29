import React from 'react';

const Form = () => {
  return (
    <div>
      <form action='' className='md:w-1/2 mx-auto'>
        <div className='shadow-xl'>
          <div className='flex justify center items-center bg-purple-400 rounded-t-lg border-b border-purple-500'>
            <label for='project-id' className='w-24 text-right mr-8 text-purple-200'>
              Project ID
            </label>
            <input type='text' id='project-id' name='project-id' className='flex-1 p-4 pl-0 bg-transparent outline-none text-white'></input>
          </div>

          <div className='flex justify center items-center bg-purple-400 rounded-b-lg mb-10'>
            <label for='project-title' className='w-24 text-right mr-8 text-purple-200'>
              Project Title
            </label>
            <input type='text' id='project-title' name='project-title' className='flex-1 p-4 pl-0 bg-transparent outline-none text-white'></input>
          </div>
        </div>

        <button className='block w-full rounded bg-pink-400 py-3 text-white font-bold shadow hover:bg-pink-200'>Submit</button>
      </form>
    </div>
  )
}

export default Form;
