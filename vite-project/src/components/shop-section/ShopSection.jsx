import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import SearchBar from "./searchbar/SearchBar";
import BuyBtn from "./buttons/buy-button/BuyBtn";
import OpenFilterBtn from "./buttons/open-filter-btn/OpenFilterBtn";
import FilterCriterion from "./filterCriterion/FilterCriterion";
import "./ShopSection.css";
import CartBtn from "./buttons/cartBtn/CartBtn";
import CartPanel from "./CartPanel/CartPanel";
import CloseFilterPanelBtn from "./buttons/CloseFilterPanel/CloseFilterPanelBtn";

const ShopSection = ({
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  games,
  openFilterBtnRef,
  setOpenFilterBtnRef,
  pageContents,
  setPageContents,
  numberOfPages,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
  areInitialNumberOfPages,
  setAreInitialNumberOfPages,
  setGameId,
  setCartPanelIsOpened,
  cartPanelIsOpened,
  setBuyBtnActive,
}) => {
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({});
  const [pageId, setPageId] = useState(0);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filteredGamesBySearchBar, setFilteredGamesBySearchBar] = useState([]);
  const [filterInputIdentifiers, setFilterInputIdentifiers] = useState([]);
  const [filtersToBeDisplayedRefs, setFiltersToBeDisplayedRefs] = useState([]);
  const [menusContainer, setMenusContainer] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  const [ulListsAreOpened, setUlListsAreOpened] = useState({
    Genres: false,
    Rating: false,
    Price: false,
  });
  const [tabWasClickedTwice, setTabWasClickedTwice] = useState({
    Genres: false,
    Rating: false,
    Price: false,
  });
  const [numOfOpenLists, setNumOfOpenLists] = useState(1);
  const filterContainerRef = useRef(null);
  const ratings = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];
  const prices = ["10$", "15$", "20$", "22$"];

  useEffect(() => {
    const retrieveGameGenres = async () => {
      const response = await fetch("http://localhost:5002");
      const genres = await response.json();

      setGenres(genres);
    };
    retrieveGameGenres();
  }, []);

  const closeFilterPanel = (e) => {
    if (e.target.closest(".gaming__filter-ul-visible")) return;
    setNumOfOpenLists(1);
    setCurrentTab(null);
    setUlListsAreOpened({
      Genres: false,
      Rating: false,
      Price: false,
    });
    setTabWasClickedTwice({
      Genres: false,
      Rating: false,
      Price: false,
    });
    for (let i = 0; i < filtersToBeDisplayedRefs.length; i++) {
      filtersToBeDisplayedRefs[i].current.classList.add(
        "gaming__filter-ul-hidden"
      );
      filtersToBeDisplayedRefs[i].current.classList.remove(
        "gaming__filter-ul-visible-delayed"
      );
    }
  };

  const createFilterLists = (criterion, type) => {
    return criterion.map((item, i) => (
      <li key={nanoid()}>
        {item}
        <input
          data-i={i}
          data-filter-item={item}
          data-filter-type={type}
          type={"checkbox"}
        ></input>
      </li>
    ));
  };
  const genresLists = createFilterLists(genres, "genre");
  const ratingLists = createFilterLists(ratings, "rating");
  const priceLists = createFilterLists(prices, "price");

  const updateFilter = (e) => {
    setPageId(0);
    const target = e.target;
    const inputIsSelected = target.checked;

    if (target.nodeName != "INPUT") return;
    const itemForFilter = [target.dataset.filterItem];
    const criterionType = target.dataset.filterType;
    const inputIdentifier = [+target.dataset.i];

    const updateFilterStates = (setFunction, item) => {
      setFunction((prevFilters) => {
        let prevCriterionTypeItems;
        if (!inputIsSelected) {
          prevCriterionTypeItems = [];
        } else {
          prevCriterionTypeItems = Array.isArray(prevFilters[criterionType])
            ? prevFilters[criterionType]
            : [];
        }

        return {
          ...prevFilters,
          [criterionType]: [...prevCriterionTypeItems, ...item],
        };
      });
    };

    // remove items from filter list
    if (!inputIsSelected) {
      const leftIdentifiers = filterInputIdentifiers[criterionType].filter(
        (identifier) => identifier !== inputIdentifier[0]
      );

      const leftItems = filters[criterionType].filter(
        (item) => item !== itemForFilter[0]
      );

      updateFilterStates(setFilters, leftItems);
      updateFilterStates(setFilterInputIdentifiers, leftIdentifiers);
    }
    // add items to filter list
    if (
      filters[criterionType] &&
      filters[criterionType].includes(itemForFilter[0])
    )
      return;

    updateFilterStates(setFilters, itemForFilter);
    updateFilterStates(setFilterInputIdentifiers, inputIdentifier);
  };

  useEffect(() => {
    const createFilteredGames = () => {
      if (games.length === 0) return;
      let filteredGames = [];
      let areIncluded;

      for (let i = 0; i < games.length; i++) {
        areIncluded = null;
        const game = games[i];
        const genresListOfCurrentGame = game.genres;
        const starRating = game.starRating;
        const price = game.price;

        // the criterios that are present on the game itself
        const criterios = { genre: [], rating: [], price: [] };

        if (!genresListOfCurrentGame) continue;
        if (filters.hasOwnProperty("genre")) {
          for (let j = 0; j < genresListOfCurrentGame.length; j++) {
            const genreName = genresListOfCurrentGame[j].name;
            criterios.genre.push(genreName);
          }
        }
        if (filters.hasOwnProperty("rating")) {
          criterios.rating.push(starRating);
        }
        if (filters.hasOwnProperty("price")) {
          criterios.price.push(price);
        }

        for (const filterCriterion in filters) {
          if (areIncluded === false) break;
          for (let i = 0; i < filters[filterCriterion].length; i++) {
            if (
              /*check if the list of genres,rating etc. from the current game 
              includes genre,rating from the filter genre, rating*/
              criterios[filterCriterion].includes(filters[filterCriterion][i])
            ) {
              areIncluded = true;
            } else {
              areIncluded = false;
              break;
            }
          }
        }

        if (areIncluded) {
          filteredGames.push(game);
        }
      }

      setFilteredGames(filteredGames);
    };
    createFilteredGames();
  }, [games, filterInputIdentifiers]);

  useEffect(() => {
    const filterInputs = document.querySelectorAll("input[data-filter-item]");
    let filterInputsOrganized = {};

    // if (filterInputs.length === 0 && filterInputIdentifiers.length === 0)
    // return;
    for (const criterionIdentifier in filterInputIdentifiers) {
      !filterInputsOrganized[criterionIdentifier]
        ? (filterInputsOrganized[criterionIdentifier] = [])
        : null;
      // select the inputs that need to go into filterInputsOrganized by the filterInputIdentifiers[criterionIdentifier]
      for (let i = 0; i < filterInputs.length; i++) {
        for (
          let j = 0;
          j < filterInputIdentifiers[criterionIdentifier].length;
          j++
        ) {
          if (
            +filterInputs[i].dataset.i ===
              filterInputIdentifiers[criterionIdentifier][j] &&
            filterInputs[i].dataset.filterType === criterionIdentifier
          ) {
            if (
              !filterInputsOrganized[criterionIdentifier].includes(
                filterInputs[i]
              )
            ) {
              filterInputsOrganized[criterionIdentifier].push(filterInputs[i]);
            }
          }
        }
      }
      filterInputsOrganized[criterionIdentifier].forEach((input) => {
        input.setAttribute("checked", "");
      });
    }
  }, [
    filterInputIdentifiers,
    pageId,
    filteredGames,
    pageContents,
    filterPanelIsOpened,
    displayOverlayGamesNotFound,
    areInitialNumberOfPages,
    menusContainer,
    numOfOpenLists,
    ulListsAreOpened,
    tabWasClickedTwice,
    currentTab,
    filteredGamesBySearchBar,
  ]);

  const toggleFilterPanel = () => {
    if (!filterContainerRef.current) return;
    if (filterPanelIsOpened) {
      filterContainerRef.current.classList.add("gaming__filter-opened");
    } else {
      filterContainerRef.current.classList.remove("gaming__filter-opened");
    }
  };

  toggleFilterPanel();

  /* when the component gets dismounted and the panel is opened,
   close it otherwise a bug will appear when you leave the panel opened 
   and then you go to any other page and then come back to the shop page.
  The bug: the button ref that closes the panel is not present until the page gets rerendered somehow */

  useEffect(() => {
    return () => {
      setFilterPanelIsOpened(false);
    };
  }, []);

  const divideContentByLocalPages = (currentGames = games) => {
    let pages = [];
    const gamesPerPage = 40;
    const numberOfPages = Math.ceil(currentGames.length / gamesPerPage);

    if (currentGames === games) {
      /* if current games from the first render of the page 
      are the initial games to be displayed then modify areInitialNumberOfPages to true 
      so that when the page loads for the first time the overlay doesn't toggle*/

      setAreInitialNumberOfPages(true);
    }
    if (!numberOfPages) {
      setDisplayOverlayGamesNotFound(true);
    }
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
      for (let j = totalAddedOnPages; j < currentGames.length; j++) {
        const page = pages[i];
        const game = currentGames[j];
        if (page.length != gamesPerPage) {
          page.push(game);
        }
      }
    }
    setPageContents(pages);
  };

  useEffect(() => {
    const gamesExist = games.length > 0;
    let filtersExist;
    for (const filterCriterio in filters) {
      if (filters[filterCriterio].length > 0) {
        filtersExist = true;
        break;
      }
    }

    if (gamesExist && !filtersExist && filteredGamesBySearchBar.length === 0) {
      divideContentByLocalPages();
    } else if (filtersExist) {
      divideContentByLocalPages(filteredGames);
    } else {
      divideContentByLocalPages(filteredGamesBySearchBar);
    }
  }, [filteredGames, filteredGamesBySearchBar]);

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
    if (currentInputValue >= 0 && currentInputValue <= numberOfPages - 1) {
      setPageId(+currentInputValue);
    }
  };

  const createGameCard = () => {
    const gameCards =
      pageContents.length > 0 &&
      pageId >= 0 &&
      pageContents[pageId].map((game) => {
        const gameCover = game.cover.url.replace("t_thumb", "t_cover_big");
        const gameName = game.name.toUpperCase();
        const gamePrice = game.price;
        const numberOfStars = +game.starRating.slice(0, 1);
        const starIcons = [];

        for (let i = 0; i < numberOfStars; i++) {
          starIcons.push(<ion-icon key={nanoid()} name="star"></ion-icon>);
        }

        return (
          <div key={nanoid()} className="gaming__game-container">
            <div className="gaming__stars-container">{starIcons}</div>
            <img className="gaming__game-img" src={gameCover}></img>
            <p className="gaming__game-name">{gameName}</p>
            <div className="gaming__game-actions-container">
              <Link to={`/shop/${game.id}`}>
                <button
                  onClick={() => {
                    setGameId(game.id);
                  }}
                  className="gaming__about-game-btn"
                >
                  About Game
                </button>
              </Link>
              <BuyBtn setBuyBtnActive={setBuyBtnActive} />
              <span className="gaming__game-price">{gamePrice}</span>
            </div>
          </div>
        );
      });
    return gameCards;
  };

  const gameCards = createGameCard();

  useEffect(() => {
    setMenusContainer(document.querySelector(".gaming__menus-container"));
  }, []);

  const portalForOpenFilterBtn =
    menusContainer &&
    ReactDOM.createPortal(
      <OpenFilterBtn
        setFilterPanelIsOpened={setFilterPanelIsOpened}
        setOpenFilterBtnRef={setOpenFilterBtnRef}
      />,
      menusContainer
    );

  const getRefForFilters = (ref) => {
    //get ref from FilterCriterion.jsx
    useEffect(() => {
      setFiltersToBeDisplayedRefs((prevRef) => [...prevRef, ref]);
    }, []);
  };

  return (
    <section
      onClick={(e) => {
        closeFilterPanel(e);
      }}
      className="gaming__shop-section"
    >
      <div ref={filterContainerRef} className="gaming__filter-container">
        <div className="gaming__searchbar-container">
          <SearchBar
            games={games}
            setFilteredGamesBySearchBar={setFilteredGamesBySearchBar}
          />
          <CloseFilterPanelBtn
            openFilterBtnRef={openFilterBtnRef}
            setFilterPanelIsOpened={setFilterPanelIsOpened}
          />
        </div>
        <p>Filter By:</p>
        <div className="gaming__filters">
          <FilterCriterion
            criterion={"Genres"}
            updateFilter={updateFilter}
            genresLists={genresLists}
            getRefForFilters={getRefForFilters}
            filtersToBeDisplayedRefs={filtersToBeDisplayedRefs}
            ulListsAreOpened={ulListsAreOpened}
            setUlListsAreOpened={setUlListsAreOpened}
            tabWasClickedTwice={tabWasClickedTwice}
            setTabWasClickedTwice={setTabWasClickedTwice}
            numOfOpenLists={numOfOpenLists}
            setNumOfOpenLists={setNumOfOpenLists}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <FilterCriterion
            criterion={"Rating"}
            updateFilter={updateFilter}
            ratingLists={ratingLists}
            getRefForFilters={getRefForFilters}
            filtersToBeDisplayedRefs={filtersToBeDisplayedRefs}
            ulListsAreOpened={ulListsAreOpened}
            setUlListsAreOpened={setUlListsAreOpened}
            tabWasClickedTwice={tabWasClickedTwice}
            setTabWasClickedTwice={setTabWasClickedTwice}
            numOfOpenLists={numOfOpenLists}
            setNumOfOpenLists={setNumOfOpenLists}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <FilterCriterion
            criterion={"Price"}
            updateFilter={updateFilter}
            priceLists={priceLists}
            getRefForFilters={getRefForFilters}
            filtersToBeDisplayedRefs={filtersToBeDisplayedRefs}
            ulListsAreOpened={ulListsAreOpened}
            setUlListsAreOpened={setUlListsAreOpened}
            tabWasClickedTwice={tabWasClickedTwice}
            setTabWasClickedTwice={setTabWasClickedTwice}
            numOfOpenLists={numOfOpenLists}
            setNumOfOpenLists={setNumOfOpenLists}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
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
      <CartPanel
        setCartPanelIsOpened={setCartPanelIsOpened}
        cartPanelIsOpened={cartPanelIsOpened}
      />
      <CartBtn
        cartPanelIsOpened={cartPanelIsOpened}
        setCartPanelIsOpened={setCartPanelIsOpened}
      />
      <main className="gaming__main-container">
        <div className="gaming__main-content">{gameCards}</div>
      </main>
      {portalForOpenFilterBtn}
    </section>
  );
};

export default ShopSection;
