const express = require("express");
const router = express.Router();
const { getProduct, getProducts } = require("../services/shop");

router.get("/", getProducts);
router.get("/:id", getProduct);
module.exports = router;
