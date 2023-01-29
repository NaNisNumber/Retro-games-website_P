import MenuSvg from "../menu-svg/MenuSvg";
import "./OpenNavBtn.css";
export default function OpenNavBtn({ mainMenuIsClosed, setMainMenuIsClosed }) {
  function startAnimations() {
    const rectElements = document.querySelectorAll("rect");
    const menuBtn = document.querySelector(".gaming__open-nav-btn");
    const navbar = document.querySelector(".gaming__navbar");
    menuBtn.classList.add("menu-shrink");

    rectElements.forEach((rect, i) => {
      rect.classList.add(`rect${i}-shrink`);
    });

    menuBtn.addEventListener("animationend", function (e) {
      if (e.target === this) {
        setMainMenuIsClosed(false);
        navbar.classList.add("gaming__navbar-opened"); // make it with delay
      }
    });
  }

  function openNav() {
    startAnimations();
  }

  return mainMenuIsClosed ? (
    <button onClick={openNav} className="gaming__open-nav-btn btn">
      <MenuSvg />
    </button>
  ) : null;
}
