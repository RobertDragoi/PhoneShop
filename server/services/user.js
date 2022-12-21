const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const refreshToken = async (req, res) => {
  try {
    const token = req.header("x-refresh-token");
    const decoded = await jwt.verify(token, process.env.SECRET);
    const payload = {
      user: {
        id: decoded.user.id,
      },
    };
    const accessToken = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: 360000,
    });
    res.json({ accessToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Eroare la generarea unui nou token!`);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Utilizator negăsit!");
  }
};

module.exports = { refreshToken, getUser };
