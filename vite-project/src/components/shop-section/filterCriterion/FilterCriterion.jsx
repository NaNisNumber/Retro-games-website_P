import React, { useEffect, useRef } from "react";
import "./FilterCriterion.css";

const FilterCriterion = ({
  updateFilter,
  genresLists,
  ratingLists,
  priceLists,
  getRefForFilters,
  criterion,
  filtersToBeDisplayedRefs,
  ulListsAreOpened,
  setUlListsAreOpened,
  tabWasClickedTwice,
  setTabWasClickedTwice,
  numOfOpenLists,
  setNumOfOpenLists,
  currentTab,
  setCurrentTab,
}) => {
  const filtersToBeDisplayedRef = useRef(null);

  getRefForFilters(filtersToBeDisplayedRef); // send ref to ShopSection.jsx

  const toggleFilters = (e) => {
    e.stopPropagation();

    const nextElement =
      e.target.nextElementSibling === null
        ? e.target.parentElement.nextElementSibling
        : e.target.nextElementSibling;

    let currentTab = nextElement.dataset.ulType;
    setCurrentTab(currentTab);

    setUlListsAreOpened((prevUlListsAreOpened) => {
      return {
        ...prevUlListsAreOpened,
        [currentTab]: !prevUlListsAreOpened[currentTab],
      };
    });

    // if two tabs are opened apply a delay on opening the current tab(second tab that is being opened)

    for (let i = 0; i < filtersToBeDisplayedRefs.length; i++) {
      if (filtersToBeDisplayedRefs.length > 0) {
        if (nextElement === filtersToBeDisplayedRefs[i].current) continue;
        filtersToBeDisplayedRefs[i].current.classList.remove(
          "gaming__filter-ul-visible-delayed"
        );
        filtersToBeDisplayedRefs[i].current.classList.add(
          "gaming__filter-ul-hidden"
        );
      }
    }

    if (numOfOpenLists === 2) {
      if (filtersToBeDisplayedRef.current) {
        filtersToBeDisplayedRef.current.classList.toggle(
          "gaming__filter-ul-hidden"
        );

        //delay on opening
        filtersToBeDisplayedRef.current.classList.add(
          "gaming__filter-ul-visible-delayed"
        );
      }
    } else if (filtersToBeDisplayedRef.current) {
      filtersToBeDisplayedRef.current.classList.toggle(
        "gaming__filter-ul-hidden"
      );
    }

    // if one value from tabWasClickedTwice===true and that corresponds to the current tab then remove delay from that ul tab

    if (tabWasClickedTwice[currentTab]) {
      filtersToBeDisplayedRef.current.classList.remove(
        "gaming__filter-ul-visible-delayed"
      );
    }

    for (const openedList in ulListsAreOpened) {
      if (openedList === currentTab) continue;
      setUlListsAreOpened((prevUlListsAreOpened) => {
        return { ...prevUlListsAreOpened, [openedList]: false };
      });
    }
  };

  useEffect(() => {
    setNumOfOpenLists(1);
    for (const listIsOpened in ulListsAreOpened) {
      if (ulListsAreOpened[listIsOpened]) {
        setNumOfOpenLists((prevNumOfOpenLists) => prevNumOfOpenLists + 1);
      }
    }
  }, [ulListsAreOpened]);

  useEffect(() => {
    if (!currentTab) return;

    for (const tab in tabWasClickedTwice) {
      if (currentTab === tab) continue;
      setTabWasClickedTwice((prevNumOfClickedTabsOfFilter) => {
        return {
          ...prevNumOfClickedTabsOfFilter,
          [tab]: false,
        };
      });
    }

    setTabWasClickedTwice((prevNumOfClickedTabsOfFilter) => {
      return {
        ...prevNumOfClickedTabsOfFilter,
        [currentTab]: true,
      };
    });
  }, [currentTab]);
  console.log(tabWasClickedTwice);
  let typeOfFiltersList;

  switch (criterion) {
    case "Genres":
      typeOfFiltersList = genresLists;
      break;
    case "Rating":
      typeOfFiltersList = ratingLists;
      break;
    case "Price":
      typeOfFiltersList = priceLists;
  }

  return (
    <div className="gaming__filter-inner-container">
      <div onClick={toggleFilters} className="gaming__filter-name">
        <p> {criterion}</p>
      </div>
      <ul
        data-ul-type={criterion}
        onClick={(e) => {
          updateFilter(e);
        }}
        ref={filtersToBeDisplayedRef}
        className="gaming__filter-ul-visible gaming__filter-ul-hidden"
      >
        {typeOfFiltersList}
      </ul>
    </div>
  );
};

export default FilterCriterion;
