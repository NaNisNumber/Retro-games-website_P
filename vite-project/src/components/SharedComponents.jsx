import { React, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import OpenNavBtn from "./open-nav-btn/OpenNavBtn";
import { Outlet } from "react-router-dom";

const SharedComponents = ({
  mainMenuIsClosed,
  setMainMenuIsClosed,
  filterPanelIsOpened,
}) => {
  return (
    <Fragment>
      <OpenNavBtn
        filterPanelIsOpened={filterPanelIsOpened}
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
      />
      <NavBar
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
      />
      <Outlet />
    </Fragment>
  );
};

export default SharedComponents;
