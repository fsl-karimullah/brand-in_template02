import React from "react";
import Img from "../../assets/bgHero.webp";
const Hero = () => {
  return (
    <section style={{ backgroundImage: `url(${Img})` }} className="flex h-screen w-full flex-col items-center justify-end bg-cover bg-center py-20 text-white lg:py-8">
      <p className="mb-4 lg:text-2xl">WELCOME TO</p>
      <h1 className="text-5xl lg:text-[128px]">Rental.Ly</h1>
    </section>
  );
};

export default Hero;
