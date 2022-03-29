const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const middleware = require("../middleware/middleware");
const {login,getUser} = require("../services/login");

router.post(
  "/",
  [check("email").isEmail().exists(), check("password").exists()],
  login
);
router.get("/", middleware, getUser);
module.exports = router;
