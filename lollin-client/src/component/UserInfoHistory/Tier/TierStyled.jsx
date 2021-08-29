import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 650px;
  background-color: transparent;

  .soloWrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 327px;
    height: 120px;
    padding: 9px 0;
    border-bottom: none;
  }

  .soloContent {
    display: flex;
  }
  .iconWrap {
    width: 104px;
    height: 104px;
  }
  .tierIcon {
    width: 104px;
    height: 104px;
  }
  .dataWrap {
    padding: 10px 10px;
  }
  .rankTag {
    font-size: 11px;
    color: whitesmoke;
  }
  .tierTag {
    font-size: 15px;
    font-weight: bold;
    color: whitesmoke;
  }

  .lpTag {
    color: #555e5e;
    font-weight: bold;
  }
  .winloseTag {
    color: #555e5e;
    font-size: 12px;
  }
  .winningRate {
    color: #555e5e;
    font-size: 12px;
  }
  .flexWrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 327px;
    height: 120px;
    padding: 9px 0;
    border-bottom: none;
    border-left: none;
  }
  .flexContent {
    display: flex;
  }
  .unrankedTag {
    padding: 20px 0;
    color: whitesmoke;
    font-weight: bold;
  }

  @media (max-width: 670px) {
    width: 470px;
  }
`;
