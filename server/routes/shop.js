const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const { getProduct, getProducts } = require("../services/shop");

router.get("/",  getProducts);
router.get("/:id", getProduct);
module.exports = router;
