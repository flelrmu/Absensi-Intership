import React from "react";
import FilterIntership from "../../Fragment/AdminFragment/FilterIntership";
import DataIntership from "../../Fragment/AdminFragment/DataIntership";
import BlueButton from "../../Elements/Button/BlueButton";

function Mahasiswa() {
  return (
    <div className="h-auto relative pt-[70px] w-full">
      <div className="max-w-7xl px-8 mx-auto py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Manajemen Data Intership</h1>
            <BlueButton>Tambah Aktivitas</BlueButton>
          </div>
          <FilterIntership />
          <DataIntership />
        </div>
      </div>
    </div>
  );
}

export default Mahasiswa;
