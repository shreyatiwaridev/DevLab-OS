const express = require("express");

const router = express.Router();

const authRoutes = require("./auth.routes");


// Welcome
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DevLab OS API 🚀",
        version: "v1"
    });
});


// Health
router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "DevLab OS API is running",
        database: "connected"
    });
});


// Authentication
router.use("/auth", authRoutes);


module.exports = router;