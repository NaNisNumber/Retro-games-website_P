import React, { useState, useEffect, Fragment } from "react";
import LogInForm from "../components/account/forms/loginForm/LogInForm";
import "./pagesStyles/Login.css";
import RedirectToShopOverlay from "../components/redirectToShopOverlay/RedirectToShopOverlay";
import { useNavigate } from "react-router-dom";

const Login = ({ userIsLogedIn }) => {
  const [redirectSecondsFromLogin, setRedirectSecondsFromLogin] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectSecondsFromLogin === 0) {
      navigate("/Retro-games-website_P/shop");
    }
    if (!userIsLogedIn || redirectSecondsFromLogin === 0) return;
    setTimeout(() => {
      setRedirectSecondsFromLogin((prevSeconds) => prevSeconds - 1);
    }, 1000);
  }, [userIsLogedIn, redirectSecondsFromLogin]);

  return (
    <Fragment>
      {!userIsLogedIn && (
        <section className="gaming__login-section">
          <LogInForm />
        </section>
      )}

      {userIsLogedIn && redirectSecondsFromLogin && (
        <RedirectToShopOverlay
          redirectSecondsFromLogin={redirectSecondsFromLogin}
        />
      )}
    </Fragment>
  );
};

export default Login;
