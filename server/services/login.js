const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const login = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  try {
    if (!user) {
      return res.status(400).send("Email invalid!");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Parolă invalidă!");
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    const accessToken = await jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 360000,
    });
    const refreshToken = await jwt.sign(
      { ...payload, date: new Date() },
      config.get("jwtSecret"),
      {
        expiresIn: "30d",
      }
    );
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Eroare la logare!`);
  }
};

module.exports = {
  login,
};
