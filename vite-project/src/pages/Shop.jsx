import React from "react";
import ShopSection from "../components/shop-section/ShopSection";

const Shop = ({
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  games,
  openFilterBtnRef,
  setOpenFilterBtnRef,
  pageContents,
  setPageContents,
  numberOfPages,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
  areInitialNumberOfPages,
  setAreInitialNumberOfPages,
  setGameId,
  setCartPanelIsOpened,
  cartPanelIsOpened,
  setBuyBtnActive,
  gamesForCart,
  setGamesForCart,
  userIsLogedIn,
}) => {
  return (
    <ShopSection
      pageContents={pageContents}
      setPageContents={setPageContents}
      numberOfPages={numberOfPages}
      openFilterBtnRef={openFilterBtnRef}
      setOpenFilterBtnRef={setOpenFilterBtnRef}
      games={games}
      filterPanelIsOpened={filterPanelIsOpened}
      setFilterPanelIsOpened={setFilterPanelIsOpened}
      displayOverlayGamesNotFound={displayOverlayGamesNotFound}
      setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
      areInitialNumberOfPages={areInitialNumberOfPages}
      setAreInitialNumberOfPages={setAreInitialNumberOfPages}
      setGameId={setGameId}
      setCartPanelIsOpened={setCartPanelIsOpened}
      cartPanelIsOpened={cartPanelIsOpened}
      setBuyBtnActive={setBuyBtnActive}
      gamesForCart={gamesForCart}
      setGamesForCart={setGamesForCart}
      userIsLogedIn={userIsLogedIn}
    />
  );
};

export default Shop;
