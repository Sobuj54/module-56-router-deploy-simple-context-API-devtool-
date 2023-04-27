import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>order summary : {cart.length}</h3>
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
