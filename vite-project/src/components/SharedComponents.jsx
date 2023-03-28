import { React, Fragment, useRef } from "react";
import NavBar from "./navbar/NavBar";
import OpenNavBtn from "./open-nav-btn/OpenNavBtn";
import { Outlet } from "react-router-dom";
import OpenFilterBtn from "./shop-section/buttons/open-filter-btn/OpenFilterBtn";
import "./SharedComponents.css";
const SharedComponents = ({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  filterPanelIsOpened,
  userIsLogedIn,
  setBuyBtnActive,
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
      />
      <Outlet />
    </Fragment>
  );
};

export default SharedComponents;
