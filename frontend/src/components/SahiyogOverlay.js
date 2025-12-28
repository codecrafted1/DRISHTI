import React, { useEffect, useState } from "react";
import "./SahiyogOverlay.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const defaultCenter = { lat: 28.6139, lng: 77.2090 }; // fallback

const locations = [
  { name: "AIIMS Hospital", lat: 28.5672, lng: 77.2100, type: "hospital" },
  { name: "Safdarjung Hospital", lat: 28.5690, lng: 77.2048, type: "hospital" },
  { name: "Red Cross NGO", lat: 28.6315, lng: 77.2167, type: "ngo" },
];

const SahiyogOverlay = ({ onClose }) => {
  const [userLocation, setUserLocation] = useState(null);

  // 📍 GET USER LOCATION
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => {
          console.warn("Location access denied");
        }
      );
    }
  }, []);

  return (
    <div className="card-overlay-full" onClick={onClose}>
      <div
        className="card-overlay-content sahiyog-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="overlay-close-btn" onClick={onClose}>×</button>

        <h3>Nearby Hospitals & NGOs</h3>

        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAP_API_KEY">
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "340px",
              borderRadius: "16px",
            }}
            center={userLocation || defaultCenter}
            zoom={14}
          >
            {/* 🟦 USER LOCATION */}
            {userLocation && (
              <Marker
                position={userLocation}
                label="You"
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }}
              />
            )}

            {/* 🏥 HOSPITALS & NGOs */}
            {locations.map((loc, i) => (
              <Marker
                key={i}
                position={{ lat: loc.lat, lng: loc.lng }}
                label={loc.type === "hospital" ? "H" : "N"}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default SahiyogOverlay;
