import React from "react";
import "./RedirectToLoginBtn.css";
import { Link } from "react-router-dom";

const RedirectToLoginBtn = () => {
  return (
    <Link
      to="/Retro-games-website_P/login"
      className="gaming__redirect-to-login-btn"
    >
      Log In
    </Link>
  );
};

export default RedirectToLoginBtn;
