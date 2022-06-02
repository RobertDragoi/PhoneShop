const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const { getUser, refreshToken } = require("../services/user");

router.get("/", middleware, getUser);
router.post("/refresh", refreshToken);

module.exports = router;
