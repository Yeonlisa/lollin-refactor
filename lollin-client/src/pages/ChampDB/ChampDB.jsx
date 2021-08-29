import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ChampDBcontainter,
  ChampDbTiltle,
  BackImg,
  Wrapper,
} from "./ChampDBStyled.jsx";
import ChampDbSearch from "../../component/ChampDbSearch/ChampDbSearch.jsx";
import ChampDbList from "../../component/ChampDbList/ChampDbList.jsx";
import ChampDbBgi from "../../Images/ChampDbBgi.jpg";

const ChampDB = ({ handleChampPriId }) => {
  const [champData, setChampData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        return axios.get(
          `https://ddragon.leagueoflegends.com/cdn/${res.data[0]}/data/ko_KR/champion.json`
        );
      })
      .catch((err) => {
        throw err;
      })
      .then((res) => {
        setChampData(Object.entries(res.data.data));
      });
  }, []);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchBtn = () => {
    setSearchText(searchValue);
  };

  const handleSearchText = (e) => {
    if (e.key === "Enter") {
      handleSearchBtn();
    }
  };

  return (
    <ChampDBcontainter className="champDBcontainter">
      <BackImg className="champDBbackImg" src={`${ChampDbBgi}`} alt="no data" />

      <Wrapper>
        <ChampDbTiltle className="champDBtitle">Champions</ChampDbTiltle>
        <ChampDbSearch
          handleSearchText={handleSearchText}
          handleSearchBtn={handleSearchBtn}
          handleSearchValue={handleSearchValue}
        />
        <ChampDbList
          champData={champData}
          searchText={searchText}
          handleChampPriId={handleChampPriId}
        />
      </Wrapper>
    </ChampDBcontainter>
  );
};

export default ChampDB;
