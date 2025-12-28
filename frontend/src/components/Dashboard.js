import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const cards = [
  { title: "Road Accidents" },
  { title: "Natural Disasters" },
  { title: "Infrastructure Disasters" },
  { title: "Biological Disasters" },
  { title: "Nuclear Disasters" },
  { title: "Medical Emergency" },
  { title: "Fire Hazards" },
  { title: "Crime Reports" },
  { title: "Other Emergencies" },
];

const CARDS_PER_PAGE = 6;

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = cards.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <div className="dashboard-wrapper">
      <h2>Emergency Dashboard</h2>

      {/* CARDS */}
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => setSelectedCard(card)}
          >
            {card.title}
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

      {/* FULL OVERLAY */}
      {selectedCard && (
        <div
          className="card-overlay-full"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="card-overlay-content overlay-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="overlay-close-btn"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>

            <h3>{selectedCard.title}</h3>

            <div className="overlay-buttons">
              {/* Navigate to Report Incident page */}
              <button
                className="report-btn"
                onClick={() => navigate("/report-incident")}
              >
                REPORT INCIDENT
              </button>

              {/* Navigate to Fundraiser page */}
              <button
                className="funds-btn"
                onClick={() => navigate("/fundraiser")}
              >
                RAISE FUNDS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
