const express = require("express");
const router = express.Router();
const { getUserOrders, getOrder, createOrder } = require("../services/order");

router.post("/", createOrder);
router.get("/:id", getOrder);
router.get("/user/:id", getUserOrders);
module.exports = router;
