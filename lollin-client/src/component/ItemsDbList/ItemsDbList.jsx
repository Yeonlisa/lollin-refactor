import React from "react";
import { ItemBox, ItemsList, ItemName } from "./ItemsDbListStyled.jsx";


const ItemsDbList = ({ itemsData, apiVer, sortTags, itemName }) => {
  const copyTags = [...sortTags];
  const sortData = [];
  const renderData = [];
  let finalData = [];
  const resultArr = itemsData.map(
    (ele) =>
      copyTags.map((el) => ele[1].tags.includes(el)).includes(false) === true
  );

  const handleSortData = () => {
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] === false) {
        sortData.push(i);
      }
    }
  };
  handleSortData();

  const handleRenderData = () => {
    for (let i = 0; i < sortData.length; i++) {
      renderData.push(itemsData[sortData[i]]);
    }
  };
  handleRenderData();

  const handleFinalData = () => {
    if (itemName === "") {
      finalData = [...renderData];
    } else {
      for (let i = 0; i < renderData.length; i++) {
        if (
          renderData[i][1].description
            .replace(/[A-za-z]|[<>/]/g, "")
            .replace(/(\s*)/g, "")
            .indexOf(itemName) !== -1 ||
          renderData[i][1].name.replace(/(\s*)/g, "").indexOf(itemName) !== -1
        ) {
          finalData.push(renderData[i]);
        }
      }
    }
  };
  handleFinalData();

  return (
    <ItemsList className="itemsList">
      {Array.isArray(itemsData)
        ? finalData.map((ele, index) => (
            <ItemBox className="itemBox" key={index}>
              <img
                className="itemImg"
                src={`https://ddragon.leagueoflegends.com/cdn/${apiVer}/img/item/${ele[0]}.png`}
                alt="no images"
                key={ele[1].image.full}
              />
              <ItemName className="itemName">
                <span>{ele[1].name}</span>
              </ItemName>
              <span className="itemDesc" key={ele[0]}>
                {ele[1].description
                  .replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")
                  .split("\r\n")
                  .map((line, inx) => {
                    return (
                      <span key={inx}>
                        {line.replace(/[A-za-z]|[<>/]/g, "")}
                      </span>
                    );
                  })}
              </span>
            </ItemBox>
          ))
        : "no data"}
    </ItemsList>
  );
};

export default ItemsDbList;
