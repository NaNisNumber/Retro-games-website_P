import React, { useEffect } from "react";
import GameCard from "../gameCard/GameCard";
import { nanoid } from "nanoid";
import "./WishList.css";
import { database, ref, onValue } from "../../firebaseConfig";
import auth from "../../firebaseConfig";

const WishListSection = ({
  wishList,
  setWishList,
  gamesForCart,
  setGamesForCart,
  setBuyBtnActive,
  userIsLogedIn,
}) => {
  const createWishListGameCards = () => {
    const wishListGameCards = wishList.map((game) => {
      const gameCover = game.cover.url.replace("t_thumb", "t_cover_big");
      const gameName = game.name.toUpperCase();
      const gamePrice = game.price;
      const numberOfStars = +game.starRating.slice(0, 1);
      const starIcons = [];
      for (let i = 0; i < numberOfStars; i++) {
        starIcons.push(<ion-icon key={nanoid()} name="star"></ion-icon>);
      }

      useEffect(() => {
        const heartBtns = document.querySelectorAll(".gaming__heart-btn");
        for (let i = 0; i < heartBtns.length; i++) {
          const heartBtn = heartBtns[i];
          const btnGameId = heartBtn.dataset.gameid;
          for (let j = 0; j < wishList.length; j++) {
            const wishListItemId = wishList[j].id;
            if (btnGameId == wishListItemId) {
              heartBtn.classList.add("gaming__heart-active");
            }
          }
        }
      }, []);

      return (
        <GameCard
          game={game}
          starIcons={starIcons}
          gameCover={gameCover}
          gameName={gameName}
          gamePrice={gamePrice}
          gamesForCart={gamesForCart}
          setGamesForCart={setGamesForCart}
          setBuyBtnActive={setBuyBtnActive}
          userIsLogedIn={userIsLogedIn}
          key={nanoid()}
        />
      );
    });

    return wishListGameCards;
  };

  const wishListGameCards = createWishListGameCards();

  return (
    <section className="gaming__wishlist-section">
      <main className="gaming__main-container">
        <div className="gaming__main-content">{wishListGameCards}</div>
      </main>
    </section>
  );
};

export default WishListSection;
