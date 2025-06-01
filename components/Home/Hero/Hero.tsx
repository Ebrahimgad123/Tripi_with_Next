import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'


const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      {/* overlay */}
      <div className='absolute inset-0 bg-gray-800 opacity-70' />

      <video
        className='w-full h-full object-cover'
        src='/images/vid.mp4'
        autoPlay
        loop
        muted
      />

      {/* content */}
      <div className='absolute z-[100] w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='flex items-center justify-center flex-col w-full h-full px-4'>
          {/* Title */}
          <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold text-center mb-4'>Explore the World</h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center mb-8'>
            Discover new adventures and create unforgettable memories
          </p>

          {/* Form Section */}
          <SearchBox/>
          {/* Button */}
          <button className='bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors duration-200'>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
