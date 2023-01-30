import React from "react";
import Form from "../components/registration/Form";
import "./pagesStyles/Login.css";

const Login = ({ isCreatingAccount }) => {
  return (
    <section className="gaming__registration-section">
      <Form isCreatingAccount={isCreatingAccount} />
    </section>
  );
};

export default Login;
