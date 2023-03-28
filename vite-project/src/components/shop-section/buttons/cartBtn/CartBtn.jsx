import React, { useRef } from "react";
import "./CartBtn.css";

const CartBtn = ({ cartPanelIsOpened, setCartPanelIsOpened }) => {
  const cartPanelRef = useRef(null);
  const hideCartBtn = () => {
    if (!cartPanelRef.current) return;
    if (cartPanelIsOpened) {
      cartPanelRef.current.classList.add("hide-cart-btn");
    } else {
      cartPanelRef.current.classList.remove("hide-cart-btn");
    }
  };
  hideCartBtn();
  return (
    <button
      ref={cartPanelRef}
      onClick={() => {
        setCartPanelIsOpened(true);
      }}
      className="gaming__cart"
    >
      <ion-icon name="cart"></ion-icon>
    </button>
  );
};

export default CartBtn;
