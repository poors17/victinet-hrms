import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsPeople, BsGear, BsGraphUp } from 'react-icons/bs';
import '../../styles/login.css';
import officeBg from '../../assets/images/office-bg.png';
import victinetLogo from '../../assets/images/victinet.png';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();

  if (employeeId === "EMP001" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("employeeId", employeeId);

    navigate('/employee-dashboard');
  } else {
    alert("Invalid Employee ID or Password");
  }
};
  return (
    <div 
      className="login-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${officeBg})`
      }}
    >
      {/* Left Hero Section */}
      <div className="login-hero-section">
        <div className="hero-top-logo">
          <img src={victinetLogo} alt="Victinet Logo" className="hero-logo-img" />
        </div>

        <div className="hero-content">
          <h1>
            People <br />
            Process <br />
            <span className="highlight-progress">Progress</span>
          </h1>
          <p>
            A unified HRMS platform for a stronger workforce and a brighter tomorrow.
          </p>
        </div>

        <div className="hero-footer-stats">
          <div className="stat-item">
            <BsPeople className="stat-icon" />
            <span>PEOPLE</span>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <BsGear className="stat-icon" />
            <span>PROCESS</span>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <BsGraphUp className="stat-icon" />
            <span>PROGRESS</span>
          </div>
        </div>
      </div>

      {/* Right Form Card Section */}
     <div className="login-form-section">
  <div className="login-card">
    <div className="form-header">
  <div className="card-brand-text">
    <h2>VICTINET</h2>
    <span>H R M S</span>
  </div>
  <h2>Welcome <span className="highlight-back">Back!</span></h2>
  <p>Sign in to access your Victinet HRMS</p>
</div>
    

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>Employee ID</label>
              <div className="input-field-wrapper">
                <FaUser className="field-icon" />
                <input
                  type="text"
                  placeholder="Enter your Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-field-wrapper">
                <FaLock className="field-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="signin-btn">
              Sign In &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;