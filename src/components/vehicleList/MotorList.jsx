import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarListNavigation from "./CarListNavigation";
import "swiper/css";
import Img1 from "../../assets/bike/bike1.webp";
import Img2 from "../../assets/bike/bike2.webp";
import Img3 from "../../assets/bike/bike3.webp";

const MotorList = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="p-2">
          <div className="h-40 rounded-xl bg-white p-1 shadow-xl lg:h-60">
            <div className="w-full">
              <img src={Img1} alt="img" className="w-full object-cover" />
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium lg:mb-1 lg:text-lg">Toyota Agya - Bekasi</p>
              <p className="text-xs font-semibold lg:text-lg">Rp200.000/hari</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <div className="h-40 rounded-xl bg-white p-1 shadow-xl lg:h-60">
            <div className="w-full">
              <img src={Img2} alt="img" className="w-full object-cover" />
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium lg:mb-1 lg:text-lg">Toyota Venturer - Bogor</p>
              <p className="text-xs font-semibold lg:text-lg">Rp75.000/hari</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <div className="h-40 rounded-xl bg-white p-1 shadow-xl lg:h-60">
            <div className="w-full">
              <img src={Img3} alt="img" className="w-full object-cover" />
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium lg:mb-1 lg:text-lg">Mitsubishi Mirage - Cawang</p>
              <p className="text-xs font-semibold lg:text-lg">Rp75.000/hari</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <div className="h-40 rounded-xl bg-white p-1 shadow-xl lg:h-60">
            <div className="w-full">
              <img src={Img1} alt="img" className="w-full object-cover" />
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium lg:mb-1 lg:text-lg">Vario 125 - Jakarta Selatan</p>
              <p className="text-xs font-semibold lg:text-lg">Rp75.000/hari</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <div className="h-40 rounded-xl bg-white p-1 shadow-xl lg:h-60">
            <div className="w-full">
              <img src={Img2} alt="img" className="w-full object-cover" />
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs font-medium lg:mb-1 lg:text-lg">Vario 125 - Jakarta Selatan</p>
              <p className="text-xs font-semibold lg:text-lg">Rp75.000/hari</p>
            </div>
          </div>
        </SwiperSlide>
        <CarListNavigation />
      </Swiper>
    </>
  );
};

export default MotorList;
