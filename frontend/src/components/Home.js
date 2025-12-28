import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import img1 from "../components/Images/image1.png";
import img2 from "../components/Images/image2.png";
import img3 from "../components/Images/image3.png";

const images = [img1, img2, img3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-wrapper">
      <div
        className="home-container"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="overlay"></div>

        <div className="home-content">
          <h1>DRISHTI</h1>
          <p>
            Transparent governance and welfare accessibility for every citizen.
          </p>
          <button
            className="get-started-btn"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
