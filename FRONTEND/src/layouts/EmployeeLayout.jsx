import React from "react";
import { Outlet } from "react-router-dom";

import EmployeeSidebar from "../components/employee/EmployeeSidebar";
import EmployeeHeader from "../components/employee/EmployeeHeader";
import EmployeeFooter from "../components/employee/EmployeeFooter";

import "../styles/global.css";
import "../styles/sidebar.css";
import "../styles/header.css";
import "../styles/footer.css";

const EmployeeLayout = () => {
  return (
    <div className="employee-layout">

      {/* FIXED SIDEBAR */}
      <EmployeeSidebar />

      {/* FIXED HEADER */}
      <EmployeeHeader />

      {/* SCROLLABLE CONTENT ONLY */}
      <main className="employee-layout-content">
        <div className="employee-page-content">
          <Outlet />
        </div>
      </main>

      {/* FIXED FOOTER */}
      <EmployeeFooter />

    </div>
  );
};

export default EmployeeLayout;