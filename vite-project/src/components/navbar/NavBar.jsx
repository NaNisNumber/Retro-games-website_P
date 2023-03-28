import "./NavBar.css";
import { useRef } from "react";
import { nanoid } from "nanoid";
import LogInBtn from "./GoToLogInBtn/GoToLogInBtn";
import RegisterBtn from "./GoToRegisterBtn/GoToRegisterBtn";
import { NavLink } from "react-router-dom";
import navLinkData from "./navLinkData";
import { useLocation } from "react-router-dom";
import LogOutBtn from "../account/logOutBtn/LogOutBtn";

export default function NavBar({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  userIsLogedIn,
  setBuyBtnActive,
}) {
  const navbarRef = useRef(null);
  const navbarFromRef = navbarRef.current;
  const locationData = useLocation();
  const path = locationData.pathname;

  const changePosition = (logicalOperator, nav = navbarFromRef) => {
    if (logicalOperator === "||") {
      if (path === "/register" || path === "/login") {
        nav.classList.remove(`gaming__navbar--big-position-static`);
        nav.classList.add(`gaming__navbar--sm-position-fixed`);
        nav.classList.add(`gaming__navbar--big-position-fixed`);
      }
    }
    if (logicalOperator === "&&") {
      if (path !== "/register" && path !== "/login") {
        nav.classList.add(`gaming__navbar--big-position-static`);
        nav.classList.add(`gaming__navbar--sm-position-fixed`);
        nav.classList.remove(`gaming__navbar--big-position-fixed`);
      }
    }
  };

  window.onload = () => {
    const navbar = document.querySelector("nav");
    changePosition("||", navbar);
    changePosition("&&", navbar);
  };

  if (navbarFromRef !== null) {
    changePosition("||");
  }

  if (navbarFromRef !== null) {
    changePosition("&&");
  }

  function closeNav() {
    navbarFromRef.classList.remove("gaming__navbar-opened");
    setMainMenuIsClosed(true);
  }
  const linkData = navLinkData();
  const navLinks = linkData.map((linkData) => {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "gaming__navbar-link-active" : null
        }
        key={nanoid()}
        to={`${linkData.destination}`}
      >
        <ion-icon name={`${linkData.iconName}`}></ion-icon>
        <li>{`${linkData.text}`}</li>
      </NavLink>
    );
  });

  const displayCloseBtn = mainMenuIsClosed ? null : (
    <button onClick={closeNav} className="gaming__navbar-close-btn btn">
      <img
        className="gaming__navbar-close-icon"
        src="../Assets/arrowBack.png"
      />
    </button>
  );

  return (
    <nav ref={navbarRef} className={"gaming__navbar "}>
      {!userIsLogedIn && (
        <div className="gaming__navbar-account">
          <LogInBtn />
          <RegisterBtn />
        </div>
      )}
      {userIsLogedIn && (
        <div className="gaming__navbar-account">
          <LogOutBtn setBuyBtnActive={setBuyBtnActive} />
        </div>
      )}
      {displayCloseBtn}
      <ul>{navLinks}</ul>
      <hr></hr>
    </nav>
  );
}
