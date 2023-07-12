import React from "react";
import ShopSection from "../components/shop-section/ShopSection";

const Shop = ({
  gamesData,
  setGamesData,
  lastPage,
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  openFilterBtnRef,
  setOpenFilterBtnRef,
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
  wishList,
  setWishList,
  setWishlistBtnActive,
}) => {
  return (
    <ShopSection
      gamesData={gamesData}
      setGamesData={setGamesData}
      lastPage={lastPage}
      openFilterBtnRef={openFilterBtnRef}
      setOpenFilterBtnRef={setOpenFilterBtnRef}
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
      wishList={wishList}
      setWishList={setWishList}
      setWishlistBtnActive={setWishlistBtnActive}
    />
  );
};

export default Shop;
