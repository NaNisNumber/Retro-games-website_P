import React from "react";
import "./RegisterBtn.css";
import { Link } from "react-router-dom";
const RegisterBtn = ({ setIsCreatingAccount }) => {
  return (
    <Link
      onClick={() => {
        setIsCreatingAccount(true);
      }}
      className="gaming__navbar-register-btn"
      to="login"
    >
      Create account
    </Link>
  );
};

export default RegisterBtn;
