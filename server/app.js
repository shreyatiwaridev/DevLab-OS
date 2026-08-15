const express = require("express");

const apiRoutes = require("./routes/index");

const app = express();

// Middleware
app.use(express.json());

// API Routes
app.use("/api", apiRoutes);

module.exports = app;