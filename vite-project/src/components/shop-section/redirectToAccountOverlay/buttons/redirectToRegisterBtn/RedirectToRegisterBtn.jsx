import React from "react";
import "./RedirectToRegisterBtn.css";
import { Link } from "react-router-dom";

const RedirectToRegisterBtn = () => {
  return (
    <Link
      to="/Retro-games-website_P/register"
      className="gaming__redirect-to-register-btn"
    >
      Create account
    </Link>
  );
};

export default RedirectToRegisterBtn;
