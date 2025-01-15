import React from "react";
import DashboardCard from "../../Fragment/AdminFragment/DashboardCard";
import DashboardGrafik from "../../Fragment/AdminFragment/DashboardGrafik";
import AktifitasTerbaru from "../../Fragment/AdminFragment/AktifitasTerbaru";

const DashboardAdmin = () => {
  return (
    <div className="h-auto relative pt-[70px]">
      <div className="mx-auto px-8 py-6">
        <DashboardCard />
        <DashboardGrafik />
        <AktifitasTerbaru />
      </div>
    </div>
  );
};

export default DashboardAdmin;
