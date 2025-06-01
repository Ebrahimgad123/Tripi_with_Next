import React from 'react'
import Image from 'next/image';
import SectionHeading from '@/components/Helper/SectionHeading';

const newsData = [
  {
    image: '/images/new1.jpg',
    title: 'Travel Tips for 2024',
    date: 'May 25, 2025',
  },
  {
    image: '/images/new2.jpg',
    title: 'Top Destinations to Visit',
    date: 'May 22, 2025',
  },
  {
    image: '/images/new3.jpg',
    title: 'Latest Travel Safety Guidelines',
    date: 'May 18, 2025',
  },
  {
    image: '/images/new4.jpg',
    title: 'Explore Unique Cultural Experiences',
    date: 'May 15, 2025',
  },
];

const NewsSection = () => {
  return (
    <div className='pt-20 pb-20' data-aos="fade-right">
      <SectionHeading
        title="Latest News"
        description="Stay updated with the latest news and articles from the travel world."
      />
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {newsData.map((item, index) => (
          <div key={index} className='bg-white p-4 rounded-lg '>
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className='w-full h-40 object-cover rounded-md mb-3'
            />
           
            <h3 className='text-lg font-semibold text-gray-800'>{item.title}</h3>
             <p className="text-sm text-gray-400 mb-1">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
