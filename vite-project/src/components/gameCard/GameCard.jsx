import React from "react";
import { Link } from "react-router-dom";
import BuyBtn from "../shop-section/buttons/buy-button/BuyBtn";

const GameCard = (props) => {
  return (
    <div className="gaming__game-container">
      <div className="gaming__game-fav-container">
        <div className="gaming__stars-container">{props.starIcons}</div>
        <button
          data-gameid={props.game.id}
          onClick={(e) => {
            props.updateWishList(e);
          }}
          className="gaming__heart-btn"
        >
          <ion-icon name="heart"></ion-icon>
        </button>
      </div>
      <img className="gaming__game-img" src={props.gameCover}></img>
      <p className="gaming__game-name">{props.gameName}</p>
      <div className="gaming__game-actions-container">
        <Link to={`/Retro-games-website_P/shop/${props.game.id}`}>
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
