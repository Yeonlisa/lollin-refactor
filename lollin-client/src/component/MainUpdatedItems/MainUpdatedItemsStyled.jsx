import styled from "styled-components";

export const UpdatedItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 0.5rem;
  color: white;
  padding-top: 7rem;

  .textContainer {
    max-width: 400px;
  }
  .titleWrap {
    font-size: 2px;
    font-weight: bold;
    color: #d69d00cb;
    border-bottom: 0.1rem solid #d69d00cb;
    padding-top: 0.5rem;
  }

  .desc {
    display: flex;
    align-items: center;
  }
  .descTitle {
    width: 100%;
    font-size: 1.5rem;
    color: rgb(255, 196, 0);
  }

  .wrapper {
    position: relative;
    display: flex;
    width: 80%;
    max-width: 850px;
    min-width: 270px;
    border: 1px solid rgb(36, 44, 54);
    margin: 1.57143%;
    padding: 1.57143%;
  }

  .patch-change-block {
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 0px;
  }

  h3 {
    display: block;
    font-size: 0.9rem;
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: #ffcc00;
    font-size: 1rem;
  }

  hr {
    box-sizing: content-box;
    height: 0px;
    overflow: visible;
    margin-left: 4.14286%;
  }

  blockquote {
    display: block;
    width: 90%;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 10px;
    margin-inline-end: 10px;
  }

  .attribute-change {
    margin-left: 5%;
    margin: 4px 4.14286% 4px 14.2857%;
  }
  .attribute {
    color: rgb(134, 134, 134);
  }
  .attribute-before {
    color: rgb(134, 134, 134);
    text-decoration: line-through;
  }
  .attribute .attribute-before .attribute-change {
    font-size: 0.75rem;
    line-height: 1.6;
  }

  .divider {
    border: 0.5px solid rgb(0, 0, 0);
    margin: 10px 0px;
  }

  .change-detail-title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 1%;
    font-size: 0.875rem;
  }

  .patch-change-block .change-detail-title {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: 1.5px;
    padding-top: 0px;
    margin-left: 4.14286%;
  }

  .change-detail-title img {
    width: 3.8%;
    margin-right: 2.5%;
  }

  .patch-change-block {
    position: relative;
  }

  .reference-link {
    display: block;
    position: relative;
    top: 0px;
    left: 0px;
    width: 10.7143%;
    min-width: 60px;
  }
  .reference-link img {
    width: 30px;
  }

  .white-stone > div {
  }

  .aceent-before > div {
    width: 80%;
  }

  .updatedItem {
    display: flex;
    justify-content: center;
  }

  .itemContent {
    width: 90%;
    max-width: 1500px;
    padding: 1rem 0;
  }

  @media (min-width: 480px) and (max-width: 909px) {
    padding-top: 15rem;
  }
`;
