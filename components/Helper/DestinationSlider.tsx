'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { DestinationData } from '../../data/data';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
export default function CountrySlider() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 relative">
      {/*arrows */}
      <div className="absolute -left-[-20px] top-1/2 z-10">
        <div className="swiper-button-prev text-[1px]  bg-black opacity-50  p-8 rounded-4xl  cursor-pointer"></div>
      </div>
      <div className="absolute -right-[-20px] top-1/2 z-10">
        <div className="swiper-button-next text-[1px]  bg-black opacity-50  p-8 rounded-4xl  cursor-pointer"></div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {DestinationData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  items-center bg-white rounded-xl  p-4 "data-aos="fade-right" >
              <Image
                width={256}
                height={120}
                src={item.image}
                alt={item.country}
                className=" h-90 object-cover rounded-lg sm:w-120 lg:w-full"
              />
              <h2 className="mt-4 text-xl font-semibold">{item.country}</h2>
              <p className="text-gray-500">{item.travelers}Travelers</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
