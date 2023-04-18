import React, { useEffect } from "react";
import GameCard from "../gameCard/GameCard";
import { nanoid } from "nanoid";
import "./WishList.css";

const WishListSection = ({
  wishList,
  setWishList,
  gamesForCart,
  setGamesForCart,
  setBuyBtnActive,
  userIsLogedIn,
  setWishlistBtnActive,
  games,
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

      const updateWishList = (e) => {
        setWishlistBtnActive(true);
        if (!userIsLogedIn) return;
        e.stopPropagation();
        const target = e.target.parentElement;
        const currentGameId = +target.dataset.gameid;
        const currentGame = games.find((game) => game.id === currentGameId);
        if (!currentGame) return;
        target.classList.add("gaming__heart-active");
        setWishList((prevWishlist) => [...prevWishlist, currentGame]);
        let gameExist = false;

        for (let i = 0; i < wishList.length; i++) {
          const game = wishList[i];
          if (game.id == currentGameId) {
            gameExist = true;
          }
        }
        if (gameExist) {
          const leftWishListGames = wishList.filter(
            (game) => game.id != currentGameId
          );
          setWishList(leftWishListGames);
        }
      };

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
          updateWishList={updateWishList}
        />
      );
    });

    return wishListGameCards;
  };

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
  }, [wishList]);

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
