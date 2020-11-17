import { CenterFocusStrongOutlined } from "@material-ui/icons";
import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, image, price, rating, author, subtitle }) {
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-subtitle">{subtitle}</p>
        <p className="product-author">{author}</p>
        <div className="product-business">
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="star-icon" />
              ))}
          </div>

          <p className="product_price">
            <h2>$ {price}</h2>
          </p>
        </div>
      </div>

      <img src={image}></img>

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
