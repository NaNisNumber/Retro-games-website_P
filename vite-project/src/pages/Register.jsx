import React, { Fragment, useState, useEffect } from "react";
import RegisterForm from "../components/account/forms/registrationForm/RegisterForm";
import "./pagesStyles/Register.css";
import { useNavigate } from "react-router-dom";
import RedirectToShopOverlay from "../components/redirectToShopOverlay/RedirectToShopOverlay";
const Register = ({ userIsLogedIn }) => {
  const navigate = useNavigate();
  const [redirectSecondsFromRegister, setRedirectSecondsFromRegister] =
    useState(3);

  useEffect(() => {
    if (redirectSecondsFromRegister === 0) {
      navigate("/shop");
    }
    if (!userIsLogedIn || redirectSecondsFromRegister === 0) return;

    setTimeout(() => {
      setRedirectSecondsFromRegister((prevSeconds) => prevSeconds - 1);
    }, 1000);
  }, [userIsLogedIn, redirectSecondsFromRegister]);

  return (
    <Fragment>
      {!userIsLogedIn && (
        <section className="gaming__register-section">
          <RegisterForm />
        </section>
      )}

      {userIsLogedIn && redirectSecondsFromRegister && (
        <RedirectToShopOverlay
          redirectSecondsFromRegister={redirectSecondsFromRegister}
        />
      )}
    </Fragment>
  );
};

export default Register;
