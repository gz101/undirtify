import React from 'react';

const ContactForm = () => {
  return (
    <div className='flex w-full min-h-screen justify-center items-center'>
      <div 
        className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-yellow-500 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white sm:p-12'
      >
        <div className='flex flex-col space-y-8 justify-between'>
          <div>
            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
            <p className='pt-2 text-sm max-w-md'>
              Questions, feedback, comments? I'd love to hear from you on how 
              I can improve your user experience! Please fill out the form below 
              and your query will come straight to my personal inbox.
            </p>
          </div>
          <div className='flex flex-col space-y-6'>
            <div className='inline-flex space-x-2 items-center'>
              <svg 
                class="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                >
                </path>
              </svg>
              <span>Fill out the form!</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
              <a href='http://gabrielchiong.me/' target='_blank' rel='noopener noreferrer'>
                <svg 
                  class="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  >
                  </path>
                </svg>
              </a>
              <span>My Personal Website</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
              <a 
                href='https://goo.gl/maps/oSQJHyVTm8t9DuJu6' 
                target='_blank' 
                rel='noopener noreferrer'>
                <svg 
                  class="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  >
                  </path>
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                  </path>
                </svg>
              </a>
              <span>Melbourne, Australia</span>
            </div>
          </div>
        </div>
        <div 
          className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'
        >
          <form method='post' action='mailto:ga.work.au@gmail.com' className='flex flex-col space-y-4'>
            <div>
              <label for='' className='text-sm'>Your Name</label>
              <input 
                name='name'
                type='text' 
                placeholder='Your Name' 
                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-yellow-300' 
              />
            </div>
            <div>
              <label for='' className='text-sm'>Email Address</label>
              <input 
                name='email'
                type='email' 
                placeholder='Email Address' 
                className='ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-yellow-300' 
              />
            </div>
            <div>
              <label for='' className='text-sm'>Message</label>
              <textarea 
                name='message'
                type='email' 
                placeholder='Message'
                rows='4'
                className='ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-yellow-300' 
              />
            </div>
            <button className='inline-block self-end bg-yellow-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
