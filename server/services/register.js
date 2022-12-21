const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const register = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  const { name, email, age, address, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .send("Un cont cu această adresă de email există deja!");
    }
    user = new User({ name, email, age, address, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };
    const accessToken = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: 360000,
    });
    const refreshToken = await jwt.sign(
      { ...payload, date: new Date() },
      process.env.SECRET,
      {
        expiresIn: "30d",
      }
    );
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Eroare înregistrare cont ${email}!`);
  }
};

module.exports = { register };
