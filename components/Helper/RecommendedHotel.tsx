"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { hotelData } from "../../data/data";
import "swiper/css";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
export default function CountrySlider() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <Swiper
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
        {hotelData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col relative bg-white rounded-xl p-4 h-full "data-aos="fade-left" >
              <div className="relative w-full pb-[66%] ">
                <Image
                  src={item.image}
                  alt={item.name}
                  
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* heart */}
              <div className="absolute top-5 right-5 bg-white p-1 px-2 rounded-full shadow-md z-10">
                <button>
                  <FaHeart />
                </button>
              </div>

              <h2 className="mt-4 text-[15px] font-semibold">{item.name}</h2>
              <p className="text-gray-500 text-[13px]">{item.location}</p>

              <div className="flex items-center justify-between mt-6 gap-1">
                <p className="text-gray-500 text-sm">
                  <span className="bg-blue-950 p-2 rounded-xl text-white mr-3">
                    {item.rating}
                  </span>
                  Exceptional
                </p>
                <p className="text-gray-700 text-[10px] font-bold">{item.review} Review</p>
              </div>

              <p className="mt-4 text-[15px]">
                Starting from{" "}
                <span className="text-blue-500 font-semibold">
                  {item.price}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
