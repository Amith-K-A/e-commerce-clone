import React, { useState } from "react";
import "./style/Payment.css";
import { useStateValue } from "../../context/stateProvide";
import CheckoutProduct from "../../components/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../context/reducer";
import OrderService from "../../services/api/Order-api";
import AuthService from "../../services/auth-services";

function Payment() {
  const user = AuthService.getCurrentUser();
  const [{ cart }, dispatch] = useStateValue();
  const history = useHistory();
  const total = getBasketTotal(cart);

  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);
    await OrderService.creatOrder(user.id, total, cart).then(() => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: "EMPTY_CART",
      });
      history.replace("/orders");
    });
  };


  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                ratings={item.ratings}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                {user ? <button type="submit" disabled={processing || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>: <>Please log in to Place your Order.</>}
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
