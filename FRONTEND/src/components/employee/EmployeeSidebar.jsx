import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { employeeMenu, employeeBottomMenu } from "../../config/employeeMenu";
import "../../styles/sidebar.css";

import logo from "../../assets/images/victinet.png";

const EmployeeSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("employeeId");
    navigate("/login");
  };

  return (
    <aside className="employee-sidebar">

      {/* ================= LOGO ================= */}
      <div className="employee-sidebar-brand">
        <img
          src={logo}
          alt="Victinet HRMS"
          className="employee-sidebar-logo"
        />
      </div>

      {/* ================= PORTAL TITLE ================= */}
      <div className="employee-portal-title">
        EMPLOYEE PORTAL
      </div>

      {/* ================= MAIN MENU ================= */}
      <nav className="employee-sidebar-menu">

        {employeeMenu.map((section) => (
          <div
            className="employee-menu-section"
            key={section.section}
          >

            <div className="employee-section-title">
              {section.section}
            </div>

            <div className="employee-section-items">

              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `employee-menu-item ${
                        isActive ? "employee-menu-item-active" : ""
                      }`
                    }
                  >
                    <Icon
                      className="employee-menu-icon"
                      size={16}
                      strokeWidth={1.8}
                    />

                    <span className="employee-menu-label">
                      {item.label}
                    </span>

                    {item.badge && (
                      <span className="employee-menu-badge">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}

            </div>
          </div>
        ))}

      </nav>

      {/* ================= BOTTOM MENU ================= */}
      <div className="employee-sidebar-bottom">

        {employeeBottomMenu.map((item) => {
          const Icon = item.icon;

          if (item.label === "Logout") {
            return (
              <button
                key={item.label}
                type="button"
                className="employee-menu-item employee-logout-button"
                onClick={handleLogout}
              >
                <Icon
                  className="employee-menu-icon"
                  size={16}
                  strokeWidth={1.8}
                />

                <span className="employee-menu-label">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `employee-menu-item ${
                  isActive ? "employee-menu-item-active" : ""
                }`
              }
            >
              <Icon
                className="employee-menu-icon"
                size={16}
                strokeWidth={1.8}
              />

              <span className="employee-menu-label">
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </div>

    </aside>
  );
};

export default EmployeeSidebar;