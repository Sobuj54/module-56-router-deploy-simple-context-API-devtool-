import React from "react";
import "./Cart.css";

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
      {/* conditional css class */}
      <h3 className={cart.length === 2 ? "green" : "purple"}>
        order summary : {cart.length}
      </h3>

      {/* conditional css class with a common class */}
      <p className={`bold ${cart.length === 4 ? "yellow" : "blue"}`}>
        conditional common css class
      </p>

      {/* 2. conditional rendering using ternary operator */}
      {cart.length > 2 ? <p>valoi kinsen</p> : <p>fokira</p>}

      {/* 1. this message is the result of conditional rendering */}
      {message}

      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}

      {/*3. conditional rendering using && operator */}
      {cart.length === 2 && <h5>double buy!!</h5>}

      {/* 4. conditional rendering using || operator */}
      {cart.length === 3 || <h5>tin ta to hoilo na</h5>}
    </div>
  );
};

export default Cart;

/*
*CONDITIONAL RENDERING  
1.use if else to set a variable that will contain an element, components
2. ternary operator : condition ? 'for true' : 'false'
3. Logical && : (if the condition is true the next thing will be displayed)
4. Logical || : (if the condition is false then the next thing will be displayed)
*/
