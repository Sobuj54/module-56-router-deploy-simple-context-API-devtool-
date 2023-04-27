import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>order summary : {cart.length}</h3>
      {cart.map((tshirt) => (
        <p>{tshirt.name}</p>
      ))}
    </div>
  );
};

export default Cart;
