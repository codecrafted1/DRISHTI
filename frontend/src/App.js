import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ReportIncident from "./components/ReportIncident";
import Fundraiser from "./components/Fundraiser";
import Login from "./components/Login";
import Register from "./components/Register"; // Added Register
import LiveDashboardOverlay from "./components/LiveDashboardOverlay";
import Contact from "./components/Contact"; 
import SahiyogOverlay from "./components/SahiyogOverlay";


function App() {
  const [showLiveDashboard, setShowLiveDashboard] = useState(false);

  return (
    <Router>
      {/* Header with Live Dashboard trigger */}
      <Header onOpenLiveDashboard={() => setShowLiveDashboard(true)} />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Sahiyog" element={<SahiyogOverlay />} /> 
      </Routes>

      <Footer />

      {/* Live Dashboard Overlay */}
      {showLiveDashboard && (
        <LiveDashboardOverlay
          onClose={() => setShowLiveDashboard(false)}
        />
      )}
    </Router>
  );
}

export default App;
