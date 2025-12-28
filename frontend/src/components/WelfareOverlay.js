import React, { useEffect } from "react";
import "./WelfareOverlay.css";
import {
  FaShieldAlt,
  FaHospital,
  FaCarCrash,
  FaHeartbeat,
  FaWheelchair,
  FaAmbulance
} from "react-icons/fa";

const welfareSchemes = [
  { title: "Pradhan Mantri Suraksha Bima Yojana", desc: "Accident insurance cover of ₹2 lakh at ₹20/year.", icon: <FaShieldAlt /> },
  { title: "Ayushman Bharat Yojana", desc: "Health coverage up to ₹5 lakh for accident-related treatment.", icon: <FaHospital /> },
  { title: "National Road Accident Fund", desc: "Compensation to road accident victims.", icon: <FaCarCrash /> },
  { title: "Rashtriya Swasthya Bima Yojana", desc: "Medical assistance for BPL families.", icon: <FaHeartbeat /> },
  { title: "PM Jan Arogya Yojana", desc: "Cashless treatment for serious injuries.", icon: <FaHospital /> },
  { title: "State Accident Relief Schemes", desc: "State-wise financial aid for accident victims.", icon: <FaShieldAlt /> },
  { title: "ESIC Accident Benefits", desc: "Income & medical support for workplace accidents.", icon: <FaWheelchair /> },
  { title: "Motor Vehicle Accident Fund", desc: "Hit-and-run victim compensation.", icon: <FaCarCrash /> },
  { title: "Disability Rehabilitation Scheme", desc: "Support for permanent disability cases.", icon: <FaWheelchair /> },
  { title: "Emergency Medical Transport Scheme", desc: "Free ambulance services nationwide.", icon: <FaAmbulance /> }
];

const WelfareOverlay = ({ onClose }) => {

  // 🔒 LOCK BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="welfare-overlay">
      <div className="welfare-container">

        <button className="overlay-close-btn" onClick={onClose}>✕</button>

        <h2>Welfare Schemes for Accident & Emergency Support</h2>

        <div className="welfare-grid">
          {welfareSchemes.map((scheme, index) => (
            <div className="welfare-card" key={index}>
              <div className="welfare-icon">{scheme.icon}</div>
              <h4>{scheme.title}</h4>
              <p>{scheme.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WelfareOverlay;
