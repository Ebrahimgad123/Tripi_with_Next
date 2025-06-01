import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Image from 'next/image'
const WhyUs = () => {
  return (
     <div className='pt-16 pb-20'data-aos="fade-right">
      <SectionHeading title="Why Us" description='this is the services that we provide that will convince you'/>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Card 1 */}
        <div className='bg-white p-6 rounded-lg '>
          <Image width={200}height={200} src='/images/bestPrice.png' alt='Best Price Guarantee' className='w-full h-40 object-contain rounded-md mb-4' />
          <h3 className='text-xl font-semibold mb-4'>Best Price Guarantee</h3>
          <p className='text-gray-600'>We offer the best prices for your stay, ensuring you get the most value for your money.</p>
        </div>

        {/* Card 2 */}
        <div className='bg-white p-6 rounded-lg '>
          <Image width={200}height={200} src='/images/easy.svg' alt='Best Price Guarantee' className='w-full h-40 object-contain rounded-md mb-4' />
          <h3 className='text-xl font-semibold mb-4'>24/7 Customer Support</h3>
          <p className='text-gray-600'>Our team is available around the clock to assist you with any inquiries or issues.</p>
        </div>

        {/* Card 3 */}
        <div className='bg-white p-6 rounded-lg '>
          <Image width={200}height={200} src='/images/care.svg' alt='Best Price Guarantee' className='w-full h-40 object-contain rounded-md mb-4' />
          <h3 className='text-xl font-semibold mb-4'>Exclusive Offers</h3>
          <p className='text-gray-600'>Enjoy exclusive deals and discounts available only to our members.</p>
        </div>
       
      </div>
    </div>
  )
}

export default WhyUs