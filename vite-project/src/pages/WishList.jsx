import React from "react";

import WishListSection from "../components/wishlist-section/WIshListSection";

const WishList = ({
  wishList,
  setWishList,
  gamesForCart,
  setGamesForCart,
  setBuyBtnActive,
  userIsLogedIn,
}) => {
  return (
    <WishListSection
      wishList={wishList}
      setWishList={setWishList}
      gamesForCart={gamesForCart}
      setGamesForCart={setGamesForCart}
      setBuyBtnActive={setBuyBtnActive}
      userIsLogedIn={userIsLogedIn}
    />
  );
};

export default WishList;
