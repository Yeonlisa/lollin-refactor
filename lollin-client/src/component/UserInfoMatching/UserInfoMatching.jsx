import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./UserInfoMatchingStyled.jsx";
import UserInfoMatchingDetail from "../UserInfoMatchingDetail/UserInfoMatchingDetail.jsx";

import dotenv from "dotenv";

dotenv.config();
const server = process.env.REACT_APP_SERVER_URL;
const UserInfoMatching = ({ summonerName, setDefaultPlayer }) => {
  let [matchData, setMatchData] = useState({});
  let [inputName, setInputName] = useState(summonerName);
  let [reSearchValue, setReSearchValue] = useState("");
  let [isSearched, setIsSearched] = useState(false);
  const [blueTeam, setBlueTeam] = useState();
  const [redTeam, setRedTeam] = useState();
  let [participant, setParticipant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleUserClick = (participant) => {
    setParticipant(participant);
  };

  let setDatas = (matchData) => {
    let blueTeam = [];
    let redTeam = [];
    setMatchData(matchData);
    matchData.participants.forEach((participant) => {
      if (participant.teamId === 100) {
        blueTeam.push(participant);
      } else {
        redTeam.push(participant);
      }
    });
    setBlueTeam(blueTeam);
    setRedTeam(redTeam);
  };

  let handleSearch = () => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/utils/activeGame?name=${inputName}`
      )
      .then((response) => {
        setIsSearched(true);
        setDatas(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/utils/featured`)
          .then((response) => {
            setIsSearched(false);
            setDatas(response.data);
            setDefaultPlayer(response.data.participants[0]);
            setIsLoading(false);
          });
      });
  };

  const handleReSearch = () => {
    setInputName(reSearchValue);
    setReSearchValue("");
  };
  const handleReSearchEnter = (e) => {
    if (e.key === "Enter") {
      handleReSearch();
    }
  };

  const handleCommentValue = () => {
    if (participant) {
      axios
        .post("https://lollinserver.link/members/comment", {
          jwt: sessionStorage.getItem("jwt"),
          nickname: participant.summonerName,
          comment: commentValue,
        })
        .then((res) => {
          setCommentValue(res.comment);
          console.log("코멘트완료");
        })
        .catch((err) => {
          alert("코멘트불가");
        });
    }
  };

  const handleCommentSearchEnter = (e) => {
    if (e.key === "Enter") {
      handleCommentValue();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [inputName]);

  return (
    <Container className="matchingInfo-container">
      <section className="entireWrap">
        <section className="currGame">
          <div className="currGame-left">
            {isSearched ? (
              <div className="currGameText Exsit">
                <div>
                  <div className="currId">{inputName}</div> 매치중인 게임
                </div>
              </div>
            ) : (
              <div className="currGameText noExsit">
                <div className="noExsitinner">랜덤 매치</div>
                {inputName && !isLoading ? (
                  <section>
                    <div className="noExsit noExsitSub">
                      {`${inputName} 님의 매치가 없습니다`}
                    </div>
                  </section>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          <div className="currGame-right">
            <section className="searchArea">
              <input
                type="text"
                className="searchInput"
                placeholder="소환사 검색.."
                onChange={(e) => {
                  setReSearchValue(e.target.value);
                }}
                onKeyPress={handleReSearchEnter}
                value={reSearchValue}
              ></input>
              <button className="searchBtn" onClick={handleReSearch}>
                Lollin
              </button>
            </section>
          </div>
        </section>

        <div className="currMatching">
          <section className="allyTeam">
            <div className="allyNameTag">BLUE TEAM</div>
            <div className="teamWrapper allyWrapper">
              {blueTeam
                ? blueTeam.map((el) => (
                    <section
                      className="player allyHover"
                      onClick={() => {
                        handleUserClick(el);
                      }}
                    >
                      <div className="stylePlayer allyPlayer">
                        <img
                          className="playerImg"
                          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
                          alt="no data"
                        />
                      </div>
                      <div className="playerNameTag">
                        <div>{el.summonerName}</div>
                      </div>
                    </section>
                  ))
                : "coming.."}
            </div>
          </section>
          <section className="oppTeam">
            <div className="oppNameTag">RED TEAM</div>
            <div className="teamWrapper oppWrapper">
              {redTeam
                ? redTeam.map((el) => (
                    <section
                      className="player oppHover"
                      onClick={() => {
                        handleUserClick(el);
                      }}
                    >
                      <div className="stylePlayer oppPlayer">
                        <img
                          className="playerImg"
                          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
                          alt="no data"
                        />
                      </div>
                      <div className="playerNameTag">
                        <div>{el.summonerName}</div>
                      </div>
                    </section>
                  ))
                : "nodata"}
            </div>
          </section>
        </div>
        <div className="infoArea">
          <div className="infoArea-top">
            <UserInfoMatchingDetail participant={participant} />
          </div>
          <div className="infoArea-bottom">
            <section className="commentArea">
              <input
                type="text"
                className="commentInput"
                placeholder="your comment"
                onKeyPress={(e) => {
                  handleCommentSearchEnter(e);
                }}
                onChange={(e) => {
                  setCommentValue(e.target.value);
                }}
              ></input>

              <button className="commentBtn" onClick={handleCommentValue}>
                comment
              </button>
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
};
//http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
export default UserInfoMatching;

{
  /* Matching
      {matchData.participants
        ? matchData.participants.map((el) => {
            return (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.championName}_0.jpg`}
                width="70px"
              ></img>
            );
          })
        : ""} */
}
