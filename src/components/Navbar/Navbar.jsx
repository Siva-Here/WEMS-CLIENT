import { useState, useEffect, useRef } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import {
  FaMoneyBillWave,
  FaCalendarWeek,
  FaFileInvoiceDollar,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const offcanvasRef = useRef(null);
  const username = useSelector((state) => state.auth.username);
  const navigate = useNavigate(); // Hook for navigation

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleClickOutside = (event) => {
    if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
      setShowOffcanvas(false);
    }
  };

  useEffect(() => {
    if (showOffcanvas) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOffcanvas]);

  // Function to handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('appState'); // Clear the appState from local storage
    window.location.reload(); // Navigate to login page
  };

  return (
    <div className="container">
      <div className="row m-0 g-0 header mt-3">
        <div className="col-4">
          <img
            src="images/solar_hamburger-menu-broken.svg"
            alt="menuIcon"
            className="img-fluid"
            style={{
              border: "2px solid #1A2097",
              borderRadius: "20%",
              padding: "3px",
              cursor: "pointer",
            }}
            onClick={handleToggleOffcanvas}
          />
        </div>

        <div className="col-6 ms-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="41"
            viewBox="0 0 154 41"
            fill="none"
            style={{ position: "relative", left: "31px", float: "right" }}
            className={styles.svgpart}
          >
            <path
              d="M0 0H154V41H0L36.1752 20.6865L0 0Z"
              fill="url(#paint0_linear_1_205)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_205"
                x1="-3.32483"
                y1="18.6865"
                x2="150.675"
                y2="18.6865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1A2097" />
                <stop offset="1" stopColor="#2C35FD" />
              </linearGradient>
            </defs>
          </svg>

          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "73%",
              top: "4%",
              color: "white",
            }}
            className={styles.username}
          >
            {username || "W E M S"}
          </div>
        </div>
      </div>

      {/* Offcanvas */}
      <div
        className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
        tabIndex="-1"
        style={{
          visibility: showOffcanvas ? "visible" : "hidden",
          transform: showOffcanvas ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out, visibility 0.3s ease-in-out",
          width: "70%", // Set to full width
          maxWidth: "300px",
          height: "100vh", // Full height
          overflowY: "auto", // Enable scrolling if content overflows
        }}
        ref={offcanvasRef}
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title h3 fw-bold"
            style={{ color: "#1A2097" }}
          >
           <img src="images/logo.png" alt="" style={{height:"35px", width:"35px"}}/> &nbsp; W E M S
          </h5>
          <button
            type="button"
            aria-label="Close"
            onClick={handleToggleOffcanvas}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li className="nav-item" style={{ marginBottom: "2rem" }}>
              <NavLink
                to="/service"
                className="nav-link"
                style={{
                  color: "#1A2097",
                  fontSize: "1.1rem", // Smaller font size
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={handleToggleOffcanvas}
              >
                <FaMoneyBillWave style={{ color: "#4CAF50" }} /> Add &nbsp; Expense
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginBottom: "2rem" }}>
              <NavLink
                to="/report"
                className="nav-link"
                style={{
                  color: "#1A2097",
                  fontSize: "1.1rem", // Smaller font size
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={handleToggleOffcanvas}
              >
                <FaCalendarWeek style={{ color: "#FF9800" }} /> Weekly &nbsp; Report
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginBottom: "2rem" }}>
              <NavLink
                to="/expenses"
                className="nav-link"
                style={{
                  color: "#1A2097",
                  fontSize: "1.1rem", // Smaller font size
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={handleToggleOffcanvas}
              >
                <FaFileInvoiceDollar style={{ color: "#673AB7" }} /> All &nbsp;
                Expenses
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginBottom: "2rem" }}>
              <NavLink
                to="/user"
                className="nav-link"
                style={{
                  color: "#1A2097",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={handleToggleOffcanvas}
              >
                <FaUserAlt style={{ color: "#2196F3" }} /> Your &nbsp;Expenses
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginBottom: "2rem" }}>
              <NavLink
                className="nav-link"
                style={{
                  color: "#1A2097",
                  fontSize: "1.1rem", // Smaller font size
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={handleSignOut} // Use handleSignOut for sign out
              >
                <FaSignOutAlt style={{ color: "#F44336" }} /> Sign &nbsp; Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
