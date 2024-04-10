const router = require("express").Router();
const userSchema = require("../../database/models/userSchema");

router.post("/", async (req, res) => {
    const { email } = req.body;
    const user = await userSchema.findOne({
        email: email,
    });

    if (user) {
        res.json({ message: "Email found", status: 200 });
    } else {
        res.json({ message: "Email not found", status: 404 });
    }
});

module.exports = router;