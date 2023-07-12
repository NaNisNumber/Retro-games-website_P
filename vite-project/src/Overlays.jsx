import React, { Fragment } from "react";
import GamesNotFoundOverlay from "./components/gamesNotFoundOverlay/GamesNotFoundOverlay";
import RedirectToAccountOverlay from "./components/shop-section/redirectToAccountOverlay/RedirectToAccountOverlay";

const Overlays = ({
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
  userIsLogedIn,
  buyBtnActive,
  setBuyBtnActive,
  wishlistBtnActive,
  setWishlistBtnActive,
}) => {
  return (
    <Fragment>
      {displayOverlayGamesNotFound && (
        <GamesNotFoundOverlay
          displayOverlayGamesNotFound={displayOverlayGamesNotFound}
          setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
        />
      )}
      {!userIsLogedIn && (buyBtnActive || wishlistBtnActive) && (
        <RedirectToAccountOverlay
          wishlistBtnActive={wishlistBtnActive}
          setWishlistBtnActive={setWishlistBtnActive}
          buyBtnActive={buyBtnActive}
          setBuyBtnActive={setBuyBtnActive}
        />
      )}
    </Fragment>
  );
};
export default Overlays;
