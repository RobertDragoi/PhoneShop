const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { login } = require("../services/login");

router.post(
  "/",
  [check("email").isEmail().exists(), check("password").exists()],
  login
);

module.exports = router;
