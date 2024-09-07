import React from "react";
import BgFooter from "../assets/bgFooter.webp";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Bca from "../assets/bank/bca.png";
import Bni from "../assets/bank/bni.png";
import Bri from "../assets/bank/bri.png";
import Jnt from "../assets/Jnt-Logo.png";
import Ovo from "../assets/ewallet/ovo.png";
import Dana from "../assets/ewallet/dana.png";
import SiCepat from "../assets/Sicepat.png";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center px-4 py-10 text-white lg:py-14" style={{ backgroundImage: `url(${BgFooter})` }}>
      <div className="mb-8 flex flex-col gap-4 md:mb-20 md:flex-row md:items-start md:justify-center md:gap-8 lg:gap-64">
        <div>
          <h3 className="mb-3 font-semibold lg:mb-14 lg:text-2xl">Rental.Ly</h3>
          <ul className="flex flex-col gap-2 text-[#D1CECE] lg:gap-6">
            <li>Order</li>
            <li>Tentang Kami</li>
            <li>Kontak Media</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold lg:mb-14 lg:text-2xl">Ikuti Kami</h3>
          <ul className="flex flex-col gap-2 lg:gap-6">
            <li className="flex items-center gap-2 lg:gap-8">
              <div className="w-fit rounded-full bg-white p-2 text-black">
                <FaInstagram className="text-lg" />
              </div>
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-2 lg:gap-8">
              <div className="w-fit rounded-full bg-white p-2 text-black">
                <FaFacebook className="text-lg" />
              </div>
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-2 lg:gap-8">
              <div className="w-fit rounded-full bg-white p-2 text-black">
                <FaTwitter className="text-lg" />
              </div>
              <span>Twitter</span>
            </li>
            <li className="flex items-center gap-2 lg:gap-8">
              <div className="w-fit rounded-full bg-white p-2 text-black">
                <FaWhatsapp className="text-lg" />
              </div>
              <span>Whatsapp</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:gap-12">
          <div>
            <h3 className="mb-3 font-semibold lg:mb-12 lg:text-2xl">Metode Pembayaran</h3>
            <div className="flex flex-wrap gap-4 md:max-w-72 lg:gap-6">
              <img src={Bca} alt="payment" />
              <img src={Bni} alt="payment" />
              <img src={Bri} alt="payment" />
              <img src={Ovo} alt="payment" />
              <img src={Dana} alt="payment" />
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold lg:mb-8 lg:text-2xl">Metode Pengiriman</h3>
            <div className="flex gap-4 lg:gap-8">
              <img src={Jnt} alt="expedisi" />
              <img src={SiCepat} alt="expedisi" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-medium">Copyright © Rental.Ly All Right Reserved</p>
    </footer>
  );
};

export default Footer;
