import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewChamp } from "./MainNewChampStyled.jsx";

const server = process.env.REACT_APP_SERVER_URL;

const MainNewChamp = () => {
  const [webmIndex, setWebmIndex] = useState(0);
  const [newChampData, setNewChampData] = useState({
    id: "Aatrox",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    skillsimg: [
      "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxQ.png",
      "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxW.png",
      "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxE.png",
      "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/spell/AatroxR.png",
      "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/passive/Aatrox_Passive.png",
    ],
    skillwebm: [
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm",
      "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm",
    ],
  });

  useEffect(() => {
    axios
      .get(`${server}/champions/recent`)
      .then((res) => {
        let responseKey = Object.keys(res.data);
        return axios.get(
          `${server}/champions/detail?id=${encodeURI(responseKey)}`
        );
      })
      .then((res) => {
        setNewChampData(res.data.data);
      });
  }, []);

  return (
    <NewChamp className="newChamp">
      <section className="newChampContainer">
        <section className="newChampWrapRight">
          <div className="newChampImgWrap">
            <div className="newChampImgStyle"></div>
            <img
              className="newChamImg"
              src={newChampData.img}
              alt={newChampData.img}
            />
            <div className="newChamName">{newChampData.id}</div>
          </div>
          <div className="textContainer">
            <div className="desc">
              <div className="descTitle">신규 챔피언</div>
              <div className="descMain">
                최근 업데이트 된 신규 챔피언을 미리 체험하고 플레이에 반영해
                보세요
              </div>
            </div>
            <div className="titleWrap">
              - New champion
              <div className="title"></div>
            </div>
          </div>
        </section>

        <section className="newChampWrapLeft">
          <div className="skillWrap">
            <div className="skillList">
              {newChampData.skillsimg.map((ele, idx) => (
                <div className="skillIconWrap" key={idx + "skillIcon"}>
                  <img
                    className="skillIcon"
                    src={ele}
                    alt={ele}
                    onClick={() => {
                      setWebmIndex(idx);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="videoWrapper">
            <div className="videoStyle"></div>
            {newChampData.skillwebm.map((ele, idx) => (
              <video
                className={idx === webmIndex ? "isDisplay" : "noDisplay"}
                src={ele}
                key={idx}
                muted
                autoPlay
                loop
              ></video>
            ))}
          </div>
        </section>
      </section>
    </NewChamp>
  );
};

export default MainNewChamp;
