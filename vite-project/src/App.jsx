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
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mainMenuIsClosed, setMainMenuIsClosed] = useState(true);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedComponents
              setIsCreatingAccount={setIsCreatingAccount}
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
          <Route path="shop" element={<Shop />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="login"
            element={<Login isCreatingAccount={isCreatingAccount} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
