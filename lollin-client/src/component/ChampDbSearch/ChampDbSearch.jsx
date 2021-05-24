import React, { useState } from "react";
import "./ChampDbSearch.css";

const ChampDbSearch = ({ hanleSearchText }) => {
  return (
    <div className="champSearchArea">
      <div className="champSearchBox">
        champSearchBox
        <input
          type="text"
          className="champSearchInput"
          onKeyPress={hanleSearchText}
          placeholder="검색"
        ></input>
      </div>
    </div>
  );
};

export default ChampDbSearch;