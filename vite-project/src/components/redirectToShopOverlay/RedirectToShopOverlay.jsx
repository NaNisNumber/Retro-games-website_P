import React from "react";
import "./RedirectToShopOverlay.css";
const RedirectToShopOverlay = ({
  redirectSecondsFromLogin,
  redirectSecondsFromRegister,
}) => {
  return (
    <div className="gaming__redirect-to-shop-overlay">
      {redirectSecondsFromLogin && (
        <p className="gaming__redirect-to-shop-overlay-text">
          You will be redirected to the shoping page in{" "}
          {redirectSecondsFromLogin}{" "}
          {redirectSecondsFromLogin === 1 ? "second" : "seconds"}
        </p>
      )}
      {redirectSecondsFromRegister && (
        <p className="gaming__redirect-to-shop-overlay-text">
          You will be redirected to the shoping page in{" "}
          {redirectSecondsFromRegister}{" "}
          {redirectSecondsFromRegister === 1 ? "second" : "seconds"}
        </p>
      )}
    </div>
  );
};

export default RedirectToShopOverlay;
