import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../TShirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirts) => {
    const newCart = [...cart, tshirts];
    setCart(newCart);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}></Tshirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart key={cart._id} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
