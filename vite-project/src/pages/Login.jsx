import React from "react";
import LogInForm from "../components/account/forms/loginForm/LogInForm";
import "./pagesStyles/Login.css";

const Login = () => {
  return (
    <section className="gaming__login-section">
      <LogInForm />
    </section>
  );
};

export default Login;
