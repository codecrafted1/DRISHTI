import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/parichay")}>Parichay</li>
            <li onClick={() => navigate("/welfare")}>Welfare Schemes</li>
            <li onClick={() => navigate("/sahiyog")}>Sahiyog</li>

            <li
              className="footer-link"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Get official updates</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedinIn /></span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 DRISHTI | Government of India. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
