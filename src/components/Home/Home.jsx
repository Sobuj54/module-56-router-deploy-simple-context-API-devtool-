import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../TShirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirts) => {
    const exists = cart.find((ts) => ts._id === tshirts._id);
    if (exists) {
      toast("you have already added this.");
    } else {
      const newCart = [...cart, tshirts];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remaining);
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
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
