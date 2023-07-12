import React from "react";

import WishListSection from "../components/wishlist-section/WIshListSection";

const WishList = ({
  gamesData,
  wishList,
  setWishList,
  gamesForCart,
  setGamesForCart,
  setBuyBtnActive,
  userIsLogedIn,
  setWishlistBtnActive,
  games,
  cartPanelIsOpened,
  setCartPanelIsOpened,
}) => {
  return (
    <WishListSection
      gamesData={gamesData}
      wishList={wishList}
      setWishList={setWishList}
      gamesForCart={gamesForCart}
      setGamesForCart={setGamesForCart}
      setBuyBtnActive={setBuyBtnActive}
      userIsLogedIn={userIsLogedIn}
      setWishlistBtnActive={setWishlistBtnActive}
      games={games}
      cartPanelIsOpened={cartPanelIsOpened}
      setCartPanelIsOpened={setCartPanelIsOpened}
    />
  );
};

export default WishList;
