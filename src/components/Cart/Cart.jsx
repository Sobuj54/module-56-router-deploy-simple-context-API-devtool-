import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // conditional rendering
  let message;
  if (cart.length === 0) {
    message = <p>Please add products.</p>;
  } else {
    message = (
      <div>
        <h4>Thanks for buying our products.</h4>
      </div>
    );
  }

  return (
    <div>
      <h3>order summary : {cart.length}</h3>

      {/* conditional rendering using ternary operator */}
      {cart.length > 2 ? <p>valoi kinsen</p> : <p>fokira</p>}

      {/* this message is the result of conditional rendering */}
      {message}

      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}

      {cart.length === 2 && <h5>double buy!!</h5>}
    </div>
  );
};

export default Cart;
