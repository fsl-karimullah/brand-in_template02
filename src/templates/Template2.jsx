import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import ListVehicle from "../components/ListVehicle";

const Template2 = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ListVehicle />
      <Cta />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Template2;
