import "./App.css";
import { useState, Fragment } from "react";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mainMenuIsClosed, setMainMenuIsClosed] = useState(true);
  const [filterPanelIsOpened, setFilterPanelIsOpened] = useState(false);
  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [pageContents, setPageContents] = useState([]);
  const numberOfPages = pageContents.length > 0 && pageContents.length;
  const [openFilterBtnRef, setOpenFilterBtnRef] = useState(null);
  const [displayOverlayGamesNotFound, setDisplayOverlayGamesNotFound] =
    useState(true);
  const [areInitialNumberOfPages, setAreInitialNumberOfPages] = useState(null);

  return (
    <Fragment>
      {areInitialNumberOfPages && (
        <Overlays
          numberOfPages={numberOfPages}
          displayOverlayGamesNotFound={displayOverlayGamesNotFound}
          setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
        />
      )}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SharedComponents
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
                  setGameId={setGameId}
                  setGames={setGames}
                  games={games}
                  filterPanelIsOpened={filterPanelIsOpened}
                  setFilterPanelIsOpened={setFilterPanelIsOpened}
                  displayOverlayGamesNotFound={displayOverlayGamesNotFound}
                  setDisplayOverlayGamesNotFound={
                    setDisplayOverlayGamesNotFound
                  }
                  areInitialNumberOfPages={areInitialNumberOfPages}
                  setAreInitialNumberOfPages={setAreInitialNumberOfPages}
                />
              }
            ></Route>
            {gameId && <Route path={`/shop/${gameId}`} element={<p>etee</p>} />}
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
