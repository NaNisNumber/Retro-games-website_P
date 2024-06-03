import React, { Fragment, useEffect, useState } from "react";
import "./AboutGame.css";
import SelectionContainer from "./selectionContainer/SelectionContainer";
import CartBtn from "../buttons/cartBtn/CartBtn";
import CartPanel from "../CartPanel/CartPanel";
import { nanoid } from "nanoid";
import { addNewPropertiesToGameObj } from "../../../../Assets/addNewPropertiesToGameObj";

const AboutGame = ({
  games,
  userIsLogedIn,
  gamesData,
  cartPanelIsOpened,
  setCartPanelIsOpened,
  gamesForCart,
  setGamesForCart,
  setBuyBtnActive,
}) => {

  const findCurrentGame = () => {
    const sliderGamesData = addNewPropertiesToGameObj(games);
    const [selectedTab, setSelectedTab] = useState("about");
    let currentGame;
    const path = window.location.hash;
    const splitedPath = path.split("/");
    const idFromPath = +splitedPath[splitedPath.length - 1];

    for (let i = 0; i < sliderGamesData.length; i++) {
      const game = sliderGamesData[i];
      if (game.id === idFromPath) {
        currentGame = game;
        break;
      }
    }

    if (!currentGame) return;

    const gameCoverImg = currentGame.cover.url.replace("t_thumb", "t_720p");
    const gameRating = +currentGame.starRating.slice(0, 1);
    const gameReleaseFullDate = new Date(currentGame.first_release_date * 1000);
    const gameReleaseMonth = gameReleaseFullDate.toLocaleString("default", {
      month: "short",
    });
    const gameReleaseYear = gameReleaseFullDate.getFullYear();
    const gameReleaseDate = gameReleaseFullDate.getDate();

    let gameScreenShotsUrls = [];
    if (currentGame.screenshots) {
      for (let i = 0; i < currentGame.screenshots.length; i++) {
        const gameScreenshotUrl = currentGame.screenshots[i].url;
        gameScreenShotsUrls.push(gameScreenshotUrl);
      }
    }

    const gameScreenshotsLists = gameScreenShotsUrls.map((screenshot) => {
      return (
        <li key={nanoid()}>
          <img src={screenshot}></img>
        </li>
      );
    });

    let starIcons = [];
    for (let i = 0; i < gameRating; i++) {
      starIcons.push(<ion-icon key={nanoid()} name="star"></ion-icon>);
    }

    let gameGenres = [];
    for (let i = 0; i < currentGame.genres.length; i++) {
      const gameGenre = " " + currentGame.genres[i].name;
      gameGenres.push(gameGenre);
    }
    let platforms = [];
    for (let i = 0; i < currentGame.platforms.length; i++) {
      const gamePlatform = currentGame.platforms[i].abbreviation;
      if (!gamePlatform) continue;
      platforms.push(gamePlatform);
    }
    const platformsLists = platforms.map((platform) => {
      return <li key={nanoid()}>{platform}</li>;
    });

    return (
      <Fragment>
        <div className="gaming__current-game-details-container">
          <img className="gaming__current-game-img" src={gameCoverImg}></img>
          <div className="gaming__current-game-overlay"></div>
          <SelectionContainer
            userIsLogedIn={userIsLogedIn}
            game={currentGame}
            setBuyBtnActive={setBuyBtnActive}
            gamesForCart={gamesForCart}
            setGamesForCart={setGamesForCart}
            setSelectedTab={setSelectedTab}
          />
        </div>
        {selectedTab === "about" && (
          <div className="gaming__current-game-about-container">
            <ul className="gaming__current-game-selection-details-ul">
              <li className="gaming__current-game-detail">
                <span>Game name:</span>
                {" " + currentGame.name}
              </li>
              <li className="gaming__current-game-detail">
                <span>Genres:</span>
                {" " + gameGenres.join(",")}
              </li>
              <li className="gaming__current-game-detail">
                <span>Rating:</span> {starIcons}
              </li>
              <li className="gaming__current-game-detail">
                <span>Release date:</span>
                {" " + gameReleaseMonth}/{gameReleaseDate}/{gameReleaseYear}
              </li>
              <li className="gaming__current-game-detail-platforms">
                <p>Supported platforms:</p>
                <ul className="gaming__current-game-platforms">
                  {platformsLists}
                </ul>
              </li>
            </ul>
          </div>
        )}
        {selectedTab === "about" && (
          <p className="gaming__current-game-detail-summary">
            <span>Game description :</span> {currentGame.summary}
          </p>
        )}
        {selectedTab === "screenshots" && (
          <div className="gaming__current-game-screenshots-container">
            {gameScreenshotsLists}
          </div>
        )}
      </Fragment>
    );
  };

  useEffect(() => {
    setCartPanelIsOpened(false);
  }, []);

  return (
    <section className="gaming__current-game-details-section">
      <main>{findCurrentGame()}</main>
      <CartPanel
        setGamesForCart={setGamesForCart}
        gamesForCart={gamesForCart}
        cartPanelIsOpened={cartPanelIsOpened}
        setCartPanelIsOpened={setCartPanelIsOpened}
      />
      <CartBtn
        gamesForCart={gamesForCart}
        cartPanelIsOpened={cartPanelIsOpened}
        setCartPanelIsOpened={setCartPanelIsOpened}
      />
    </section>
  );
};

export default AboutGame;
