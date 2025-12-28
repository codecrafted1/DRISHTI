import React from "react";
import "./LiveDashboardOverlay.css";

function LiveDashboardOverlay({ onClose }) {
  return (
    <div className="live-overlay">
      <div className="live-overlay-content">
        <button className="overlay-close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Live Incident Dashboard</h2>

        {/* FILTERS */}
        <div className="filters">
          <select>
            <option>All Types</option>
            <option>Road Accident</option>
            <option>Fire</option>
            <option>Medical</option>
            <option>Crime</option>
          </select>

          <select>
            <option>Last 1 Hour</option>
            <option>Last 6 Hours</option>
            <option>Last 24 Hours</option>
          </select>

          <select>
            <option>5 km Radius</option>
            <option>10 km Radius</option>
            <option>25 km Radius</option>
          </select>
        </div>

        {/* LIVE INCIDENT CARDS */}
        <div className="live-cards">
          <div className="live-card high">
            <h4>Fire Hazard</h4>
            <p>Location: Sector 18</p>
            <span>Severity: High 🔴</span>
          </div>

          <div className="live-card medium">
            <h4>Road Accident</h4>
            <p>Location: NH-24</p>
            <span>Severity: Medium 🟠</span>
          </div>

          <div className="live-card low">
            <h4>Medical Emergency</h4>
            <p>Location: Civil Lines</p>
            <span>Severity: Low 🟢</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveDashboardOverlay;
