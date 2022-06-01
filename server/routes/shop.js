const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const { getProduct, getProducts } = require("../services/shop");

router.get("/", middleware, getProducts);
router.get("/:id", middleware, getProduct);
module.exports = router;
