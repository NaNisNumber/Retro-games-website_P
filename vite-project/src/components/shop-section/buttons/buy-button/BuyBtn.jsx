import React from "react";
import "./BuyBtn.css";
const BuyBtn = ({
  setBuyBtnActive,
  gamesForCart,
  setGamesForCart,
  game,
  userIsLogedIn,
}) => {
  const addGamesToCart = () => {
    let gameExistsOnCart = false;
    const gameToBeAddedId = game.id;

    for (let i = 0; i < gamesForCart.length; i++) {
      const cartGame = gamesForCart[i];
      const cartGameId = cartGame.id;
      if (gameToBeAddedId === cartGameId) {
        gameExistsOnCart = true;
      }
    }

    if (userIsLogedIn && !gameExistsOnCart) {
      setGamesForCart((prevGames) => [...prevGames, game]);
    }

    setBuyBtnActive(true);
  };

  return (
    <button onClick={addGamesToCart} className="gaming__buy-game-btn">
      Buy
    </button>
  );
};

export default BuyBtn;
