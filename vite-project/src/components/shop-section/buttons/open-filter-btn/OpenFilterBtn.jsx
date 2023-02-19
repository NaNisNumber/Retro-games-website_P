import React, { useRef } from "react";
import "./OpenFilterBtn.css";
const OpenFilterBtn = ({ setFilterPanelIsOpened, setOpenFilterBtnRef }) => {
  const openFilterBtnRef = useRef(null);

  return (
    <button
      ref={openFilterBtnRef}
      onClick={() => {
        openFilterBtnRef.current.classList.remove("gaming__display-open-btn");
        openFilterBtnRef.current.classList.add("gaming__hide-open-btn");
        setFilterPanelIsOpened(true);
        if (openFilterBtnRef.current) {
          setOpenFilterBtnRef(openFilterBtnRef);
        }
      }}
      className="gaming__open-filter"
    >
      <ion-icon name="search"></ion-icon>
    </button>
  );
};

export default OpenFilterBtn;
