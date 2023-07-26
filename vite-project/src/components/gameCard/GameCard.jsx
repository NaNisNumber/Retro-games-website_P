import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BuyBtn from "../shop-section/buttons/buy-button/BuyBtn";
import auth from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const GameCard = (props) => {
  const [userIsLoged, setUserIsLoged] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsLoged(true);
      } else {
        setUserIsLoged(false);
      }
    });
  }, []);

  const updateWishList = (e) => {
    props.setWishlistBtnActive(true);
    e.stopPropagation();
    const target = e.target.parentElement;
    const currentGameId = +target.dataset.gameid;
    const currentGame = props.gamesData.find(
      (game) => game.id === currentGameId
    );
    if (!currentGame) return;
    target.classList.add("gaming__heart-active");
    props.setWishList((prevWishlist) => [...prevWishlist, currentGame]);

    let gameExist = false;

    for (let i = 0; i < props.wishList.length; i++) {
      const game = props.wishList[i];
      if (game.id == currentGameId) {
        gameExist = true;
      }
    }

    if (gameExist) {
      const leftWishListGames = props.wishList.filter(
        (game) => game.id != currentGameId
      );

      props.setWishList(leftWishListGames);
    }
  };

  return (
    <div className="gaming__game-container">
      <div className="gaming__game-fav-container">
        <div className="gaming__stars-container">{props.starIcons}</div>
        <button
          data-gameid={props.game.id}
          onClick={(e) => {
            if (!userIsLoged) return;
            updateWishList(e);
          }}
          className="gaming__heart-btn"
        >
          <ion-icon name="heart"></ion-icon>
        </button>
      </div>
      <img className="gaming__game-img" src={props.gameCover}></img>
      <p className="gaming__game-name">{props.gameName}</p>
      <div className="gaming__game-actions-container">
        <Link to={`/shop/${props.game.id}`}>
          <button className="gaming__about-game-btn">About Game</button>
        </Link>
        <BuyBtn
          userIsLogedIn={props.userIsLogedIn}
          game={props.game}
          gamesForCart={props.gamesForCart}
          setGamesForCart={props.setGamesForCart}
          setBuyBtnActive={props.setBuyBtnActive}
        />
        <span className="gaming__game-price">{props.gamePrice}</span>
      </div>
    </div>
  );
};

export default GameCard;
