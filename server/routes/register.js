const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { register } = require("../services/register");

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("age").isString(),
    check("address").isString(),
    check("password").isLength({ min: 6 }),
  ],
  register
);
module.exports = router;
