import React from 'react';
import { IoMailOpenOutline } from 'react-icons/io5';

const NewSletter = () => {
  return (
    <div className='bg-black py-20 w-full' data-aos="zoom-in">
      {/* Icon */}
      <div className='flex justify-center'>
        <IoMailOpenOutline className='text-white text-6xl' />
      </div>

      {/* Heading */}
      <h2 className='text-white text-3xl text-center mt-8 font-semibold'>
        Your Travel Journey starts here
      </h2>

      {/* Subtext */}
      <p className='text-gray-400 text-center mt-4'>
        Subscribe to our newsletter for the latest travel tips and deals
      </p>

      {/* Form */}
      <div className='mt-10 flex justify-center'>
        <form className='flex flex-col items-center w-full max-w-xl gap-4 px-4'>
          <input
            type='email'
            placeholder='Enter your email'
            className='p-3 rounded-md w-full bg-white text-black'
            required
          />
          <button
            type='submit'
            className='bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition-colors'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSletter;
