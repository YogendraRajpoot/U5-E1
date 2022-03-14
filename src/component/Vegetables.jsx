import React, { useState } from "react";
import style from "./Vegetables.module.css";

export const Vegetables = () => {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);

  return (
    <div className={style.vegetables}>
      <h1>Vegetables</h1>
      <br />
      <div className={style.itemlist}>
        <ul>
          <li>
            Tomatoes : {item1} KG
            <br />
            <button className={style.btn} onClick={() => setItem1(item1 + 1)}>+</button>
            <button className={style.btn} onClick={() => setItem1(item1 - 1)}>-</button>
          </li>

          <li>
            Potatoes : {item2} KG
            <br />
            <button className={style.btn} onClick={() => setItem2(item2 + 1)}>+</button>
            <button className={style.btn} onClick={() => setItem2(item2 - 1)}>-</button>
          </li>
          <li>
            Carrots : {item3} KG
            <br />
            <button className={style.btn} onClick={() => setItem3(item3 + 1)}>+</button>
            <button className={style.btn} onClick={() => setItem3(item3 - 1)}>-</button>
          </li>
          <li>
            Onions : {item4} KG
            <br />
            <button className={style.btn} onClick={() => setItem4(item4 + 1)}>+</button>
            <button className={style.btn} onClick={() => setItem4(item4 - 1)}>-</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
