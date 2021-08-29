import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsDbList from "../../component/ItemsDbList/ItemsDbList.jsx";
import ItemsDbFilter from "../../component/ItemsDbFilter/ItemsDbFilter.jsx";
import ItemsSearchBox from "../../component/ItemsSearchBox/ItemsSearchBox.jsx";
import ItemsDbBgi from "../../Images/ItemsDbBgi1.jpg";

import { Items, ItemTitle, BackImg, Wrapper } from "./ItemsDbStyled.jsx";


const ItemsDB = () => {
  const [apiVer, setApiVer] = useState("");
  const [itemsData, setItemsData] = useState([]);
  const [sortTags, setSortTags] = useState(["set"]);
  const [itemName, setItemName] = useState("");

  const handleSortTags = (checked, tags, id) => {
    if (checked) {
      setSortTags([...sortTags, tags]);
    } else {
      setSortTags(sortTags.filter((el) => el !== tags));
    }
  };

  const handleItemSearchValue = (value) => {
    setItemName(value);
  };

  useEffect(() => {
    axios
      .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
      .then((res) => {
        setApiVer(res.data[0]);
        return axios.get(
          `https://ddragon.leagueoflegends.com/cdn/${res.data[0]}/data/ko_KR/item.json`
        );
      })
      .catch((err) => {
        throw err;
      })
      .then((res) => {
        setItemsData(Object.entries(res.data.data));
      });
    setSortTags("");
  }, []);
  return (
    <Items className="itemDB">
      <BackImg className="itemDBbackImg" src={`${ItemsDbBgi}`} />

      <Wrapper>
        <ItemTitle className="itemTitle">Item</ItemTitle>
        <ItemsDbFilter
          itemsData={itemsData}
          handleSortTags={handleSortTags}
          handleItemSearchValue={handleItemSearchValue}
        />

        <ItemsSearchBox handleItemSearchValue={handleItemSearchValue} />
        <ItemsDbList
          itemsData={itemsData}
          apiVer={apiVer}
          sortTags={sortTags}
          itemName={itemName}
        />
      </Wrapper>
    </Items>
  );
};

export default ItemsDB;
