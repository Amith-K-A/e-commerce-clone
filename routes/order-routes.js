const controller = require("../controllers/order-controller");
const { authJwt } = require("../services");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.post("/api/order/creat", [authJwt.verifyToken], controller.createOrder);
  app.get("/api/order/get", [authJwt.verifyToken], controller.getOrder);
};
