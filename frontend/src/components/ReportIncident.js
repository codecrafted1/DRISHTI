import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReportIncident.css";

function ReportIncident() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    time: "",
    image: null,
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("time", formData.time);
      formDataToSend.append("description", formData.description);
      if (formData.image) formDataToSend.append("image", formData.image);

      const response = await fetch("http://localhost:5000/api/incidents", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({
          name: "",
          location: "",
          time: "",
          description: "",
          image: null,
        });
        navigate(-1);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Cancel Button */}
      <button className="cancel-btn" onClick={() => navigate(-1)}>
        ×
      </button>

      <h2>Report Incident</h2>

      <form className="incident-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Incident Location"
          required
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Describe the incident..."
          rows="4"
          required
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}

export default ReportIncident;
