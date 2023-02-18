import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const searchBarRef = useRef(null);
  return (
    <div ref={searchBarRef} className="gaming__searchbar">
      <input
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
