const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middleware");
const { getUserOrders, getOrder, createOrder } = require("../services/order");

router.post("/", middleware, createOrder);
router.get("/:id", middleware, getOrder);
router.get("/user/:id", middleware, getUserOrders);

module.exports = router;
