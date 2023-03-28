import React, { Fragment, useRef } from "react";
import "./SelectionContainer.css";
import BuyBtn from "../../buttons/buy-button/BuyBtn";
const SelectionContainer = ({ setSelectedTab }) => {
  const aboutBtnRef = useRef(null);
  const screenshotsBtnRef = useRef(null);

  return (
    <Fragment>
      <div className="gaming__current-game-selections-container">
        <button
          ref={aboutBtnRef}
          onClick={(e) => {
            e.target.classList.add("selected-btn");
            screenshotsBtnRef.current.classList.remove("selected-btn");
            setSelectedTab("about");
          }}
          className="gaming__current-game-selection-btn selected-btn"
        >
          About game
        </button>
        <button
          ref={screenshotsBtnRef}
          onClick={(e) => {
            e.target.classList.add("selected-btn");
            aboutBtnRef.current.classList.remove("selected-btn");
            setSelectedTab("screenshots");
          }}
          className="gaming__current-game-selection-btn"
        >
          Screenshots
        </button>
        <BuyBtn />
      </div>
    </Fragment>
  );
};

export default SelectionContainer;
