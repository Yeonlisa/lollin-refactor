import React from "react";
import { useHistory } from "react-router-dom";
import { MainContainer } from "./MainStyled.jsx";

import MainTopView from "../../component/MainTopView/MainTopView.jsx";
import MainChampPre from "../../component/MainChampPre/MainChampPre.jsx";
import MainNewChamp from "../../component/MainNewChamp/MainNewChamp.jsx";
import MainUpdatedItems from "../../component/MainUpdatedItems/MainUpdatedItems.jsx";
import MainSearch from "../../component/MainSearch/MainSearch.jsx";

const MainPage = ({
  handleSearchChange,
  handleSearchClick,
  handleOnKeyPress,
}) => {
  const history = useHistory();

  return (
    <MainContainer id="mainContainer">
      <MainTopView />
      <MainSearch
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
        handleOnKeyPress={handleOnKeyPress}
      ></MainSearch>

      <MainChampPre history={history} />
      <MainNewChamp />
      <MainUpdatedItems history={history} />
    </MainContainer>
  );
};

export default MainPage;
