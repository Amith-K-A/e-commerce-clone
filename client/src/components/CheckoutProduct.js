import React from "react";
import "./styles/CheckoutProduct.css";
import { useStateValue } from "../context/stateProvide";

function CheckoutProduct({ id, image, title, price, ratings, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} ALT="" />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__title">{title}</div>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
        {Array(ratings)
            .fill(ratings)
            .map(() => (
              <div>⭐</div>
            ))}
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
