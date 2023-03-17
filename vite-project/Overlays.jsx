import React from "react";
import GamesNotFoundOverlay from "./src/components/gamesNotFoundOverlay/GamesNotFoundOverlay";

const Overlays = ({
  numberOfPages,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
}) => {
  return (
    <GamesNotFoundOverlay
      numberOfPages={numberOfPages}
      displayOverlayGamesNotFound={displayOverlayGamesNotFound}
      setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
    />
  );
};
export default Overlays;
