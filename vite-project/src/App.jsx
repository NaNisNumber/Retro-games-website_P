import "./App.css";
import { useState, Fragment, useEffect } from "react";
import SharedComponents from "./components/SharedComponents";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overlays from "./Overlays";
import AboutGame from "./components/shop-section/aboutGame/AboutGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import auth from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { writeUserData, database, ref, onValue } from "./firebaseConfig";

function App() {
  const [mainMenuIsClosed, setMainMenuIsClosed] = useState(true);
  const [filterPanelIsOpened, setFilterPanelIsOpened] = useState(false);
  const [cartPanelIsOpened, setCartPanelIsOpened] = useState(false);
  const [games, setGames] = useState([]);
  const [pageContents, setPageContents] = useState([]);
  const numberOfPages = pageContents.length > 0 && pageContents.length;
  const [openFilterBtnRef, setOpenFilterBtnRef] = useState(null);
  const [displayOverlayGamesNotFound, setDisplayOverlayGamesNotFound] =
    useState(true);
  const [areInitialNumberOfPages, setAreInitialNumberOfPages] = useState(null);
  const [userIsLogedIn, setUserIsLogedIn] = useState(false);
  const [buyBtnActive, setBuyBtnActive] = useState(false);
  const [wishlistBtnActive, setWishlistBtnActive] = useState(false);
  const [gamesForCart, setGamesForCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsLogedIn(true);
      } else {
        setUserIsLogedIn(false);
      }
    });
  });

  const gamesCopy = [...games];

  useEffect(() => {
    const retrieveGameData = async () => {
      const response = await fetch(
        "https://retro-gaming-games-server.herokuapp.com/"
      );
      const games = await response.json();
      setGames(games);
    };
    retrieveGameData();
  }, []);

  useEffect(() => {
    if (!userIsLogedIn) return;
    const uid = auth.currentUser && auth.currentUser.uid;
    const userRef = ref(database, "users/" + uid);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const gamesWishListDbStr = data && data.gamesForWishList;
      const gamesWishListDbArr = JSON.parse(gamesWishListDbStr);

      if (data && data.gamesForWishList) {
        setWishList(gamesWishListDbArr);
      }

      const gamesCartDbStr = data && data.gamesForCart;
      const gamesCartDbArr = JSON.parse(gamesCartDbStr);

      if (data && data.gamesForCart) {
        setGamesForCart(gamesCartDbArr);
      }
    });
  }, [userIsLogedIn]);

  useEffect(() => {
    if (!userIsLogedIn) return;
    const currentUser = auth.currentUser.uid;
    writeUserData(currentUser, {
      gamesForCart: JSON.stringify(gamesForCart),
      gamesForWishList: JSON.stringify(wishList),
    });
  }, [gamesForCart, wishList]);

  const createLists = () => {
    for (let i = 0; i < gamesCopy.length; i++) {
      const game = gamesCopy[i];
      const gameRating = game.rating;

      if (gameRating <= 20) {
        game.starRating = "1 star";
        game.price = "10$";
      } else if (gameRating > 20 && gameRating <= 40) {
        game.starRating = "2 stars";
        game.price = "10$";
      } else if (gameRating > 40 && gameRating <= 60) {
        game.starRating = "3 stars";
        game.price = "15$";
      } else if (gameRating > 60 && gameRating <= 80) {
        game.starRating = "4 stars";
        game.price = "20$";
      } else {
        game.starRating = "5 stars";
        game.price = "22$";
      }
    }
  };

  gamesCopy.length > 0 && createLists();

  useEffect(() => {
    setGames(gamesCopy);
  }, []);

  return (
    <Fragment>
      <Overlays
        buyBtnActive={buyBtnActive}
        setBuyBtnActive={setBuyBtnActive}
        userIsLogedIn={userIsLogedIn}
        areInitialNumberOfPages={areInitialNumberOfPages}
        numberOfPages={numberOfPages}
        displayOverlayGamesNotFound={displayOverlayGamesNotFound}
        setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
        wishlistBtnActive={wishlistBtnActive}
        setWishlistBtnActive={setWishlistBtnActive}
      />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SharedComponents
                setBuyBtnActive={setBuyBtnActive}
                setWishlistBtnActive={setWishlistBtnActive}
                userIsLogedIn={userIsLogedIn}
                setOpenFilterBtnRef={setOpenFilterBtnRef}
                setFilterPanelIsOpened={setFilterPanelIsOpened}
                filterPanelIsOpened={filterPanelIsOpened}
                mainMenuIsClosed={mainMenuIsClosed}
                setMainMenuIsClosed={setMainMenuIsClosed}
                setGamesForCart={setGamesForCart}
                wishList={wishList}
                setWishList={setWishList}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  mainMenuIsClosed={mainMenuIsClosed}
                  setMainMenuIsClosed={setMainMenuIsClosed}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  pageContents={pageContents}
                  setPageContents={setPageContents}
                  numberOfPages={numberOfPages}
                  openFilterBtnRef={openFilterBtnRef}
                  setOpenFilterBtnRef={setOpenFilterBtnRef}
                  games={games}
                  filterPanelIsOpened={filterPanelIsOpened}
                  setFilterPanelIsOpened={setFilterPanelIsOpened}
                  displayOverlayGamesNotFound={displayOverlayGamesNotFound}
                  setDisplayOverlayGamesNotFound={
                    setDisplayOverlayGamesNotFound
                  }
                  areInitialNumberOfPages={areInitialNumberOfPages}
                  setAreInitialNumberOfPages={setAreInitialNumberOfPages}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                  cartPanelIsOpened={cartPanelIsOpened}
                  setBuyBtnActive={setBuyBtnActive}
                  gamesForCart={gamesForCart}
                  setGamesForCart={setGamesForCart}
                  userIsLogedIn={userIsLogedIn}
                  wishList={wishList}
                  setWishList={setWishList}
                  setWishlistBtnActive={setWishlistBtnActive}
                />
              }
            ></Route>

            <Route
              path="/shop/:gameId"
              element={
                <AboutGame
                  userIsLogedIn={userIsLogedIn}
                  cartPanelIsOpened={cartPanelIsOpened}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                  games={games}
                  gamesForCart={gamesForCart}
                  setGamesForCart={setGamesForCart}
                  setBuyBtnActive={setBuyBtnActive}
                />
              }
            ></Route>

            <Route
              path="wishlist"
              element={
                <WishList
                  gamesForCart={gamesForCart}
                  setGamesForCart={setGamesForCart}
                  wishList={wishList}
                  setWishList={setWishList}
                  setBuyBtnActive={setBuyBtnActive}
                  userIsLogedIn={userIsLogedIn}
                  setWishlistBtnActive={setWishlistBtnActive}
                  games={games}
                  cartPanelIsOpened={cartPanelIsOpened}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                />
              }
            />

            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={<Login userIsLogedIn={userIsLogedIn} />}
            />
            <Route
              path="register"
              element={<Register userIsLogedIn={userIsLogedIn} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
