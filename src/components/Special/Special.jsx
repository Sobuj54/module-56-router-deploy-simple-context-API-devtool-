import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>special</h2>
      <h5>Ring : {angti}</h5>
    </div>
  );
};

export default Special;
