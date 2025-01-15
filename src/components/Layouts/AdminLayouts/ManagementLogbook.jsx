import React from "react";
import GreenButton from "../../Elements/Button/GreenButton";
import LogbookCard from "../../Fragment/AdminFragment/LogbookCard";
import FilterLogbook from "../../Fragment/AdminFragment/FilterLogbook";
import DataLogbook from "../../Fragment/AdminFragment/DataLogbook";

function ManagementLogbook() {
  return (
    <div className="h-auto relative pt-[70px]">
      <div className="mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Manajemen Logbook</h1>
          <GreenButton>Export Logbook</GreenButton>
        </div>

        <LogbookCard />

        <FilterLogbook />

        <DataLogbook />
      </div>
    </div>
  );
}

export default ManagementLogbook;
