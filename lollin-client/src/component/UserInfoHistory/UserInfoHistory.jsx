import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container } from "./UserInfoHistoryStyled.jsx";
import Tier from "./Tier/Tier.jsx";
import History from "./History/History.jsx";

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoHistory = ({ summonerName }) => {
  const [historyData, setHistoryData] = useState();
  const [summonerResult, setSummonerResult] = useState(undefined);
  let searchVal = undefined;
  let isInitialMount = useRef(true);

  const handleSearchName = () => {
    axios
      .get(`${server}/utils/history?name=${searchVal}`)
      .then((res) => {
        setHistoryData(res.data);
      })
      .then(console.log("axios serachVal" + searchVal));
    console.log("버튼클릭");
  };
  const handleInputVal = (e) => {
    searchVal = e.target.value;
    console.log(searchVal);
    if (e.key === "Enter") {
      handleSearchName();
      console.log("enter");
    }
  };

  useEffect(() => {
    setSummonerResult(summonerName);
    axios.get(`${server}/utils/history?name=${summonerName}`).then((res) => {
      setHistoryData(res.data);
      console.log("useEffect axios done:" + JSON.stringify(res.data));
    });
    if (isInitialMount.current) {
      console.log("useEffect init excuted" + summonerName);

      setSummonerResult(summonerName);
      isInitialMount.current = false;
      axios.get(`${server}/utils/history?name=${searchVal}`).then((res) => {
        setHistoryData(res.data);
        console.log("useEffect axios done:" + historyData);
      });
    } else {
      handleSearchName();
    }
  }, []);

  return (
    <Container>
      <div className="topWrap">
        <div className="name">{historyData ? summonerResult : ""}</div>

        <secion className="searchArea">
          <input
            type="text"
            className="searchInput"
            placeholder="소환사 검색.."
            onChange={handleInputVal}
            onKeyPress={handleInputVal}
          />
          <button className="searchBtn" onClick={handleSearchName}>
            {" "}
            Lollin{" "}
          </button>
        </secion>
      </div>

      <section className="tierWrapper">
        <Tier historyData={historyData}></Tier>
      </section>
      <scetion>
        <History historyData={historyData}></History>
      </scetion>
    </Container>
  );
};

export default UserInfoHistory;
