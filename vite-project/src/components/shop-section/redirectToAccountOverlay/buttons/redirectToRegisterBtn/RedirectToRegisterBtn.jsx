import React from "react";
import "./RedirectToRegisterBtn.css";
import { Link } from "react-router-dom";

const RedirectToRegisterBtn = () => {
  return (
    <Link to="/register" className="gaming__redirect-to-register-btn">
      Create account
    </Link>
  );
};

export default RedirectToRegisterBtn;
