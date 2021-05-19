const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    userId: String,
    total: String,
    order: [
      {
        id: String,
        image: String,
        price: Number,
        ratings: Number,
        title: String,
      },
    ],
  })
);

module.exports = Order;
