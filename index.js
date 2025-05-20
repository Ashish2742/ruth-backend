const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/mongoose");
const formsRoutes = require("./src/routes/formsRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ["https://www.ruthinternational.com","ruthinternational.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.use(express.json());
app.use("/api/v1", formsRoutes);

// Start server
app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});

module.exports = app;