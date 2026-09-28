import React from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Home,
  FileText,
  Bell,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  WalletCards,
  BarChart3,
} from "lucide-react";

import "../../styles/dashboard.css";

import officeBuilding from "../../assets/images/office-building.png";

const EmployeeDashboard = () => {
  const holidays = [
    {
      month: "Oct",
      date: "02",
      name: "Gandhi Jayanti",
      day: "Wednesday",
    },
    {
      month: "Oct",
      date: "24",
      name: "Diwali",
      day: "Friday",
    },
    {
      month: "Dec",
      date: "25",
      name: "Christmas",
      day: "Thursday",
    },
  ];

  const notifications = [
    {
      icon: CheckCircle2,
      text: "Your leave request for 12 Sep has been approved.",
      time: "2 hours ago",
    },
    {
      icon: FileText,
      text: "September 2026 payslip has been published.",
      time: "1 day ago",
    },
    {
      icon: Bell,
      text: "Company holiday list for 2026 has been updated.",
      time: "2 days ago",
    },
    {
      icon: BarChart3,
      text: "Please complete your performance self-assessment.",
      time: "3 days ago",
    },
  ];

  return (
    <div className="employee-dashboard">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="dashboard-hero">

        {/* LEFT - GREETING */}
        <div className="hero-message">
          <h1>
            Good Morning,{" "}
            <span>S. Poorvaja!</span>
            <span className="sun">☀️</span>
          </h1>

          <p>
            Here's your work overview for today.
          </p>
        </div>


        {/* CENTER - EMPLOYEE INFORMATION */}
        <div className="employee-summary">

          {/* PROFILE PLACEHOLDER */}
          <div className="dashboard-employee-avatar">
            SP
          </div>

          <div className="employee-info">

            <div className="employee-name-row">
              <strong>S. Poorvaja</strong>

              <span className="employee-badge">
                Employee
              </span>
            </div>

            <div className="employee-details">

              <div>
                <span>Employee ID</span>
                <b>: EMP001</b>
              </div>

              <div>
                <span>Department</span>
                <b>: Information Technology</b>
              </div>

              <div>
                <span>Designation</span>
                <b>: Software Developer</b>
              </div>

              <div>
                <span>Reporting Manager</span>
                <b>: Mr. Arun Kumar</b>
              </div>

            </div>
          </div>
        </div>


        {/* RIGHT - OFFICE BUILDING */}
        <div className="hero-office-image">
          <img
            src={officeBuilding}
            alt="Victinet Office"
          />
        </div>


        {/* DATE */}
        <div className="dashboard-date">
          <CalendarDays size={15} />
          <span>Thu, 25 Sep 2026</span>
        </div>

      </section>


      {/* =====================================================
          TOP CARDS
          ===================================================== */}

      <section className="dashboard-top-grid">

        {/* ATTENDANCE */}
        <div className="dashboard-card attendance-card">

          <div className="card-header">

            <div className="card-title">
              <CalendarDays size={20} />
              <h2>Today's Attendance</h2>
            </div>

            <div className="header-actions">

              <span className="present-badge">
                Present
              </span>

              <button type="button">
                View Details
                <ArrowRight size={15} />
              </button>

            </div>

          </div>


          <div className="attendance-content">

            <div className="attendance-details">

              <div className="attendance-row">
                <Clock3 />
                <span>Check-in</span>
                <strong>09:12 AM</strong>
              </div>

              <div className="attendance-row">
                <Clock3 />
                <span>Check-out</span>
                <strong>-- : --</strong>
              </div>

              <div className="attendance-row">
                <Clock3 />
                <span>Working Hours</span>
                <strong>04h 35m</strong>
              </div>

              <div className="attendance-row">
                <CalendarDays />
                <span>Shift Timing</span>
                <strong>09:00 AM - 06:00 PM</strong>
              </div>

              <div className="attendance-row">
                <MapPin />
                <span>Work Location</span>
                <strong>Chennai Office</strong>
              </div>

            </div>


            <div className="progress-container">

              <div
                className="attendance-progress"
                style={{ "--progress": "65%" }}
              >
                <div>65%</div>
              </div>

              <span>
                Day Progress
              </span>

            </div>

          </div>

        </div>


        {/* LEAVE */}
        <div className="dashboard-card leave-card">

          <div className="card-header">

            <div className="card-title">
              <FileText size={20} />
              <h2>Leave Balance</h2>
            </div>

            <button
              type="button"
              className="view-button"
            >
              View Details
              <ArrowRight size={15} />
            </button>

          </div>


          <div className="leave-stats">

            <div className="leave-stat available">
              <strong>12</strong>
              <span>Available</span>
            </div>

            <div className="leave-stat used">
              <strong>6</strong>
              <span>Used</span>
            </div>

            <div className="leave-stat pending">
              <strong>2</strong>
              <span>Pending</span>
            </div>

          </div>


          <button
            type="button"
            className="primary-action"
          >
            Apply Leave
            <ArrowRight size={18} />
          </button>

        </div>


        {/* WFH */}
        <div className="dashboard-card wfh-card">

          <div className="card-header">

            <div className="card-title">
              <Home size={20} />
              <h2>Work From Home</h2>
            </div>

            <button
              type="button"
              className="view-button"
            >
              View Details
              <ArrowRight size={15} />
            </button>

          </div>


          <div className="wfh-stats">

            <div className="wfh-stat">
              <span>Current Status</span>
              <strong>Office</strong>
            </div>

            <div className="wfh-stat">
              <span>Pending Requests</span>
              <b>1</b>
            </div>

          </div>


          <button
            type="button"
            className="wfh-action"
          >
            <Home size={17} />
            Request WFH
            <ArrowRight size={17} />
          </button>

        </div>

      </section>


      {/* =====================================================
          QUICK ACTIONS + PAYSLIP
          ===================================================== */}

      <section className="dashboard-middle-grid">

        {/* QUICK ACTIONS */}
        <div className="dashboard-card quick-actions-card">

          <div className="section-title">
            <ClipboardCheck size={20} />
            <h2>Quick Actions</h2>
          </div>


          <div className="quick-actions">

            <button
              type="button"
              className="quick-action green"
            >
              <div className="quick-icon">
                <CalendarDays />
              </div>

              <span>Apply Leave</span>

              <ArrowRight />
            </button>


            <button
              type="button"
              className="quick-action blue"
            >
              <div className="quick-icon">
                <Home />
              </div>

              <span>Request WFH</span>

              <ArrowRight />
            </button>


            <button
              type="button"
              className="quick-action purple"
            >
              <div className="quick-icon">
                <ClipboardCheck />
              </div>

              <span>Attendance Correction</span>

              <ArrowRight />
            </button>


            <button
              type="button"
              className="quick-action orange"
            >
              <div className="quick-icon">
                <FileText />
              </div>

              <span>View Payslip</span>

              <ArrowRight />
            </button>

          </div>

        </div>


        {/* PAYSLIP */}
        <div className="dashboard-card payslip-card">

          <div className="card-header">

            <div className="card-title">
              <WalletCards size={20} />
              <h2>Latest Payslip</h2>
            </div>

            <button
              type="button"
              className="view-button"
            >
              View All
              <ArrowRight size={15} />
            </button>

          </div>


          <div className="payslip-content">

            <div>
              <h3>September 2026</h3>

              <span>Pay Period</span>

              <strong>
                01 Sep 2026 - 30 Sep 2026
              </strong>
            </div>


            <div className="payslip-right">

              <span className="published">
                Published
              </span>

              <button
                type="button"
                className="payslip-button"
              >
                <FileText size={16} />
                View Payslip
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOLIDAYS + NOTIFICATIONS
          ===================================================== */}

      <section className="dashboard-bottom-grid">

        {/* HOLIDAYS */}
        <div className="dashboard-card holidays-card">

          <div className="card-header">

            <div className="card-title">
              <CalendarDays size={20} />
              <h2>Upcoming Holidays</h2>
            </div>

            <button
              type="button"
              className="view-button"
            >
              View Calendar
              <ArrowRight size={15} />
            </button>

          </div>


          <div className="holiday-list">

            {holidays.map((holiday, index) => (
              <div
                className="holiday-item"
                key={index}
              >

                <div className="holiday-date">
                  <span>{holiday.month}</span>
                  <strong>{holiday.date}</strong>
                </div>

                <div className="holiday-name">
                  <strong>{holiday.name}</strong>
                  <span>{holiday.day}</span>
                </div>

                <span className="holiday-badge">
                  Holiday
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* NOTIFICATIONS */}
        <div className="dashboard-card notifications-card">

          <div className="card-header">

            <div className="card-title">
              <Bell size={20} />
              <h2>Recent Notifications</h2>
            </div>

            <button
              type="button"
              className="view-button"
            >
              View All
              <ArrowRight size={15} />
            </button>

          </div>


          <div className="notification-list">

            {notifications.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  className="notification-item"
                  key={index}
                >

                  <Icon size={16} />

                  <span className="notification-dot"></span>

                  <p>
                    {item.text}
                  </p>

                  <time>
                    {item.time}
                  </time>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
};

export default EmployeeDashboard;