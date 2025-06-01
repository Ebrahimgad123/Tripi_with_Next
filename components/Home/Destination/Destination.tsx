import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from '../../Helper/DestinationSlider'
const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectionHeading title="Exploring popular Destination" description='Discover the best places in Egypt,Stay and Explore the place'/>
      <DestinationSlider/>
    </div>
  )
}

export default Destination