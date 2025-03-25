const express = require("express");
const {
  login,
  register,
  forgetPassword,
} = require("../controllers/auth-controllers");
const router = express.Router();

router.get("/login", login);
router.post("/register", register);
router.get("/forget-password", forgetPassword);

module.exports = router;
