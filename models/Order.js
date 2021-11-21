const mongoose = require("mongoose");
let OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      count: { type: Number, required: true },
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      total: { type: Number, required: true },
    },
  ],
  price: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});
module.exports = mongoose.model("Order", OrderSchema);
