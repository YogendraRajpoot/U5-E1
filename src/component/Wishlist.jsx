import React, { useState } from "react";
import styles from "./wishlist.module.css";

export const Wishlist = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const inputChange = (events) => {
    console.log(events.target.value);
    const { value } = events.target;
    setItem(value);
  };
  const addList = () => {
    if (list.length < 3) {
      const onload = {
        buyitem: item,
      };
      let updatedList = [...list, onload];
      setList(updatedList);
    }
    else{
      alert("You cannot add more than 3 items to wishlist");
    }
  };

  return (
    <div className={styles.wishlist}>
      <h1>Wishlist</h1>
      <br />
      <input type="text" onChange={inputChange} value={item} className={styles.input}/>
      <button onClick={addList} className={styles.btn}>Add </button>
      <h2 className={styles.h2}>Item Added</h2>
      {list.map(({ buyitem }, idx) => (
        <div className={styles.item} key={idx}>{`${buyitem}`}</div>
      ))}
    </div>
  );
};
