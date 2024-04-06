const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const userSchema = require('../../database/models/userSchema');

router.get("/", (_req, res) => {
    res.send("Login page");
});

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email, password: password });
    if (user) {
        let userObject = user.toObject();
        delete userObject.password;
        res.json({ message: "Login successful", status: 200, user: userObject });
    } else {
        res.json({ message: "Login failed", status: 401 });
    }
});

module.exports = router;