import "./App.css";
import { useState, Fragment, useEffect } from "react";
import SharedComponents from "./components/SharedComponents";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Overlays from "../Overlays";
import AboutGame from "./components/shop-section/aboutGame/AboutGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import auth from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

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
  const [gameId, setGameId] = useState(null);
  const [userIsLogedIn, setUserIsLogedIn] = useState(false);
  const [buyBtnActive, setBuyBtnActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsLogedIn(true);

        const uid = user.uid;
      } else {
        setUserIsLogedIn(false);
      }
    });
  });

  const gamesCopy = [...games];

  useEffect(() => {
    const retrieveGameData = async () => {
      const response = await fetch("http://localhost:5000");
      const games = await response.json();
      setGames(games);
    };
    retrieveGameData();
  }, []);

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
      />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SharedComponents
                setBuyBtnActive={setBuyBtnActive}
                userIsLogedIn={userIsLogedIn}
                setOpenFilterBtnRef={setOpenFilterBtnRef}
                setFilterPanelIsOpened={setFilterPanelIsOpened}
                filterPanelIsOpened={filterPanelIsOpened}
                mainMenuIsClosed={mainMenuIsClosed}
                setMainMenuIsClosed={setMainMenuIsClosed}
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
                  setGameId={setGameId}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                  cartPanelIsOpened={cartPanelIsOpened}
                  setBuyBtnActive={setBuyBtnActive}
                />
              }
            ></Route>

            <Route
              path="/shop/:gameId"
              element={
                <AboutGame
                  cartPanelIsOpened={cartPanelIsOpened}
                  setCartPanelIsOpened={setCartPanelIsOpened}
                  games={games}
                  gameId={gameId}
                />
              }
            ></Route>

            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={<Login userIsLogedIn={userIsLogedIn} />}
            />
            <Route
              path="register"
              element={<Register userIsLogedIn={userIsLogedIn} />}
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
