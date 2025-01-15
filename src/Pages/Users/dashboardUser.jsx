import React from "react";
import DashboardUser from "../../components/Layouts/UsersLayouts/DashboardUser";
import NavbarUser from "../../components/Fragment/NavbarUser";

function DashboardUserPage() {
  return (
    <>
      <NavbarUser />
      <DashboardUser />
    </>
  );
}

export default DashboardUserPage;
