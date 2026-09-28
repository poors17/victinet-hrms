import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import EmployeeLayout from "../layouts/EmployeeLayout";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import EmployeeProfile from "../pages/employee/EmployeeProfile";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= LOGIN ================= */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* ================= EMPLOYEE PORTAL ================= */}
      <Route
        path="/employee"
        element={<EmployeeLayout />}
      >

        {/* Dashboard */}
        <Route
          path="dashboard"
          element={<EmployeeDashboard />}
        />

        {/* My Profile */}
        <Route
          path="profile"
          element={<EmployeeProfile />}
        />

        {/* Attendance */}
        <Route
          path="attendance"
          element={<div>Attendance</div>}
        />

        {/* Leave */}
        <Route
          path="leave"
          element={<div>Leave</div>}
        />

        {/* Work From Home */}
        <Route
          path="work-from-home"
          element={<div>Work From Home</div>}
        />

        {/* Holidays */}
        <Route
          path="holidays"
          element={<div>Holidays</div>}
        />

        {/* Payroll */}
        <Route
          path="payroll"
          element={<div>Payroll / Payslips</div>}
        />

        {/* Documents */}
        <Route
          path="documents"
          element={<div>Documents</div>}
        />

        {/* Performance */}
        <Route
          path="performance"
          element={<div>Performance</div>}
        />

        {/* Training */}
        <Route
          path="training"
          element={<div>Training</div>}
        />

        {/* Assets */}
        <Route
          path="assets"
          element={<div>Assets</div>}
        />

        {/* Notifications */}
        <Route
          path="notifications"
          element={<div>Notifications</div>}
        />

        {/* Settings */}
        <Route
          path="settings"
          element={<div>Settings</div>}
        />

      </Route>

      {/* ================= OLD DASHBOARD URL ================= */}
      <Route
        path="/employee-dashboard"
        element={
          <Navigate
            to="/employee/dashboard"
            replace
          />
        }
      />

      {/* ================= ROOT ================= */}
      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

      {/* ================= UNKNOWN ROUTES ================= */}
      <Route
        path="*"
        element={
          <Navigate
            to="/employee/dashboard"
            replace
          />
        }
      />

    </Routes>
  );
};

export default AppRoutes;