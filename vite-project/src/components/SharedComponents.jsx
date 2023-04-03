import { React, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import OpenNavBtn from "./open-nav-btn/OpenNavBtn";
import { Outlet } from "react-router-dom";

import "./SharedComponents.css";
const SharedComponents = ({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  filterPanelIsOpened,
  userIsLogedIn,
  setBuyBtnActive,
  setGamesForCart,
}) => {
  return (
    <Fragment>
      <div className="gaming__menus-container">
        <OpenNavBtn
          filterPanelIsOpened={filterPanelIsOpened}
          mainMenuIsClosed={mainMenuIsClosed}
          setMainMenuIsClosed={setMainMenuIsClosed}
        />
      </div>
      <NavBar
        setBuyBtnActive={setBuyBtnActive}
        userIsLogedIn={userIsLogedIn}
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
        setGamesForCart={setGamesForCart}
      />
      <Outlet />
    </Fragment>
  );
};

export default SharedComponents;
