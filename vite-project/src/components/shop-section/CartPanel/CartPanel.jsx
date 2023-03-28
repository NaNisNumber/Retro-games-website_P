import React, { useRef } from "react";
import "./CartPanel.css";

const CartPanel = ({ setCartPanelIsOpened, cartPanelIsOpened }) => {
  const cartPanelRef = useRef(null);

  const toggleCartPanel = () => {
    if (!cartPanelRef.current) return;
    if (cartPanelIsOpened) {
      cartPanelRef.current.classList.add("opened-cart-panel");
    } else {
      cartPanelRef.current.classList.remove("opened-cart-panel");
    }
  };
  toggleCartPanel();

  return (
    <div ref={cartPanelRef} className="gaming__cart-panel">
      <button
        onClick={() => {
          setCartPanelIsOpened(false);
        }}
        className="gaming__cart-panel-close-btn"
      >
        <ion-icon name="close"></ion-icon>
      </button>
    </div>
  );
};

export default CartPanel;
