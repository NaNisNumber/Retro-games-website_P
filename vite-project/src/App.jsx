import "./App.css";
import { useState } from "react";
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

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mainMenuIsClosed, setMainMenuIsClosed] = useState(true);
  const [filterPanelIsOpened, setFilterPanelIsOpened] = useState(false);
  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [openFilterBtnRef, setOpenFilterBtnRef] = useState(null);
  return (
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
                openFilterBtnRef={openFilterBtnRef}
                setGameId={setGameId}
                setGames={setGames}
                games={games}
                filterPanelIsOpened={filterPanelIsOpened}
                setFilterPanelIsOpened={setFilterPanelIsOpened}
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
  );
}

export default App;
