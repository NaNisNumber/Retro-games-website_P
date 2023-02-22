import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./searchbar/SearchBar";
import BuyBtn from "./buttons/buy-button/BuyBtn";
import "./ShopSection.css";
const ShopSection = ({
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  games,
  setGames,
  setGameId,
  openFilterBtnRef,
}) => {
  const [genres, setGenres] = useState([]);
  const [filterByGenre, setFilterByGenre] = useState([]);
  const [pageContents, setPageContents] = useState([]);
  const [pageId, setPageId] = useState(0);
  const filtersToBeDisplayedRef = useRef(null);
  const filterContainerRef = useRef(null);
  const numberOfPages = pageContents.length > 0 && pageContents.length;

  const divideContentByLocalPages = () => {
    let pages = [];
    const gamesPerPage = 40;
    const numberOfPages = Math.ceil(games.length / gamesPerPage);
    let totalAddedOnPages = 0;

    for (let i = 0; i < numberOfPages; i++) {
      pages.push([]);
      if (i === 0) {
        totalAddedOnPages = 0;
      } else {
        // if the page is full then fill the next page with the items from where it left off
        totalAddedOnPages = totalAddedOnPages + gamesPerPage - 1;
      }
      if (i > 0) totalAddedOnPages += 1; // add +1 to the iteration so that if ex: 2nd iteration ends at j===39 it won t start the 3rd iteration including again the 39;
      for (let j = totalAddedOnPages; j < games.length; j++) {
        const page = pages[i];
        const game = games[j];
        if (page.length != gamesPerPage) {
          page.push(game);
        }
      }
    }
    setPageContents(pages);
  };

  useEffect(() => {
    if (games.length > 0) {
      divideContentByLocalPages();
    }
  }, [games]);

  const goToPrevPage = () => {
    if (pageId === 0) return;
    setPageId((prevPageId) => prevPageId - 1);
  };

  const goToNextPage = () => {
    if (pageId > numberOfPages - 2) return; // -2 instead -1 because of how react handles state changes
    setPageId((prevPageId) => prevPageId + 1);
  };

  const changePageId = (e) => {
    let currentInputValue = e.target.value;
    if (currentInputValue >= 0 && currentInputValue <= 6) {
      setPageId(+currentInputValue);
    }
  };

  const createGameCard = () => {
    const gameCards =
      pageContents.length > 0 &&
      (pageId || pageId === 0) &&
      pageContents[pageId].map((game) => {
        const gameCover = game.cover.url.replace("t_thumb", "t_cover_big");
        const gameName = game.name.toUpperCase();
        return (
          <div key={nanoid()} className="gaming__game-container">
            <img className="gaming__game-img" src={gameCover}></img>
            <p className="gaming__game-name">{gameName}</p>
            <div className="gaming__game-actions-container">
              <button className="gaming__about-game-btn">About Game</button>
              <BuyBtn />
            </div>
          </div>
        );
      });
    return gameCards;
  };

  const gameCards = createGameCard();

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
        <div className="gaming__mobile-pages">
          <p className="gaming__mobile-pages-text">Go to page:</p>
          <button onClick={goToPrevPage} className="gaming__mobile-pages-prev">
            <ion-icon name="remove"></ion-icon>
          </button>
          <input
            value={pageId.toString()}
            onChange={(e) => {
              changePageId(e);
            }}
            className="gaming__mobile-pages-input"
            type={"number"}
          ></input>
          <button onClick={goToNextPage} className="gaming__mobile-pages-next">
            <ion-icon name="add"></ion-icon>
          </button>
          <span className="gaming__mobile-pages-span">/</span>
          <span className="gaming__mobile-pages-span">{numberOfPages - 1}</span>
        </div>
      </div>

      <button className="gaming__cart">
        <ion-icon name="cart"></ion-icon>
      </button>
      <main className="gaming__main-container">
        <div className="gaming__main-content">{gameCards}</div>
      </main>
    </section>
  );
};

export default ShopSection;
