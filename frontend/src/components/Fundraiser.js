import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fundraiser.css";

function Fundraiser() {
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);

  const navigate = useNavigate(); // for redirecting

  const handleDonate = (e) => {
    e.preventDefault();
    if (!amount) {
      alert("Please enter an amount to donate!");
      return;
    }
    setShowQR(true);
  };

  return (
    <div className="dashboard-wrapper">
      {/* Cancel Button */}
      <button className="cancel-btn" onClick={() => navigate(-1)}>
        ×
      </button>

      <h2>Fundraiser</h2>

      <form className="fundraiser-form" onSubmit={handleDonate}>
        <input
          type="number"
          min="1"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit" className="donate-btn">
          Donate
        </button>
      </form>

      {showQR && (
        <div className="qr-section">
          <h3>Scan to Donate via UPI</h3>
          {/* Replace this src with actual QR code image */}
          <img
            src="/upi-qr.png"
            alt="UPI QR Code"
            className="qr-code"
          />
          <p>Amount: ₹{amount}</p>
          <p>UPI ID: example@upi</p>
          <button
            className="close-btn"
            onClick={() => {
              setShowQR(false);
              setAmount("");
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Fundraiser;
