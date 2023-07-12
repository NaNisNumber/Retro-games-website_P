import React, { useEffect } from "react";
import GameCard from "../gameCard/GameCard";
import { nanoid } from "nanoid";
import "./WishList.css";
import CartBtn from "../shop-section/buttons/cartBtn/CartBtn";
import CartPanel from "../shop-section/CartPanel/CartPanel";

const WishListSection = ({
  gamesData,
  wishList,
  setWishList,
  gamesForCart,
  setGamesForCart,
  setBuyBtnActive,
  userIsLogedIn,
  setWishlistBtnActive,
  cartPanelIsOpened,
  setCartPanelIsOpened,
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

      return (
        <GameCard
          game={game}
          gamesData={gamesData}
          wishList={wishList}
          setWishList={setWishList}
          setWishlistBtnActive={setWishlistBtnActive}
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
  });

  const wishListGameCards = createWishListGameCards();

  return (
    <section className="gaming__wishlist-section">
      <main className="gaming__main-container">
        <div className="gaming__main-content">{wishListGameCards}</div>
        {userIsLogedIn && (
          <CartPanel
            gamesForCart={gamesForCart}
            setGamesForCart={setGamesForCart}
            setCartPanelIsOpened={setCartPanelIsOpened}
            cartPanelIsOpened={cartPanelIsOpened}
          />
        )}
        {userIsLogedIn && (
          <CartBtn
            gamesForCart={gamesForCart}
            cartPanelIsOpened={cartPanelIsOpened}
            setCartPanelIsOpened={setCartPanelIsOpened}
          />
        )}
      </main>
    </section>
  );
};

export default WishListSection;
