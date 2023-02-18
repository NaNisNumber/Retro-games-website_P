import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./searchbar/SearchBar";
import "./ShopSection.css";
const ShopSection = ({ filterPanelIsOpened, setFilterPanelIsOpened }) => {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filterByGenre, setFilterByGenre] = useState([]);
  const filtersToBeDisplayedRef = useRef(null);
  const filterContainerRef = useRef(null);
  const openFilterBtnRef = useRef(null);

  useEffect(() => {
    const retrieveGameData = async () => {
      const response = await fetch("http://localhost:5000");
      const games = await response.json();
      setGames(games);
    };
    retrieveGameData();
  }, []);

  useEffect(() => {
    const retrieveGameGenres = async () => {
      const response = await fetch("http://localhost:5002");
      const genres = await response.json();

      setGenres(genres);
    };
    retrieveGameGenres();
  }, []);

  const toggleFilters = () => {
    filtersToBeDisplayedRef.current.classList.toggle(
      "gaming__filter-ul-hidden"
    );
  };
  const closeFilterPanel = (e) => {
    if (
      e.target.closest(".gaming__filter-inner-container") ===
      filtersToBeDisplayedRef.current.parentElement
    )
      return;

    filtersToBeDisplayedRef.current.classList.add("gaming__filter-ul-hidden");
  };
  const createGenresLists = () => {
    return genres.map((genre) => (
      <li key={nanoid()}>
        {genre}
        <input data-filter-genre={genre} type={"checkbox"}></input>
      </li>
    ));
  };
  const genresLists = createGenresLists();

  const addGenresToFilter = (e) => {
    const target = e.target;
    if (target.nodeName != "INPUT") return;
    const genreForFilter = target.dataset.filterGenre;
    if (filterByGenre.includes(genreForFilter)) return;
    setFilterByGenre((prevFilterByGenre) => [
      ...prevFilterByGenre,
      genreForFilter,
    ]);
  };
  const toggleFilterPanel = () => {
    if (!filterContainerRef.current) return;
    if (filterPanelIsOpened) {
      filterContainerRef.current.classList.add("gaming__filter-opened");
    } else {
      filterContainerRef.current.classList.remove("gaming__filter-opened");
    }
  };

  toggleFilterPanel();

  return (
    <section
      onClick={(e) => {
        closeFilterPanel(e);
      }}
      className="gaming__shop-section"
    >
      <div ref={filterContainerRef} className="gaming__filter-container">
        <div className="gaming__searchbar-container">
          <SearchBar />
          <button
            onClick={() => {
              openFilterBtnRef.current.classList.remove(
                "gaming__hide-open-btn"
              );
              openFilterBtnRef.current.classList.add(
                "gaming__display-open-btn"
              );

              setFilterPanelIsOpened(false);
            }}
            className="gaming__close-filter"
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
        <p>Filter By:</p>
        <div className="gaming__filters">
          <div className="gaming__filter-inner-container">
            <div onClick={toggleFilters} className="gaming__filter-name">
              <p> Genre</p>
            </div>
            <ul
              onClick={(e) => {
                addGenresToFilter(e);
              }}
              ref={filtersToBeDisplayedRef}
              className="gaming__filter-ul-visible gaming__filter-ul-hidden"
            >
              {genresLists}
            </ul>
          </div>
        </div>
      </div>
      <button
        ref={openFilterBtnRef}
        onClick={() => {
          openFilterBtnRef.current.classList.remove("gaming__display-open-btn");
          openFilterBtnRef.current.classList.add("gaming__hide-open-btn");
          setFilterPanelIsOpened(true);
        }}
        className="gaming__open-filter"
      >
        <ion-icon name="search"></ion-icon>
      </button>
      <main></main>
    </section>
  );
};

export default ShopSection;
