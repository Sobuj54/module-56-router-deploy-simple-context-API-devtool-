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
