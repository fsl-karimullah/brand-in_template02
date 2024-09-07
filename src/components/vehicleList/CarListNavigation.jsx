import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const CarListNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="mt-5 flex items-center justify-start gap-4 md:px-8">
      <button onClick={() => swiper.slidePrev()} className="rounded-full border-2 border-black bg-black p-1 text-white duration-200 hover:bg-white hover:text-black" aria-label="prev button">
        <FaChevronLeft className="text-xs lg:text-base" />
      </button>
      <button onClick={() => swiper.slideNext()} className="rounded-full border-2 border-black bg-black p-1 text-white duration-200 hover:bg-white hover:text-black" aria-label="next button">
        <FaChevronRight className="text-xs lg:text-base" />
      </button>
    </div>
  );
};

export default CarListNavigation;
