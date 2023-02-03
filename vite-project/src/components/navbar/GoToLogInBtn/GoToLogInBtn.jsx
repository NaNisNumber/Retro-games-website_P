import React from "react";
import "./GoToLogInBtn.css";
import { Link } from "react-router-dom";
const LogInBtn = () => {
  return (
    <Link className="gaming__navbar-login-btn" to="login">
      Log In
    </Link>
  );
};

export default LogInBtn;
