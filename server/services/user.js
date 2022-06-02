const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

const refreshToken = async (req, res) => {
  try {
    const token = req.header("x-refresh-token");
    const decoded = jwt.verify(token, config.get("secret"));
    const payload = {
      user: {
        id: decoded.id,
      },
    };
    const accessToken = await jwt.sign(payload, config.get("jwtSecret"), {
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
