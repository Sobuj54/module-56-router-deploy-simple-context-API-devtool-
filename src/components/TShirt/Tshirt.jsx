import React from "react";
import "./TShirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { picture, price, name, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price : ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
