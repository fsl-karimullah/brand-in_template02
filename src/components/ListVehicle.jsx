import React from "react";
import CarList from "./vehicleList/CarList";
import MotorList from "./vehicleList/MotorList";
import { CiSearch } from "react-icons/ci";

const ListVehicle = () => {
  return (
    <section className="px-4 py-10 lg:px-28 lg:py-14" id="list">
      <div className="mb-6 lg:mb-8">
        <h2 className="mb-2 text-lg font-bold lg:mb-4">Lokasi anda sekarang?</h2>
        <div className="flex w-fit items-center gap-2 rounded-xl bg-bgSecondary p-1">
          <CiSearch />
          <input type="text" placeholder="Jakarta" className="bg-transparent focus:outline-none" />
        </div>
      </div>
      <div className="mb-3 lg:mb-8">
        <h3 className="font-bold">Pilihan Motor</h3>
        <MotorList />
      </div>
      <h3 className="font-bold">Pilihan Mobil</h3>
      <CarList />
    </section>
  );
};

export default ListVehicle;
