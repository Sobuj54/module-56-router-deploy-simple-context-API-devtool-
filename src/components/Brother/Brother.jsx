import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>brother</h2>
      <h6>Ring: {ring}</h6>
    </div>
  );
};

export default Brother;
