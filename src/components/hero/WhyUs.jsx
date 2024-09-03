import React from "react";
import Img1 from "../../assets/ImgWhyUs1.webp";
import Img2 from "../../assets/ImgWhyUs2.webp";
import Img3 from "../../assets/ImgWhyUs3.webp";

const WhyUs = () => {
  return (
    <section className="px-4 py-20 lg:py-14">
      <h2 className="mb-6 text-center text-lg font-bold lg:mb-16 lg:text-[40px]">Mengapa Rental.Ly?</h2>
      <div className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-4 lg:gap-32">
        <div className="flex flex-col items-center gap-2 rounded-lg bg-bgSecondary p-4 shadow-xl lg:max-w-[353px] lg:gap-4 lg:px-6 lg:py-9">
          <img src={Img1} alt="img" className="size-56 object-cover md:size-32 lg:size-36" />
          <h3 className="text-xl font-bold">Terpercaya</h3>
          <p className="text-center text-sm text-secondary">Tidak perlu diragukan menggunakan layanan kami, karena lebih dari 10.000 user telah menggunakan Rental.Ly</p>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-bgSecondary p-4 shadow-xl lg:max-w-[353px] lg:gap-4 lg:px-6 lg:py-9">
          <img src={Img2} alt="img" className="size-56 object-cover md:size-32 lg:size-36" />
          <h3 className="text-xl font-bold">Pelayanan Cepat</h3>
          <p className="text-center text-sm text-secondary">Pengiriman ke lokasi konsumen dengan cepat dan admin yang siap siaga menangani pelayanan</p>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-bgSecondary p-4 shadow-xl lg:max-w-[353px] lg:gap-4 lg:px-6 lg:py-9">
          <img src={Img3} alt="img" className="size-56 object-cover md:size-32 lg:size-36" />
          <h3 className="text-xl font-bold">Mudah & Terbaik</h3>
          <p className="text-center text-sm text-secondary">Banyak user telah memberikan banyak respon positif karena mudahnya menggunakan layanan ini</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
