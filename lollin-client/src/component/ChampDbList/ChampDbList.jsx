import React, { useEffect } from "react";
import {
  ChampDbListArea,
  ChampDbListBox,
  ImageContainer,
} from "./ChampDbListStyled.jsx";

const ChampDbList = ({ champData, searchText, handleChampPriId }) => {
  const nameData = [];
  let finalData = [];

  const hanldeNameData = () => {
    for (let i = 0; i < champData.length; i++) {
      let result = [];
      result.push(
        champData[i][0].toLowerCase() + " " + champData[i][1].name,
        champData[i][1]
      );
      nameData.push(result);
    }
  };
  hanldeNameData();

  const handleFianlData = () => {
    if (searchText === "") {
      finalData = [...nameData];
    } else {
      for (let i = 0; i < nameData.length; i++) {
        if (nameData[i][0].indexOf(searchText) !== -1) {
          finalData.push(nameData[i]);
        }
      }
    }
  };
  handleFianlData();

  useEffect(() => {}, []);

  console.log(handleChampPriId);

  return (
    <ChampDbListArea className="champDbListArea">
      {Array.isArray(champData)
        ? finalData.map((ele, index) => (
            <ChampDbListBox
              className="champDbListBox"
              key={ele[1].id}
              onClick={() => {
                handleChampPriId(ele[1].id);
              }}
            >
              <ImageContainer className="imageContainer">
                <img
                  className="champImg"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${ele[1].id}_0.jpg`}
                  alt="no images"
                  key={ele[1].image.full}
                />
                <span className="champNameTag" key={ele[1].name}>
                  {ele[1].name}
                </span>
              </ImageContainer>
            </ChampDbListBox>
          ))
        : "no data"}
    </ChampDbListArea>
  );
};

export default ChampDbList;
