  
const db = require("../models");
const Order = db.order;

exports.createOrder = (req, res) => {
  const user = new Order({
    userId: req.body.userId,
    total: req.body.total,
    order: req.body.order,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Order is placed successfully!" });
  });
};


exports.getOrder = function (req, res, next) {
  Order.findOne({ userId: req.query.userId }, function (err, data) {
    if (err) {
      return res.status(500);
    } else {
      return res.status(200).send({ result: data });
    }
  });
};