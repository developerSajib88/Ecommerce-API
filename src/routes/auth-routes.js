const express = require("express");
const {
  login,
  register,
  forgetPassword,
  logout,
} = require("../controllers/auth-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/register", register);
router.get("/forget-password", forgetPassword);

module.exports = router;
