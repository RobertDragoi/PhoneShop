const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
router.post("/", async (req, res) => {
  try {
    const { customer, products, price } = req.body;
    let order = new Order({ customer, products, price });
    await order.save();
    Order.findById(order.id)
      .populate([
        { path: "customer", populate: "customer" },
        { path: "products", populate: "product" },
      ])
      .exec((err, order) => res.json(order));
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error registering order!`);
  }
});
module.exports = router;
