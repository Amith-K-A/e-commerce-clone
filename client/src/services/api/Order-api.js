import axios from "axios";
import authHeader from "../auth-header";

// const API_URL = process.env.NODE_ENV !== "production" && "http://localhost:4000";

const creatOrder = (userId, total, order) => {
  return axios.post(
    "api/order/creat",
    {
      userId,
      total,
      order,
    },
    {
      headers: authHeader(),
    }
  );
};

const getOrder = (userId) => {
  return axios
    .get("api/order/get", {
      headers: authHeader(),
      params: {
        userId: userId,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
};

const Order = {
  creatOrder,
  getOrder,
};

export default Order;
