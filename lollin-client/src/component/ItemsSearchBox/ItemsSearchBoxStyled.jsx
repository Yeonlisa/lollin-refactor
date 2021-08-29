import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  background-color: transparent;
  margin-top: 25px;

  .champSearchForm {
    position: relative;
    width: 280px;
    max-width: 250px;
    border-radius: 2px;
    background-color: transparent;
  }

  .champSearchInput {
    display: block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: none;
    border: none;
    line-height: 17px;
    font-size: 0.86rem;
    color: white;
    box-sizing: border-box;
    outline: 0;
    border-bottom: 1px solid #ffc400;

    &:focus::-webkit-input-placeholder {
      font-size: 0rem;
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 1px;
  }
`;