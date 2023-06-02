import React, { Fragment, useRef } from "react";
import "./GamesNotFoundOverlay.css";

const GamesNotFoundOverlay = ({
  numberOfPages,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
}) => {
  const gamesOverlay = useRef(null);
  const pathName = window.location.pathname;

  return (
    <Fragment>
      {!numberOfPages &&
        pathName === "/shop" &&
        displayOverlayGamesNotFound && (
          <div ref={gamesOverlay} className="gaming__games-not-found-overlay">
            <div className="gaming__games-not-found-overlay-container">
              <p className="gaming__games-not-found-message">
                We didn't find any games to match your query
              </p>
              <button
                className="gaming__games-not-found-close-overlay-btn"
                onClick={() => setDisplayOverlayGamesNotFound(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
    </Fragment>
  );
};

export default GamesNotFoundOverlay;