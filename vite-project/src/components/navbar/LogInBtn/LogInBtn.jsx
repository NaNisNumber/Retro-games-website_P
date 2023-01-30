import React from "react";
import "./LogInBtn.css";
import { Link } from "react-router-dom";
const LogInBtn = ({ setIsCreatingAccount }) => {
  return (
    <Link
      onClick={() => {
        setIsCreatingAccount(false);
      }}
      className="gaming__navbar-login-btn"
      to="login"
    >
      Log In
    </Link>
  );
};

export default LogInBtn;
