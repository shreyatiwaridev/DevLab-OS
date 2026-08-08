const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", apiRoutes);

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "DevLab OS API is healthy 🚀"
    });
});

module.exports = app;