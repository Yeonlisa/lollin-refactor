import styled from "styled-components";

export const TopView = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  min-height: 20.5rem;
  padding: 3.75rem;
  height: 31rem;
  z-index: 1;

  .foreGoundWrapper {
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 90%;
    max-width: 95rem;
    height: 30rem;
    min-height: 300px;
    margin: 0px auto;
    top: 0rem;
  }
  .foreGroundVideoWrapper {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgb(7, 18, 26);
  }
  .foreGroundVideo {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .foreGroundPoster {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
  }
  .foreGroundStyle {
    position: absolute;
    inset: 1px;
    pointer-events: none;
  }
  .foreGroundCanvas {
    position: absolute;
    display: block;
    border: 0.1rem solid #ffffff71;
    height: 30rem;
    min-height: 300px;
    left: 0.6rem;
    top: -12px;
    width: 100%;
    aspect-ratio: auto 764 / 688;
  }
  .foreGroundInner {
    width: 100%;
  }
  .foreGroundRow-Top {
    width: 100%;
    margin-top: 0.625rem;
    text-align: center;
  }
  .foreGroundLogo {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100px;
  }

  .foreGroundText {
    position: absolute;
    background-color: #00000033;
    font-family: Bazzi;
    font-size: 2rem;
    color: #e0ad0b;
    top: 8rem;
  }

  .foreGroundbutton {
    position: absolute;
    all: unset;
    font-size: 2rem;
    color: #e0ad0b;
  }
  .foreGroundBtn {
    position: absolute;
    top: 7rem;
  }
  .fancy-button {
    position: relative;
    display: block;
    cursor: pointer;
    perspective: 900px;
    .fancy-flipper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform-style: preserve-3d;
      transform: rotateX(-90deg);
      transition: transform 0.6s ease;
    }
    .fancy-front,
    .fancy-back {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backface-visibility: hidden;
      svg {
        display: block;
      }
    }
    &:hover {
      .fancy-flipper {
        transform: rotateX(0deg);
      }
    }
    &:active {
      .fancy-flipper {
        transform: rotateX(0deg) scale(0.95);
        transition: transform 0.05s ease;
      }
    }
    .button-text {
      letter-spacing: 0.01rem;
      font-family: Bazzi;
    }
  }
  .foreGroundRow-bottom {
    width: 100%;
    margin-top: 0.625rem;
    text-align: center;
  }
  .serchBoxInputBox {
    all: unset;
    position: relative;
    display: inline-block;
    min-width: 195px;
    height: 30px;
    padding: 0px;
    color: rgb(1, 1, 1);
    font-size: 0.8125rem;
    letter-spacing: 0.15em;
    font-weight: bold;
    background-color: white;
    border: 0px;
  }
  @media (max-width: 545px) {
    .foreGroundCanvas {
      display: none;
    }
  }
  @media (min-width: 320px) and (max-width: 479px) {
    .foreGroundCanvas {
      display: none;
    }
  }
`;

export const MainVideo = styled.video`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const BackWrapper = styled.section`
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background: rgba(10, 130, 216, 0.301);
  .searchBoxBackVideo {
    position: absolute;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .searchBoxStylePoster {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    animation: 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards
      running bTKSmk;
  }
`;

export const MainBackVideo = styled.video`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: blur(20px);
`;

export const Intro = styled.h1`
  display: flex;
  margin-top: 0.7rem;
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  color: #c6c62b;
  opacity: 0.7;
  font-size: 5vw;
  text-shadow: 7px 7px 13px #000;

  @media (max-width: 500px) {
    margin-left: 5.4vw;
  }
`;

export const ClickBtn = styled.button`
  height: 3rem;
  width: 8rem;
  border: none;
  font-size: 18px;
  border-radius: 13px;
  background-color: #ff6666;
  color: #404040;
  font-weight: bold;
  margin-top: 10vh;
  cursor: pointer;
  box-shadow: 5px 5px 10px 5px #121212;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #d1d1d1;
  }

  &:active {
    transform: translateY(8px);
  }

  @media (max-width: 500px) {
    display: flex;
    margin-left: 19vw;
    margin-top: 15vh;
    justify-content: center;
    align-items: center;
  }
`;
