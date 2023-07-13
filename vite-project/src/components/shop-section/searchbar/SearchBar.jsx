import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = ({ setFilteredGamesBySearchBar, gamesData }) => {
  const searchBarRef = useRef(null);

  const filterGamesByName = (e) => {
    let filteredGames = [];
    const targetValue = e.target.value.toLowerCase();
    const numberOfChars = targetValue.length; // num of chars written by the user
    if (targetValue === "") {
      filteredGames = [];
      setFilteredGamesBySearchBar(filteredGames);
    }
    if (gamesData.length === 0 || !targetValue) return;

    for (let i = 0; i < gamesData.length; i++) {
      const game = gamesData[i];
      const gameName = game.name.toLowerCase();
      if (targetValue === gameName.slice(0, numberOfChars)) {
        filteredGames.push(game);
      }
    }
    setFilteredGamesBySearchBar(filteredGames);
  };

  return (
    <div ref={searchBarRef} className="gaming__searchbar">
      <input
        onChange={(e) => {
          filterGamesByName(e);
        }}
        placeholder="Search Game"
        onFocus={() => {
          searchBarRef.current.classList.add("add-shadow");
        }}
        onBlur={() => {
          searchBarRef.current.classList.remove("add-shadow");
        }}
        className="gaming__searchbar-input"
        type={"text"}
      />
      <ion-icon name="search"></ion-icon>
    </div>
  );
};

export default SearchBar;
