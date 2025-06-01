import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import RecommendedHotels from '../../Helper/RecommendedHotel'
const Hotels = () => {
  return (
    <div className='pt-20 pb-20'>
       <SectionHeading title="Exploring popular Hotels" description='Discover the best Hotels in Egypt,Stay and Explore the place'/>
       <RecommendedHotels/>
    </div>
  )
}

export default Hotels