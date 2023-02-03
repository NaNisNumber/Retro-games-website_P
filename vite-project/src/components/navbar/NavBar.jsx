import "./NavBar.css";
import { useRef } from "react";
import { nanoid } from "nanoid";
import LogInBtn from "./GoToLogInBtn/GoToLogInBtn";
import RegisterBtn from "./GoToRegisterBtn/GoToRegisterBtn";
import { NavLink } from "react-router-dom";
import navLinkData from "./navLinkData";
import { useLocation } from "react-router-dom";

export default function NavBar({ mainMenuIsClosed, setMainMenuIsClosed }) {
  const navbarRef = useRef(null);
  const navbarFromRef = navbarRef.current;
  const locationData = useLocation();
  const path = locationData.pathname;

  const changePosition = (position, logicalOperator, nav = navbarFromRef) => {
    if (logicalOperator === "||") {
      if (path === "/register" || path === "/login") {
        nav.style.position = position;
      }
    }
    if (logicalOperator === "&&") {
      if (path !== "/register" && path !== "/login") {
        nav.style.position = position;
      }
    }
  };

  window.onload = () => {
    const navbar = document.querySelector("nav");
    changePosition("fixed", "||", navbar);
    changePosition("static", "&&", navbar);
  };

  if (navbarFromRef !== null) {
    changePosition("fixed", "||");
  }

  if (navbarFromRef !== null) {
    changePosition("static", "&&");
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
      <div className="gaming__navbar-account">
        <LogInBtn />
        <RegisterBtn />
      </div>

      {displayCloseBtn}
      <ul>{navLinks}</ul>
      <hr></hr>
    </nav>
  );
}
