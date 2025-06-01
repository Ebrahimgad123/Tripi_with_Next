import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div className='w-full max-w-screen-md mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-3 bg-white p-6 rounded-2xl mb-6'>
        
        {/* Location */}
        <div className='flex flex-col'>
          <label className='mb-1 text-sm text-gray-700 font-medium'>Location</label>
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt className='text-gray-600' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='p-2 rounded-md  w-full'
            />
          </div>
        </div>

        {/* Start Date */}
        <div className='flex flex-col'>
          <label className='mb-1 text-sm text-gray-700 font-medium'>Start Date</label>
          <input
            type='date'
            className='p-2 rounded-md  w-full'
          />
        </div>

        {/* End Date */}
        <div className='flex flex-col'>
          <label className='mb-1 text-sm text-gray-700 font-medium'>End Date</label>
          <input
            type='date'
            className='p-2 rounded-md  w-full'
          />
        </div>

        {/* Guests */}
        <div className='flex flex-col'>
          <label className='mb-1 text-sm text-gray-700 font-medium'>Guests</label>
          <input
            type='number'
            placeholder='Guests'
            className='p-2 rounded-md  w-full'
          />
        </div>

      </div>
    </div>
  );
};

export default SearchBox;
