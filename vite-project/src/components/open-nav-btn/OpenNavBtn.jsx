import MenuSvg from "../menu-svg/MenuSvg";
import { useRef } from "react";
import "./OpenNavBtn.css";
export default function OpenNavBtn({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  filterPanelIsOpened,
}) {
  const menuBtnRef = useRef(null);

  function startAnimations() {
    if (!menuBtnRef.current) return;
    const rectElements = document.querySelectorAll("rect");
    const navbar = document.querySelector(".gaming__navbar");
    menuBtnRef.current.classList.add("menu-shrink");

    let delays = [0, 0.2, 0.3, 0.4];

    rectElements.forEach((rect, i) => {
      if (filterPanelIsOpened) {
        rect.style.animation = `shrink-rect-left 0.25s ${delays[i]}s ease-in-out forwards`;
      } else {
        rect.style.animation = `shrink-rect-left 0.25s ${delays[i]}s ease-in-out forwards`;
      }
    });

    menuBtnRef.current.addEventListener("animationend", function (e) {
      if (e.target === this) {
        setMainMenuIsClosed(false);
        navbar.classList.add("gaming__navbar-opened");
      }
    });
  }

  function openNav() {
    startAnimations();
  }
  // Move menu btn when filter panel is opened
  const moveNavBtn = () => {
    if (!menuBtnRef.current) return;
    if (filterPanelIsOpened) {
      menuBtnRef.current.classList.remove("gaming__display-menu-btn");
      menuBtnRef.current.classList.add("gaming__hide-menu-btn");
    } else {
      menuBtnRef.current.classList.remove("gaming__hide-menu-btn");
      menuBtnRef.current.classList.add("gaming__display-menu-btn");
    }
  };

  moveNavBtn();
  return mainMenuIsClosed ? (
    <button
      ref={menuBtnRef}
      onClick={openNav}
      className="gaming__open-nav-btn btn"
    >
      <MenuSvg />
    </button>
  ) : null;
}
