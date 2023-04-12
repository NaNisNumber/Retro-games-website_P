import React from "react";
import "./CloseRedirectOverlayBtn.css";
const closeRedirectOverlayBtn = ({ setBuyBtnActive, setWishlistBtnActive }) => {
  return (
    <button
      onClick={() => {
        setWishlistBtnActive(false);
        setBuyBtnActive(false);
      }}
      className="gaming__close-redirect-overlay-btn"
    >
      <ion-icon name="close"></ion-icon>
    </button>
  );
};

export default closeRedirectOverlayBtn;
