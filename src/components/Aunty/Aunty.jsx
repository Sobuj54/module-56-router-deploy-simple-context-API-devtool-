import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({ ring }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>aunty</h2>
      <h6>grandpa money: {money}</h6>
      <button onClick={() => setMoney(money + 1000)}>send 1000tk</button>
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
