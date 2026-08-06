const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "DevLab OS API v1 is running 🚀"
    });
});

module.exports = router;