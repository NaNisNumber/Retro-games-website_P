import React, { useRef } from "react";
import "./CartBtn.css";

const CartBtn = ({ cartPanelIsOpened, setCartPanelIsOpened, gamesForCart }) => {
  const cartBtnRef = useRef(null);

  const hideCartBtn = () => {
    if (!cartBtnRef.current) return;
    if (cartPanelIsOpened || gamesForCart.length === 0) {
      cartBtnRef.current.classList.add("hide-cart-btn");
      cartBtnRef.current.classList.remove("display-cart-btn");
    } else {
      cartBtnRef.current.classList.remove("hide-cart-btn");
      cartBtnRef.current.classList.add("display-cart-btn");
    }
  };
  hideCartBtn();
  return (
    <button
      ref={cartBtnRef}
      onClick={() => {
        setCartPanelIsOpened(true);
      }}
      className="gaming__cart-btn"
    >
      <ion-icon name="cart"></ion-icon>
    </button>
  );
};

export default CartBtn;
