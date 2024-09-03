import React from "react";
import Img from "../../assets/bgCta.webp";
import ImgCta from "../../assets/imgCta.webp";

const Cta = () => {
  return (
    <section style={{ backgroundImage: `url(${Img})` }} className="flex w-full flex-col gap-4 bg-cover bg-top px-4 py-20 md:flex-row md:items-center md:justify-center lg:gap-8 lg:py-40">
      <div className="flex flex-col items-start gap-4 lg:gap-6">
        <h2 className="text-lg font-bold lg:text-4xl">Rental.Ly</h2>
        <p className="max-w-96 font-semibold lg:max-w-[714px] lg:text-lg">Layanan aplikasi ini dibuat karena kebutuhan konsumen di berbagai daerah akan keperluan kendaraan untuk berpergian terutama masa libur, dimana banyak orang membutuhkan alat transportasi dalam waktu dekat dan tempo penggunaan yang singkat</p>
        <button className="rounded-lg bg-primary px-3 py-2 text-sm text-white lg:px-10 lg:py-4 lg:text-lg">Order Now</button>
      </div>
      <div className="w-full md:max-w-60 lg:max-w-[300px]">
        <img src={ImgCta} alt="img" className="w-full object-cover" />
      </div>
    </section>
  );
};

export default Cta;
