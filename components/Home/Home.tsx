"use client";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotels from './Hotels/Hotels';
import WhyUs from './WhyUs/WhyUs';
import Review from './Reviews/Review';
import NewsSection from './NewsSection/NewsSection';
import NewSletter from './NewSletter/NewSletter';
import Footer from './Footer/Footer';
import ScrollTop from './ScrollToTop.tsx/ScrollTop';

  
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotels />
      <WhyUs />
      <Review />
      <NewsSection />
      <NewSletter />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
