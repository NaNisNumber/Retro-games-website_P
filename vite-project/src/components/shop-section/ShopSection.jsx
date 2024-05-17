import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import { addNewPropertiesToGameObj } from "../../../Assets/addNewPropertiesToGameObj";
import SearchBar from "./searchbar/SearchBar";
import OpenFilterBtn from "./buttons/open-filter-btn/OpenFilterBtn";
import FilterCriterion from "./filterCriterion/FilterCriterion";
import "./ShopSection.css";
import CartBtn from "./buttons/cartBtn/CartBtn";
import CartPanel from "./CartPanel/CartPanel";
import CloseFilterPanelBtn from "./buttons/CloseFilterPanel/CloseFilterPanelBtn";
import GameCard from "../gameCard/GameCard";

const ShopSection = ({
  gamesData,
  setGamesData,
  lastPage,
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  openFilterBtnRef,
  setOpenFilterBtnRef,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
  setCartPanelIsOpened,
  cartPanelIsOpened,
  setBuyBtnActive,
  gamesForCart,
  setGamesForCart,
  userIsLogedIn,
  wishList,
  setWishList,
  setWishlistBtnActive,
}) => {
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
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
  const [gameCards, setGameCards] = useState([]);
  const [filterInputsChecked, setFilterInputsChecked] = useState({});
  const filterContainerRef = useRef(null);
  const ratings = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];
  const prices = ["10$", "15$", "20$", "22$"];
  const filteredGamesExist = filteredGames.length > 0;
  const filteredSearchbarGamesExist = filteredGamesBySearchBar.length > 0;

  useEffect(() => {
    /* Check if there aren't elements in gamesData to prevent the effect to run infinitely.
    Because this effect will run before the one that retrieves the gamesData then the gamesData will always
    be an empty array and when a change in state to gamesData happens here in the effect setting the state to gamesCopy, the copy will be
    an empty array because it is based on the gamesData.
    With the below statement if gamesData is empty, the effect wil stop running again and react will continue to call the next effects and
     when a real change happens and gamesData != empty this will be called again after all the code in this component ran
     and gamesCopy has it's elements;

    */
    if (gamesData.length === 0) return;
    //

    /* here we check if something is in the gamesData and if that something comes from the gamesCopy */
    if (gamesData.length > 0 && gamesData[0].isCopy) return;
    //

    const gamesCopy = addNewPropertiesToGameObj(gamesData); // this will return gamesCopy and won't mutate the state
    setGamesData(gamesCopy);
  }, [gamesData]);

  useEffect(() => {
    const retrieveGameGenres = async () => {
      const response = await fetch(
        "https://retro-gaming-genres-games-server-production.up.railway.app/"
      );
      const genres = await response.json();

      setGenres(genres);
    };
    retrieveGameGenres();
  }, []);

  useEffect(() => {
    const retrieveGamesData = async () => {
      const response = await fetch(
        `https://retro-gaming-games-server-production.up.railway.app/gamesData?game=${currentPage}`
      );
      const data = await response.json();

      setGamesData(data);
    };
    retrieveGamesData();
  }, [currentPage]);

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
    const filterInputsCheckedTemplate = {};

    const lists = criterion.map((item, i) => {
      //prepare all the properties for the checked inputs to be initially false
      filterInputsCheckedTemplate[`${type}-${i}`] = false;
      //

      return (
        <li key={nanoid()}>
          {item}
          <input
            checked={filterInputsChecked[`${type}-${i}`]}
            onChange={(e) => {
              const target = e.target;
              const inputTypeId = target.dataset.inputTypeId;

              setFilterInputsChecked((prevFilterInputsChecked) => {
                return {
                  ...prevFilterInputsChecked,
                  [inputTypeId]: !prevFilterInputsChecked[inputTypeId],
                };
              });
            }}
            data-input-type-id={`${type}-${i}`}
            data-i={i}
            data-filter-item={item}
            data-filter-type={type}
            type={"checkbox"}
          ></input>
        </li>
      );
    });

    return { lists: lists, templates: filterInputsCheckedTemplate };
  };

  const { lists: genresLists, templates: genresInputCheckedTemplates } =
    createFilterLists(genres, "genre");
  const { lists: ratingLists, templates: ratingInputCheckedTemplates } =
    createFilterLists(ratings, "rating");
  const { lists: priceLists, templates: priceInputCheckedTemplates } =
    createFilterLists(prices, "price");

  useEffect(() => {
    setFilterInputsChecked({
      ...genresInputCheckedTemplates,
      ...ratingInputCheckedTemplates,
      ...priceInputCheckedTemplates,
    });
  }, []);

  const updateFilter = (e) => {
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
      if (gamesData.length === 0) return;
      let filteredGames = [];
      let areIncluded;

      for (let i = 0; i < gamesData.length; i++) {
        areIncluded = null;
        const game = gamesData[i];
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
  }, [gamesData, filterInputIdentifiers]);

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

  const goToPrevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage((prevPageId) => prevPageId - 1);
  };

  const goToNextPage = () => {
    if (currentPage === lastPage) return;
    setCurrentPage((prevPageId) => prevPageId + 1);
  };

  const createGameCard = (data) => {
    const gameCards =
      data.length > 0 &&
      currentPage >= 0 &&
      data.map((game) => {
        if (!game.starRating) return;
        const numberOfStars = +game.starRating.slice(0, 1);
        const gameCover = game.cover.url.replace("t_thumb", "t_cover_big");
        const gameName = game.name.toUpperCase();
        const gamePrice = game.price;
        const starIcons = [];
        for (let i = 0; i < numberOfStars; i++) {
          starIcons.push(<ion-icon key={nanoid()} name="star"></ion-icon>);
        }
        return (
          <GameCard
            gameCover={gameCover}
            gameName={gameName}
            gamePrice={gamePrice}
            starIcons={starIcons}
            game={game}
            gamesData={gamesData}
            userIsLogedIn={userIsLogedIn}
            gamesForCart={gamesForCart}
            setGamesForCart={setGamesForCart}
            setBuyBtnActive={setBuyBtnActive}
            wishList={wishList}
            setWishList={setWishList}
            setWishlistBtnActive={setWishlistBtnActive}
            key={nanoid()}
          />
        );
      });

    return gameCards;
  };

  useEffect(() => {
    let gameCards;

    function initiateGameCards() {
      // check if there are filters selected;
      let filtersExist = false;
      // check the existence of filter items from the arrays that are in the filters object;
      for (let filterType in filters) {
        filtersExist = filters[filterType].length > 0;
        if (filtersExist) break;
      }

      if (filteredSearchbarGamesExist) {
        gameCards = createGameCard(filteredGamesBySearchBar);
      } else if (filteredGamesExist) {
        setDisplayOverlayGamesNotFound(false);
        gameCards = createGameCard(filteredGames);
      } else if (filtersExist && !filteredGamesExist) {
        // if there are no games in filteredGames to correspond with the selected filters
        setDisplayOverlayGamesNotFound(true);
        gameCards = createGameCard([]);
      } else {
        gameCards = createGameCard(gamesData);
      }
    }

    initiateGameCards();

    setGameCards(gameCards);
  }, [filteredGamesExist, filteredGamesBySearchBar, gamesData, filteredGames, wishList]);



  useEffect(() => {
    const heartBtns = document.querySelectorAll(".gaming__heart-btn");
    for (let i = 0; i < heartBtns.length; i++) {
      const heartBtn = heartBtns[i];
      const btnGameId = heartBtn.dataset.gameid;
      for (let j = 0; j < wishList.length; j++) {
        if (!wishList[j]) continue;
        const wishListItemId = wishList[j].id;
        if (btnGameId == wishListItemId) {
          heartBtn.classList.add("gaming__heart-active");
        }
      }
    }
  }, [wishList, gameCards]);

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
            gamesData={gamesData}
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
            value={currentPage.toString()}
            onChange={(e) => {
              updateCurrentPage(e);
            }}
            className="gaming__mobile-pages-input"
            type={"number"}
          ></input>
          <button onClick={goToNextPage} className="gaming__mobile-pages-next">
            <ion-icon name="add"></ion-icon>
          </button>
          <span className="gaming__mobile-pages-span">/</span>
          <span className="gaming__mobile-pages-span">{lastPage}</span>
        </div>
      </div>
      {userIsLogedIn && (
        <CartPanel
          gamesForCart={gamesForCart}
          setGamesForCart={setGamesForCart}
          setCartPanelIsOpened={setCartPanelIsOpened}
          cartPanelIsOpened={cartPanelIsOpened}
        />
      )}
      {userIsLogedIn && (
        <CartBtn
          gamesForCart={gamesForCart}
          cartPanelIsOpened={cartPanelIsOpened}
          setCartPanelIsOpened={setCartPanelIsOpened}
        />
      )}
      <main className="gaming__main-container">
        <div className="gaming__main-content">{gameCards}</div>
      </main>
      <button
        onClick={() => {
          scroll({ top: 0, behavior: "smooth" });
        }}
        className="gaming__scroll-up-arrow gaming__scroll-up-arrow-hidden"
      >
        <ion-icon name="arrow-up-outline"></ion-icon>
      </button>
      {portalForOpenFilterBtn}
    </section>
  );
};

export default ShopSection;
