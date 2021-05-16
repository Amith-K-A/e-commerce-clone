import React from "react";
import { useStateValue } from "../context/stateProvide";
import "./styles/Product.css";

const Product = ({ id, title, image, price, ratings }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch the item
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        ratings: ratings,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <div>{title}</div>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(ratings)
            .fill(ratings)
            .map(() => (
              <div>⭐</div>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
