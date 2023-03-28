import React from "react";
import "./BuyBtn.css";
const BuyBtn = ({ setBuyBtnActive }) => {
  return (
    <button
      onClick={() => {
        setBuyBtnActive(true);
      }}
      className="gaming__buy-game-btn"
    >
      Buy
    </button>
  );
};

export default BuyBtn;
