import React from "react";
import "./LogOutBtn.css";
import { signOut } from "firebase/auth";
import auth from "../../../firebaseConfig";
import WishList from "../../../pages/WishList";

const LogOutBtn = ({
  setBuyBtnActive,
  setGamesForCart,
  setWishlistBtnActive,
  setWishList,
}) => {
  const logOut = () => {
    setBuyBtnActive(false);
    setWishlistBtnActive(false);
    signOut(auth)
      .then(() => {
        setGamesForCart([]);
      })
      .then(() => {
        setWishList([]);
      })
      .catch((error) => {});
  };

  return (
    <button onClick={logOut} className="gaming__log-out-btn">
      Log Out
    </button>
  );
};

export default LogOutBtn;
