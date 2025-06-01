"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all z-50"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp className="text-2xl" />
      </button>
    )
  );
};

export default ScrollTop;
