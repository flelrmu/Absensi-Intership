import React from "react";
import GreenButton from "../../Elements/Button/GreenButton";
import LaporanCard from "../../Fragment/AdminFragment/LaporanCard";
import FilterLaporan from "../../Fragment/AdminFragment/FilterLaporan";
import DataLaporan from "../../Fragment/AdminFragment/DataLaporan";

function ManagementLaporan() {

  return (
    <div className="h-auto relative pt-[70px]">
      <div className="mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Manajemen Laporan Akhir</h1>
          <GreenButton>Export Data</GreenButton>
        </div>
        <LaporanCard />
        <FilterLaporan />
        <DataLaporan />
      </div>
    </div>
  );
}

export default ManagementLaporan;
