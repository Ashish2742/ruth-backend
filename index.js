const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/mongoose");
const formsRoutes = require("./src/routes/formsRoutes");

const app = express();

// Connect MongoDB
connectDB();

// CORS Middleware - ensure it's before routes
app.use(cors({
    origin: [
      "https://www.ruthinternational.com",
      "https://ruthinternational.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Include OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

// Enable preflight for all routes
app.options("*", cors());

// JSON parsing
app.use(express.json());

// API Routes
app.use("/api/v1", formsRoutes);

// Start server
app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});

module.exports = app;