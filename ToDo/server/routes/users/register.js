const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../../database/models/userSchema');

router.get("/", (req, res) => {
    res.send("Register page");
});

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await userSchema.findOne({ email: email });
    if (existingUser) {
        res.json({ message: "User already exists", status: 409 });
    } else {
        const user = new userSchema({
            name,
            email,
            password,
        });
        user.save();
        let userObject = user.toObject();
        delete userObject.password;
        res.json({ message: "User created", user: userObject, status: 201 });
    }
});


module.exports = router;