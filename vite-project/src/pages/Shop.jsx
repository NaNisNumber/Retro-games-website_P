import React from "react";
import ShopSection from "../components/shop-section/ShopSection";
const Shop = ({ filterPanelIsOpened, setFilterPanelIsOpened }) => {
  return (
    <ShopSection
      filterPanelIsOpened={filterPanelIsOpened}
      setFilterPanelIsOpened={setFilterPanelIsOpened}
    />
  );
};

export default Shop;
