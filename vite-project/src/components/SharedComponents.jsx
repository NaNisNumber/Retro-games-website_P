import { React, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import OpenNavBtn from "./open-nav-btn/OpenNavBtn";
import { Outlet } from "react-router-dom";

const SharedComponents = ({ mainMenuIsClosed, setMainMenuIsClosed }) => {
  return (
    <Fragment>
      <OpenNavBtn
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
