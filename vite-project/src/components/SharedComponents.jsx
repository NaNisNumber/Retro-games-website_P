import { React, Fragment } from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
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
  setWishlistBtnActive,
  wishList,
  setWishList,
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
        setWishlistBtnActive={setWishlistBtnActive}
        userIsLogedIn={userIsLogedIn}
        mainMenuIsClosed={mainMenuIsClosed}
        setMainMenuIsClosed={setMainMenuIsClosed}
        setGamesForCart={setGamesForCart}
        wishList={wishList}
        setWishList={setWishList}
      />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default SharedComponents;
