import styled from "styled-components";

export const ChampDetailArea = styled.div`
  height: 90rem;
  padding-bottom: 5rem;

  .noDisplay {
    display: none;
  }

  .champDetailImgAlt {
    position: relative;
    top: 40px;
    width: 80%;
    padding: 10px;
    max-width: 800px;
    min-width: 350px;
    min-height: 200px;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 70px;
    background-color: black;
  }
`;

export const Wrap = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const RenderArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  height: 100%;

  z-index: 3;
`;

export const BackImg = styled.img`
  position: absolute;
  width: 100%;
  top: 1rem;
  max-height: 380px;
  margin-top: 20px;
  filter: blur(9px);
  opacity: 0.5;

  z-index: 2;
`;
export const ChampName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 70px;
`;

export const ChampDetailImg = styled.img`
  position: relative;
  top: 40px;
  width: 80%;
  padding: 10px;
  max-width: 800px;
  min-width: 350px;
  min-height: 200px;
  border-bottom-right-radius: 70px;
  border-bottom-left-radius: 70px;
`;

// 1093 308
// 480 389

export const CahmpDetailName = styled.div`
  text-align: center;
  width: 50%;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border: 0.1rem solid #ffffff34;
  z-index: 20;
`;
export const SkillsArea = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2%;
  z-index: 20;

  section {
    display: grid;
    grid-template-rows: 1fr 3fr;
    justify-content: space-evenly;
    padding-top: 1rem;
    border-radius: 45px;
    width: 370px;

    font-size: 0.8rem;
    .detailSkill {
      display: flex;
      justify-content: space-evenly;
    }
    .detailSkills {
      padding: 2%;

      &:hover {
      }
    }

    .detailDesc {
      padding: 20px;
    }
    .detailSkillsImg {
      width: 52px;
      transform: scale(1);
      transition: transform 0.5s;
      &:hover {
        transition: transform 0.5s;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 479px) {
    margin-top: 1rem;
    font-size: 0.6rem;
    section {
      display: block;
      .detailDesc {
        margin-top: 3%;
      }
    }
  }
`;

export const ChampSkillWeb = styled.video`
  padding: 10px;
  min-width: 350px;
  max-width: 400px;

  @media (min-width: 320px) and (max-width: 479px) {
    padding: 0;
    width: 200px;
  }
`;

export const ChampDescName = styled.div`
  padding-left: 3%;
  color: #f8b600;
  font-size: 1rem;
`;

export const ChampDescText = styled.div`
  padding-left: 3%;
  color: white;
  font-size: 0.9rem;

  @media (min-width: 320px) and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

export const ChampTipsArea = styled.div`
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin-top: 1rem;
  width: 60%;
  max-width: 710px;
  border: 0.1rem dashed #f8b60052;
  font-size: 0.9rem;
  color: #f8b600;

  @media (min-width: 320px) and (max-width: 479px) {
    width: 300px;
    margin-top: 1rem;
    font-size: 0.5rem;
  }
`;
export const ChampAllytips = styled.div`
  font-size: 0.7rem;
  color: white;
`;

export const ChampEnemytips = styled.div`
  font-size: 0.7rem;
  color: white;
`;
export const ChampRecommendedBuild = styled.div`
  font-size: 0.7rem;
  color: white;
  padding-top: 4rem;

  .buildTitle {
    display: flex;
    justify-content: space-between;
    color: #f8b600;
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }

  .runeSearchFrom {
    position: relative;
    width: 35%;
    max-width: 300px;
    min-width: 200px;
    border-radius: 2px;
    background-color: transparent;
  }

  .runeSearchInputBox {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    border-bottom: 1px solid #ffc40077;
    line-height: 17px;
    font-size: 14px;
    color: #ffffff;
    box-sizing: border-box;
    outline: none;

    &:focus::-webkit-input-placeholder {
      color: white;
      font-size: 0px;
    }
  }

  .runeSearchBtn {
    display: flex;
    position: absolute;
    height: 22px;
    top: 0;
    right: 0;
    margin-right: 1px;
    margin-top: 6px;
    padding: 3px 6px;
    border: none;
    background-color: #ffbb00;
    border-radius: 2px;
    color: #404040;
    font-weight: bold;
    transition: background-color 0.4s;
    font-size: 0.8rem;
    &:hover {
      background-color: #c99300;
      transition: background-color 0.4s;
      cursor: pointer;
    }
  }

  .recommendContent {
    display: flex;
    flex-wrap: wrap;
  }
  .recommedWrap {
    padding-top: 1rem;
    color: white;
    margin-right: 5px;
  }

  .rune-img {
    position: relative;
    border: 1px solid #c99300;
    border-radius: 100px;
  }
  .runeDesc {
    position: absolute;
    display: none;
    width: 200px;
    background-color: #3a3a3a;
    padding: 0;
    margin-top: 10px;
    color: white;
    text-align: left;
    z-index: 1;
  }
  .runeTitle {
    font-size: 1rem;
  }
  .rune-img:hover {
    .runeDesc {
      display: block;
      top: 100%;
      left: -100%;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: orange transparent transparent transparent;
    }
  }
`;
