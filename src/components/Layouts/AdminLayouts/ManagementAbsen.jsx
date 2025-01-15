import React from "react";
import AbsensiCard from "../../Fragment/AdminFragment/AbsensiCard";
import FilterAbsensi from "../../Fragment/AdminFragment/FilterAbsensi";
import DataAbsensi from "../../Fragment/AdminFragment/DataAbsensi";
import GreenButton from "../../Elements/Button/GreenButton";

function ManagementAbsen() {

  return (
    <div className="h-auto relative px-8 pt-[70px]">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Manajemen Absensi</h1>
          <GreenButton>Export Absensi</GreenButton>
        </div>
        <AbsensiCard />
        <FilterAbsensi />
        <DataAbsensi />
      </div>
    </div>
  );
}

export default ManagementAbsen;
