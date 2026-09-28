import React from "react";
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
} from "lucide-react";

const EmployeeHeader = () => {
  return (
    <header className="employee-header">

      {/* LEFT */}
      <div className="header-left">

        <button
          type="button"
          className="header-menu-btn"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>

        <div className="header-search">

          <Search size={16} />

          <input
            type="text"
            placeholder="Search for anything (e.g. leave, payslip, documents...)"
          />

        </div>

      </div>

      {/* RIGHT */}
      <div className="header-right">

        {/* Notification */}
        <div className="notification-wrapper">

          <Bell size={21} />

          <span className="notification-badge">
            3
          </span>

        </div>

        <div className="header-divider"></div>

        {/* Employee Profile */}
        <div className="employee-profile">

          <div className="header-employee-avatar">
            SP
          </div>

          <div className="employee-header-info">

            <strong>
              S. Poorvaja
            </strong>

            <span>
              EMP001
            </span>

          </div>

          <ChevronDown size={16} />

        </div>

      </div>

    </header>
  );
};

export default EmployeeHeader;