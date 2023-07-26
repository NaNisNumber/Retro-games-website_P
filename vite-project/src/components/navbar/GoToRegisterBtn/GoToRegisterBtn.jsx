import React from "react";
import "./GoToRegisterBtn.css";
import { Link } from "react-router-dom";
const RegisterBtn = () => {
  return (
    <Link className="gaming__navbar-register-btn" to="/register">
      Create account
    </Link>
  );
};

export default RegisterBtn;
