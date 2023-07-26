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
import { HashRouter, Routes, Route } from "react-router-dom";
import auth from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { writeUserData, database, ref, onValue } from "./firebaseConfig";

function App() {
  const [mainMenuIsClosed, setMainMenuIsClosed] = useState(true);
  const [filterPanelIsOpened, setFilterPanelIsOpened] = useState(false);
  const [cartPanelIsOpened, setCartPanelIsOpened] = useState(false);
  const [openFilterBtnRef, setOpenFilterBtnRef] = useState(null);
  const [displayOverlayGamesNotFound, setDisplayOverlayGamesNotFound] =
    useState(false);
  const [userIsLogedIn, setUserIsLogedIn] = useState(false);
  const [buyBtnActive, setBuyBtnActive] = useState(false);
  const [wishlistBtnActive, setWishlistBtnActive] = useState(false);
  const [gamesForCart, setGamesForCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [gamesData, setGamesData] = useState([]);
  const [games, setSliderGames] = useState([]);

  useEffect(() => {
    const retrieveLastPageId = async () => {
      const response = await fetch(
        `https://retro-gaming-games-server.herokuapp.com/id-for-last-page`
      );
      const page = await response.json();

      setLastPage(page);
    };
    retrieveLastPageId();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsLogedIn(true);
      } else {
        setUserIsLogedIn(false);
      }
    });
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

  return (
    <Fragment>
      <HashRouter>
        <Overlays
          buyBtnActive={buyBtnActive}
          setBuyBtnActive={setBuyBtnActive}
          userIsLogedIn={userIsLogedIn}
          displayOverlayGamesNotFound={displayOverlayGamesNotFound}
          setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
          wishlistBtnActive={wishlistBtnActive}
          setWishlistBtnActive={setWishlistBtnActive}
        />
        <Routes>
          <Route
            path=""
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
                  games={games}
                  setSliderGames={setSliderGames}
                  mainMenuIsClosed={mainMenuIsClosed}
                  setMainMenuIsClosed={setMainMenuIsClosed}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  gamesData={gamesData}
                  setGamesData={setGamesData}
                  lastPage={lastPage}
                  openFilterBtnRef={openFilterBtnRef}
                  setOpenFilterBtnRef={setOpenFilterBtnRef}
                  filterPanelIsOpened={filterPanelIsOpened}
                  setFilterPanelIsOpened={setFilterPanelIsOpened}
                  displayOverlayGamesNotFound={displayOverlayGamesNotFound}
                  setDisplayOverlayGamesNotFound={
                    setDisplayOverlayGamesNotFound
                  }
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
                  games={games}
                  userIsLogedIn={userIsLogedIn}
                  cartPanelIsOpened={cartPanelIsOpened}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                  gamesData={gamesData}
                  gamesForCart={gamesForCart}
                  setGamesForCart={setGamesForCart}
                  setBuyBtnActive={setBuyBtnActive}
                />
              }
            ></Route>

            <Route
              path="/wishlist"
              element={
                <WishList
                  gamesData={gamesData}
                  gamesForCart={gamesForCart}
                  setGamesForCart={setGamesForCart}
                  wishList={wishList}
                  setWishList={setWishList}
                  setBuyBtnActive={setBuyBtnActive}
                  userIsLogedIn={userIsLogedIn}
                  setWishlistBtnActive={setWishlistBtnActive}
                  cartPanelIsOpened={cartPanelIsOpened}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                />
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={<Login userIsLogedIn={userIsLogedIn} />}
            />
            <Route
              path="/register"
              element={<Register userIsLogedIn={userIsLogedIn} />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
