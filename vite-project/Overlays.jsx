import React, { Fragment } from "react";
import GamesNotFoundOverlay from "./src/components/gamesNotFoundOverlay/GamesNotFoundOverlay";
import RedirectToAccountOverlay from "./src/components/shop-section/redirectToAccountOverlay/RedirectToAccountOverlay";
const Overlays = ({
  areInitialNumberOfPages,
  numberOfPages,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
  userIsLogedIn,
  buyBtnActive,
  setBuyBtnActive,
}) => {
  return (
    <Fragment>
      {areInitialNumberOfPages && (
        <GamesNotFoundOverlay
          numberOfPages={numberOfPages}
          displayOverlayGamesNotFound={displayOverlayGamesNotFound}
          setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
        />
      )}
      {!userIsLogedIn && buyBtnActive && (
        <RedirectToAccountOverlay setBuyBtnActive={setBuyBtnActive} />
      )}
    </Fragment>
  );
};
export default Overlays;
