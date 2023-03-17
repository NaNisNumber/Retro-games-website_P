import React from "react";
import ShopSection from "../components/shop-section/ShopSection";

const Shop = ({
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  games,
  setGames,
  openFilterBtnRef,
  setOpenFilterBtnRef,
  pageContents,
  setPageContents,
  numberOfPages,
  displayOverlayGamesNotFound,
  setDisplayOverlayGamesNotFound,
  areInitialNumberOfPages,
  setAreInitialNumberOfPages,
}) => {
  return (
    <ShopSection
      pageContents={pageContents}
      setPageContents={setPageContents}
      numberOfPages={numberOfPages}
      openFilterBtnRef={openFilterBtnRef}
      setOpenFilterBtnRef={setOpenFilterBtnRef}
      games={games}
      setGames={setGames}
      filterPanelIsOpened={filterPanelIsOpened}
      setFilterPanelIsOpened={setFilterPanelIsOpened}
      displayOverlayGamesNotFound={displayOverlayGamesNotFound}
      setDisplayOverlayGamesNotFound={setDisplayOverlayGamesNotFound}
      areInitialNumberOfPages={areInitialNumberOfPages}
      setAreInitialNumberOfPages={setAreInitialNumberOfPages}
    />
  );
};

export default Shop;
