import React, { useEffect, useRef } from "react";
import "./CartPanel.css";
import { nanoid } from "nanoid";
import { ref, database, onValue } from "../../../firebaseConfig";
import auth from "../../../firebaseConfig";

const CartPanel = ({
  setCartPanelIsOpened,
  cartPanelIsOpened,
  gamesForCart,
  setGamesForCart,
  userIsLogedIn,
}) => {
  const cartPanelRef = useRef(null);
  let totalPrice = 0;

  useEffect(() => {
    if (!userIsLogedIn) return;
    const uid = auth.currentUser && auth.currentUser.uid;
    const userRef = ref(database, "users/" + uid);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const gamesCartDbStr = data && data.gamesForCart;
      const gamesCartDbArr = JSON.parse(gamesCartDbStr);

      if (data && data.gamesForCart) {
        setGamesForCart(gamesCartDbArr);
      }
    });
  }, [userIsLogedIn]);

  const cartItems = gamesForCart.map((game) => {
    const gameName = game.name;
    const gamePrice = game.price;
    const gamePriceValue = parseInt(gamePrice);
    const gameCoverImg = game.cover.url;
    totalPrice = totalPrice + gamePriceValue;

    const removeCartItem = (e) => {
      const gameId = e.target.dataset.gameid;
      let leftGamesOnCart = [];

      gamesForCart.find((gameOnCart) => {
        if (gameOnCart.id != gameId) {
          leftGamesOnCart.push(gameOnCart);
        }
      });
      setGamesForCart(leftGamesOnCart);
    };

    return (
      <article key={nanoid()} className="gaming__cart-panel-item-container">
        <p className="gaming__cart-panel-item-text gaming__cart-panel-item-name">
          {gameName}
        </p>
        <div className="gaming__cart-panel-item">
          <img src={gameCoverImg} />

          <div className="gaming__cart-panel-pqr">
            <p className="gaming__cart-panel-item-text">
              quantity:<span className="gaming__cart-panel-span">1</span>
            </p>
            <p className="gaming__cart-panel-item-text">
              price:
              <span className="gaming__cart-panel-span">{gamePrice}</span>
            </p>
            <button
              onClick={(e) => {
                removeCartItem(e);
              }}
              data-gameid={game.id}
              className="gaming__cart-panel-item-remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      </article>
    );
  });

  const toggleCartPanel = () => {
    if (!cartPanelRef.current) return;
    if (cartPanelIsOpened) {
      cartPanelRef.current.classList.add("opened-cart-panel");
    } else {
      cartPanelRef.current.classList.remove("opened-cart-panel");
    }
  };
  toggleCartPanel();

  return (
    <div ref={cartPanelRef} className="gaming__cart-panel">
      <button
        onClick={() => {
          setCartPanelIsOpened(false);
        }}
        className="gaming__cart-panel-close-btn"
      >
        <ion-icon name="close"></ion-icon>
      </button>
      <div className="gaming__cart-panel-items">{cartItems}</div>
      <p className="gaming__cart-panel-total-price">Total: {totalPrice}$</p>
    </div>
  );
};

export default CartPanel;
