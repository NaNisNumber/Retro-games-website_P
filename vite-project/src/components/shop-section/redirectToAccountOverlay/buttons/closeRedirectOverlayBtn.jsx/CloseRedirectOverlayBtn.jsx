import React from "react";
import "./CloseRedirectOverlayBtn.css";
const closeRedirectOverlayBtn = ({ setBuyBtnActive }) => {
  return (
    <button
      onClick={() => {
        setBuyBtnActive(false);
      }}
      className="gaming__close-redirect-overlay-btn"
    >
      <ion-icon name="close"></ion-icon>
    </button>
  );
};

export default closeRedirectOverlayBtn;
