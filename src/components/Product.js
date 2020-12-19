// import { CenterFocusStrongOutlined } from "@material-ui/icons";s
import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function Product({id, title, image, price, rating, author, subtitle }) {

  const [{basket}, dispatch] = useStateValue();

  console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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

      <button onClick = {addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
