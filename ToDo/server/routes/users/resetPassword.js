const router = require("express").Router();
const userSchema = require("../../database/models/userSchema");
const passwordResetSchema = require(
  "../../database/models/passwordResetSchema",
);

router.post("/", async (req, res) => {
  const { userId, resetToken, password } = req.body;
  const reset = await passwordResetSchema.findOne({
    userId: userId,
    resetToken: resetToken,
  });

  if (!reset) {
    return res.json({ message: "Invalid or expired reset token", status: 400 });
  }

  const now = new Date();
  if (now > reset.expiresAt) {
    return res.json({ message: "Invalid or expired reset token", status: 400 });
  }

  const user = await userSchema.findById(userId);
  user.password = password;
  await user.save();

  await passwordResetSchema.deleteOne({ userId: userId });

  res.json({ message: "Password reset successfully", status: 200 });
});

module.exports = router;
