const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/incidents", require("./routes/incidentRoutes"));

// ✅ SERVE UPLOADED IMAGES (ABSOLUTE PATH)
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

module.exports = app;
