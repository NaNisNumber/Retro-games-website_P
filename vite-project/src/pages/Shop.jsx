import React from "react";
import ShopSection from "../components/shop-section/ShopSection";
const Shop = ({
  filterPanelIsOpened,
  setFilterPanelIsOpened,
  games,
  setGames,
  openFilterBtnRef,
}) => {
  return (
    <ShopSection
      openFilterBtnRef={openFilterBtnRef}
      games={games}
      setGames={setGames}
      filterPanelIsOpened={filterPanelIsOpened}
      setFilterPanelIsOpened={setFilterPanelIsOpened}
    />
  );
};

export default Shop;
