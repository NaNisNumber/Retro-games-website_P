import React from "react";
import "./LogOutBtn.css";
import { signOut } from "firebase/auth";
import auth from "../../../firebaseConfig";

const LogOutBtn = ({ setBuyBtnActive, setGamesForCart }) => {
  const logOut = () => {
    setBuyBtnActive(false);

    signOut(auth)
      .then(() => {
        setGamesForCart([]);
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
