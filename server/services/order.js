const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { customer, billingInfo, products, price } = req.body;
    let order = new Order({ customer, billingInfo, products, price });
    await order.save();
    await Order.findById(order.id)
      .populate([
        { path: "customer", populate: "customer" },
        { path: "products", populate: "product" },
      ])
      .exec((err, order) => res.json(order));
  } catch (error) {
    res.status(500).send(`Error registering order!`);
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findById(id)
      .populate([
        { path: "customer", populate: "customer" },
        { path: "products", populate: "product" },
      ])
      .exec((err, order) => res.json(order));
  } catch (error) {
    res.status(500).send(`Error getting orders!`);
  }
};

const getUserOrders = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.find({ customer: id })
      .populate([
        { path: "customer", populate: "customer" },
        { path: "products", populate: "product" },
      ])
      .exec((err, orders) => res.json(orders));
  } catch (error) {
    res.status(500).send(`Error getting orders!`);
  }
};
module.exports = { getUserOrders, getOrder, getOrder, createOrder };
