import React from "react";
import RedirectToLoginBtn from "./buttons/redirectToLoginBtn/RedirectToLoginBtn";
import RedirectToRegisterBtn from "./buttons/redirectToRegisterBtn/RedirectToRegisterBtn";
import CloseRedirectOverlayBtn from "./buttons/closeRedirectOverlayBtn.jsx/CloseRedirectOverlayBtn";
import "./RedirectToAccountOverlay.css";

const RedirectToAccountOverlay = ({ setBuyBtnActive }) => {
  return (
    <div
      onClick={() => {
        setBuyBtnActive(false);
      }}
      className="gaming__redirect-to-account-backdrop-shadow"
    >
      <div className="gaming__redirect-to-account-overlay-container">
        <CloseRedirectOverlayBtn setBuyBtnActive={setBuyBtnActive} />
        <p className="gaming__redirect-to-account-text">
          To purchase please log in or create an account.
        </p>
        <div className="gaming__redirect-to-account-overlay-btns-container">
          <RedirectToLoginBtn />
          <RedirectToRegisterBtn />
        </div>
      </div>
    </div>
  );
};

export default RedirectToAccountOverlay;
