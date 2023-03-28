import React from "react";
import "./CloseFilterPanelBtn.css";
const ClosePanelBtn = ({ setFilterPanelIsOpened, openFilterBtnRef }) => {
  return (
    <button
      onClick={() => {
        openFilterBtnRef.current.classList.remove("gaming__hide-open-btn");
        openFilterBtnRef.current.classList.add("gaming__display-open-btn");
        setFilterPanelIsOpened(false);
      }}
      className="gaming__close-filter"
    >
      <ion-icon name="close"></ion-icon>
    </button>
  );
};

export default ClosePanelBtn;
