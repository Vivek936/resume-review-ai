const express = require("express");
const router = express.Router();

const { signupUser, loginUser, registerUser } = require("../controllers/authController");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;