const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DevLab OS API 🚀",
        version: "v1"
    });
});

module.exports = router;