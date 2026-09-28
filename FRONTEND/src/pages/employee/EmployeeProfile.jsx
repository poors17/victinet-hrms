import React from "react";
import {
  UserRound,
  BriefcaseBusiness,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Building2,
  Clock3,
  ShieldCheck,
  Edit3,
  Download,
  LockKeyhole,
  ContactRound,
} from "lucide-react";

import "../../styles/myprofile.css";

const EmployeeProfile = () => {
  return (
    <div className="profile-page">

      {/* ================= PAGE HEADER ================= */}
      <div className="profile-page-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your employee information</p>
        </div>

        <div className="profile-breadcrumb">
          Dashboard <span>/</span> <strong>My Profile</strong>
        </div>
      </div>

      {/* ================= PROFILE HERO ================= */}
      <section className="profile-hero">

        {/* Background image */}
        <div className="profile-hero-image">
          <img
            src="/src/assets/hero.png"
            alt="Victinet Office"
          />
        </div>

        {/* Employee information */}
        <div className="profile-hero-left">

          <div className="profile-avatar">
            <span>SP</span>
          </div>

          <div className="profile-main-info">

            <div className="profile-name-row">
              <h2>S. Poorvaja</h2>

              <span className="active-badge">
                Active Employee
              </span>
            </div>

            <div className="profile-meta">

              <span>
                <BriefcaseBusiness size={14} />
                Software Developer
              </span>

              <span>
                <ContactRound size={14} />
                EMP001
              </span>

              <span>
                <Building2 size={14} />
                Information Technology
              </span>

            </div>

          </div>
        </div>

        {/* Action buttons */}
        <div className="profile-actions">

          <button className="primary-action">
            <Edit3 size={14} />
            Edit Profile
          </button>

          <button>
            <LockKeyhole size={14} />
            Change Password
          </button>

          <button>
            <Download size={14} />
            Download Profile
          </button>

        </div>

      </section>

      {/* ================= INFORMATION GRID ================= */}
      <div className="profile-grid">

        {/* ================= PERSONAL ================= */}
        <section className="profile-card personal-card">

          <div className="profile-card-header personal">
            <h3>
              <UserRound size={15} />
              Personal Information
            </h3>

            <button>
              <Edit3 size={13} />
              Edit
            </button>
          </div>

          <div className="profile-details">

            <ProfileRow
              icon={<UserRound size={14} />}
              label="Full Name"
              value="S. Poorvaja"
            />

            <ProfileRow
              icon={<ContactRound size={14} />}
              label="Employee ID"
              value="EMP001"
            />

            <ProfileRow
              icon={<CalendarDays size={14} />}
              label="Date of Birth"
              value="14 Mar 2002"
            />

            <ProfileRow
              icon={<UserRound size={14} />}
              label="Gender"
              value="Female"
            />

            <ProfileRow
              icon={<Mail size={14} />}
              label="Corporate Email"
              value="poorvaja.s@victinet.com"
            />

            <ProfileRow
              icon={<Phone size={14} />}
              label="Phone Number"
              value="+91 98765 43210"
            />

          </div>
        </section>

        {/* ================= PROFESSIONAL ================= */}
        <section className="profile-card professional-card">

          <div className="profile-card-header professional">
            <h3>
              <BriefcaseBusiness size={15} />
              Professional Information
            </h3>

            <button>
              <Edit3 size={13} />
              Edit
            </button>
          </div>

          <div className="professional-columns">

            <div className="profile-details">

              <ProfileRow
                icon={<Building2 size={14} />}
                label="Department"
                value="Information Technology"
              />

              <ProfileRow
                icon={<BriefcaseBusiness size={14} />}
                label="Designation"
                value="Software Developer"
              />

              <ProfileRow
                icon={<UserRound size={14} />}
                label="Reporting Manager"
                value="Mr. Arun Kumar"
              />

              <ProfileRow
                icon={<CalendarDays size={14} />}
                label="Date of Joining"
                value="01 Jun 2026"
              />

              <ProfileRow
                icon={<BriefcaseBusiness size={14} />}
                label="Employment Type"
                value="Full Time"
              />

            </div>

            <div className="profile-details">

              <ProfileRow
                icon={<MapPin size={14} />}
                label="Work Location"
                value="Chennai Office"
              />

              <ProfileRow
                icon={<Clock3 size={14} />}
                label="Shift Timing"
                value="09:00 AM - 06:00 PM"
              />

              <ProfileRow
                icon={<Mail size={14} />}
                label="Official Email"
                value="poorvaja.s@victinet.com"
              />

              <ProfileRow
                icon={<Phone size={14} />}
                label="Phone Number"
                value="+91 98765 43210"
              />

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="profile-card contact-card">

          <div className="profile-card-header contact">
            <h3>
              <Phone size={15} />
              Contact Information
            </h3>

            <button>
              <Edit3 size={13} />
              Edit
            </button>
          </div>

          <div className="profile-details">

            <ProfileRow
              icon={<Mail size={14} />}
              label="Corporate Email"
              value="poorvaja.s@victinet.com"
            />

            <ProfileRow
              icon={<Phone size={14} />}
              label="Phone Number"
              value="+91 98765 43210"
            />

            <ProfileRow
              icon={<MapPin size={14} />}
              label="Work Location"
              value="Chennai Office, Tamil Nadu, India"
            />

            <ProfileRow
              icon={<ContactRound size={14} />}
              label="Emergency Contact"
              value="+91 90000 12345 (Father)"
            />

          </div>
        </section>

        {/* ================= REPORTING ================= */}
        <section className="profile-card reporting-card">

          <div className="profile-card-header reporting">
            <h3>
              <UserRound size={15} />
              Reporting Information
            </h3>
          </div>

          <div className="manager-info">

            <div className="manager-avatar">
              AK
            </div>

            <div>
              <h4>Mr. Arun Kumar</h4>
              <span>Reporting Manager</span>
              <small>Information Technology</small>
            </div>

          </div>

          <div className="profile-details manager-details">

            <ProfileRow
              icon={<BriefcaseBusiness size={14} />}
              label="Designation"
              value="Project Manager"
            />

            <ProfileRow
              icon={<Mail size={14} />}
              label="Email"
              value="arun.kumar@victinet.com"
            />

            <ProfileRow
              icon={<Phone size={14} />}
              label="Phone Number"
              value="+91 98765 67890"
            />

          </div>

        </section>

        {/* ================= EMPLOYMENT STATUS ================= */}
        <section className="profile-card employment-card">

          <div className="profile-card-header employment">
            <h3>
              <ShieldCheck size={15} />
              Employment Status
            </h3>
          </div>

          <div className="profile-details">

            <ProfileRow
              icon={<ShieldCheck size={14} />}
              label="Status"
              value={
                <span className="status-pill">
                  Active Employee
                </span>
              }
            />

            <ProfileRow
              icon={<BriefcaseBusiness size={14} />}
              label="Employment Type"
              value="Full Time"
            />

            <ProfileRow
              icon={<CalendarDays size={14} />}
              label="Date of Joining"
              value="01 Jun 2026"
            />

            <ProfileRow
              icon={<MapPin size={14} />}
              label="Work Location"
              value="Chennai Office"
            />

          </div>
        </section>

      </div>
    </div>
  );
};


/* ================= PROFILE ROW ================= */

const ProfileRow = ({ icon, label, value }) => {
  return (
    <div className="profile-row">

      <div className="profile-row-label">
        <span className="row-icon">
          {icon}
        </span>

        <span className="row-label-text">
          {label}
        </span>
      </div>

      <div className="profile-row-value">
        {value}
      </div>

    </div>
  );
};

export default EmployeeProfile;