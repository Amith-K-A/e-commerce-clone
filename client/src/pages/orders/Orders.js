import React from "react";
import "./style/Orders.css";
import Order from "../../components/Order";
import AuthService from "../../services/auth-services";
import useOrder from "../../services/hooks/order-hook";
import CurrencyFormat from "react-currency-format";

function Orders() {
  const user = AuthService.getCurrentUser();
  const { loading, order } = useOrder(user?.id);
  const total = order?.total;
  console.log(order);

  if (!user) {
    return <h2>Please Log in to see your Order</h2>;
  }

  if(loading)
  {
    return <h1>Loading..</h1>
  }
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {order?.order.map((order) => (
          <Order order={order} total={total} />
        ))}
        <CurrencyFormat
          renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>}
          decimalScale={2}
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Orders;
