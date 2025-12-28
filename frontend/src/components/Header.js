import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import LiveDashboardOverlay from "./LiveDashboardOverlay";
import WelfareOverlay from "./WelfareOverlay";
import SahiyogOverlay from "./SahiyogOverlay"; // NEW

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showLiveDashboard, setShowLiveDashboard] = useState(false);
  const [showWelfare, setShowWelfare] = useState(false);
  const [showSahiyog, setShowSahiyog] = useState(false); // NEW

  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        {/* LOGO */}
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          <img src="/logo192.png" alt="Logo" />
          <span style={{ fontFamily: "cursive" }}>DRISHTI</span>
        </div>

        {/* NAVIGATION */}
        <nav className="nav">
          <button
            className="nav-btn"
            onClick={() => setShowLiveDashboard(true)}
          >
            LIVE DASHBOARD
          </button>

          <button
            className="nav-btn"
            onClick={() => setShowWelfare(true)}
          >
            WELFARE SCHEMES
          </button>

          <button
            className="nav-btn"
            onClick={() => setShowSahiyog(true)} // OPEN SAHIYOG OVERLAY
          >
            SAHIYOG
          </button>

          {/* ACCOUNT DROPDOWN */}
          <div className="account">
            <button
              className="nav-btn account-btn"
              onClick={() => setOpen(!open)}
            >
              ACCOUNT▾
            </button>

            {open && (
              <div className="dropdown">
                <button
                  className="dropdown-btn"
                  onClick={() => {
                    navigate("/login");
                    setOpen(false);
                  }}
                >
                  LOGIN
                </button>

                <button
                  className="dropdown-btn"
                  onClick={() => {
                    navigate("/register");
                    setOpen(false);
                  }}
                >
                  REGISTER
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* OVERLAYS */}

      {/* LIVE DASHBOARD */}
      {showLiveDashboard && (
        <LiveDashboardOverlay onClose={() => setShowLiveDashboard(false)} />
      )}

      {/* WELFARE SCHEMES */}
      {showWelfare && <WelfareOverlay onClose={() => setShowWelfare(false)} />}

      {/* SAHIYOG (Nearby Hospitals & NGOs) */}
      {showSahiyog && <SahiyogOverlay onClose={() => setShowSahiyog(false)} />}
    </>
  );
};

export default Header;
