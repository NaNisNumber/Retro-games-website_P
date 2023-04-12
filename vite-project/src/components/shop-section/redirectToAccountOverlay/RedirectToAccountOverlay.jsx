import React from "react";
import RedirectToLoginBtn from "./buttons/redirectToLoginBtn/RedirectToLoginBtn";
import RedirectToRegisterBtn from "./buttons/redirectToRegisterBtn/RedirectToRegisterBtn";
import CloseRedirectOverlayBtn from "./buttons/closeRedirectOverlayBtn.jsx/CloseRedirectOverlayBtn";
import "./RedirectToAccountOverlay.css";

const RedirectToAccountOverlay = ({
  buyBtnActive,
  setBuyBtnActive,
  wishlistBtnActive,
  setWishlistBtnActive,
}) => {
  return (
    <div
      onClick={() => {
        setWishlistBtnActive(false);
        setBuyBtnActive(false);
      }}
      className="gaming__redirect-to-account-backdrop-shadow"
    >
      <div className="gaming__redirect-to-account-overlay-container">
        <CloseRedirectOverlayBtn
          setWishlistBtnActive={setWishlistBtnActive}
          setBuyBtnActive={setBuyBtnActive}
        />
        <p className="gaming__redirect-to-account-text">
          To {buyBtnActive && "purchase"}
          {wishlistBtnActive && "list that game"} please log in or create an
          account.
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
