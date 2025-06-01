"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const reviews = [
  {
    name: "John Doe",
    comment: "I had a wonderful time exploring the beautiful landscapes and rich culture. Highly recommend!",
    job: "Travel Enthusiast",
    image: "/images/reviewer1.jpg",
    rating: 5
  },
  {
    name: "Jane Smith",
    comment: "The trip was well organized and the guides were knowledgeable. A truly unforgettable experience!",
    job: "Adventure Seeker",
    image: "/images/reviewer1.jpg",
    rating: 4
  },
  {
    name: "Emily Johnson",
    comment: "From the stunning views to the delicious food, everything was perfect. Can't wait to go back!",
    job: "web Developer",
    image: "/images/reviewer1.jpg",
    rating: 3
  },
  {
    name: "Emily Johnson",
    comment: "From the stunning views to the delicious food, everything was perfect. Can't wait to go back!",
    job: "mobile Developer",
    image: "/images/reviewer1.jpg",
    rating: 3
  },
  {
    name: "Emily Johnson",
    comment: "From the stunning views to the delicious food, everything was perfect. Can't wait to go back!",
    job: "Designer",
    image: "/images/reviewer1.jpg",
    rating: 3
  },
  {
    name: "Emily Johnson",
    comment: "From the stunning views to the delicious food, everything was perfect. Can't wait to go back!",
    job: "Doctor",
    image: "/images/reviewer1.jpg",
    rating: 3
  }
];

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='bg-white lg:w-150 md:w-175 sm:w-40 h-80 p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
              <p className='text-gray-700 mb-4'>{review.comment}</p>
              <div className='flex items-center mt-6 gap-3'>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className='rounded-full object-cover'
                />
                <div className='text-left'>
                  <div className='flex mt-1'>
                    {Array.from({ length: 5 }, (_, i) =>
                      i < review.rating ? (
                        <IoStar key={i} className="text-yellow-500" />
                      ) : (
                        <IoStarOutline key={i} className="text-yellow-300" />
                      )
                    )}
                  </div>
                  <h3 className='text-lg text-black'>{review.name}</h3>
                  <p className='text-sm text-gray-500'>{review.job}</p>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ReviewSlider;
