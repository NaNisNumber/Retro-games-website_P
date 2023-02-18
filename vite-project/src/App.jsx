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
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedComponents
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
            path="shop"
            element={
              <Shop
                filterPanelIsOpened={filterPanelIsOpened}
                setFilterPanelIsOpened={setFilterPanelIsOpened}
              />
            }
          />
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
