import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h2>{children}</h2>
      {hasFriend && <Friend ring={ring}></Friend>}
    </div>
  );
};

export default Cousin;
