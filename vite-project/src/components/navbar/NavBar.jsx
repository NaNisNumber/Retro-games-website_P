import "./NavBar.css";
import { nanoid } from "nanoid";
import LogInBtn from "./LogInBtn/LogInBtn";
import RegisterBtn from "./RegisterBtn/RegisterBtn";
import { NavLink } from "react-router-dom";
import navLinkData from "./navLinkData";

export default function NavBar({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  setIsCreatingAccount,
}) {
  function closeNav() {
    const navbar = document.querySelector(".gaming__navbar");
    navbar.classList.remove("gaming__navbar-opened");
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
    <nav className={"gaming__navbar "}>
      <div className="gaming__navbar-account">
        <LogInBtn setIsCreatingAccount={setIsCreatingAccount} />
        <RegisterBtn setIsCreatingAccount={setIsCreatingAccount} />
      </div>
      {displayCloseBtn}
      <ul>{navLinks}</ul>
      <hr></hr>
    </nav>
  );
}
