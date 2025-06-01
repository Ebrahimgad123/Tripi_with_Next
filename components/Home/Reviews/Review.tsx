import ReviewSlider from '@/components/Helper/ReviewSlider'
import React from 'react'
import { IoStar } from 'react-icons/io5'

const Review = () => {
  return (
    <div className='bg-blue-950 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between text-white p-6 lg:p-10 gap-10'data-aos="fade-left">
      
      {/* النصوص */}
      <div className='w-full lg:w-1/2'>
        <h1 className='text-2xl font-bold'>What Are Customers Saying About Us?</h1>
        <p className='text-gray-300 mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className='mt-8'>
          <p className='text-3xl font-bold'>4.88</p>
          <p className='text-sm text-gray-400'>Overall Rating</p>
          <div className='flex gap-1 mt-2'>
            <IoStar className='text-white' />
            <IoStar className='text-white' />
            <IoStar className='text-white' />
            <IoStar className='text-white' />
            <IoStar className='text-white' />
          </div>
        </div>
      </div>

      {/* السلايدر */}
      <div className='w-full lg:w-1/2'>
        <ReviewSlider />
      </div>
      
    </div>
  )
}

export default Review
