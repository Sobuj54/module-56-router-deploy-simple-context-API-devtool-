import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2>aunty</h2>
      <section className="flex">
        <Cousin>Nibir</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Nirjona
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
