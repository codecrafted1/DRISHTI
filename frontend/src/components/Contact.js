import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    collaboration: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setForm({ name: "", phone: "", email: "", purpose: "", collaboration: "" });
        // navigate("/"); // optionally navigate to another page
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />
          <select
            name="purpose"
            required
            value={form.purpose}
            onChange={handleChange}
          >
            <option value="">Select Purpose</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Report Issue">Report Issue</option>
            <option value="Welfare Schemes">Welfare Schemes</option>
            <option value="Technical Support">Technical Support</option>
          </select>
          <select
            name="collaboration"
            required
            value={form.collaboration}
            onChange={handleChange}
          >
            <option value="">Interested in Collaboration?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
