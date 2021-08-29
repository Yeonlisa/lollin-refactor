import React, { useState, useEffect } from "react";
import { Container } from "./UserInfoMatchingDetailStyled.jsx";
import Grade from "./Grade/Grade.jsx";

const axios = require("axios");
const MatchingDetail = ({ participant }) => {
  let [userData, setUserData] = useState(null);
  let [tier, setTier] = useState("");
  let [winRate, setWinRate] = useState(0);
  let [rank, setRank] = useState("");
  let [isLoading, setIsLoading] = useState(null);
  let [isUnranked, setIsUnranked] = useState(true);
  useEffect(() => {
    if (participant) {
      setIsLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/utils/lightInfo?name=${participant.summonerName}`
        )
        .then((response) => {
          let datas = response.data;
          setIsUnranked(true);
          setRank("UNRANKED");
          setTier("");
          setWinRate(0);
          if (datas.length === 0) {
            setUserData(null);
            setIsLoading(false);
          } else {
            for (let data of datas) {
              if (data.queueType === "RANKED_SOLO_5x5") {
                let tempWinrate = 0;
                setTier(data.tier);
                setRank(data.rank);
                tempWinrate = data.wins / (data.wins + data.losses);
                tempWinrate = Math.floor(tempWinrate * 10000) / 100;
                setWinRate(tempWinrate);
                setUserData({ solo: data });
                setIsUnranked(false);
              } else if (data.queueType === "RANKED_FLEX_SR") {
                setUserData({ ...userData, data });
              }
            }
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [participant]);

  switch (isLoading) {
    case null: {
      return (
        <Container>
          <div className="preView">챔피언 이미지를 클릭하세요</div>
        </Container>
      );
    }
    case true: {
      return (
        <Container>
          <section className="style">
            <div className="wrap">
              <div className="content">{"Loading..."}</div>
            </div>
          </section>
        </Container>
      );
    }
    case false: {
      return (
        <Container>
          <section className="style">
            <div className="userInformation">
              <section className="content">
                <section className="imgWarp">
                  {isUnranked ? (
                    <img
                      src={
                        require(`../../Images/tierIcons/UNRANKED.png`).default
                      }
                      width={"100"}
                      height={"100"}
                    />
                  ) : (
                    <img
                      src={
                        require(`../../Images/tierIcons/${tier}.png`).default
                      }
                      width={"100"}
                      height={"100"}
                    />
                  )}
                </section>
                <div className="tier">{tier + rank}</div>
                <section className="info">
                  {participant !== null ? (
                    <div className="name">{participant.summonerName}</div>
                  ) : (
                    ""
                  )}
                  <div className="rate">
                    {winRate !== 0 ? winRate + "%" : ""}
                  </div>
                </section>
              </section>
            </div>
            <Grade participant={participant} />
          </section>
        </Container>
      );
    }
  }
};

export default MatchingDetail;
