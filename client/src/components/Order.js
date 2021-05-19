import React from "react";
import "./styles/Order.css";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order, total }) {
  return (
    <div className="order">
      <h2>Order</h2>
      {
        <CheckoutProduct
          id={order.id}
          title={order.title}
          image={order.image}
          price={order.price}
          ratings={order.ratings}
          hideButton
        />
      }
    </div>
  );
}

export default Order;
